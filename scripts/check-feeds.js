const fs = require('fs');
const http = require('http');
const https = require('https');
const { promisify } = require('util');
const zlib = require('zlib');
const { XMLParser, XMLValidator } = require('fast-xml-parser');
const { ProxyAgent } = require('proxy-agent');

const DEFAULT_TIMEOUT = Number(process.env.FEED_CHECK_TIMEOUT_MS || 15000);
const DEFAULT_CONCURRENCY = Number(process.env.FEED_CHECK_CONCURRENCY || 5);
const DEFAULT_DELAY = Number(process.env.FEED_CHECK_DELAY_MS || 250);
const MAX_REDIRECTS = 5;
const MAX_BODY_BYTES = 5 * 1024 * 1024;
const REDIRECT_CODES = new Set([301, 302, 303, 307, 308]);
const LIMITED_STATUS_CODES = new Set([401, 403, 405, 408, 415, 429]);
const RETRYABLE_ERROR_CODES = new Set([
  'ECONNABORTED',
  'ECONNREFUSED',
  'ECONNRESET',
  'EAI_AGAIN',
  'ENETUNREACH',
  'ETIMEDOUT',
]);
const TLS_ERROR_CODES = new Set([
  'CERT_HAS_EXPIRED',
  'DEPTH_ZERO_SELF_SIGNED_CERT',
  'ERR_TLS_CERT_ALTNAME_INVALID',
  'SELF_SIGNED_CERT_IN_CHAIN',
  'UNABLE_TO_GET_ISSUER_CERT_LOCALLY',
  'UNABLE_TO_VERIFY_LEAF_SIGNATURE',
]);

const parser = new XMLParser({
  attributeNamePrefix: '@_',
  ignoreAttributes: false,
  trimValues: true,
});
const gunzip = promisify(zlib.gunzip);
const inflate = promisify(zlib.inflate);
const brotliDecompress = promisify(zlib.brotliDecompress);

function asArray(value) {
  if (value === undefined || value === null) {
    return [];
  }
  return Array.isArray(value) ? value : [value];
}

function collectOutlines(outline, feeds) {
  for (const item of asArray(outline)) {
    if (item['@_xmlUrl']) {
      feeds.push({
        name: item['@_text'] || item['@_title'] || item['@_xmlUrl'],
        url: item['@_xmlUrl'],
      });
    }
    collectOutlines(item.outline, feeds);
  }
}

// 从 OPML 文件提取所有 RSS 链接
function extractFeedsFromOPML(opmlPath) {
  const content = fs.readFileSync(opmlPath, 'utf8');
  const validation = XMLValidator.validate(content);

  if (validation !== true) {
    throw new Error(`OPML XML 无效: ${validation.err.msg}`);
  }

  const opml = parser.parse(content);
  const feeds = [];
  collectOutlines(opml?.opml?.body?.outline, feeds);

  if (feeds.length === 0) {
    throw new Error('OPML 中未解析到任何带 xmlUrl 属性的订阅源');
  }

  return feeds;
}

function createProxyAgent() {
  return new ProxyAgent();
}

function isFeedDocument(body) {
  const validation = XMLValidator.validate(body);

  if (validation !== true) {
    return false;
  }

  const document = parser.parse(body);
  return Boolean(document.rss || document.feed || document['rdf:RDF']);
}

async function decodeBody(body, contentEncoding) {
  const encoding = (contentEncoding || '').toLowerCase();

  if (encoding === 'gzip' || encoding === 'x-gzip') {
    return gunzip(body);
  }
  if (encoding === 'deflate') {
    return inflate(body);
  }
  if (encoding === 'br') {
    return brotliDecompress(body);
  }
  return body;
}

