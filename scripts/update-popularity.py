#!/usr/bin/env python3
"""Fetch Google Trends search interest (worldwide, past 90 days) for every tool and
write src/data/tool-popularity.json. Scores are chained to a common anchor (ChatGPT=100)
in batches of 4 tools + anchor; low-volume tools are re-measured against a secondary
mid-volume anchor for resolution. Usage: pip install pytrends && python3 scripts/update-popularity.py"""
import json, re, time, random, datetime, pathlib, sys
from pytrends.request import TrendReq

ROOT = pathlib.Path(__file__).resolve().parent.parent
OUT = ROOT / 'src/data/tool-popularity.json'
ANCHOR, TF = 'ChatGPT', 'today 3-m'
tools = {}
for f in sorted((ROOT / 'src/content/tools').glob('*.md')):
    m = re.search(r'^name:\s*"?(.*?)"?\s*$', f.read_text(), re.M)
    if m: tools[f.stem] = m.group(1)
# Search queries: disambiguate generic words and use the name people actually search.
QUERY = {'make':'Make.com','motion':'Motion app','clay':'Clay.com','speak':'Speak app','pitch':'Pitch.com',
 'hex':'Hex AI','poe':'Poe AI','cursor':'Cursor AI','gamma':'Gamma AI','consensus':'Consensus AI','frase':'Frase.io',
 'runway':'Runway AI','gemini':'Google Gemini','fathom':'Fathom AI','elicit':'Elicit AI','krea':'Krea AI',
 'lindy':'Lindy AI','instantly':'Instantly AI','gong':'Gong.io','jasper':'Jasper AI','pika':'Pika AI','v0':'v0.dev',
 'manus':'Manus AI','granola':'Granola AI','lovable':'Lovable AI','canva':'Canva','figma':'Figma','flux':'Flux AI',
 'dall-e':'DALL-E','devin-desktop':'Windsurf AI','gemini-notebook':'NotebookLM','google-flow':'Google Flow',
 'hubspot':'HubSpot','tidio':'Tidio','luma-ai':'Luma AI','leonardo-ai':'Leonardo AI','magnific':'Magnific AI',
 'mistral-vibe':'Mistral AI','tl-dv':'tldv','adcreative-ai':'AdCreative','claude':'Claude AI','speechify':'Speechify',
 'grok':'Grok AI','suno':'Suno AI','udio':'Udio AI','descript':'Descript','opusclip':'Opus Clip'}
for s in tools: tools[s] = QUERY.get(s, tools[s])
py = TrendReq(hl='en-US', tz=0)

def fetch(terms):
    for attempt in range(6):
        try:
            py.build_payload(terms, timeframe=TF, geo='')
            df = py.interest_over_time()
            time.sleep(random.uniform(2, 4))
            return {t: float(df[t].mean()) if t in df else 0.0 for t in terms}
        except Exception as e:
            wait = 15 * 2 ** attempt; print(f'  retry {attempt+1} in {wait}s: {e}', file=sys.stderr); time.sleep(wait)
    return None

def chain(anchor, slugs, anchor_value):
    res = {}
    for i in range(0, len(slugs), 4):
        batch = slugs[i:i+4]; terms = [anchor] + [tools[s] for s in batch]
        r = fetch(terms)
        if r is None or r[anchor] <= 0: print('  failed batch', batch, file=sys.stderr); continue
        for s in batch: res[s] = r[tools[s]] / r[anchor] * anchor_value
        print(f'  {anchor}: {batch}', file=sys.stderr)
    return res

slugs = [s for s in tools if tools[s].lower() != ANCHOR.lower()]
scores = chain(ANCHOR, slugs, 100.0)
if ANCHOR.lower() in [n.lower() for n in tools.values()]:
    scores[[s for s in tools if tools[s].lower() == ANCHOR.lower()][0]] = 100.0
# refine low-volume tools against a mid anchor (tool with score closest to 3)
# up to 3 refinement rounds, each with an anchor ~30x smaller than the previous threshold
thr = 2.0
for _ in range(3):
    low = [s for s in scores if scores[s] < thr]
    mids = [s for s in scores if thr <= scores[s] <= thr * 5]
    if not low or not mids: break
    mid = min(mids, key=lambda s: abs(scores[s] - thr * 1.5))
    ref = chain(tools[mid], [s for s in low if s != mid], scores[mid])
    scores.update({k: v for k, v in ref.items() if v > 0 or scores.get(k, 0) == 0})
    thr /= 30
scores = {s: round(v, 4) for s, v in scores.items()}
missing = sorted([s for s in tools if s not in scores or scores[s] == 0], key=lambda s: tools[s].lower())
OUT.write_text(json.dumps({'updated': datetime.date.today().isoformat(),
    'source': f'Google Trends (pytrends), worldwide, past 90 days, mean interest chained to anchor "{ANCHOR}"=100',
    'scores': {s: scores[s] for s in sorted(scores, key=lambda s: (-scores[s], tools[s].lower())) if scores[s] > 0}}, indent=2) + '\n')
print('no data:', missing)
