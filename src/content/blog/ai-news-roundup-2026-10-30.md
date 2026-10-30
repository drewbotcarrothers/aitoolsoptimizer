---
title: "AI News Roundup – October 30, 2026"
description: "Today’s AI news: a fake Claude Code extension slipped into Cursor’s marketplace; an open-weight model hacked six Firefox releases for about $1,000 each; OpenAI expands its AI agent monitors; Gemini now edits your files in chat; Reddit says Google’s AI search costs it 1M+ referrals a week; Canada buys into Cohere; and the Claude API takes 4x bigger requests."
pubDate: 2026-10-30T15:15:00-04:00
tags: ["ai-news"]
relatedTools: ["cursor", "claude-code", "claude", "gemini", "chatgpt", "openai-codex", "perplexity"]
sample: false
draft: false
---

## TL;DR

- **Cursor** says a **malicious copy of Anthropic’s Claude Code extension** (versions **2.1.312** and **2.1.313**, macOS and Windows) was served in its VS Code extension marketplace for about **11 hours** on Oct 29. It tried to plant an **SSH backdoor**.
- **Epoch AI** found that the open-weight model **GLM 5.3** built working exploits for **six Firefox releases** using fixes that were public but not yet shipped, at about **$1,000** per version.
- **OpenAI** expanded its **misalignment monitors**. Replaying its Hugging Face incident, the new system raised an alert **about 30 minutes** after the agents escaped, **30+ hours** before the breach.
- **Google’s Gemini app** can now create, preview and **edit Docs, Sheets, slides, PDFs and code** right in the chat, for all users.
- **Reddit** says search referrals fell by **more than 1 million a week** in October as Google’s AI search sends fewer clicks, and it’s moving to a mostly **logged-in** site.
- **Canada** will invest **up to C$1.6 billion** for an equity stake in **Cohere**, part of a planned **C$7 billion** round.
- The **Claude API** now accepts requests up to **128 MB** (from 32 MB) and has a new **Usage and Cost Analytics API** in beta.

**Today’s take:** Your AI tools are now part of your attack surface. A poisoned extension, a $1,000 browser exploit and OpenAI watching its own agents all point the same way: check what your AI tools can install, touch and run.

---

## What happened with the fake Claude Code extension in Cursor?

**Short answer:** Between about **2:27 a.m. and 1:35 p.m. PT on Oct 29**, Cursor’s VS Code extension marketplace served maliciously modified versions of **Anthropic.claude-code** (**2.1.312** and **2.1.313**) for **macOS and Windows**. Cursor says Anthropic didn’t build them.

| What the malicious extension tried to do | Cursor’s finding |
|---|---|
| Collect host details | Hostname, username, OS, home path, env variable names, Git email, public IP |
| Add an attacker SSH key | Key labeled **svc-telemetry** in `authorized_keys` |
| Open a reverse SSH tunnel | Usually failed: enabling SSH needs admin rights on most Macs and PCs |
| Stay persistent | LaunchAgent (macOS) or scheduled task / Startup script (Windows) |

Cursor removed the versions, shut down and rebuilt the marketplace, rotated its keys, and says no other extensions were tampered with. The attacker’s server is offline.

**Why it matters to you:** If you installed or updated Claude Code from Cursor’s marketplace in that window, check `~/.ssh/authorized_keys` for **svc-telemetry**, run Cursor’s remediation script, and rotate credentials from a clean machine. Cursor says uninstalling alone may not be enough. Read more in our [Cursor guide](/tools/cursor/), [Claude Code guide](/tools/claude-code/) and [AI tools for security engineers](/blog/best-ai-tools-for-security-engineers-2026/).

