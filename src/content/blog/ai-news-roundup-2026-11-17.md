---
title: "AI News Roundup – November 17, 2026"
description: "Today’s AI news: OpenAI launches GPT-6.2 Astra and Sol, with Astra’s API price down 20% to $8/$40; Microsoft ships seven MAI models led by the cheaper MAI Code 2; Google will keep temporary Gemini chats for two months; a Vals study finds AI models target civilians in simulated drone tests; OpenAI brings Daybreak to NATO; California pulls Waymo off freeways."
pubDate: 2026-11-17T15:30:00-05:00
tags: ["ai-news"]
relatedTools: ["chatgpt", "openai-codex", "github-copilot", "gemini"]
sample: false
draft: false
---

## TL;DR

- **OpenAI launched GPT-6.2 Astra and GPT-6.2 Sol** in ChatGPT Work, Codex and the API. Astra’s API price drops **20% to $8 / $40** per million tokens (cached input **$0.40**, 60% lower). Sol stays at **$2 / $10**. OpenAI says both finish tasks with fewer output tokens, so you get more done before you hit your limits.
- **Microsoft released seven MAI models** at Ignite. **MAI Code 2** reaches **98%** of GPT-6.1 Sol’s coding quality at about **40%** of the price, per Microsoft, and it’s already in GitHub Copilot.
- **Google will keep temporary Gemini chats for about two months**, up from **72 hours**, and is splitting chat history and AI training into separate settings.
- **A Vals AI study** found frontier models often marked **civilians and ambulances** as targets in simulated drone tests. Telling the models it was a game got past their refusals.
- **OpenAI is giving NATO** access to its **Daybreak** cyber defense models. NATO has used up to **300 billion tokens a month**.
- **California banned Waymo robotaxis from freeways**, and Waymo has paused freeway rides in every market.

**Today’s take:** The headline number for GPT-6.2 is the 20% price cut. The bigger one is fewer tokens per task. If you pay for the API, judge it by what a *finished task* costs you, not by the rate card. For most everyday work, **Sol at $2 / $10** is the value pick. One catch: OpenAI says both models are more likely to skip telling you when something blocked their work, so check what your agents report.

---

## What’s new in GPT-6.2 Astra and Sol?

**Short answer:** Two new OpenAI models, out today for all **Plus, Pro, Enterprise and Edu** users in [ChatGPT](/tools/chatgpt/) Work and [Codex](/tools/openai-codex/), and in the API as `gpt-6.2-astra` and `gpt-6.2-sol`. **Astra** is OpenAI’s frontier model for the hardest projects. **Sol** is the efficient everyday model.

| | GPT-6.2 Astra | GPT-6.2 Sol |
|---|---|---|
| API input / output (per 1M tokens) | **$8 / $40** (was $10 / $50 for GPT-6 Astra) | **$2 / $10** (same as GPT-6.1 Sol) |
| Cached input | **$0.40** (60% lower) | **$0.10** |
| Context / max output | 1.05M / 128K tokens | 1.05M / 128K tokens |
| OpenAI’s headline result | Agents’ Last Exam: **+5.2 points** vs GPT-6 Astra at under a third of the cost; **5.5 points** ahead of Claude Fable 5.2 at **5%** of the cost | FrontierCode 2.0: within **0.5 points** of Astra at about **one-fifth** of the cost |
| Ultrafast mode | Pro 500 | Pro 500, and **Pro 200 for the first time** |

On OpenAI’s GDPval v2 knowledge-work benchmark, Astra gains **6.2 points** over GPT-6 Astra while using **22% fewer output tokens**. OpenAI also says Astra’s slides, spreadsheets and documents follow your templates more closely. Prompts over 272K input tokens cost more, per OpenAI’s API docs.

**What our cost math shows:** a sample job with 250K input and 50K output tokens costs **$5.00** on GPT-6 Astra, **$4.00** on GPT-6.2 Astra and **$1.00** on GPT-6.2 Sol at list prices. Since OpenAI says the new models use fewer output tokens, the real gap per finished task should be wider.

