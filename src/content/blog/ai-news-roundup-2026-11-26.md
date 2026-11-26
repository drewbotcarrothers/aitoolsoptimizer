---
title: "AI News Roundup – November 26, 2026"
description: "Today’s AI news: OpenAI fixes a GPT-6.2 billing mistake, so paid users hit limits 40% faster on Astra and 25% on Sol; FCC clears SpaceX’s 1 million AI satellites; Anthropic’s Rust API; Ant’s open Ming-Image; Obsidian in Claude and ChatGPT; Character.AI chat sale fight; New York’s AI toy ban."
pubDate: 2026-11-26T15:30:00-05:00
tags: ["ai-news"]
relatedTools: ["chatgpt", "openai-codex", "claude"]
sample: false
draft: false
---

## TL;DR

- **OpenAI fixed a GPT-6.2 billing mistake.** The same work now uses more of your plan: you’ll hit limits **40% faster on GPT-6.2 Astra** and **25% faster on Sol** than last week. Everyone on Go, Plus, Pro and Business gets **one banked reset** as an apology.
- **The FCC cleared SpaceX to deploy up to 1 million satellites** meant to work as solar-powered AI data centers in orbit.
- **Anthropic moved its Messages API from Python to Rust** with Claude doing much of the work: about **70% less CPU** per request and about **20% faster** median time to first token.
- **Ant Group open-sourced Ming-Image-0.2-Design**, a 6B image model under the MIT license that it says ranks **#1 among open-weight** text-to-image models.
- **Obsidian is now an official plugin in Claude** and is listed in ChatGPT’s plugin directory, so agents can work with your notes as plain files.
- **42 US state attorneys general are fighting Character.AI’s plan to sell** chat histories from more than **21 million** accounts in bankruptcy.
- **New York banned AI chatbot toys for five years**, starting 90 days after signing.

**Today’s take:** The quiet story of US Thanksgiving is the meter. A plan’s price can stay the same while what it buys changes overnight. If you pay for AI, “how far does my plan go?” is now as important as “which model is best?”

---

## Why will ChatGPT users hit GPT-6.2 limits sooner?

**Short answer:** OpenAI says it undercharged by mistake, and has now fixed it. Late on Nov 25 (US time), OpenAI’s head of Codex, Thibault Sottiaux, said on X that a billing mistake at the GPT-6.2 launch “incorrectly discounted GPT-6.2 Astra and Sol usage for most users.” With the fix, “the same work will use more of your plan’s usage allowance.”

| Model | Change vs. last week | Compared with older models |
|---|---|---|
| GPT-6.2 Astra | Limits reached **40% faster** | Should still go further than GPT-6 Astra |
| GPT-6.2 Sol | Limits reached **25% faster** | Should still go further than GPT-6.1 Sol |
| Other models | Not affected | — |

OpenAI won’t charge for the difference on past usage. As an apology, it’s adding **one banked reset** for everyone on **Go, Plus, Pro and Business**, and Sottiaux posted early Nov 26 that the reset is online. Both models launched on Nov 17. The Next Web reports that OpenAI’s pricing pages didn’t change, and that the fix lands as OpenAI starts having Chat and Work share one usage allowance for some Pro users (Instant chats stay unlimited, with a wider rollout planned for December).

**Why it matters to you:** If you lean on GPT-6.2 Astra or Sol in [ChatGPT](/tools/chatgpt/) or [Codex](/tools/openai-codex/), the same work now drains your plan sooner, at the same price. Save the banked reset for a heavy day, and send lighter tasks to a cheaper or Instant model. Our [ChatGPT pricing guide](/blog/chatgpt-pricing-explained-2026/) explains what each plan includes.

