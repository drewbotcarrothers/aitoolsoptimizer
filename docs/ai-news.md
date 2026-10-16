# AI News (daily roundup)

`/ai-news/` lists every published blog post tagged `ai-news`, newest first (by `pubDate`).
Posts live in `src/content/blog/` and are served at `/blog/<filename>/`. RSS: `/ai-news/rss.xml`.

## Publishing a roundup (daily, 3 PM ET)

Create `src/content/blog/ai-news-YYYY-MM-DD.md`:

```markdown
---
title: "AI News Roundup: October 16, 2026"
description: "One or two sentence summary of today's top AI stories (used in cards, meta description and RSS)."
pubDate: 2026-10-16T15:00:00-04:00
tags: ["ai-news"]
relatedTools: []        # optional: tool slugs from src/content/tools
draft: false
---

Body in Markdown...
```

Rules:
- `tags` **must** contain `ai-news` (other tags are fine alongside it).
- `title`, `description`, `pubDate` are required. Use a full ISO timestamp with offset
  (`-04:00` EDT / `-05:00` EST) so same-day ordering is correct.
- Do not set `category` (it is restricted to tool-directory categories) and do not set `sample: true`;
  `draft: true` or `sample: true` posts are hidden.
- Then build and deploy (`scripts/deploy.sh` or the manual deploy/gh-pages process).

## Automatic behaviour
- No posts: page shows "First daily roundup coming soon", is `noindex`, and is omitted from the sitemap.
- First post published: page becomes indexable (canonical, no noindex) and `/ai-news/` is added to `sitemap.xml`.
  The post also appears on `/blog/`, which activates the Blog nav link.
