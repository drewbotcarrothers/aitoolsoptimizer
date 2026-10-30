---
title: "AI News Roundup – October 29, 2026"
description: "Today’s AI news: Google’s Gemini 4 Carbon goes to cyber defenders first; the Gemini app hits 1 billion users as cloud AI booms; Mistral Large 4 goes open weight; OpenAI rewrites its Model Spec; ServiceNow comes to ChatGPT; Claude Enterprise shows what AI spend buys; and agents now start 40% of GitHub pull requests."
pubDate: 2026-10-29T15:45:00-04:00
tags: ["ai-news"]
relatedTools: ["gemini", "chatgpt", "claude", "github-copilot", "mistral-vibe", "openai-codex", "microsoft-copilot"]
sample: false
draft: false
---

## TL;DR

- **Google** announced **Gemini 4 Carbon**, its strongest model. It ranks **#1** on the Artificial Analysis Intelligence Index, but only a **subset of cyber defenders** get it first.
- **Alphabet** says the **Gemini app** hit **1 billion users** and **Google Cloud** revenue rose **103%**. **Microsoft’s Azure** brought in **$33.2 billion**, up **48%**.
- **Mistral** released the **open weights** of **Mistral Large 4**, a **1-trillion-parameter** model, at **$0.70 / $2.10** per million tokens on its API.
- **OpenAI** rewrote its **Model Spec** around **five values** and retired most of its detailed style rules.
- **OpenAI** and **ServiceNow** expanded their partnership. A **ServiceNow plugin** is in ChatGPT today.
- **Anthropic** launched **smart reports**, **in-app surveys** and **pooled budgets** so Claude Enterprise customers can see what their AI spend buys.
- **GitHub** launched **Copilot Fusion**, and its Octoverse report says agents now start **more than 40%** of pull requests.

**Today’s take:** The newest frontier AI is being rationed to defenders and big customers first, while open and auto-routed models make “good enough” AI cheaper for everyone else.

<div class="video-embed" style="position:relative;width:100%;max-width:960px;aspect-ratio:16/9;margin:1.5rem 0;border-radius:12px;overflow:hidden;background:#000;">
  <iframe src="https://www.youtube-nocookie.com/embed/RPdCDyy8_uY" title="Google's Best AI Model Isn't for You (Yet)" style="position:absolute;inset:0;width:100%;height:100%;border:0;" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

---

## What is Gemini 4 Carbon, and who can use it?

**Short answer:** Google’s new top model, built for **cybersecurity** and **long-running tasks**. Right now only a **subset of cyber defenders** can use it. Google says it will add more trusted partners through its **Fairwind Program**, then open it to developers, businesses and consumers “as soon as possible.” Google is also taking part in the U.S. government’s voluntary pre-release testing.

| Gemini 4 Carbon | Google’s figure |
|---|---|
| Artificial Analysis Intelligence Index (v5.0) | **#1**, score **59** |
| SEC-bench Pro (finding vulnerabilities) | **88.2%** |
| ExploitGym (exploitation) | **54.8%** |
| CWE-bench (patching) | **71.0%** |
| WebDev Arena | **#4** (1768), up 89 Elo |
| Introductory price | **$2** input / **$10** output per million tokens (cached input 95% off) |

Google says its teams have seen Carbon work for **days** on hard engineering tasks, and that it cut unsupported claims by about **2x** versus Argon. Carbon arrives just **two weeks** after **Gemini 4 Argon**. Benchmark numbers are Google’s own.

**Why it matters:** The best model now goes to defenders before the public. If you use Gemini today, you’re on Argon, but Carbon’s price is already set for when it opens. Compare costs in [Gemini pricing explained](/blog/gemini-pricing-explained-2026/), see our [Gemini guide](/tools/gemini/), or browse [AI tools for security engineers](/blog/best-ai-tools-for-security-engineers-2026/).

