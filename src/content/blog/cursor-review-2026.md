---
title: "Cursor Review (2026): Plus at $8, Agents, and the Legacy-Plan Trap"
description: "A 2026 Cursor review of The X Subscription: Free, Plus, Premium, Super, and Ultra, what cloud agents include, and when Claude Code or Copilot is the clearer buy."
pubDate: "2026-10-24"
category: "coding"
tags: ["cursor", "ai-coding", "review", "x-subscription"]
relatedTools: ["cursor", "claude-code", "github-copilot", "openai-codex", "devin-desktop", "grok"]
sample: false
draft: false
---

**[Cursor](/tools/cursor/) is an AI code editor: Tab completions, Chat, and agents that can edit a repo, including cloud agents that build and test on their own machines.** New customers buy it through **The X Subscription**, which also covers [Grok](/tools/grok/). Plus is $8/month, or $80/year. That price is real. The usage multiple on the higher tiers ("4× Plus") is not a promise of a specific number of agent runs.

Prices are from Cursor's help center and the X Subscription docs, checked October 16, 2026, and they exclude tax. We did not benchmark Cursor against other coding agents. The head-to-head on scope is [Cursor vs Claude Code vs Codex](/blog/cursor-vs-claude-code-vs-codex-2026/).

## What the subscription includes

| Plan | Monthly | Annual | Included usage, as published |
|---|---|---|---|
| Free | $0 | $0 | Limited Agent, Chat, and Tab on Cursor models |
| Plus | $8 | $80 | Base |
| Premium | $30 | $300 | 4× Plus |
| Super | $100 | $1,000 | 15× Plus |
| Ultra | $200 | $2,000 | 50× Plus |
| Teams | $30, $100, or $200 per seat | — | Matches the seat |

The invoice is [Cursor pricing explained](/blog/cursor-pricing-explained-2026/).

Included usage is one pool for Grok models across Grok and Cursor. Third-party models inside Cursor draw extra credits. If you live on a non-Grok model, the $8 sticker is not your whole bill. Watch a week before you call Plus cheap.

> **Figure (product diagram, not a product screenshot).** **Alt:** One X Subscription feeds Grok and Cursor. Inside Cursor, Tab completes a line, Chat answers questions about the repo, and Agent edits files. Cloud agents run on their own machines. A warning box says a switch off a legacy Cursor plan is permanent.

**Legacy plans** still exist for people already subscribed: Hobby (free), Pro ($20), Pro+ ($60), Ultra ($200), Teams Standard ($40/user), and Teams Premium ($120/user). Cursor's help center says moving from a legacy plan to The X Subscription is optional and permanent, with a prorated refund of the old plan. Do not switch a legacy Pro seat to "try" Plus unless you accept that you cannot go back. Premium, at $30, is the published comparable tier for that old Pro seat, with 4× Plus usage. Comparable does not mean identical.

## What you use it for

Cursor is a desktop editor in the VS Code family, plus a CLI, Slack, GitHub pull-request review, and an iOS app. The daily loop for a developer is:

1. Open the repo. Import VS Code settings if you are coming from that editor.
2. Let Tab handle the next edit while you type.
3. Ask Chat how a file works before you ask an agent to change it.
4. Hand Agent a small task with the test command in the prompt.
5. Read the diff. Run the tests. Reject what you cannot explain.

Cloud agents are the step up: they build and test on their own computers so you review a result instead of approving every keystroke. They are still a review step. An agent that opens a pull request has not replaced the person who merges it.

The old Auto router was split into **Cost**, **Balance**, and **Intelligence** modes. Those names are the product's own tradeoff between price and capability when Cursor picks models. Pick Cost while you learn the bill. Pick Intelligence when a task failed because the router was too thrifty, not because the prompt was vague.

Enterprise features called out for larger teams include pooled usage, SCIM, audit logs, and invoice billing. A solo Plus seat does not include that list. Cursor Router is aimed at Teams and Enterprise.

## Who should pay, and who should not

**Pay for Plus** when you already write code most days, Free's limit is the thing that stopped a task, and you are willing to share a subscription identity with Grok. **Pay for Premium** when a measured week of Plus ran out, or when you are comparing it with a legacy Pro renewal you intend to leave for good. **Do not buy Super or Ultra** from the name. Buy them when the usage page says the smaller pool is the blocker.

Do not buy Cursor for these jobs:

| You need | Use instead |
|---|---|
| A terminal-first agent on a Claude subscription | [Claude Code](/tools/claude-code/). The beginner path is [Claude Code for beginners](/blog/claude-code-for-beginners-2026/). Capacity is [Claude Pro vs Max](/blog/claude-pro-vs-max-2026/) |
| Coding inside a ChatGPT plan | [Codex](/tools/openai-codex/), on Plus at $20. See [ChatGPT Go vs Plus vs Pro](/blog/chatgpt-go-vs-plus-vs-pro-2026/) |
| The cheapest GitHub-native seat | [GitHub Copilot](/tools/github-copilot/) Pro at $10/user/month |
| Several model vendors in one IDE | [Devin Desktop](/tools/devin-desktop/) Pro at $20/month |
| An app from a prompt, without owning the code | [Lovable, Bolt, or Replit](/blog/lovable-vs-bolt-vs-replit/) |

Stacking Cursor on top of Claude Pro and ChatGPT Plus is three coding surfaces. The reason to keep one is [which AI subscription is worth paying for](/blog/which-ai-subscription-is-worth-paying-for/).

## Fit, from the price sheet

|  | Free | Plus $8 | Premium $30 | Super or Ultra |
|---|---|---|---|---|
| Learn Tab and Chat | Strong | Strong | More than a first week | No |
| A known number of agent runs | Not published | Not published | "4× Plus" only | A larger multiple, still not a count |
| Grok included in the same subscription | Limited | Yes, shared pool | Yes | Yes |
| Third-party models at no extra credit cost | No | No | No | No |
| Admin, SCIM, pooled usage | No | No | No. That is Enterprise | Teams seats exist at $30 / $100 / $200. Enterprise is separate |
| Safe to switch into from legacy Pro | — | Only if you accept a one-way move | The documented comparable tier, still one-way | One-way |

## FAQ

### Is Cursor free?

Yes. Free includes limited Agent, Chat, and Tab on Cursor models. It is enough to see the editor. It is not a team plan.

### What happened to Cursor Pro at $20?

It is a legacy plan. Existing subscribers can keep it. New customers use The X Subscription. Switching off legacy is permanent. Premium at $30/month is the published comparable tier.

### Does Plus include unlimited coding?

No. Plus is the base usage pool. Premium, Super, and Ultra are multiples of that pool. The help center does not translate "4× Plus" into a number of requests. Third-party models draw extra credits on top.

## Last verified

October 16, 2026.

**Sources:** [Cursor pricing](https://cursor.com/help/account-and-billing/pricing), [Cursor](https://cursor.com), [X Subscription pricing](https://docs.x.ai/x-subscription/pricing).

[Cursor](/tools/cursor/) is in the [coding directory](/tools/category/coding/). Directory pages may use affiliate links. A purchase through them may earn us a commission at no extra cost to you.
