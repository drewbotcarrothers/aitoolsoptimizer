---
title: "n8n Cloud Review (2026): Starter, Pro, and Executions in Euros"
description: "A 2026 review of n8n Cloud: what an execution costs, Starter versus Pro, and when self-hosting or Make is the better automation buy. Prices left in euros."
pubDate: "2026-10-24"
category: "automation-agents"
tags: ["n8n", "n8n-cloud", "automation", "review"]
relatedTools: ["n8n", "make", "zapier", "lindy", "manus"]
sample: false
draft: false
---

**[n8n Cloud](/tools/n8n/) hosts n8n for you and bills by workflow execution, not by step and not by user.** Starter is €20/month billed annually for 2,500 executions. Pro is €50/month billed annually for 10,000. Annual billing saves 17%. This review leaves those prices in euros, because that is the currency the pricing page displayed on October 16, 2026. We are not converting them into a guessed dollar amount.

n8n Cloud is the managed product. The free **Community Edition** is self-hosted, which is a different job. The Business tier in the same price table is also self-hosted. Do not "upgrade" from Pro to Business expecting another cloud invoice at €667. Read the hosting line.

## Cloud plans you can actually buy as hosting

| Plan | Annual price we were shown | Executions / month | Cloud? | What else is listed |
|---|---|---|---|---|
| Community Edition | Free, your server | You host it | No | Self-host. You patch, back up, and watch the disk |
| Starter | €20/month | 2,500 | Yes | 1 shared project, 5 concurrent executions, 1,600 Assistant credits. Trial, no card |
| Pro | €50/month | 10,000 | Yes | 3 shared projects, up to 50 concurrent executions, 7 days of insights, up to 9,600 Assistant credits, admin roles, workflow history |
| Business | €667/month | 40,000 | No. Listed as self-hosted | 6 shared projects. A large jump, and a hosting change |
| Enterprise | Custom | Custom | n8n-hosted or self-hosted | Unlimited projects, higher concurrency, longer insights, SLA |

Every plan in the table includes unlimited users, unlimited workflows, and every integration. You do not pay per seat to add a teammate. You pay when executions run out, or when you need Pro's admin and history features.

> **Figure (hosting diagram, not a product screenshot).** **Alt:** A workflow runs once and counts as one execution no matter how many nodes it has. Starter and Pro are n8n Cloud. Community Edition is free on your server. Business in this price table is self-hosted, not the next cloud tier. Make and Zapier sit to the side as per-credit and per-task tools.

The comparison with those tools is [Zapier vs Make vs n8n](/blog/zapier-vs-make-vs-n8n/). Make's credit math, if the canvas is what you wanted, is [Make.com review](/blog/make-com-review-2026/).

## What an execution means for the bill

An execution is one full run of a workflow, from the trigger to the end, however many AI nodes sit inside it. A 12-step workflow that classifies a ticket, writes a draft, and posts it to Slack is 1 execution. The same shape on a per-task tool can be several tasks. That is the reason technical teams pick n8n for fat scenarios.

Starter's 2,500 executions are 2,500 runs, not 2,500 steps. At one run per customer email, that is 2,500 emails in a month. At a run every 5 minutes from a poll, that is 8,640 runs, which does not fit in Starter or Pro. Polling is the expensive habit. Use a webhook or a slower schedule.

AI agents, MCP, and AI nodes are included on all plans. Starter includes 1,600 Assistant credits. Pro goes up to 9,600. n8n also describes access to AI models without bringing your own API key. If you connect your own model account anyway, that vendor's bill is separate. [ChatGPT](/tools/chatgpt/) Plus is a poor place to hide an unattended workflow. Use an API or a business plan whose data terms you have read.

## How to try Cloud without adopting a server

1. Start the Cloud trial. The pricing page described it as card-free.
2. Import one workflow you can explain: a webhook or a form, a transform, and one destination.
3. Run it on test data. Pin that data while you edit, so you are not burning executions on the same payload.
4. Activate it for seven days. Divide executions by days. Multiply by 30.
5. If the month fits in 2,500 with room for retries, Starter is the documented match. If it fits in 10,000 and you need admin roles or history, Pro is the match. If the number is higher, you are in an Enterprise conversation or a design problem, not a casual upgrade to the €667 self-hosted Business line.

Self-host Community Edition when a security review wants the data on your network and someone will own Docker, upgrades, and backups. That labor is the price of free. Do not self-host to save €20 and then ignore updates.

Startups under 20 employees may qualify for 50% off Business. That discount, if you get it, applies to a self-hosted commercial tier. It does not turn Business into Cloud Starter.

## When Cloud is the wrong product

| You need | Use |
|---|---|
| A visual tool a non-developer will maintain, in dollars | [Make](/tools/make/) Core from $9/month annual, or [Zapier](/tools/zapier/) |
| The data on your own server and a person to run it | n8n Community Edition, not Cloud |
| 40,000 executions and you will self-host | The Business line, after you confirm it is still the self-hosted SKU |
| An agent with no workflow diagram | [Manus](/tools/manus/) or [Lindy](/tools/lindy/). See [Manus AI review](/blog/manus-ai-review-2026/) |
| A coding agent in a repository | [Claude Code](/tools/claude-code/) or [Cursor](/tools/cursor/). n8n is the automation around the software, not the IDE |

## Fit for a Cloud buyer

|  | Trial / Starter | Pro | Not Cloud |
|---|---|---|---|
| Hosted, no Docker | Strong | Strong | Community and Business, as listed |
| 2,500 full runs a month | Starter | More than you need | |
| Admin roles, history, longer insight | No | Yes | Enterprise if Pro is still small |
| Unlimited users on the workflow | Yes | Yes | Yes, including self-hosted |
| A USD price in this article | Not printed. The page showed euros | Not printed | Not printed |
| Pay per step | No. Per execution | No | No |

## FAQ

### Is n8n Cloud free?

Cloud has a free trial without a card. The ongoing free product is the self-hosted Community Edition, not a permanent free cloud tier in the price table we saw. Starter is €20/month billed annually.

### Why are the prices in euros?

That is the currency n8n's pricing page displayed in our October 16, 2026 check. Your checkout may differ. This article does not invent a dollar conversion. Confirm the currency on [n8n's pricing page](https://n8n.io/pricing/) before you buy.

### Is Business the upgrade after Pro?

Not as a cloud seat. In the table we checked, Business at €667/month annual is self-hosted, at 40,000 executions. Pro is the higher Cloud plan at €50/month annual for 10,000 executions. Enterprise is the custom tier that can be hosted by n8n.

## Last verified

October 16, 2026. Recheck the pricing page for currency, the Cloud label on each tier, and the execution cap before you subscribe.

**Sources:** [n8n pricing](https://n8n.io/pricing/), [n8n](https://n8n.io).

[n8n](/tools/n8n/) is in the [automation and agents directory](/tools/category/automation-agents/). Directory pages may use affiliate links. A purchase through them may earn us a commission at no extra cost to you.
