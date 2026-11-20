---
title: "AI News Roundup – November 20, 2026"
description: "Today’s AI news: Gemini on Mac can now click and type through your apps from the $4.99 AI Plus plan; OpenAI tests dots on ChatGPT Plus; OpenAI API adds 30% and 40% discounts for jobs that can wait; Genie 4 hits the Gemini API; Tencent opens Hy4 weights; OpenAI on distillation; an unverified Riemann claim."
pubDate: 2026-11-20T15:30:00-05:00
tags: ["ai-news"]
relatedTools: ["gemini", "chatgpt", "openai-dots", "claude"]
sample: false
draft: false
---

## TL;DR

- **Gemini on Mac can now use your computer.** Describe a multi-step task and Gemini clicks, types and works through your apps in a separate background window. It’s rolling out in the U.S. (English) for **Google AI Plus, Pro and Ultra**, so it starts at **$4.99 a month**.
- **OpenAI is testing dots with a small number of ChatGPT Plus users** and bringing them to **all Business Standard** users.
- **The OpenAI API now rewards patience:** a **2-hour** completion window costs **30%** less per token, an **8-hour** window **40%** less. Flex processing is winding down.
- **Genie 4 is in the Gemini API.** Interactive 720p worlds cost about **$0.10 per second**.
- **Tencent released open weights for Hy4**, a **770B**-parameter model with **49B** active and a **1M**-token context.
- **OpenAI says** attacks that pull hidden reasoning out of its models fell from **54.0%** to **0.2%** success on GPT-6.2 Astra.
- **An Anthropic mathematician says he proved the Riemann hypothesis with Claude.** It hasn’t been independently verified.

**Today’s take:** Gemini’s Mac agent is the one to try, and the one to set up carefully. It’s the cheapest way yet to get a desktop agent from a big lab. But it clicks and types in your real apps, so build your Blocked apps list before you give it anything that matters.

---

## What can Gemini’s computer use on Mac do?

**Short answer:** It can run multi-step jobs across your local files, desktop apps and the web. You describe the task, and Gemini moves through menus, types and clicks to finish it. It works in an **isolated background window** with a live preview in the chat, so your own screen and cursor stay free.

Google’s examples: batch color-grading photos in design software, pulling weights, dimensions and addresses from local PDFs into shipping-quote forms, building a Google Slides deck from live dashboards, and staging resale listings from a folder of photos.

| What you need | Details |
|---|---|
| Plan | Google AI Plus ($4.99/mo), Pro ($19.99/mo) or Ultra |
| Mac | Apple Silicon, macOS Sequoia 15.0 or later |
| Account | Personal Google account, 18+ (not work or school yet) |
| Region | U.S., English |

*Plan prices from our [Gemini page](/tools/gemini/). Requirements per Google.*

**How you stay in control:** You pick which apps Gemini can use, watch each step, pause at any time and approve key actions before they happen. Google’s Help Center says to turn on **Computer use** in Gemini Settings, grant Accessibility and Screen & System Audio Recording, then start a **Task** and mention **@Computer use**. You can keep **Blocked apps** and **Allowed apps** lists. Choosing “Always allow” in a chat adds that app to the Allowed list, and an optional setting makes backup copies of files before Gemini changes them.

The Verge notes that it arrives just before Apple adds new “full disk access” restrictions for AI agents, previewed in the macOS 27.3 beta.

**Why it matters to you:** Desktop agents have mostly been a premium extra. This one starts on Google’s cheapest paid plan. Start with low-risk chores such as forms, file renaming or slide drafts. Block finance, password and messaging apps, and say “Allow once” instead of “Always allow” until you trust it. Plans: [Gemini pricing explained](/blog/gemini-pricing-explained-2026/). New to agents? Read [what an AI agent is](/blog/what-is-an-ai-agent-2026/).

