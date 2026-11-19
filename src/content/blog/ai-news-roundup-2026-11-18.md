---
title: "AI News Roundup – November 18, 2026"
description: "Today’s AI news: Claude Code gets an experimental Code Mode that chains tool calls in one script; Google ships Genie 4 to AI Ultra; Perplexity launches the Orchestrator API; OpenAI’s models find up to 14% chip gains with AMD; Anthropic prices its IPO; Snapchat opens Lenses to AI coding agents; Gemini comes to Android Go phones."
pubDate: 2026-11-18T15:30:00-05:00
tags: ["ai-news"]
relatedTools: ["claude-code", "perplexity", "gemini", "cursor"]
sample: false
draft: false
---

## TL;DR

- **Claude Code has a new experimental Code Mode.** Claude writes **JavaScript** that makes several tool calls in one step, runs them in parallel and reads back only the output it needs. Opt in with `CLAUDE_CODE_EXPERIMENTAL_CODE_MODE=1` on **v2.1.323+**.
- **Google DeepMind released Genie 4** in Project Genie for eligible **Google AI Ultra** subscribers. You can edit a world mid-session, and it now has **native audio**.
- **Perplexity launched the Orchestrator API**: frontier and open-weight models behind one key, billed per token at each model’s rates with **no per-request fee**.
- **OpenAI says its models found up to 14% PPA gains** on AMD’s flagship GPU IP in under five months, and it’s training **GPT-Synopsys** with Synopsys.
- **Anthropic prices its IPO after the close today.** CNBC’s sources say it may upsize and price **well above $80**, over the filed **$70–$78** range. **ANT** trades on Nasdaq Thursday.
- **Snapchat’s Easy Lens CLI** lets **Claude Code, Cursor and Codex** build and publish AR Lenses.
- **The Gemini app now runs on lower-memory Android (Go edition) phones.**

**Today’s take:** Code Mode is the one to try today. Instead of Claude asking for each command and reading every result, it writes one script that does the whole job and returns only the part it needs. Anthropic doesn’t give a token-savings number, so test it on one repetitive task before you switch it on everywhere, and keep your deny rules in place.

<div class="video-embed" style="position:relative;width:100%;max-width:960px;aspect-ratio:16/9;margin:1.5rem 0;border-radius:12px;overflow:hidden;background:#000;">
  <iframe src="https://www.youtube-nocookie.com/embed/7K6LP4QaeE8" title="Claude Code's New Code Mode: The Catch" style="position:absolute;inset:0;width:100%;height:100%;border:0;" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

---

## What is Claude Code’s new Code Mode?

**Short answer:** An experimental, off-by-default way for [Claude Code](/tools/claude-code/) to use its tools. Without Code Mode, Claude asks for each tool call (Bash, Read, Edit) and reads each result before deciding what’s next. With Code Mode, Claude writes a piece of **JavaScript** that makes the tool calls, and Claude Code runs it in your session. One script can run commands in parallel, feed one result into the next call and return only what Claude needs to read. Claude can also answer you while a long command keeps running.

You still see the tool calls (such as an edit’s diff), not the code. Press **Ctrl+O** to open the transcript and read the JavaScript. Anthropic’s ClaudeDevs post announcing it has passed **1.7 million views** on X.

| | Code Mode details (per Anthropic’s docs) |
|---|---|
| Turn it on | `CLAUDE_CODE_EXPERIMENTAL_CODE_MODE=1` in your shell or `~/.claude/settings.json` (project settings are ignored, so a cloned repo can’t switch it on) |
| Version | Claude Code **v2.1.323** or later, native build |
| Account | Claude subscription or Console account. Not via gateways, Amazon Bedrock, Google Cloud or Microsoft Foundry; not for HIPAA or zero-data-retention orgs |
| Models | Opus 5.5, Sonnet 5.5, Haiku 5.5, Fable 5.2 |
| Where | Interactive terminal sessions only (not `-p`, the Agent SDK, the VS Code panel, the Desktop app or cloud sessions) |
| Time limits | Code you wait on stops after **10 minutes**; background code can run up to **2 hours** (auto or bypassPermissions mode) |
| Not available | Remote Control, Claude in Chrome, computer use |
| Admin off switch | Set the variable to `0` in managed settings |

