---
title: "AI News Roundup – November 25, 2026"
description: "Today’s AI news: Google will make AI agents use MCP for Gmail, Drive and Workspace data from Feb 1; OpenAI’s GPT-6 designs proteins that bound in the lab; Claude artifacts install as desktop apps; Skills over MCP; OpenAI tests Private Inference; Midjourney Niji 8."
pubDate: 2026-11-25T15:30:00-05:00
tags: ["ai-news"]
relatedTools: ["gemini", "claude", "midjourney"]
sample: false
draft: false
---

## TL;DR

- **Google will require AI agents to use MCP** to reach Gmail, Drive and other Workspace data, with enforcement from **Feb 1, 2027**. Workspace MCP servers and a Workspace CLI are now generally available, and heavy agent use can start costing money from **Apr 1, 2027**.
- **OpenAI says its GPT-6 models can design proteins** using only reasoning and code. In lab tests, **35 of 322** minibinders based on GPT-6.2’s designs bound their targets.
- **Claude artifacts can now be installed as Mac and Windows apps** (beta, all plans), with three permission levels up to full computer access.
- **Claude added Skills over MCP** (public beta) and made **Tasks and Elicitation** generally available as MCP turned two.
- **OpenAI is testing Private Inference**, which uses confidential computing to protect business prompts while the model runs, with a small group of customers.
- **Midjourney launched Niji 8**, its new anime model, with an edit feature that brings back consistent characters.

**Today’s take:** MCP just went from “nice standard” to “the rule.” When Google says agents must come in through MCP and Anthropic keeps adding to it, the question for anyone wiring AI into their apps is no longer whether to use MCP, but which connectors you trust and what they cost at scale.

---

## Why is Google making AI agents use MCP to reach Gmail and Drive?

**Short answer:** Google wants every AI agent that touches Workspace data to come through its own governed door. On Nov 24, Google made **Workspace MCP servers** and the official **Workspace CLI** generally available. The Google-hosted MCP servers give cloud and web-based agents ready-made tools for **Gmail, Drive, Docs, Sheets, Slides, Calendar, Chat and Tasks** (Keep is coming soon). The CLI does the same for terminal-based agents in developer terminals, VMs and sandboxes.

The rule comes with it. Under a new **Workspace AI Tools Addendum**, AI agents or similar access tools must use MCP to access Workspace data instead of calling Workspace REST APIs directly. Technical enforcement begins **Feb 1, 2027**. From then, Google’s developer guide says agents calling REST APIs directly are limited to Standard tier quotas, whatever tier they pick.

| What changes | When | Who it hits |
|---|---|---|
| Workspace MCP servers + CLI generally available | Now (rolling out to all domains over ~2 weeks) | Anyone building or using AI agents on Workspace |
| Standard tier (free): up to **5,000** MCP requests/day, per project, per product | Now | Most developers (Google says over **99%**) |
| MCP requirement for AI agents | **Feb 1, 2027** | Agents and tools that call Workspace REST APIs directly |
| Scaled tier billing (Gmail, Calendar, Drive APIs + MCP servers) | **Apr 1, 2027** | Projects that need more than Standard limits |

Google’s developer guide adds that Scaled tier MCP usage for Gmail, Calendar and Drive has no daily free allowance and is billed from the first request. Admins get agent access controls, human-in-the-loop confirmation rules for sensitive actions (like reading external files or sharing data), automatic data loss prevention and agent audit logs. The Addendum also bars using agents to scrape Workspace APIs or to store certain derived data for long periods.

**Why it matters to you:** If you connect [Gemini](/tools/gemini/), [Claude](/tools/claude/) or an automation tool like [Zapier](/tools/zapier/), [n8n](/tools/n8n/) or [Make](/tools/make/) to Gmail, Drive or Calendar, how it connects is now set by Google. Light use stays free. Agents that call the REST APIs directly get capped from Feb 1, and heavy agent use can start costing money from Apr 1. New to the protocol? Start with [what MCP is](/blog/what-is-model-context-protocol-2026/).

