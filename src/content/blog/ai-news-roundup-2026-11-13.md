---
title: "AI News Roundup – November 13, 2026"
description: "Today’s AI news: OpenAI’s ChatGPT Wallet lets dots agents pay without seeing your card; OpenAI’s Daybreak Red Team and Defense Factory; Gemini Intelligent Eyewear preorders from $395; self-hosted Claude Managed Agents; SpaceX’s $74B AI campuses; OpenAI folds its robotics team."
pubDate: 2026-11-13T15:30:00-05:00
tags: ["ai-news"]
relatedTools: ["chatgpt", "openai-dots", "openai-codex", "gemini", "claude"]
sample: false
draft: false
---

## TL;DR

- **OpenAI** launched **ChatGPT Wallet**, built with **American Express, Mastercard and Visa**. Your ChatGPT **dot** (agent) can now pay for things for you, but it never sees your real card number, and you approve **every purchase** with Face ID or a fingerprint. It starts with **ChatGPT Pro** subscribers in the **US**.
- **OpenAI** added **Daybreak Red Team** (agents that pen-test web apps) and **Daybreak Defense Factory** (agents that draft security patches for engineers to review).
- **Google and Samsung** opened preorders for **Gemini-powered Intelligent Eyewear** from Warby Parker (**from $395**) and Gentle Monster (**$449–$489**), shipping **December 10**.
- **Anthropic** opened a private beta of **self-hosted Claude Managed Agents**: the whole agent service runs on your own infrastructure.
- **SpaceX** plans **more than $74 billion** for two AI supercomputing campuses in **Arizona** and **Texas**.
- **OpenAI** disbanded its stand-alone **robotics team**, betting its general models can run robots (Fortune).

**Today’s take:** ChatGPT just went from finding the sweater to buying it. The smart part is the design: your agent gets a one-off payment token, not your card, and nothing is bought without your fingerprint or face. The catch is the price of entry: it’s Pro-only, and [ChatGPT](/tools/chatgpt/) Pro costs **$100, $200 or $500 a month** (see our [ChatGPT pricing guide](/blog/chatgpt-pricing-explained-2026/)). If you’re on Plus, wait; this will tell us whether agent shopping actually works before it reaches cheaper plans.

---

## What is ChatGPT Wallet, and how does it keep your card safe?

**Short answer:** A payment feature for OpenAI’s always-on [dots](/tools/openai-dots/) agents, announced November 13. You save a card once, ask your dot to shop or book something, and approve the final purchase yourself.

| Step | What happens (per OpenAI) |
|---|---|
| 1. Add a card | Once, by asking your dot to add a card to Wallet |
| 2. Your dot shops | It finds the item or booking you asked for |
| 3. You review | Merchant, items, total and selected card |
| 4. You approve | Security check such as **Face ID or a fingerprint**, for **every** purchase |
| 5. Payment | The card network issues a **payment token** (substitute card number, security code and expiry). The agent and the business never see your real card |

You keep your card’s **rewards** and its **protections for eligible disputes** (for example, a defective item). OpenAI says some websites may not support agent purchases yet, and that approval alone doesn’t confirm an order, so check the merchant’s confirmation.

**Who can use it now:**

| Requirement | Detail |
|---|---|
| Plan | **ChatGPT Pro** (Pro is $100, $200 or $500 a month, per our [ChatGPT page](/tools/chatgpt/)) |
| Age | 18 or older |
| Country | US, with an eligible US-issued card and US billing address |
| Where | Inside dots, rolling out gradually |

OpenAI says that later you’ll be able to pre-approve purchases within **spending limits, categories or time periods**. For businesses, it published a Commerce Partner Playbook (product feeds, letting signed agent traffic through with Web Bot Auth, plugins and WebMCP) and is working with fraud and payment firms including Forter, Riskified, Sardine, Signifyd, Adyen, Checkout.com and Stripe. The Decoder notes Wallet replaces OpenAI’s scrapped Instant Checkout.

**Why it matters to you:** It’s the first time ChatGPT’s agent can finish a purchase rather than hand you a link, with a safety design (tokens plus a biometric check on every buy) that’s easy to understand. If you already pay for Pro and dots, try it on one small, low-risk purchase first. Everyone else: compare plans in our [ChatGPT review](/blog/chatgpt-review-2026/) and read [what an AI agent is](/blog/what-is-an-ai-agent-2026/) and [AI agent budget caps](/blog/what-is-ai-agent-budget-cap-2026/).