**Best for:** a change that repeats across many files, a search whose results need filtering before Claude reads them, and several independent commands that can run at the same time.

**The catch:** in auto mode, the classifier reviews **the code, not each tool call**, and it can’t see values computed at run time. Anthropic says to keep permission rules or hooks for any call you must control.

**Why it matters to you:** If you pay for Claude Code on a subscription, multi-step jobs can now run as one script, and Claude reads less raw output. That should help with long sessions and usage limits, but Anthropic doesn’t give a figure. Plans and limits: [Claude Code pricing explained](/blog/claude-code-pricing-explained-2026/). New to it? Start with [Claude Code for beginners](/blog/claude-code-for-beginners-2026/), and see [what is tool-calling orchestration](/blog/what-is-tool-calling-orchestration-2026/).

**Sources:** [Claude Code Docs](https://code.claude.com/docs/en/code-mode) · [@ClaudeDevs on X](https://x.com/ClaudeDevs/status/2122801681939234950)

---

## What can you do with Google’s Genie 4?

**Short answer:** Build and explore interactive 3D worlds in your browser, now with live edits. Google is rolling out a new **Project Genie** experience to eligible **Google AI Ultra** subscribers. Genie 4 lets you type a new prompt while you move around to change the world (shift the weather, drop in a character) and adds **real-time native audio**. Genie 3 stays in the model picker with sessions of up to **3 minutes** per generation (up from 60 seconds), world chaining and 360-degree panorama seeding. A new Project Genie agent builds worlds from a conversation, and a community gallery lets you remix others’ worlds. Everything carries **SynthID** watermarks.

**Why it matters to you:** World models are turning into a paid consumer product. It’s an Ultra perk for now; [Gemini](/tools/gemini/) Pro members can join the waitlist. Plans: [Gemini pricing explained](/blog/gemini-pricing-explained-2026/).

**Sources:** [Google](https://blog.google/innovation-and-ai/models-and-research/google-deepmind/genie-4-now-available-project-genie/) · [@GoogleDeepMind on X](https://x.com/GoogleDeepMind/status/2123117733709586849)

---

## What is Perplexity’s Orchestrator API?

**Short answer:** One [Perplexity](/tools/perplexity/) API key for frontier and open-weight models, with consolidated billing. You send requests in the **OpenAI Chat Completions, OpenAI Responses or Anthropic Messages** format, and Perplexity picks the deployment by availability, capacity and latency. If a deployment fails, it retries on another deployment of the same model **at the same price**. Set the model to `perplexity/auto` and a decision model picks one for each request.

| | Orchestrator API (per Perplexity’s docs) |
|---|---|
| Billing | Per token at the requested model’s published rates, **no per-request fee** |
| Your own provider keys | **Not accepted** |
| Google, xAI, open-weight models | Every usage tier |
| OpenAI and Anthropic models | Tier 1 or higher |
| Claude Opus 5, Opus 5.5, Fable | Tier 2 or higher |

**Why it matters to you:** Switching models becomes a one-line change in code you already have, which makes it easier to send cheap tasks to cheap models. Compare per-token prices on our [Models page](/models/) and see [Perplexity pricing explained](/blog/perplexity-pricing-explained-2026/).

**Sources:** [Perplexity Docs](https://docs.perplexity.ai/docs/orchestrator/quickstart) · [Perplexity FAQ](https://docs.perplexity.ai/docs/orchestrator/faq) · [@perplexity_ai on X](https://x.com/perplexity_ai/status/2122785177135096053)

---

## How are OpenAI’s models helping design chips?

**Short answer:** OpenAI says that working with **AMD**, its models found up to **14%** improvement in power, performance and area (PPA) on AMD’s flagship GPU IP by rewriting the chip’s SystemVerilog code. That’s roughly a year of progress in under **five months**. AMD has put some changes in a design already sent for manufacturing and verified single-digit gains on key blocks of its next flagship CPU. On OpenAI’s own **Jalapeño** inference chip, model-proposed changes cut cell area by about **13%** in the vector unit and **10%** in the matrix unit, proven on real silicon. OpenAI is also working with **Synopsys** to train **GPT-Synopsys**, a model that uses Synopsys design tools.

**Why it matters to you:** Cheaper, more efficient AI chips are one route to lower model prices later. In OpenAI’s RISC-V tests, [GPT-6.2 Astra](/blog/ai-news-roundup-2026-11-17/) scored highest at the same token budget.

**Sources:** [OpenAI](https://openai.com/index/advancing-chip-design-with-our-models/) · [@OpenAI on X](https://x.com/OpenAI/status/2123100386638877054)

---

## When does Anthropic’s IPO happen?

**Short answer:** Anthropic is expected to set its final IPO price after the market close today, and shares start trading **Thursday, November 19** on Nasdaq as **ANT**, per CNBC. People familiar with the deal told CNBC that Anthropic may upsize the offering and is weighing a price **well above $80**, above the filed range of **$70 to $78** for **825 million** shares. They put non-binding demand at about **$400 billion** from institutions and nearly **$100 billion** from retail. TechCrunch reports that **Amazon** will own **14.7%** and **Google** **13.7%** after the IPO, both in non-voting shares.

**Why it matters to you:** The company behind [Claude](/tools/claude/) is about to answer to public shareholders. Keep an eye on plan prices and usage limits over the next few quarters. This is news, not investment advice.

**Sources:** [CNBC](https://www.cnbc.com/2026/11/18/anthropic-ipo-ai-offering-price.html) · [TechCrunch](https://techcrunch.com/2026/11/17/amazon-and-google-will-together-own-nearly-30-of-anthropic-after-its-ipo/)

---

## Can AI coding agents build Snapchat Lenses?

**Short answer:** Yes. Snap’s new **Easy Lens CLI** lets you describe a Lens in plain language and have [Claude Code](/tools/claude-code/), [Cursor](/tools/cursor/) or [Codex](/tools/openai-codex/) build it with **100+** AR building blocks and **50** AI asset generators. The agent makes previews, sends test builds to your phone, publishes to Snapchat and tracks how the Lens performs. It runs on Mac, Windows and Linux. Lens+ Payouts members can earn from these Lenses; Snap says it paid **$1.8 million** to Lens+ creators last month.

**Why it matters to you:** More platforms now ship a CLI for AI coding agents, so the assistant you already use becomes the way you build for other apps. Compare the three: [Cursor vs Claude Code vs Codex](/blog/cursor-vs-claude-code-vs-codex-2026/).

**Sources:** [TechCrunch](https://techcrunch.com/2026/11/18/snapchat-now-lets-developers-build-ar-lenses-with-ai-coding-assistants-like-claude-code-and-cursor/)

---

## Which phones can run the Gemini app now?

**Short answer:** Lower-memory Android phones, including eligible **Android (Go edition)** devices. Google rebuilt the [Gemini](/tools/gemini/) app so the core experience runs on less memory, with Gemini Live in **45+** languages, camera help for notes and forms, and Nano Banana image creation. Get it on Google Play, by holding the power button on supported phones, or preloaded on upcoming phones from partners like Transsion.

**Why it matters to you:** A full AI assistant is reaching budget phones, which widens Gemini’s audience by hundreds of millions of people, per Google.

**Sources:** [Google](https://blog.google/innovation-and-ai/products/gemini-app/gemini-lower-memory-devices/) · [@GeminiApp on X](https://x.com/GeminiApp/status/2123100943604707606)

---

*Education only. Prices and features change; verify with the official sources above. Compare current model prices on our [models page](/models/) and browse the [AI tools directory](/tools/).*
