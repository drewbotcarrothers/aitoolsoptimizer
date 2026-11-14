---
title: "AI News Roundup – November 14, 2026"
description: "Today’s AI news: Gemini can now read your Google Wallet and linked bank and card accounts (read-only) to help with budgets and subscriptions; DeepSeek opens search, OCR and voice in its API; Blackwell fingerprints in six Chinese models; LangChain hits $3B; banks shut China out of Anthropic’s IPO."
pubDate: 2026-11-14T15:30:00-05:00
tags: ["ai-news"]
relatedTools: ["gemini", "chatgpt", "deepseek", "claude"]
sample: false
draft: false
---

## TL;DR

- **Google** added **Google Wallet** to [Gemini](/tools/gemini/)’s connected apps. Every **Gemini app user in the US** can now let Gemini read their spending (and, through **Plaid**, linked bank and card accounts) to chart cash flow, find forgotten subscriptions and build budgets. It’s **read-only**: Gemini can’t move, manage or invest your money.
- **DeepSeek** opened the features behind its app (web search, file input, URL reading, safety checks) in its API, plus standalone **Search, Fetch, OCR, speech-to-text and text-to-speech** APIs.
- A former OpenAI engineer says **six Chinese AI models**, including DeepSeek-V4-Pro, Kimi K3 and MiniMax-M3, carry a fingerprint of **export-controlled Nvidia Blackwell** GPUs.
- **LangChain** raised **$300M at a $3B valuation**; more than **7,000 organizations** use its LangSmith agent platform.
- Banks are rejecting orders from **mainland China and Hong Kong** for **Anthropic’s IPO**, Bloomberg reports; pricing is expected **November 18**.

**Today’s take:** One day after ChatGPT’s agent learned to *spend* your money, Gemini learned to *read* it, and Google drew the line in the opposite place. ChatGPT Wallet needs ChatGPT Pro ($100 a month and up); Gemini’s Wallet connection is open to every US Gemini app user, including the free plan, and can’t make a single payment. For most people the second one is more useful today: ask it which subscriptions you’re still paying for and which ones went up.

---

## What can Gemini do with your Google Wallet and bank accounts?

**Short answer:** Since November 13, you can connect Google Wallet to [Gemini](/tools/gemini/) under **Personal Intelligence > Connected Apps**, then tag **@Google Wallet** in a chat. You can also link bank and credit card accounts to Wallet through **Plaid** (Plaid says that can include bank accounts, credit cards, loans and investment accounts).

| Ask Gemini to… | What Google says it does |
|---|---|
| Review your spending | Builds charts for cash flow, asset allocation and budgets in the chat (Google’s example: save $1,000 over the next three months) |
| Find forgotten subscriptions | Finds recurring charges across linked accounts and flags price increases this year |
| Plan a holiday budget | Looks at last year’s gift and travel spending and suggests a budget |

**What it can’t do:** Gemini gets **read-only** access. It can’t move, manage or invest money. The connection is opt-in and you can switch it off any time; Plaid links can be managed in Plaid Portal. Google also added **Memory Summary** (Profile > Personal Intelligence > Memory Summary), a readable, editable list of what Gemini remembers about you.

**How it compares with ChatGPT Wallet (launched the day before):**

| | Gemini + Google Wallet | ChatGPT Wallet |
|---|---|---|
| What the AI can do | Read your spending, chart it, suggest budgets | Pay for purchases through your [dots](/tools/openai-dots/) agent |
| Can it spend money? | **No** (read-only) | Yes, after you approve each purchase with Face ID or a fingerprint |
| Who gets it | All Gemini app users in the US (web, Android, iOS) | ChatGPT Pro, US, 18+ |
| Plan price (per our tools pages) | Gemini is free with a Google account; Google AI Plus $4.99, Pro $19.99 | ChatGPT Pro $100, $200 or $500 a month |

**Why it matters to you:** A free, read-only money assistant is a much easier first step than an agent that can check out for you. If you’re in the US, try one question (“what subscriptions am I still paying for, and did any go up this year?”) and then decide whether you want the connection left on. Compare plans in our [Gemini review](/blog/gemini-review-2026/) and [Gemini pricing guide](/blog/gemini-pricing-explained-2026/), see [yesterday’s ChatGPT Wallet story](/blog/ai-news-roundup-2026-11-13/), and check [which AI subscription is worth paying for](/blog/which-ai-subscription-is-worth-paying-for/).