**Sources:** [OpenAI: Introducing ChatGPT Wallet](https://openai.com/index/introducing-chatgpt-wallet/) · [ChatGPT release notes](https://help.openai.com/en/articles/6825453-chatgpt-release-notes) · [CNBC](https://www.cnbc.com/2026/11/13/openai-chatgpt-wallet-dot-purchases.html) · [9to5Mac](https://9to5mac.com/2026/11/13/openai-launches-chatgpt-wallet-enabling-dot-agents-to-make-purchases/) · [The Decoder](https://the-decoder.com/openai-rebuilt-ai-shopping-from-scratch-with-chatgpt-wallet/)

---

## What do OpenAI’s Daybreak Red Team and Defense Factory do?

**Short answer:** Two security products announced at OpenAI’s Cyber at the Frontier event on November 12.

| Product | What it does | Access |
|---|---|---|
| **Daybreak Red Team** | A team of agents pen-tests your web apps using source code and app context, validates findings from scanners, bug bounties and disclosure reports, and checks whether a patch stops the exploit. Runs in isolated environments with Guardian review limiting what agents can reach | Early access, by request |
| **Daybreak Defense Factory** | Agents trace vulnerabilities through your code and draft patches; imports findings from Wiz, Snyk and Endor Labs; scans GitHub repos and new commits; works with [Codex](/tools/openai-codex/) and opens **draft** pull requests. Engineers review and test before merge; nothing deploys automatically | Preview plugin in ChatGPT for workspaces with Daybreak access |

**Why it matters to you:** Finding bugs was never the hard part for busy teams; fixing them was. If your workspace has Daybreak access, point Defense Factory at one repo you know well and count how many patches you’d merge as-is. See [Codex pricing explained](/blog/openai-codex-pricing-explained-2026/) and [AI tools for security engineers](/blog/best-ai-tools-for-security-engineers-2026/).

**Sources:** [OpenAI: Daybreak Red Team](https://openai.com/daybreak/red-team/) · [OpenAI: Daybreak Defense Factory](https://openai.com/daybreak/defense-factory/) · [SecurityWeek](https://www.securityweek.com/openai-unveils-daybreak-red-team-defense-factory-security-tools/) · [Neowin](https://www.neowin.net/news/openai-launches-daybreak-red-team-and-defense-factory-to-fix-vulnerabilities-using-ai/)

---

## How much are Google’s Gemini smart glasses, and when do they ship?

**Short answer:** Preorders opened November 12; the glasses arrive in stores and ship on **December 10**. Samsung builds the hardware, Google supplies [Gemini](/tools/gemini/), and two eyewear brands design the frames.

| Collection | Styles | US price |
|---|---|---|
| **Warby Parker** | Alden, Reid, Wren (optical and sun) | From **$395** |
| **Gentle Monster** | Six styles (also sold in South Korea) | **$449–$489** |

Gemini can answer questions about what you’re looking at, translate, give Google Maps turn-by-turn directions and summarize notifications. They work with iPhone and Android; Ars Technica says that means iPhone 13 Pro or newer, Pixel 7 or newer, or Samsung Galaxy S and Z phones on One UI 9 or later. You need an 18+ Google account from the US or South Korea.

**Why it matters to you:** Gemini is moving from your phone to your face. Check your phone is supported before you preorder; read our [Gemini review](/blog/gemini-review-2026/) for what the assistant can do today.

**Sources:** [Google](https://blog.google/innovation-and-ai/technology/xr-ar/google-intelligent-eyewear-collections-pre-order/) · [Samsung](https://news.samsung.com/us/samsung-announces-u-s-release-intelligent-eyewear-bringing-smart-way-world/) · [Ars Technica](https://arstechnica.com/google/2026/11/google-pushes-privacy-angle-as-gemini-powered-smartglasses-debut-starting-at-395/)

---

## Can you now run Claude Managed Agents on your own servers?

**Short answer:** Yes, in private beta (November 12). Self-hosted Claude Managed Agents puts the **whole** Managed Agents service, not just the sandboxes, in your own cloud or data center. You store the agents, credentials, sessions and session history, and you choose where model requests go: Anthropic by default, or Amazon Bedrock, Google’s Agent Platform, Microsoft Foundry or your own gateway. Zero data retention applies as it does to other Messages API calls. Access is through your Anthropic account team; no public price yet.

**Why it matters to you:** Banks, hospitals and other regulated teams that couldn’t let agent data leave their walls now have a way to run [Claude](/tools/claude/) agents. See [Claude pricing explained](/blog/claude-pricing-explained-2026/).

**Sources:** [Claude Platform release notes](https://platform.claude.com/docs/en/release-notes/overview) · [Anthropic](https://claude.com/resources/articles/self-hosted-claude-managed-agents)

---

## What is SpaceX building with $74 billion?

**Short answer:** Two AI supercomputing campuses, announced November 12:

| Site | Planned investment | Details (per SpaceX, via Quartz) |
|---|---|---|
| Cochise County, **Arizona** | About **$50B** | ~5,500 construction jobs, 1,000 ongoing roles; dry cooling; existing renewables via local co-ops |
| Starbase, **Texas** | Up to **$24B** | Will train frontier AI systems and generate its own electricity (a city notice shows a proposed natural gas plant) |

SpaceX also committed **$220 million** to expand Brownsville-area water and sewer capacity. Arizona residents have raised concerns about water and power costs, and Starbase will consider a tax abatement on December 9.

**Why it matters to you:** AI labs are now building their own power plants to get compute. More capacity usually means more model access over time, but local pushback is growing.

**Sources:** [SpaceX](https://www.spacex.com/updates/xai-joins-spacex) · [Quartz](https://qz.com/spacex-74-billion-ai-supercomputing-texas-arizona-111226) · [The Hill](https://thehill.com/policy/technology/6217630-spacex-plans-data-centers-texas-arizona/)

---

## Why did OpenAI disband its robotics team?

**Short answer:** Fortune reported on November 13 that OpenAI broke up its stand-alone robotics team. Robotics researchers moved to the main research team under Chief Research Officer Mark Chen, and applied robotics and hardware moved to the Applied organization under President Greg Brockman. OpenAI told Fortune robotics remains core and the change is meant to speed it up. Fortune says researchers saw surprising results connecting **GPT-6 Astra** directly to robots, and that Sam Altman is targeting a first public demo of OpenAI’s humanoid robot in **2027**.

**Why it matters to you:** The bet is that the same model behind [ChatGPT](/tools/chatgpt/) can also drive robots, so improvements in the chatbot you use flow straight into the physical world.

**Sources:** [Fortune](https://fortune.com/2026/11/13/openai-disbands-robotics-team-as-its-general-models-start-running-robots/)

---

*Education only. Prices and features change; verify with the official sources above. Compare current model prices on our [models page](/models/) and browse the [AI tools directory](/tools/).*
