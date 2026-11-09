---
title: "AI News Roundup – November 9, 2026"
description: "Today’s AI news: Anthropic launches Claude Fable 5.2 and Mythos 5.2 at a 20% lower $8/$40 price; Meta’s Muse Ember undercuts Haiku on cost per task; Anthropic buys $3.4B of gas generators; Google adds TPU 8tx and 8i Max; ChatGPT Enterprise lands in AWS Marketplace; NVIDIA’s GR00T 2."
pubDate: 2026-11-09T15:30:00-05:00
tags: ["ai-news"]
relatedTools: ["claude", "claude-code", "meta-ai", "chatgpt", "gemini"]
sample: false
draft: false
---

## TL;DR

- **Anthropic** launched **Claude Fable 5.2** (available to all) and **Claude Mythos 5.2** (vetted organizations only) at **$8 / $40** per million input/output tokens, **20%** below Fable 5.1’s $10 / $50.
- **Meta** released **Muse Ember**, its smallest model, at **$0.10 / $0.50** per million tokens; Artificial Analysis says it matches Claude Haiku 5.5 (max) at about **a third** of the cost per task.
- **Anthropic** is buying **$3.4B** of Caterpillar gas generators for up to **1.7 GW** of data center power, per the Financial Times.
- **Google** added **TPU 8tx** (confidential inference) and **TPU 8i Max** (two TPU 8i chips in one package) to its eighth-generation TPUs.
- **ChatGPT Enterprise** is now sold through **AWS Marketplace**, using existing AWS billing and commitments.
- **NVIDIA** introduced **GR00T 2**, an open world action model for robots, and **Isaac Lab 3.0** at CoRL.

**Today’s take:** Fable 5.2 is cheaper, but it’s still **2x** the per-token price of [Claude](/tools/claude/) Opus 5.5 ($4 / $20), and Anthropic itself says most people should start with Opus 5.5. Pay for Fable only when the job is big, long and hard. Compare prices on our [models page](/models/).

---

## What’s new in Claude Fable 5.2 and Mythos 5.2?

**Short answer:** A faster, cheaper upgrade to Anthropic’s top model. Fable and Mythos are the **same underlying model**: Fable ships with strong cybersecurity and biology safeguards and is open to all users, while Mythos goes only to organizations approved through Anthropic’s Cyber and Life Sciences Verification Programs. Anthropic says 5.2 generates output up to **30%** faster than 5.1.

| | Claude Fable 5.2 | Claude Fable 5.1 | Claude Opus 5.5 |
|---|---|---|---|
| Input / output price (per 1M tokens) | **$8 / $40** | $10 / $50 | $4 / $20 |
| Fast mode (up to 2.5x faster) | $16 / $80 | — | — |
| Context / max output | 1M / 128K | 1M | 1M |

**Benchmarks Anthropic published** (highest effort unless noted):

| Benchmark | Fable 5.2 | Opus 5.5 | GPT-6 Astra | Gemini 4 Carbon |
|---|---|---|---|---|
| FrontierCode 2.0 (agentic coding) | **49.1%** (Xhigh) | 45.5% | 42.8% | 41.1% (Medium) |
| FrontierSWE v2 | **69.9%** | 62.3% | 65.5% | 61.2% |
| OSWorld 2.1 (computer use) | **89.3%** | 87.2% | 79.5% | 81.5% |
| AutomationBench (business workflows) | 51.4% | 42.5% | 41.4% | **53.9%** |
| Remote Labor Index | **41.3%** (High) | 21.3% | 20.8% | — |
| Humanity’s Last Exam (with tools) | **74.2%** | 67.7% | 57.2% | — |

Two details matter more than the top scores. First, at **High** effort Fable 5.2 scored about level with Opus 5.5’s best on FrontierCode (**45.3% vs 45.5%**) for roughly **half the cost per task**, according to Anthropic. Second, Fable 5.2’s safeguards block most cybersecurity tasks; blocked cyber queries get an answer from Opus 4.8 instead (Opus 5 for biology), though Anthropic reports about **55%** fewer blocks than Fable 5.1 in early testing.

