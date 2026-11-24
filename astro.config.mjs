// @ts-check
import { defineConfig } from 'astro/config';
import { remarkMermaid } from './src/lib/remark-mermaid.mjs';
import { remarkPrices } from './src/lib/prices.mjs';
import { readFileSync } from 'node:fs';
import { createHash } from 'node:crypto';

// Hash of the price file, passed as a plugin option so Astro's content cache is invalidated when a price changes.
const pricesHash = createHash('sha1').update(readFileSync(new URL('./src/data/prices.json', import.meta.url))).digest('hex');

// SITE / BASE are overridden in CI for the GitHub Pages demo preview.
export default defineConfig({
  site: process.env.SITE || 'https://aitoolsoptimizer.com',
  base: process.env.BASE || '/',
  trailingSlash: 'ignore',
  build: { format: 'directory' },
  markdown: {
    remarkPlugins: [[remarkPrices, { pricesHash }], remarkMermaid],
  },
});