**Sources:** [Google Workspace Updates](https://workspaceupdates.googleblog.com/2026/11/mcp-servers-cli-standardized-usage-tiers-now-available.html) · [Google for Developers: usage tiers and quotas](https://developers.google.com/workspace/guides/quota-usage-tiers) · [Workspace AI Tools Addendum](https://workspace.google.com/terms/ai-tools/)

---

## Can GPT-6 really design proteins on its own?

**Short answer:** Partly. In a Nov 24 preprint, OpenAI says its GPT-6 family can design new protein shapes and sequences using only reasoning and general-purpose code, without calling specialized biology models to generate the designs. Newer models improved on many of the **14** protein tasks tested.

With research partner Onava, OpenAI lab-tested small proteins built from 3D designs by a pre-released GPT-6.2. Of **322** minibinders against **5** targets, **35 (10.9%)** showed binding, including hits for PD-L1, a protein some cancers use to evade the immune system. Specialized models still supplied sequences and helped pick candidates. In an antibody docking test, the mean DockQ score rose from about **0.05** for GPT-5.6 to **0.57** for GPT-6.2 and **0.81** for an internal model.

**Why it matters to you:** General chat models are starting to do specialist science you can steer in plain English. But this is early lab evidence, not a medicine. OpenAI says binding is only one step and flags the misuse risk itself.

**Source:** [OpenAI](https://openai.com/index/gpt-6-models-demonstrate-intrinsic-protein-design-capabilities)

---

## How do Claude’s installable desktop apps work?

**Short answer:** You build a small tool as a Claude artifact, then click **Install as app**. It gets its own icon and window on Mac or Windows, can use Claude and your connectors, and updates when you edit the artifact. It’s rolling out in beta on all plans.

Apps can send notifications or sit in your menu bar or system tray. There are three permission levels: **default** (what a browser can do), **app permissions** (things like global shortcuts and notifications) and **full computer access** (run programs and read, change or delete files). Claude asks again after every update, and full access is only for apps you made or, on Team and Enterprise, apps from your organization. Anthropic doesn’t review apps, and app requests count toward your plan’s usage limits. Enterprise has it off until an owner turns it on.

**Why it matters to you:** It’s the easiest way yet to turn a Claude-built helper into a real desktop tool, with no packaging or API key. Keep full access for apps you trust, and see [Claude Pro vs. Max](/blog/claude-pro-vs-max-2026/) if usage limits are a worry.

**Sources:** [Claude (Anthropic)](https://claude.com/resources/articles/install-as-app) · [The Verge](https://www.theverge.com/ai-artificial-intelligence/1041882/anthropic-artifact-desktop-apps-mac-windows)

---

## What are Skills over MCP, Tasks and Elicitation in Claude?

**Short answer:** Three ways for the apps you connect to Claude to do more. **Skills over MCP** (public beta in Claude and Claude Code) lets a connector ship its own how-to guides alongside its tools, so Claude loads the right playbook only when needed. Shopify, HubSpot and Atlassian are early examples. It’s on by default for Pro, Max and Ultra, and available to Team once an admin enables it.

**Tasks** (now generally available) lets a server run long jobs in the background while Claude keeps working. **Elicitation** (also generally available) lets a server pause and ask you first, for example Supabase confirming costs before creating a paid project, or GitHub asking for a repository’s name before an agent deletes it. Anthropic says MCP now has over **700 million** monthly SDK downloads and over **10,000** connectors for Claude.

**Why it matters to you:** Connectors are getting smarter and safer: they can bring their own instructions and check with you before costly or destructive steps. If you use [Claude](/tools/claude/) or [Claude Code](/tools/claude-code/) with connectors, expect fewer prompts to set things up.

**Source:** [Claude (Anthropic)](https://claude.com/resources/articles/skills-over-mcp-tasks-and-more)

---

## What is OpenAI’s Private Inference?

**Short answer:** A way to keep a business’s prompts and replies protected even while the model is working on them. On Nov 25, Sam Altman said on X that OpenAI is testing Private Inference with a small group of customers. OpenAI labels it an alpha and says it uses confidential computing (sealed-off hardware) plus strict, verifiable controls. It joins Zero Data Retention with Private Safety Processing, which began rolling out in September, as part of OpenAI Private Intelligence.

**Why it matters to you:** If privacy rules have kept sensitive work off frontier AI, this is the piece to watch. For now it’s a small alpha with no date for wider access. Our guide to [writing an AI data retention policy](/blog/how-to-write-an-ai-data-retention-policy-with-ai-2026/) can help you decide what you’d send in the meantime.

**Sources:** [The Next Web](https://thenextweb.com/news/openai-private-inference-testing-customers) · [OpenAI Private Intelligence](https://openai.com/form/private-intelligence-interest/)

---

## What’s new in Midjourney’s Niji 8?

**Short answer:** It’s Midjourney’s new anime-focused model, built with Spellbrush and live since Nov 24 (type `--niji 8` in Discord or pick Niji 8 in the web Version menu). The Niji team calls it the fastest and most coherent Niji model yet, with better spatial prompt following, enough for simple comic pages. A new **edit** feature replaces Niji 6’s character reference, letting you pose the same character into new backgrounds. Short prompts now give more variety and longer prompts less. No benchmarks were published.

**Why it matters to you:** If you make anime-style art or comics in [Midjourney](/tools/midjourney/), consistent characters are back, but expect old prompts to give different results. Check costs in [Midjourney pricing explained](/blog/midjourney-pricing-explained-2026/).

**Sources:** [Niji Journey blog](https://nijijourney.com/blog/niji-8) · [Midjourney updates](https://www.midjourney.com/updates/announcements)

---

## What this means for you

If you have any AI agent, chatbot connector or automation touching Gmail, Drive or Calendar, list what it is and ask the vendor whether it uses Google’s Workspace MCP servers before Feb 1, 2027. Before you click “allow” on any connector or installed app, check what it can do on its own, and save full computer access for tools you built or fully trust. Teams with strict privacy rules can register interest in OpenAI’s alpha, but plan today’s work around the controls you already have.

- Get the basics first: [what the Model Context Protocol is](/blog/what-is-model-context-protocol-2026/).
- Picking a workflow tool for agents: [Make vs. n8n for AI](/blog/make-vs-n8n-for-ai-2026/).
- Which assistant fits your Google apps: [Gemini vs. ChatGPT for Google Workspace](/blog/gemini-vs-chatgpt-for-google-workspace-2026/).

---

*Education only. Prices, plans and availability can change; verify with the official sources above. Compare current model prices on our [models page](/models/) and browse the [AI tools directory](/tools/).*
