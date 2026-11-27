---
title: "AI News Roundup – November 27, 2026"
description: "Today’s AI news: Reuters says chip curbs and a distillation crackdown are delaying Z.ai’s GLM-5.5 and Moonshot’s Kimi K4; Nvidia reportedly halts server shipments to four Southeast Asian countries; Microsoft on the ARTEX AI attack framework; Tencent’s open DFly2; Kimi for Science credits; Huawei’s HBM design."
pubDate: 2026-11-27T15:30:00-05:00
tags: ["ai-news"]
relatedTools: ["deepseek", "microsoft-copilot"]
sample: false
draft: false
---

## TL;DR

- **China’s next big AI models are running late.** Reuters says Z.ai’s **GLM-5.5** (about **3 trillion** parameters) missed its November target and could slip to **Q1 2027 or later**, and Moonshot’s **Kimi K4** could slip to around **mid-2027**. The causes: a new US compute rule and tougher anti-distillation safeguards.
- **Nvidia has reportedly stopped server shipments** to Malaysia, Singapore, Thailand and Indonesia while partners work through new US export rules.
- **Microsoft says state-backed and criminal hackers are running ARTEX**, an open-source AI agent framework that can go from scouting to privileged access in minutes.
- **Tencent open-sourced DFly2**, a drafter that it says lifts DeepSeek-V4.1-Flash serving throughput by up to **81%** on long-context work.
- **Moonshot’s Kimi for Science** offers researchers up to **$20,000** in free Kimi API credits. Apply by **Dec 8**.
- **Huawei will show an AI memory (HBM) design** with twice the interface width of the HBM4 standard at ISSCC in February.

**Today’s take:** Black Friday is quiet for launches, but the supply side of AI is moving. Compute rules, chip shipments and memory now shape which models ship and when, and that includes the low-cost models many people use every day.

---

## Why are China’s next AI models running late?

**Short answer:** Less compute and fewer shortcuts. Reuters reported on Nov 26, citing people familiar with the matter, that **Z.ai** (Zhipu AI) planned to release its next flagship, **GLM-5.5**, this month but hasn’t. The model is designed with roughly **3 trillion parameters**. It has been held up partly by stronger safeguards against **distillation**, where a developer trains a model on answers from a more capable one.

Z.ai hoped to ship by year-end. But a US Commerce Department rule that took effect on **Nov 19** puts licensing requirements on Chinese companies’ access to large amounts of compute from advanced US chips in overseas data centers, and one person said that could push GLM-5.5 into **Q1 2027 or later**.

| Lab | Next flagship | What Reuters’ sources say |
|---|---|---|
| Z.ai | GLM-5.5 (~3T parameters) | Missed November; could slip to Q1 2027 or later |
| Moonshot AI | Kimi K4 | Could slip to around mid-2027 |
| Moonshot AI | Release rhythm | Six months between majors could stretch to 12+ if overseas compute is cut off entirely |

**Moonshot** rents compute abroad to train its models, so it is especially exposed. It has stepped up efforts to rent capacity in Europe, plans to approach Chinese chipmakers, and has started distilling from **Google** and **Meta** models as OpenAI and Anthropic outputs got harder to use. Anthropic said in September it saw nearly **200 million** Claude exchanges linked to suspected distillation campaigns attributed to Chinese developers, including Alibaba, Moonshot and Z.ai. The Next Web adds that Z.ai has partly switched on its own data center running Chinese chips. Z.ai shipped **GLM-5.4** (750B parameters) on Nov 23. Z.ai and Moonshot did not immediately respond to Reuters.

**Why it matters to you:** If you use low-cost Chinese models such as GLM, Kimi or [DeepSeek](/tools/deepseek/) through an API or a coding plan, don’t build plans around the next cheap flagship arriving on time. Budget with today’s models, and compare current prices on our [AI models page](/models/).

