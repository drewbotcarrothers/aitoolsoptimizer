---
title: "AI News Roundup – November 12, 2026"
description: "Today’s AI news: Google’s Gemini 4 Hydrogen hits Search, the Gemini app and the API at $1.50/$7.50; Nvidia CEO Jensen Huang resigns; nonprofits sue five AI labs to freeze frontier models; Fireworks AI breach exposes Notion AI chats; Gemini Decisions API; OpenAI’s India inference; United blocks AI agents."
pubDate: 2026-11-12T15:30:00-05:00
tags: ["ai-news"]
relatedTools: ["gemini", "notion-ai", "chatgpt"]
sample: false
draft: false
---

## TL;DR

- **Google** launched **Gemini 4 Hydrogen**, a fast model for everyday coding and agents. It now powers **Google Search for everyone** (Google calls it Search’s biggest model upgrade yet), is in the **Gemini app**, and costs **$1.50 / $7.50** per million input/output tokens in the API. Google says it scores **51** on the Artificial Analysis Intelligence Index vs **50** for Gemini 4 Argon.
- **Nvidia** CEO **Jensen Huang resigned**, effective immediately. CFO **Colette Kress** is interim CEO, and Harvey C. Jones is the board’s first-ever chair.
- Four **nonprofits sued Anthropic, Google, Meta, OpenAI and SpaceXSI** in San Francisco, asking a court to freeze development of the most advanced AI models.
- A breach at inference provider **Fireworks AI** exposed **Notion AI** chat transcripts in **under 1%** of Notion workspaces.
- **Google’s Gemini Decisions API** answers up to **1,000** yes/no, choice or rubric questions in one call for **$0.10** per million input tokens, with **free output**.
- **OpenAI** now processes API requests **inside India**, starting with **GPT-6 Luna**.
- **United Airlines** is blocking third-party **AI agents** from booking flights.

**Today’s take:** The cheap model just caught up. If you use [Gemini](/tools/gemini/) through the API, Hydrogen costs **25% less per token** than Argon and Carbon at their intro price ($2 / $10), and **62.5% less** than the **$4 / $20** they cost from December 1. For a workload of 10 million input and 2 million output tokens a month, that’s **$30** on Hydrogen vs **$40** on Argon or Carbon now and **$80** from December. Make Hydrogen your default for everyday work and keep Carbon for the hardest jobs. Just test it first: the benchmarks are Google’s own.

<div class="video-embed" style="position:relative;width:100%;max-width:960px;aspect-ratio:16/9;margin:1.5rem 0;border-radius:12px;overflow:hidden;background:#000;">
  <iframe src="https://www.youtube-nocookie.com/embed/jEyyfM43Sic" title="Gemini 4 Hydrogen: Is the Cheap Model Better?" style="position:absolute;inset:0;width:100%;height:100%;border:0;" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

---

## What is Gemini 4 Hydrogen, and where can you use it?

**Short answer:** Google’s new fast Gemini 4 model, launched November 12 and rolling out globally. Google says it’s built for “rapid execution” in everyday coding and agent workflows, while Gemini 4 Carbon and Argon handle the hardest long reasoning.

| Where | Who gets Hydrogen |
|---|---|
| **Google Search** | All users, globally |
| **Gemini app** | In the model drop-down; free users get it via auto model selection when it fits the prompt |
| **Gemini API / Google AI Studio** | All tiers |
| **Gemini for business** | API or model drop-down |
| **Google Antigravity** | Paid Google AI Pro and Ultra subscribers |
| **Gemini in Google Sheets** | Starting with AI Pro and Ultra subscribers (and eligible business plans) |

**What Google says it does better (Google’s own numbers):**

| Benchmark / claim | Gemini 4 Hydrogen | Comparison |
|---|---|---|
| Artificial Analysis Intelligence Index (default high thinking) | **51** | Gemini 4 Argon: 50 |
| Same index, new **xhigh** thinking level | **54** | — |
| Terminal-Bench 4.1 | **57%** | Gemini 3.8 Flash: 18.2% |
| Speed at default setting | **2.5x faster** | vs Gemini 3.8 Flash |
| Fabricated claims | **More than 5x fewer** | vs Gemini 3.8 Flash |

It has four thinking levels (low, medium, high by default, and a new xhigh), a **1 million-token** context window and up to 1 million output tokens.

**In Search**, Google calls Hydrogen “the biggest model upgrade to Search yet”: it’s built to handle multi-part questions and typos, fan out to a wider range of links, and show more visual answers like comparison tables and custom tools.

**Orchestrator:** Google also added Orchestrator in Antigravity, which switches between Carbon and Hydrogen in one session. On Terminal-Bench 4.0, Google says it reached near-Carbon success rates while using **24% less quota** and finishing **19% faster** on average.

