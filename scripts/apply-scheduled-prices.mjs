#!/usr/bin/env node
// Promote scheduled price changes in src/data/prices.json whose `next.from` date (America/Toronto) has arrived.
// Also updates the matching src/data/models.json row (priceIn/priceOut/priceNote) when `modelApiId` is set.
// Usage: node scripts/apply-scheduled-prices.mjs [--dry-run] [--date YYYY-MM-DD]
import fs from 'node:fs';
const args = process.argv.slice(2);
const dry = args.includes('--dry-run');
const di = args.indexOf('--date');
const today = di >= 0 ? args[di + 1] : new Intl.DateTimeFormat('en-CA', { timeZone: 'America/Toronto' }).format(new Date());
const PF = 'src/data/prices.json', MF = 'src/data/models.json';
const prices = JSON.parse(fs.readFileSync(PF, 'utf8'));
const modelsRaw = fs.readFileSync(MF, 'utf8');
let models = modelsRaw;
let changed = 0;
for (const [key, p] of Object.entries(prices)) {
  if (!p || !p.next || p.next.from > today) continue;
  console.log(`${key}: ${p.value} -> ${p.next.value} (from ${p.next.from})`);
  if (p.modelApiId) {
    const m = p.next.value.match(/^\$([\d.]+) \/ \$([\d.]+)$/);
    if (!m) throw new Error(`Cannot parse ${p.next.value} for models.json`);
    const re = new RegExp(`("apiId": "${p.modelApiId}".*?"priceIn": )[\\d.]+(, "priceOut": )[\\d.]+(, "priceNote": )"[^"]*"`);
    if (!re.test(models)) throw new Error(`models.json row ${p.modelApiId} not found`);
    models = models.replace(re, `$1${m[1]}$2${m[2]}$3${JSON.stringify(p.next.modelPriceNote || '')}`);
    console.log(`  models.json ${p.modelApiId}: priceIn ${m[1]}, priceOut ${m[2]}`);
  }
  p.value = p.next.value; p.verified = p.next.from; delete p.next; changed++;
}
if (!changed) { console.log(`No scheduled price changes due on ${today}.`); process.exit(0); }
if (dry) { console.log('(dry run, nothing written)'); process.exit(0); }
fs.writeFileSync(PF, JSON.stringify(prices, null, 2) + '\n');
if (models !== modelsRaw) fs.writeFileSync(MF, models);
console.log(`Applied ${changed} change(s). Commit, then run scripts/deploy.sh.`);
