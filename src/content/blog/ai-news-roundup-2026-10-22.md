---
title: "AI News Roundup – October 22, 2026"
description: "Today’s AI news: Anthropic launches Claude Duet, a proactive agent app that checks with you before it acts; DeepSeek raises about $15B; OpenAI, Anthropic, Hugging Face and Alibaba donate agent standards to the Agentic AI Foundation; Google’s Agent Compute Engine; Hugging Face’s Carbon-X DNA model; Kevin Weil’s Warp Sciences; and Recursive’s AI-built Flint coding model."
pubDate: 2026-10-22T15:15:00-04:00
tags: ["ai-news"]
relatedTools: ["claude", "deepseek", "claude-code", "openai-codex", "gemini"]
sample: false
draft: false
---

## TL;DR

- **Anthropic** opened a research preview of **Claude Duet**, an app where Claude works as a **proactive agent**: it sends a morning brief, keeps working in the background and **asks for your approval** before it sends, pays, signs or deletes anything. Waitlist first for **US Pro and Max** subscribers.
- **DeepSeek** raised about **$15 billion** (100 billion yuan), double its target, with **CATL** and **Tencent** among the biggest backers, according to Reuters and Bloomberg sources.
- **OpenAI, Anthropic, Hugging Face and Alibaba** donated **Open Responses, Agent Skills, OpenEnv and OpenSandbox** to the Linux Foundation’s **Agentic AI Foundation**, which now hosts **10** projects.
- **Google Cloud** launched **Agent Compute Engine**, which gives every AI agent its own isolated computer, and open-sourced **Agent Substrate** for Kubernetes.
- **Hugging Face** released **Carbon-X**, an open **14.8B** model that lets researchers **chat with DNA** on their own hardware.
- Former OpenAI science chief **Kevin Weil** launched **Warp Sciences** with **$215 million** to build AI-and-robotics chemistry labs for drug discovery.
- **Recursive** released **Flint**, a free coding model that runs on a **laptop**, and says it was largely built by its own **AI research system**.

---

## Watch: AI News Roundup video (Oct 22, 2026)

<div class="video-embed" style="position:relative;width:100%;max-width:960px;aspect-ratio:16/9;margin:1.5rem 0;border-radius:12px;overflow:hidden;background:#000;">
  <iframe src="https://www.youtube-nocookie.com/embed/ftSAdc8usqo" title="Claude Now Works While You&#39;re Away + DeepSeek Raises ~$15B | AI News Oct 22" style="position:absolute;inset:0;width:100%;height:100%;border:0;" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

