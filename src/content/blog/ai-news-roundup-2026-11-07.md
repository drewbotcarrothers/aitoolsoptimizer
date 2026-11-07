---
title: "AI News Roundup – November 7, 2026"
description: "Today’s AI news: OpenAI closes $11B at a $1.25T valuation (below its $1.4T goal) as Anthropic IPO buyers push back; DeepMind agents weaken legacy 1024-bit RSA; an unreleased Anthropic model helps prove a quantum conjecture; OpenAI’s BioBasicsBench; Google’s smartwatch hypertension study; OpenAI’s data center compact; Airbnb’s 2027 AI agent."
pubDate: 2026-11-07T15:30:00-05:00
tags: ["ai-news"]
relatedTools: ["chatgpt", "claude", "claude-code", "gemini", "openai-codex"]
sample: false
draft: false
---

## TL;DR

- **OpenAI** closed roughly **$11 billion** of a new round at a **$1.25 trillion** valuation (Bloomberg), short of its early goal of **$30 billion+ at $1.4 trillion**. The same day, some **Anthropic** IPO investors called **$1.5 trillion** a “stretch” versus an earlier target of up to **$2 trillion** (CNBC), after the Nasdaq’s steepest one-day drop in 19 months.
- **Google DeepMind**’s human-guided AI agents found two weaknesses in legacy **1024-bit RSA** and ran a known computation **3.5x** cheaper; **2048-bit+ RSA is not affected**.
- **PSI** says an **unreleased Anthropic model** helped prove the **Aaronson–Ambainis conjecture** (open since 2008) with a Lean-checked proof.
- **OpenAI**’s new **BioBasicsBench**: GPT-6 Astra scores **66.7%** on 100 routine wet-lab tasks vs **43.8%** for GPT-5.6 Sol.
- **Google Research** in *Nature*: smartwatch AI flagged hypertension with **65.8%** sensitivity and **90.0%** specificity, with no cuff calibration.
- **OpenAI** published a **National Community Compact**: no NDAs with public officials and full electricity costs at future compute campuses.
- **Airbnb** plans an **AI travel agent** for the first half of **2027**, built as a custom interface rather than a chatbot.

**Today’s take:** The money behind [ChatGPT](/tools/chatgpt/) and [Claude](/tools/claude/) just got more cautious. Nothing changes in your plan today, but labs with huge compute bills and cooler investors have more reason to tweak prices and usage limits. Keep a second model ready and check our [models page](/models/) before you renew.

<div class="video-embed" style="position:relative;width:100%;max-width:960px;aspect-ratio:16/9;margin:1.5rem 0;border-radius:12px;overflow:hidden;background:#000;">
  <iframe src="https://www.youtube-nocookie.com/embed/XTFsm3RJC84" title="Why OpenAI's $11B Raise Is a Warning Sign" style="position:absolute;inset:0;width:100%;height:100%;border:0;" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

---

## Is the AI funding boom cooling for OpenAI and Anthropic?

**Short answer:** It’s getting pickier, not stopping. Bloomberg reported on November 6, 2026 that OpenAI has closed roughly **$11 billion**, the first part of a round that values it at **$1.25 trillion**. The rest of the round could bring the total to as much as **$20 billion** in the coming weeks. OpenAI initially set out to raise **$30 billion or more at a $1.4 trillion** valuation. Reuters reported that SoftBank and MGX took part.

On the same day, CNBC reported that some Anthropic investors now expect its IPO to price below **$1.5 trillion**, with one calling that number a “stretch,” compared with an earlier target of up to **$2 trillion**. One investor told CNBC **$1 trillion to $1.25 trillion** is more likely. Anthropic plans to list on Nasdaq as **ANT**, with a roadshow expected next week.