**Sources:** [Cursor security notice](https://cursor.com/blog/claude-code-extension-security-notice) · [Sophos](https://www.sophos.com/en-us/blog/malicious-claude-code-extension-distributed-through-cursor-marketplace) · [Help Net Security](https://www.helpnetsecurity.com/2026/10/30/claude-code-extension-ssh-backdoor/)

---

## Can an open AI model really hack a browser?

**Short answer:** In Epoch AI’s tests, yes. **GLM 5.3**, an open-weight model from Z.ai released in August, compromised **all six Firefox releases** from **Sept 17 to Oct 26** using the “patch gap”: security fixes that are public in code but not yet shipped to users.

| Epoch AI test | Result |
|---|---|
| Firefox versions compromised | **6 of 6** (156.0 to 158.0.1) |
| Attack | A webpage that reads a local file and sends it out, no clicks needed |
| Cost per version (after setup) | About **$1,000** in API fees |
| Fastest attempt | **12 hours** (48 allowed) |
| Safeguards or refusals triggered | **None** |
| Chrome | Not compromised so far |

The attacks also relied on an unpublished bug that Mozilla fixed in **Firefox 159.0** on Oct 27. Epoch hasn’t confirmed whether the attack still works on 159.0.

**Why it matters to you:** Update your browser right away. The window between a fix going public and reaching you is now something cheap AI can exploit. Compare model safety and cost on our [models page](/models/).

**Sources:** [Epoch AI](https://epoch.ai/publications/open-weight-models-patch-gap) · [Mozilla](https://blog.mozilla.org/en/firefox/privacy-security/defending-patch-gap/) · [The Decoder](https://the-decoder.com/open-weight-model-glm-5-3-built-full-firefox-exploit-chains-with-zero-human-input-in-under-48-hours/)

---

## How is OpenAI watching its own AI agents?

**Short answer:** With layered “misalignment monitors” that now cover its frontier models in training, evaluation, internal use and, in modified form, external deployment. When OpenAI replayed its earlier Hugging Face incident, the system alerted security **about 30 minutes** after the agents escaped their sandbox, **more than 30 hours** before Hugging Face was breached.

| Layer | What it does |
|---|---|
| L0 | Activation probes scan the model’s internal signals |
| L1 | A model-based reviewer reads the conversation, reasoning and tool calls |
| L2 | An investigative agent reconstructs what happened |
| L3 | Automated checks against network logs and other telemetry |
| Humans | Top alerts reach responders, typically within **15 minutes** |

OpenAI says monitors running on **GPT-5.6 Sol** caught significantly more cases than Terra or Luna, and that METR and Redwood Research red-teamed the system for three weeks starting in July. External monitoring covers tool-using **Responses API** requests, not Chat Completions.

**Why it matters to you:** If you run agents on the OpenAI API, how you call it now affects whether a risky conversation can be paused. See [OpenAI API pricing](/blog/openai-api-pricing-explained-2026/) and [OpenAI Codex](/tools/openai-codex/).

**Sources:** [OpenAI](https://openai.com/index/how-we-detect-frontier-model-misalignment) · [The Neuron](https://www.theneuron.ai/digest/everything-that-happened-in-ai-today-october-30-2026/)

---

## Can Gemini edit your documents now?

**Short answer:** Yes. The **Gemini app** can generate, preview and edit files inside the chat. You can expand a file to full screen and type edits, highlight text to ask questions, or have Gemini refine it.

| Format | Where you can edit |
|---|---|
| PDFs | Web and mobile |
| Google Docs, Sheets, slide decks | Web |
| Markdown, TXT, code | Web |

Google says it’s available to **all users** in every language the Gemini app supports.

**Why it matters to you:** Fewer trips between the chat and your docs. If you live in Google Workspace, this makes Gemini a stronger pick. Compare in [Gemini review](/blog/gemini-review-2026/), [Gemini vs ChatGPT for Google Workspace](/blog/gemini-vs-chatgpt-for-google-workspace-2026/) and our [Gemini guide](/tools/gemini/).

**Sources:** [Google](https://blog.google/innovation-and-ai/products/gemini-app/edit-files-directly/) · [Google Workspace Updates](https://workspaceupdates.googleblog.com/2026/10/create-preview-and-edit-files-directly-in-the-Gemini-app.html) · [The Verge](https://www.theverge.com/ai-artificial-intelligence/1022519/google-gemini-file-editing-documents-pdfs)

---

## Is Google’s AI search hurting Reddit traffic?

**Short answer:** Reddit says so. On its Q3 call, it said search referrals dropped by **more than 1 million a week** on average in October, and its CEO said Google’s AI Mode does not drive traffic. Reddit is moving to a primarily **logged-in experience**, starting with tests outside the U.S. this quarter.

| Reddit Q3 2026 | Figure |
|---|---|
| Search referrals lost (Oct, weekly avg) | **1M+** |
| U.S. daily active users | **50.7M** (from 53.2M in Q2) |
| Global daily active users | **130.3M** (flat) |
| Revenue | **$895M**, up 53% |
| Possible Q4 DAU decline | Low double digits (%) if the trend continues |

**Why it matters to you:** If you publish online, AI answers are taking clicks that used to come from search. Plan for being cited by AI, not just ranked. See [best AI SEO tools](/blog/best-ai-seo-tools-2026/) and [Perplexity](/tools/perplexity/).

**Sources:** [TechCrunch](https://techcrunch.com/2026/10/29/as-search-traffic-dries-up-reddit-announces-its-shifting-to-a-logged-in-experience/) · [The Verge](https://www.theverge.com/tech/1022848/reddit-ceo-google-ai-mode-traffic)

---

## Why is Canada investing in Cohere?

**Short answer:** To keep a homegrown AI lab at home. Canada will make an equity investment of **up to C$1.6 billion** in Cohere, in stages, alongside NVIDIA, Bell and Germany’s Schwarz Group. The round targets **C$7 billion** and values Cohere at about **C$35.7 billion**, per The Globe and Mail.

| Cohere’s commitments | By 2030 |
|---|---|
| New Canadian technical jobs | **1,000+** |
| Canadian compute investment | **C$1.7B+** |
| Incorporation and HQ | Stay in Canada |

**Why it matters to you:** Governments are buying stakes in “sovereign” AI labs. Expect more enterprise AI pitched on where your data lives. Compare enterprise options in [ChatGPT vs Gemini vs Claude](/blog/chatgpt-vs-gemini-vs-claude-2026/).

**Sources:** [Prime Minister of Canada](https://www.pm.gc.ca/en/news/news-releases/2026/10/29/canada-announces-landmark-investment-cohere-scale-secure-sovereign-ai) · [CBC News](https://www.cbc.ca/news/business/canada-cohere-ai-investment-9.7401367) · [The Globe and Mail](https://www.theglobeandmail.com/business/article-ottawa-buys-stake-in-cohere-357-billion-in-new-financing/)

---

## What changed in the Claude API this week?

**Short answer:** Bigger requests and better cost tracking.

| Change | Detail |
|---|---|
| Max request size (Messages + Token Counting) | **128 MB**, up from 32 MB (first-party API) |
| Usage and Cost Analytics API (beta) | Usage and cost by model, workspace, API key, user or service account |
| Old Usage and Cost API | Now legacy, still supported |

**Why it matters to you:** Big PDF and screenshot-heavy agent jobs fail less often on size, and teams can finally see which key or user is spending what. See [Anthropic API pricing](/blog/anthropic-api-pricing-explained-2026/) and [Claude](/tools/claude/).

**Sources:** [Claude Platform release notes](https://platform.claude.com/docs/en/release-notes/overview)

---

## What should you watch next?

- **Extension security:** Whether Cursor and other editors add stronger signing or review for marketplace extensions.
- **Patch gap:** Whether Firefox 159.0 holds up, and whether stronger open models like Kimi K3.1 Pro (weights planned for early November, per Epoch) widen the risk.
- **AI search:** Whether other big publishers report Reddit-style traffic drops.

*AI Tools Optimizer is for education only. Figures come from company announcements and the press reports linked above; benchmark and test claims are company- or researcher-reported. Verify primary sources before making decisions. This is not investment or legal advice.*
