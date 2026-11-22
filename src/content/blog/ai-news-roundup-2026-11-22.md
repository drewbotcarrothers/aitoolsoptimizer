---
title: "AI News Roundup – November 22, 2026"
description: "Today’s AI news: OpenRouter drops three providers and pulls 125 zero-data-retention endpoints after a prompt-leak study; an AI coding agent leaked a Together AI credential; Lean certifies the Claude-assisted Riemann proof; UN killer-robot talks stall; South Korea’s AI cheating fallout; a licensed AI actor."
pubDate: 2026-11-22T15:30:00-05:00
tags: ["ai-news"]
relatedTools: ["claude", "claude-code", "cursor", "github-copilot", "heygen"]
sample: false
draft: false
---

## TL;DR

- **OpenRouter dropped three AI inference providers** and took **125 endpoints** off its Zero Data Retention (ZDR) list after security researchers at Dragos caught prompts leaking across the AI supply chain. Novita and Phala posted notices with exact dates; if you sent secrets through them, rotate them.
- **Together AI says an AI coding agent committed a credential** to a public repo, which let an outsider download stored prompt samples from June and July.
- **The Lean and Mathlib communities certified the Claude-assisted proof of the Riemann hypothesis** as correct: a **17-million-line** Lean library.
- **UN talks on autonomous weapons ended without a binding ban.** The **128** states agreed to two more years of work instead.
- **South Korea’s education minister resigned** after an AI cheating scandal upended university entrance exams.
- **Microdrama startup Shortical licensed an actor’s face** for a fully AI-generated series.

**Today’s take:** A “zero data retention” label is a promise, not a guarantee. If you send prompts through a router or a cheap reseller, don’t put live API keys or passwords in them, rotate any you already sent, and pick your providers yourself for anything sensitive.

---

## Did your prompts leak through an AI router like OpenRouter?

**Short answer:** Maybe, if they went through certain third-party providers. On Nov 22, OpenRouter said it **off-boarded three inference providers**, removed **125 endpoints** from Zero Data Retention eligibility (the flagged providers plus some precautionary removals) and **notified every potentially affected customer**. It says the findings showed no breach of OpenRouter itself.

The trigger was a study by HD Moore at the security firm **Dragos** (published Nov 19). From July to November 2026, Dragos sent about **two million prompts** containing unique URLs and fake “canary” credentials to AI services, then watched where they turned up:

| What Dragos found | Detail (Dragos’ report) |
|---|---|
| Breached providers | Data from **at least 3** providers exposed; stolen bait AWS keys were used for **tens of thousands** of AWS API calls |
| ZDR didn’t help | In two of the three breaches, some stolen requests were marked ZDR |
| Reseller marketplaces | Some sellers viewed and kept customer prompts using ordinary request logging |
| Policy failures | Prompts sent to US providers reached Chinese AI organizations; some URLs were opened months later |

