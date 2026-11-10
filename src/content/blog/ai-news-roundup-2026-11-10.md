---
title: "AI News Roundup – November 10, 2026"
description: "Today’s AI news: Google makes Gemini 4 Carbon available at $2/$10 until Nov 30; DeepMind’s AlphaProof Code verifies Signal’s encryption code; Businesses in ChatGPT; Australia’s new AI safety regulator; Google and Adobe team up; Gemini Robotics 2.5; Apple’s $49.99 AI usage packs."
pubDate: 2026-11-10T15:30:00-05:00
tags: ["ai-news"]
relatedTools: ["gemini", "chatgpt", "claude", "adobe-firefly", "cursor"]
sample: false
draft: false
---

## TL;DR

- **Google** made **Gemini 4 Carbon**, its strongest model, available to paying API users and **Google AI Ultra** subscribers at an introductory **$2 / $10** per million input/output tokens; from **December 1** it’s **$4 / $20**.
- **Google DeepMind**’s new **AlphaProof Code** agents wrote **over 6 million** lines of Lean proofs to formally verify the code behind **Signal**’s encryption in **four weeks**.
- **OpenAI** launched **Businesses in ChatGPT** (beta): claimable business profiles, product feeds, insights and, for eligible US businesses, **Business Agents**.
- **Australia** will legislate **six** mandatory safety obligations for frontier AI companies, enforced by a **new AI safety regulator** with significant penalties.
- **Google and Adobe** expanded their partnership: Acrobat from Drive and Gmail, Adobe tools inside Gemini, and a Photoshop image model with DeepMind.
- **Google DeepMind** introduced **Gemini Robotics 2.5**; a humanoid using it hit **96%** pick-and-pack success on Mercedes-Benz lines.
- **Apple** began selling **$49.99** Intelligence Usage Packs for extra AI use, starting in Logic Pro.

**Today’s take:** For the next three weeks, Google’s top model costs about a **quarter** of [Claude](/tools/claude/) Fable 5.2 per token. That deal ends **November 30**, when Carbon matches Claude Opus 5.5 at $4 / $20. Test [Gemini](/tools/gemini/) 4 Carbon on your real jobs now, and judge it by cost per finished task, not token price. Compare all prices on our [models page](/models/).

---

## What is Gemini 4 Carbon, and what does it cost?

**Short answer:** Google’s strongest model, now open to everyone who pays. Google first released Carbon two weeks ago only to cybersecurity defenders in its Fairwind Program. As of today it’s in the Gemini API (paid tier only, model ID `gemini-4-carbon`), Gemini for business, and, for **Google AI Ultra** subscribers, the Gemini app, AI Mode in Search and Google Antigravity. Google says Gemini 4 Argon is still the right choice for most coding and knowledge work; Carbon is for the hardest multi-step jobs and **uses more tokens than Argon** to explore and verify its work.

| Model | Input / output (per 1M tokens) | Illustrative month: 10M in + 2M out* |
|---|---|---|
| **Gemini 4 Carbon** (intro, through Nov 30) | **$2 / $10** | **$40** |
| Gemini 4 Carbon (from Dec 1) | $4 / $20 | $80 |
| Claude Opus 5.5 | $4 / $20 | $80 |
| Claude Fable 5.2 | $8 / $40 | $160 |
| GPT-6 Astra | $10 / $50 | $200 |

\*Our per-token arithmetic at list prices, before caching. Real bills depend on how many tokens each model uses for the same task.

**What Google claims:**

- **#1** on CursorBench 4.0, Perplexity’s WANDR and Zapier’s AutomationBench, at **more than 2x lower cost per task** than the next best external model.
- **#2** on Artificial Analysis’s new Multimodal Knowledge Agent benchmark, at **more than 6x lower** average cost per task than the top model.
- Safety: blocked **99%** of attack trajectories from an adaptive red-teaming agent; per-attempt breach rate **0.8%** (vs 3.1% on Argon); passed **92%** of a 375-task agentic honesty benchmark (vs 70% for Argon).
- A new **/swarm** preview in Google Antigravity turns one prompt into a coordinated team of agents.

