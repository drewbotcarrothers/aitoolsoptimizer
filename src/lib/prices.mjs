// Fills {{price:KEY}} tokens from src/data/prices.json. Unknown keys fail the build.
import prices from '../data/prices.json' with { type: 'json' };

const TOKEN = /\{\{price:([a-z0-9_.]+)\}\}/g;

export function fillPrices(str) {
  if (typeof str !== 'string' || !str.includes('{{price:')) return str;
  return str.replace(TOKEN, (_, key) => {
    const p = prices[key];
    if (!p || typeof p.value !== 'string') throw new Error(`Unknown price token {{price:${key}}}`);
    return p.value;
  });
}

/** Recursively fill tokens in frontmatter values (strings, arrays, objects). */
export function fillDeep(v) {
  if (typeof v === 'string') return fillPrices(v);
  if (Array.isArray(v)) return v.map(fillDeep);
  if (v && typeof v === 'object' && !(v instanceof Date)) {
    const o = {};
    for (const [k, x] of Object.entries(v)) o[k] = fillDeep(x);
    return o;
  }
  return v;
}

/** Remark plugin: fill tokens in text, link URLs/titles, inline code-free nodes and mermaid code. */
export function remarkPrices() {
  return (tree) => walk(tree);
}
function walk(node) {
  if (!node) return;
  if (node.type === 'text' || node.type === 'html' || (node.type === 'code' && node.lang === 'mermaid')) node.value = fillPrices(node.value);
  if (Array.isArray(node.children)) node.children.forEach(walk);
}
