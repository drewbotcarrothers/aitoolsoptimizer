---
title: "AI News Roundup – November 21, 2026"
description: "Today’s AI news: Thinking Machines’ free, open Inkling 2 Mini runs on a 32GB Mac; Claude computer use reaches Team and Enterprise; Cursor may phase out Chinese models; Antigravity resets Gemini quota; Cognition eyes $75B; Amazon nears Decart; Trump’s data center tax threat."
pubDate: 2026-11-21T15:30:00-05:00
tags: ["ai-news"]
relatedTools: ["claude", "cursor", "gemini", "devin-desktop"]
sample: false
draft: false
---

## TL;DR

- **Thinking Machines released Inkling 2 Mini**, an open-weights (Apache 2.0) model small enough to run on an Apple silicon Mac with **32GB** of memory. It has **26.4B** parameters, a **1M**-token context, and its maker says it leads open models under 100B on coding tests.
- **Claude computer use is in beta for Team and Enterprise plans.** It’s off by default, and only an Owner can turn it on.
- **Cursor told Congress it may phase out Chinese open-weight models**, according to a House report. Its Composer 2 model was built on Moonshot’s Kimi K2.5.
- **Google reset everyone’s Gemini quota in Antigravity** after a caching fix that makes quota go **22%** further.
- **Cognition, the maker of Devin, is in talks to raise at about $75B**, Bloomberg reports.
- **Amazon is close to buying AI start-up Decart** in a deal worth up to **$7.5B**, the FT reports.
- **President Trump threatened a “tremendous tax”** on US companies that build AI data centers abroad.

**Today’s take:** Inkling 2 Mini is the one to try this weekend if you have a Mac with 32GB or more. It’s free, it works offline, and on its maker’s coding tests it leads every open model under 100B parameters. Just use it for coding and tool tasks, not facts, and know that PC support in Ollama hasn’t shipped yet.

---

<div class="video-embed" style="position:relative;width:100%;max-width:960px;aspect-ratio:16/9;margin:1.5rem 0;border-radius:12px;overflow:hidden;background:#000;">
  <iframe src="https://www.youtube-nocookie.com/embed/4Ttt-OpGpyo" title="Inkling 2 Mini: Free AI for Your Mac" style="position:absolute;inset:0;width:100%;height:100%;border:0;" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## What is Inkling 2 Mini, and can your laptop run it?

**Short answer:** It’s a free, open model from Thinking Machines Lab (released Nov 20) that fits on one laptop. The checkpoint is about **20GB**, and the lab supports Apple silicon Macs with **32GB or more** of memory, one NVIDIA DGX Spark, or other GPUs with 32GB+ of VRAM.

It’s a **looped transformer**. The model has 24 layers, and the middle 12 run three times for every token, so it does the work of 48 layers with the weights of 24. Thinking Machines says this lets it reason more and reach answers with fewer tokens. It has **26.4B** total parameters, **3.4B** active (**5.4B** counting the loops), text and image input, and up to **1M** tokens of context.

| Benchmark (Thinking Machines’ numbers) | Inkling 2 Mini | Qwen3.8-27B |
|---|---|---|
| Artificial Analysis Index v5.0 | 20.1 | 20.1 |
| DeepSWE v1.1 (agentic coding) | 48.2% | 42.2% |
| SWE-bench Verified (bash only) | 79.2% | 77.8% |
| Parameters (active / total) | 5.4B / 26.4B | 27B / 27B |

*Scores as reported by Thinking Machines; setups vary by model.*

| How to run it | What you need |
|---|---|
| Ollama (`ollama run inkling-2-mini`) | Ollama 0.40.17 pre-release; Apple silicon only for now (PC support “in an upcoming release”) |
| llama.cpp / Unsloth GGUF, MLX, vLLM, SGLang | Your own hardware (32GB+ recommended) |
| Tinker / Tinker Playground | No local hardware; hosted inference and fine-tuning |