| Measure | Figure |
|---|---|
| OpenAI new money closed so far | ~**$11B** (Bloomberg) |
| OpenAI valuation in this round | **$1.25T** |
| OpenAI round could total | up to **$20B** |
| OpenAI’s early goal | **$30B+ at $1.4T** |
| OpenAI’s March 2026 round | **$122B at $852B** (The Verge) |
| Anthropic IPO talk now | “$1.5T a stretch”; one investor: **$1T–$1.25T** (CNBC) |
| Anthropic earlier target / May private value | up to **$2T** / **$965B** (CNBC) |
| Anthropic, per Bloomberg via TechCrunch | some potential IPO buyers see as low as **$1.1T** |

*Our math from the reported figures: $11B is about 37% of the $30B goal, and $1.25T is about 11% below $1.4T but about 47% above March’s $852B.*

The backdrop: the Nasdaq fell more than **5%** on Thursday, November 5, its steepest drop in 19 months, on fears that the midterm results will slow the data center buildout (CNBC, Reuters).

**Why it matters to you:** Both companies are spending enormous sums on compute. Cooler money doesn’t raise your bill today, but it adds pressure to earn more per user, so watch for plan, price and usage-limit changes. Compare options in our [ChatGPT pricing guide](/blog/chatgpt-pricing-explained-2026/), [Claude pricing guide](/blog/claude-pricing-explained-2026/), [ChatGPT alternatives](/blog/chatgpt-alternatives-2026/) and the [models page](/models/).

