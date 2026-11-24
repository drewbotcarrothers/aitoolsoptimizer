---
title: "AI News Roundup – November 19, 2026"
description: "Today’s AI news: Google launches Gemini 4 Neon at $3/$15 per million tokens; Anthropic opens 34% above its IPO price; ChatGPT gets Live Dictation with no 10-minute limit; OpenAI ships GPT-Live-1.1 and shows its Codex Performance Factory; Cloudflare open-sources Clairic; Palo Alto buys Applied Compute; Citi puts AI agent risk on customers."
pubDate: 2026-11-19T15:30:00-05:00
tags: ["ai-news"]
relatedTools: ["gemini", "claude", "chatgpt", "openai-codex"]
sample: false
draft: false
---

## TL;DR

- **Google launched Gemini 4 Neon**, a model that sits between Hydrogen and Carbon. It costs **$3 / $15** per million input/output tokens with a **1M-token** context, and Google says it ranks **#3** on the Artificial Analysis Intelligence Index. It’s now the “Deeper analysis” pick in the Gemini app for AI Pro and Ultra.
- **Anthropic opened at $111.50 on Nasdaq**, **34%** above its **$83** IPO price, after raising **$81.3 billion** in the biggest IPO on record.
- **ChatGPT’s Live Dictation** turns speech into text as you talk and drops the **10-minute** recording limit on all plans. **Health** expands to Android, desktop, dots and sites (U.S. only).
- **OpenAI shipped GPT-Live-1.1** for voice apps, plus a **standby** mode that pauses inference when nobody is talking.
- **OpenAI’s Codex-run Performance Factory** handled **1,700+** investigations and found the root cause of **600+** slowdowns in about three months.
- **Cloudflare open-sourced Clairic (27B) and Clairic-flash (9B)**, small models that pull fields out of text, images and PDFs. Both cost **$0.10** per million input tokens until Dec 1.
- **Palo Alto Networks is buying Applied Compute** for **$4.5 billion** in stock to train and secure open-weight models for enterprises.
- **Citi says you’re responsible** for anything a third-party AI agent does in your bank account, even if its login leaks.

**Today’s take:** Gemini 4 Neon is the one to test. On AI Pro you get a near-top model in the app at no extra cost. On the API, watch the calendar: Neon costs more than Carbon’s promo price until Nov 30, then about 25% less.

<div class="video-embed" style="position:relative;width:100%;max-width:960px;aspect-ratio:16/9;margin:1.5rem 0;border-radius:12px;overflow:hidden;background:#000;">
  <iframe src="https://www.youtube-nocookie.com/embed/3L3LeoU1xxI" title="Gemini 4 Neon Costs More Than Carbon. For Now." style="position:absolute;inset:0;width:100%;height:100%;border:0;" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

---

## What is Gemini 4 Neon, and how much does it cost?

**Short answer:** Google’s new middle model in the Gemini 4 family, built for complex coding, analysis and enterprise work. It’s adapted from Gemini 4 Carbon. On the API it costs **$3 per million input tokens** (**$0.15** cached, a 95% discount) and **$15 per million output tokens**, with a **1 million-token** context window and four thinking levels.