**Sources:** [Google: Connect Google Wallet to Gemini](https://blog.google/innovation-and-ai/products/gemini-app/google-wallet-gemini-app/) · [Plaid](https://plaid.com/blog/google-wallet-gemini-plaid/) · [Android Central](https://www.androidcentral.com/apps-software/ai/gemini-can-now-tap-into-google-wallet-to-help-manage-your-money) · [Engadget](https://www.engadget.com/2316384/google-now-lets-people-connect-gemini-to-their-bank-accounts/)

---

## What did DeepSeek add to its API, and what does it cost?

**Short answer:** On November 13, [DeepSeek](/tools/deepseek/) made the features behind its app available to developers. The `deepseek-flash` model (V4.1-Flash) now handles **web and image search with citations, deep-thinking search, file input (PDF, Office, images), URL reading and safety checks** in the Messages, Responses and Chat Completions APIs, with the tool calls run on DeepSeek’s side. Search, Fetch, OCR, ASR (speech-to-text) and TTS are also separate APIs, and DeepSeek open-sourced a demo chat client that can import your DeepSeek chat history. Public-facing apps must turn on the safety checks.

| Tool (DeepSeek pricing page) | Price |
|---|---|
| Search (text or image) | $0.75 per 1,000 searches |
| Web fetch | $0.75 per 1,000 fetches |
| File parsing / OCR | $0.225 per 1,000 pages |
| Text-to-speech | $0.45 per 10,000 characters ($0.225 during a limited 50% off) |
| Speech-to-text | $0.116 per hour of audio ($0.058 during a limited 50% off) |

Tool fees are charged **on top of** tokens; `deepseek-flash` is $0.30 in / $1.20 out per million tokens at peak, half that off-peak (see our [Models page](/models/)).

**Why it matters to you:** You can build a chat app with search, document reading and voice on one inexpensive API instead of wiring up three or four vendors. Budget for the per-search fee, because it applies whether you call search yourself or the model decides to search. More in our [DeepSeek review](/blog/deepseek-review-2026/) and [DeepSeek pricing guide](/blog/deepseek-pricing-explained-2026/).

**Sources:** [DeepSeek API news](https://api-docs.deepseek.com/news/news261113/) · [DeepSeek change log](https://api-docs.deepseek.com/updates) · [DeepSeek pricing](https://api-docs.deepseek.com/quick_start/pricing)

---

## Were Chinese AI models trained on banned Nvidia chips?

**Short answer:** That’s the claim in a forensic report from **Will DePue**, a former OpenAI engineer who now runs Unemployment Labs. He says **six Chinese open-weight models**, including **DeepSeek-V4-Pro, Kimi K3 and MiniMax-M3**, were initialized on Nvidia **Blackwell** systems, four of them matching Grace Blackwell (GB200/GB300). The labs named are DeepSeek, Moonshot AI, MiniMax and Ant Group.

How it works: when a model’s weights are first set up with the Philox random-number generator through Nvidia’s cuRAND library, the starting pattern depends on the exact GPU layout and seed, and traces survive training. DePue says he searched **more than six trillion** chip-layout and seed combinations. His own caveat: the fingerprint shows Blackwell was used, **not where the chips were**. They could have been rented from US cloud providers.

**Why it matters to you:** If the finding holds up, it adds pressure for tighter chip and cloud export rules, which could change how quickly the cheapest open-weight models keep improving. For background, see [Nvidia’s CEO change](/blog/ai-news-roundup-2026-11-12/) earlier this week.

**Sources:** [The Register](https://www.theregister.com/ai-and-ml/2026/11/13/chinese-ai-labs-are-training-models-on-nvidias-blackwell-despite-export-controls-says-ex-openai-engineer/5309891) · [The Decoder](https://the-decoder.com/former-openai-researcher-says-he-found-nvidia-blackwell-fingerprints-hidden-inside-six-chinese-ai-models/)

---

## Why is LangChain now worth $3 billion?

**Short answer:** LangChain raised a **$300M Series C at a $3B valuation**, led by CapitalG, with GIC, DFJ Growth, IVP and Sapphire Ventures, plus Salesforce Ventures, Insight Venture Partners, QuantumLight, MongoDB Ventures, Sequoia, Amplify and Benchmark. It says **more than 7,000 organizations** use **LangSmith**, its platform to run, improve and govern AI agents, and that Workday cut the time to deploy a new agent from five months to under a day. More LangSmith features are due at a release event on **Friday, November 20**.

**Why it matters to you:** The money is moving to the layer that keeps agents reliable and under control, not just the models. If your team runs agents, look at how you handle [agent budget caps](/blog/what-is-ai-agent-budget-cap-2026/) and [agent orchestration](/blog/what-is-ai-agent-orchestration-2026/), and watch the November 20 release.

**Sources:** [LangChain](https://www.langchain.com/blog/series-c) · [TechCrunch](https://techcrunch.com/2026/11/13/ai-agent-startup-langchain-hits-3b-valuation/)

---

## Why can’t investors in China buy into Anthropic’s IPO?

**Short answer:** Several banks have rejected orders from institutional investors in **mainland China and Hong Kong**, or consider allocations unlikely, Bloomberg reports, with some people involved citing **ITAR**, the US export-control rules for defense-related goods. Anthropic declined to comment. **Goldman Sachs** and **Morgan Stanley** lead the offering with 20 other banks, and the stock is expected to trade on Nasdaq as **ANT** after pricing on **November 18**.

**Why it matters to you:** Frontier AI labs are increasingly treated as strategic national assets, right down to who can own their shares. Our [Claude](/tools/claude/) page and [Anthropic API pricing guide](/blog/anthropic-api-pricing-explained-2026/) cover what you can use today; the IPO terms were in our [November 11 roundup](/blog/ai-news-roundup-2026-11-11/).

**Sources:** [Bloomberg](https://www.bloomberg.com/news/articles/2026-11-13/anthropic-ipo-share-orders-from-china-are-said-to-be-rebuffed) · [The Decoder](https://the-decoder.com/banks-bar-chinese-and-hong-kong-investors-from-anthropic-ipo-over-us-export-controls/)

---

*Education only. Prices and features change; verify with the official sources above. Compare current model prices on our [models page](/models/) and browse the [AI tools directory](/tools/).*