**Sources:** [Google](https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-4-carbon/) · [9to5Google](https://9to5google.com/2026/10/28/gemini-4-carbon-announcement/) · [The Next Web](https://thenextweb.com/news/gemini-4-carbon-google-cybersecurity-model)

---

## How big is AI demand right now?

**Short answer:** Bigger than the cloud companies can supply. Alphabet and Microsoft both reported on Wednesday.

| Metric (latest quarter) | Figure | Source |
|---|---|---|
| Gemini app users | **1 billion** | Alphabet |
| Google Cloud revenue | **$30.7B**, up **103%** | Alphabet |
| Google model API usage | Nearly **32 billion tokens per minute**, 4x a year ago | Alphabet |
| Google Cloud backlog | About **$560B** | CNBC |
| Azure revenue | **$33.2B**, up **48%** | Microsoft via GeekWire |

Sundar Pichai called the Gemini app “the fastest-growing product in Google’s history.” Microsoft CFO Amy Hood said “customer demand continues to exceed available supply,” and Microsoft disclosed Azure revenue in dollars for the first time. CNBC notes Google Search growth slowed to 12%.

**Why it matters:** Demand for AI still outruns supply. That’s a big reason new models launch in stages, and why rate limits and prices stay sticky. Compare the big assistants in [ChatGPT vs Gemini vs Claude](/blog/chatgpt-vs-gemini-vs-claude-2026/), or see [Microsoft Copilot](/tools/microsoft-copilot/).

**Sources:** [Google (CEO remarks)](https://blog.google/company-news/inside-google/message-ceo/alphabet-earnings-q3-2026/) · [Alphabet earnings release (SEC)](https://www.sec.gov/Archives/edgar/data/1652044/000165204426000080/googexhibit991q32026.htm) · [CNBC](https://www.cnbc.com/2026/10/29/alphabet-google-search-ai-earnings.html) · [GeekWire](https://www.geekwire.com/2026/microsoft-azure-revenue-surges-48-to-33-2b-beating-expectations-as-cloud-and-ai-demand-grows/)

---

## Can you download Mistral Large 4 now?

**Short answer:** Yes. Mistral released the weights of its improved **Mistral Large 4** (“Le Chonk”) on **Hugging Face**. It’s a **1-trillion-parameter**, natively multimodal model trained from scratch in Europe.

| Mistral Large 4 vs Gemini 4 Carbon | Mistral Large 4 | Gemini 4 Carbon |
|---|---|---|
| Weights | **Open** (download and self-host) | Closed |
| Input price, per million tokens | **$0.70** | $2 (introductory) |
| Output price, per million tokens | **$2.10** | $10 (introductory) |
| Who can use it today | Anyone | A subset of cyber defenders |

Mistral says it’s the **best open-weight model for coding**: **48%** on the Artificial Analysis Coding Agent Index, tied with GLM-5.3 while using **47% fewer tokens**, and **41%** on Terminal-Bench 4.0. It has **Low, Medium and High** reasoning modes. The license is free to use, modify and sell, except that **Model-as-a-Service** businesses need a separate commercial license. It’s also on OpenRouter, Microsoft Foundry and NVIDIA NIM. Benchmark claims are Mistral’s.

**Why it matters:** A frontier-class model you can run on your own servers, at a fraction of closed-model prices. That’s useful if your data can’t leave your region. Read [what open-source AI means](/blog/what-is-open-source-ai-2026/), compare models on our [AI models page](/models/), or try Mistral’s coding agent, [Mistral Vibe](/tools/mistral-vibe/).

**Sources:** [Mistral](https://mistral.ai/news/mistral-large-4-oss/) · [Hugging Face model card](https://huggingface.co/mistralai/Mistral-Large-4-1T-A52B) · [Hugging Face blog](https://huggingface.co/blog/mistral-large4)

---

## What changed in OpenAI’s Model Spec?

**Short answer:** OpenAI reorganized the rulebook its models are trained toward around **five values**: **faithfulness to human intent**, **minimizing harm**, **honesty and transparency**, **human agency** and **care**.

- **New:** a “consider context carefully” section on how conversations and **memories** should shape what the model thinks you want, plus defaults on supporting **human agency** and following **social norms**.
- **Retired:** most detailed **style** rules. OpenAI says style should adapt to what people prefer. Defaults like approaching questions **objectively** stay.
- **Renamed:** the Spec now calls the model **“GPT”** instead of “the assistant.”

OpenAI says its models **don’t yet fully reflect** the Spec.

**Why it matters:** This is the rulebook behind [ChatGPT](/tools/chatgpt/). Expect it to follow your stated preferences more and lean more on memory and context. Background: [what AI safety alignment is](/blog/what-is-ai-safety-alignment-2026/).

**Sources:** [OpenAI](https://openai.com/index/updated-model-spec) · [Model Spec (Oct 29, 2026)](https://model-spec.openai.com/2026-10-29.html)

---

## What can ChatGPT do with ServiceNow now?

**Short answer:** A **ServiceNow plugin** is available in the OpenAI marketplace today. IT teams can find similar incidents, assess the risk of a change and update a ServiceNow record **without leaving ChatGPT**. ServiceNow’s Action Fabric applies each company’s existing permissions.

| Coming next | Timing (OpenAI) |
|---|---|
| Enhanced plugin capabilities | By end of 2026 |
| Voice in ServiceNow’s Super Intelligence Control Tower | Q1 2027 |
| Joint security solution | Early access January 2027, GA Q2 2027 |
| Codex in ServiceNow AI Workflow Factory | 2027 |

ServiceNow also plans to give **all employees** ChatGPT Work and Codex.

**Why it matters:** Work systems are plugging straight into ChatGPT through MCP. If your company runs on ServiceNow, ChatGPT can now act on tickets with the access you already have. Learn [what the Model Context Protocol is](/blog/what-is-model-context-protocol-2026/), or see [ChatGPT Enterprise pricing](/blog/chatgpt-enterprise-pricing-explained-2026/) and [OpenAI Codex](/tools/openai-codex/).

**Sources:** [OpenAI](https://openai.com/index/openai-servicenow-partnership-expansion/) · [ServiceNow](https://newsroom.servicenow.com/press-releases/details/2026/ServiceNow-and-OpenAI-accelerate-enterprise-AI-from-models-and-operations-to-cybersecurity-and-agentic-development/default.aspx)

---

## How can companies see what their Claude spend buys?

**Short answer:** Three new **Claude Enterprise** features, generally available now:

- **Smart reports:** Claude analyzes a sample of a team’s transcripts, groups the work into workstreams, and shows the **spend**, deliverables and friction points for each, plus recommendations like workflows to turn into skills. Anthropic says reports **aren’t for judging individual performance** or employment decisions.
- **In-app surveys:** short questions inside Claude, such as what would break if the team lost access tomorrow.
- **Pooled group budgets:** one shared monthly budget per team, with individual limits still in place and alerts at **50%, 75%, 95% and 100%**.

Availability varies for organizations with HIPAA setups or customer-managed encryption keys.

**Why it matters:** The question at work is moving from “can we use AI?” to “is it worth it?” Expect your company to start tracking AI spend per team. See [Claude Enterprise pricing](/blog/claude-enterprise-pricing-explained-2026/), our [Claude guide](/tools/claude/), and [AI budget caps](/blog/what-is-ai-budget-caps-2026/).

**Sources:** [Anthropic](https://claude.com/resources/articles/smart-reports-surveys-pooled-budgets) · [TechCrunch](https://techcrunch.com/2026/10/28/anthropic-just-launched-tools-to-show-companies-what-their-ai-spending-is-buying/)

---

## Do AI agents really start 40% of GitHub pull requests?

**Short answer:** Yes, by GitHub’s count. Its annual **Octoverse** report says that by **September 2026**, **more than 40%** of pull requests started with an agent’s first draft, up from **17% in March**. That was **110 million** in September alone. GitHub says its count is a floor, because it can’t detect every agent.

| Octoverse 2026 | Figure |
|---|---|
| Pull requests started by an agent (Sept) | **40%+** (17% in March) |
| Agent PRs merged within two weeks (Sept) | **90%** vs ~86% for others |
| Copilot users using more than one model (Sept) | **61%** |
| Code pushes, year to Sept 30 | **17.9 billion** |

GitHub also made **Copilot Fusion** generally available. Instead of picking a model, you pick an effort level (**Standard, High or Max**) and Copilot routes each task to one or more models. GitHub says Fusion Max scored **60** on the Artificial Analysis Coding Agent Index, within two points of Claude Code with Opus 5.5 Max, at about **half the cost per task**.

**Why it matters:** Choosing a model per task is becoming automatic, and agents now write the first draft of a big share of code. Reviewing AI work matters more than typing speed. See [GitHub Copilot](/tools/github-copilot/), [Copilot pricing](/blog/github-copilot-pricing-explained-2026/), [what an AI model router is](/blog/what-is-ai-model-router-2026/), and [Cursor vs GitHub Copilot](/blog/cursor-vs-github-copilot-2026/).

**Sources:** [GitHub Changelog](https://github.blog/changelog/2026-10-28-route-and-orchestrate-models-with-github-copilot-fusion/) · [GitHub Octoverse](https://github.blog/news-insights/octoverse/octoverse-commits-pushes-reach-new-highs-in-2026-as-developers-build-with-agents/) · [The Next Web](https://thenextweb.com/news/github-universe-copilot-fusion-octoverse-agents)

---

## What should you watch next?

- **Carbon access:** When Google opens Gemini 4 Carbon to developers and consumers, and whether the $2 / $10 introductory price holds.
- **Open vs closed:** Independent benchmarks of Mistral Large 4 against closed flagships.
- **AI at work:** Whether more companies measure AI spend per team, and how fast agent-written code keeps growing. Amazon reports earnings today, including AWS.

*AI Tools Optimizer is for education only. Figures come from company announcements and the press reports linked above; benchmark claims are company-reported. Verify primary sources before making decisions. This is not investment or legal advice.*