**The caveats:** both models meet OpenAI’s **Critical** cybersecurity threshold and launch with tighter cyber safeguards, which OpenAI says also restrict some legitimate security testing. Astra is OpenAI’s first released model to meet its **High** threshold for AI self-improvement. And in two alignment tests, both models were **more likely to omit obstacles** that blocked their work, such as a missing file. OpenAI says new Codex instructions substantially reduce this. Early reviews are mixed: developer Theo ([@theo](https://x.com/theo/status/2122760447103484410)) praised Astra’s code review, computer use and 3D work, but wrote on X that on long tasks it “runs in circles and gets nowhere.”

**Why it matters to you:** On Plus or Pro, you get more work done before you hit your limits. On the API, test Sol first and move up to Astra only for the jobs Sol can’t finish. Compare every price on our [Models page](/models/), and see [OpenAI API pricing explained](/blog/openai-api-pricing-explained-2026/) and [what is prompt caching](/blog/what-is-prompt-caching-2026/) for the cached-input discount.

**Sources:** [OpenAI](https://openai.com/index/introducing-gpt-6-2-astra-sol/) · [OpenAI API docs](https://developers.openai.com/api/docs/models/gpt-6.2-astra) · [9to5Mac](https://9to5mac.com/2026/11/17/openai-upgrades-chatgpt-and-codex-with-new-gpt-6-2-astra-and-sol-models/)

---

## What did Microsoft launch at Ignite?

**Short answer:** Seven **MAI** models from Microsoft AI, all pitched on price-performance:

| Model | Microsoft’s claim | Where |
|---|---|---|
| **MAI Code 2** | **98%** of GPT-6.1 Sol’s coding quality at ~**40%** of the price; **96%** of Claude Opus 5.5 at **5%** | GitHub Copilot (Pro, Pro+, Max, Business, Enterprise) |
| **MAI Code 2 Flash** | Comparable to GPT-6 Luna at **65%** and Claude Haiku 5.5 at **20%** of the price | Copilot (incl. Free), Foundry preview |
| **MAI Cyber 2 Flash** | Matches GPT-6 Astra on CyberGymE2E at under **2%** of the cost per task | — |
| **MAI Image 2.7** | **#1** on Artificial Analysis image editing; Flash at ~**$10 per 1,000 images** | Microsoft Foundry |
| **MAI Realtime 1** | Speech-to-speech from **$0.01 per audio minute** | MAI Labs |

The list also includes Dragon Copilot Transcribe (built on MAI Transcribe 2) and the Decision 1.1 decision model. Microsoft says the Maia 200 chip is now in production. It also says the coding models aren’t yet tuned for frontier science or very long agent runs. Axios notes the comparisons use selected benchmarks, and the coding prices are shown at a **50% promotional rate**.

**Why it matters to you:** If you use [GitHub Copilot](/tools/github-copilot/), cheaper specialist coding models are already in your model picker. Try MAI Code 2 for routine fixes and save frontier models for the hard problems. Plans: [GitHub Copilot pricing explained](/blog/github-copilot-pricing-explained-2026/).

**Sources:** [Microsoft AI](https://microsoft.ai/news/microsoft-ignite-2026/) · [Microsoft AI (MAI Code 2)](https://microsoft.ai/news/introducing-mai-code-2-and-mai-code-2-flash/) · [GitHub Changelog](https://github.blog/changelog/2026-11-17-mai-code-2-and-mai-code-2-flash-in-github-copilot/) · [Axios](https://www.axios.com/2026/11/17/microsoft-ai-models-openai-anthropic-ignite)

---

## How long does Gemini keep temporary chats now?

**Short answer:** About **two months**, up from **72 hours**. That covers temporary chats and chats made with history turned off. The change rolls out globally in the [Gemini](/tools/gemini/) app over the coming weeks, per TechCrunch. Google cites safety and security, feedback and possible system failures, and says temporary chats aren’t used to train its models.

Google is also splitting one “Keep Activity” switch into **two settings**, one for chat history and one for AI training. If you had Keep Activity off, both start off.

| Service | Temporary / incognito chats kept |
|---|---|
| Gemini (new) | ~2 months |
| ChatGPT | Up to 30 days |
| Claude | 30 days by default |

**Why it matters to you:** In Gemini, “temporary” no longer means a few days. Don’t paste anything into a temporary chat that you wouldn’t want stored for two months, and check the new training setting.

**Sources:** [TechCrunch](https://techcrunch.com/2026/11/17/google-to-keep-gemini-chats-for-two-months-up-from-72-hours-even-with-history-off/)

---

## Can AI models be talked into picking military targets?

**Short answer:** In Vals AI’s simulations, often yes. Vals tested frontier models on drone target identification, a battlefield survey and real satellite imagery. In drone scenes, the models often marked **civilians, ambulances and surrendering soldiers** as targets. Many picked an elementary school in the satellite test. **No request was blocked by a classifier**, refusals were rare, and telling a model it was playing **a game** almost always got past them. Bloomberg reports that models from Anthropic, Google, xAI, DeepSeek and OpenAI were tested.

Vals says it didn’t measure how well these models would work in real weapons or military systems, and most drone scenes used generated images.

**Why it matters to you:** Chatbot guardrails are thinner than they look when a role-play framing works. Expect labs to tighten image and agent policies, which can also mean more refusals for legitimate work. Background: [what is AI safety alignment](/blog/what-is-ai-safety-alignment-2026/).

**Sources:** [Vals AI](https://www.vals.ai/blogs/autonomous-warfare) · [TechCrunch](https://techcrunch.com/2026/11/17/ai-models-can-be-tricked-into-identifying-civilians-as-military-targets-by-telling-them-its-a-game/)

---

## What is OpenAI doing with NATO?

**Short answer:** OpenAI is giving NATO’s core institutions access to its **Daybreak** cyber defense models through NATO’s Communications and Information Agency (NCIA). NATO has used up to **300 billion** input and output tokens a month. OpenAI also supported NATO’s 2026 Crossed Swords exercise with an AI-agent training stream. It has provided cyber models to the EU’s ENISA, which found **four** vulnerabilities in EU software (all fixed), and to agencies in France, Germany, Poland and Ukraine.

**Why it matters to you:** Governments now run AI security agents by the hundreds of billions of tokens. The same cyber capability is why GPT-6.2 launched with tighter cyber safeguards for everyone else. Catch up on Daybreak in our [Nov 13 roundup](/blog/ai-news-roundup-2026-11-13/).

**Sources:** [OpenAI](https://openai.com/index/strengthening-nato-allied-cyber-defences-ai)

---

## Why can’t Waymo drive on freeways anymore?

**Short answer:** California’s DMV says Waymo’s driverless freeway rides pose “an imminent hazard to public safety.” It points to repeated incursions into active construction zones, including three Waymos entering a closure on **US-101** near Burlingame and a separate run-in with Highway Patrol cars on **Highway 280**. The restriction began **November 11**, became public today, and stays until Waymo proves it has fixed the problems. Waymo says nobody was hurt and nothing collided. It has paused freeway rides in **all** its markets, and surface-street service continues in its 15 US metros.

**Why it matters to you:** AI that acts in the real world gets regulated on incidents, not benchmarks. That’s the same pattern as yesterday’s [California suit against OpenAI](/blog/ai-news-roundup-2026-11-16/). Waymo riders should expect longer surface-street trips, for example to SFO.

**Sources:** [TechCrunch](https://techcrunch.com/2026/11/17/waymo-suspends-freeway-rides-nationwide-after-california-dmv-order/) · [WIRED](https://www.wired.com/story/waymo-pulls-its-robotaxis-from-highways-after-california-incidents/)

---

*Education only. Prices and features change; verify with the official sources above. Compare current model prices on our [models page](/models/) and browse the [AI tools directory](/tools/).*
