# AI Tools Optimizer

Website for **AI Tools Optimizer** (aitoolsoptimizer.com) — teaching people about AI and helping them pick the right AI tools. Monetised through display ads, affiliate links and ebooks. Built by Andrew.

> **Content status:** the 5 blog posts in `src/content/blog/` are unverified sample drafts (`draft: true`) and are not built. Replace them with real articles and set `draft: false`. The Blog nav link appears automatically once a post is published.

## Stack

- [Astro](https://astro.build) 5, fully static output (`dist/`)
- Content collections (`src/content.config.ts`):
  - `blog` — Markdown posts (`src/content/blog/*.md`): title, description, pubDate, category, tags, relatedTools, sample, draft
  - `tools` — AI tools directory (`src/content/tools/*.md`): name, category, tagline, description, pricing (free/freemium/paid), website, affiliateUrl, rating, pros, cons, tips, useCases, alternatives, lastUpdated, sample
- No UI framework; plain CSS with design tokens in `src/styles/global.css`

## Pages

| Route | Purpose |
|---|---|
| `/` | Home: hero search, categories, top tools, latest posts, ebook promo, newsletter |
| `/tools/` | Directory with client-side category filter + search (`?q=` / `?cat=` supported) |
| `/tools/category/<slug>/` | Per-category pages (12 categories, see `src/data/categories.ts`) |
| `/tools/<slug>/` | Tool review: rating, pros/cons, use cases, tips & tricks, alternatives, affiliate CTA, related posts |
| `/blog/`, `/blog/<slug>/` | Blog index and articles (link to the tools they mention) |
| `/about/`, `/contact/` | About, contact (email address + mailto form) |
| `/privacy/`, `/cookies/`, `/terms/`, `/disclaimer/` | Privacy Policy, Cookie Policy, Terms of Use, Disclaimer & affiliate disclosure |
| `/sitemap.xml`, `/robots.txt` | Generated at build (`src/pages/*.ts`); robots allows Mediapartners-Google |

Ads: Google AdSense auto ads via the script in `src/layouts/Base.astro` (production only); no manual ad units. The affiliate link for a tool is its `affiliateUrl` (falls back to `website`).

## Brand colours

| Token | Hex | Use |
|---|---|---|
| `--color-bg` Void Black | `#070A13` | Page background |
| `--color-surface` Deep Navy | `#0E1324` | Cards, inputs |
| `--color-surface-2` Panel | `#151B33` | Raised panels |
| `--color-border` Grid Line | `#232B4D` | Borders, background grid |
| `--color-text` Ice White | `#E6ECFF` | Body text |
| `--color-muted` Slate Haze | `#8A94B8` | Secondary text |
| `--color-cyan` Electric Cyan | `#00E5FF` | Primary accent, links, glow |
| `--color-violet` Neon Violet | `#8B5CF6` | Secondary accent |
| `--color-magenta` Plasma Pink | `#FF3DCE` | Highlights, "paid" |
| `--color-lime` Signal Green | `#7CFFB2` | Success, "free" |
| `--color-amber` | `#FFC857` | Ratings, sample badges |

Brand gradient: `linear-gradient(135deg, #00E5FF 0%, #8B5CF6 60%, #FF3DCE 100%)`.
Typography: **Orbitron** (headings), **Inter** (body), **JetBrains Mono** (labels).

## Develop

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # static site in dist/
npm run preview
```

Add a tool: create `src/content/tools/<slug>.md` with the frontmatter above. Add a post: `src/content/blog/<slug>.md`.

## Deploy

GitHub Actions workflow, stored at `deploy/github-actions-deploy.yml` (the push token lacked `workflow` scope; to activate, move it to `.github/workflows/deploy.yml` via the GitHub web UI). Until then, `deploy` and `gh-pages` branches are published manually from a local build. On every push to `main` the workflow does:

1. **Hostinger (production, aitoolsoptimizer.com):** builds and force-pushes the contents of `dist/` to the **`deploy`** branch. In hPanel → Websites → aitoolsoptimizer.com → Advanced → **Git**, connect `https://github.com/drewbotcarrothers/aitoolsoptimizer.git`, branch `deploy`, install path empty (`public_html`), then enable auto-deployment (add the webhook URL to GitHub repo → Settings → Webhooks). `public/.htaccess` forces HTTPS and serves `404.html`.
2. **GitHub Pages (demo preview):** builds with `BASE=/aitoolsoptimizer` and publishes to https://drewbotcarrothers.github.io/aitoolsoptimizer/.
