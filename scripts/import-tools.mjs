#!/usr/bin/env node
// Import / update src/content/tools/*.md from the "AI Tools Master List" Google Sheet.
// Usage: node scripts/import-tools.mjs [--file path/to/export.csv]
// Re-runnable: existing entries keep hand-written fields (tagline, pros, cons, tips,
// alternatives, Markdown body); sheet-sourced fields are refreshed.
import fs from 'node:fs';
import path from 'node:path';
import yaml from 'js-yaml';

const SHEET_CSV = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vR3DiRMz1Wgzj1vX9dQkU2swIqsgVx8eR7dlwZ3LS39vxVf7QtJDeJwaoc7Re4C9mDCw6u1_SZ1ktl8/pub?output=csv&gid=151274013';
const DIR = path.resolve('src/content/tools');

// Sheet category -> site category slug (must match src/data/categories.ts)
export const CATEGORY_MAP = {
  'Audio/Voice/Music': 'audio-voice-music', 'Automation/Agents': 'automation-agents',
  'Chatbots/Assistants': 'chatbots-assistants', 'Coding': 'coding', 'Customer Support': 'customer-support',
  'Data/Analytics': 'data-analytics', 'Design': 'design', 'Education': 'education',
  'Image Generation': 'image-generation', 'Marketing/SEO': 'marketing-seo',
  'Meetings/Transcription': 'meetings-transcription', 'Presentations': 'presentations',
  'Productivity/Notes': 'productivity-notes', 'Research/Search': 'research-search',
  'Sales': 'sales', 'Video': 'video', 'Writing': 'writing',
};
// Sheet slug -> existing hand-written file slug
const SLUG_ALIASES = { 'google-gemini': 'gemini' };

function parseCSV(text) {
  const rows = []; let row = [], f = '', q = false;
  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    if (q) { if (c === '"') { if (text[i + 1] === '"') { f += '"'; i++; } else q = false; } else f += c; }
    else if (c === '"') q = true;
    else if (c === ',') { row.push(f); f = ''; }
    else if (c === '\n' || c === '\r') { if (c === '\r' && text[i + 1] === '\n') i++; row.push(f); rows.push(row); row = []; f = ''; }
    else f += c;
  }
  if (f || row.length) { row.push(f); rows.push(row); }
  const [head, ...body] = rows.filter((r) => r.some((x) => x.trim()));
  return body.map((r) => Object.fromEntries(head.map((h, i) => [h.trim(), (r[i] ?? '').trim()])));
}

const US = [[/\b([Oo])rganis/g, '$1rganiz'], [/\b([Ss])ummaris/g, '$1ummariz'], [/\b([Oo])ptimis/g, '$1ptimiz'],
  [/\b([Pp])ersonalis/g, '$1ersonaliz'], [/\b([Cc])ustomis/g, '$1ustomiz'], [/\b([Aa])nalys(e|ed|es|ing)\b/g, '$1nalyz$2'],
  [/\b([Cc])olour/g, '$1olor'], [/\b([Ff])avourite/g, '$1avorite'], [/\b([Bb])ehaviour/g, '$1ehavior'],
  [/\b([Cc])entre/g, '$1enter'], [/\b([Rr])ecognis/g, '$1ecogniz'], [/\b([Vv])isualis/g, '$1isualiz'],
  [/\b([Ss])tandardis/g, '$1tandardiz'], [/\b([Pp])rioritis/g, '$1rioritiz'], [/\b([Aa])utomatis/g, '$1utomatiz']];
const us = (s) => US.reduce((t, [a, b]) => t.replace(a, b), s);
const clean = (s) => { s = us((s || '').trim()); return /^(unknown|n\/a|-|—)?$/i.test(s) ? '' : s; };
const slugify = (n) => n.replace(/\(.*?\)/g, '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
const splitTop = (s) => { const out = []; let d = 0, cur = '';
  for (const ch of s) { if (ch === '(') d++; if (ch === ')') d--; if ((ch === ',' || ch === ';') && d === 0) { out.push(cur); cur = ''; } else cur += ch; }
  out.push(cur); return out.map((x) => x.trim()).filter(Boolean); };
const useCases = (s) => clean(s) ? clean(s).split(/\s*\d+\)\s*/).map((x) => x.trim().replace(/[;,]$/, '')).filter(Boolean) : [];
const pricingEnum = (m) => /^free\b/i.test(m) && !/^freemium/i.test(m) ? 'free' : /^freemium/i.test(m) ? 'freemium' : 'paid';
function price(s) {
  s = clean(s); if (!s) return '';
  if (/€|£|\bEUR\b|\bGBP\b/.test(s)) return ''; // non-USD price: omit rather than convert
  const m = s.match(/^unknown\s*\((.*)\)$/i); if (m) return m[1][0].toUpperCase() + m[1].slice(1);
  return s;
}
function freePlan(s) { s = clean(s); return s; }