Prefer YouTube? [Watch on the AI Tools Optimizer channel](https://www.youtube.com/watch?v=ftSAdc8usqo).

## What is Claude Duet, and who can use it?

**Short answer:** Claude Duet is a new Anthropic app where **Claude works as a proactive agent** instead of waiting for prompts. It’s in **research preview by waitlist**, starting with **US Pro and Max** subscribers, as a standalone app on **iOS and Android** and on **claude.ai**. During the preview it’s included in Pro and Max plans and **shares the same usage limits** as the rest of Claude. Anthropic designed it around **Claude Opus 5.5** and built it for professionals and small business owners.

Each morning it sends a short brief on the most important items across your connected apps, then messages you during the day only when something needs your attention (it checks your accounts every few hours). It has its own **virtual machine with a browser**, so it keeps working when your laptop or phone is off. It can use the **6,000+ connectors and plugins** in the Claude Marketplace, from Gmail, Slack and QuickBooks to Gusto payroll, Docusign, HubSpot, Canva and Shopify, and it can buy things for your business through Stripe’s **Link** with a virtual card.

Before it **sends a message, makes a payment, signs a document or deletes anything**, Duet shows you exactly what it’s about to do and waits for approval. Some actions, like **trading securities or moving money between accounts**, are off-limits even with approval. Anthropic says Duet never directly sees your passwords or sign-in tokens, and a new classifier blocks it from sharing the most sensitive data, such as credit card numbers and government IDs. Anthropic also warns this early version “might misread a thread or miscalibrate what’s urgent.” CNBC frames Duet as a challenger to OpenAI’s Dots and Meta’s Muse.

**Why it matters:** Assistants are shifting from answering questions to watching your inbox and doing the work. Duet’s approve-before-acting design is a useful bar for judging any always-on agent, because these tools can touch your email, payroll and payments. Compare it with [Claude](/tools/claude/), [OpenAI Dots](/tools/openai-dots/) and [Meta AI](/tools/meta-ai/).

**Sources:** [Anthropic: Introducing Claude Duet](https://claude.com/resources/articles/claude-duet) · [CNBC](https://www.cnbc.com/2026/10/21/anthropic-preview-of-claude-duet-personal-ai-agent-take-on-muse-dots.html) · [TechCrunch](https://techcrunch.com/2026/10/22/claude-duet-app-is-anthropics-bet-on-agents/)

---

## How much did DeepSeek just raise?

**Short answer:** About **$15 billion**. Reuters, citing four people with knowledge of the matter, reports that DeepSeek raised about **100 billion yuan ($14.98 billion)** in its latest round, after Bloomberg first reported the figure. That’s **double** its original 50 billion yuan target. Existing shareholders **CATL** and **Tencent** were among the biggest investors, joined by GigaDevice, Meituan, Geely, Midea, NetEase, Boyu Capital, CPE, Legend Capital and IDG Capital, more than 15 investors in all.

Sources have told Reuters that DeepSeek is valued at **500 billion yuan** before the new money. The round is expected to close in the coming days, though the terms and investor list could still change, and DeepSeek couldn’t be reached for comment. Reuters notes that DeepSeek raised **$7.4 billion** in its first outside round in June and has hired CITIC Securities for a potential IPO.

**Why it matters:** DeepSeek’s low-cost open models have pushed AI prices down across the industry. A war chest this size points to more, and stronger, open-weight releases from China, and continued price pressure on paid AI tools. See our [DeepSeek](/tools/deepseek/) review and compare prices on the [Models](/models/) page.

**Sources:** [Reuters (via StreetInsider)](https://www.streetinsider.com/Reuters/DeepSeek+wrapping+up+%2415+billion+fundraising+to+fuel+AI+race%2C+sources+say/27217623.html)

---

## Which AI agent standards just went open?

**Short answer:** Four of them. The Linux Foundation’s **Agentic AI Foundation (AAIF)** announced four new projects at AGNTCon + MCPCon in San Jose: **Agent Skills** from **Anthropic**, **Open Responses** from **OpenAI**, **OpenEnv** from **Hugging Face** and **OpenSandbox** from **Alibaba**. AAIF now hosts **10 projects**, up from three when it launched in December 2025, alongside MCP, A2A, AGENTS.md and goose.

- **Agent Skills:** an open format for packaging instructions, scripts and resources that agents load on demand.
- **Open Responses:** an open spec based on OpenAI’s Responses API, so you can write a request once and run it across model providers. The New Stack lists AWS Bedrock, Databricks, LM Studio, Ollama, OpenRouter, Vercel and vLLM among the platforms that already support it.
- **OpenEnv:** a framework and hub for interoperable reinforcement learning environments.
- **OpenSandbox:** a sandbox platform for coding agents, GUI agents and evaluation.

**Why it matters:** The skills and agent code you build today are less likely to be locked to one vendor, so switching between Claude, GPT and open models should take less rework. If you build with [Claude Code](/tools/claude-code/) or [OpenAI Codex](/tools/openai-codex/), these are the formats to watch.

**Sources:** [Linux Foundation](https://www.linuxfoundation.org/press/agentic-ai-foundation-announces-four-new-projects-agent-skills-open-responses-openenv-and-opensandbox) · [The New Stack](https://thenewstack.io/openai-donates-open-responses/)

---

## What is Google’s Agent Compute Engine?

**Short answer:** It’s a new Google Cloud service that gives **every AI agent its own secure computer**. Google says it **already powers Gemini** as an agent for work tasks, and a customer **preview is coming in the next few months**. Each agent gets a fast-booting **microVM** that can pause while the agent waits and resume from a snapshot, with hardware isolation and its own persistent disk.

Google also open-sourced **Agent Substrate**, a Kubernetes runtime with the same design. Google says it delivers up to **10x higher compute density** than traditional compute, and in a **200,000-agent** benchmark it sustained **500 activations per second** with suspend and resume under **500 ms**. Google is also extending its agent governance tools (gateway, registry, identity and observability) across clouds and on-prem, and to local coding agents such as Claude Code and Antigravity CLI.

**Why it matters:** Agents that run code need a sandbox they can’t break out of. Google is turning that into a cloud product, which makes it easier for companies to let agents do real work safely. Explore [Gemini](/tools/gemini/).

**Sources:** [Google Cloud blog](https://cloud.google.com/blog/topics/ai-infrastructure/introducing-agent-compute-engine-and-expanded-agent-governance)

---

## Can you really chat with DNA now?

**Short answer:** Researchers can. Hugging Face released **Carbon-X**, a **14.8-billion-parameter** open model trained on both DNA and text. You paste a DNA sequence into a chat and ask questions in plain English, for example whether a mutation is likely **benign or pathogenic**. It was built with Zhongguancun Academy and the Telethon Institute of Genetics and Medicine / University of Naples Federico II, and it’s released under **Apache 2.0**.

Hugging Face reports a **66.7%** average across five DNA benchmarks, **27 points** above the Qwen3-14B model it started from and close to **GPT-6.1 Sol (67.5%)** at about **1/1,800** of the inference cost per problem. It estimates that analyzing ClinVar’s **2.4 million** variants of uncertain significance would cost about **$300** with Carbon-X, versus **$32,000 to $4 million** with the frontier models it tested. The weights fit on a single 80 GB GPU, so sensitive data can stay on your own infrastructure. Wired reports it wasn’t trained on viruses, to limit dangerous uses, and it reads chunks of roughly 50,000 base pairs, not whole genomes. It hasn’t been validated in the lab or clinic and shouldn’t be used for medical decisions.

**Why it matters:** Labs can analyze sensitive genetic data without sending it to a cloud AI, at a fraction of frontier-model cost. It’s a research tool, not a diagnosis tool. See how the frontier models it’s compared against stack up on our [Models](/models/) page.

**Sources:** [Hugging Face model card](https://huggingface.co/HuggingFaceBio/Carbon-X) · [Wired](https://www.wired.com/story/hugging-face-new-ai-biology-model-chat-with-dna/)

---

## What is Kevin Weil’s Warp Sciences building?

**Short answer:** AI-and-robotics chemistry labs. **Warp Sciences** came out of stealth with **$215 million** in funding led by **Lightspeed**, and TechCrunch reports an **$865 million** valuation, according to Weil. CEO **Kevin Weil** was most recently OpenAI’s Chief Product Officer and VP of Science. His co-founders include **DJ Patil**, the first US Chief Data Scientist, and **Mano Paluri**, a former VP at Meta Superintelligence Labs.

Warp is building a **US-based chemistry contract research organization** that combines expert chemists, AI and robots to make and test molecules for biotech and pharma customers, starting with lead-optimization analog synthesis. It has no drug pipeline of its own, and data from its experiments will train its AI. “AI has dramatically accelerated software engineering and mathematics, but it has yet to make the same impact in the physical sciences,” Weil said.

**Why it matters:** AI for science is moving from chatbots to labs that make and test real molecules. That data loop is how AI could speed up the discovery of new medicines.

**Sources:** [Business Wire](https://www.businesswire.com/news/home/20261022200104/en/Warp-Sciences-Emerges-From-Stealth-With-%24215-Million-to-Build-U.S.-Chemistry-Services-for-Drug-Research) · [TechCrunch](https://techcrunch.com/2026/10/22/former-openai-science-lead-launches-warp-science-to-automate-wet-labs-with-robots/)

---

## Did AI just build a laptop coding model?

**Short answer:** Largely, according to its makers. **Recursive** released **Flint**, a mixture-of-experts coding model with **40 billion** total parameters that uses only **2.5 billion** per token. A small team of people and agents built it from scratch in **under four months**, and Recursive says its **Eureka Machine** automated research system helped with nearly every part, from data and training recipes to quantization and custom inference kernels.

Recursive says Flint leads MoE models under 50 billion parameters on agentic coding benchmarks such as **SWE-Bench Verified** and **Terminal-Bench 2.1**, and rivals dense 25–40B models while running more than **5x faster**. By the company’s figures it generates more than **125 tokens per second** on an M4 Pro MacBook Pro and more than **150** on a 64GB NVIDIA RTX Spark. The weights are **free on Hugging Face under Apache 2.0** and work with llama.cpp, Ollama, LM Studio and vLLM, so your code stays on your machine with no API fees. Recursive cautions that Flint may need more guidance than the big closed coding models. TechCrunch notes the startup, led by Richard Socher, emerged in May with **$650 million** at a **$4.65 billion** valuation.

**Why it matters:** A capable coding assistant now runs free and offline on a laptop, and it’s an early public test of AI helping to build the next AI. Compare it with hosted options like [Cursor](/tools/cursor/) and [GitHub Copilot](/tools/github-copilot/).

**Sources:** [Recursive: Introducing Flint](https://recursive.com/updates/introducing-recursive-flint) · [TechCrunch](https://techcrunch.com/2026/10/21/recursive-launches-flint-a-laptop-coding-model-it-says-was-largely-built-by-ai/) · [Hugging Face](https://huggingface.co/RecursiveSI/flint)

---

## What should you watch next?

- **Claude Duet access:** watch for the waitlist to open beyond US Pro and Max, and for the extra safety details Anthropic says it will share “in the coming days.”
- **DeepSeek’s next model and IPO:** the round is expected to close in days; Reuters reports DeepSeek has been preparing a potential listing.
- **Agent infrastructure:** Google’s Agent Compute Engine preview and wider support for Open Responses and Agent Skills will show how quickly agents become portable across vendors.

*AI Tools Optimizer is for education only. Figures come from company announcements and press reports linked above; verify primary sources before making decisions.*
