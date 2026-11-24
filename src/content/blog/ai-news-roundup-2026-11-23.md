---
title: "AI News Roundup – November 23, 2026"
description: "Today’s AI news: Z.ai’s GLM-5.4 runs its layers twice and claims 2–3 trillion-parameter performance; Amazon agrees to buy Decart’s optimization tech; Nvidia reinstates Jensen Huang; GPT-6.2 Astra’s Lean proof; Gemini API file slicing; two states sue over Grok images."
pubDate: 2026-11-23T15:30:00-05:00
tags: ["ai-news"]
relatedTools: ["gemini", "chatgpt", "claude", "grok"]
sample: false
draft: false
---

## TL;DR

- **Z.ai released GLM-5.4**, a 750B model that runs 28 of its layers **twice** and, by Z.ai’s own claim, reaches the level of **2–3 trillion-parameter** models. Z.ai has not published GLM-5.4 benchmark scores, and the API and open weights are still to come.
- **Amazon agreed to buy Decart’s AI optimization technology** and hire its founders. Amazon gave no price; Bloomberg (via TechCrunch) says **$7.5 billion**.
- **Nvidia’s board reinstated Jensen Huang as CEO**, and CNBC reports shares rose **33%**. An investigation and congressional hearings are still ahead.
- **Vals AI says GPT-6.2 Astra wrote the first known Lean proof of a 2006 algebra theorem** with no human help, in **94 minutes** for **$21.58** of compute.
- **The Gemini API now lets you “slice” files**, sending only the pages, cells or clips you need and paying tokens only for those.
- **Virginia and Oregon sued SpaceX and X** over sexualized images made with Grok. These are allegations, not findings.

**Today’s take:** “Run it twice” is the new “make it bigger,” but a claim is not a benchmark. When a lab says its model matches one four times its size, wait for scores you can check, or run your own prompts on the same task before you switch.

---

<div class="video-embed" style="position:relative;width:100%;max-width:960px;aspect-ratio:16/9;margin:1.5rem 0;border-radius:12px;overflow:hidden;background:#000;">
  <iframe src="https://www.youtube-nocookie.com/embed/hLk1gXrmWNU" title="GLM-5.4 Claims 3T Power. Where Are the Scores?" style="position:absolute;inset:0;width:100%;height:100%;border:0;" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## Does GLM-5.4 really match a 2–3 trillion-parameter model by running its layers twice?

**Short answer:** That is Z.ai’s claim, and it hasn’t shown the scores yet. On Nov 23, Z.ai (also known as Zhipu AI) published **GLM-5.4**, its first flagship built on a **Loop Transformer**. Instead of adding parameters, it takes **28 layers** of its GLM-5 base model and runs them for **two passes**, refining its internal state the second time. Z.ai says that gives intelligence “comparable to 2T–3T parameter” models from a **750B** model. It got there by continuing to train an already pre-trained base, not by training a looped model from scratch.

| What Z.ai reports | Detail |
|---|---|
| Size and loop | 750B parameters; 28 layers, 2 iterations |
| Evidence shown | A controlled test on a **30B** model: about **10% more** training compute, biggest gains in math, science reasoning and long context |
| Thinking length | Average output length down **10–14%** on benchmarks such as GPQA-Diamond and MMLU-Pro |
| Speed | Up to **200 tokens/s** off-peak, **70–80** at peak |
| Known limit | Can fall into very long “marathon thinking” loops |
| Not yet | API (after a safety evaluation) and open weights (after “safety hardening”) |

Access today is through Z.ai’s **GLM Coding Plan**, its ZCode tool and Z.ai Chat; for users with weekly quotas, Z.ai says GLM-5.4 comes with **50% more quota** than GLM-5.3. The model adds vision and aims at what Z.ai calls “Generalized Coding”: code that makes videos, games, 3D shaders and CAD models. The Next Web notes Z.ai did **not** publish benchmark scores for GLM-5.4 itself.