The Verge notes the intro price is about a fifth of GPT-6 Astra and a quarter of Claude Fable 5.2, and that cheaper tokens don’t automatically mean a cheaper task. In the US, Google AI Ultra is **$99.99/month** (Ultra 5x) or **$199.99/month** (Ultra 20x), per VentureBeat.

**Why it matters to you:** This is the cheapest window you’ll get to try a frontier model on real work. Run the same few tasks through Carbon, Argon and your current model before November 30 and compare cost per finished task. See our [Gemini review](/blog/gemini-review-2026/), [Gemini pricing guide](/blog/gemini-pricing-explained-2026/) and [ChatGPT vs Gemini vs Claude](/blog/chatgpt-vs-gemini-vs-claude-2026/).

**Sources:** [Google](https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-4-carbon-now-available/) · [Gemini API pricing](https://ai.google.dev/gemini-api/docs/pricing) · [The Verge](https://www.theverge.com/ai-artificial-intelligence/1030787/google-gemini-4-carbon-public-rollout) · [VentureBeat](https://venturebeat.com/technology/google-gemini-4-carbon-is-now-publicly-available-and-it-undercuts-claude-fable-5-2-and-opus-5-5-on-api-price) · [9to5Google](https://9to5google.com/2026/11/10/gemini-app-4-carbon/)

---

## How did AI agents prove Signal’s encryption code is secure?

**Short answer:** With **AlphaProof Code**, a new Google DeepMind framework. Human experts and AI wrote formal specifications of Signal’s security goals; then agents powered by Gemini Carbon generated **over 6 million lines** of Lean proofs (about **6.5 million**, per the paper) showing that libsignal’s compiled machine code meets them. That covers Signal’s post-quantum PQXDH handshake and Triple Ratchet, including forward secrecy and post-compromise security.

| | AlphaProof Code on Signal |
|---|---|
| Time taken | **4 weeks** (DeepMind: historically years for expert teams) |
| Proof size | over 6 million lines of Lean |
| Flagged for human review | about **1%** |
| Bug test | Caught **2** real, previously fixed bugs when they were put back |

DeepMind says it’s the first time the implementation of a widely deployed protocol like this has been formally verified by any method. Wired notes the work found no new vulnerabilities and did not verify the whole Signal app.

**Why it matters to you:** Formal proofs have been too slow and expensive for most software. If agents make them routine, the apps you trust with private messages could come with mathematical guarantees, not just tests.

**Sources:** [Google DeepMind](https://deepmind.google/blog/introducing-alphaproof-code/) · [DeepMind paper](https://google-deepmind.github.io/code-verification/) · [Wired](https://www.wired.com/story/a-new-ai-tool-from-google-deepmind-formally-verified-the-signal-protocol/) · [The Register](https://www.theregister.com/ai-and-ml/2026/11/10/google-deepmind-melds-humans-and-ai-agents-to-vet-signals-secure-messaging-techniques/5308625)

---

## What are Businesses in ChatGPT and Business Agents?

**Short answer:** A beta that lets companies manage how they show up in [ChatGPT](/tools/chatgpt/). In Business Hub, any eligible business where ChatGPT is available can claim its listing and, once verified, update details, add product feeds with pricing and availability, and see insights (TechCrunch: profile views, mentions and website clicks). Shopify merchants can connect from Business Hub or the Shopify admin. Eligible US ecommerce and online-service businesses can also launch a **Business Agent** that answers customer questions inside ChatGPT. OpenAI cites **1.2 billion** weekly ChatGPT users.

**Why it matters to you:** ChatGPT is turning into a place people find and compare businesses. If you sell anything, claiming your profile is the AI-search version of claiming your Google listing. More on [ChatGPT pricing](/blog/chatgpt-pricing-explained-2026/).

**Sources:** [OpenAI](https://openai.com/index/introducing-businesses-chatgpt/) · [TechCrunch](https://techcrunch.com/2026/11/10/openai-rolls-out-new-business-profiles-making-chatgpt-just-a-little-bit-more-like-google/)

---

## What will Australia require from frontier AI companies?

**Short answer:** Six mandatory obligations in new Australian AI Standards legislation, enforced by a proposed **AI safety regulator** that works with the Australian AI Safety Institute and can impose significant penalties. Companies would have to:

1. Keep security controls across development and deployment
2. Identify and manage serious risks from their models
3. Allow independent evaluation of their models
4. Notify the government of incidents rapidly
5. Maintain and publish safety and security frameworks
6. Respond to updated standards as technology changes

Further details of the legislation will come later. ABC News reports the move follows a review into OpenAI’s breach of a Medicare data portal earlier this year, and that the government will implement all **18** of the review’s recommendations.

**Why it matters to you:** Another major market is moving from voluntary safety promises to enforceable rules, including incident reporting and outside testing that could shape how AI agents are released everywhere.

**Sources:** [Prime Minister of Australia](https://www.pm.gov.au/media/new-australian-ai-safety-and-security-protections) · [ABC News](https://www.abc.net.au/news/2026-11-10/ai-safety-regulator-to-be-set-up-after-openai-breach/107370060) · [AP](https://apnews.com/article/australia-artificial-intelligence-regulator-openai-agent-breach-a5dfe5379c0f7458e44b72a9073833c6)

---

## What’s new in the Google and Adobe partnership?

**Short answer:** Announced at Adobe MAX, it brings the two companies’ tools closer together:

- A direct path from **Google Drive and Gmail** into **Adobe Acrobat** (including an “Edit with” option in file previews).
- More **Adobe connectors in Gemini and Gemini Enterprise**, and Adobe creative tools in **AI Mode in Search**.
- Adobe’s **CX Enterprise Coworker** agent inside Gemini Enterprise.
- Adobe and Google DeepMind exploring an **image model for Photoshop** that could enable near-real-time edits, plus Google’s frontier models inside Adobe apps.

**Why it matters to you:** Your PDF and design tools are being wired into the assistants you already use, which means fewer exports and app switches. See our [Adobe Firefly tool page](/tools/adobe-firefly/) and [Adobe Firefly pricing](/blog/adobe-firefly-pricing-explained-2026/).

**Sources:** [Google](https://blog.google/company-news/inside-google/company-announcements/adobe-google-partnership-integration/)

---

## What can Gemini Robotics 2.5 do?

**Short answer:** It’s Google DeepMind’s most capable vision-language-action model, built to help robots learn more skills, faster. In a proof of concept on **Mercedes-Benz** production lines, it helped Apptronik’s **Apollo 2** humanoid pick and pack automotive parts with a **96%** success rate. DeepMind also added a new benchmark for robot-specific jailbreak attacks. It’s rolling out to DeepMind’s robotics partners.

**Why it matters to you:** The same Gemini models behind your chatbot are starting to drive physical robots, a sign that agent skills are spreading beyond the screen.

**Sources:** [Google DeepMind](https://deepmind.google/blog/gemini-robotics-2-5-accelerates-real-world-physical-intelligence/)

---

## What are Apple’s Intelligence Usage Packs?

**Short answer:** A one-time **$49.99** purchase that adds AI usage after you hit the monthly limit of Logic Pro’s built-in assistant (US, for eligible Apple Creator Studio subscribers). The Verge says the limits exist because some features rely on cloud models from OpenAI or Google Gemini. Packs can’t be shared through Family Sharing, and unused usage expires **12 months** after purchase. Apple is expected to add the option to other Creator Studio apps this month, including Final Cut Pro, Pixelmator Pro, Pages, Keynote and Numbers.

**Why it matters to you:** Pay-per-use top-ups are spreading from chatbots into creative apps. Check usage limits before you build a workflow around built-in AI features.

**Sources:** [The Verge](https://www.theverge.com/tech/1030084/apple-intelligence-usage-packs-ai-features-creator-studio-logic-pro) · [9to5Mac](https://9to5mac.com/2026/11/09/apple-launches-50-intelligence-usage-packs-for-select-ai-features/) · [Apple Support](https://support.apple.com/en-us/127888)

---

*Education only. Prices and features change; verify with the official sources above. Compare current model prices on our [models page](/models/) and browse the [AI tools directory](/tools/).*
