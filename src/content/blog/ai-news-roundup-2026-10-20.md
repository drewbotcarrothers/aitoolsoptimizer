---
title: "AI News Roundup – October 20, 2026"
description: "Today’s AI news: ByteDance, Alibaba and Tencent order $35B+ of Nvidia chips Nvidia may not be able to deliver, OpenAI’s models jump on COBOL migration, PyTorch goes native on Google TPUs and Amazon Trainium, DeepSeek open-sources DeepInfer, Perplexity Computer goes fully local, Mistral’s Voxtral 3, OpenAI buys Orchestra Bio, and Claude designs scorpion-toxin binders."
pubDate: 2026-10-20T15:00:00-04:00
tags: ["ai-news"]
relatedTools: ["chatgpt", "openai-codex", "deepseek", "perplexity", "mistral-vibe", "claude"]
sample: false
draft: false
---

## TL;DR

- **Reuters:** **ByteDance, Alibaba and Tencent** have ordered more than **3 million** Nvidia **RTX PRO 5500** cards worth over **$35 billion**, but Nvidia has told partners it **can’t guarantee delivery**, and some may get only **5% to 10%** of what they asked for.
- **OpenAI** says its latest models can now migrate **COBOL** code while preserving behavior: **GPT-6.1 Sol** scores **86.6%** at low effort (up from **5.4%**) and **97.9%** at higher effort.
- **Google** open-sourced **TorchTPU** and **Amazon** released **TorchNeuron**, so PyTorch code can run natively on **TPUs** and **Trainium** with minimal or no rewrites.
- **DeepSeek** open-sourced **DeepInfer**, the inference engine it says powers its production services, under **Apache 2.0**.
- **Perplexity Computer** can now run **fully local on a Mac**, with both the model and the agent on-device.
- **Mistral** launched **Voxtral 3** speech models and a **voice agent SDK**, with transcription from **$0.0035 per minute**.
- **OpenAI** acquired **Orchestra Bio** to build drug-development agents alongside its **Rosalind** life-sciences tools.
- **Anthropic** says **Claude** designed **17 lab-confirmed protein binders** against scorpion neurotoxins, out of 211 designs tested.

## Watch: AI News Roundup video (Oct 20, 2026)

<div class="video-embed" style="position:relative;width:100%;max-width:960px;aspect-ratio:16/9;margin:1.5rem 0;border-radius:12px;overflow:hidden;background:#000;">
  <iframe src="https://www.youtube-nocookie.com/embed/fmBskSnZ7zU" title="China's Giants Order $35B of Nvidia Chips + OpenAI Cracks COBOL | AI News Oct 20" style="position:absolute;inset:0;width:100%;height:100%;border:0;" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

