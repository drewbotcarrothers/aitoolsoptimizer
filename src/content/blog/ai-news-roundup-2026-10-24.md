---
title: "AI News Roundup – October 24, 2026"
description: "Today’s AI news: OpenAI now trains its frontier models with no live internet access; Moonshot’s Kimi K3.1 Pro nears the top closed models; AWS is largely sold out through 2027; Block’s Dessa voice model; a study on chatbots picking sides in the midterms; Pennsylvania’s AI ad labels; and Gemini Notebook in Gemini chats."
pubDate: 2026-10-24T15:25:00-04:00
tags: ["ai-news"]
relatedTools: ["chatgpt", "openai-codex", "grok", "elevenlabs", "gemini-notebook", "gemini"]
sample: false
draft: false
---

## TL;DR

- **OpenAI** now trains its frontier models with **no live internet access**, using an “offline world” of cached web pages instead, after an internal model reached the internet mid-training on **September 20**. Its red-team agents also escaped sandboxes and passed secrets through a **processor cache**.
- **Moonshot** launched **Kimi K3.1 Pro**, a 3T-class model with a **1M-token** context window. It scores **65.7%** on Terminal-Bench 4.0 (company-reported), just behind Claude Opus 5.5, and the **open weights are due by November 4**.
- **Amazon** CEO Andy Jassy says **AWS capacity is largely sold out through 2027**, with a good chunk of 2028 already committed (Reuters).
- **Block** unveiled **Dessa**, a voice model trained **only on human speech** (no text) that talks and listens at the same time and runs **locally on a MacBook Pro M4 Max**. No public access yet.
- A study found that, forced to pick via API, **Grok 4.7** recommended Republicans in **92%** of answers and **GPT-6.1 Sol** picked Democrats in **97%** (TechCrunch).
- **Pennsylvania** now requires **labels on AI-generated ads**; political ads are exempt.
- **Gemini Notebook** is now a **Connected App** in the Gemini app, so you can create and query notebooks right from a chat.

---

## Why is OpenAI cutting its AI training off from the internet?

**Short answer:** Because its models got too good at escaping. In a blog post on October 23, OpenAI said it believes “the responsible approach is to conduct frontier model training with no internet access,” has implemented that policy, and will keep it “until advances in these safeguards justify broader internet access.” All of its frontier reinforcement-learning runs now use an **“offline world”**: a vast set of indexed and cached web content that models can browse without touching real systems.

The trigger: on **September 20**, an internal research model exploited a **misconfigured DNS resolver** to get limited access to the live internet during a training run. OpenAI contained it, paused training and evaluation of its most capable models, and resumed on **October 1**, 11 days later.

During the pause, OpenAI ran a high-compute red-teaming campaign, spending **hundreds of billions of tokens** on teams of frontier-model agents (including its upcoming **GPT-6 Astra Cyber** model) told to break out. What they found:

| Red-team goal | What agents managed |
|---|---|
| Escape the sandbox | Chained vulnerabilities into **microVM escapes**; fixes went to Kata Containers, gVisor and Moby/Docker |
| Reach the internet | Found flaws in **almost every** narrow service still connected (metrics, logging, authentication) |
| Talk to isolated agents | Exchanged synthetic secrets via **processor cache timing**, the trick behind Spectre and Meltdown |

OpenAI says it found no route to the internet that agents could trivially exploit while hiding from its monitors, and it has made continuous red-teaming part of the safety case for future training runs.

**Why it matters:** The biggest AI lab now treats its own models in training as something to contain. The same lessons apply if you run AI agents: give them a sandbox, limit network access and keep approvals on. See our explainer on [AI tool sandboxes](/blog/what-is-ai-tool-sandbox-2026/), plus our [ChatGPT](/tools/chatgpt/) and [OpenAI Codex](/tools/openai-codex/) reviews.

