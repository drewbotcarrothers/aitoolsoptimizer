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

## Required: "What this means for you" section (since 2026-11-24)

Every roundup ends, before the "What should you watch next?" section or the education-only footer, with:

```markdown
---

## What this means for you

2-4 plain sentences: the day's practical takeaway for a buyer or user anywhere in the world (what to do,
check, patch, try or wait on, and who it applies to). Synthesize across stories. Do not repeat the TL;DR or
the per-story "Why it matters to you" lines, and do not add facts that are not in the stories above.

- Short lead-in: [descriptive anchor](/blog/<evergreen-slug>/).
- Short lead-in: [descriptive anchor](/blog/<evergreen-slug>/) or [tool name](/tools/<slug>/) or [AI model comparison](/models/).
```

Rules: 2-3 contextual links to existing evergreen posts, tools pages or /models/ that help with that day's
takeaway (pricing page for a price change, review for a product change, glossary for a concept). Every link
must resolve (check `src/content/blog/<slug>.md` or `src/content/tools/<slug>.md` exists). Vary anchors; no
"click here". USD; global audience (no country-specific advice unless the story is country-specific, and then
say who it applies to). Existing roundups (Oct 16-Nov 23) were backfilled on 2026-11-24.

## Automatic behaviour
- No posts: page shows "First daily roundup coming soon", is `noindex`, and is omitted from the sitemap.
- First post published: page becomes indexable (canonical, no noindex) and `/ai-news/` is added to `sitemap.xml`.
  The post also appears on `/blog/`, which activates the Blog nav link.