**Why it matters to you:** It is the second “more thinking, not more parameters” release in a week, after Thinking Machines’ [Inkling 2 Mini](/blog/ai-news-roundup-2026-11-21/). Looping can make a model cheaper to host, but you can’t compare it yet. Use the [models page](/models/) for verified list prices, and see [what AI reasoning models are](/blog/what-is-ai-reasoning-models-2026/) and [what a KV cache is](/blog/what-is-kv-cache-2026/) for the background.

**Sources:** [Z.ai](https://z.ai/blog/glm-5.4) · [The Next Web](https://thenextweb.com/news/zai-glm-5-4-loop-transformer-coding-model) · [Zhipu docs](https://docs.bigmodel.cn/cn/guide/models/glm-5.4)

---

## Why is Amazon buying Decart’s AI optimization technology?

**Short answer:** To make AI run faster and cheaper on its own chips. On Nov 23, Amazon announced a signed agreement to buy the technology behind the **Decart Optimization Stack (DOS)** and bring Decart’s three co-founders (Dean Leitersdorf, Moshe Shalev and Orian Leitersdorf) and their researchers and engineers to Amazon. Amazon says the software will help optimize inference and its custom silicon, including Trainium, and that it has worked with Decart since 2025. Closing still needs customary conditions, including regulatory clearance.

Amazon did not state a price. TechCrunch, citing Bloomberg, reports **$7.5 billion**, and adds that Amazon is preparing to sell Trainium chips to customers as an alternative to Nvidia. This follows [Saturday’s report](/blog/ai-news-roundup-2026-11-21/) that a deal was near.

**Why it matters to you:** Cheaper inference is how AI prices come down. If software makes models run well on non-Nvidia chips, more AI services can be priced and hosted outside Nvidia’s ecosystem. The price is reported, not confirmed, and the deal hasn’t closed. Background: [AI inference vs. training](/blog/what-is-ai-inference-vs-training-2026/).

**Sources:** [Amazon](https://www.aboutamazon.com/news/company-news/amazon-decart-ai-optimization) · [TechCrunch](https://techcrunch.com/2026/11/23/amazon-snaps-up-decarts-ai-optimization-tech-for-7-5b-as-it-prepares-to-sell-trainium-chips/)

---

## Why did Nvidia bring Jensen Huang back as CEO?

**Short answer:** Its board says it is satisfied with his candor and ability to lead, and that U.S. officials told it his return poses no national security risk. On Nov 23, Nvidia announced that, effective immediately, **Jensen Huang** is reinstated as President, CEO and board member after a **unanimous** vote. He had resigned on Nov 13 after reports about extramarital affairs, including one with an alleged Chinese spy. CNBC reports the stock rose **33%** on the news.

The board says its independent investigation will continue to its conclusion. It has formed a National Security and Export Control Committee and is searching for a Chief Compliance Officer; Colette Kress stays CFO after serving as interim CEO. CNBC adds that Huang is due for a House interview on **Dec 1** and a public Senate Banking hearing on **Dec 3** about export controls.

**Why it matters to you:** Nvidia chips set the cost of training and running most AI tools, so export-control scrutiny can affect compute supply and, over time, prices. Nothing about AI chips changes today, and the investigation is open.

**Sources:** [NVIDIA Newsroom](https://nvidianews.nvidia.com/news/nvidia-board-reinstates-jensen-huang-as-president-ceo-and-board-director) · [CNBC](https://www.cnbc.com/2026/11/23/nvidia-jensen-huang-ceo.html)

---

## Did GPT-6.2 Astra really prove a theorem no one had formalized?

**Short answer:** Vals AI says yes, with a checked proof. In a post dated Nov 18 (widely reported Nov 23), Vals says that on its new **Autoform-Hard** benchmark of **56** research-level formalization tasks, GPT-6.2 Astra solved **49**, while GPT-6.2 Sol and Claude Fable 5.2 each solved the same **48**. The extra one was Agata Smoktunowicz’s 2006 theorem about the growth of graded algebras, which Vals says it knows no earlier Lean formalization of.

Astra worked alone in a sandbox with Lean, Mathlib and a shell. The run took **94 minutes**, about **1,800 lines** of Lean and **146** agent turns, and cost **$21.58** at Astra’s published price. It first filed an “unsolved” report, was sent back to work, and then found a different route from the published proof. Vals checked it with clean-room grading and by hand. Vals is a benchmark vendor, not a peer-reviewed journal.

**Why it matters to you:** It follows the [Claude-assisted Riemann proof](/blog/ai-news-roundup-2026-11-22/) and points the same way: AI plus a strict checker gives results you can verify. A checked proof shows one formal result, not general reliability. Compare the models behind it in [ChatGPT](/tools/chatgpt/) and [Claude](/tools/claude/).

**Sources:** [Vals AI](https://www.vals.ai/blogs/smoktunowicz-gap-theorem) · [The Decoder](https://the-decoder.com/gpt-6-2-astra-solved-a-math-theorem-no-other-ai-could-crack-then-invented-its-own-proof-strategy/)

---

## How does file slicing in the Gemini API cut token costs?

**Short answer:** You tell Gemini which part of a file to read, and you’re billed only for that part. On Nov 23, Google launched **file slicing controls** in the Gemini API, plus native upload of Microsoft Office and OpenDocument files. You can pass PDFs, Office docs, slides, spreadsheets, audio and video and request only the page range, sheet and cell range, or time segment you need, at a chosen resolution and content layer.

| File type | What you can slice |
|---|---|
| Documents and slides | Page range, resolution, page text or page images |
| Spreadsheets | Worksheet tab and cell range; data, formulas, visuals |
| Video | Start and end time, frame rate, resolution; transcript, frames, audio |
| Audio | Start and end time |

It works across all Gemini 4 models, and existing file size and page limits still apply. Google’s tip: skim a whole file cheaply as extracted text, then zoom in on one page at high resolution.

**Why it matters to you:** If you build with [Gemini](/tools/gemini/) by the token, this is a direct way to cut cost on long documents. See [what AI tokens are](/blog/what-are-ai-tokens-explained-2026/) and [Gemini vs. Claude for long PDFs](/blog/gemini-vs-claude-for-long-pdfs-2026/).

**Source:** [Google blog](https://blog.google/innovation-and-ai/technology/developers-tools/file-slicing-controls/)

---

## Why are Virginia and Oregon suing SpaceX over Grok?

**Short answer:** They say Grok made sexualized images of real people, including children, and that the company falsely promised strong safeguards. On Nov 23, Virginia Attorney General Jay Jones and Oregon Attorney General Dan Rayfield filed separate but similar suits in state courts (Richmond and Multnomah County) against **SpaceX** and **X Corp.** The complaints name Grok, developed by xAI (now called SpaceX Super Intelligence), and a “spicy mode.” They cite a Center for Countering Digital Harm estimate of about **three million** sexualized images, about **23,000** that appeared to depict children, between Dec 29, 2025 and Jan 8, 2026. The states are using consumer protection laws.

These are allegations in complaints, not court findings.

**Why it matters to you:** States are treating AI image tools like any consumer product. Expect tighter consent and age controls on image generators, and don’t upload other people’s photos to image tools without their permission. See [Grok](/tools/grok/) in our directory.

**Sources:** [Virginia Attorney General](https://www.oag.state.va.us/media-center/news-releases/jay-jones/3162-attorneys-general-jones-and-rayfield-file-suit-against-spacex-parent-company-of-x-xai-and-grok-over-creation-and-promotion-of-child-exploitation-and-non-consensual-images-on-platform) · [WIRED](https://www.wired.com/story/states-sue-spacex-over-grok-deepfakes/)

---

## What this means for you

If you send large PDFs or spreadsheets to the Gemini API, file slicing can cut costs because you pay only for the pages or cells you send. GLM-5.4's claims are self-reported, so test it before you switch. The Grok lawsuits are allegations, but they're a good reason not to upload other people's photos to any AI image tool.

- Gemini's plans and API context: [Gemini pricing explained](/blog/gemini-pricing-explained-2026/).
- Model prices and context windows: [AI model comparison](/models/).

---

*Education only. Prices, plans and legal claims can change; verify with the official sources above. Compare current model prices on our [models page](/models/) and browse the [AI tools directory](/tools/).*