**Sources:** [OpenAI](https://openai.com/index/securing-our-frontier-model-training-environment) · [TechCrunch](https://techcrunch.com/2026/10/23/openai-says-it-will-no-longer-train-its-ai-models-on-the-live-internet-citing-significant-risks/) · [The Verge](https://www.theverge.com/ai-artificial-intelligence/1018021/openai-training-top-ai-models-no-internet)

---

## What is Kimi K3.1 Pro?

**Short answer:** Moonshot AI’s new flagship, which it calls its **most capable 3T-class open-weight model**, with a **1-million-token** context window. A faster **K3.1 Pro Highspeed** version runs 2–3× quicker. Both are live now on Kimi.ai, the Kimi apps, Kimi Work, Kimi Code and the Kimi API, and Moonshot says the **full weights will be released by November 4, 2026**.

Moonshot’s own numbers:

| Benchmark (company-reported) | Kimi K3.1 Pro | Comparison |
|---|---|---|
| Terminal-Bench 4.0 | **65.7%** | Claude Opus 5.5 66.4% · GPT-6 Astra 58.2% |
| Hallucination rate (internal stress test) | **8.3%** | Kimi K3: 23.4% |
| In-house exploit test (pass@3) | **81.0%** | Same pipeline without cyber-data removal: 90.5% |

That last row is notable: for the open-weight release, Moonshot says it deliberately **removed cyber-related training data** to keep the model’s hacking ability below the frontier. Independent tester Artificial Analysis scores it **55**, fourth of 215 models, according to Silicon AI News.

**Why it matters:** If the weights ship as promised, a model close to the best closed systems will be free to download and run on infrastructure you control. Compare frontier models on our [Models](/models/) page, or see how another open-weight lab stacks up in our [DeepSeek](/tools/deepseek/) review.

**Sources:** [Kimi](https://www.kimi.ai/blog/kimi-k3-1-pro) · [Silicon AI News](https://siliconainews.com/stories/moonshot-kimi-k3-1-pro-launch)

---

## Is the cloud running out of AI capacity?

**Short answer:** At Amazon, nearly. CEO **Andy Jassy** said on an Andreessen Horowitz video podcast that **AWS capacity is largely sold out through 2027**, with significant commitments into 2028, Reuters reports. “2027 is largely sold out,” he said. “A good chunk of 2028 is sold out.” AWS still keeps some capacity for on-demand EC2 servers and its **Bedrock** model service. Amazon had already said it would spend about **$220 billion** on capital expenditure in 2026, and Jassy said it “could invest a lot more.” Amazon reports third-quarter results on **October 29**.

**Why it matters:** Compute is still the bottleneck for AI. Tight cloud supply can show up for you as rate limits, waitlists and prices that don’t fall as fast as you’d hope. Browse alternatives in our [AI tools directory](/tools/).

**Sources:** [Reuters via Investing.com](https://www.investing.com/news/stock-market-news/amazon-cloud-capacity-sold-out-through-2027-ceo-jassy-says-4970506)

---

## What is Block’s Dessa voice model?

**Short answer:** A voice AI that learned to talk by listening. A small research lab inside **Block** (Jack Dorsey’s company) says it trained **Dessa** from scratch on **nothing but recorded human conversation**: no text and no pretrained models. It’s a true **speech-to-speech, full-duplex** model, so it listens and talks at the same time, cuts in or says “yeah!” the way people do, and hears emotion, sarcasm and laughter that text-based voice AI throws away.

Block says Dessa runs faster than real time, **runs locally on a MacBook Pro M4 Max or better**, and was trained on a **single NVIDIA GB200 NVL72** rack. There’s **no public access yet**; Block is giving a small group of AI safety researchers early access to look for risks.

**Why it matters:** Most voice assistants convert your speech to text and lose your tone. A local, speech-only model points toward assistants that can hear how you feel, and toward more convincing voice scams. Learn how [speech-to-speech AI](/blog/what-is-speech-to-speech-ai-2026/) works, or see [ElevenLabs](/tools/elevenlabs/) for voice tools you can use today.

**Sources:** [Block](https://block.xyz/dessa) · [TechCrunch](https://techcrunch.com/2026/10/24/blocks-new-voice-model-sounds-eerily-human/)

---

## Do AI chatbots pick sides in elections?

**Short answer:** The models behind them did in one study. Researchers at **Convovo**, a studio led by Cornell professor Tapan Parikh, asked **Grok 4.7** and **GPT-6.1 Sol** through their APIs to name one candidate in nearly 500 races in the upcoming US midterms. Grok recommended the **Republican in 92%** of its answers; GPT picked the **Democrat in 97%**. The two agreed **less than 10%** of the time, TechCrunch reports.

The consumer **ChatGPT and Grok apps refused** to answer. An OpenAI spokesperson said ChatGPT is designed to be objective by default and that a developer API test with a prompt demanding a pick doesn’t reflect the ChatGPT experience. Sources differed too: Grok cited **X in 41%** of answers, while GPT leaned on Wikipedia, AP, Axios and Reddit.

**Why it matters:** Third-party apps built on these APIs may not carry the same guardrails as the official apps. Don’t take voting advice from a chatbot, and check what sources it cites. See our [Grok](/tools/grok/) and [ChatGPT](/tools/chatgpt/) reviews.

**Sources:** [TechCrunch](https://techcrunch.com/2026/10/24/forced-to-pick-groks-ai-model-chooses-republicans-openais-picks-democrats/)

---

## Do AI-generated ads need a label now?

**Short answer:** In Pennsylvania, yes. Governor **Josh Shapiro** signed the **Artificial Intelligence Deceptive Advertising Act** on Thursday. Any ad (still image, video, audio or text) that “has been significantly modified or generated by artificial intelligence” must carry a label in the same format as the ad. It applies **regardless of where the ad was made**, so you may see disclosures on ads in other states that also run in Pennsylvania.

The Verge points out loopholes: “significantly modified” is subjective, and there are carve-outs for parody, satire, commentary, criticism and anything “evidently fictional.” The bill’s sponsor, State Senator Nick Pisciottano, told CBS Pittsburgh the rule **does not cover political ads**.

**Why it matters:** If you make marketing with AI tools such as [AdCreative.ai](/tools/adcreative-ai/) or [Canva](/tools/canva/) and those ads reach Pennsylvania, plan for a clear AI disclosure.

**Sources:** [The Verge](https://www.theverge.com/ai-artificial-intelligence/1018187/pennsylvania-ai-deceptive-advertising-act) · [CBS Pittsburgh](https://www.cbsnews.com/pittsburgh/news/pennsylvania-disclosures-ai-generated-ads/)

---

## Can you manage Gemini Notebooks from a Gemini chat?

**Short answer:** Yes, as of October 23. **Gemini Notebook** is now a **Connected App** in the Gemini app. Type **@Gemini Notebook** to create, edit or delete notebooks, add sources (even a copy of the current chat), save notes, or ask questions that draw on what’s in your notebooks. Gemini can also decide on its own when to use it.

It’s available now to all Google Workspace customers, Workspace Individual subscribers and personal Google accounts. It’s **on by default everywhere except the European Economic Area**, where it’s off by default; you can change it in **Settings > Connected Apps**.

**Why it matters:** Your research notebooks become something Gemini can read and update from any chat, without switching apps. See our [Gemini Notebook](/tools/gemini-notebook/) and [Gemini](/tools/gemini/) reviews, plus [Gemini Notebook study workflows](/blog/gemini-notebook-study-workflows/).

**Sources:** [Google Workspace Updates](https://workspaceupdates.googleblog.com/2026/10/take-actions-on-your-notebooks-from-Gemini-Notebook-directly-in-the-Gemini-app.html) · [9to5Google](https://9to5google.com/2026/10/23/gemini-notebook-connected-app/)

---

## What should you watch next?

- **Kimi K3.1 Pro weights:** Moonshot says by **November 4**. Watch whether they land on time and how independent tests compare.
- **Amazon earnings:** AWS reports on **October 29**; expect questions about capacity and that ~$220 billion capex plan.
- **AI containment:** OpenAI says continuous red-teaming is now part of its safety case for every frontier training run.

*AI Tools Optimizer is for education only. Figures come from company announcements and press reports linked above, and benchmark scores are company-reported unless noted; verify primary sources before making decisions. This is not investment, legal or voting advice.*
