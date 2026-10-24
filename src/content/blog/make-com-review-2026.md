---
title: "Make.com Review (2026): Credits, Scenarios, and the $9 Core Plan"
description: "A 2026 Make.com review: how credits work, what Free and Core include, and when Zapier or n8n Cloud is the better automation tool."
pubDate: "2026-10-24"
category: "automation-agents"
tags: ["make", "automation", "review", "credits"]
relatedTools: ["make", "zapier", "n8n", "lindy", "manus"]
sample: false
draft: false
---

**[Make](/tools/make/) is a visual automation builder.** You draw a scenario, connect apps, and pay in credits. Free is 1,000 credits a month, with no time limit and no card. Core starts at $9/month billed annually for a 10,000-credit tier. Most module actions cost 1 credit. Routers and error handlers do not. That last rule is how a careful scenario stays cheap, and how a careless one does not.

The dollar figures are monthly equivalents with annual billing at the base 10,000-credit tier, taken from Make's comparison page and help center on October 16, 2026, because the pricing page did not fully render in that check. Monthly billing costs more. We did not run a load test, and we do not score reliability against Zapier.

## The plans at the base credit tier

| Plan | Annual price at 10,000 credits | What you are buying |
|---|---|---|
| Free | $0 for 1,000 credits/month | Learn. Unlimited in time. Scenarios stop when the credits stop |
| Core | From $9/month | The entry paid tier, from 10,000 credits and up |
| Pro | From $16/month | The step above Core at the same credit floor |
| Teams | From $29/month | A shared team at the same credit floor |
| Enterprise | Custom | A sales conversation |

Prices rise when you buy a larger credit tier. Core's published range in the help material we used runs well past 10,000 credits. The $9 figure is the floor, not a quote for a heavy scenario. Extra credits are sold in bundles of 1,000 or 10,000. Per 10,000 credits, Make documents 5 GB of data transfer, 10 MB of data storage, and a 667-item webhook queue.

> **Figure (credit diagram, not a product screenshot).** **Alt:** A trigger starts a Make scenario. Each action module spends about one credit. Routers and error handlers spend none. If credits hit zero, the scenario pauses. A parallel path shows Zapier billing tasks and n8n billing whole executions.

The three-way choice is [Zapier vs Make vs n8n](/blog/zapier-vs-make-vs-n8n/). A Cloud-only look at the developer option is [n8n Cloud review](/blog/n8n-cloud-review-2026/).

## How a scenario spends money

Make connects to 3,500+ apps, plus anything with an API. The canvas is the reason people leave a simpler tool: routers, iterators, aggregators, and filters are visible. They are also how you waste credits.

A worked example, using Make's own "usually 1 credit per action" rule. This is arithmetic, not an invoice from our account:

- A form trigger, an AI classification, a spreadsheet row, and a Slack message are four actions.
- At 1 credit each, 300 submissions are 1,200 credits.
- Free's 1,000 credits cover most of that month and then stop.
- Core's 10,000-credit floor covers it with room, at $9/month annual, **if** the AI step is also 1 credit. Make says some AI features use more. If the AI module costs more than 1, redo the math from the module's credit hint before you call $9 enough.

Filters should run before the expensive modules. Error handlers (Rollback, Break, Resume, Commit, Ignore) do not consume credits, so add them. They are not a luxury on a client scenario. Webhooks beat polling when the source can send one. Polling on a short interval is a quiet way to empty Free.

When credits run out, scenarios pause. Make notifies you around 75% and 90%, and it can queue incoming webhooks. Auto-purchasing extra credits is available on Core, Pro, and Teams. Turn that on only after you have seen a normal week. An uncapped auto-buy is how a loop becomes a bill.

## What to build first

1. Write the trigger, the fields, and the human approval on paper.
2. Build the path with no model call. If the row lands in the wrong sheet, an AI module will not fix the mapping.
3. Add one AI step with a fixed output: a category, or a three-bullet draft a person sends.
4. Run it once. Open each module's output.
5. Schedule it. Read credits after seven days. Then pick the tier that covers that count.

The model is a separate bill if you bring an API key. Make's $9 does not include [ChatGPT](/tools/chatgpt/). Budget both, and read the data policy on the model side before customer text flows through the scenario.

## When Make is the wrong canvas

| You need | Use |
|---|---|
| A non-technical teammate to ship one mainstream Zap this week | [Zapier](/tools/zapier/). Professional is $19.99/month annual for 750 tasks. See the comparison |
| A developer, per-execution pricing, or self-hosting | [n8n](/tools/n8n/) Cloud or Community Edition |
| An agent that "handles the inbox" without a diagram | [Lindy](/tools/lindy/) or [Manus](/tools/manus/). The agent review is [Manus AI review](/blog/manus-ai-review-2026/) |
| A meeting transcript | A notetaker first, then a scenario. [Best AI meeting notetakers](/blog/best-ai-meeting-notetakers/) |

Startups under 20 employees may qualify for 50% off Make's Business offering, and nonprofits can ask about a discount. Those are programs. They are not the $9 price.

## Fit at the prices we could print

|  | Free | Core from $9 | Pro or Teams |
|---|---|---|---|
| Learn the canvas | Strong | Strong | More than a first scenario |
| A few hundred simple runs | Often enough | Strong | Strong |
| Branching, filters, and error handlers | Yes, until credits end | Strong | Strong |
| A guaranteed cost before you know credits per run | Weak | Weak until you measure | Weak until you measure |
| Shared administration | No | No | Teams is the shared plan |
| Self-host for a data-residency rule | No | No | No. That is n8n |

## FAQ

### Is Make free?

Yes. Free includes 1,000 credits a month, does not expire as a trial, and does not require a card. Scenarios pause when the credits are gone.

### How much does Make cost?

At the base 10,000-credit tier with annual billing, Core starts at $9/month, Pro at $16/month, and Teams at $29/month. Larger credit tiers cost more. Monthly billing is higher. Confirm the tier on Make's pricing page. Our $9 figure comes from Make's own comparison and help center.

### Is Make cheaper than Zapier?

At the published entry tier, often on the sticker: $9 and 10,000 credits versus Zapier Professional at $19.99 for 750 tasks. A scenario that spends many credits per run can lose that advantage. Count operations for a week before you switch a working Zap.

## Last verified

October 16, 2026. The pricing page did not fully render. Recheck [Make's pricing page](https://www.make.com/en/pricing) for the credit tier you will actually buy.

**Sources:** [Make pricing](https://www.make.com/en/pricing), [Make vs Zapier](https://www.make.com/en/compare/make-vs-zapier), [Make help center on plan adjustments](https://help.make.com/upcoming-adjustments-to-plans-and-pricing).

[Make](/tools/make/) is in the [automation and agents directory](/tools/category/automation-agents/). Directory pages may use affiliate links. A purchase through them may earn us a commission at no extra cost to you.
