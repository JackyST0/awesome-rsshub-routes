# 贡献指南

感谢你对本项目的关注！欢迎提交 PR 添加更多实用的 RSSHub 路由。

## 如何贡献

### 1. Fork 仓库

点击右上角的 Fork 按钮，将仓库 Fork 到你的账号下。

### 2. 克隆到本地

```bash
git clone https://github.com/你的用户名/awesome-rsshub-routes.git
cd awesome-rsshub-routes
```

### 3. 创建新分支

```bash
git checkout -b add-new-routes
```

### 4. 添加路由

在 `README.md` 中对应的分类下添加路由，格式如下：

```markdown
| 名称 | `/路由/路径/:参数` | 简短说明 |
```

**示例：**

```markdown
| 微博热搜 | `/weibo/search/hot` | 实时微博热搜榜 |
```

### 5. 提交更改

```bash
git add .
git commit -m "feat: 添加 XXX 路由"
git push origin add-new-routes
```

### 6. 创建 Pull Request

在 GitHub 上创建 Pull Request，描述你添加的路由。

## 路由要求

- ✅ 路由必须是 RSSHub 官方支持的
- ✅ 路由必须实际可用（建议先测试）
- ✅ 说明简洁明了
- ✅ 放在正确的分类下

## 分类说明

### 官方 RSS 订阅

| 分类 | 内容 |
|------|------|
| AI 专题 | OpenAI、DeepMind、arXiv 等 AI 相关 |
| 技术社区 | LinuxDo、V2EX、Hacker News、GitHub 等 |
| 新闻资讯 | IT之家、知乎等 |
| 科技媒体 | TechCrunch、The Verge、Wired 等 |
| 安全资讯 | FreeBuf、安全客、Krebs on Security 等 |
| 前端 & 设计 | Smashing Magazine、Dribbble、Codrops 等 |
| 编程语言官方博客 | React、Vue、Rust、Go、Python 等 |
| 大厂技术博客 | GitHub、Netflix、AWS、Cloudflare 等 |
| 学术论文 | Nature、arXiv 等 |

### RSSHub 路由

| 分类 | 内容 |
|------|------|
| 社交媒体 | 微博、知乎、小红书、抖音等 |
| 技术社区 | GitHub Trending、掘金、CSDN 等 |
| 新闻热榜 | 头条、百度、36氪等 |
| 视频平台 | B站、豆瓣电影等 |
| 购物优惠 | 什么值得买等 |

## 问题反馈

如果发现路由失效或有其他问题，欢迎提交 Issue。

感谢你的贡献！🎉