| Provider notice | Affected requests | What to do |
|---|---|---|
| [Novita](https://novita.ai/blog/minimax-requests-privacy-notice/) | MiniMax models, **May 28 – Nov 11, 2026** (incl. via OpenRouter); forwarded to MiniMax’s own API | Rotate any secrets you sent |
| Phala | DeepSeek V4 Flash 0731 routed by OpenRouter, **Oct 21 – Nov 8, 2026** | Treat contents as exposed; rotate secrets |
| [Together AI](https://www.together.ai/blog/security-event-prompt-leakage-for-requests-in-june-and-july-of-2026) | Stored samples from June and July (see next story) | Turn on ZDR |

OpenRouter says it’s now running the researchers’ tests on its own, checking network paths for forwarding to third parties, and requiring validation before any endpoint gets ZDR back.

**Why it matters to you:** Every hop between you and the model can see your full prompt. Dragos’ advice: go direct to a first-tier provider for sensitive work, pin your upstream providers instead of taking a router’s default pool, steer clear of reseller marketplaces, and seed your own canary credentials. Background: [what an AI model router is](/blog/what-is-ai-model-router-2026/), [AI data retention policies](/blog/what-is-ai-data-retention-policy-2026/) and [prompt canaries](/blog/what-is-ai-prompt-injection-canary-2026/). Compare first-party prices on the [models page](/models/).

**Sources:** [OpenRouter](https://openrouter.ai/blog/announcements/data-processing-incidents-on-inference-providers/) · [Dragos](https://www.dragos.com/blog/ai-supply-chain-security-canary-tokens) · [Novita](https://novita.ai/blog/minimax-requests-privacy-notice/) · [Ars Technica](https://arstechnica.com/security/2026/11/a-leaky-ai-supply-chain-is-exposing-secret-user-data-at-an-alarming-rate/)

---

## How did an AI coding agent leak Together AI’s prompts?

**Short answer:** It committed a credential to a public repo. In a Nov 21 notice, Together AI CEO Vipul Ved Prakash said the company kept prompt samples for testing in a private Hugging Face repository. They came from requests to **MiniMax M3, GLM-5.2 and Kimi K2.6**, mainly on June 24, July 4, July 8 and July 14, 2026. While working on Together’s public GitHub repo, xorl, an AI coding agent committed a credential for that private repository. Automated scanning caught it and the commit was reverted, but an outsider grabbed the credential first, downloaded the samples, searched them for other credentials and tested them. **Five** of those were Dragos canaries.

Together says it found no other prompt leakage and is working with a forensic firm and law enforcement. It has made **ZDR the default for new accounts**, checks every pull request for credentials, moved to scoped or short-lived keys, and updated its rules for AI coding agents.

**Why it matters to you:** If you use [Claude Code](/tools/claude-code/), [Cursor](/tools/cursor/) or [GitHub Copilot](/tools/github-copilot/) agents, turn on secret scanning and pre-commit checks, and keep long-lived keys out of the repo. Together customers with sensitive prompts should enable ZDR in account settings.

**Source:** [Together AI](https://www.together.ai/blog/security-event-prompt-leakage-for-requests-in-june-and-july-of-2026)

---

## Is the Claude-assisted Riemann hypothesis proof really correct?

**Short answer:** The Lean and Mathlib communities say yes, as a formal proof. In a Nov 21 joint statement endorsed by the Lean FRO and the Mathlib Initiative, they said they have “full confidence” that Levent Alpöge’s proof, released Nov 20 as a **17-million-line** Lean library, is correct. Dozens of people reproduced the build, two independent tools confirmed it proves exactly Mathlib’s statement of the hypothesis, and several proof checkers accepted it. Two of those checkers come with a formal proof that they can’t accept a false proof. Alpöge, a mathematician at Anthropic, says he found the proof working with [Claude](/tools/claude/). A human explanation of the new ideas is still to come.

**Why it matters to you:** AI plus a strict checker produced a result experts are willing to certify. The everyday version is the same: pair AI output with tests, linters or sources instead of trusting it raw.

**Sources:** [Lean community statement](https://leanprover-community.github.io/blog/posts/riemann-hypothesis/) · [The Guardian](https://www.theguardian.com/technology/2026/nov/21/anthropic-riemann-hypothesis-solved-claude-ai)

---

## Will there be a global ban on AI “killer robots”?

**Short answer:** Not soon. UN talks among the **128** states in the Convention on Certain Conventional Weapons ended in Geneva early Saturday, Nov 21, without a mandate for a legally binding treaty. They agreed to work on an “international instrument” over the next **two years**, by 2028. Nearly 100 nations had called for binding negotiations; the US, Russia and Israel were among those opposed. The campaign group Stop Killer Robots called it a watered-down mandate.

**Why it matters to you:** Rules for AI weapons will trail their use on the battlefield for at least two more years.

**Sources:** [DW](https://www.dw.com/en/killer-robots-talks-at-un-end-with-no-legally-binding-ban/a-80008584) · [The Guardian](https://www.theguardian.com/technology/2026/nov/21/international-talks-control-ai-autonomous-weapons-collapse)

---

## Why did South Korea’s education minister resign over AI cheating?

**Short answer:** He said he failed to prepare for it. Choi Kyo-jin resigned on Sunday, Nov 22, and President Lee Jae Myung accepted. Days before the suneung university entrance exam, the top scorer on a national tax accountancy exam confessed to photographing questions with a hidden microcamera, sending them to an AI system and reading the answers from a smartphone. The last-minute crackdown included handing in devices, blocking public wifi and emergency alerts to every phone. Officials found **111** device-related misconduct cases during Thursday’s exam.

**Why it matters to you:** Tests built for a pre-AI world are breaking. Expect more in-person, device-free and process-based exams and job assessments. For legitimate study help, see our [best AI tools for students](/blog/best-ai-tools-for-students-2026/).

**Sources:** [The Guardian](https://www.theguardian.com/world/2026/nov/22/south-korea-education-minister-resigns-after-ai-cheating-scandal-engulfs-university-exams) · [Yonhap](https://en.yna.co.kr/view/AEN20261122001051315)

---

## Can you get paid to license your face to an AI studio?

**Short answer:** Some companies are starting to offer it. TechCrunch reports that microdrama startup Shortical’s fully AI-generated series *Inevitable* uses a digital likeness of Israeli actor Aki Avni, who licensed his face directly to the company. Shortical invites anyone to submit their social handles to license their likeness, but says that program hasn’t produced any signed contracts yet. It won’t share Avni’s fee, saying it was in line with a comparable non-AI acting role. Rest of World found Chinese microdrama firms paying **$15 to $700** for a face.

**Why it matters to you:** Avatar tools like [HeyGen](/tools/heygen/), [Synthesia](/tools/synthesia/) and [Runway](/tools/runway/) make digital doubles easy. If you ever license your face or voice, get the allowed uses, duration and payment in writing.

**Source:** [TechCrunch](https://techcrunch.com/2026/11/21/is-selling-an-ai-version-of-your-face-to-this-microdrama-startup-the-future-of-hollywood/)

---

*Education only. Policies and incident details can change; verify with the official sources above. Compare current model prices on our [models page](/models/) and browse the [AI tools directory](/tools/).*