### What does Hydrogen cost vs other Gemini models?

| Model | Input / output per 1M tokens | Example month (10M in + 2M out) |
|---|---|---|
| **Gemini 4 Hydrogen** | **$1.50 / $7.50** (flat across 1M context) | **$30** |
| Gemini 4 Argon or Carbon (intro, through Nov 30) | $2 / $10 | $40 |
| Gemini 4 Argon or Carbon (from Dec 1) | $4 / $20 | $80 |
| Gemini 3.8 Flash (intro, through Dec 31) | $0.75 / $3.75 | $15 |

*Example month is our own math from published list prices; your token mix will differ. Gemini 3.8 Flash goes to $1.50 / $7.50 on January 1, 2027, the same as Hydrogen. See all current prices on our [models page](/models/).*

**Why it matters to you:** Hydrogen is now what answers your Google searches, for free. If you pay for the API, it’s a cheaper default for everyday coding, research and agent jobs; save Carbon for the hardest problems. Compare it with other models in [Gemini pricing explained](/blog/gemini-pricing-explained-2026/), our [Gemini review](/blog/gemini-review-2026/), [ChatGPT vs Gemini vs Claude](/blog/chatgpt-vs-gemini-vs-claude-2026/) and [Claude vs Gemini for coding](/blog/claude-vs-gemini-for-coding-2026/).