**Sources:** [Google](https://blog.google/innovation-and-ai/products/gemini-app/computer-use-mac/) · [Gemini Apps Help](https://support.google.com/gemini/answer/18956635) · [The Verge](https://www.theverge.com/tech/1037902/google-gemini-macos-ai-computer-use) · [9to5Google](https://9to5google.com/2026/11/19/gemini-mac-computer-use/)

---

## Are ChatGPT dots coming to the Plus plan?

**Short answer:** For some people, yes. OpenAI’s ChatGPT engineering lead Thibault Sottiaux said OpenAI is starting to test [dots](/tools/openai-dots/) with **a small number of ChatGPT Plus users**, and is bringing dots to **all ChatGPT Business Standard users**, with rollout starting Nov 19.

He also showed a new mobile design for [ChatGPT](/tools/chatgpt/), starting with Pro users who have a dot or can create one. The dot gets its own tab, and you can pin Codex, Projects, Images and more to the tab bar. You can switch it on or off in Settings > New ChatGPT Design. Engadget adds that dots can now run on GPT-6.1 Terra as well as GPT-6 Astra.

**Why it matters to you:** OpenAI’s always-on agents are moving down from Pro toward the $20 Plus plan. If you’re on Plus, check whether you have access. It’s only a small test for now. Plans: [ChatGPT pricing explained](/blog/chatgpt-pricing-explained-2026/).

**Sources:** [Thibault Sottiaux on X](https://x.com/thsottiaux/status/2123556256392847657) · [Thibault Sottiaux on X (new design)](https://x.com/thsottiaux/status/2123557171321561133) · [Engadget](https://www.engadget.com/2322656/openai-is-testing-dots-personal-agents-on-its-20-per-month-plus-tier/)

---

## How do you get the OpenAI API’s new 30% and 40% discounts?

**Short answer:** Let the request wait. In Responses API background mode, set `background_options.completion_window` to `2h` for **30% off** Standard token rates or `8h` for **40% off**. The default, `soonest`, has no discount.

| Completion window | Discount | GPT-6.2 Astra per 1M tokens (input / output) |
|---|---|---|
| soonest (default) | None | $8 / $40 |
| 2h | 30% | $5.60 / $28 |
| 8h | 40% | $4.80 / $24 |

*Our math, using GPT-6.2 Astra’s list price from our [models page](/models/).*

It’s in public beta on **GPT-6.2 Astra, GPT-6.2 Sol, GPT-6.1 Terra and GPT-6 Luna**. Discounted requests use Standard processing, can’t stream, and share the Batch/Background rate limit with Batch API jobs. Follow-up requests get the discount too. Starting with GPT-6.2 Astra and Sol, new models launch without **Flex processing**, and OpenAI says it won’t add Flex to future models.

**Why it matters to you:** Overnight document reviews, ticket triage and report runs get cheaper with one setting. If you use Flex today, plan your move. More: [OpenAI API pricing explained](/blog/openai-api-pricing-explained-2026/) and [what batch inference is](/blog/what-is-ai-batch-inference-2026/).

**Sources:** [OpenAI API docs: Background mode](https://developers.openai.com/api/docs/guides/background) · [OpenAI API docs: Flex processing](https://developers.openai.com/api/docs/guides/flex-processing)

---

## How much does Genie 4 cost in the Gemini API?

**Short answer:** About **$0.10 per second** of generated world, or roughly **$6.05 a minute**, on the paid tier only. Genie 4 went live in the Gemini API (Interactions API) and Google AI Studio on Nov 19, a day after it opened to AI Ultra subscribers.

It streams a continuous **720p, 24 fps** world with synchronized stereo audio, started from a text prompt, a reference image or both. You steer with WASD or arrow keys and change weather, lighting, objects or events with live text prompts. Sessions run up to **120 seconds**, and Google says the world stays most consistent in the first 45 to 90 seconds. Pricing is $1.50 per million input tokens, $9 per million text output tokens and $17.50 per million video output tokens. Every output carries SynthID watermarking.

**Why it matters to you:** Playable prototypes, training sims and interactive demos are now an API call away. The meter runs per second, so always end sessions (Google says to call `complete()` to stop billing). See [Gemini](/tools/gemini/).

**Sources:** [Google](https://blog.google/innovation-and-ai/technology/developers-tools/genie-4-in-gemini-api/) · [Gemini API docs](https://aistudio.google.com/docs/models/genie-4) · [Gemini API pricing](https://aistudio.google.com/docs/pricing)

---

## What is Tencent’s Hy4, and can you run it yourself?

**Short answer:** It’s Tencent’s flagship model, now with open weights. The Hugging Face model card lists **770B** total parameters, **49B** active per token (plus 1.23B for vision), a **1,048,576-token** context, and text, image and video understanding. Tencent released three checkpoints: Hy4, Hy4-FP8 and the Hy4 base model.

You can run it yourself, but you’ll need serious hardware. Tencent’s example vLLM and SGLang setups split the FP8 model across 8 GPUs. It’s released under the **Tencent Hy License**, which is based on Apache 2.0 but adds commercial terms for large hosted (model-as-a-service) businesses. Benchmarks on the card are Tencent’s own.

**Why it matters to you:** It’s another frontier-scale open model you can keep in-house. Read the license and the Hy4 System Card before you use it for sensitive or commercial work. Background: [what open-source AI means](/blog/what-is-open-source-ai-2026/).

**Sources:** [Hugging Face: tencent/Hy4](https://huggingface.co/tencent/Hy4) · [Tencent Hy License](https://huggingface.co/tencent/Hy4/blob/main/LICENSE)

---

## What is OpenAI doing about adversarial distillation?

**Short answer:** Making it harder to copy its models. Distillation means training another model on a frontier model’s outputs. OpenAI says bad actors use it to reproduce capabilities without the original safeguards. It focuses on protecting the model’s hidden reasoning (chain-of-thought).

| Attack (OpenAI internal test) | GPT-6 Astra, original safeguards | GPT-6.2 Astra, updated safeguards |
|---|---|---|
| Extract reasoning from an earlier request | 54.0% | 0.2% |
| Extract reasoning from the current request | 22.9% | 0.9% |

With GPT-6.2 Astra and Sol, reasoning is tied to the conversation that produced it. If you rewrite an earlier message, the API drops the reasoning that followed.

**Why it matters to you:** If your app edits chat history, the model can’t build on reasoning from after the edit. These are OpenAI’s own numbers. Background: [what model distillation is](/blog/what-is-model-distillation-2026/).

**Sources:** [OpenAI](https://openai.com/index/combatting-adversarial-distillation/)

---

## Did Claude help prove the Riemann hypothesis?

**Short answer:** One mathematician says so, but nobody has checked it yet. The Verge reports that Anthropic mathematician **Levent Alpöge** claims he proved the Riemann hypothesis working with [Claude](/tools/claude/). He published the proof, presented in Lean, on his own website. It hasn’t been independently verified, and Anthropic hasn’t commented.

The Clay Mathematics Institute offers **$1 million** for each Millennium Prize problem. A solution has to be published and hold up through at least **two years** of scrutiny first. Only one, the Poincaré conjecture, has been officially solved.

**Why it matters to you:** If it holds up, it would be the strongest sign yet that AI models can help with frontier research. For now, treat it as a claim and wait for mathematicians to check it.

**Sources:** [The Verge](https://www.theverge.com/ai-artificial-intelligence/1010051/anthropic-riemann-hypothesis-millennium-prize-problem)

---

*Education only. Prices and features change; verify with the official sources above. Compare current model prices on our [models page](/models/) and browse the [AI tools directory](/tools/).*
