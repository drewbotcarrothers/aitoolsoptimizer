---
title: "AI News Roundup – November 4, 2026"
description: "Today’s AI news: Reuters says OpenAI staff warned for years about lax security as OpenAI lifts bug bounties to $172K; OpenAI buys Codex tool maker Pierre; Tencent launches Hy4; an EU court adviser says Gemini answers can infringe publishers’ rights; Anthropic’s FlashProve; Claude Marketplace grows; Goldman limits Claude Code."
pubDate: 2026-11-04T15:30:00-05:00
tags: ["ai-news"]
relatedTools: ["chatgpt", "openai-codex", "claude", "claude-code", "gemini", "github-copilot", "runway"]
sample: false
draft: false
---

## TL;DR

- **OpenAI:** Reuters, citing five people, reports that staff warned leaders and the board for years that OpenAI’s security was lax. OpenAI is planning a new security sprint with **Cathedral** and now pays up to **$172,000** (with bonuses) for the most serious bugs in ChatGPT, Codex or the API.
- **OpenAI** will acquire **Pierre**, the maker of the Trees and Diffs libraries already inside the Codex app, plus Code Storage.
- **Tencent** launched **Hy4**, its first model with vision and computer use, at about **$0.90 / $2.70** per million tokens. Weights are due “in the coming days.”
- An **EU court adviser** says Gemini-style answers that reuse news articles **may infringe** press publishers’ rights, while AI training is generally allowed.
- **Anthropic** open-sourced **FlashProve**, a prototype that cryptographically proves which model produced a response.
- **Claude Marketplace** added partners including Runway, Asana, Glean, Datadog and Zoom, and now lists **25+** agents and products.
- **Goldman Sachs** limited **Claude Code** and **GitHub** to engineers, barring most traders and bankers.

**Today’s take:** The AI labs’ own security is now part of what you’re buying. OpenAI just put a public price on a bug that could expose other users’ ChatGPT chats: up to about $172,000. Treat that as a reminder to keep secrets, client data and passwords out of any chatbot unless your plan’s admin and data controls cover it.

---

## What did Reuters report about OpenAI’s security?

**Short answer:** That OpenAI employees warned leaders and the board for years that its internal security was too loose. Reuters cites **five people** familiar with the matter. Some came away thinking management cared more about keeping pace with Google and Anthropic than about security.

- **Wide access:** Reuters says OpenAI kept most of its code in one big repository (a “monorepo”), so anyone with code access could see details of many projects. OpenAI says its most sensitive work sits in separate, locked-down repos, and the monorepo doesn’t hold model weights.
- **Internal tools:** Three people said OpenAI hadn’t regularly security-reviewed tools such as model-testing sandboxes. OpenAI says it now does.
- **Recent incidents:** In October, the Justice Department charged a former OpenAI engineer with planting a hidden recording device in an executive conference room. Separately, security firm Hacktron AI said its researchers used an Anthropic model in July to get into several OpenAI employees’ ChatGPT accounts and some internal systems.
- **The fix in progress:** Per Reuters, a senior executive, Thibault Sottiaux, moved **a quarter** of OpenAI’s production engineers onto security infrastructure in August. OpenAI told Reuters that protecting its technology, data and people is “a matter of national importance.”

OpenAI’s public answer came in two posts on Nov 2:

| OpenAI bug bounty example (ChatGPT) | Old award | New example payout |
|---|---|---|
| Medium: read-only member uploads files to a Project | $750 | $2,415 |
| Critical: zero-click account takeover | $6,500 | $51,577 |
| Exceptional: viewing other users’ chat messages | $100,000 | $171,925 |

*Source: OpenAI. New payouts include OpenAI’s example quality, loyalty and campaign bonuses; OpenAI calls all scenarios illustrative.*

- Base rewards for a critical bug in ChatGPT, Codex or the API Platform now reach **$30,000**. OpenAI says it is “more than quadrupling” the midpoint of its medium, high and critical ranges on average.
- **Cathedral**, a startup whose researchers will use OpenAI’s models to attack OpenAI’s own defenses, joins its next internal security sprint. Gizmodo notes Cathedral is the firm that said it broke into Anthropic’s systems last month. Anthropic said its most sensitive systems, like model weights and Claude conversations, weren’t affected.

