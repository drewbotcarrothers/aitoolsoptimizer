# Single-source prices

Prices that repeat across many posts live in `src/data/prices.json`. Markdown bodies and frontmatter (blog and tools) use tokens such as `{{price:gemini.pro}}`. They are filled at build time:

- body: remark plugin `remarkPrices` (`src/lib/prices.mjs`, registered in `astro.config.mjs`)
- frontmatter: `z.preprocess(fillDeep, …)` in `src/content.config.ts`

An unknown key fails the build. `astro.config.mjs` passes a hash of `prices.json` to the plugin, so Astro's content cache rebuilds when a price changes.

Keys now: `gemini.plus`, `gemini.pro`, `gemini.ultra`, `gemini.ultra_top`, `gemini.api.argon`, `gemini.api.carbon`, `claude.pro_annual`, `claude.pro_upfront`, `claude.pro_monthly`.

To change a price, edit `value` (and `verified`) for that key, commit, then run `scripts/deploy.sh`.

## Scheduled changes

A key can carry `"next": {"from": "YYYY-MM-DD", "value": "..."}`. On or after that date:

```
cd /workspace/aitoolsoptimizer && git pull
node scripts/apply-scheduled-prices.mjs        # use --dry-run first to preview
git commit -am "Prices: apply scheduled changes" && git push
bash scripts/deploy.sh
```

The script also updates the matching row in `src/data/models.json` (priceIn/priceOut/priceNote) when the key has `modelApiId`. That row is what the /models/ page shows.

## Limits

- Computed totals written as prose (e.g. "$17 + $20 + $19.99, about $57") are not tokens.
- News roundups are historical and keep literal prices.
- `scripts/import-tools.mjs` rewrites tools files from the Google Sheet. It writes literal prices, which still build fine.