**Sources:** [Thibault Sottiaux on X](https://x.com/thsottiaux/status/2125784147889393806) · [Banked reset online (X)](https://x.com/thsottiaux/status/2125853628250599730) · [The Next Web](https://thenextweb.com/news/openai-billing-mistake-gpt-6-2-usage-limits) · [TechRadar](https://www.techradar.com/ai-platforms-assistants/chatgpt/weve-fixed-this-now-so-the-same-work-will-use-more-of-your-plans-usage-allowance-openai-admits-it-made-a-mistake-when-launching-gpt-6-2-and-now-paying-chatgpt-users-could-hit-their-usage-limits-up-to-40-percent-faster)

---

## Why did the FCC approve 1 million SpaceX satellites for AI?

**Short answer:** On Nov 25 the FCC conditionally authorized SpaceX’s **Starmind** orbital data center system: up to **1 million** satellites meant to run AI workloads on solar power. FCC Chairman Brendan Carr announced it on X. Under the license, deployment must start by **November 2033**, reach **10% (100,000)** by **November 2035** and **50%** by **November 2038**.

Amazon’s Kuiper, Viasat and the American Astronomical Society had asked the FCC to deny it. The FCC dismissed environmental and optical-astronomy concerns as outside its authority. The approval clears a regulatory hurdle, but it doesn’t show that data centers in orbit work technically or economically.

**Why it matters to you:** Nothing changes for your AI tools this year. It’s a long-term bet on where future AI compute (and power) comes from, and the timelines run into the 2030s.

**Sources:** [FCC order (PDF)](https://eu-assets.contentstack.com/v3/assets/blt23eb5bbc4124baa6/bltf4cdf2af47159e12/6b071c5f5506bb38bca5b0ec/FCC_report_and_order_on_SpaceX_Starmind_AI_constellation_11-25-2026.pdf) · [CNBC](https://www.cnbc.com/2026/11/25/spacex-fcc-satellite-approval.html) · [NBC News](https://www.nbcnews.com/science/space/spacex-fcc-authorizes-1-million-satellites-data-centers-space-rcna611341)

---

## How did Anthropic use Claude to rewrite its API in Rust?

**Short answer:** Claude wrote the code fast. The hard part was proving it was right. In a Nov 25 post, Anthropic says traffic to its Messages API, the way customers and its own apps like Claude Code and Cowork reach Claude, grew roughly **1,800x** from early 2024 to fall 2026. Claude wrote a first Rust version of the API’s core request path in **about a week**.

To trust it, Anthropic turned the live Python API into a checker: both versions handled production traffic, differences were grouped, and agents were sent to fix them. Public traffic moved to Rust in **September 2026**. The result uses about **70% less CPU** per request and cuts median time to first token by about **20%**, with no downtime and no freeze on new features.

**Why it matters to you:** If you use [Claude](/tools/claude/) or [Claude Code](/tools/claude-code/), this is part of why replies can start sooner. If you’re planning an AI-assisted migration, the lesson is to invest in checks first. Agents can write code quickly; proving it’s right is the real job.

**Source:** [Anthropic](https://www.anthropic.com/research/migrating-api-to-rust)

---

## What is Ant Group’s Ming-Image-0.2-Design?

**Short answer:** A free, open image model built for design work. On Nov 26, Ant Group’s Ant Ling team released **Ming-Image-0.2-Design** on Hugging Face under the **MIT license** (a **6B**-parameter model). It improves complex composition, lighting and text rendering, aimed at e-commerce hero images, UI design drafts and spatial renderings.

Ant says it ranks **#1 among open-weight models** on Artificial Analysis’s AA-Image-T2I v2.1 leaderboard with **1,095 Elo** (as of Nov 25). A companion **Design-Layer** model, which splits a design into editable layers down to a character’s parts, is planned to be open-sourced next week.

**Why it matters to you:** If you make mockups, product shots or thumbnails and can run models yourself, this is a commercially usable option that renders readable text. Compare it with hosted tools like [Ideogram](/tools/ideogram/) or [FLUX](/tools/flux/) in our [best AI image generators](/blog/best-ai-image-generators-2026/) guide.

**Sources:** [Ant Ling on X](https://x.com/AntLingAGI/status/2125916926048358827) · [Hugging Face model card](https://huggingface.co/inclusionAI/Ming-Image-0.2-Design)

---

## How do Obsidian’s new AI connectors work?

**Short answer:** They’re open-source skills that teach AI agents how to work with an Obsidian vault. Agents can write Obsidian-style Markdown, create Bases and Canvas files, search and edit notes through the Obsidian CLI, and sync or publish with Obsidian Headless. A Nov 25 release made Obsidian an official plugin in Claude, and Obsidian’s help pages also list it in ChatGPT’s plugin directory (it works in ChatGPT, Codex and Dots), plus Cursor, Grok Bot, Hermes and Kiro.

There’s a catch: the Markdown, Bases and Canvas skills only describe file formats. Searching or editing your vault through the CLI needs the desktop app running with the CLI turned on, and an agent that can run commands on your computer. The connectors send nothing on their own, but any note an agent reads goes to the AI model you use.

**Why it matters to you:** Your notes can become shared memory for several assistants while staying plain files you own. Point agents at a separate vault if your main one holds sensitive notes. For more ideas, see [the best AI tools for knowledge managers](/blog/best-ai-tools-for-knowledge-managers-2026/).

**Sources:** [Obsidian Help: Connectors](https://obsidian.md/help/connectors) · [obsidian-skills releases (GitHub)](https://github.com/obsidianmd/obsidian-skills/releases)

---

## Why are 42 states fighting Character.AI’s chat data sale?

**Short answer:** Because the chats are up for sale with no privacy strings attached. A bipartisan coalition of **42** US state attorneys general has objected in Delaware bankruptcy court to Character.AI’s plan to sell its platform and the private chat histories of more than **21 million** US accounts, more than **2.1 million** of them registered to minors.

The first bidder, Smirks and Pangs Acquisition LLC, offered **$10 million** and was formed just before Character.AI picked it. The AGs say the plan doesn’t require the buyer to honor existing privacy policies, gives users no way to delete their data and puts no limits on resale. The sale hearing is set for **Dec 3–4, 2026**.

**Why it matters to you:** Your chats with an AI app can become an asset that changes hands if the company fails. Before you share something sensitive with any chatbot, check whether you can export and delete your history, and do it for apps you no longer use.

**Sources:** [States’ objection (PDF)](https://coag.gov/app/uploads/2026/11/CharacterAI-objection-debtor-sale.pdf) · [California Attorney General](https://oag.ca.gov/news/press-releases/attorney-general-bonta-opposes-asset-sale-characterai-amid-child-safety-concerns) · [The Verge](https://www.theverge.com/policy/1042620/character-ai-sale-state-ags-block-selling-users-chats)

---

## What does New York’s AI chatbot toy ban cover?

**Short answer:** Talking toys that use the internet to chat with kids. On Nov 24, Governor Kathy Hochul signed a **five-year** moratorium on making, distributing and selling toys in New York with built-in AI chatbots, such as talking stuffed animals, dolls and robots. It takes effect **90 days** after signing, so it doesn’t cover this holiday season. Violations can cost up to **$15,000 per day**, enforced by the state Attorney General.

**Why it matters to you:** If you’re buying gifts anywhere, check whether a toy has an AI companion, what it records and whether it allows open-ended chat. Toy makers lose a big US market from early 2027.

**Sources:** [New York Governor’s office](https://www.governor.ny.gov/news/consumers-begin-their-holiday-shopping-season-governor-hochul-signs-five-year-ban-ai-chatbot) · [NBC News](https://www.nbcnews.com/tech/tech-news/new-york-governor-kathy-hochul-sign-ai-toy-ban-law-rcna610962)

---

## What this means for you

Treat your AI plan like a budget, not a flat fee: the price on the page can stay put while the work it covers shrinks, so check your usage meter after any model launch and keep heavyweight models for jobs that need them. At the same time, think about where your words end up. Notes you hand to agents and chats you leave in apps can travel further than you planned, so keep sensitive material in places you control and delete what you no longer need.

- Which plan gives you the most room: [ChatGPT Go vs. Plus vs. Pro](/blog/chatgpt-go-vs-plus-vs-pro-2026/).
- If you code with OpenAI’s agent: [OpenAI Codex pricing explained](/blog/openai-codex-pricing-explained-2026/).
- Compare model prices and context sizes side by side on our [AI models page](/models/).

---

*Education only. Prices, plans and availability can change; verify with the official sources above. Compare current model prices on our [models page](/models/) and browse the [AI tools directory](/tools/).*