function requestFeed(url, { timeout = DEFAULT_TIMEOUT, redirects = 0, agent = createProxyAgent() } = {}) {
  return new Promise((resolve) => {
    const protocol = url.startsWith('https:') ? https : http;
    const options = {
      agent,
      headers: {
        Accept: 'application/rss+xml, application/atom+xml, application/xml, text/xml, */*',
        'Accept-Language': 'zh-CN,zh;q=0.9,en;q=0.8',
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/139.0.0.0 Safari/537.36',
      },
      timeout,
    };

    const req = protocol.get(url, options, (res) => {
      const statusCode = res.statusCode || 0;

      if (REDIRECT_CODES.has(statusCode)) {
        const location = res.headers.location;
        res.resume();

        if (!location) {
          resolve({ statusCode, error: `HTTP ${statusCode} without Location`, finalUrl: url });
          return;
        }
        if (redirects >= MAX_REDIRECTS) {
          resolve({ statusCode, error: `Too many redirects (>${MAX_REDIRECTS})`, finalUrl: url });
          return;
        }

        requestFeed(new URL(location, url).toString(), {
          timeout,
          redirects: redirects + 1,
          agent,
        }).then(resolve);
        return;
      }

      const chunks = [];
      let size = 0;
      res.on('data', (chunk) => {
        size += chunk.length;
        if (size <= MAX_BODY_BYTES) {
          chunks.push(chunk);
        }
      });
      res.on('end', async () => {
        if (size > MAX_BODY_BYTES) {
          resolve({ statusCode, error: `Feed exceeds ${MAX_BODY_BYTES} bytes`, finalUrl: url });
          return;
        }
        try {
          const body = await decodeBody(Buffer.concat(chunks), res.headers['content-encoding']);
          resolve({
            statusCode,
            body: body.toString('utf8'),
            finalUrl: url,
          });
        } catch (error) {
          resolve({
            statusCode,
            error: `Unable to decode ${res.headers['content-encoding']}: ${error.code || error.message}`,
            finalUrl: url,
          });
        }
      });
    });

    req.on('error', (error) => {
      resolve({
        statusCode: null,
        error: error.code || error.message,
        finalUrl: url,
      });
    });

    req.on('timeout', () => {
      req.destroy(Object.assign(new Error('Timeout'), { code: 'ETIMEDOUT' }));
    });
  });
}

function isTlsError(error) {
  return TLS_ERROR_CODES.has(error);
}

function toResult(status, statusCode, error, finalUrl) {
  return {
    status,
    valid: status === 'valid',
    limited: status === 'limited',
    statusCode,
    error: error || null,
    finalUrl,
  };
}

function classifyResponse(response) {
  const { statusCode, body, error, finalUrl } = response;

  if (error) {
    if (isTlsError(error)) {
      return toResult('invalid', statusCode, `TLS ${error}`, finalUrl);
    }
    if (RETRYABLE_ERROR_CODES.has(error) || error === 'Timeout') {
      return toResult('limited', statusCode, error, finalUrl);
    }
    return toResult('limited', statusCode, error, finalUrl);
  }

  if (statusCode >= 200 && statusCode < 300) {
    if (isFeedDocument(body)) {
      return toResult('valid', statusCode, null, finalUrl);
    }
    return toResult('invalid', statusCode, 'Response is not valid RSS or Atom XML', finalUrl);
  }

  if (statusCode === 404 || statusCode === 410) {
    return toResult('invalid', statusCode, `HTTP ${statusCode}`, finalUrl);
  }

  if (LIMITED_STATUS_CODES.has(statusCode) || statusCode >= 500) {
    return toResult('limited', statusCode, `HTTP ${statusCode}`, finalUrl);
  }

  return toResult('invalid', statusCode, `HTTP ${statusCode}`, finalUrl);
}

// 检查单个 URL 是否可访问（带一次重试）
async function checkUrl(url, options = {}) {
  const request = options.request || requestFeed;
  const first = classifyResponse(await request(url, options));

  if (first.status !== 'limited') {
    return first;
  }

  await delay(Number(options.retryDelay ?? 1000));
  return classifyResponse(await request(url, options));
}

