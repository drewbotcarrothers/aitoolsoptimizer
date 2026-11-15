---
title: "AI News Roundup – November 15, 2026"
description: "Today’s AI news: Cursor traces its breach to a key exposed at Fireworks AI and a fake Claude Code extension that reached up to 5,000 users (Uber drivers hit too); the Fed’s survey ranks AI the top financial risk; Amodei on Anthropic’s compute dilemma; WSJ on Megaspeed’s $12B Nvidia orders; Salesforce open-sources a speech model."
pubDate: 2026-11-15T15:30:00-05:00
tags: ["ai-news"]
relatedTools: ["cursor", "claude-code", "claude", "otter-ai"]
sample: false
draft: false
---

## TL;DR

- **Cursor** says its October breach started with an access key it had issued to **Fireworks AI**, exposed at Fireworks. Old coding-agent traces with **pasted-in credentials** let the attacker go further, and on October 29 a **fake Claude Code extension** (versions **2.1.312 and 2.1.313**) sat in Cursor’s extension marketplace cache for about **11 hours**, reaching **at most 5,000 users**. **Uber** drivers’ license data was stolen through the same vendor.
- The **Federal Reserve**’s November Financial Stability Report: **87%** of survey respondents now name **AI** as a salient risk to the financial system, up from **50%** in the spring.
- **Anthropic** CEO Dario Amodei called compute “the **deepest business dilemma**” the company faces, days before its IPO (about **$900 billion** in infrastructure commitments, per Business Insider).
- **WSJ**: Megaspeed arranged nearly **$12 billion** of Nvidia chip orders for Chinese companies between March 2024 and June 2025.
- **Salesforce** released **SOV-Transcribe-1**, an open-weight speech-to-text model under **Apache 2.0** that tops Artificial Analysis’ open-weight leaderboard (**2.28%** word error rate).

**Today’s take:** The Cursor report is the one to read if you use AI coding tools. The attack didn’t break Cursor’s app or Anthropic’s extension. It started at an AI vendor two steps away from you, ran through old agent chats where people had pasted API keys, and ended as a fake copy of a popular extension. The fix on your side is boring and free: check the extension version, keep Privacy Mode on, and stop pasting secrets into AI chats and support tickets.

---

## How did a fake Claude Code extension end up in Cursor’s marketplace?

**Short answer:** In a November 13 update, [Cursor](/tools/cursor/) laid out the chain. An attacker got an access key Cursor had issued to **Fireworks AI** (Cursor says Fireworks exposed it) and copied a read-only storage bucket Cursor used to share data with Fireworks. It held limited **coding-agent traces**, mostly from 2025, from sessions **not in Privacy Mode**. A small number of those traces contained credentials that hadn’t been redacted (**under 0.01%** of customers had API credentials exposed). With those, the attacker reached some of Cursor’s SaaS tools, then used a stolen credential to place malicious copies of Anthropic’s [Claude Code](/tools/claude-code/) extension on the cache serving Cursor’s VS Code extension marketplace.

| | What Cursor says |
|---|---|
| Bad versions | `Anthropic.claude-code` **2.1.312** and **2.1.313** (macOS and Windows) |
| When | October 29, 2026, for about **11 hours** |
| Who could have it | **At most 5,000 users** who requested those cached versions |
| What it tried to do | Install a persistent SSH backdoor and send host details (Cursor’s Oct 29 notice) |
| Not affected | Prompts and code for Privacy Mode users, live traffic, production systems, official app releases, customer code repositories, other extensions |
| Agent traces exposed | Fewer than **0.05%** of non-Privacy-Mode users, all notified directly |
| Last attacker activity | November 1 (blocked) |

Anthropic didn’t publish the fake copy and it wasn’t a flaw in Anthropic’s product; the Open VSX source never had the malware. Cursor says it moved all inference off Fireworks, rotated credentials, rebuilt the marketplace and added secret scanning.

**Same vendor, another victim:** On November 13 TechCrunch reported that **Uber** is notifying drivers whose personal and driver’s license data was stolen through Fireworks AI, including **2,567** people in Massachusetts, **3,430** in South Carolina and **1,873** in Rhode Island, with more states pending. Earlier this week Notion said the same breach exposed some Notion AI chats ([our Nov 12 roundup](/blog/ai-news-roundup-2026-11-12/)).