Anthropic’s prerelease claims include solving two open black-hole physics problems, designing three working electronic devices and formalizing Fermat’s Last Theorem in **30 hours** with about 1,000 Fable 5.2 agents. This week, eligible paid plans get extra Fable usage (one to three Fable resets, and Fable counted for up to 50% of weekly limits on Pro and standard Team seats). Developers can use `claude-fable-5-2` on the Claude Platform, AWS, Google Cloud and Microsoft Azure.

**Why it matters to you:** The price cut makes Fable easier to justify for long agent runs, but it’s not your new default. Anthropic recommends starting with Opus 5.5 and moving up only when a task needs it. See our [Claude pricing guide](/blog/claude-pricing-explained-2026/), [Anthropic API pricing](/blog/anthropic-api-pricing-explained-2026/) and [Claude Code review](/blog/claude-code-review-2026/).

**Sources:** [Anthropic](https://www.anthropic.com/claude-fable-and-mythos-5-2) · [Claude pricing docs](https://platform.claude.com/docs/en/about-claude/pricing) · [The Verge](https://www.theverge.com/ai-artificial-intelligence/1030005/anthropic-claude-fable-mythos-5-2) · [VentureBeat](https://venturebeat.com/technology/anthropic-releases-claude-fable-5-2-and-mythos-5-2-pairing-new-record-high-benchmarks-with-20-api-cost-reduction)

---

## Is Meta’s Muse Ember cheaper than Claude Haiku?

**Short answer:** Per task, yes, according to Artificial Analysis. Meta Superintelligence Labs released **Muse Ember**, its smallest model, built for the work agents repeat all day: tool calls, coding subtasks, routing, extraction and long documents. It takes text, image, audio and video input with a **1M-token** context.

| | Muse Ember (max) | Claude Haiku 5.5 (max) | GPT-6 Luna (max) |
|---|---|---|---|
| Price in / out (per 1M tokens, ≤200K context) | **$0.10 / $0.50** | $0.10 / $0.50 | $0.10 / $0.50 |
| AA Intelligence Index | 36 | 36 | — |
| Cost per Intelligence Index task | **$0.14** | $0.41 | — |
| AA Coding Agent Index (own harness) | **46** (Muse Code) | 37 (Claude Code) | 31 (Codex) |
| FrontierCode 2.0 | 27.2% | **34.9%** | — |

Ember’s cached input is **$0.004** per million tokens, 60% cheaper than its rivals’, and it uses fewer output tokens, which is where the per-task savings come from. Its weak spot is knowledge: it declines to answer 64% of AA-Omniscience questions, which keeps its hallucination rate at 17.4%. Meta’s pitch: “Muse Wonder plans, Muse Ember handles the volume.”

**Why it matters to you:** If you run lots of small agent steps, a cheaper sub-agent model cuts the bill more than a cheaper flagship does. See [Meta AI](/tools/meta-ai/) and our [Meta AI pricing guide](/blog/meta-ai-pricing-explained-2026/).

**Sources:** [Meta](https://dev.meta.ai/models/muse-ember) · [TechCrunch](https://techcrunch.com/2026/11/09/meta-releases-muse-ember-a-new-lightweight-model-for-agent-execution/) · [Artificial Analysis](https://artificialanalysis.ai/articles/meta-s-muse-ember-is-the-cheapest-model-scoring-36-on-the-intelligence-index)

---

## Why is Anthropic buying gas generators?

**Short answer:** To lock in power. Anthropic is spending **$3.4 billion** on Caterpillar natural gas generators that can produce up to **1.7 gigawatts**, according to a Financial Times report. The equipment had originally been ordered by supplier OnePWR, which couldn’t finance the purchase. TechCrunch notes Anthropic has generally preferred to rent infrastructure, and that gas turbine backlogs now stretch into the early 2030s. Google, Amazon, Microsoft and Meta have all announced on-site gas power plans.

**Why it matters to you:** Power limits how much compute a lab can run, and compute shapes the usage limits and prices on plans like [Claude](/tools/claude/) Pro and Max.

**Sources:** [TechCrunch](https://techcrunch.com/2026/11/09/anthropic-joins-ais-natural-gas-frenzy-buys-3-4b-worth-of-turbines/) · [CNBC](https://www.cnbc.com/2026/11/08/anthropic-generator-deal-ai-data-centers.html) · [DCD](https://www.datacenterdynamics.com/en/news/anthropic-signs-34bn-gas-generator-deal-to-support-17gw-of-data-center-power/)

---

## What are Google’s TPU 8tx and TPU 8i Max?

**Short answer:** Two new eighth-generation TPU systems, Google’s third and fourth this year after TPU 8t and 8i in April.

| System | Built for | What Google says |
|---|---|---|
| **TPU 8tx** | Confidential inference for regulated businesses and governments | TPU 8t silicon + 5th Gen AMD EPYC hosts; data and model weights protected even while in use; up to **2x** lower latency than TPU 8t |
| **TPU 8i Max** | Huge context windows, many agents at once | Two TPU 8i chips in one package: **2x** the compute, SRAM and HBM bandwidth of TPU 8i, in the same rack footprint |

Google didn’t publish absolute specs, prices or regions for either system.

**Why it matters to you:** Long-context and private-data workloads are where cloud AI is heading, and this is the hardware behind [Gemini](/tools/gemini/) and Google Cloud. See our [Gemini pricing guide](/blog/gemini-pricing-explained-2026/).

**Sources:** [Google](https://blog.google/innovation-and-ai/infrastructure-and-cloud/global-network/tpu-8i-max-and-8tx/) · [The Verge](https://www.theverge.com/ai-artificial-intelligence/1029670/google-announced-two-new-versions-of-its-eighth-gen-ai-chips) · [SiliconANGLE](https://siliconangle.com/2026/11/09/google-advances-agentic-ai-custom-silicon-expanding-tpu-family-with-8tx-and-8i-max/)

---

## Can you buy ChatGPT Enterprise through AWS?

**Short answer:** Yes, as of today. OpenAI says ChatGPT Enterprise is available in **AWS Marketplace**, so organizations can buy it through their existing AWS billing and apply eligible spend toward AWS commitments. AWS buyers get the same models and features as buying from OpenAI directly, including ChatGPT Work, Codex and dots, and eligible customers can also get ChatGPT for Healthcare and ChatGPT for Financial Services. OpenAI says more than **1.2 billion** people use ChatGPT each week.

**Why it matters to you:** If your company already runs on AWS, getting [ChatGPT](/tools/chatgpt/) Enterprise approved may now be a procurement step, not a new vendor contract. See our [ChatGPT Enterprise pricing guide](/blog/chatgpt-enterprise-pricing-explained-2026/).

**Sources:** [OpenAI](https://openai.com/index/chatgpt-enterprise-aws-marketplace/)

---

## What is NVIDIA’s GR00T 2?

**Short answer:** An open “world action model” for robots, introduced at the Conference on Robot Learning in Austin. Built on NVIDIA Cosmos and trained on robot and human data, including **100,000 hours** of NVIDIA’s open human egocentric video, GR00T 2 can learn skills from human demonstrations and move them between robot bodies. NVIDIA says it completed **40 of 50** evaluated tasks at least once with no task-specific demos, and hit **71%** average success with one demo per task, rising to **95%** with five. Foxconn, Siemens and Nexuni are testing it. NVIDIA also released Isaac Lab 3.0, which reached up to **2.5x** the training throughput of Isaac Lab 2.3 in one benchmark.

**Why it matters to you:** Agents that write code are starting to drive physical robots through APIs like GR00T 2’s, so the agent skills you build now will carry over.

**Sources:** [NVIDIA](https://blogs.nvidia.com/blog/robotics-simulation-advancements-corl/) · [NVIDIA Research](https://research.nvidia.com/labs/gear/gr00t-2/)

---

*This roundup is for education only and isn’t financial advice. Benchmark scores and performance figures are as reported by their publishers; the generator deal is based on press reports of an FT story.*