// 延迟函数
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// 主函数
async function runPool(items, worker, concurrency) {
  const results = new Array(items.length);
  let nextIndex = 0;

  async function runWorker() {
    while (nextIndex < items.length) {
      const index = nextIndex++;
      results[index] = await worker(items[index], index);
    }
  }

  await Promise.all(Array.from({ length: Math.min(concurrency, items.length) }, runWorker));
  return results;
}

function createOriginLimiter(minDelay = DEFAULT_DELAY) {
  const nextAllowedAt = new Map();

  return async (url) => {
    const origin = new URL(url).origin;
    const now = Date.now();
    const next = nextAllowedAt.get(origin) || now;
    const wait = Math.max(0, next - now);
    nextAllowedAt.set(origin, Math.max(now, next) + minDelay);

    if (wait > 0) {
      await delay(wait);
    }
  };
}

async function main() {
  console.log('🔍 开始检测 RSS 订阅源...\n');
  
  const opmlPath = './feeds.opml';
  
  if (!fs.existsSync(opmlPath)) {
    console.error('❌ 找不到 feeds.opml 文件');
    process.exit(1);
  }
  
  const feeds = extractFeedsFromOPML(opmlPath);
  const waitForOrigin = createOriginLimiter();
  console.log(`📋 共找到 ${feeds.length} 个订阅源\n`);
  
  const results = await runPool(
    feeds,
    async (feed, index) => {
      await waitForOrigin(feed.url);
      const result = await checkUrl(feed.url);
      const output = {
        name: feed.name,
        url: feed.url,
        ...result,
      };
      const marker = result.status === 'valid' ? '✅ OK' : result.status === 'limited' ? '⚠️ 受限' : '❌ 失败';
      console.log(`[${index + 1}/${feeds.length}] ${feed.name}... ${marker} (${result.statusCode || result.error})`);
      return output;
    },
    DEFAULT_CONCURRENCY
  );

  const validCount = results.filter((result) => result.valid).length;
  const limitedCount = results.filter((result) => result.limited).length;
  const invalidCount = results.filter((result) => result.status === 'invalid').length;
  
  // 生成北京时间 (UTC+8)
  const now = new Date();
  const beijingTime = new Date(now.getTime() + 8 * 60 * 60 * 1000);
  const checkTimeStr = beijingTime.toISOString().replace('T', ' ').substring(0, 19) + ' (北京时间)';
  
  // 生成报告
  const report = {
    checkTime: checkTimeStr,
    total: feeds.length,
    valid: validCount,
    limited: limitedCount,
    invalid: invalidCount,
    successRate: `${((validCount / feeds.length) * 100).toFixed(1)}%`,
    feeds: results
  };
  
  // 保存结果
  fs.writeFileSync('feed-status.json', JSON.stringify(report, null, 2));
  
  console.log('\n' + '='.repeat(50));
  console.log(`📊 检测完成！`);
  console.log(`   ✅ 可用: ${validCount}`);
  console.log(`   ⚠️ 受限: ${limitedCount}`);
  console.log(`   ❌ 失效: ${invalidCount}`);
  console.log(`   📈 成功率: ${report.successRate}`);
  console.log('='.repeat(50));

  if (limitedCount > 0) {
    console.log('\n⚠️ 受限链接列表:');
    results.filter(r => r.status === 'limited').forEach(r => {
      console.log(`   - ${r.name}: ${r.error}`);
    });
  }
  
  // 如果有失效链接，列出来
  if (invalidCount > 0) {
    console.log('\n⚠️ 失效链接列表:');
    results.filter(r => r.status === 'invalid').forEach(r => {
      console.log(`   - ${r.name}: ${r.error}`);
    });
    
    // 设置退出码为 1，触发 GitHub Actions 的失败处理
    process.exit(1);
  }
}

if (require.main === module) {
  main().catch((error) => {
    console.error('脚本执行出错:', error);
    process.exit(1);
  });
}

module.exports = {
  checkUrl,
  classifyResponse,
  createProxyAgent,
  createOriginLimiter,
  decodeBody,
  extractFeedsFromOPML,
  isFeedDocument,
  requestFeed,
  runPool,
};
