---
title: "AI News Roundup – November 2, 2026"
description: "Today’s AI news: SemiAnalysis’s new GDPx benchmark finds the best AI agent scores just 12% on expert work; OpenAI’s LifeVal tests everyday tasks; OpenAI’s Grid Protectors Program; OpenAI’s Abu Dhabi deals; Aramco takes 49% of HUMAIN; Meituan’s LongCat-2.5; and Claude stops cloning games."
pubDate: 2026-11-02T15:45:00-05:00
tags: ["ai-news"]
relatedTools: ["claude", "gemini", "chatgpt", "claude-code", "openai-codex", "deepseek", "grok", "meta-ai"]
sample: false
draft: false
---

## TL;DR

- **SemiAnalysis** launched **GDPx**, 206 long-running agent tasks across 11 high-value fields. The best model, **Claude Opus 5.5**, scores just **12.0%**. **Gemini 4 Carbon** is close at **10.9%** for about a third of the cost per task.
- **OpenAI** published **LifeVal**, an evaluation of everyday-life tasks like childcare, budgets and groceries, built from time-use surveys and a new survey of 3,995 people.
- **OpenAI’s Grid Protectors Program** will have its future compute campuses cut power use when grids are strained, starting with up to **1,000 MW** of flexible demand in Georgia.
- **OpenAI** signed a batch of **Abu Dhabi** deals spanning energy, government and investment while it raises up to **$20 billion**, CNBC reports.
- **Aramco** closed its deal for **49% of HUMAIN**, Saudi Arabia’s AI company, with about **$2.6 billion** in cash plus AI assets.
- **Meituan** released **LongCat-2.5**, a **1.6-trillion-parameter** multimodal model aimed at agentic coding.
- **Anthropic** updated **Claude** so it won’t build a recreation of a specific existing video game. Original and genre games are still fine.

**Today’s take:** The leaderboard winner isn’t automatically the best buy. On GDPx, the top three models are separated by 2.4 points, while their cost per task ranges from about $16 to $54. Pick models on cost per useful result for your own work, not on rank alone.

---

## How hard is GDPx, the new AI agent benchmark?

**Short answer:** Very hard. In SemiAnalysis’s words, “GDPx is a true frontier-level benchmark: even the best model scores just 12%.” Its 206 tasks cover chip design, cybersecurity, biology, finance, legal, quant trading, recursive self-improvement, hardware design, materials science, alignment and software engineering, built with 14 specialized data partners.

| Model | GDPx score | Avg cost per task |
|---|---|---|
| Claude Opus 5.5 | 12.0 | $51.41 |
| Gemini 4 Carbon | 10.9 | $16.29 |
| GPT-6 Astra | 9.6 | $53.99 |
| Muse Wonder Full | 9.0 | no public price |
| GPT-6.1 Sol | 8.4 | $9.80 |
| Claude Sonnet 5.5 | 8.2 | $45.27 |
| Gemini 4 Argon | 7.3 | $12.79 |
| DeepSeek 4.1 Flash | 5.4 | $0.94 |
| GPT-6 Luna | 5.1 | $0.92 |
| Grok 4.7 | 3.9 | $16.34 |

