---
title: "AI News Roundup – November 11, 2026"
description: "Today’s AI news: Claude gets Sheets, Whiteboards, Claude Data and Meetings; Anthropic’s IPO roadshow at $70–$78 a share; Alibaba’s Qwen4-Max preview; Baidu’s ERNIE 5.5 Flash Preview; DeepMind’s AlphaGenome 2; Runway opens Praxis-1; New York’s RAISE Act registration."
pubDate: 2026-11-11T15:45:00-05:00
tags: ["ai-news"]
relatedTools: ["claude", "notion-ai", "microsoft-copilot", "runway"]
sample: false
draft: false
---

## TL;DR

- **Anthropic** launched **Claude Sheets** and **Claude Whiteboards** in beta and made **Claude Data** (formerly Dashboards) generally available, all on **every paid Claude plan**. Full apps like Adobe, Atlassian, Box and Notion can now open inside Claude, and **Claude Meetings** brings Claude into Google Meet calls (beta, Team and Enterprise).
- **Anthropic** launched its **IPO roadshow**: **825 million** shares at **$70–$78**, up to about **$1.4 trillion** fully diluted, ticker **ANT**.
- **Alibaba** opened a two-week preview of **Qwen4-Max**, the first Qwen4 flagship, through Token Plan only. It’s retired after **November 25**.
- **Baidu** released **ERNIE 5.5 Flash Preview**: **280B** total / **14B** active parameters, **1M** context, Apache 2.0 weights promised “soon”.
- **Google DeepMind** announced **AlphaGenome 2**, which finds **nearly twice** as many expression-changing DNA variants as its previous model.
- **Runway** opened **Praxis-1**, its 27B world action model for robots, under **Apache 2.0**.
- **New York** opened **RAISE Act** registration for large frontier AI developers, due **January 1, 2027**.

**Today’s take:** Claude is turning into an office suite. If you already pay for [Claude](/tools/claude/) (Pro is **$20 a month**, or **$17** on annual billing, per our [Claude pricing guide](/blog/claude-pricing-explained-2026/)), you just got an AI spreadsheet and a team whiteboard at no extra cost. Use them for simple trackers and planning boards before you pay for another app. But Anthropic says Sheets is basic for now, so real Excel work still belongs in Excel.

---

## What are Claude Sheets, Whiteboards and Claude Data?

**Short answer:** Three new places to work inside Claude, launched November 10 on **all paid plans** (web, desktop and mobile):

| Feature | Status | What it does |
|---|---|---|
| **Claude Sheets** | Beta | Builds spreadsheets with tabs, formulas, formatting and drop-downs from a prompt (e.g. a campaign tracker or hiring budget), edits in the cells and outlines each edit; shareable |
| **Claude Whiteboards** | Beta | Turns a talked-through plan into a board with a timeline, owners and dates; real-time team editing; converts to a doc or deck, or moves to Lucid, Miro or Vani by Zoho |
| **Claude Data** (was Dashboards) | Generally available | Dashboards, data stories and narrated videos from your warehouse or CRM; certified queries and live sharing (beta), tracked changes, caching |
| **Full-app connectors** | Rolling out, all plans | Adobe, Atlassian, Box, [Notion](/tools/notion-ai/) and other partner apps open beside the chat or full screen; Claude makes changes you approve |
| **Claude Meetings** | Beta, Team and Enterprise | Joins a Google Meet call as a visible participant, drafts the plan and timeline as you talk; notes and action items land in claude.ai |

**The fine print:**

- Anthropic says Sheets has “simple spreadsheet functionality” for now. For full Excel features, export to **.xlsx or CSV**, use Claude for Excel, or continue in Airtable, Asana, monday.com or Smartsheet.
- Claude Data needs a data connector (warehouse or CRM). Partners include Amplitude, Mixpanel, Omni, PostHog and Sigma.
- Admins: on **Team** plans all three are on by default. On **Enterprise**, Whiteboards and Sheets are off by default, and Claude Data turns on by default on **November 19, 2026**.
- Claude Meetings won’t join calls with external guests unless an admin allows it, and leaves if one joins (TechCrunch). It works with Google Meet at launch.

