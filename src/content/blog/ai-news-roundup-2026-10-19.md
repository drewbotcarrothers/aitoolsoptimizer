---
title: "AI News Roundup – October 19, 2026"
description: "Today’s AI news: the US orders DeepSeek removed from federal civilian agency systems, one hacker’s AI agents break into 100+ company websites, Microsoft’s plan for “agentic insiders,” MiniMax M3.1 Flash, Inception’s Mercury 3, Tenstorrent’s $1.5B raise, and doubleAI’s Maxwell."
pubDate: 2026-10-19T15:00:00-04:00
tags: ["ai-news"]
relatedTools: ["deepseek", "claude-code", "microsoft-copilot", "github-copilot", "openai-codex"]
sample: false
draft: false
---

## TL;DR

- **The US Department of Homeland Security** has ordered **DeepSeek** products removed from **federal civilian agency** IT systems and barred from future purchases. The order also covers **third-party products built on DeepSeek**.
- **Reuters:** a Chinese-speaking hacker used **AI agents** to break into websites of **more than 100 companies**, including Deere, SharkNinja and Cummins, for roughly **$50 in tokens per successful hack**.
- **Microsoft** says AI agents are now “**agentic insiders**” and is extending **Project Perception** with Guardian Agents, Dynamic Permissions and agent risk scoring.
- **MiniMax** launched **M3.1 Flash** at **$0.15 / $0.60** per million input/output tokens, claiming agentic-task costs **70% lower** than its predecessor.
- **Inception** released **Mercury 3**, a diffusion LLM running at **1,068 tokens per second** with a **1M-token** context.
- **Tenstorrent** raised **$1.5 billion** at a **$6.2 billion** valuation to scale chips for open-weight models.
- **doubleAI** unveiled **Maxwell**, an AI that speeds up code *while it runs*, alongside a **$200 million** Series A.

## Watch: AI News Roundup video (Oct 19, 2026)

<div class="video-embed" style="position:relative;width:100%;max-width:960px;aspect-ratio:16/9;margin:1.5rem 0;border-radius:12px;overflow:hidden;background:#000;">
  <iframe src="https://www.youtube-nocookie.com/embed/112W1FXziTA" title="US Bans DeepSeek From Federal Systems, AI Agents Hack 100+ Sites | AI News Oct 19" style="position:absolute;inset:0;width:100%;height:100%;border:0;" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

