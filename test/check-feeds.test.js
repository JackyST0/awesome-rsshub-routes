const assert = require('node:assert/strict');
const fs = require('node:fs');
const http = require('node:http');
const os = require('node:os');
const path = require('node:path');
const test = require('node:test');
const zlib = require('node:zlib');

const {
  checkUrl,
  classifyResponse,
  createProxyAgent,
  createOriginLimiter,
  extractFeedsFromOPML,
  requestFeed,
} = require('../scripts/check-feeds');

const RSS = '<?xml version="1.0"?><rss version="2.0"><channel><title>Test</title></channel></rss>';

function startServer(handler) {
  return new Promise((resolve) => {
    const server = http.createServer(handler);
    server.listen(0, '127.0.0.1', () => {
      resolve({
        server,
        url: `http://127.0.0.1:${server.address().port}`,
      });
    });
  });
}

test('extracts OPML feeds regardless of attribute order', () => {
  const directory = fs.mkdtempSync(path.join(os.tmpdir(), 'feeds-'));
  const opmlPath = path.join(directory, 'feeds.opml');
  fs.writeFileSync(
    opmlPath,
    '<?xml version="1.0"?><opml><body><outline title="Category"><outline xmlUrl="https://example.com/feed.xml" title="Example"/></outline></body></opml>'
  );

  assert.deepEqual(extractFeedsFromOPML(opmlPath), [
    { name: 'Example', url: 'https://example.com/feed.xml' },
  ]);
  fs.rmSync(directory, { recursive: true });
});

test('rejects an OPML document without feeds', () => {
  const directory = fs.mkdtempSync(path.join(os.tmpdir(), 'feeds-'));
  const opmlPath = path.join(directory, 'feeds.opml');
  fs.writeFileSync(opmlPath, '<?xml version="1.0"?><opml><body/></opml>');

  assert.throws(() => extractFeedsFromOPML(opmlPath), /未解析到任何/);
  fs.rmSync(directory, { recursive: true });
});

test('follows redirects and validates the final RSS document', async () => {
  const { server, url } = await startServer((request, response) => {
    if (request.url === '/redirect') {
      response.writeHead(302, { Location: '/feed' });
      response.end();
      return;
    }
    response.writeHead(200, { 'Content-Type': 'application/rss+xml' });
    response.end(RSS);
  });

  const result = await checkUrl(`${url}/redirect`, { timeout: 1000, retryDelay: 0 });
  assert.equal(result.status, 'valid');
  assert.equal(result.finalUrl, `${url}/feed`);
  server.close();
});

test('marks a successful non-feed response as invalid', async () => {
  const { server, url } = await startServer((_request, response) => {
    response.writeHead(200, { 'Content-Type': 'text/html' });
    response.end('<html><body>Not a feed</body></html>');
  });

  const result = await checkUrl(`${url}/page`, { timeout: 1000, retryDelay: 0 });
  assert.equal(result.status, 'invalid');
  assert.match(result.error, /not valid RSS or Atom/);
  server.close();
});

test('retries a limited response once', async () => {
  let attempts = 0;
  const request = async () => {
    attempts += 1;
    return attempts === 1
      ? { statusCode: 429, finalUrl: 'https://example.com/feed' }
      : { statusCode: 200, body: RSS, finalUrl: 'https://example.com/feed' };
  };

  const result = await checkUrl('https://example.com/feed', { request, retryDelay: 0 });
  assert.equal(attempts, 2);
  assert.equal(result.status, 'valid');
});

test('treats TLS certificate errors as invalid', () => {
  const result = classifyResponse({
    statusCode: null,
    error: 'CERT_HAS_EXPIRED',
    finalUrl: 'https://example.com/feed',
  });

  assert.equal(result.status, 'invalid');
  assert.match(result.error, /TLS CERT_HAS_EXPIRED/);
});

test('proxy agent reads standard proxy environment variables', () => {
  const previousUpper = process.env.HTTPS_PROXY;
  const previousLower = process.env.https_proxy;
  process.env.HTTPS_PROXY = 'http://127.0.0.1:8123';
  process.env.https_proxy = 'http://127.0.0.1:8123';
  const agent = createProxyAgent();

  assert.equal(agent.getProxyForUrl('https://example.com/feed'), 'http://127.0.0.1:8123');

  if (previousUpper === undefined) {
    delete process.env.HTTPS_PROXY;
  } else {
    process.env.HTTPS_PROXY = previousUpper;
  }
  if (previousLower === undefined) {
    delete process.env.https_proxy;
  } else {
    process.env.https_proxy = previousLower;
  }
});

test('origin limiter spaces requests to the same origin', async () => {
  const limit = createOriginLimiter(20);
  await limit('https://example.com/first');

  const started = Date.now();
  await limit('https://another.example/first');
  assert.ok(Date.now() - started < 10);

  await limit('https://example.com/second');
  assert.ok(Date.now() - started >= 15);
});

test('requestFeed exposes a valid RSS response', async () => {
  const { server, url } = await startServer((_request, response) => {
    response.writeHead(200, { 'Content-Type': 'application/rss+xml' });
    response.end(RSS);
  });

  const response = await requestFeed(`${url}/feed`, { timeout: 1000 });
  assert.equal(response.statusCode, 200);
  assert.equal(response.body, RSS);
  server.close();
});

test('requestFeed decodes compressed RSS responses', async () => {
  const { server, url } = await startServer((_request, response) => {
    response.writeHead(200, {
      'Content-Encoding': 'gzip',
      'Content-Type': 'application/rss+xml',
    });
    response.end(zlib.gzipSync(RSS));
  });

  const result = await checkUrl(`${url}/feed`, { timeout: 1000, retryDelay: 0 });
  assert.equal(result.status, 'valid');
  server.close();
});