Google says Neon scores **61** on the Artificial Analysis Intelligence Index at its xhigh setting (**#3 overall**), ranks **#2** on the Vals Index, and ranks #2 on steerability in the Agent Arena Index. At its default high setting, Google puts its cost per task **32% below Carbon** and roughly **50% to 80% below** top competing frontier models. These are Google’s own figures.

| Gemini 4 model | API price (input / output per 1M tokens) | Gemini app slot |
|---|---|---|
| Hydrogen | $1.50 / $7.50 | Everyday help |
| **Neon (new)** | **$3 / $15** | **Deeper analysis** (AI Pro and Ultra) |
| Carbon | $2 / $10 promo until Nov 30, then $4 / $20 | Code & complex work |

*Prices per Google and 9to5Google. In the app, 9to5Google says Neon replaces Argon and 3.1 Pro.*

**Where you can use it:** the Gemini API paid tier and Google AI Studio, Gemini for business, Google Antigravity for paid AI Pro and Ultra subscribers, and the [Gemini](/tools/gemini/) app for Pro and Ultra. In Antigravity, Orchestrator can now use Neon to plan and hand routine edits and test runs to Hydrogen. The model card lists a **March 2026** knowledge cutoff.

**Why it matters to you:** If you pay for Google AI Pro, you get a stronger model for long documents and analysis today. If you’re on the API, Carbon is cheaper until its promo ends on Nov 30. After that, Neon is 25% cheaper than Carbon for work it can handle. Run your own tasks before you switch. Compare prices on our [models page](/models/) and see [Gemini pricing explained](/blog/gemini-pricing-explained-2026/).

**Sources:** [Google](https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-4-neon/) · [Google DeepMind model card](https://deepmind.google/models/model-cards/gemini-4-neon/) · [Google Antigravity Blog](https://antigravity.google/blog/gemini-4-neon-in-google-antigravity/) · [9to5Google](https://9to5google.com/2026/11/18/gemini-4-neon-announcement/)

---

## How did Anthropic’s first day of trading go?

**Short answer:** It started strong. Anthropic priced its IPO at **$83** a share on Wednesday night, above the filed **$70–$78** range, selling **980 million** shares and raising **$81.3 billion**. That’s the largest IPO on record, ahead of SpaceX’s roughly $75 billion in June. **ANT** opened at **$111.50** on Thursday, a **34%** jump, for a market cap of about **$2.01 trillion** at the open, per CNBC. By the afternoon it had eased to around **$100**, per the BBC.

Anthropic’s prospectus shows **$33.24 billion** in revenue for the nine months to Sept. 30, up **1,200%** year over year (CNBC).

**Why it matters to you:** The company behind [Claude](/tools/claude/) now reports results to the public every quarter, so its pricing, usage limits and big enterprise deals will get more scrutiny. Nothing changes for Claude users today. This is news, not investment advice. Plans: [Claude pricing explained](/blog/claude-pricing-explained-2026/).

**Sources:** [CNBC](https://www.cnbc.com/2026/11/19/anthropic-ipo-ant-live-updates.html) · [AP](https://apnews.com/article/anthropic-ipo-nasdaq-ai-b6a74b8949021207dc162fcc876c4649) · [BBC](https://www.bbc.com/news/live/c933xxm82mr8t)

---

## What’s new in ChatGPT voice dictation and Health?

**Short answer:** With **Live Dictation**, your speech turns into text as you talk, instead of after you stop recording. Tap or click the waveform to show or hide the text. OpenAI also removed the **10-minute** recording limit. It’s rolling out globally to all [ChatGPT](/tools/chatgpt/) plans on iOS, Android, web and desktop.

Separately, **Health** is rolling out to the desktop app, dots, sites and Android, with **Android Health Connect** support for sleep and activity data. Health is available to Free, Go, Plus and Pro users **in the U.S.**; dots are Pro-only. Both are gradual rollouts.

**Why it matters to you:** Long voice notes and brain-dumps now work on every plan without hitting a cutoff. Plans: [ChatGPT pricing explained](/blog/chatgpt-pricing-explained-2026/).

**Sources:** [ChatGPT release notes](https://help.openai.com/en/articles/6825453-chatgpt-release-notes) · [The Verge](https://www.theverge.com/ai-artificial-intelligence/1037634/openai-chatgpt-live-dictation)

---

## What does GPT-Live-1.1 change for voice apps?

**Short answer:** OpenAI’s API changelog says `gpt-live-1.1` improves pronunciation, accent consistency and transcription in multilingual voice conversations. You can drop it into an existing Live session setup (`v1/live/sessions`). A new **standby** setting for GPT-Live-1 and GPT-Live-1.1 WebRTC sessions pauses inference when nobody is talking and picks back up when someone speaks.

**Why it matters to you:** If you build voice agents, standby can cut what you pay for idle sessions, and switching to 1.1 is a one-line change. The changelog doesn’t mention a price change. API costs: [OpenAI API pricing explained](/blog/openai-api-pricing-explained-2026/).

**Sources:** [OpenAI API changelog](https://developers.openai.com/api/docs/changelog)

---

## How does OpenAI use Codex to keep ChatGPT fast?

**Short answer:** With a cloud system it calls the **Performance Factory**. When a performance alert fires, a [Codex](/tools/openai-codex/) agent investigates, writes down what it found and proposes a fix for an engineer to review. After the fix ships, another agent checks that performance is back to normal. It has four parts: a task tracker with set workflows, a dispatch loop that hands ready work to agents, an internal API that runs Codex in the cloud, and subscriptions that wake agents when something changes, like a GitHub review comment or a finished deployment. Agents run under a service identity with limited permissions.

In just over three months, the first workflow tracked **1,700+** investigations and found the root cause of **600+** cases, about **17** investigations a day.

**Why it matters to you:** It’s a working template for running coding agents as a workflow, not a chat: alert, investigate, propose a fix, human review, then verify. Compare agents: [Cursor vs Claude Code vs Codex](/blog/cursor-vs-claude-code-vs-codex-2026/).

**Sources:** [OpenAI](https://openai.com/index/how-openai-performance-factory-keeps-chatgpt-fast/)

---

## What are Cloudflare’s open-weight Clairic models for?

**Short answer:** Pulling structured fields out of messy inputs. Cloudflare released an updated **Clairic (27B)** and a new **Clairic-flash (9B)**, both open weights on Hugging Face and hosted on Workers AI (`@cf/cloudflare/clairic`, `@cf/cloudflare/clairic-flash`). They read text, images and now **PDFs**, up to four images or pages per request, and return confidence scores and character spans with each answer. In Cloudflare’s tests, responses came back in under a second.

| Model | Size | Price per 1M input tokens |
|---|---|---|
| Clairic | 27B | $0.10 until Dec 1, 2026, then $0.24 |
| Clairic-flash | 9B | $0.10 |

Cloudflare charges for input tokens only. It calls its accuracy numbers self-reported and “directional.”

**Why it matters to you:** For receipts, invoices and form fields, a small extraction model can replace an expensive LLM call, and you can host it yourself.

**Sources:** [Cloudflare Blog](https://blog.cloudflare.com/open-clairic/)

---

## Why is Palo Alto Networks buying Applied Compute?

**Short answer:** To help companies train, adapt and run their own **open-weight** AI models securely. The all-stock deal is valued at **$4.5 billion**. Applied Compute makes a platform for post-training and running customized open-weight models and agents. Palo Alto plans to support public clouds and sovereign environments. The deal needs regulatory approval and is expected to close in Palo Alto’s fiscal third quarter of 2027.

**Why it matters to you:** Big security vendors are betting that companies will run their own tuned open models, not just call closed APIs.

**Sources:** [Palo Alto Networks](https://www.paloaltonetworks.com/company/press/2026/palo-alto-networks-to-acquire-applied-compute--bringing-secure-open-weight-ai-to-the-enterprise) · [CNBC](https://www.cnbc.com/2026/11/19/palo-alto-networks-earnings-applied-compute.html)

---

## Who pays if an AI agent makes a mistake in your bank account?

**Short answer:** At Citi, you do. Citi added a new **Section H** on third-party AI agents to its Online User Agreement. If you give a third-party agent your login or access, Citi treats whatever it does as authorized by you. That includes actions by anyone else if those credentials leak, and mistakes or actions beyond what you asked for, except where the law says otherwise. Citi’s own AI tools are excluded. TechCrunch reports that PNC changed its terms the same day, JPMorgan and Bank of America announced similar policies last month, and Citizens emailed customers a similar warning.

**Why it matters to you:** Before you connect a personal-finance agent to a bank login, assume the bank won’t reverse what it does. Read-only tools are the safer choice.

**Sources:** [Citi Online User Agreement](https://www.citi.com/tandc/view-printable-version) · [TechCrunch](https://techcrunch.com/2026/11/18/more-banks-says-customers-using-ai-agents-are-on-their-own-even-if-they-get-hacked/)

---

## What this means for you

Gemini 4 Neon fills the gap between Hydrogen and Carbon on price. If Carbon is too expensive for your workload, test Neon first. Citi's position matters: you're responsible for what a third-party agent does in your bank account, so don't give agents banking logins.

- Gemini model prices side by side: [AI model comparison](/models/).
- ChatGPT's voice and dictation features by plan: [ChatGPT pricing explained](/blog/chatgpt-pricing-explained-2026/).

---

*Education only. Prices and features change; verify with the official sources above. Compare current model prices on our [models page](/models/) and browse the [AI tools directory](/tools/).*
