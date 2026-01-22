const fs = require('fs');
const https = require('https');
const http = require('http');

// 从 OPML 文件提取所有 RSS 链接
function extractFeedsFromOPML(opmlPath) {
  const content = fs.readFileSync(opmlPath, 'utf8');
  const feeds = [];
  
  // 匹配所有 outline 标签中的 xmlUrl 和 text
  const regex = /<outline[^>]*text="([^"]*)"[^>]*xmlUrl="([^"]*)"/g;
  let match;
  
  while ((match = regex.exec(content)) !== null) {
    feeds.push({
      name: match[1],
      url: match[2]
    });
  }
  
  return feeds;
}

// 检查单个 URL 是否可访问
function checkUrl(url, timeout = 15000) {
  return new Promise((resolve) => {
    const protocol = url.startsWith('https') ? https : http;
    
    const req = protocol.get(url, {
      timeout: timeout,
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; RSS-Feed-Checker/1.0)'
      }
    }, (res) => {
      // 2xx 和 3xx 都算成功
      const valid = res.statusCode >= 200 && res.statusCode < 400;
      resolve({
        valid,
        statusCode: res.statusCode,
        error: valid ? null : `HTTP ${res.statusCode}`
      });
    });
    
    req.on('error', (err) => {
      resolve({
        valid: false,
        statusCode: null,
        error: err.message
      });
    });
    
    req.on('timeout', () => {
      req.destroy();
      resolve({
        valid: false,
        statusCode: null,
        error: 'Timeout'
      });
    });
  });
}

// 延迟函数
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// 主函数
async function main() {
  console.log('🔍 开始检测 RSS 订阅源...\n');
  
  const opmlPath = './feeds.opml';
  
  if (!fs.existsSync(opmlPath)) {
    console.error('❌ 找不到 feeds.opml 文件');
    process.exit(1);
  }
  
  const feeds = extractFeedsFromOPML(opmlPath);
  console.log(`📋 共找到 ${feeds.length} 个订阅源\n`);
  
  const results = [];
  let validCount = 0;
  let invalidCount = 0;
  
  for (let i = 0; i < feeds.length; i++) {
    const feed = feeds[i];
    process.stdout.write(`[${i + 1}/${feeds.length}] 检测 ${feed.name}... `);
    
    const result = await checkUrl(feed.url);
    
    if (result.valid) {
      console.log(`✅ OK (${result.statusCode})`);
      validCount++;
    } else {
      console.log(`❌ 失败 (${result.error})`);
      invalidCount++;
    }
    
    results.push({
      name: feed.name,
      url: feed.url,
      valid: result.valid,
      statusCode: result.statusCode,
      error: result.error
    });
    
    // 避免请求过快
    await delay(500);
  }
  
  // 生成报告
  const report = {
    checkTime: new Date().toISOString(),
    total: feeds.length,
    valid: validCount,
    invalid: invalidCount,
    successRate: `${((validCount / feeds.length) * 100).toFixed(1)}%`,
    feeds: results
  };
  
  // 保存结果
  fs.writeFileSync('feed-status.json', JSON.stringify(report, null, 2));
  
  console.log('\n' + '='.repeat(50));
  console.log(`📊 检测完成！`);
  console.log(`   ✅ 可用: ${validCount}`);
  console.log(`   ❌ 失效: ${invalidCount}`);
  console.log(`   📈 成功率: ${report.successRate}`);
  console.log('='.repeat(50));
  
  // 如果有失效链接，列出来
  if (invalidCount > 0) {
    console.log('\n⚠️ 失效链接列表:');
    results.filter(r => !r.valid).forEach(r => {
      console.log(`   - ${r.name}: ${r.error}`);
    });
    
    // 设置退出码为 1，触发 GitHub Actions 的失败处理
    process.exit(1);
  }
}

main().catch(err => {
  console.error('脚本执行出错:', err);
  process.exit(1);
});
