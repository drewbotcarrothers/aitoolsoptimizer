---
title: "What Is an AI Tool Circuit Breaker? (2026): One Tool Stops, the Others Stay"
description: "An AI tool circuit breaker stops calls to one failing tool while the model and the other tools stay eligible. A 2026 explainer. No uptime scores."
pubDate: "2026-10-24"
category: "automation-agents"
tags: ["circuit-breaker", "tools", "glossary", "agents"]
relatedTools: ["cursor", "claude", "zapier", "chatgpt"]
sample: false
draft: false
---

**An AI tool circuit breaker is a switch on one tool an agent may call: after a failure count you wrote for that tool, new calls to it stop, and the model may still answer or use the other tools.** Search can be open while the CRM tool is closed. The breaker in front of a whole model, which treats the model and a tool as one dependency, is [what an AI circuit breaker is](/blog/what-is-ai-circuit-breaker-2026/). This page is the per-tool switch inside an agent loop.

The clock on a single call, before any count is reached, is [what an AI tool timeout is](/blog/what-is-ai-tool-timeout-2026/). The list of tools the agent is allowed to name at all is [what an AI tool allowlist is](/blog/what-is-ai-tool-allowlist-2026/). The place a tool is allowed to run is [what an AI tool sandbox is](/blog/what-is-ai-tool-sandbox-2026/). Where the work goes after this tool is ineligible is [what an AI fallback chain is](/blog/what-is-ai-fallback-chain-2026/).

Prices are US list prices excluding tax from directory pages checked October 16, 2026. A live fetch of several vendor pricing pages returned HTTP 401 on October 24, 2026, so this page stays on the directory record. Published October 24, 2026. The directory does not list a tool-circuit-breaker fee. We did not measure failover time.

## One tool, three positions

| Position | This tool | The rest of the agent |
|---|---|---|
| Closed | Calls are allowed. Failures for this tool are counted | Other tools and the model follow their own switches |
| Open | New calls to this tool do not go out | The model may finish with the tools still closed-and-healthy, or with the error you named |
| Half-open | One probe to this tool is allowed after the cool-down | Everyone else stays on the open behavior for this tool until the probe succeeds |

```mermaid
flowchart TD
  step["The agent wants one named tool"] --> mine{"This tool's breaker?"}
  mine -->|Closed| call["Call that tool only"]
  call --> ok{"Success, by the error list you wrote?"}
  ok -->|Yes| reset["Reset this tool's failure count"]
  ok -->|No| count["Increment this tool only"]
  count --> trip{"At this tool's threshold?"}
  trip -->|Yes| open["Open this tool's breaker"]
  trip -->|No| call
  mine -->|Open| skip["Skip this tool. Leave the others eligible"]
  mine -->|Half-open| probe["Allow one probe of this tool"]
```

A timeout on search is not a timeout on email. If you share one counter across every tool, a flaky lookup will stop the refund tool that was healthy. Write one threshold, one window, and one cool-down per tool id.

A refusal the product intended, such as a policy block, is not a broken tool. Count transport failures, timeouts, and server errors. The same rule is on the model breaker. Apply it here so a safety refusal does not open the CRM.

## Where the switch is written

**The agent file.** [Cursor](/tools/cursor/) Plus is $8 a month, or $80 a year, when the breaker is code next to the tool client. You review the diff. A generated change that deletes one tool's counter and uses a global count is a defect. The ladder is [Cursor pricing explained](/blog/cursor-pricing-explained-2026/).

**The note that names the tools.** [Claude](/tools/claude/) Pro is $20 a month, or $17 billed annually, when the list of tool ids and thresholds is a short document a second person will read. The review is [Claude review](/blog/claude-review-2026/).

**A workflow that calls tools for you.** [Zapier](/tools/zapier/) Professional is $19.99 a month billed annually. Zapier's retries are Zapier's. A Zap that retries a failing search and also calls a second app can spend both. The invoice is [Zapier pricing explained](/blog/zapier-pricing-explained-2026/).

**A chat seat, which is not this switch.** [ChatGPT](/tools/chatgpt/) Plus is $20 a month. A person who stops clicking a broken plugin is already the breaker, informally. Software will keep calling the plugin unless you write the switch.

A prompt that holds the line:

"List a circuit breaker row for each tool id I pasted: threshold, window, cool-down, and the skip behavior. Do not merge tools onto one counter. If a tool id has no threshold, write Threshold missing and stop."

## What not to delegate

Do not let the model decide that a tool has recovered because the last sentence looked fine. Recovery is the probe you defined. Do not open every tool's breaker because one tool failed. The log should name the tool id, the position, and the error class. That field belongs with [structured logging for AI](/blog/what-is-structured-logging-for-ai-2026/).

## FAQ

### How is this different from a model circuit breaker?

The model breaker stops calls to a model or treats one dependency as the whole call. A tool breaker stops one tool id. The model can still run. The other tools can still run. You can have both: a breaker on the model, and a breaker on each tool it is allowed to call.

### Should every tool have the same threshold?

Only if they fail the same way. A search index and a payment tool should not share a number. Start from a failure you have already seen for that tool.

### What does the user see when one tool is open?

The behavior you wrote: a sentence that says that lookup is unavailable, or an answer from the tools that are still closed. A spinner until every tool recovers hides the switch.

### Does the allowlist replace this?

The allowlist says which tools may be named. The breaker says a named tool is temporarily ineligible because it is failing. A tool can be allowed and still open.

## Last verified

October 16, 2026 for Cursor, Claude, Zapier, and ChatGPT. No tool-circuit-breaker product fee is recorded in the directory. Published October 24, 2026.

**Sources:** [Cursor pricing](https://cursor.com/help/account-and-billing/pricing), [Claude pricing](https://claude.com/pricing), [Zapier pricing](https://zapier.com/blog/zapier-pricing/), [ChatGPT pricing](https://chatgpt.com/pricing/).

*Published by Andrew for [AI Tools Optimizer](https://aitoolsoptimizer.com).*

[Cursor](/tools/cursor/) is in the [coding directory](/tools/category/coding/). Directory pages may use affiliate links. A purchase through them may earn us a commission at no extra cost to you.
