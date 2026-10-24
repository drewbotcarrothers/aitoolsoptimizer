---
title: "What Is an AI Tool Call Budget? (2026): A Count That Stops the Agent"
description: "An AI tool call budget is a cap on how many tool calls one task may make. A 2026 explainer. No agent scores."
pubDate: "2026-10-24"
category: "automation-agents"
tags: ["tools", "budget", "agents", "glossary"]
relatedTools: ["cursor", "claude-code", "github-copilot", "claude"]
sample: false
draft: false
---

**An AI tool call budget is a number you set for how many tool calls one task may make. When the count reaches that number, the agent stops and asks a person, even if it still has ideas.** It is not a token cap, and it is not a dollar cap. The dollar and request caps live in [what an AI request budget is](/blog/what-is-ai-request-budget-2026/). A retry that spends the same tool again is [what an AI retry budget is](/blog/what-is-ai-retry-budget-2026/). The yes before a single call is [what an AI tool permission prompt is](/blog/what-is-ai-tool-permission-prompt-2026/).

Cursor, GitHub Copilot, and Claude Code seat notes below use the October 16, 2026 directory cards, except Claude's plan price, which is from claude.com/pricing on October 24, 2026. Published October 24, 2026. We did not count calls in a lab. The directory does not list a separate tool-call-budget SKU.

## What the budget counts

| You count | You do not count it as | When you hit the number |
|---|---|---|
| Each tool invocation in the task | A token | Stop. Show the calls already made |
| A retry of the same tool | Free, unless your retry budget says otherwise | The retry budget and this budget both apply |
| A call a person pre-approved | Unlimited | Pre-approval is a rule with a scope, not an infinite count |
| A call the model only described | A tool call | Description is not execution. Do not decrement for a sentence |

```mermaid
flowchart TD
  task["A task with a tool-call budget"] --> call["The agent proposes one call"]
  call --> allow{"Is the tool allowed, and is a person yes still required?"}
  allow -->|Blocked| stop["Do not run it"]
  allow -->|Allowed| count{"Is the count still under the budget?"}
  count -->|Yes| run["Run it. Increment the count"]
  count -->|No| ask["Stop and ask a person. Do not take a cheaper tool to sneak past the cap"]
```

A budget of "as many as it needs" is not a budget. Write the integer on the task: eight calls, or twenty, or whatever you will still review. A migration that needs more is a new task with a new number, not a silent raise. How long one call may run is [what an AI tool timeout is](/blog/what-is-ai-tool-timeout-2026/). A timeout and a count can both fire. Either one is enough to stop.

## Where the count matters

**The editor agent.** [Cursor](/tools/cursor/) Plus is $8 a month, or $80 a year, on the October 16 card. Agent mode is where a missing cap turns one ticket into a pile of edits. You still read the diff. The ladder is [Cursor pricing explained](/blog/cursor-pricing-explained-2026/).

**The terminal agent.** [Claude Code](/tools/claude-code/) is included with paid Claude plans. Pro is $17 a month billed annually, $200 up front, or $20 monthly, on the October 24 page. The October 24 page says Claude Code shares the plan's usage with chat. That shared pool is not a tool-call count. You still set the count. The review is [Claude Code review](/blog/claude-code-review-2026/).

**The IDE assistant.** [GitHub Copilot](/tools/github-copilot/) Pro is $10 a user a month on the October 16 card. Business is $19 a user a month. A personal seat does not set your company's call cap. The invoice is [GitHub Copilot pricing explained](/blog/github-copilot-pricing-explained-2026/).

**The sentence that states the cap.** [Claude](/tools/claude/) Pro is the same seat as above when you only need the policy sentence. The sentence is not the enforcer.

A prompt that holds the line:

"You may make at most the number of tool calls I wrote. When you reach it, stop and list the calls you made. Do not switch tools to continue. Do not raise the number."

## What not to delegate

Do not let the model pick the budget after it has started. Do not reset the count because a call returned an error you have not read. Do not treat a token budget as a substitute. A short call can still be the wrong file.

## FAQ

### How is this different from a request budget?

A request budget is the spend or the number of model requests you will allow. A tool-call budget is the number of tool invocations inside one task. You can be under the dollar cap and over the call cap. Stop on the first cap you hit.

### How is this different from a retry budget?

The retry budget limits repeats of a failing call. The tool-call budget limits the task's total calls, including successful ones. A retry spends both if you count it in both. Write that down so the two numbers do not surprise you.

### Does a permission prompt replace the budget?

No. The prompt is the yes for one call. The budget is how many yeses this task may collect. Ten approvals can still be too many if the cap was three.

### Who may raise the number?

The owner of the task. The agent's claim that it is "almost done" is not a raise. A new number is a new line a person writes.

## Last verified

October 24, 2026 for Claude and for Claude Code's inclusion on paid plans. October 16, 2026 for Cursor and GitHub Copilot. No tool-call-budget fee is recorded in the directory. Published October 24, 2026.

**Sources:** [Cursor pricing](https://cursor.com/help/account-and-billing/pricing), [Claude pricing](https://claude.com/pricing), [Claude Code](https://claude.com/product/claude-code), [GitHub Copilot](https://github.com/features/copilot).

*Published by Andrew for [AI Tools Optimizer](https://aitoolsoptimizer.com).*

[Cursor](/tools/cursor/) is in the [coding directory](/tools/category/coding/). Directory pages may use affiliate links. A purchase through them may earn us a commission at no extra cost to you.