**Sources:** [Reuters (via Yahoo Finance)](https://finance.yahoo.com/news/exclusive-us-chip-curbs-distillation-071923947.html) · [The Next Web](https://thenextweb.com/news/moonshot-distilling-google-meta-zai-glm-5-5-delay)

---

## Why did Nvidia stop server shipments to four Southeast Asian countries?

**Short answer:** New US export rules. The Financial Times reported on Nov 26, citing three people familiar with the matter, that Nvidia told manufacturing partners to stop shipping servers with its chips to **Malaysia, Singapore, Thailand and Indonesia**. Partners such as **Dell** and **Supermicro** told buyers there that Nvidia wouldn’t let their orders ship.

It’s unclear whether the halt is temporary while Nvidia and its partners work out how to comply with US controls that took effect on **Nov 19**. Those rules require a US license to ship advanced AI chips to Indonesia, Malaysia, Singapore, Thailand and Brazil. Reuters couldn’t immediately verify the report, and Nvidia, Dell and Supermicro didn’t immediately respond. One cloud provider executive told the FT it is “causing sheer chaos in the region.”

**Why it matters to you:** Southeast Asia has become a big hub for rented GPU capacity. If you rent GPUs or use AI providers that run there, expect possible delays or price changes while the rules settle.

**Sources:** [Reuters via Investing.com](https://www.investing.com/news/stock-market-news/nvidia-halts-server-shipments-to-four-southeast-asian-countries-ft-reports-5053574) · [The Next Web](https://thenextweb.com/news/nvidia-halts-server-shipments-southeast-asia)

---

## What is ARTEX, and why is Microsoft warning about it?

**Short answer:** It’s an AI agent framework for hacking, and attackers are using it. In a Nov 25 report, Microsoft Threat Intelligence said **ARTEX**, an AI-powered penetration testing tool released as open source in July 2026, is being used by state-sponsored and financially motivated groups, including **Storm-0940, Onyx Sleet, Pearl Sleet, Crystal Typhoon and Salt Typhoon**.

Several AI agents set goals, plan steps, run common hacking tools and report back. Depending on its setup and the target’s defenses, ARTEX can go from reconnaissance to **persistent, privileged access in minutes**. It doesn’t invent new attacks. Microsoft says the most reliable sign is behavior: lots of varied requests at machine speed. In November, China-based ThreatBook claimed ownership and began selling “ARTEX Pro”; Help Net Security notes Microsoft doesn’t link the company to the attacks.

**Why it matters to you:** AI makes old attacks faster, so the basics matter more. Microsoft’s advice: cut what’s exposed to the internet, lock down credentials and secrets (no keys in repos), and limit how far an intruder can move. Our guide to [AI tools for security operations](/blog/best-ai-tools-for-security-ops-2026/) covers the defensive side.

**Sources:** [Microsoft Security Blog](https://www.microsoft.com/en-us/security/blog/2026/11/25/what-defenders-need-to-know-artex-agentic-ai-framework-threat-actors-abuse/) · [Help Net Security](https://www.helpnetsecurity.com/2026/11/27/artex-ai-pentest-framework-china-north-korea-state-hackers/)

---

## What does Tencent’s DFly2 do for open models?

**Short answer:** It makes some open models answer faster on long jobs. On Nov 26, Tencent’s Hunyuan AI Infra team open-sourced **DFly2** in full (weights, training code and a technical report). It’s a **speculative-decoding drafter**: a small helper that guesses the next few tokens so the main model can check them in one pass, so the output doesn’t change.

DFly2 works with natively sparse models (Tencent’s Hy4 and Hy4 flash, **DeepSeek-V4.1-Flash** and **GLM-5.3-Flash**). Instead of keeping its own memory of the prompt, it reuses the main model’s sparse KV cache and its choice of which positions to look at, so each draft token reads at most about **2K** keys at any context length.

| Tencent-reported result (DeepSeek-V4.1-Flash) | Number |
|---|---|
| Throughput vs. DSpark, two 64K-context sets (matched per-user speed) | **+62%** and **+81%** |
| End-to-end speedup vs. normal decoding (greedy, one user) | **2.97x** |

**Why it matters to you:** If you self-host open models or choose providers for them, faster long-context decoding can mean cheaper, snappier agent runs. These are Tencent’s own numbers. For background, see [what open-source AI really means](/blog/what-is-open-source-ai-2026/).

**Sources:** [Tencent AngelSpec (GitHub)](https://github.com/Tencent/AngelSpec) · [DFly2 paper (Hugging Face)](https://huggingface.co/papers/2611.34776) · [MarkTechPost](https://www.marktechpost.com/2026/11/26/tencent-dfly2-speculative-decoding-sparse-models/)

---

## What is Kimi for Science?

**Short answer:** Free Kimi API credits for researchers. Moonshot AI opened **Kimi for Science** on Nov 27 (UTC). Selected researchers in the natural sciences, engineering and related fields can get up to **$20,000 in Kimi API credits** (about **7B tokens**), with the amount set by research needs and review. The credits pay for model usage, not cash.

Selected projects also get technical support from the Kimi team, early access to new models and options for longer-term collaboration. Applications for the first cohort close on **Dec 8**, and more cohorts are planned.

**Why it matters to you:** If you do research and want to test an open-weight, frontier-class model on real work, this is free compute. Check what data you’d be sending before you apply.

**Sources:** [Kimi for Science (kimi.ai)](https://www.kimi.ai/news/kimi-for-science-program) · [Kimi.ai on X](https://x.com/Kimi_Moonshot/status/2126154696947871760)

---

## What is Huawei’s new AI memory design?

**Short answer:** A wider pipe for AI chips. Bloomberg reported on Nov 26 that Huawei is preparing to share details of a new **high-bandwidth memory (HBM)** chip that could rival Samsung and SK Hynix. According to TrendForce, citing STAR Market Daily and the preliminary ISSCC 2027 agenda, Huawei will present a custom HBM design with **64 channels** and a **4096-bit interface**, twice the **2048-bit** width of the HBM4 standard, built with five-layer wafer-to-wafer hybrid bonding.

ISSCC runs **Feb 14–18, 2027** in San Francisco, and Huawei’s four papers are scheduled for Feb 16. Huawei already uses its own HBM in its Ascend 950 series.

**Why it matters to you:** Memory is one of AI’s tightest bottlenecks. More suppliers could ease prices over time, but this is a conference paper, not a product you can buy.

**Sources:** [Bloomberg](https://www.bloomberg.com/news/articles/2026-11-26/huawei-teases-next-gen-ai-memory-chip-to-take-on-samsung-hynix) · [TrendForce](https://www.trendforce.com/news/2026/11/26/news-huawei-reportedly-set-to-unveil-custom-hbm-architecture-with-twice-hbm4s-interface-width-and-hybrid-bonding)

---

## What this means for you

The model you pay for depends on chips, rules and data centers you never see, and today’s news shows that chain can slow down or stop with little warning. Pick your AI tools based on what ships and works today, not on promised releases, and keep at least one fallback model from a different provider in your workflow. If you run agents or self-host, spend this quiet week on the boring work: rotate old API keys and review what your setup exposes to the internet.

- If cheap APIs are part of your stack: [DeepSeek pricing explained](/blog/deepseek-pricing-explained-2026/).
- Need a backup assistant from another company? See our [ChatGPT alternatives guide](/blog/chatgpt-alternatives-2026/).
- Compare model prices, context sizes and open-weight status on our [AI models page](/models/).

---

*Education only. Prices, plans and availability can change; verify with the official sources above. Compare current model prices on our [models page](/models/) and browse the [AI tools directory](/tools/).*
