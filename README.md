# Awesome RSSHub Routes

[![GitHub stars](https://img.shields.io/github/stars/JackyST0/awesome-rsshub-routes?style=social)](https://github.com/JackyST0/awesome-rsshub-routes)
[![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)](https://creativecommons.org/publicdomain/zero/1.0/)
[![Check Feeds](https://github.com/JackyST0/awesome-rsshub-routes/actions/workflows/check-feeds.yml/badge.svg)](https://github.com/JackyST0/awesome-rsshub-routes/actions/workflows/check-feeds.yml)

<p align="center">
  <img src="assets/banner.svg" alt="Awesome RSSHub Routes" width="100%">
</p>

[中文](./readme-zh.md) | **English**

> A practical directory of official RSS feeds and RSSHub routes, with online browsing, OPML import, and feed health checks.

🌐 **Browse Online**: **https://jackyst0.github.io/awesome-rsshub-routes/** - Search, filter, and copy the official feeds available in `feeds.opml`
📥 **One-Click Import**: Download [feeds.opml](./feeds.opml) and import it into your RSS reader
✅ **Feed Health**: Automated checks track feed availability and surface broken links in [GitHub Issues](https://github.com/JackyST0/awesome-rsshub-routes/issues)

This repository is designed as a usable feed directory rather than a traditional curated-links list. It focuses on helping you discover, copy, and import high-signal feeds quickly, including:
- 📡 **Official RSS** - Native RSS feeds provided by websites
- 🔧 **RSSHub Routes** - RSS feeds generated via [RSSHub](https://github.com/DIYgod/RSSHub)

## Quick Start

1. Browse the online directory and filter feeds by category.
2. Import [feeds.opml](./feeds.opml) into your RSS reader.
3. Copy official feed URLs or assemble RSSHub routes as needed.

## Contents

- [Quick Start](#quick-start)
- [Official RSS Feeds](#official-rss-feeds)
  - [AI](#ai)
  - [Tech Communities](#tech-communities)
  - [News](#news)
  - [Tech Media](#tech-media)
  - [Security](#security)
  - [Frontend and Design](#frontend-and-design)
  - [Programming Language Blogs](#programming-language-blogs)
  - [Big Tech Engineering Blogs](#big-tech-engineering-blogs)
  - [Tech Newsletters](#tech-newsletters)
  - [Developer Tool Release Tracking](#developer-tool-release-tracking)
  - [Academic Papers](#academic-papers)
- [RSSHub Routes](#rsshub-routes)
  - [Social Media](#social-media)
  - [Tech Communities via RSSHub](#tech-communities-via-rsshub)
  - [News and Trending](#news-and-trending)
  - [Video Platforms](#video-platforms)
  - [Shopping and Deals](#shopping-and-deals)
- [RSS Tooling](#rss-tooling)
- [How to Use](#how-to-use)
- [Recommended RSS Readers](#recommended-rss-readers)

## Official RSS Feeds

These websites have built-in RSS support. Subscribe directly without RSSHub.

### AI

AI company blogs, research papers, tools and products.

#### AI Company Blogs

| Name            | Feed URL                                 | Description          |
| --------------- | ---------------------------------------- | -------------------- |
| OpenAI Blog     | `https://openai.com/news/rss.xml`        | Official GPT updates |
| Google DeepMind | `https://deepmind.google/blog/rss.xml`   | DeepMind research    |
| Google AI Blog  | `https://blog.google/technology/ai/rss/` | Google AI updates    |

#### AI Papers and News

| Name                   | Feed URL                          | Description  |
| ---------------------- | --------------------------------- | ------------ |
| arXiv AI               | `https://rss.arxiv.org/rss/cs.AI` | AI preprints |
| arXiv Machine Learning | `https://rss.arxiv.org/rss/cs.LG` | ML papers    |
| arXiv NLP              | `https://rss.arxiv.org/rss/cs.CL` | NLP papers   |
| Hacker News AI         | `https://hnrss.org/newest?q=AI`   | HN AI posts  |
| Hacker News LLM        | `https://hnrss.org/newest?q=LLM`  | HN LLM posts |
| Hacker News OpenClaw   | `https://hnrss.org/newest?q=OpenClaw` | HN OpenClaw posts |
| Google Research Blog   | `https://research.google/blog/rss/` | Google research updates |

#### AI Tools and Products

| Name              | Feed URL                               | Description              |
| ----------------- | -------------------------------------- | ------------------------ |
| Hugging Face Blog    | `https://huggingface.co/blog/feed.xml`         | Open-source AI community          |
| OpenClaw Releases    | `https://github.com/openclaw/openclaw/releases.atom` | OpenClaw release updates      |
| OpenClaw Commits     | `https://github.com/openclaw/openclaw/commits/main.atom` | Main branch activity         |
| Simon Willison's Blog | `https://simonwillison.net/atom/everything/`  | LLM insights, Django co-creator    |

#### AI Coding and Agent Tools

| Name                       | Feed URL                                                     | Description                 |
| -------------------------- | ------------------------------------------------------------ | --------------------------- |
| OpenAI Codex Releases      | `https://github.com/openai/codex/releases.atom`              | Codex CLI releases          |
| Claude Code Releases       | `https://github.com/anthropics/claude-code/releases.atom`    | Claude Code releases        |
| Gemini CLI Releases        | `https://github.com/google-gemini/gemini-cli/releases.atom`  | Gemini CLI releases         |
| MCP Specification Releases | `https://github.com/modelcontextprotocol/specification/releases.atom` | MCP spec updates |
| MCP Servers Releases       | `https://github.com/modelcontextprotocol/servers/releases.atom` | MCP server updates        |

### Tech Communities

#### LinuxDo

Built on Discourse with native RSS support.

| Name          | Feed URL                      | Description             |
| ------------- | ----------------------------- | ----------------------- |
| Latest Topics | `https://linux.do/latest.rss` | Latest community topics |
| Top Topics    | `https://linux.do/top.rss`    | Popular discussions     |
| Latest Posts  | `https://linux.do/posts.rss`  | All new posts           |

> Note: These feeds may require a proxy in some regions.

#### V2EX

| Name          | Feed URL                                     | Description      |
| ------------- | -------------------------------------------- | ---------------- |
| Hot Topics    | `https://www.v2ex.com/feed/tab/hot.xml`      | Today's hot      |
| Latest Topics | `https://www.v2ex.com/feed/tab/all.xml`      | All latest       |
| Tech Node     | `https://www.v2ex.com/feed/tab/tech.xml`     | Tech discussions |
| Creative Node | `https://www.v2ex.com/feed/tab/creative.xml` | Creative sharing |
| Fun Node      | `https://www.v2ex.com/feed/tab/play.xml`     | Fun stuff        |

> Note: These feeds may require a proxy in some regions.

#### NodeSeek

| Name          | Feed URL                    | Description             |
| ------------- | --------------------------- | ----------------------- |
| Latest Topics | `https://rss.nodeseek.com/` | Latest community topics |

#### Naixi Forum

| Name          | Feed URL                                      | Description             |
| ------------- | --------------------------------------------- | ----------------------- |
| Latest Topics | `https://forum.naixi.net/forum.php?mod=rss`  | Latest forum topics     |

> Note: Naixi Forum may return Cloudflare protection pages for some clients.

#### Hacker News

| Name       | Feed URL                      | Description        |
| ---------- | ----------------------------- | ------------------ |
| Front Page | `https://hnrss.org/frontpage` | Front page stories |
| Newest     | `https://hnrss.org/newest`    | Latest submissions |
| Best       | `https://hnrss.org/best`      | Best stories       |
| Ask HN     | `https://hnrss.org/ask`       | Q&A posts          |
| Show HN    | `https://hnrss.org/show`      | Project showcases  |

#### GitHub

| Name          | Feed URL                                         | Description     |
| ------------- | ------------------------------------------------ | --------------- |
| Repo Releases | `https://github.com/{user}/{repo}/releases.atom` | Release updates |
| Repo Commits  | `https://github.com/{user}/{repo}/commits.atom`  | Commit history  |
| Repo Tags     | `https://github.com/{user}/{repo}/tags.atom`     | Tag updates     |

#### SSPAI

| Name | Feed URL                 | Description       |
| ---- | ------------------------ | ----------------- |
| Home | `https://sspai.com/feed` | Featured articles |

#### Ruanyifeng Blog

| Name        | Feed URL                                   | Description        |
| ----------- | ------------------------------------------ | ------------------ |
| Tech Weekly | `https://www.ruanyifeng.com/blog/atom.xml` | Weekly tech digest |

### News

#### ITHome

| Name   | Feed URL                      | Description       |
| ------ | ----------------------------- | ----------------- |
| ITHome | `https://www.ithome.com/rss/` | IT news full-text |

#### People's Daily

Source: [Issue #9](https://github.com/JackyST0/awesome-rsshub-routes/issues/9)

| Name                | Feed URL                                      | Description        |
| ------------------- | --------------------------------------------- | ------------------ |
| Politics            | `http://www.people.com.cn/rss/politics.xml`  | Politics news      |
| Society             | `http://www.people.com.cn/rss/society.xml`   | Society news       |
| Legal               | `http://www.people.com.cn/rss/legal.xml`     | Legal news         |
| World               | `http://www.people.com.cn/rss/world.xml`     | International news |
| Taiwan, HK and Macao | `http://www.people.com.cn/rss/haixia.xml`   | Cross-strait news  |
| Military            | `http://www.people.com.cn/rss/military.xml`  | Military news      |
| All News            | `http://www.people.com.cn/rss/ywkx.xml`      | All latest news    |

### Tech Media

Well-known international tech media with official RSS.

| Name                  | Feed URL                                          | Description              |
| --------------------- | ------------------------------------------------- | ------------------------ |
| TechCrunch            | `https://techcrunch.com/feed/`                    | Silicon Valley tech news |
| The Verge             | `https://www.theverge.com/rss/index.xml`          | Tech and culture         |
| Wired                 | `https://www.wired.com/feed/rss`                  | Wired magazine           |
| Ars Technica          | `https://feeds.arstechnica.com/arstechnica/index` | In-depth tech analysis   |
| MIT Technology Review | `https://www.technologyreview.com/feed/`          | MIT tech review          |

### Security

Cybersecurity, vulnerabilities, and threat intelligence.

| Name                 | Feed URL                                      | Description            |
| -------------------- | --------------------------------------------- | ---------------------- |
| Krebs on Security    | `https://krebsonsecurity.com/feed/`           | Renowned security blog |
| The Hacker News      | `https://feeds.feedburner.com/TheHackersNews` | Hacking news           |
| Schneier on Security | `https://www.schneier.com/feed/`              | Security expert blog   |
| CISA News            | `https://www.cisa.gov/news.xml`               | US cyber alerts        |
| Google Security Blog | `https://security.googleblog.com/atom.xml`    | Google security updates |
| FreeBuf              | `https://www.freebuf.com/feed`                | Chinese security news  |
| AnQuanKe             | `https://api.anquanke.com/data/v1/rss`        | Security tech news     |

### Frontend and Design

Frontend development, UI/UX design resources.

| Name                  | Feed URL                                     | Description               |
| --------------------- | -------------------------------------------- | ------------------------- |
| Smashing Magazine     | `https://www.smashingmagazine.com/feed/`     | Frontend design magazine  |
| A List Apart          | `https://alistapart.com/main/feed/`          | Web standards and design  |
| Codrops               | `https://tympanus.net/codrops/feed/`         | Creative frontend effects |
| CSS-Tricks            | `https://css-tricks.com/feed/`               | CSS tips and tutorials    |
| Astro Blog            | `https://astro.build/rss.xml`                | Astro framework updates   |
| Svelte Blog           | `https://svelte.dev/blog/rss.xml`            | Svelte and SvelteKit news |
| Next.js Blog          | `https://nextjs.org/feed.xml`                | Next.js official updates  |
| Nuxt Blog             | `https://nuxt.com/blog/rss.xml`              | Nuxt framework updates    |
| Tailwind CSS Blog     | `https://tailwindcss.com/feeds/feed.xml`     | Tailwind CSS updates      |
| Dev.to                | `https://dev.to/feed`                        | Developer community       |
| Chrome Developer Blog | `https://developer.chrome.com/blog/feed.xml` | Chrome dev blog           |
| Dribbble Stories      | `https://dribbble.com/stories.rss`           | Design stories and updates |
| Product Hunt          | `https://www.producthunt.com/feed`           | New product discovery     |

### Programming Language Blogs

Official blogs for programming languages and frameworks.

| Name            | Feed URL                                          | Description              |
| --------------- | ------------------------------------------------- | ------------------------ |
| React Blog      | `https://react.dev/rss.xml`                       | React official blog      |
| Vue Blog        | `https://blog.vuejs.org/feed.rss`                 | Vue.js official blog     |
| Rust Blog       | `https://blog.rust-lang.org/feed.xml`             | Rust official blog       |
| Go Blog         | `https://go.dev/blog/feed.atom`                   | Go official blog         |
| Python Blog     | `https://blog.python.org/feeds/posts/default`     | Python official blog     |
| Node.js Blog    | `https://nodejs.org/en/feed/blog.xml`             | Node.js official blog    |
| TypeScript Blog | `https://devblogs.microsoft.com/typescript/feed/` | TypeScript official blog |
| Swift Blog      | `https://www.swift.org/atom.xml`                  | Swift official blog      |
| Kotlin Blog     | `https://blog.jetbrains.com/kotlin/feed/`         | Kotlin official blog     |

### Big Tech Engineering Blogs

Engineering blogs from major tech companies.

| Name                | Feed URL                                  | Description            |
| ------------------- | ----------------------------------------- | ---------------------- |
| GitHub Blog         | `https://github.blog/feed/`               | GitHub official blog   |
| GitHub Changelog    | `https://github.blog/changelog/feed/`     | GitHub platform updates |
| GitHub Copilot Changelog | `https://github.blog/changelog/label/copilot/feed/` | Copilot product updates |
| Netflix Tech Blog   | `https://netflixtechblog.com/feed`        | Netflix engineering    |
| AWS Blog            | `https://aws.amazon.com/blogs/aws/feed/`  | AWS official blog      |
| Cloudflare Blog     | `https://blog.cloudflare.com/rss/`        | Cloudflare engineering |
| Google Developers   | `https://developers.googleblog.com/feeds/posts/default/` | Google developer blog |
| Mozilla Hacks       | `https://hacks.mozilla.org/feed/`         | Mozilla developer blog |
| Vercel Blog         | `https://vercel.com/atom`                 | Vercel official blog   |
| Supabase Blog       | `https://supabase.com/rss.xml`            | Supabase official blog |
| Stripe Blog         | `https://stripe.com/blog/feed.rss`        | Stripe engineering     |
| Spotify Engineering | `https://engineering.atspotify.com/feed/` | Spotify engineering    |
| Meta Engineering    | `https://engineering.fb.com/feed/`        | Meta/Facebook engineering |

### Tech Newsletters

High signal-to-noise ratio weekly digests.

| Name              | Feed URL                                 | Description           |
| ----------------- | ---------------------------------------- | --------------------- |
| JavaScript Weekly | `https://javascriptweekly.com/rss/`      | JS ecosystem weekly          |
| This Week in Rust | `https://this-week-in-rust.org/atom.xml` | Rust community weekly        |
| Golang Weekly     | `https://golangweekly.com/rss/`          | Go ecosystem weekly          |
| ByteByteGo        | `https://blog.bytebytego.com/feed`       | System design newsletter     |

### Developer Tool Release Tracking

Useful release feeds for fast-moving developer tools.

| Tool       | Feed URL                                               | Description       |
| ---------- | ------------------------------------------------------ | ----------------- |
| uv         | `https://github.com/astral-sh/uv/releases.atom`        | Python package manager |
| Zed        | `https://github.com/zed-industries/zed/releases.atom`  | Code editor       |
| Bun        | `https://github.com/oven-sh/bun/releases.atom`         | JavaScript runtime |
| Biome      | `https://github.com/biomejs/biome/releases.atom`       | Formatter and linter |
| LangChain  | `https://github.com/langchain-ai/langchain/releases.atom` | Agent framework releases |

### Academic Papers

Academic journals and preprints.

| Name                  | Feed URL                            | Description    |
| --------------------- | ----------------------------------- | -------------- |
| Nature                | `https://www.nature.com/nature.rss` | Nature journal |
| arXiv Computer Vision | `https://rss.arxiv.org/rss/cs.CV`   | CV preprints   |

## RSSHub Routes

The following routes require RSSHub. Format: `https://rsshub.app` + route.

### Social Media

#### Weibo

| Name      | Route               | Description         |
| --------- | ------------------- | ------------------- |
| Trending  | `/weibo/search/hot` | Real-time trending  |
| User Feed | `/weibo/user/:uid`  | Specific user posts |

#### Zhihu

| Name            | Route                          | Description     |
| --------------- | ------------------------------ | --------------- |
| Hot Topics      | `/zhihu/hot`                   | Trending topics |
| User Activities | `/zhihu/people/activities/:id` | User activities |
| Column Articles | `/zhihu/zhuanlan/:id`          | Column updates  |

#### Douyin

| Name     | Route         | Description     |
| -------- | ------------- | --------------- |
| Trending | `/douyin/hot` | Douyin trending |

#### Xiaohongshu

| Name       | Route                                  | Description      |
| ---------- | -------------------------------------- | ---------------- |
| User Notes | `/xiaohongshu/user/:user_id/notes`     | User posts       |
| User Favs  | `/xiaohongshu/user/:user_id/collect`   | User favorites   |

#### Telegram

| Name    | Route                          | Description            |
| ------- | ------------------------------ | ---------------------- |
| Channel | `/telegram/channel/:username`  | Public channel updates |

### Tech Communities via RSSHub

#### GitHub Enhanced

| Name                 | Route                              | Description                |
| -------------------- | ---------------------------------- | -------------------------- |
| Trending Daily       | `/github/trending/daily`           | Daily trending repos       |
| Trending Weekly      | `/github/trending/weekly`          | Weekly trending repos      |
| Trending by Language | `/github/trending/daily/:language` | Language-specific trending |

#### Juejin

| Name              | Route                              | Description  |
| ----------------- | ---------------------------------- | ------------ |
| All Trending      | `/juejin/trending/all/weekly`      | Weekly hot   |
| Frontend Trending | `/juejin/trending/frontend/weekly` | Frontend hot |
| Backend Trending  | `/juejin/trending/backend/weekly`  | Backend hot  |

#### CSDN

| Name          | Route        | Description   |
| ------------- | ------------ | ------------- |
| Blog Trending | `/csdn/blog` | Popular blogs |

### News and Trending

| Name             | Route             | Description      |
| ---------------- | ----------------- | ---------------- |
| Toutiao          | `/toutiao/hot`    | Toutiao trending |
| Baidu Hot Search | `/baidu/hot`      | Baidu trending   |
| 36Kr Newsflash   | `/36kr/newsflash` | Tech newsflash   |

### Video Platforms

#### Bilibili

| Name        | Route                       | Description        |
| ----------- | --------------------------- | ------------------ |
| User Videos | `/bilibili/user/video/:uid` | Creator updates    |
| Rankings    | `/bilibili/ranking/0/3/1`   | Site-wide trending |

#### Douban Movies

| Name        | Route                   | Description |
| ----------- | ----------------------- | ----------- |
| Now Playing | `/douban/movie/playing` | In theaters |
| Upcoming    | `/douban/movie/later`   | Coming soon |

### Shopping and Deals

#### SMZDM

| Name           | Route                      | Description      |
| -------------- | -------------------------- | ---------------- |
| Digital Deals  | `/smzdm/ranking/pinlei/11` | Digital products |
| PC Components  | `/smzdm/ranking/pinlei/12` | PC peripherals   |
| Keyword Search | `/smzdm/keyword/:keyword`  | Keyword deals    |

## RSS Tooling

### Browser Extensions

| Name                                                   | Platform                | Description                              |
| ------------------------------------------------------ | ----------------------- | ---------------------------------------- |
| [RSSHub Radar](https://github.com/DIYgod/RSSHub-Radar) | Chrome / Firefox / Edge | Auto-discover RSSHub routes on any page. |
| [Feedbro](https://nodetics.com/feedbro/)               | Chrome / Firefox        | In-browser RSS reader.                   |
| [RSS Finder](https://github.com/nickreese/rss-finder)  | Chrome                  | Quick RSS feed discovery.                |

### RSS Tool Release Tracking

Subscribe to version updates of your favorite RSS tools.

| Tool          | Feed URL                                                         | Description           |
| ------------- | ---------------------------------------------------------------- | --------------------- |
| RSSHub        | `https://github.com/DIYgod/RSSHub/releases.atom`                 | RSSHub releases       |
| RSSHub Radar  | `https://github.com/DIYgod/RSSHub-Radar/releases.atom`           | Radar extension       |
| Fluent Reader | `https://github.com/yang991178/fluent-reader/releases.atom`      | Cross-platform reader |
| NetNewsWire   | `https://github.com/Ranchero-Software/NetNewsWire/releases.atom` | macOS/iOS reader      |
| FreshRSS      | `https://github.com/FreshRSS/FreshRSS/releases.atom`             | Self-hosted RSS       |

### Learning Resources

| Resource                                                   | Description                      |
| ---------------------------------------------------------- | -------------------------------- |
| [RSSHub Documentation](https://docs.rsshub.app/)           | Route lookup and deployment.     |
| [ALL-about-RSS](https://github.com/AboutRSS/ALL-about-RSS) | Comprehensive RSS resource list. |
| [RSS Guide on SSPAI](https://sspai.com/post/56391)         | RSS beginner guide (Chinese).    |

## How to Use

### Using RSSHub Routes

- Choose an [RSSHub instance](https://docs.rsshub.app/deploy/) or use the official one at `https://rsshub.app`.
- Build the feed URL by combining the instance URL and route: `https://rsshub.app/weibo/search/hot`.
- Replace `:param` placeholders with actual values, for example `/bilibili/user/video/546195`.

### Using Official RSS Feeds

Simply copy the feed URL into your RSS reader. No assembly required.

## Recommended RSS Readers

| Name                                    | Platform       | Highlights                   |
| --------------------------------------- | -------------- | ---------------------------- |
| [Feedly](https://feedly.com/)           | Web            | Classic reader, free tier.   |
| [Inoreader](https://www.inoreader.com/) | Web / App      | Feature-rich.                |
| [NetNewsWire](https://netnewswire.com/) | macOS / iOS    | Native and free.             |
| [Fluent Reader](https://github.com/yang991178/fluent-reader) | Cross-platform | Open-source and modern.      |
| [Folo](https://folo.is/)                | Cross-platform | Next-gen with AI.            |
| [FreshRSS](https://freshrss.org/)       | Self-hosted    | Open-source and self-hosted. |

## Contributing

See [contributing.md](contributing.md) for guidelines on adding feeds.

## Support This Project

If this project saves you time finding quality RSS feeds, you can support it by buying me a coffee.

<details>
  <summary>Support via PayPal</summary>

  [PayPal.me/JackyST0](https://paypal.me/JackyST0)
</details>

## Related Resources

- [RSSHub Documentation](https://docs.rsshub.app/)
- [RSSHub GitHub](https://github.com/DIYgod/RSSHub)

## Star History

If this project is helpful to you, please consider giving it a star.

[![Star History Chart](https://api.star-history.com/svg?repos=JackyST0/awesome-rsshub-routes&type=Date)](https://star-history.com/#JackyST0/awesome-rsshub-routes&Date)

## License

[CC0](LICENSE)

