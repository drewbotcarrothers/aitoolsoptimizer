// @ts-check
import { defineConfig } from 'astro/config';

// SITE / BASE are overridden in CI for the GitHub Pages demo preview.
export default defineConfig({
  site: process.env.SITE || 'https://aitoolsoptimizer.com',
  base: process.env.BASE || '/',
  trailingSlash: 'ignore',
  build: { format: 'directory' },
});