**The catch:** Looping helps reasoning, not memory. Thinking Machines says its factual knowledge is in line with other models its size, so it leans on search and tools. It also trails Qwen3.8-27B on multi-turn chat and on instructions with many constraints. In a demo, it ran offline on a MacBook Pro (M5 Pro, 48GB) in airplane mode and built a playable flight simulator.

**Why it matters to you:** It’s a strong coding and agent model you can run for free, with no per-token bill, and your files never leave your machine. Check your Mac’s memory first (Apple menu > About This Mac). Give it search or tools for anything fact-heavy. Background: [what open-source AI means](/blog/what-is-open-source-ai-2026/), [what quantization is](/blog/what-is-quantization-in-ai-2026/), and the [models page](/models/).

**Sources:** [Thinking Machines Lab](https://thinkingmachines.ai/news/inkling-2-mini/) · [Model card](https://thinkingmachines.ai/model-card/inkling-2-mini/) · [Hugging Face](https://huggingface.co/blog/inkling2mini) · [Ollama library](https://ollama.com/library/inkling-2-mini) · [Ollama v0.40.17 notes](https://github.com/ollama/ollama/releases/tag/v0.40.17) · [@thinkymachines on X](https://x.com/thinkymachines/status/2123871643797995872)

---

## Can Claude use your computer on Team and Enterprise plans now?

**Short answer:** Yes, in beta, once an admin turns it on. Anthropic’s Nov 20 release notes say computer use is rolling out gradually to Team and Enterprise. [Claude](/tools/claude/) can see the screen and work in the desktop apps a user allows. It works in the new unified Claude experience in Claude Desktop (macOS 14 or later, and Windows), and from Claude on the web or mobile when Computer access is on.

It’s **off by default**. An Owner or Primary Owner turns it on in Organization settings > Capabilities, and Chat and Cowork unified must be on. Enterprise admins can limit it to certain roles. It isn’t available to organizations with HIPAA-ready, Zero Data Retention for Claude Code, customer-managed keys or FERPA/K-12 settings, and it doesn’t work in Cowork tasks or Claude Code.

Anthropic’s own warnings: there’s **no sandbox** between Claude and the user’s apps, content on screen could trigger unintended actions, and folder limits and “Read only” folders **don’t apply** to computer use. Screenshots are saved with the chat. Separately, Claude’s mobile app is getting a redesign with a bottom bar for chat, Projects, Code and Artifacts (The Verge).

**Why it matters to you:** If you run a Claude Team or Enterprise workspace, you decide who gets a desktop agent. Turn it on only for the roles that need it. Plans: [Claude pricing explained](/blog/claude-pricing-explained-2026/).

**Sources:** [Claude release notes](https://support.claude.com/en/articles/12138966-release-notes) · [Claude Help Center: Set up computer use](https://support.claude.com/en/articles/18483812-set-up-computer-use-for-team-and-enterprise-plans) · [The Verge](https://www.theverge.com/ai-artificial-intelligence/1039188/claude-has-a-new-mobile-design-too)

---

## Is Cursor dropping Chinese AI models?

**Short answer:** It’s exploring it. A joint report from the House Homeland Security Committee and the House Select Committee on China says Anysphere, which makes [Cursor](/tools/cursor/), plans to “explore phasing out PRC-developed open-weight models because of geopolitical risk.” CNBC reports that Cursor’s Composer 2 model was built on Moonshot AI’s **Kimi K2.5**. SpaceX completed its purchase of Cursor in August at an implied **$60B** equity value.

The report also names Airbnb and DoorDash as users of Chinese models. It recommends removing PRC-developed models from federal systems and high-risk critical infrastructure, and a “national American open-weight initiative.”

**Why it matters to you:** Nothing changes in Cursor today. If you rely on Composer models, the model underneath could change. Teams doing federal work should watch for procurement rules. Plans: [Cursor pricing explained](/blog/cursor-pricing-explained-2026/).

**Sources:** [CNBC](https://www.cnbc.com/2026/11/20/cursor-chinese-ai-models-geopolitical-risk.html) · [House Homeland Security Committee](https://homeland.house.gov/2026/11/20/chairmen-garbarino-moolenaar-release-joint-investigative-report-urging-removal-of-prc-open-weight-models-from-federal-systems-high-risk-critical-infrastructure/)

---

## Why did Google reset Antigravity’s Gemini quota?

**Short answer:** Because a caching problem burned it too fast. On Nov 20, Varun Mohan, who works on Google Antigravity, said the team was greatly increasing the cache pool for Gemini 4 Neon. That would raise the cache hit rate by around 4% and let quota go at least 20% further. On Nov 21 he reset everyone’s Gemini quota and said the fix makes quota go **22%** further.

**Why it matters to you:** If Neon used up your Antigravity allowance this week, you have a fresh one, and the same quota should now get more done. More on the plans: [Gemini pricing explained](/blog/gemini-pricing-explained-2026/) and [Gemini](/tools/gemini/).

**Sources:** [Varun Mohan on X (reset)](https://x.com/_mohansolo/status/2124070033534161407) · [Varun Mohan on X (cache change)](https://x.com/_mohansolo/status/2123848516581892181)

---

## How much is Cognition, the maker of Devin, worth now?

**Short answer:** About **$75B**, if talks reported by Bloomberg go through. Cognition is weighing a raise of **$2B or more**, two months after it raised over $2B at a **$48B** valuation in September. It has raised more than $3B this year, and most interest is coming from existing backers. The talks are ongoing and could change.

**Why it matters to you:** Investors are still betting biggest on AI coding agents. Expect [Devin](/tools/devin-desktop/) to keep expanding fast. See [Devin pricing explained](/blog/devin-desktop-pricing-explained-2026/).

**Sources:** [TNW (citing Bloomberg)](https://thenextweb.com/news/cognition-funding-75bn-valuation-bloomberg-devin) · [Reuters via StreetInsider](https://www.streetinsider.com/Reuters/Cognition+in+talks+for+new+funding+at+%2475+billion+valuation%2C+Bloomberg+News+reports/27381853.html)

---

## Why would Amazon buy Decart?

**Short answer:** For chips. The Financial Times reports Amazon is in advanced talks to buy AI start-up Decart in a deal worth up to **$7.5B**, which would help AWS compete with Nvidia for computing power. Calcalist reports the price is more than $7B in cash, stock and deferred payments, with part tied to targets. Decart makes software that lets developers switch more easily between AI chips, plus real-time world models such as Lucy and Oasis. Amazon gave it early access to its Trainium 3 chips. The deal isn’t signed yet.

**Why it matters to you:** Making it easy to move work off Nvidia GPUs is how AWS hopes to make its own chips a real option, which could shape what AI compute costs on AWS.

**Sources:** [Seeking Alpha (citing FT)](https://seekingalpha.com/news/4675396-amazon-nears-75b-deal-buy-ai-start-up-decart) · [Reuters via TradingView](https://www.tradingview.com/news/reuters.com,2026:newsml_L3N472034:0-amazon-in-advanced-stages-of-7-5-billion-deal-for-decart-ft/) · [Calcalist](https://www.calcalistech.com/ctechnews/article/uckadwd7r)

---

## What did Trump say about AI data centers abroad?

**Short answer:** That he won’t allow it, or will tax it. At a Nov 20 press conference, President Trump said, “We’re not going to allow our companies to build data centers outside of our country,” and that if they do, “we’re going to put a tremendous tax on them.” He gave no details and said he hadn’t yet told his staff, The Verge reports.

**Why it matters to you:** There’s no policy yet. But where AI companies can build affects how much computing capacity they have, and that affects the prices and usage limits you get.

**Sources:** [The Verge](https://www.theverge.com/policy/1038892/trump-foreign-data-centers-tax) · [AP](https://apnews.com/article/trump-artificial-intelligence-data-centers-f1ac03b73d13445400eeed8631d9d879)

---

*Education only. Prices and features change; verify with the official sources above. Compare current model prices on our [models page](/models/) and browse the [AI tools directory](/tools/).*
