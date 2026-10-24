---
title: "What Is an AI Model Routing Rule? (2026): One Condition, One Model Id"
description: "A model routing rule is one row: a condition you wrote, the model id it selects, and what happens if that model cannot run. A 2026 explainer. No routing scores."
pubDate: "2026-10-24"
category: "automation-agents"
tags: ["routing", "models", "glossary", "governance"]
relatedTools: ["claude", "chatgpt", "cursor", "notion-ai"]
sample: false
draft: false
---

**An AI model routing rule is one row a person writes before traffic arrives: the condition, the model id that condition selects, and the action if that model cannot run.** A blank action means the request stops. The component that reads the row is [what an AI model router is](/blog/what-is-ai-model-router-2026/). Sending work to a model, a queue, or a batch before it starts is [what AI routing is](/blog/what-is-ai-routing-2026/). The table of backups across tasks is [what an AI model fallback matrix is](/blog/what-is-ai-model-fallback-matrix-2026/).

This page is one rule. A router with no rows is a default. A default that always picks the most expensive model is still a rule. Write it down so someone can turn it off.

Claude's prices are from claude.com/pricing on October 24, 2026. ChatGPT Plus is $20 a month on learn.chatgpt.com/docs/pricing that day. Notion and Cursor prices are from directory pages checked October 16, 2026. Published October 24, 2026. We did not score routing. The directory does not list a routing-rule fee.

## What the row contains

| Column | Who fills it | A blank cell means |
|---|---|---|
| Condition | You, in words a log can match | The rule never fires |
| Model id | You | The router may not guess a model |
| If that model cannot run | Stop, or the fallback id you named | Stop. Do not invent a cheaper model |
| Owner | A person | Nobody can retire the rule |

```mermaid
flowchart TD
  req["A request arrives with the labels you already set"] --> match{"Does one rule's condition match?"}
  match -->|No| default["Use the default rule, which is also a row"]
  match -->|Yes| call["Call the model id on that row"]
  call --> up{"Did that model run?"}
  up -->|Yes| done["The rule is finished. Do not hop to a second model for a nicer answer"]
  up -->|No| fb{"Does the row name a fallback id?"}
  fb -->|Yes| call2["Call that id only"]
  fb -->|No| stop["Stop and record the rule id"]
```

Two rules that both match are a bug in the table, not a vote. Put a priority on the row, or make the conditions exclusive. The spend cap on the call itself is [what an AI request budget is](/blog/what-is-ai-request-budget-2026/). A routing rule does not raise that cap.

## Where the row is kept

**The wording of the condition.** [Claude](/tools/claude/) Pro is $17 a month billed annually, $200 up front, or $20 monthly. Keep the approved verbs in a Project: task label, context size, budget still left. The review is [Claude review](/blog/claude-review-2026/).

**One draft row from fields you paste.** [ChatGPT](/tools/chatgpt/) Plus is $20 a month. Discard a row that adds a model id you did not paste. The ladder is [ChatGPT pricing explained](/blog/chatgpt-pricing-explained-2026/).

**The table.** [Notion AI](/tools/notion-ai/) Business is $20 a seat a month. One database, with the columns above. Plus at $10 is not the full AI tier. The invoice is [Notion AI pricing explained](/blog/notion-ai-pricing-explained-2026/).

**The check in the repo, if the router reads a file.** [Cursor](/tools/cursor/) Plus is $8 a month, or $80 a year. You review the diff that reads the rule id. The ladder is [Cursor pricing explained](/blog/cursor-pricing-explained-2026/).

A prompt that holds the line:

"Add a routing rule from the condition, the model id, the fallback action, and the owner I pasted. If the model id is missing, write Model not set. Do not mark a fallback unless I named the id."

## What not to delegate

Do not let the model pick a model because the prompt looks hard. Do not leave the fallback cell as "a similar model." Do not delete a rule to hide a bad route. Mark it retired, with the date, and keep the id the logs used.

## FAQ

### How is a routing rule different from a router?

The router is the thing that reads rows at request time. The rule is one row. You can draft a rule in a doc before any router exists. You should not run traffic on a router whose rows are still drafts.

### How is this different from a fallback matrix?

The matrix is the backup plan across tasks. One routing rule may point at one cell of that matrix. The matrix does not fire by itself. The rule's condition is what fires.

### How is this different from AI routing as a practice?

Routing is the habit of choosing a model, a queue, or a batch before work starts. A rule is the sentence that makes one of those choices repeatable. A chat box with no rule is still routing. It is routing you cannot audit.

### Who may change the model id?

The owner on the row. A shared login has no owner. If the owner leaves, the rule stops matching until a new owner is named. Do not leave a live model id on a row with Owner not set.

## Last verified

October 24, 2026 for Claude and for ChatGPT's plan page. October 16, 2026 for Notion and Cursor. Published October 24, 2026.

**Sources:** [Claude pricing](https://claude.com/pricing), [ChatGPT and Codex pricing](https://learn.chatgpt.com/docs/pricing), [Notion pricing](https://www.notion.com/pricing), [Cursor pricing](https://cursor.com/help/account-and-billing/pricing).

*Published by Andrew for [AI Tools Optimizer](https://aitoolsoptimizer.com).*

[Claude](/tools/claude/) is in the [chatbots and assistants directory](/tools/category/chatbots-assistants/). Directory pages may use affiliate links. A purchase through them may earn us a commission at no extra cost to you.
