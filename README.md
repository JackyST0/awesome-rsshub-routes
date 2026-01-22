# 🎯 Awesome RSSHub Routes

[![Awesome](https://awesome.re/badge.svg)](https://awesome.re)
[![GitHub stars](https://img.shields.io/github/stars/JackyST0/awesome-rsshub-routes?style=social)](https://github.com/JackyST0/awesome-rsshub-routes)
[![License](https://img.shields.io/github/license/JackyST0/awesome-rsshub-routes)](LICENSE)

> 🔥 精选 RSS 订阅源推荐，包含 RSSHub 路由和官方 RSS，让你的阅读更高效！

本项目收集整理了**最实用、最常用**的 RSS 订阅源，包括：
- 📡 **官方 RSS** - 网站自带的 RSS 订阅
- 🔧 **RSSHub 路由** - 通过 [RSSHub](https://github.com/DIYgod/RSSHub) 生成的 RSS

🌐 **RSSHub 官方文档**：https://docs.rsshub.app

📥 **一键导入**：下载 [feeds.opml](./feeds.opml) 文件，导入到你的 RSS 阅读器即可订阅全部精选源！

---

## 📚 目录

- [📡 官方 RSS 订阅](#-官方-rss-订阅)
  - [🤖 AI 专题](#-ai-专题)
  - [💻 技术社区](#-技术社区)
  - [📰 新闻资讯](#-新闻资讯)
  - [🌐 科技媒体](#-科技媒体)
  - [🛡️ 安全资讯](#️-安全资讯)
  - [🎨 前端 & 设计](#-前端--设计)
  - [📦 编程语言官方博客](#-编程语言官方博客)
  - [🏢 大厂技术博客](#-大厂技术博客)
- [🔧 RSSHub 路由](#-rsshub-路由)
  - [社交媒体](#-社交媒体)
  - [技术社区](#-技术社区-1)
  - [新闻热榜](#-新闻热榜)
  - [视频平台](#-视频平台)
  - [购物优惠](#-购物优惠)
- [🔌 RSS 工具生态](#-rss-工具生态)
- [📖 使用教程](#-使用教程)

---

## 📡 官方 RSS 订阅

> 以下网站自带 RSS 功能，无需 RSSHub，直接订阅即可

### 🤖 AI 专题

> AI 公司博客、论文、工具更新

#### AI 公司博客

| 名称 | 订阅地址 | 说明 |
|------|----------|------|
| OpenAI 博客 | `https://openai.com/news/rss.xml` | GPT 官方动态 |
| Google DeepMind | `https://deepmind.google/blog/rss.xml` | DeepMind 研究 |

#### AI 论文 & 资讯

| 名称 | 订阅地址 | 说明 |
|------|----------|------|
| arXiv AI | `https://rss.arxiv.org/rss/cs.AI` | AI 论文预印本 |
| arXiv 机器学习 | `https://rss.arxiv.org/rss/cs.LG` | 机器学习论文 |
| arXiv NLP | `https://rss.arxiv.org/rss/cs.CL` | 自然语言处理 |
| Hacker News AI | `https://hnrss.org/newest?q=AI` | HN AI 相关 |
| Hacker News LLM | `https://hnrss.org/newest?q=LLM` | HN 大模型相关 |

#### AI 工具 & 产品

| 名称 | 订阅地址 | 说明 |
|------|----------|------|
| Hugging Face 博客 | `https://huggingface.co/blog/feed.xml` | 开源 AI 社区 |
| Stability AI | `https://stability.ai/news?format=rss` | Stable Diffusion |

---

### 💻 技术社区

#### LinuxDo 社区

基于 Discourse 搭建，原生支持 RSS。

| 名称 | 订阅地址 | 说明 |
|------|----------|------|
| 最新话题 | `https://linux.do/latest.rss` | 社区最新话题 |
| 热门话题 | `https://linux.do/top.rss` | 热门讨论 |
| 最新帖子 | `https://linux.do/posts.rss` | 所有新帖 |

> 💡 分类订阅：`https://linux.do/c/分类名/分类ID.rss`  
> 💡 标签订阅：`https://linux.do/tag/标签名.rss`

#### V2EX

| 名称 | 订阅地址 | 说明 |
|------|----------|------|
| 最热主题 | `https://www.v2ex.com/feed/tab/hot.xml` | 今日热门 |
| 最新主题 | `https://www.v2ex.com/feed/tab/all.xml` | 全站最新 |
| 技术节点 | `https://www.v2ex.com/feed/tab/tech.xml` | 技术讨论 |
| 创意节点 | `https://www.v2ex.com/feed/tab/creative.xml` | 创意分享 |
| 好玩节点 | `https://www.v2ex.com/feed/tab/play.xml` | 好玩内容 |

#### Hacker News

| 名称 | 订阅地址 | 说明 |
|------|----------|------|
| 首页 | `https://hnrss.org/frontpage` | 首页热门 |
| 最新 | `https://hnrss.org/newest` | 最新提交 |
| 最佳 | `https://hnrss.org/best` | 最佳文章 |
| Ask HN | `https://hnrss.org/ask` | 问答帖 |
| Show HN | `https://hnrss.org/show` | 项目展示 |

#### GitHub

| 名称 | 订阅地址 | 说明 |
|------|----------|------|
| 仓库 Release | `https://github.com/用户名/仓库名/releases.atom` | 版本发布 |
| 仓库 Commits | `https://github.com/用户名/仓库名/commits.atom` | 提交记录 |
| 仓库 Tags | `https://github.com/用户名/仓库名/tags.atom` | 标签更新 |

> 示例：`https://github.com/DIYgod/RSSHub/releases.atom`

#### 少数派

| 名称 | 订阅地址 | 说明 |
|------|----------|------|
| 首页 | `https://sspai.com/feed` | 首页文章 |

#### 阮一峰博客

| 名称 | 订阅地址 | 说明 |
|------|----------|------|
| 科技爱好者周刊 | `https://www.ruanyifeng.com/blog/atom.xml` | 技术周刊 |

---

### 📰 新闻资讯

#### IT之家

> 感谢 [@tangikudo](https://linux.do) 提供

| 名称 | 订阅地址 | 说明 |
|------|----------|------|
| IT之家 | `https://www.ithome.com/rss/` | IT 资讯全文 |

> 💡 建议在 RSS 阅读器中配置标题关键词过滤去广告

#### 知乎

| 名称 | 订阅地址 | 说明 |
|------|----------|------|
| 知乎日报 | `https://feeds.feedburner.com/zhihu-daily` | 每日精选 |

---

### 🌐 科技媒体

> 国内外知名科技媒体官方 RSS

#### 国际科技媒体

| 名称 | 订阅地址 | 说明 |
|------|----------|------|
| TechCrunch | `https://techcrunch.com/feed/` | 硅谷科技新闻 |
| The Verge | `https://www.theverge.com/rss/index.xml` | 科技与文化 |
| Wired | `https://www.wired.com/feed/rss` | 连线杂志 |
| Ars Technica | `https://feeds.arstechnica.com/arstechnica/index` | 深度技术分析 |
| MIT Technology Review | `https://www.technologyreview.com/feed/` | 麻省理工科技评论 |

---

### 🛡️ 安全资讯

> 网络安全、漏洞、威胁情报

| 名称 | 订阅地址 | 说明 |
|------|----------|------|
| Krebs on Security | `https://krebsonsecurity.com/feed/` | 知名安全博客 |
| The Hacker News | `https://feeds.feedburner.com/TheHackersNews` | 黑客新闻 |
| Schneier on Security | `https://www.schneier.com/feed/` | 安全专家博客 |
| FreeBuf | `https://www.freebuf.com/feed` | 国内安全资讯 |
| 安全客 | `https://api.anquanke.com/data/v1/rss` | 安全技术资讯 |

---

### 🎨 前端 & 设计

> 前端开发、UI/UX 设计资讯

| 名称 | 订阅地址 | 说明 |
|------|----------|------|
| Smashing Magazine | `https://www.smashingmagazine.com/feed/` | 前端设计杂志 |
| A List Apart | `https://alistapart.com/main/feed/` | Web 标准与设计 |
| Codrops | `https://tympanus.net/codrops/feed/` | 创意前端效果 |
| CSS-Tricks | `https://css-tricks.com/feed/` | CSS 技巧教程 |
| Dev.to | `https://dev.to/feed` | 开发者社区 |
| Chrome Developer Blog | `https://developer.chrome.com/blog/feed.xml` | Chrome 开发博客 |

#### 设计灵感

| 名称 | 订阅地址 | 说明 |
|------|----------|------|
| Dribbble Popular | `https://dribbble.com/shots/popular.rss` | 设计作品精选 |
| Product Hunt | `https://www.producthunt.com/feed` | 新产品发现 |

---

### 📦 编程语言官方博客

> 各编程语言官方动态、版本发布

| 名称 | 订阅地址 | 说明 |
|------|----------|------|
| React Blog | `https://react.dev/rss.xml` | React 官方博客 |
| Vue Blog | `https://blog.vuejs.org/feed.rss` | Vue.js 官方博客 |
| Rust Blog | `https://blog.rust-lang.org/feed.xml` | Rust 官方博客 |
| Go Blog | `https://go.dev/blog/feed.atom` | Go 官方博客 |
| Python Blog | `https://blog.python.org/feeds/posts/default` | Python 官方博客 |
| Node.js Blog | `https://nodejs.org/en/feed/blog.xml` | Node.js 官方博客 |
| TypeScript Blog | `https://devblogs.microsoft.com/typescript/feed/` | TypeScript 官方博客 |

---

### 🏢 大厂技术博客

> 科技公司工程团队技术分享

| 名称 | 订阅地址 | 说明 |
|------|----------|------|
| GitHub Blog | `https://github.blog/feed/` | GitHub 官方博客 |
| Netflix Tech Blog | `https://netflixtechblog.com/feed` | Netflix 技术博客 |
| AWS Blog | `https://aws.amazon.com/blogs/aws/feed/` | AWS 官方博客 |
| Cloudflare Blog | `https://blog.cloudflare.com/rss/` | Cloudflare 技术博客 |
| Mozilla Hacks | `https://hacks.mozilla.org/feed/` | Mozilla 开发者博客 |
| Vercel Blog | `https://vercel.com/atom` | Vercel 官方博客 |
| Supabase Blog | `https://supabase.com/blog/rss.xml` | Supabase 官方博客 |

---

### 📚 学术论文

> 学术期刊、预印本论文

| 名称 | 订阅地址 | 说明 |
|------|----------|------|
| Nature | `https://www.nature.com/nature.rss` | Nature 期刊 |
| arXiv 计算机视觉 | `https://rss.arxiv.org/rss/cs.CV` | CV 论文预印本 |

> 💡 arXiv 分类订阅格式：`https://rss.arxiv.org/rss/分类代码`  
> 常用分类：`cs.AI`（人工智能）、`cs.LG`（机器学习）、`cs.CL`（NLP）、`cs.CV`（计算机视觉）

---

## 🔧 RSSHub 路由

> 以下路由需要通过 RSSHub 使用，拼接格式：`https://rsshub.app` + 路由

### 📱 社交媒体

#### 微博

| 名称 | 路由 | 说明 |
|------|------|------|
| 微博热搜 | `/weibo/search/hot` | 实时热搜榜 |
| 用户微博 | `/weibo/user/:uid` | 指定用户微博 |

#### 知乎

| 名称 | 路由 | 说明 |
|------|------|------|
| 知乎热榜 | `/zhihu/hot` | 热门话题 |
| 用户动态 | `/zhihu/people/activities/:id` | 用户动态 |
| 专栏文章 | `/zhihu/zhuanlan/:id` | 专栏更新 |

#### 抖音

| 名称 | 路由 | 说明 |
|------|------|------|
| 热搜榜 | `/douyin/hot` | 抖音热搜 |

---

### 💻 技术社区

#### GitHub（RSSHub 增强）

| 名称 | 路由 | 说明 |
|------|------|------|
| Trending 每日 | `/github/trending/daily` | 每日热门项目 |
| Trending 每周 | `/github/trending/weekly` | 每周热门项目 |
| Trending + 语言 | `/github/trending/daily/:language` | 指定语言热门 |

> 示例：`/github/trending/daily/javascript`

#### 掘金

| 名称 | 路由 | 说明 |
|------|------|------|
| 全站热榜 | `/juejin/trending/all/weekly` | 本周热门 |
| 前端热榜 | `/juejin/trending/frontend/weekly` | 前端热门 |
| 后端热榜 | `/juejin/trending/backend/weekly` | 后端热门 |

#### CSDN

| 名称 | 路由 | 说明 |
|------|------|------|
| 博客热榜 | `/csdn/blog` | 热门博客 |

---

### 📰 新闻热榜

| 名称 | 路由 | 说明 |
|------|------|------|
| 今日头条 | `/toutiao/hot` | 头条热榜 |
| 百度热搜 | `/baidu/hot` | 百度热点 |
| 36氪快讯 | `/36kr/newsflash` | 科技快讯 |

---

### 🎬 视频平台

#### Bilibili

| 名称 | 路由 | 说明 |
|------|------|------|
| UP主视频 | `/bilibili/user/video/:uid` | UP 主更新 |
| 排行榜 | `/bilibili/ranking/0/3/1` | 全站热门 |

#### 豆瓣电影

| 名称 | 路由 | 说明 |
|------|------|------|
| 正在热映 | `/douban/movie/playing` | 院线热映 |
| 即将上映 | `/douban/movie/later` | 待映电影 |

---

### 🛒 购物优惠

#### 什么值得买

| 名称 | 路由 | 说明 |
|------|------|------|
| 数码好价 | `/smzdm/ranking/pinlei/11` | 数码产品 |
| 电脑配件 | `/smzdm/ranking/pinlei/12` | 电脑外设 |
| 关键词 | `/smzdm/keyword/:keyword` | 关键词好价 |

---

## 🔌 RSS 工具生态

### 🧩 浏览器扩展

| 名称 | 平台 | 说明 |
|------|------|------|
| [RSSHub Radar](https://github.com/DIYgod/RSSHub-Radar) | Chrome / Firefox / Edge | 自动发现页面 RSSHub 路由，必装！ |
| [Feedbro](https://nodetics.com/feedbro/) | Chrome / Firefox | 浏览器内 RSS 阅读器 |
| [RSS Finder](https://github.com/nickreese/rss-finder) | Chrome | 快速发现页面 RSS |

### 🔄 RSS 工具版本追踪

> 订阅你喜欢的 RSS 工具版本更新

| 工具 | 订阅地址 | 说明 |
|------|----------|------|
| RSSHub | `https://github.com/DIYgod/RSSHub/releases.atom` | RSSHub 版本更新 |
| RSSHub Radar | `https://github.com/DIYgod/RSSHub-Radar/releases.atom` | Radar 扩展更新 |
| Fluent Reader | `https://github.com/yang991178/fluent-reader/releases.atom` | 跨平台阅读器 |
| NetNewsWire | `https://github.com/Ranchero-Software/NetNewsWire/releases.atom` | macOS/iOS 阅读器 |
| FreshRSS | `https://github.com/FreshRSS/FreshRSS/releases.atom` | 自建 RSS 服务 |

### 📚 学习资源

| 资源 | 链接 | 说明 |
|------|------|------|
| RSSHub 官方文档 | [docs.rsshub.app](https://docs.rsshub.app/) | 路由查询与部署 |
| ALL-about-RSS | [GitHub](https://github.com/AboutRSS/ALL-about-RSS) | RSS 生态大全 |
| RSS 使用指南 | [少数派](https://sspai.com/post/56391) | RSS 入门教程 |

---

## 📖 使用教程

### RSSHub 路由使用方法

1. **选择 RSSHub 实例**
   - 官方实例：`https://rsshub.app`
   - 自建实例：参考 [部署文档](https://docs.rsshub.app/deploy/)

2. **拼接订阅地址**
   ```
   实例地址 + 路由 = 订阅地址
   
   https://rsshub.app + /weibo/search/hot = https://rsshub.app/weibo/search/hot
   ```

3. **路由参数说明**
   
   路由中的 `:参数` 需要替换成实际值：
   ```
   /bilibili/user/video/:uid
                        ↓
   /bilibili/user/video/546195  ← 替换为实际 UID
   ```

### 官方 RSS 使用方法

官方 RSS 直接复制订阅地址到 RSS 阅读器即可，无需拼接。

---

## 📖 推荐 RSS 阅读器

| 名称 | 平台 | 特点 |
|------|------|------|
| [Feedly](https://feedly.com/) | Web | 老牌阅读器，免费版够用 |
| [Inoreader](https://www.inoreader.com/) | Web / App | 功能强大 |
| [NetNewsWire](https://netnewswire.com/) | macOS / iOS | 原生免费 |
| [Fluent Reader](https://github.com/yang991178/fluent-reader) | 跨平台 | 开源现代 |
| [Follow](https://follow.is/) | 跨平台 | 新一代 AI |
| [FreshRSS](https://freshrss.org/) | Self-hosted | 开源自建 |

---

## 🤝 贡献指南

欢迎提交 PR 添加更多实用订阅源！

1. Fork 本仓库
2. 添加订阅源信息
3. 提交 Pull Request

---

## 📜 相关资源

- [RSSHub 官方文档](https://docs.rsshub.app/)
- [RSSHub GitHub](https://github.com/DIYgod/RSSHub)

---

## ⭐ Star History

如果这个项目对你有帮助，请给个 Star ⭐ 支持一下！

[![Star History Chart](https://api.star-history.com/svg?repos=JackyST0/awesome-rsshub-routes&type=Date)](https://star-history.com/#JackyST0/awesome-rsshub-routes&Date)

---

## 📄 License

MIT © [JackyST0](https://github.com/JackyST0)

