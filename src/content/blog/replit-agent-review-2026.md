---
title: "Replit Agent Review (2026): Lite Build, Full Build, and Unpublished Prices"
description: "A 2026 review of Replit Agent: what Starter, Core, and Pro include, Lite versus Full build, and why this article does not invent a Core price."
pubDate: "2026-10-24"
category: "coding"
tags: ["replit", "replit-agent", "app-builder", "review"]
relatedTools: ["replit", "lovable", "bolt-new", "v0", "cursor", "claude-code"]
sample: false
draft: false
---

**[Replit Agent](/tools/replit/) builds an app from a description inside a cloud IDE, then publishes it.** Starter is free and includes Lite build, daily Agent credits up to a monthly cap, and one published app that comes down after 30 days. Full build, external connectors, and Plan Mode require Core or Pro. **We could not confirm Core or Pro dollar prices**, because Replit's pricing page did not load during the October 16, 2026 check. This review will not invent them.

What follows is from Replit's billing docs, not from a scored bake-off against Lovable or Bolt.

## What Agent is

You describe the app. Agent plans it, writes code, can set up storage and a database, and publishes to a URL. You can open the files and edit them. That last sentence is the difference between a demo and a product you can keep: someone still has to read the code before real users or payments depend on it.

Two build modes are documented:

- **Lite build** is the faster, narrower mode for quick edits. It is on every plan, including Starter.
- **Full build** lets Agent work with more autonomy. It requires Core or Pro.

**Plan Mode**, on Core, is for brainstorming without edits to code or data. **Design Canvas** can produce a design on the lower path. Turning that design into an app with backend behavior requires Core. External connectors, including Google and Stripe, require Core. Replit AI Integrations require Core.

> **Figure (agent diagram, not a product screenshot).** **Alt:** A prompt enters Replit Agent. Starter can answer with Lite build and one published app that expires after 30 days and carries a Made with Replit badge. Core and Pro unlock Full build, connectors, and Plan Mode. The price box for Core and Pro says "see replit.com/pricing," because that page did not load for our check.

The three-way builder comparison, with the prices we could confirm for the other two, is [Lovable vs Bolt vs Replit](/blog/lovable-vs-bolt-vs-replit/). When a developer should take the repo into an editor, use [Cursor review](/blog/cursor-review-2026/) or [Claude Code for beginners](/blog/claude-code-for-beginners-2026/).

## What each plan includes, without fake prices

| Plan | Price | What the docs list |
|---|---|---|
| Starter | Free | Daily Agent credits up to a monthly cap, monthly cloud credits, Lite build, one published app. The app is taken down after 30 days and shows a Made with Replit badge |
| Core | See the pricing page. Monthly or annual exists. We do not have a confirmed USD figure | Monthly credits for Agent, publishing, databases, and AI Integrations. Full build, external connectors, Plan Mode, badge removal, up to 5 collaborators |
| Pro | See the pricing page. Tiered. We do not have a confirmed USD figure | Tiered credits with 2-month rollover, up to 15 builders, pooled credits, no per-seat fees, 10 parallel Agent tasks, collaborative Workspaces, priority support |

A later read of the pricing page, with the label caveat, is [Replit Agent pricing explained](/blog/replit-agent-pricing-explained-2026/).

Credits cover Agent work, publishing, network transfer, database storage, and AI Integrations. Usage past the included credits is billed on Core and Pro. Replit's docs say those charges accumulate until they cross an invoice threshold that starts at $50 and can grow to $250. Credit packs exist, with discounts at larger sizes. A free Starter balance is not a promise that a Full-build app will stay inside a price you have not been shown.

Do not quote a Core price from memory, from an ad, or from this article. Open [Replit's pricing page](https://replit.com/pricing) and read the number next to the button you are about to press.

## How to judge Agent in an afternoon

1. Sign up on Starter. Describe one small app: who it is for, which pages exist, and what "done" means. Leave Stripe out. Connectors are a Core feature, and payments are a bad first test.
2. Let Lite build run. Read the files it wrote. Click the preview.
3. Ask for one change. Watch whether the credit counter moves in a way you could multiply by 20 attempts.
4. Publish only if you accept the 30-day takedown and the badge. A link you send to a customer is not a Starter deliverable.
5. If the app is worth keeping, price Core on Replit's site that day. Compare that number with [Lovable](/tools/lovable/) Pro, which starts at $25/month for 100 credits, and [Bolt.new](/tools/bolt-new/) Pro, from $25/month. Those two prices were visible on October 16, 2026. Replit's was not. A comparison that pretends otherwise is how people overpay.

[v0](/tools/v0/) by Vercel is the narrower alternative when you need a React or Next.js interface, not a hosted product. Plus is $30/user/month.

## Where Agent is the right shape

- A founder who wants a live URL and a real codebase in the same browser tab.
- An internal tool a teammate will keep editing, once Core's collaborator count or Pro's pool matches the team.
- A student who will read the code Agent wrote. Starter is enough for that lesson. It is not enough for a public product you intend to leave up.

## Where it is the wrong shape

- You will not read code, and you want the cheapest confirmed monthly price. Price Lovable or Bolt first, because their entry paid prices were published.
- The app already lives in a git repo on your laptop. Use Cursor or Claude Code. Agent's advantage is the hosted environment, not a better diff.
- You need a native mobile app, a compliance review, or a stable production database with an owner. A generated MVP is a start. It is not that system.
- You want an unattended business process. That is [Zapier vs Make vs n8n](/blog/zapier-vs-make-vs-n8n/), not an app builder.

## Fit, with the price gap left blank on purpose

|  | Starter | Core | Pro |
|---|---|---|---|
| See Agent build something | Strong | Strong | Strong |
| Leave the app online | 30 days, with a badge | Badge removal is listed | Listed, with a team workspace |
| Stripe, Google, or other connectors | No | Yes | Yes |
| Full build | No | Yes | Yes |
| A dollar figure we could print | $0 | Not confirmed | Not confirmed |
| Predictable overage | Free cap, then you stop or upgrade | Invoiced past a threshold from $50 | Same idea, with rollover credits |

## FAQ

### Is Replit Agent free?

Starter is free and includes Lite build, daily Agent credits up to a monthly cap, and one published app that is removed after 30 days. Full build is not on Starter.

### How much is Replit Core?

We do not know from a page we could load on October 16, 2026. Replit's docs point to the pricing page for current Core pricing, monthly or annual. Use that page. Do not use a number this article refused to guess.

### What is the difference between Lite and Full build?

Lite is the quicker mode for targeted edits, on all plans. Full build gives Agent more room to work on its own and requires Core or Pro.

## Last verified

October 16, 2026, from Replit's billing documentation. The pricing page did not load, so dollar amounts for Core and Pro are intentionally absent.

**Sources:** [Replit billing](https://docs.replit.com/category/billing), [Plans](https://docs.replit.com/billing/plans), [Replit Core](https://docs.replit.com/billing/plans/replit-core), [Replit Pro](https://docs.replit.com/billing/plans/replit-pro), [Replit pricing](https://replit.com/pricing).

[Replit](/tools/replit/) is in the [coding directory](/tools/category/coding/). Directory pages may use affiliate links. A purchase through them may earn us a commission at no extra cost to you.