*Scores and costs from the [GDPx leaderboard](https://gdpx.semianalysis.com/); selected models shown.*

- Tasks run for up to **8 hours** in realistic work environments, such as a ~4,000-file private-equity deal room. Models used their own tools where available: Claude Code for Opus 5.5, Codex for GPT-6 Astra and Antigravity for Gemini 4 Carbon.
- The headline score is single-attempt performance averaged over three runs, with every domain weighted equally.
- **Finance and legal** were so hard that basically every model scored **exactly 0** under strict pass/fail grading, so the leaderboard uses partial scores there.
- Safety classifiers pulled down Opus 5.5 and GPT-6 Astra in cyber, biology and alignment. Remove those three domains and the ranking changes.
- Each model has spikes. Opus 5.5 leads quant trading, hardware and chip design. Gemini 4 Carbon leads biology and edges out software engineering. GPT-6 Astra leads recursive self-improvement and materials science. SemiAnalysis calls Meta’s Muse Wonder Full “the best available cyber model today by a meaningful margin.”
- Gemini 4 Carbon isn’t generally available yet. SemiAnalysis plans new GDPx versions every 3–6 months.

**Why it matters to you:** Even the best agents still fail most real expert work, so keep a human reviewing anything high-stakes. And because the top models are close in score but far apart in price, test a cheaper model on your own tasks before paying for the top one. Compare [Claude](/tools/claude/), [Gemini](/tools/gemini/) and [ChatGPT](/tools/chatgpt/) in [ChatGPT vs Gemini vs Claude](/blog/chatgpt-vs-gemini-vs-claude-2026/), check API prices on our [models page](/models/), and see [Claude Code](/tools/claude-code/) vs [Codex](/tools/openai-codex/) in [the best AI coding assistants](/blog/best-ai-coding-assistants-2026/).

**Sources:** [SemiAnalysis](https://newsletter.semianalysis.com/p/gdpx-measuring-frontier-model-capabilities) · [GDPx leaderboard](https://gdpx.semianalysis.com/) · [9to5Google](https://9to5google.com/2026/11/02/gemini-4-carbon-benchmark/)

---

## What is OpenAI’s LifeVal?

**Short answer:** An evaluation of how well AI handles everyday-life tasks, not exams. OpenAI built it from the American Time Use Survey, the Multinational Time Use Study and a new representative survey of **3,995** people about where they’d most want help.

| Example LifeVal task | Score shown by OpenAI |
|---|---|
| Find a home that fits a family’s budget and commute | 100% |
| Organize flood-prep volunteers | 98.0% |
| Set up remote game-watching with grandma | 96.3% |
| Enroll in the right kindergarten after moving | 93.1% |
| Meal plan for a new diabetes diagnosis | 90.4% |

- Areas include caregiving, health, education, household admin, personal finances, shopping and government services.
- OpenAI says it used LifeVal over the past year to improve browser use, computer use and connectors, and that its latest models score very highly on many tasks.

**Why it matters to you:** Put it next to GDPx: AI agents are getting very good at routine personal errands while still failing most expert work. That’s a good guide for what to hand off today. See [ChatGPT](/tools/chatgpt/) and [what an AI agent is](/blog/what-is-an-ai-agent-2026/).

**Sources:** [OpenAI](https://openai.com/index/lifeval)

---

## What is OpenAI’s Grid Protectors Program?

**Short answer:** A pledge that OpenAI’s future compute campuses will reduce electricity use when the local grid is under strain, under terms agreed with each utility.

- The first model is OpenAI’s planned **Effingham County, Georgia** campus. Its Georgia Power agreement includes up to **1,000 MW** of flexible demand response, which OpenAI says equals the average demand of roughly **700,000 households**.
- OpenAI says it will pay the **full infrastructure and electric-service costs** to serve that campus.
- Terms will differ by location, and OpenAI says it will share more commitments as they’re finalized. The Next Web notes no other sites have been named yet.

**Why it matters to you:** Data-center power bills are becoming a public issue. How AI companies handle them could affect where new capacity gets built and how fast. Learn the basics in [AI inference vs training](/blog/what-is-ai-inference-vs-training-2026/).

**Sources:** [OpenAI](https://openai.com/index/grid-protectors-program/) · [The Next Web](https://thenextweb.com/news/openai-grid-protectors-program-demand-response-georgia)

---

## What deals did OpenAI sign in Abu Dhabi?

**Short answer:** Several at once, after Sam Altman met Abu Dhabi’s Crown Prince, CNBC reports, citing the Abu Dhabi Media Office:

| Partners | Deal |
|---|---|
| ADNOC, G42 + OpenAI | Deploy OpenAI frontier technology across ADNOC’s operations |
| Mubadala, Inception42 + OpenAI | Apply advanced AI to investment analysis |
| Abu Dhabi Government + OpenAI | Turn government policies and regulations into machine-readable form |
| Inception42 + OpenAI | Five-year agreement for AI adoption in government, enterprise and education |

CNBC says OpenAI is seeking up to **$20 billion** in a new round co-led by UAE investors.

**Why it matters to you:** Big government and energy contracts help fund the compute behind the tools you use, and they show where OpenAI is focusing its enterprise push. See [ChatGPT](/tools/chatgpt/).

**Sources:** [CNBC](https://www.cnbc.com/2026/11/02/openai-abu-dhabi-ai-deals.html)

---

## Why did Aramco buy 49% of HUMAIN?

**Short answer:** To become co-owner of Saudi Arabia’s national AI company. Aramco and PIF closed the deal on **Nov 1**: Aramco takes **49%** and PIF keeps **51%**. Aramco contributes about **SAR 9.9 billion ($2.6 billion)** in cash in 2026, plus AI, compute and digital assets.

- HUMAIN, launched in May 2025, plans **3 GW** of AI data-center capacity by 2030 and builds models including **ALLaM**, an Arabic multimodal LLM.
- Aramco says it has achieved **$11.3 billion** in “Technology Realized Value” since 2023, a significant share from AI.

**Why it matters to you:** Gulf money is now a major source of AI compute, alongside OpenAI’s Abu Dhabi deals above. More capacity worldwide can mean more choice of models and regions. Read [what open-source AI is](/blog/what-is-open-source-ai-2026/) for how national models fit in.

**Sources:** [Aramco](https://www.aramco.com/en/news-media/news/2026/pif-and-aramco-close-humain-transaction-to-accelerate-humains-global-growth)

---

## What is Meituan’s LongCat-2.5?

**Short answer:** A **1.6-trillion-parameter** natively multimodal model with about **48 billion** parameters active per token, built for long agentic coding jobs and visual tasks.

- It represents images as discrete tokens, so one backbone handles pictures and text together.
- Meituan’s own benchmarks: **88.4** on Terminal Bench v2.1, **91.9** on BrowseComp and **83.1** on MCP Atlas. Claude Opus 5 still scores higher on several coding tests, such as Terminal Bench v4.0 (53.9 vs 38.5).
- Meituan ran the coding benchmarks inside harnesses including Claude Code and Codex.
- Cocoloop reports the weights aren’t out yet; GitHub and Hugging Face are listed as “coming soon.”

**Why it matters to you:** Another big Chinese model is aiming at coding agents. If the weights ship, it could be a cheaper option to run in tools you already use. These are self-reported scores, so wait for independent tests. Compare [DeepSeek](/tools/deepseek/) and see our [models page](/models/).

**Sources:** [LongCat (Meituan)](https://longcat.ai/blog/longcat-2.5/) · [Cocoloop](https://news.cocoloop.cn/en/2026/11/longcat-25-release-no-weights/)

---

## Will Claude still help you build video games?

**Short answer:** Yes, as long as it isn’t a copy. Engadget reports Claude’s new instructions say: “Do build original games, games in a genre, and games from the user’s own designs and assets. Do not build a recreation of a specific existing game, even if it is renamed or called original.”

- Anthropic’s Addy Osmani confirmed the change on X, saying using Claude to infringe IP is against its usage policy, and that Anthropic will “continue to iterate” on the balance.
- It follows a wave of AI-assisted decompiled AAA games showing up as browser fan projects.

**Why it matters to you:** If you vibe-code games, describe your own design or a genre (“a 2D platformer with grappling hooks”) instead of naming a game to clone. See [Claude](/tools/claude/) and [Claude Code](/tools/claude-code/).

**Sources:** [Engadget](https://www.engadget.com/2303469/anthropic-updates-claude-to-stop-it-from-recreating-existing-video-games/)

---

## Where can I follow daily AI news?

Every roundup lives on our [AI news page](/ai-news/), with sources for each story. Browse the [AI tools directory](/tools/) to compare the tools mentioned here.

*Figures are as reported by the companies and outlets linked above. Benchmark scores and costs are SemiAnalysis’s own results. This roundup is for education only; verify primary sources before making decisions.*