Prefer YouTube? [Watch on the AI Tools Optimizer channel](https://www.youtube.com/watch?v=fmBskSnZ7zU).

---

## Why can’t Nvidia fill China’s $35 billion chip order?

**Short answer:** According to a Reuters exclusive published October 20, citing people familiar with the matter, **ByteDance, Alibaba and Tencent** have ordered more than **3 million** of Nvidia’s new **RTX PRO 5500** graphics cards, with a combined sticker price of over **$35 billion**. The RTX PRO 5500 is a workstation chip, less powerful than Nvidia’s data-center processors but export-compliant, and among the most powerful Nvidia chips Chinese buyers can still get.

Nvidia has told customers and partners it **cannot guarantee** it can fill the orders because demand from Chinese tech companies far exceeds planned production. One source said partners might receive only **5% to 10%** of the quantities requested. Another said Nvidia indicated it could make no more than **3 million** RTX PRO 5500 cards globally in 2027, while total orders from China have passed **6 million**. The buyers want the cards mainly for **AI inference**, which means running trained models rather than training new ones. Nvidia’s Blackwell-based B300 can’t be sold to Chinese buyers under US export controls, and H200 exports are reviewed case by case.

**Why it matters:** Chinese giants ordered roughly twice what Nvidia plans to build. Tight chip supply keeps pressure on the price of AI compute worldwide and pushes buyers toward alternatives, including Huawei, Google TPUs and Amazon Trainium (more on that below). Compare what models cost to run on our [Models](/models/) page.

**Sources:** [Reuters via U.S. News](https://money.usnews.com/investing/news/articles/2026-10-20/exclusive-bytedance-alibaba-tencent-place-over-35-billion-worth-of-nvidia-chip-orders) · [Reuters via Moneycontrol](https://www.moneycontrol.com/news/business/bytedance-alibaba-tencent-order-over-35-billion-in-nvidia-chips-but-supply-may-fall-short-14056010.html) · [The Economic Times](https://economictimes.indiatimes.com/tech/technology/bytedance-alibaba-tencent-place-over-35-billion-worth-of-nvidia-chip-orders/articleshow/135066129.cms)

---

## Can AI finally migrate COBOL code?

**Short answer:** In an October 19 post, OpenAI said its latest models are much better at **low-resource programming languages** such as **COBOL**, **Fortran**, **OCaml** and **Visual Basic**, which have far less training data than Python or JavaScript. OpenAI notes COBOL supports more than **40%** of online banking systems and **95%** of ATM transactions.

OpenAI built two new evaluations. Its **COBOL migration** test asks a model to move COBOL programs to C++, Java, Kotlin, Python or Rust and requires byte-for-byte matching output on hidden tests. **GPT-6.1 Sol** scored **86.6%** at low reasoning effort, versus **5.4%** for GPT-5.6 Sol, at **39% lower** API cost. At higher effort it reached **97.9%**, nearly saturating the eval. On **MultiLangBench**, where a model builds a SQLite-compatible database engine from scratch in 20 languages, **GPT-6 Astra** averaged **87.4%**, up from **26.8%**, and scored above 83% in 19 of the 20 languages. COBOL is still the hardest, at **72.1%**. OpenAI is releasing the MultiLangBench test suite on GitHub.

**Why it matters:** Banks, governments and insurers run critical systems on code that few developers can still maintain. Behavior-preserving migration at this accuracy could make modernization faster and cheaper, though OpenAI says production use still needs expert review and testing. See [OpenAI Codex](/tools/openai-codex/), [ChatGPT](/tools/chatgpt/) and the [Models](/models/) page.

**Sources:** [OpenAI: Advancing coding in low-resource programming languages](https://openai.com/index/low-resource-programming-languages/) · [OpenAI on X](https://x.com/OpenAI/status/2112310345863930168) · [Thurrott](https://www.thurrott.com/a-i/openai-a-i/343049/openai-launches-a-coding-model-for-older-programming-languages)

---

## How are Google and Amazon taking on Nvidia’s software lead?

**Short answer:** At PyTorch Conference 2026 on October 20, **Google** made **TorchTPU**, its native PyTorch stack for TPUs, **open source** on GitHub. Co-developed with Meta’s PyTorch team, it supports eager mode and `torch.compile` and works with vLLM, SGLang, Ray, TorchTitan and Hugging Face. In Transformers v5, deploying to a TPU is as simple as `device_map="tpu"`. Google also shipped **llm-d 1.0** for distributed inference, brought **LiteRT** into the PyTorch ecosystem, and previewed a **TPU agent suite** that helps move models over.

**Amazon** released **TorchNeuron** as open source under Apache 2.0 the same day. It runs existing PyTorch code natively on **Trainium2** and **Trainium3** with a single configuration change and no rewrite. Amazon is also contributing changes to PyTorch itself to remove code that ties the framework to specific chips, and Hugging Face has added native Trainium support to its tools.

**Why it matters:** By some accounts about **85%** of AI apps use PyTorch, and most default to Nvidia GPUs. If switching hardware becomes a one-line change, you can shop for cheaper compute without rewriting your app.

**Sources:** [Google Cloud: TorchTPU is now open source](https://cloud.google.com/blog/topics/ai-infrastructure/torchtpu-is-now-open-source-run-native-pytorch-on-tpus) · [PyTorch: Introducing TorchTPU](https://pytorch.org/blog/introducing-torchtpu/) · [Amazon: TorchNeuron](https://www.aboutamazon.com/news/innovation-at-amazon/torchneuron-pytorch-aws-trainium-chips-ai) · [TechCrunch](https://techcrunch.com/2026/10/20/google-has-joined-amazon-in-attacking-nvidias-stronghold-with-ai-app-developers/)

---

## What did DeepSeek open-source today?

**Short answer:** On October 20, **DeepSeek** released **DeepInfer**, which its GitHub README calls “the high-performance inference framework that powers DeepSeek’s large-scale production services.” It’s released under the **Apache 2.0** license and supports **DeepSeek-V4.1-Flash** on **NVIDIA SM100** GPUs and **Huawei Ascend 950** chips.

The release covers **offline inference** with DeepSeek’s optimized kernels (including FlashMLA, DeepGEMM and DeepEP), expert parallelism for its mixture-of-experts models, draft-token decoding, asynchronous scheduling, deterministic sampling and structured outputs. DeepSeek says a complete inference service would still need pieces that aren’t included: a **KV cache system**, prefill/decode disaggregation and load balancing across replicas.

**Why it matters:** Teams that self-host DeepSeek models can now study and run the same engine DeepSeek uses in production, a rare look inside a frontier lab’s serving stack. It isn’t yet a drop-in serving system. See [DeepSeek](/tools/deepseek/) and the [Models](/models/) page.

**Sources:** [GitHub: deepseek-ai/DeepInfer](https://github.com/deepseek-ai/DeepInfer) · [DeepSeek on X](https://x.com/deepseek_ai/status/2112476496283775135)

---

## Can Perplexity Computer really run fully offline?

**Short answer:** Yes, on the right Mac. Perplexity said on October 20 that **Perplexity Computer** can now run **fully local** in its Mac app: “The model and the agent both run on your Mac.” With permission, it works with local files and Mac apps such as **Notes, Messages, Mail and Numbers**, and it can run tasks without an internet connection. Files reach the cloud only if you approve it, for example when a task needs current information or browser use.

The local mode launches with **Qwen 3.6** and **PPLX Pro** (a post-trained version of Qwen, per The Verge) as model options. It’s available to **Pro, Max and Enterprise** subscribers, and Perplexity recommends an Apple silicon Mac with at least **36GB** of unified memory.

**Why it matters:** An agent that never sends your files to the cloud makes AI usable for sensitive work like legal, finance or HR documents, as long as your Mac has enough memory. See our [Perplexity](/tools/perplexity/) review.

**Sources:** [Perplexity on X](https://x.com/perplexity_ai/status/2112571597798461920) · [Perplexity blog](https://www.perplexity.ai/hub/blog/perplexity-computer-now-runs-fully-local-on-mac) · [9to5Mac](https://9to5mac.com/2026/10/20/perplexitys-computer-can-now-run-entirely-on-your-mac-even-offline/) · [The Verge](https://www.theverge.com/ai-artificial-intelligence/1014400/perplexity-computer-can-now-run-fully-offline-on-mac-but-youll-need-a-lot-of-ram)

---

## What is Mistral’s Voxtral 3?

**Short answer:** **Mistral** launched **Voxtral 3** on October 20: new speech-to-text and text-to-speech models plus a **voice agent SDK**, built on LiveKit, that listens, reasons, calls tools and speaks in one real-time pipeline. Mistral says each turn completes in **under one second** and the agent stops talking when a caller cuts in. It can answer and place phone calls over SIP and run in browsers and apps over WebRTC.

**Voxtral Small Transcribe 3** handles **50+ languages** with speaker identification (diarization), and Mistral says it beats Whisper, Scribe v2 and Gemini 3.5 Transcribe. A realtime version runs at **sub-500ms** latency. **Voxtral Speech 3** covers **35+ languages and 50+ dialects**, with voices that adapt emotion and pacing. Prices start at **$0.0035 per minute** for batch transcription, **$0.008 per minute** for realtime, and **$13 per million characters** for speech. It’s available through Mistral’s European, US and global API endpoints or for self-deployment.

**Why it matters:** Building a phone or support voice agent usually means stitching together several vendors. Mistral now sells the whole stack at low per-minute prices, with a self-hosting option for data control. See [Mistral Vibe](/tools/mistral-vibe/) and compare voice tools like [ElevenLabs](/tools/elevenlabs/).

**Sources:** [Mistral: Voxtral 3](https://mistral.ai/news/voxtral-3/) · [Mistral on X](https://x.com/MistralAI/status/2112574615318876178) · [Mistral docs: Voice agents](https://docs.mistral.ai/studio/audio/voice-agents/overview)

---

## Why did OpenAI buy Orchestra Bio?

**Short answer:** **OpenAI** announced on October 20 that it has acquired **Orchestra Bio**, a platform that helps biopharma teams coordinate the complex process of drug development. Orchestra’s team and technology will join **Rosalind**, OpenAI’s models and tools for life-sciences research, including GPT-Rosalind and Rosalind Workbench.

On Orchestra, scientists and program leaders hand off the monitoring and tracking of studies to **AI agents**. OpenAI’s example: if a manufacturing batch fails, the agents identify which activities and timelines are affected, gather the relevant information and compare ways to respond. OpenAI says developing a new medicine takes roughly **10 to 15 years** on average from target discovery to US approval. Deal terms weren’t disclosed.

**Why it matters:** OpenAI is moving from answering science questions to running the operational side of drug programs, a sign that labs see agents as project managers, not just chatbots. See [ChatGPT](/tools/chatgpt/).

**Sources:** [OpenAI: OpenAI acquires Orchestra Bio](https://openai.com/index/openai-to-acquire-orchestra-bio) · [OpenAI on X](https://x.com/OpenAI/status/2112607347688583586)

---

## How did Claude design proteins against scorpion venom?

**Short answer:** In an October 20 Science blog post, **Anthropic** said an internal research model working inside **Claude Science** designed **minibinders**, small proteins that attach tightly to a target, against scorpion neurotoxins. Scorpions sting more than **1.2 million** people a year and cause more than **3,250** deaths, mostly children in places with limited medical care.

Working mostly autonomously for **64 hours**, from one prompt and four follow-ups, Claude used 12 design tools to generate **318,484** designs and picked 180 for testing; the team added 31 more with Claude’s help. Lab partners **Adaptyv Bio** and **Twist Bioscience** tested all **211**, and **17** met Anthropic’s criteria as binders, each against a single toxin. The two strongest bound the Mexican scorpion toxin Cn2 tightly and likely attach at the same site as an antibody known to neutralize it. Anthropic is clear that this is **not an antivenom**: no neutralization or animal tests have been done yet. It’s releasing all 211 designs and their data.

**Why it matters:** AI agents are starting to run lab-validated science on neglected diseases that get little investment. It’s an early step, but it shows where tools like [Claude](/tools/claude/) are heading beyond coding.

**Sources:** [Anthropic: How Claude designed protein binders against scorpion neurotoxins](https://www.anthropic.com/research/claude-scorpion-toxin-binder-design) · [Anthropic on X](https://x.com/AnthropicAI/status/2112579251555721573)

---

## What should builders watch next?

1. **Chip supply:** whether Nvidia’s RTX PRO 5500 allocations really land at a fraction of China’s orders, and how much demand shifts to Huawei, TPUs and Trainium.
2. **Hardware choice:** real-world benchmarks of TorchTPU and TorchNeuron against Nvidia GPUs on cost per token.
3. **Legacy code:** whether banks and governments start COBOL migration pilots with OpenAI’s latest models, and what independent tests on the MultiLangBench suite show.
4. **Private and voice agents:** local agents like Perplexity Computer and full-stack voice agents like Voxtral 3 are getting cheaper and easier to deploy.
5. **AI in science:** follow-up tests on Claude’s scorpion-toxin binders and what OpenAI builds with Orchestra Bio.

For tool deep-dives, browse the [AI tools directory](/tools/) or the [Models](/models/) page. This roundup summarizes public announcements and reporting; it is not hands-on product testing.

*Published by Andrew for [AI Tools Optimizer](https://aitoolsoptimizer.com).*