**What to do now:**
1. If you installed or updated Claude Code **2.1.312 or 2.1.313 from Cursor’s marketplace** on October 29, follow [Cursor’s security notice](https://cursor.com/blog/claude-code-extension-security-notice): it has a one-line check for an SSH key labeled `svc-telemetry` and cleanup scripts. Cursor says **uninstalling alone may not be enough**.
2. Turn on **Privacy Mode** if you haven’t; Cursor says Privacy Mode prompts and code weren’t affected.
3. Never paste API keys or passwords into AI chats or support tickets. Use environment variables or a secrets manager, and rotate any key you’ve ever pasted.

**Why it matters to you:** Your AI coding history is now a target. It can hold the keys to everything else you use. Compare tools in our [Cursor review](/blog/cursor-review-2026/), [Claude Code review](/blog/claude-code-review-2026/) and [Cursor vs Claude Code vs Codex](/blog/cursor-vs-claude-code-vs-codex-2026/).

**Sources:** [Cursor: incident update](https://cursor.com/blog/security-incident-update) · [Cursor: security notice](https://cursor.com/blog/claude-code-extension-security-notice) · [BleepingComputer](https://www.bleepingcomputer.com/news/security/cursor-confirms-security-breach-led-to-malicious-claude-code-extension/) · [TechCrunch (Uber)](https://techcrunch.com/2026/11/13/uber-confirms-hackers-stole-thousands-of-drivers-license-information-in-data-breach/)

---

## Why does the Fed now rank AI as the top financial risk?

**Short answer:** The Federal Reserve’s twice-yearly **Financial Stability Report** (released November 13, data as of October 28) asked market contacts about the biggest risks. **87%** named AI, up from **50%** in the spring survey, far ahead of everything else.

| Risk named in the Fed survey | Share of respondents |
|---|---|
| **Artificial intelligence** | **87%** |
| Risk-asset correction | 52% |
| Higher long-term rates | 48% |
| Cyberattacks | 43% |
| Fiscal debt sustainability | 43% |

The report lists three AI worries: high stock valuations that could correct if earnings disappoint, **cybersecurity** risk (from state actors or from frontier AI models themselves), and **complex AI-related financing**. It also notes hedge fund leverage is at its highest since 2013.

**Why it matters to you:** The money paying for today’s cheap and free AI plans is now the Fed’s top worry. If financing tightens, expect price rises and smaller vendors to feel it first. See our [Models page](/models/) for current API prices.

**Sources:** [Federal Reserve: Financial Stability Report (PDF)](https://www.federalreserve.gov/publications/files/financial-stability-report-20261113.pdf) · [CNBC](https://www.cnbc.com/2026/11/13/ai-risks-financial-system-federal-reserve.html)

---

## What did Dario Amodei say about Anthropic’s compute before the IPO?

**Short answer:** In a November 13 livestream with JPMorgan CEO Jamie Dimon, Amodei said compute is “the deepest business dilemma that the company faces”: Anthropic has to decide how much computing power to buy years ahead without knowing how fast revenue will follow.

Business Insider reports the IPO prospectus shows about **$900 billion** in infrastructure commitments, around half due by 2030, and more than **$95 billion** in cash plus **$36 billion** in short-term investments as of September 30. Amodei said the plan is to buy **relatively little** compute in advance and use the spot market if demand runs higher. Anthropic is targeting a **$1.4 trillion** valuation, with pricing set for Wednesday and trading Thursday, per Business Insider. He told Dimon he hopes the IPO will “underpromise and overdeliver” (WSJ).

**Why it matters to you:** Compute is what sets [Claude](/tools/claude/)’s usage limits. A lab that buys little in advance can run tight when demand spikes, so plan for limits on busy days. More on the IPO in [yesterday’s roundup](/blog/ai-news-roundup-2026-11-14/).

**Sources:** [Business Insider](https://www.businessinsider.com/anthropic-ipo-pitch-dario-amodei-compute-dilemma-2026-11) · [Bloomberg](https://www.bloomberg.com/news/articles/2026-11-13/anthropic-ceo-calls-computing-power-deepest-business-dilemma) · [WSJ](https://www.wsj.com/finance/anthropic-chief-tells-jamie-dimon-he-hopes-ipo-will-underpromise-and-overdeliver-1ba2dd71)

---

## How many Nvidia chips did Megaspeed route to China?

**Short answer:** According to documents reviewed by the **Wall Street Journal** (reported November 15), Megaspeed arranged nearly **$12 billion** of Nvidia high-performance chip orders for Chinese companies between **March 2024 and June 2025**, covering several hundred thousand chips the US had tried to keep out of China with export controls.

Megaspeed told Reuters that its former controlling shareholder, Alice Huang, left the company on August 30, 2025, that it did “legitimate and lawful business,” and that it has hired outside counsel for an internal investigation. For scale, Nvidia reported **$12.4 billion** in China revenue over six months, about 7% of its total.

**Why it matters to you:** Export-control enforcement is closing in on Nvidia days after its CEO change. Where chips can go shapes who can train the next big open and closed models.

**Sources:** [The Decoder (citing WSJ and Reuters)](https://the-decoder.com/firm-linked-to-jensen-huangs-ex-lover-reportedly-brokered-nearly-12-billion-in-nvidia-chip-orders-for-china/) · [CNBC background](https://www.cnbc.com/2026/11/12/nvidia-megaspeed-alice-huang-jensen-.html)

---

## Is Salesforce’s SOV-Transcribe-1 the best open speech-to-text model?

**Short answer:** On Artificial Analysis’ non-streaming speech-to-text leaderboard, yes among open-weight models (#7 overall, per Salesforce). **SOV-Transcribe-1** has **4 billion active** parameters (26 billion total) and is released on Hugging Face under **Apache 2.0**, which allows commercial use.

| Model (Salesforce’s comparison) | Artificial Analysis word error rate |
|---|---|
| **Salesforce SOV-Transcribe-1** | **2.28%** |
| Mistral Voxtral Small | 2.77% |
| NVIDIA Nemotron 3.5 Transcribe | 2.81% |

It also ranks #2 of 23 systems on VoiceCodeBench (getting phone numbers, emails and URLs right), follows formatting instructions (for example “write numbers as digits”), and accepts keywords to boost rare names. It’s built for **recorded audio**, not live streaming.

**Why it matters to you:** If you transcribe meetings, calls or videos, this is a free model you can run on your own hardware so audio never leaves your servers. Hosted options like [Otter.ai](/tools/otter-ai/) are still simpler for most people; see [how to transcribe YouTube videos with AI](/blog/how-to-transcribe-youtube-videos-with-ai-2026/).

**Sources:** [Salesforce on Hugging Face](https://huggingface.co/blog/salesforce-sovereign-intelligence/sov-transcribe-1) · [Model card](https://huggingface.co/salesforce-sovereign-intelligence/SOV-Transcribe-1)

---

*Education only. Prices and features change; verify with the official sources above. Compare current model prices on our [models page](/models/) and browse the [AI tools directory](/tools/).*