TechCrunch frames this as Anthropic and OpenAI racing to turn their chatbots into office suites against Microsoft and Google.

**Why it matters to you:** If you pay for Claude, test Sheets and Whiteboards on one real tracker or planning session this week. They may replace a separate whiteboard or simple spreadsheet tool. Keep [Microsoft Copilot](/tools/microsoft-copilot/) or Excel for heavy formula work; see [best AI for Excel and Google Sheets](/blog/best-ai-for-excel-and-google-sheets-2026/), [ChatGPT vs Claude for Excel analysis](/blog/chatgpt-vs-claude-for-excel-analysis-2026/), [Claude Team pricing](/blog/claude-team-pricing-explained-2026/) and our [Claude review](/blog/claude-review-2026/). For meeting notes, compare [the best AI meeting notetakers](/blog/best-ai-meeting-notetakers/).

**Sources:** [Claude (Anthropic)](https://claude.com/resources/articles/sheets-whiteboards-data) · [Claude: interactive connectors](https://claude.com/resources/articles/interactive-connectors-full-tool) · [TechCrunch](https://techcrunch.com/2026/11/10/anthropic-launches-claude-meetings-to-turn-workplace-discussions-into-plans-and-tasks/)

---

## How big is Anthropic’s IPO?

**Short answer:** Anthropic launched its roadshow on November 10:

| | Anthropic IPO terms |
|---|---|
| Shares offered | **825,000,000** Class A (801.4M from Anthropic, 23.6M from existing holders) |
| Expected price | **$70–$78** per share |
| Raise | **$57.75B–$64.35B** (TechCrunch) |
| Valuation at top of range | Up to **$1.404 trillion**, fully diluted (vs **$965B** in May) |
| Private placement | **$26B** of non-voting Class N stock to AMD, Broadcom, Google, Micron, Microsoft, Nvidia and TSMC |
| Listing | Nasdaq Global Select Market, ticker **ANT** |

CNBC, citing people familiar with the plans, says pricing is expected **November 18** and trading **November 19**, with about **20%** set aside for retail investors. The registration statement is not yet effective.

**Why it matters to you:** A public Anthropic will report results every quarter, which puts Claude’s prices, limits and enterprise push under investor pressure. This is news, not investment advice.

**Sources:** [Anthropic](https://www.anthropic.com/news/roadshow-launch) · [TechCrunch](https://techcrunch.com/2026/11/10/anthropic-sets-ipo-price-range-of-70-to-78-per-share-to-reach-an-implied-valuation-of-1-404-trillion/) · [CNBC](https://www.cnbc.com/2026/11/10/anthropic-sets-price-range-of-70-to-78-in-upcoming-ipo.html)

---

## What is Qwen4-Max Preview, and can you use it?

**Short answer:** Alibaba’s next-generation flagship multimodal Qwen model (text, image and video in), built for coding, office work, front-end design and agents. It has a **1M-token** context, up to **393,216** output tokens (shared by thinking and the answer), thinking on by default (low / medium / xhigh, xhigh default), and it’s compatible with the OpenAI and Anthropic APIs.

The catch: it’s **Token Plan only** (no pay-as-you-go), and the preview runs from November 11 to the end of **November 25** (UTC+8), after which the model is retired. Alibaba’s docs list no per-token price or benchmark scores.

**Why it matters to you:** It’s an early look at Qwen4 for developers already on Token Plan. Since it disappears in two weeks and has no public price, test it, but don’t build on it. Compare current models on our [models page](/models/).

**Sources:** [Alibaba Cloud Model Studio docs](https://www.alibabacloud.com/help/en/model-studio/qwen4-max-preview)

---

## What did Baidu release with ERNIE 5.5 Flash Preview?

**Short answer:** The first post-trained model on its ERNIE 5.5 Flash Base: **280B** total parameters with **14B** active and a **1M-token** context, aimed at coding, 3D modeling, knowledge work and content creation. The API is live on Baidu’s Qianfan platform, and Baidu says the weights “will be open-sourced under Apache 2.0 soon”. Baidu calls it an intermediate checkpoint whose capabilities may still fall short in places.

**Why it matters to you:** A large model with a small active size is cheaper to run, so if the weights ship it becomes another self-hosting option. Until then it’s API-only. New to open weights? Start with [what open-source AI means](/blog/what-is-open-source-ai-2026/).

**Sources:** [Baidu ERNIE](https://ernie.baidu.com/release/ernie-5-5-flash-preview/)

---

## What is AlphaGenome 2?

**Short answer:** Google DeepMind’s next-generation DNA sequence model. It predicts how DNA sequences and their variants affect specific human cell types. DeepMind says it identifies **nearly twice** as many variants that change gene expression in cells as its previous state-of-the-art model, and it was trained on **more than 100 million** individual cell profiles across **68 tissues**. It’s available for non-commercial research through the AlphaGenome API, in private preview for commercial research, and is **not** validated for clinical or diagnostic use.

**Why it matters to you:** It’s a research tool, not a consumer app, but it shows frontier labs pushing AI deeper into biology, where better predictions can speed up disease research.

**Sources:** [Google DeepMind](https://deepmind.google/blog/alphagenome-2-deciphering-how-cells-read-dna-to-better-understand-disease/)

---

## What is Runway’s Praxis-1, and why open it?

**Short answer:** A **27B-parameter** mixture-of-experts “world action model” that predicts video and robot actions together. Runway introduced it in September and opened it to everyone on November 11 under **Apache 2.0**, including commercial use and the inference and fine-tuning code (full and LoRA).

| Model (NVIDIA RoboLab-120, Runway’s figures) | Success rate |
|---|---|
| **Praxis-1** | **46.2%** |
| FLUX 3 Action | 42.9% |
| Cosmos3 Nano | 36.8% |
| π0.5 | 28.0% |

It’s on GitHub, Hugging Face (with LeRobot support) and vLLM-Omni, and runs on NVIDIA hardware from H100/B200 data center GPUs to an RTX 5090 or Jetson Thor.

**Why it matters to you:** [Runway](/tools/runway/), best known for AI video, is handing robotics developers a free commercial model. See our [Runway review](/blog/runway-review-2026/).

**Sources:** [Runway](https://runway.com/news/company-news/praxis-1-is-now-available)

---

## What does New York’s RAISE Act require from AI labs?

**Short answer:** New York opened a registration portal on November 10. Large frontier AI developers (more than **$500 million** in annual revenue, such as OpenAI and Anthropic) must register by **January 1, 2027**, when the law takes effect. They must publish safety frameworks, report critical safety incidents within **72 hours** and issue model transparency reports. A new state office, DIGIT, enforces it, with penalties up to **$1 million** for a first violation and **$3 million** for later ones. Governor Hochul also launched the New York Center for AI Responsibility and Research at Binghamton University to independently test advanced AI systems.

**Why it matters to you:** The labs behind the tools you use will have to publish more about safety and report incidents fast, giving you more to go on when you pick a model.

**Sources:** [TechCrunch](https://techcrunch.com/2026/11/10/openai-anthropic-face-new-oversight-as-new-yorks-ai-safety-law-takes-effect/) · [Governor of New York](https://www.governor.ny.gov/news/governor-hochul-declares-ny-will-lead-nation-ai-science-and-safety-launches-new-research) · [NY DFS: frontier developers](https://www.dfs.ny.gov/digit/Frontier-Developers)

---

*Education only. Prices and features change; verify with the official sources above. Compare current model prices on our [models page](/models/) and browse the [AI tools directory](/tools/).*