**Why it matters to you:** The company holding your [ChatGPT](/tools/chatgpt/) and [Codex](/tools/openai-codex/) history is spending to harden itself, which is good, but these are allegations from insiders, not a finding that user data leaked. Your move: don’t paste passwords, API keys or client secrets into any chatbot, turn on two-factor authentication, and if you handle sensitive work, use a plan with admin and data controls. Compare them in [ChatGPT Team pricing](/blog/chatgpt-team-pricing-explained-2026/) and [ChatGPT Enterprise pricing](/blog/chatgpt-enterprise-pricing-explained-2026/).

**Sources:** [Reuters (via Investing.com)](https://www.investing.com/news/economy-news/openai-employees-warned-about-operational-security-lapses-for-years-sources-say-4996239) · [OpenAI: security sprint](https://openai.com/index/preparing-our-next-security-sprint-to-harden-openai) · [OpenAI: bigger bug bounties](https://openai.com/index/rewarding-defenders-with-bigger-bug-bounties) · [Gizmodo](https://gizmodo.com/openai-hires-doge-alumni-who-hacked-into-anthropic-to-strengthen-security-2000834432)

---

## Why is OpenAI buying Pierre?

**Short answer:** To make Codex the place where developers and coding agents manage code end to end. Pierre makes **Trees** and **Diffs**, the libraries Codex already uses to browse files and review changes, plus **Code Storage**, an API for storing code and its Git history.

- Pierre also built **Highlights**, a fast syntax highlighter that updates as an agent streams code.
- Pierre’s open-source projects stay open source. Code Storage customers can keep using it after the deal closes while its features move into Codex.
- Earlier this week OpenAI described **Pando**, its in-house source-control backend for engineers and agents.
- The deal needs regulatory approval; no price was disclosed.

**Why it matters to you:** If you use [OpenAI Codex](/tools/openai-codex/), expect deeper Git, review and branching features built in, which puts more pressure on [GitHub Copilot](/tools/github-copilot/) and [Claude Code](/tools/claude-code/). See [Cursor vs Claude Code vs Codex](/blog/cursor-vs-claude-code-vs-codex-2026/) and [Codex pricing explained](/blog/openai-codex-pricing-explained-2026/).

**Sources:** [OpenAI](https://openai.com/index/openai-to-acquire-pierre/)

---

## What is Tencent Hy4?

**Short answer:** Tencent’s newest large language model and its first with **visual understanding** and **computer use** (command line and graphical apps). Tencent says it will release the weights and system cards in the coming days.

| Model (API, per 1M tokens) | Input | Output | Open weights |
|---|---|---|---|
| Tencent Hy4 | ~$0.90 | $2.70 | Promised |
| Kimi K3.1 Pro | $2.00 | $10.00 | Yes |
| Mistral Large 4 | $0.70 | $2.10 | Yes |
| GPT-6.1 Terra | $1.00 | $5.00 | No |

*Hy4 price from Tencent; others from our [models page](/models/).*

- In Tencent’s own blind test with **213** finance professionals on **579** tasks, Hy4 scored **3.04**, ahead of DeepSeek-V4.1-Flash-1017 (2.97), Kimi K3.1 Pro (2.68) and GLM-5.3 (2.68).
- Tencent says its internal hallucination rate fell from **12.95%** (Hy4 Preview) to **7.2%**.
- The API is coming to third-party platforms including **OpenRouter**. Tencent’s WorkBuddy and CodeBuddy apps are free **Nov 4–15**, and Hy4 is 50% off on Tencent Cloud TokenHub through Dec 31.

**Why it matters to you:** Another low-cost model is aimed at agent work. Those are Tencent’s own benchmarks, so test it on your tasks before switching. See [what is open-source AI](/blog/what-is-open-source-ai-2026/) and compare prices on our [models page](/models/).

**Sources:** [Tencent](https://www.tencent.com/tencent-launches-hy4-joining-the-ranks-of-the-worlds-leading-open-source-ai-models/)

---

## Can Gemini’s answers break EU copyright law?

**Short answer:** In some cases, says Advocate General **Maciej Szpunar** in the first generative-AI case to reach the EU’s top court (*Like Company v Google*, C-250/25). When a chatbot fetches a news article in real time and reuses it in an answer, that **may infringe** the publisher’s rights.

- Two tests: did the chatbot access the article unlawfully, for example by getting around a paywall? And does the answer reuse the article’s wording so recognizably that the reader no longer needs the original? Plain facts aren’t protected.
- On training, he said the Hungarian court’s questions should be thrown out, but added that training is, as a rule, allowed under the EU’s text-and-data-mining exception.
- The opinion isn’t binding. The court usually follows its advisers and will rule in the coming months.
- Google said the opinion recognizes that EU law permits AI training on publicly available information, and that publishers can opt out.

**Why it matters to you:** If the court agrees, AI answers about the news in Europe could get shorter, more link-heavy or licensed. See [Gemini](/tools/gemini/) and our [Gemini review](/blog/gemini-review-2026/).

**Sources:** [CJEU press release (PDF)](https://curia.europa.eu/site/upload/docs/application/pdf/2026-11/cp260155en.pdf) · [RTÉ / Reuters](https://www.rte.ie/news/europe/2026/1103/1597874-eu-court-backs-publishers-google/)

---

## Can you prove which AI model answered you?

**Short answer:** In a research prototype, yes. Anthropic’s **FlashProve** lets a provider commit to a model’s weights and then attach a proof that a reply came from that model, without revealing the weights.

- On a 400B-parameter open model (Llama 4 Maverick, 4-bit), one H100 GPU produces proofs at about **110 tokens per second**. Each proof is about **19 MB** per 1,024-token request and checks in about **17 seconds** on a 24-thread CPU.
- The catch: it costs roughly **70–95 times** the GPU time of normal inference and handles contexts of only **1,024 tokens**.
- Code, Lean proofs and docs are open source under Apache 2.0.

**Why it matters to you:** Today you can’t confirm that a router or reseller served the model you paid for. Tools like this could make that checkable. See [Claude](/tools/claude/).

**Sources:** [Anthropic](https://www.anthropic.com/research/provable-inference) · [GitHub](https://github.com/anthropics/FlashProve/)

---

## What’s new on Claude Marketplace?

**Short answer:** More partner tools. Claude Marketplace now has **more than 25** partner agents and products, and eligible enterprise customers can put part of their committed Anthropic spend toward them.

- **Security:** Chainguard, Checkmarx, Cyera, Rubrik, Tanium
- **Developer infrastructure:** Datadog, Netlify
- **Marketing and creative:** AirOps, [Runway](/tools/runway/), Webflow
- **Productivity:** Asana, Glean, monday, Zoom

**Why it matters to you:** Teams on [Claude](/tools/claude/) can buy add-on tools out of the same budget. See [Claude Enterprise pricing](/blog/claude-enterprise-pricing-explained-2026/).

**Sources:** [Anthropic](https://claude.com/resources/articles/new-agents-and-products-claude-marketplace)

---

## Why did Goldman Sachs limit Claude Code?

**Short answer:** After a review of productivity and risk, Goldman’s October guidance limits AI coding tools like Anthropic’s **Claude Code** and Microsoft’s **GitHub** to engineers, according to Bloomberg. Most traders and bankers lost access; “strats” are exempt.

- Some traders had used the tools to track client trading, simulate market moves and draft text and visuals.
- A Goldman spokesperson said the bank puts tools “in the hands of those who are best suited to leverage them for the long term.”

**Why it matters to you:** “Vibe coding” by non-engineers is meeting company risk rules. If you code with AI at work, check your policy first. See our [Claude Code review](/blog/claude-code-review-2026/) and [best AI coding assistants](/blog/best-ai-coding-assistants-2026/).

**Sources:** [Quartz (citing Bloomberg)](https://qz.com/goldman-sachs-restricts-ai-coding-tools-traders-bankers-110226) · [Bloomberg Law](https://news.bloomberglaw.com/capital-markets/goldman-restricts-traders-and-bankers-from-using-some-ai-tools)

---

*AI Tools Optimizer is for education only. We summarize public reporting and company announcements; verify primary sources before acting.*
