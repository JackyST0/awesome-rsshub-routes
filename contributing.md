# Contributing

Contributions are welcome! Please read the following guidelines before submitting.

## Choose an Issue or Pull Request

- Open a pull request when you have a ready change, such as adding, updating, or removing a feed.
- Open an issue to suggest a feed, report a broken entry, or discuss a category before preparing a change.
- For a feed suggestion, issues are welcome; contributors who can make the documented changes are encouraged to submit a pull request directly.

## Adding a Feed

1. Make sure the feed is **actually working** — test it in an RSS reader before submitting.
2. Check that the feed is not already listed.
3. For a directly importable official RSS or Atom feed, add it to the appropriate category in `README.md`, `readme-zh.md`, and `feeds.opml`.
4. RSSHub parameter routes, URL templates, and learning resources belong in the README files only; do not add them to `feeds.opml`.
5. Use the following format in the README table:

| Name | Feed URL | Description |
|------|----------|-------------|
| Example Feed | `https://example.com/feed` | Brief description |

6. Keep descriptions concise and objective.
7. Running `npm test` before submitting is recommended. `npm run check` performs network requests to every feed and may be affected by proxies, rate limits, and anti-crawling measures; maintainers review its result during the PR process.
8. If a feed is restricted by anti-crawling or requires a proxy, describe that limitation in the PR.

## Adding a Category

If your feed doesn't fit any existing category, you can propose a new one. Please explain why in your PR description.

## General Guidelines

- Search existing entries before adding a new one to avoid duplicates.
- One pull request per feed or small batch of related feeds.
- Keep entries alphabetically sorted within each category when possible.
- Make sure your contribution follows the existing formatting style.
- Write clear, concise commit messages.

## Updating the OPML File

The OPML file is the online directory's source of truth and contains only directly importable official RSS or Atom feeds. Keep its category aligned with the README and `readme-zh.md`.

## Reporting Issues

If you find a broken feed or only want to suggest an entry, please [open an issue](https://github.com/JackyST0/awesome-rsshub-routes/issues). Use a pull request when you can provide the corresponding documentation and OPML changes.

Thank you for helping make this list more awesome!