**Sources:** [Bloomberg](https://www.bloomberg.com/news/articles/2026-11-06/openai-completes-11-billion-portion-of-funding-at-1-25-trillion-value) · [TechCrunch](https://techcrunch.com/2026/11/06/openai-reportedly-raises-an-additional-11-billion-at-a-1-25-trillion-valuation/) · [The Verge](https://www.theverge.com/ai-artificial-intelligence/1029380/openai-1-25-trillion-investment-valuation) · [CNBC](https://www.cnbc.com/2026/11/06/investors-brace-for-anthropic-valuation-1point5-trillion-a-stretch.html) · [CNA / Reuters](https://www.channelnewsasia.com/business/openai-gets-11-billion-funding-125-trillion-valuation-source-says-6532301)

---

## What did DeepMind’s AI agents find in 1024-bit RSA?

**Short answer:** Two weaknesses in an already-obsolete key size. On November 6, 2026, Google DeepMind shared two cryptanalysis working papers written with researchers from Inria and UC San Diego.

- **Signatures:** with PKCS#1 v1.5, once an attacker controls more than half of the signed block at 1024 bits, the padding adds no extra difficulty. Two cooperating AI agents designed, launched and debugged a rerun of a known 1024-bit computation in under four days, at **391 CPU core-years**, **3.5x** less than the original. A headline **~1,600x** gain for the 32-byte digest case is a theoretical estimate, not a completed run.
- **Batch factoring (“fan factories”):** after a precomputation costing about one factorization, each additional 1024-bit key would cost about **1/58** of a standard number field sieve. This is theoretical and not implemented.
- Both papers say RSA keys of **2048 bits and larger are not threatened**.

**Why it matters to you:** AI agents are now running real research computations end to end. If anything you manage still uses 1024-bit RSA, retire it.

**Sources:** [Neural Brew summary with links to both DeepMind papers](https://neuralbrew.ai/en/articles/2026/11/google-deepmind-ai-agents-cryptanalysis-rsa-1024/) · [Interesting Engineering](https://interestingengineering.com/ai-robotics/1600x-faster-google-deepmind-agents-expose-weaknesses-in-older-encryption-methods)

---

## Did an unreleased Anthropic model really help prove a quantum conjecture?

**Short answer:** That’s what the lab behind it says. Physical Superintelligence (PSI) said on November 6, 2026 that its research system, built around an unnamed, unreleased Anthropic model, proved the **Aaronson–Ambainis conjecture** within three days. The problem has been open since **2008** and concerns when quantum computers can beat classical ones by an exponential margin. PSI published a paper and a **Lean 4** formal proof. Anthropic didn’t comment to Business Insider, and the proof still needs human review of how faithfully it states the original conjecture.

**Why it matters to you:** Unreleased frontier models are already doing research-grade math, which hints at what the next [Claude](/tools/claude/) releases may handle.

**Sources:** [Business Insider](https://www.businessinsider.com/anthropic-quantum-computing-breakthrough-aaronson-ambainis-math-physics-psi-2026-11) · [PSI’s Lean proof on GitHub](https://github.com/physical-superintelligence/aaronson-ambainis)

---

## How well do AI agents handle everyday lab work?

**Short answer:** Better, but not reliably. On November 6, 2026, OpenAI and enzyme-design company Ligo introduced **BioBasicsBench**, 100 routine wet-lab tasks across protein methods, imaging and cytometry, quantification and assays, nucleic acid methods, and molecular cloning. Agents work from raw gels, plates, microscopy and instrument data.

| Model (xhigh reasoning) | Average credit |
|---|---|
| GPT-6 Astra | **66.7%** |
| GPT-5.6 Sol | **43.8%** |

OpenAI says models still struggle with images, checking controls and applying experimental context.

**Why it matters to you:** A third of the credit is still missed on routine reads, so treat AI lab analysis in [ChatGPT](/tools/chatgpt/) as a second opinion, not the final call.

**Source:** [OpenAI — Measuring how AI agents handle everyday wet-lab science](https://openai.com/index/measuring-how-ai-agents-handle-wet-lab-science)

---

## Can a smartwatch spot high blood pressure without a cuff?

**Short answer:** In a study, it flagged a majority of cases. A Google Research paper published in *Nature* on November 5, 2026 tested an AI model on smartwatch pulse and motion signals, without cuff calibration, in **196** participants, compared with 24-hour ambulatory monitoring.

| Method | Sensitivity | Specificity |
|---|---|---|
| Smartwatch AI (7 days of wear) | **65.8%** | **90.0%** |
| Initial office BP screening | **55.3%** | **90.0%** |

Google Health’s Blood Pressure Trends feature gives monthly “High” or “Not high” trends, not readings or a diagnosis, and asks users to confirm with a cuff.

**Why it matters to you:** Passive AI health screening is arriving in consumer apps, but it’s a nudge to see a doctor, not a diagnosis.

**Sources:** [Nature](https://www.nature.com/articles/s41586-026-11336-3) · [Google Health Help](https://support.google.com/googlehealth/answer/18512269?hl=en)

---

## What is OpenAI promising data center communities?

**Short answer:** Lower secrecy and paying its own way. On November 5, 2026, OpenAI published a **National Community Compact** and a **Compute Campus Policy Blueprint**. Every future campus it owns and operates gets a local compact that commits to paying the full cost of the electricity it uses and the infrastructure to serve it, financial assurances if a project is delayed or canceled, site-level water and electricity reporting, and **no NDAs with public officials** beyond narrow security and trade-secret protections. The Verge tied the move to midterm opposition to data center expansion.

**Why it matters to you:** Data center politics now shape how quickly new AI capacity, and cheaper usage, can arrive.

**Sources:** [OpenAI](https://openai.com/index/setting-new-standard-responsible-ai-infrastructure) · [The Verge](https://www.theverge.com/ai-artificial-intelligence/1028454/openai-data-center-nda)

---

## When is Airbnb launching its AI travel agent?

**Short answer:** The first half of 2027. In its Q3 2026 shareholder letter, Airbnb said its agent will help guests plan and book trips. Instead of a chat window, it will compose hundreds of travel-specific interface elements, such as maps, photos, comparisons, calendars and itineraries, in real time and take action directly in Airbnb.

**Why it matters to you:** Big consumer apps are building their own agents rather than leaning on general chatbots like [Gemini](/tools/gemini/) or ChatGPT for booking.

**Sources:** [The Verge](https://www.theverge.com/tech/1028412/airbnb-ai-travel-agent-q3-2026-earnings) · [Airbnb Q3 2026 results](https://news.airbnb.com/airbnb-q3-2026-financial-results)

---

*This roundup is for education only and isn’t financial or medical advice. Funding figures come from press reports citing unnamed sources.*
