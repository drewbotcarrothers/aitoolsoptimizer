---
title: "AI News Roundup – October 31, 2026"
description: "Today’s AI news: OpenAI cuts its funding target by $10B to about $20B at a $1.25T valuation; Claude Max 20x becomes Ultra with no 5-hour limit; the big AI labs back one robots.txt opt-out signal; Google’s TPU satellite answers from orbit; the UK probes Meta’s AI content terms; and more."
pubDate: 2026-10-31T15:30:00-04:00
tags: ["ai-news"]
relatedTools: ["chatgpt", "claude", "claude-code", "gemini", "meta-ai", "microsoft-copilot"]
sample: false
draft: false
---

## TL;DR

- **OpenAI** cut the target for its latest funding round by **$10 billion**, to about **$20 billion** at a **$1.25 trillion** valuation (down from $30 billion at $1.4 trillion), the Financial Times reports. The first close is expected to raise **less than $20 billion**.
- **Anthropic** renamed its Claude plans: **Max 5x is now Max ($100/month)** and **Max 20x is now Ultra ($200/month)**. Verified Ultra accounts no longer have the **5-hour limit**.
- **OpenAI, Google, Microsoft and Anthropic** will honor one shared **robots.txt signal** that lets websites opt out of AI training across all of them at once.
- **Google’s Project Suncatcher** satellite sent back the **first AI response from a data-center-class TPU in orbit**: a haiku from Gemma 4.
- The **UK CMA** opened an investigation into **Meta’s** terms that could let it use publishers’ website content for its **AI features** without a real choice.
- **OpenAI** will publish a **Community Safety Report** from early 2027 and is adding new **weapons limits for teens** in ChatGPT.
- **Claude Opus 4.8 fast mode** is deprecated and will be removed on **Nov 30**. Move to Claude Opus 5.5 to keep fast mode.

**Today’s take:** The AI money machine just met its first real limit. OpenAI is asking for less money at a lower price while Anthropic hands its heaviest users more room. That pressure can reach you through plan names, limits and prices, so check what your subscription actually includes this month.


<div class="video-embed" style="position:relative;width:100%;max-width:960px;aspect-ratio:16/9;margin:1.5rem 0;border-radius:12px;overflow:hidden;background:#000;">
  <iframe src="https://www.youtube-nocookie.com/embed/YOFjlPdV1hI" title="Why OpenAI Is Asking for $10B Less" style="position:absolute;inset:0;width:100%;height:100%;border:0;" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

---

## Why did OpenAI cut its funding target by $10 billion?

**Short answer:** Investors pushed back. The Financial Times, cited by Reuters and Bloomberg, reports that OpenAI now seeks about **$20 billion** at a **$1.25 trillion** valuation, after some investors reduced their allocations during a selloff in tech stocks driven by AI-spending worries.

| | Earlier target | New target (FT) |
|---|---|---|
| Amount | $30 billion | About $20 billion |
| Valuation | $1.4 trillion | $1.25 trillion |
| First close | — | Expected under $20 billion |

- OpenAI set a **Friday (Oct 30)** deadline for investors to commit.
- A UAE consortium that includes state-backed **MGX** is expected to be the largest investor. OpenAI would get an option to lease newly built computing capacity in the region.
- **Founders Fund, Coatue, Sequoia Capital and Andreessen Horowitz** are also expected to take part. Wealthy individuals will get a later retail offering at the $1.25 trillion valuation.
- The Nasdaq fell **2.9%** on Friday and is **7.8%** below its Oct 6 closing high (Reuters). OpenAI is pursuing a listing in **2027** and wanted to close the round before **Anthropic’s** listing, Reuters has reported. OpenAI did not immediately comment.

**Why it matters to you:** OpenAI’s scale is paid for by rounds like this one. A smaller, cheaper raise is the clearest sign yet that investors want returns, not just growth, and that kind of pressure can show up in prices and plan limits. Compare plans in our [ChatGPT pricing guide](/blog/chatgpt-pricing-explained-2026/) and [OpenAI API pricing](/blog/openai-api-pricing-explained-2026/).