const csv = process.argv.includes('--file') ? fs.readFileSync(process.argv[process.argv.indexOf('--file') + 1], 'utf8')
  : await (await fetch(SHEET_CSV)).text();
const rows = parseCSV(csv);
let created = 0, updated = 0; const skipped = [];
const seen = new Set();
for (const r of rows) {
  const name = clean(r['Tool Name']); const cat = CATEGORY_MAP[r['Category']];
  let website = clean(r['Website URL']);
  if (!name) { skipped.push(['(blank name)', 'no tool name']); continue; }
  if (!cat) { skipped.push([name, `unknown category "${r['Category']}"`]); continue; }
  try { new URL(website); } catch { skipped.push([name, `invalid website "${website}"`]); continue; }
  let slug = slugify(name); slug = SLUG_ALIASES[slug] || slug;
  if (seen.has(slug)) { skipped.push([name, `duplicate slug ${slug}`]); continue; } seen.add(slug);
  const desc = clean(r['Short Description']);
  const verified = clean(r['Last Verified']);
  const sheet = {
    name, category: cat, description: desc, pricing: pricingEnum(r['Pricing Model'] || ''), website,
    company: clean(r['Company']), subcategory: clean(r['Subcategory']), bestFor: clean(r['Best For (Audience)']),
    pricingModel: clean(r['Pricing Model']), startingPrice: price(r['Starting Paid Price (USD/mo)']),
    freePlan: freePlan(r['Free Plan?']), keyFeatures: splitTop(clean(r['Key Features'])).map((x) => x[0].toUpperCase() + x.slice(1)), useCases: useCases(r['Top Use Cases']),
    sourceUrls: clean(r['Source URL(s)']).split(/\s*;\s*|\s+/).filter((u) => /^https?:\/\//.test(u)),
    ...(verified ? { lastVerified: verified, lastUpdated: verified } : {}),
    sample: false,
  };
  for (const k of Object.keys(sheet)) if (sheet[k] === '' || (Array.isArray(sheet[k]) && !sheet[k].length)) delete sheet[k];
  const file = path.join(DIR, `${slug}.md`);
  let fm = {}, body = '';
  if (fs.existsSync(file)) {
    const m = fs.readFileSync(file, 'utf8').match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/);
    fm = yaml.load(m[1]); body = m[2];
    delete fm.rating;            // demo ratings were placeholders; no verified ratings yet
    body = body.replace(/## Our take\s*\n\s*\*Sample review[\s\S]*?(?=\n## |$)/, '').trim(); // drop placeholder copy
    for (const k of ['pros', 'cons', 'tips']) if (Array.isArray(fm[k])) fm[k] = fm[k].map(us);
    if (fm.tagline) fm.tagline = us(fm.tagline);
    updated++;
  } else { fm = { tagline: desc || name }; created++; }
  const out = { ...fm, ...sheet, name, tagline: fm.tagline || desc || name };
  if (fm.description && fs.existsSync(file) && !desc) out.description = fm.description;
  if (!out.description) out.description = out.tagline;
  const order = ['name', 'category', 'subcategory', 'company', 'tagline', 'description', 'pricing', 'pricingModel', 'startingPrice', 'freePlan', 'website', 'affiliateUrl', 'rating', 'bestFor', 'keyFeatures', 'useCases', 'pros', 'cons', 'tips', 'alternatives', 'sourceUrls', 'lastVerified', 'lastUpdated', 'sample'];
  const sorted = Object.fromEntries([...order.filter((k) => k in out), ...Object.keys(out).filter((k) => !order.includes(k))].map((k) => [k, out[k]]));
  const fmText = Object.entries(sorted).map(([k, v]) => `${k}: ${JSON.stringify(v)}`).join('\n');
  fs.writeFileSync(file, `---\n${fmText}\n---\n${body ? '\n' + body + '\n' : ''}`);
}
console.log(`rows: ${rows.length}, created: ${created}, updated: ${updated}, skipped: ${skipped.length}`);
for (const [n, why] of skipped) console.log(`  skipped ${n}: ${why}`);
