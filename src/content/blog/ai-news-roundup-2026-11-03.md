---
title: "AI News Roundup – November 3, 2026"
description: "Today’s AI news: Anthropic’s amended IPO filing shows about $17B in Q3 revenue, a $23.29B loss and $895B in compute commitments; the NYT sues Brave over AI scraping; ChatGPT search hits 20% of Google’s volume; Google turns AI off by default for K-12; Claude message threads; OpenAI’s Astra designs hardware; and chatbots flub voting questions."
pubDate: 2026-11-03T15:15:00-05:00
tags: ["ai-news"]
relatedTools: ["claude", "claude-code", "chatgpt", "gemini", "perplexity", "openai-codex", "microsoft-copilot", "gemini-notebook"]
sample: false
draft: false
---

## TL;DR

- **Anthropic** filed an amended IPO prospectus: about **$17 billion** in Q3 revenue (up ~1,127% year over year), a **$23.29 billion** Q3 net loss, and **$895.4 billion** in compute and infrastructure commitments. It also warns it may “imminently” meet its own threshold for dramatically AI-accelerated progress.
- **The New York Times** and three other papers sued **Brave**, alleging it scrapes news and sells it to AI companies including Anthropic, Perplexity, Mistral, xAI and Cohere.
- **OpenAI** says ChatGPT now handles search volume equal to **20%** of Google’s.
- **Google** will switch its AI tools **off by default** for K-12 student accounts and is bringing Guided Learning to Classroom and Search.
- **Anthropic** launched **message threads** in beta, cutting median wait times about **35%** on huge Claude Code sessions.
- **OpenAI** showed **GPT-6 Astra** designing a device end to end and announced engineering work with **Mazda**.
- On Election Day, a study found AI chatbots gave outdated or wrong answers to **13.9%** of voting-logistics questions.

**Today’s take:** Claude is now a business doing about $17 billion a quarter, but its compute bill is on another scale: $895 billion committed, roughly 13 years of revenue at the Q3 pace. Expect plans, limits and prices to keep moving. Keep your workflows portable and have a second model you trust.

---

## What did Anthropic’s amended S-1 reveal?

**Short answer:** Its first look at Q3. Anthropic filed an amended Form S-1 with the SEC on Monday, Nov 2. CNBC reports roughly **$17 billion** in third-quarter revenue, up about **1,127%** from a year earlier, and a **$23.29 billion** net loss for the quarter.

| Metric (per CNBC) | Figure |
|---|---|
| Q3 2026 revenue | ~$17B (+~1,127% YoY) |
| Q3 net loss | $23.29B |
| Revenue, 9 months to Sept 30 | $33.24B (+~1,200%) |
| Net loss, 9 months | $104B (mostly fair-value changes on convertible notes and derivatives) |
| Compute and infrastructure commitments | ~$895.4B |
| Quarter-over-quarter revenue growth | Q1 132% · Q2 144% · Q3 ~47% |
| Years of revenue at Q3 pace to cover commitments* | ~13 |

*\*Our arithmetic: $895.4B ÷ ($17B × 4).*

- Growth is still huge, but it slowed sharply in Q3 on a quarter-over-quarter basis.
- Compute and infrastructure expenses rose **$14.4 billion** over nine months, up **329%**. Anthropic gets much of its capacity from Amazon, Google and SpaceX, plus neoclouds.
- The filing carries more than **90 pages** of risk factors. TechCrunch highlights new language: Anthropic’s “internal estimates and our expectations regarding future models, rather than our current models, indicate that we may imminently meet our Responsible Scaling Policy’s definition of ‘dramatically accelerated progress attributable to AI.’” It says no current model has been designated as crossing that line.
- Anthropic also says it doesn’t expect to safely let Claude fully design and build future frontier models “without meaningful human supervision or understanding,” and is considering policy updates to keep humans in control.

**Why it matters to you:** The company behind [Claude](/tools/claude/) and [Claude Code](/tools/claude-code/) is growing fast but spending far faster on compute. That pressure is one reason plan names, usage limits and features keep changing. Check what you actually pay in [Claude pricing explained](/blog/claude-pricing-explained-2026/) and the [Anthropic API pricing guide](/blog/anthropic-api-pricing-explained-2026/), and compare API prices on our [models page](/models/).