**Sources:** [Reuters via Investing.com](https://www.investing.com/news/economy-news/openai-cuts-funding-target-by-10-billion-ft-reports-4988969) · [Bloomberg Law](https://news.bloomberglaw.com/private-equity/openai-funding-goal-cut-by-10-billion-as-ai-stocks-dip-ft-says) · [Financial Times](https://www.ft.com/content/bb564eb1-79d4-4694-aa24-1155202a9abc)

---

## What changed with Claude Max and the new Ultra plan?

**Short answer:** Only the names and one limit. Prices stay the same.

| Old name | New name | Price |
|---|---|---|
| Max 5x | **Max** | $100/month |
| Max 20x | **Ultra** | $200/month |

Anthropic is also removing the **5-hour limit for verified Ultra accounts**, starting Oct 30 with most existing subscribers. Newer accounts keep a temporary limit until they’re verified (to prevent fraud and abuse) and get an email when it’s lifted. Subscribers don’t need to do anything.

**Why it matters to you:** If long [Claude Code](/tools/claude-code/) sessions kept hitting the 5-hour wall, Ultra just got more useful at the same price. See [Claude pricing explained](/blog/claude-pricing-explained-2026/) and [Claude Pro vs Max](/blog/claude-pro-vs-max-2026/).

**Sources:** [Claude on X](https://x.com/claudeai/status/2116220869479428500) · [The Verge](https://www.theverge.com/ai-artificial-intelligence/1023576/max-ultra-claude)

---

## How can a website opt out of AI training with one rule?

**Short answer:** With a new shared “policy token” in `robots.txt`, built in the IETF’s AI Preferences working group. OpenAI, Google, Microsoft and Anthropic say their AI crawlers will respect it, so sites no longer need a separate rule for each company.

| Company | When it honors the signal |
|---|---|
| Anthropic | Already adopted |
| OpenAI | “Coming months” |
| Google | Next year |
| Microsoft | Next year (separate opt-outs for training and grounding) |
| Meta | Signaled support, no commitment |

OpenAI says the signal won’t replace its existing per-crawler `robots.txt` controls. Microsoft says sites still appear in Bing results either way.

**Why it matters to you:** If you run a site or blog, one line may soon cover the biggest AI crawlers. Watch for the final token syntax before you change your file.

**Sources:** [OpenAI](https://openai.com/index/helping-websites-express-ai-training-preferences) · [The Verge](https://www.theverge.com/tech/1023763/openai-google-microsoft-ai-scraping-standard-opt-out)

---

## What did Google’s AI satellite say from space?

**Short answer:** A haiku. Google’s Project Suncatcher prototype, launched Oct 1, finished commissioning and its onboard **Gemma 4** model answered a prompt during a ground-station pass over Svalbard, Norway: *“Blue marble below / Data streams in silent grace / Starlight feeds my core.”*

TechCrunch reports the satellite carries **four TPUs** and makes up to **1 kW** of power, so only one TPU runs at a time, for about **20 minutes**. Next come thermal and radiation tests, then **twin interconnected satellites in 2027**.

**Why it matters to you:** It’s a demo, not a data center yet, but it shows Google testing new places to get compute as demand for AI keeps rising. Explore [Gemini](/tools/gemini/) and compare models on our [models page](/models/).

**Sources:** [Google](https://blog.google/innovation-and-ai/models-and-research/google-research/project-suncatcher-satellite-response/) · [TechCrunch](https://techcrunch.com/2026/10/30/googles-first-data-center-satellite-is-online-and-writing-poetry/)

---

## Why is the UK investigating Meta’s terms?

**Short answer:** The Competition and Markets Authority is checking whether Meta is abusing a dominant position. Its new commercial terms could let Meta collect content from the websites of businesses and publishers that use its services and use it for its own products, **including AI features**, without giving them a choice.

Meta first planned the change for Oct 30, delayed it to Nov 20, then **paused the rollout on Oct 28** pending a consultation. The CMA stresses it hasn’t decided whether any law was broken.

**Why it matters to you:** Together with the robots.txt signal, it shows regulators and publishers pushing for real control over how content feeds AI. See [Meta AI](/tools/meta-ai/).

**Sources:** [UK CMA](https://www.gov.uk/government/news/cma-opens-investigation-into-metas-commercial-terms--2)

---

## What new safety limits is OpenAI adding to ChatGPT?

**Short answer:** Stricter limits on violence-related content for everyone and on weapons information for teens, plus a regular public report.

- OpenAI made **over 200 law enforcement referrals** in Q3 2026.
- Its first **Community Safety Report** arrives in **early 2027** (covering the second half of 2026), then every six months.
- ChatGPT will give less detail on past mass attacks, and can **end chats** that fixate on violence. Repeated ends may pause the account.
- For teens, ChatGPT will restrict practical information about weapons and security systems even with no sign of violent intent. Rollout starts in the next few weeks.

**Why it matters to you:** Parents and schools using [ChatGPT](/tools/chatgpt/) get tighter defaults. See also [what AI safety and alignment mean](/blog/what-is-ai-safety-alignment-2026/).

**Sources:** [OpenAI](https://openai.com/index/community-safety-report-and-new-protections-for-teens)

---

## Is fast mode ending for Claude Opus 4.8?

**Short answer:** Yes. Anthropic deprecated fast mode for **Claude Opus 4.8**; it will be removed on **Nov 30, 2026**. After that, `claude-opus-4-8` requests with `speed: "fast"` return an error. Migrate to **Claude Opus 5.5** to keep fast mode.

**Why it matters to you:** If your app uses Opus 4.8 fast mode, you have a month to switch. See [Claude](/tools/claude/) and our [models page](/models/).

**Sources:** [Claude Platform release notes](https://platform.claude.com/docs/en/release-notes/overview)

---

## Where can I follow daily AI news?

Every roundup lives on our [AI news page](/ai-news/), with sources for each story. Browse the [AI tools directory](/tools/) to compare the tools mentioned here.

*Figures are as reported by the companies and outlets linked above. This roundup is for education only; verify primary sources before making decisions.*