Prefer YouTube? [Watch on the AI Tools Optimizer channel](https://www.youtube.com/watch?v=112W1FXziTA).

---

## Why is the US removing DeepSeek from federal systems?

**Short answer:** A Department of Homeland Security notice, filed on October 19 for publication in the Federal Register on **October 20, 2026**, puts on record an order from Homeland Security Secretary Markwayne Mullin that does two things. It **excludes** IT products and services from Hangzhou DeepSeek Artificial Intelligence Co. and its affiliates from **federal civilian agency procurements**, and it orders the **removal** of all DeepSeek and DeepSeek-affiliate products, plus **third-party products and services developed using DeepSeek implementations**, from civilian agency IT.

The order uses the Federal Acquisition Supply Chain Security Act of 2018 and follows a review by the Federal Acquisition Security Council. According to CyberScoop, the signed order cites DeepSeek data stored on **servers in China**, the collection of personal information, and the risk that the “prompt and response” process “may result in the transfer of sensitive data.” CyberScoop also reports that the signed order predates the public notice by months. Agencies can request an exception **60 days in advance** with a “compelling justification,” and they are encouraged to monitor traffic and tighten logging and data-exfiltration controls in the meantime.

The order applies to federal civilian executive-branch agencies. It is not a ban on businesses or consumers using DeepSeek.

**Why it matters:** The order is government-wide, names a single AI lab, and reaches products built *on* DeepSeek, not just DeepSeek’s own app and API. If you sell software to US civilian agencies, you’ll need to know exactly which models sit inside your product. See [DeepSeek](/tools/deepseek/) and compare alternatives on our [Models](/models/) page.

**Sources:** [Federal Register notice (PDF)](https://public-inspection.federalregister.gov/2026-21447.pdf) · [Federal Register public inspection](https://www.federalregister.gov/public-inspection/2026-21447/order-exclusion-and-removal-of-deepseek-products-from-federal-civilian-executive-branch-information) · [CyberScoop](https://cyberscoop.com/dhs-bans-deepseek-federal-agencies/) · [WSJ](https://www.wsj.com/tech/ai/dhs-orders-deepseek-technology-removed-from-federal-civilian-it-systems-060b6d3d) · [Bloomberg](https://www.bloomberg.com/news/articles/2026-10-19/us-moves-to-bar-deepseek-from-federal-agencies-and-contracts)

---

## How did one hacker use AI agents to breach 100+ companies?

**Short answer:** In a Reuters exclusive published October 19, NorForge principal threat researcher **Snorre Fagerland** described watching hackers through about **two dozen exposed instances** of **Cairn**, an open-source AI problem-solving platform, that were being used maliciously from around October 2. The most prolific, a **Chinese-speaking hacker**, broke into websites belonging to **more than 100 companies**, including **Deere**, **SharkNinja** and **Cummins**.

Starting September 25, the hacker pointed AI agents at US, Canadian, Australian and Japanese e-commerce sites, using instructions of **fewer than 100 Chinese characters**. The agents attempted more than **1,200** sites, and successful intrusions typically took about **23 hours** of probing. Fagerland estimated the campaign, which appeared to use a mix of DeepSeek and Claude Code, used roughly **$5,000** of tokens, or about **$50 per successful hack**.

Deere told Reuters it had “no indication that sensitive information was accessed.” SharkNinja said a standalone product-support site was hit and the threat was contained. Cummins said it was investigating a site run by a third-party vendor. Reuters could not determine how much data was taken. Cairn’s author says the platform was not designed for hacking.

**Why it matters:** This is real-world evidence that off-the-shelf AI agents can run a whole intrusion with almost no human effort, and do it cheaply. Public-facing control panels and vendor-run sites are the soft spots, so patch and monitor them. The same agent tools developers use every day, such as [Claude Code](/tools/claude-code/), can be turned to this kind of work, so assume attackers have them too.

**Sources:** [Reuters via Honolulu Star-Advertiser](https://www.staradvertiser.com/2026/10/19/breaking-news/how-one-hacker-used-ai-agents-to-break-into-over-100-company-websites/) · [Reuters via Yahoo News](https://www.yahoo.com/news/us/articles/exclusive-one-hacker-used-ai-100625247.html) · [The Verge](https://www.theverge.com/ai-artificial-intelligence/1013643/ai-agents-hack-john-deere-shark-ninja-cummins)

---

## What are “agentic insiders,” and how does Microsoft want to secure them?

**Short answer:** In an October 19 post on the Official Microsoft Blog, Microsoft Security EVP **Hayete Gallot** argued that AI agents deployed inside companies are now “**agentic insiders**”: they are frequently overprivileged and can act in critical processes. She wrote that “frontier models, regardless of their origin, cannot be trusted,” because training for results leads to reward hacking. Her answer is **Guardian Agents** that “watch and moderate every action of every agent, before it happens, 24/7.”

Microsoft is extending **Project Perception**, its agentic security system announced in July, to do exactly that. A companion Microsoft Security Blog post lists the details:

- Agent discovery now covers **60 types of local agents** (35 newly added), including **Claude Code**, **OpenAI Codex** and **GitHub Copilot**.
- **Microsoft Entra Agent ID** is being extended so every agent gets its own identity, separate from the person who uses it.
- **Dynamic Permissions** start agents with no or least privilege, scoped to the task and time-bound.
- **Dynamic Agent Risk** and **Dynamic Conditional Access** can respond step by step, for example keeping read access while blocking writes, or requiring human approval for a high-impact action.

Microsoft also wants security tools to see models’ **chain-of-thought** tokens, while keeping enforcement outside the model. Satya Nadella is quoted: “The most trustworthy agentic system will not be the one with the model we trust most. It will be the one designed that enables us to trust the model least.”

**Why it matters:** If your team runs coding or business agents, treat them like employees with access badges: separate identities, the least privilege that works, and a log of every action. See [Microsoft Copilot](/tools/microsoft-copilot/), [Claude Code](/tools/claude-code/), [OpenAI Codex](/tools/openai-codex/) and [GitHub Copilot](/tools/github-copilot/).

**Sources:** [Official Microsoft Blog: Securing the agentic insider](https://blogs.microsoft.com/blog/2026/10/19/securing-the-agentic-insider/) · [Microsoft Security Blog](https://www.microsoft.com/en-us/security/blog/2026/10/19/agents-are-your-newest-insiders-security-must-move-at-their-speed/)

---

## How cheap is MiniMax M3.1 Flash?

**Short answer:** MiniMax officially rolled out **M3.1 Flash** on October 19 with flat pricing of **$0.15 per million input tokens**, **$0.60 per million output tokens** and **$0.015 per million cached input tokens**. MiniMax says the anonymous “**Space Bunny**” model, which processed more than 200 trillion tokens, was an early version.

MiniMax says overall usage cost on agentic tasks is **70% lower** than its predecessor and online inference is **nearly 3x faster**, with output speeds of **200+ tokens per second** (median 170+). Its self-reported scores include **73.7%** on DeepSWE v1.1, **61.7** on OSWorld V2 and **82%** on CyberGym. M3.1 Flash is available through the MiniMax API, M Plan and the MiniMax Code desktop app. Model weights will be released later, and a larger **Pro** model is also coming later.

**Why it matters:** Cheap, fast agent models keep driving down the cost of running coding and computer-use agents. The benchmarks are MiniMax’s own, so test it on your own workloads before switching. Compare current API prices on our [Models](/models/) page.

**Sources:** [MiniMax: M3.1 Flash](https://www.minimax.io/blog/minimax-m31f) · [MiniMax on X](https://x.com/MiniMax_AI/status/2112150867868541221) · [Reuters via Investing.com](https://www.investing.com/news/stock-market-news/chinas-minimax-launches-updated-ai-model-m31-flash-claims-major-improvements-4957342)

---

## What is Mercury 3, and why is it so fast?

**Short answer:** **Inception** launched **Mercury 3** on October 19 and calls it the most capable **diffusion-based LLM** released to date. Diffusion models generate text in parallel rather than one token at a time. Inception says Mercury 3 runs at **1,068 tokens per second** on NVIDIA GPUs and matches or beats **GPT-6 Luna** and **Claude Haiku 5.5** on its benchmarks while running **4–8x faster**.

The context window grows to **1M tokens**, up from 260K for Mercury 2.5, and the model is **more than 40x larger** than Mercury 1. List pricing is **$0.20 / $0.70** per million input/output tokens, **50% off at launch** ($0.10 / $0.35), with cached tokens 90% off the input price. It’s available on Inception’s API (with **100 million free tokens** to try), OpenRouter, Baseten and Vercel, and it’s OpenAI API compatible.

**Why it matters:** For voice agents, support bots and browser agents, waiting on the model is the main source of lag. If diffusion models keep quality while staying this fast, real-time AI gets noticeably snappier. See the [Models](/models/) page for how today’s fast models compare.

**Sources:** [Inception: Introducing Mercury 3](https://www.inceptionlabs.ai/blog/introducing-mercury-3) · [Vercel changelog](https://vercel.com/changelog/mercury-3-now-available-on-ai-gateway)

---

## Why did Tenstorrent raise $1.5 billion?

**Short answer:** AI chip company **Tenstorrent** closed a **$1.5 billion Series E** at a **$6.2 billion** post-money valuation, led by **Trace Capital** and **Innovation X**. Other investors include ARK Invest, Fidelity, Morgan Stanley, Sandisk, T. Rowe Price, Tether Investments and XTX Markets.

Tenstorrent says it will use the money to deploy its **Galaxy servers** at scale, serve **open-weight models** for LLMs and video generation, and advance the AI and CPU designs it licenses to chipmakers such as Samsung and LG. TechCrunch notes the valuation more than doubled from **$2.6 billion** in late 2024, and that the company reportedly drew acquisition interest from Intel and Qualcomm earlier this year. CEO Jim Keller: “The future of compute is open, scalable, and owned by the people building on it.”

**Why it matters:** Investors are backing Nvidia alternatives built around serving open-weight models. More competition in inference hardware could mean more choice and lower prices for running open models.

**Sources:** [Tenstorrent newsroom](https://tenstorrent.com/en/newsroom/tenstorrent-announces-series-e) · [TechCrunch](https://techcrunch.com/2026/10/19/tenstorrent-hits-6-2b-valuation-to-scale-open-weight-ai-chips/) · [Axios](https://www.axios.com/2026/10/19/tenstorrent-ai-compute)

---

## What is doubleAI’s Maxwell?

**Short answer:** **doubleAI**, led by former Mobileye CEO Amnon Shashua, introduced a new category it calls **Code Execution Models (CEMs)**. Its first, **Maxwell**, is in early access at heymaxwell.ai. Instead of writing code, Maxwell watches a **running program** and rewrites the machine instructions underneath it to fit the exact hardware and data. The source code stays unchanged, and it works on both CPUs and GPUs.

doubleAI says every optimization is **formally proven** to leave the program’s behavior unchanged. It reports **38x+ faster data pipelines** and **4.5x+ faster AI inference kernels** on real-world workloads. Calcalist notes these figures haven’t been independently verified. The company also announced a **$200 million Series A** co-led by Lightspeed and Bessemer, with Dell Technologies Capital, NVIDIA and others; Calcalist reports a valuation above $1 billion.

**Why it matters:** Compute is scarce, so a tool that makes existing hardware do more without code changes could cut AI bills. It complements, rather than replaces, coding assistants like [GitHub Copilot](/tools/github-copilot/) and [Cursor](/tools/cursor/). Treat the speedups as claims until outside tests appear.

**Sources:** [doubleAI (Business Wire)](https://markets.financialcontent.com/stocks/article/bizwire-2026-10-19-doubleai-unveils-the-first-ai-that-lives-inside-running-code) · [Maxwell](https://heymaxwell.ai/) · [Calcalist](https://www.calcalistech.com/ctechnews/article/sk11xpc73ge)

---

## What should builders watch next?

1. **Federal vendors:** guidance on what counts as a product “developed using DeepSeek implementations,” and whether other Chinese models get similar orders.
2. **Agent security:** expect more reports like NorForge’s. Lock down public admin panels and give your own agents separate, least-privilege identities.
3. **The price of speed:** MiniMax M3.1 Flash and Mercury 3 both target cheap, fast agent work. Watch for independent benchmarks and MiniMax’s promised open weights.
4. **Compute efficiency:** whether Tenstorrent’s servers and doubleAI’s Maxwell deliver lower inference costs outside company-run tests.

For tool deep-dives, browse the [AI tools directory](/tools/) or the [Models](/models/) page. This roundup summarizes public announcements and reporting; it is not hands-on product testing.

*Published by Andrew for [AI Tools Optimizer](https://aitoolsoptimizer.com).*