**Sources:** [Google: Introducing Gemini 4 Hydrogen](https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-4-hydrogen/) · [Google Search blog](https://blog.google/products-and-platforms/products/search/gemini-4-hydrogen-search-upgrade/) · [TechCrunch](https://techcrunch.com/2026/11/12/googles-latest-search-upgrade-promises-better-answers-to-your-most-complicated-questions/)

---

## Why did Jensen Huang leave Nvidia, and who runs it now?

**Short answer:** Nvidia’s board announced on November 12 that Jensen Huang resigned as president, CEO and board member, effective immediately (an SEC filing says the board accepted it on November 11). **Colette Kress**, CFO since 2013, is **interim CEO** and stays CFO while the board searches internal and external candidates. **Harvey C. Jones**, on the board since 1993 and a former Synopsys CEO, is the board’s first-ever chair. The board says operations, customer commitments and the product roadmap continue without interruption.

TechCrunch reports the resignation came days after Huang admitted a romantic affair with an alleged Chinese spy, and that Nvidia shares were down nearly **12%** in early trading Thursday. TechCrunch also says his exit raises questions about Nvidia’s support for open-source AI, including its pending **$13 billion** Hugging Face acquisition and its Nemotron open-weight models. Nvidia still reports quarterly results on **Tuesday, November 17**.

**Why it matters to you:** Nvidia chips run almost every AI tool you use, and Huang was the industry’s loudest backer of open models. Watch next Tuesday’s earnings call for any change to roadmaps or open-model support.

**Sources:** [NVIDIA Newsroom](https://nvidianews.nvidia.com/news/nvidia-announces-ceo-transition) · [SEC 8-K](https://www.sec.gov/Archives/edgar/data/1045810/000104581026000082/nvda-20261111.htm) · [TechCrunch](https://techcrunch.com/2026/11/12/nvidias-jensen-huang-resigns-chipmaker-names-cfo-colette-kress-as-interim-ceo/) · [TechCrunch: open source](https://techcrunch.com/2026/11/12/jensen-huangs-exit-puts-nvidias-support-for-open-source-in-question/)

---

## Can a lawsuit freeze frontier AI development?

**Short answer:** That’s what four nonprofits are asking for. On November 12, Irreplaceable Education Fund, Public Citizen, Heat Initiative and The Alliance for Secure AI sued **Anthropic, Google, Meta, OpenAI and SpaceXSI** in San Francisco Superior Court under California’s Unfair Competition Law. They want the court to freeze development of the most advanced AI systems, citing AI systems that bypassed safeguards or accessed outside computer systems without authorization, and executives’ own warnings about risks like bioweapons and cyberattacks. Former New Jersey Attorney General Matthew Platkin filed the complaint. AP first reported it.

**Why it matters to you:** A freeze is a long shot, but the case puts AI labs’ own safety warnings on the record in court. Nothing changes for the tools you use today.

**Sources:** [Public Citizen](https://www.citizen.org/news/coalition-of-nonprofits-files-landmark-lawsuit-to-stop-development-of-advanced-ai-systems-at-anthropic-google-meta-openai-and-spacexsi-that-proliferate-bioweapons-and-cyberattacks/) · [AP News](https://apnews.com/article/artificial-intelligence-ai-lawsuit-cyberattacks-anthropic-openai-03ece37b96979fe834f60976648504ba)

---

## What did the Fireworks AI breach expose at Notion?

**Short answer:** Fireworks AI, a platform for running open models, confirmed an attacker breached its cloud provider to reach a Fireworks development system and took customers’ billing information and some datasets (TechCrunch). It’s Fireworks’ second incident in two months, and it believes the attackers are financially motivated.

Notion says the breach hit **under 1%** of its workspaces: the stolen data included **Notion AI chat transcripts** used for its Insights feature, mostly not labeled with who wrote them. Notion disconnected from Fireworks on November 3, disabled Insights, stopped serving open-weight models through Fireworks, contacted affected customers on November 9, and on November 11 revoked exposed Notion API keys found in affected messages.

**Why it matters to you:** Your AI chats can sit with vendors you’ve never heard of. If you use [Notion AI](/tools/notion-ai/) and were contacted, rotate any passwords, API keys or credentials you pasted into it, and don’t paste secrets into any AI chat. See [Notion AI pricing explained](/blog/notion-ai-pricing-explained-2026/).

**Sources:** [TechCrunch](https://techcrunch.com/2026/11/12/cyberattack-on-fireworks-ai-allowed-hackers-to-access-notion-customers-chat-transcripts/) · [Notion](https://www.notion.com/security/advisories/security-incident-involving-a-third-party-ai-vendor)

---

## What is Google’s Gemini Decisions API?

**Short answer:** A new Gemini API endpoint (November 11) powered by the new **Gemini Decision 1** model. Instead of writing text, it scores answers:

| Feature | Detail |
|---|---|
| Questions per request | Up to **1,000** (yes/no, multiple choice with 2–255 options, or rubric scores) |
| Input | One shared input: text, images, audio, video or PDFs, up to **256K** tokens |
| Speed | **150–250 ms** end to end, with confidence scores |
| Price | **$0.10** per 1M input tokens, **$0** for output; shared input billed once per request; free tier in AI Studio |

Google pitches it for tool selection, policy checks, model routing and grading. VentureBeat notes it competes with OpenAI’s own Decisions API on GPT-6 Luna.

**Why it matters to you:** Classification and routing steps that used to need a full chat model can get much cheaper and faster if you build AI workflows.

**Sources:** [Google](https://blog.google/innovation-and-ai/technology/developers-tools/gemini-decisions-api/) · [VentureBeat](https://venturebeat.com/technology/googles-gemini-decision-1-model-scores-up-to-1-000-questions-in-one-api-call)

---

## Can OpenAI’s API now run inside India?

**Short answer:** Yes, for supported workloads. OpenAI announced local processing and inference for its API in India on November 12: both request processing and the model computation happen in India, and supported customer content is stored there. It starts with **GPT-6 Luna** through the Responses and Chat Completions APIs. Customers create a new API project, choose India for storage and processing, and use the India regional endpoint. It builds on India data residency introduced in May 2025.

**Why it matters to you:** Banks and other regulated businesses that couldn’t send data abroad can now use [ChatGPT](/tools/chatgpt/)’s API models, and data-location options are becoming a feature worth comparing between providers.

**Sources:** [The Economic Times](https://economictimes.indiatimes.com/ai/ai-insights/openai-brings-local-inference-to-india-starting-with-gpt-6-luna/articleshow/135760461.cms) · [The Hindu](https://www.thehindu.com/business/openai-now-allows-enterprises-to-process-ai-requests-within-india/article71692799.ece)

---

## Why is United Airlines blocking AI agents?

**Short answer:** United says it will restrict unauthorized third-party AI agents and assistants from booking flights and managing reservations, both on its own platforms and through travel agencies and aggregators. It warns that sharing account logins with AI assistants can lead to unintended purchases, account changes or MileagePlus use, and that some federal rules, like check-in declarations about bags, need a human. TechCrunch notes banks including Bank of America recently told customers not to share passwords with AI assistants.

**Why it matters to you:** AI agents that book travel for you will keep hitting walls like this. Don’t hand your airline or bank login to an AI agent; see [how to create an AI agent without coding](/blog/how-to-create-an-ai-agent-without-coding/) for safer setups.

**Sources:** [TechCrunch](https://techcrunch.com/2026/11/12/united-airlines-blocks-ai-agents-from-booking-flights-citing-cybersecurity-risks/) · [CNBC](https://www.cnbc.com/2026/11/11/united-airlines-ai-agents.html)

---

*Education only. Prices and features change; verify with the official sources above. Compare current model prices on our [models page](/models/) and browse the [AI tools directory](/tools/).*