**Sources:** [SEC (S-1/A)](https://www.sec.gov/Archives/edgar/data/2130357/000162828026068676/anthropicpbc-sx1ax1.htm) · [CNBC](https://www.cnbc.com/2026/11/02/anthropic-ant-s-1-quarter-financials.html) · [TechCrunch](https://techcrunch.com/2026/11/02/anthropic-warns-that-its-very-close-to-rsi-capability-aka-self-building-ai/)

---

## Why is the New York Times suing Brave?

**Short answer:** It says Brave scrapes news, gets around paywalls and resells the content to AI companies. The suit was filed Nov 2 in federal court in Manhattan.

- The complaint calls Brave “the supplier, dealer, and distributor of stolen copyrighted content for its own users and many of the most prominent GenAI companies, including Anthropic, Perplexity, Mistral, xAI, and Cohere.”
- It targets Brave’s search index, its **Ask Brave** AI search, the **Brave Search API** and the browser’s paywall-blocker setting. Citing third-party estimates, it claims Brave made **more than $100 million** from publishers’ work.
- The Times wants a permanent injunction plus damages. The New York Daily News, Chicago Tribune and Orlando Sentinel filed a similar suit the same day.
- Perplexity, which isn’t a defendant here, called the suit “disinformation.” Brave hadn’t commented to Ars Technica.

**Why it matters to you:** Many AI search tools rely on third-party search indexes for fresh web results. If this case limits that supply, answers in tools like [Perplexity](/tools/perplexity/) could change. See our [Perplexity review](/blog/perplexity-review-2026/) and [Perplexity alternatives](/blog/perplexity-alternatives-2026/).

**Sources:** [Ars Technica](https://arstechnica.com/tech-policy/2026/11/nyt-demands-brave-shut-down-its-paywall-blocker-and-end-deals-with-ai-firms/) · [NYT complaint (PDF)](https://nytco-assets.nytimes.com/2026/11/new-york-times-brave-complaint-11-2-26.pdf)

---

## How big is ChatGPT search now?

**Short answer:** OpenAI says ChatGPT’s search volume now equals **20%** of Google’s. Adam Fry, OpenAI’s consumer product lead for ChatGPT, said so at a press event on Monday, The Verge reports.

- OpenAI counts a search as any query that triggers a web search, not tasks like defining a term. Fry didn’t say where the Google number came from.
- For scale, Microsoft’s Satya Nadella said in 2023 that Bing had about **3%** of search.
- Fry also said ads “have not negatively impacted the product or the usage of the product.” OpenAI recently started showing images of sponsored products in ChatGPT.

**Why it matters to you:** If you publish online, AI answers are becoming a real traffic source next to Google. If you research with AI, double-check the sources it cites. Compare [ChatGPT](/tools/chatgpt/) and Perplexity in [ChatGPT vs Perplexity for research](/blog/chatgpt-vs-perplexity-for-research-2026/).

**Sources:** [The Verge](https://www.theverge.com/ai-artificial-intelligence/1025482/openai-says-chatgpt-is-catching-up-to-google-in-search)

---

## Is Google turning off AI for students?

**Short answer:** By default, yes. Google says access to Gemini, Gemini Notebook, Gemini in Classroom and Google Search will be **entirely off for K-12 student accounts** until school administrators explicitly turn them on.

- TechCrunch reports the change applies next year, and that schools that restrict AI altogether lose Google Search too, because Google says “Search and AI are deeply integrated.”
- **Guided Learning**, which coaches students step by step instead of giving final answers, is globally available in Google Classroom starting today. A pilot in Search starts in select U.S. schools later this month.

**Why it matters to you:** Parents and teachers get a clearer on/off switch, but the switch also covers Search. If you use AI for studying, see [Gemini](/tools/gemini/), [ChatGPT vs Gemini for students](/blog/chatgpt-vs-gemini-for-students-2026/) and [the best AI tools for students](/blog/best-ai-tools-for-students-2026/).

**Sources:** [Google](https://blog.google/products-and-platforms/products/education/ai-learning-era-updates-2026/) · [TechCrunch](https://techcrunch.com/2026/11/03/google-will-let-schools-disable-its-ai-tools-but-not-without-sacrificing-search/)

---

## What are Claude message threads?

**Short answer:** A new beta in Claude’s Messages API. An agent sends the full conversation once, then only new messages plus the ID of the previous response.

- It’s **on by default for most Claude Code users**. For requests of 500K to 1M tokens, Anthropic says median time to first token fell about **35%**.
- It saves time, not money: Claude still reads the full conversation each turn, so token usage, rates and rate limits stay the same.
- Threads are held in memory, encrypted, not written to disk, and **expire 5 minutes** after the last request.
- Available on the Claude Platform, AWS, Microsoft Foundry and Google Cloud.

**Why it matters to you:** Long [Claude Code](/tools/claude-code/) sessions should start answering faster, with no change to your bill. Builders of agents get the same speedup by adding one parameter. See [Claude Code pricing explained](/blog/claude-code-pricing-explained-2026/).

**Sources:** [Anthropic](https://claude.com/resources/articles/message-threads) · [Claude release notes](https://platform.claude.com/docs/en/release-notes/overview) · [The New Stack](https://thenewstack.io/anthropic-claude-message-threads/)

---

## Can OpenAI’s models design physical products?

**Short answer:** Partly. OpenAI says **GPT-6 Astra** designed a device’s look, enclosure, circuit board, interface and firmware without direct human edits. Two team members built it with Astra in **under a week** as a side project, and a manufacturer made prototypes in under a month.

- The catch: Astra didn’t consistently account for the manufacturer’s production limits, tolerances or assembly details, so it still took several review rounds.
- Token usage across OpenAI’s hardware teams has grown **23-fold** since February.
- On BenchCAD 2.0, a newer internal model averaged **0.875** vs **0.594** for GPT-6 Astra at its highest reasoning setting.
- OpenAI is expanding work with Chip Ganassi Racing and starting a research collaboration with **Mazda** on aerodynamics and crash safety.

**Why it matters to you:** AI is moving from code into CAD and engineering drawings, but humans still catch the manufacturing details. See [OpenAI Codex](/tools/openai-codex/) and [Cursor vs Claude Code vs Codex](/blog/cursor-vs-claude-code-vs-codex-2026/).

**Sources:** [OpenAI](https://openai.com/index/accelerating-engineering-for-the-physical-world)

---

## Can you trust AI chatbots with voting questions?

**Short answer:** Not without checking. In an October sample from the nonprofit Innovating for the Public Good (IFPG), **13.9%** of chatbot answers to voting-logistics questions were outdated or inaccurate, and **5.9%** could mislead a voter, for example into missing a deadline.

| Chatbot | Wrong or outdated on voting questions (IFPG) |
|---|---|
| Claude | about 1 in 3 |
| Microsoft Copilot | about 1 in 4 |
| ChatGPT | about 1 in 10 |

- The study covered ChatGPT, Claude, Copilot, Gemini, Google AI Overviews, AI Mode and Perplexity. Claude and Copilot produced three quarters of the clear errors.
- In Spanish, **32%** of voting answers were a refusal, an error or no answer, versus 14% in English.
- Anthropic told NPR some Claude safeguards may not have been active because IFPG used an API. IFPG says its comparison found API and web answers comparable.

**Why it matters to you:** For anything with a deadline, like voting, taxes or legal filings, use the chatbot to find the official source, then read that source. See [how to fact-check AI writing](/blog/how-to-fact-check-ai-writing-2026/), [Claude](/tools/claude/) and [Microsoft Copilot](/tools/microsoft-copilot/).

**Sources:** [IFPG](https://innovatingforpublicgood.substack.com/p/new-analysis-finds-ai-platforms-providing) · [NPR](https://www.npr.org/2026/11/02/nx-s1-6025407/chatbots-midterms-voting-advice) · [Quartz](https://qz.com/ai-chatbots-voting-answers-inaccurate-midterms-study-110326)

---

## Where can I follow daily AI news?

Every roundup lives on our [AI news page](/ai-news/), with sources for each story. Browse the [AI tools directory](/tools/) to compare the tools mentioned here.

*Figures are as reported by the companies, filings and outlets linked above. This roundup is for education only and is not investment or legal advice; verify primary sources before making decisions.*
