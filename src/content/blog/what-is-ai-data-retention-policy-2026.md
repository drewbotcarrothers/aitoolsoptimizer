---
title: "What Is an AI Data Retention Policy? (2026): How Long the Prompt Stays"
description: "An AI data retention policy is the written rule for how long prompts, outputs, files, and logs are kept, and who deletes them. A 2026 explainer."
pubDate: "2026-10-24"
category: "automation-agents"
tags: ["retention", "glossary", "privacy", "policy"]
relatedTools: ["notion-ai", "chatgpt", "claude", "perplexity"]
sample: false
draft: false
---

**An AI data retention policy is the written rule for how long prompts, model outputs, uploaded files, and logs are kept, who can read them, and who deletes them.** The policy is a document a person signs. A vendor setting is one input to it. A chat that "remembers" you is a different feature: [what AI memory is](/blog/what-is-ai-memory-2026/). Which source became an answer is [what AI data lineage is](/blog/what-is-ai-data-lineage-2026/). Keeping one customer's rows away from another's is [what AI multi-tenancy is](/blog/what-is-ai-multi-tenancy-2026/).

This page does not invent a retention window a vendor did not publish. Where the directory records a vendor's own words, the date of that record is below. Your counsel reads the contract. This page is the list of decisions the policy has to name.

Prices are US list prices excluding tax from directory pages checked October 16, 2026. Published October 24, 2026. We did not audit any vendor's logs.

## What the policy has to name

| Item | The decision | A gap looks like |
|---|---|---|
| Prompts and outputs | How long they stay in the product, and in your own export | "We keep them until we don't" |
| Files the user uploaded | Whether the file outlives the chat | A deck still sitting in a personal account after the employee left |
| Logs and eval rows | A shorter or longer clock than the chat, on purpose | Test data with production secrets and no delete date |
| Training | Whether the vendor may use the content to train, and how you opt out | A seat name treated as a legal conclusion |
| Delete | Who can delete, and how you will show that it happened | A button nobody has tried |

```mermaid
flowchart TD
  class["Name the data class: prompt, file, log, eval row"] --> clock["Write the clock and the owner"]
  clock --> vendor["Read the vendor setting that matches the class"]
  vendor --> gap{"Does the setting match the clock you wrote?"}
  gap -->|No| change["Change the setting, the plan, or the clock. Record which"]
  gap -->|Yes| sign["A person signs the policy with the date you read the setting"]
```

Unsent model output needs a label so a later export does not treat it as what the customer received. That label shows up when you keep comparison rows. The duplicate request is [what AI shadow traffic is](/blog/what-is-ai-shadow-traffic-2026/). A case that leaves the model still has a file someone must retain or delete. That handoff is [what AI human escalation is](/blog/what-is-ai-human-escalation-2026/).

## What the directory actually records

**Notion.** The directory, checked October 16, 2026, quotes Notion: contractual agreements prohibit AI subprocessors from using customer data to train models, and no data is stored with LLM providers, with 30-day retention for non-Enterprise. [Notion AI](/tools/notion-ai/) Business is $20 a seat a month. Enterprise is the plan the same note ties to a different retention line. Confirm the current clause before you cite it in a policy. The seat article is [Notion AI pricing explained](/blog/notion-ai-pricing-explained-2026/).

**[ChatGPT](/tools/chatgpt/).** The directory says Business does not train on your business data by default. Business is $20 a user a month billed annually, with a two-user minimum, or $25 monthly. The directory does not print a day count for how long Business keeps a chat. Do not borrow Notion's 30 days and apply them here. The review is [ChatGPT review](/blog/chatgpt-review-2026/).

**[Claude](/tools/claude/).** The directory says model training is opt-out on Free, Pro, and Max, so a person can turn it off in settings. Pro is $20 a month, or $17 billed annually. The directory does not print a retention day count on that card. Opting out of training is not the same sentence as "deleted after N days." The review is [Claude review](/blog/claude-review-2026/).

**[Perplexity](/tools/perplexity/).** Enterprise Max is $325 a user a month, or $3,250 a year, and the directory lists data retention settings on that plan. Enterprise Pro is $40 a user a month, or $400 a year. The directory names the setting. It does not print the menu of windows. Read them in the admin console you have.

## What to write down

Write the data class, the clock, the plan the clock assumes, the vendor sentence you relied on, the date you read it, and the person who deletes. When the vendor changes the sentence, the policy is stale on that date. A policy that says "follow the vendor" without naming the sentence will be whatever the next pricing page says.

## FAQ

### Is a privacy policy the same document?

Your public privacy policy tells people what you do. This retention policy is the internal rule for AI prompts, files, and logs, specific enough that an engineer can set the control. They should not contradict each other. This page is the internal list.

### Does "no training" mean the vendor deletes the prompt?

No. A no-training clause and a retention clock are two lines. You can have either one without the other. Write both, and only fill a day count when the contract or the admin setting states it.

### Can we keep eval rows forever?

Only if the policy says so, and only for rows that were allowed to be stored. A useful dataset is [what an AI eval dataset is](/blog/what-is-ai-eval-dataset-2026/). Forever is a clock. Name it, or name a shorter one. Secrets do not belong in the row either way.

### What about a personal account?

A personal account is a retention decision: the company often cannot delete it. If the policy says company content stays in a company workspace, the personal seat is out of policy even when the answers are good. The Business or Enterprise row exists for that reason. Read the training line on that row before you treat it as solved.

## Last verified

October 16, 2026 for Notion AI, ChatGPT, Claude, and Perplexity, from directory records of vendor statements. Published October 24, 2026.

**Sources:** [Notion pricing](https://www.notion.com/pricing), [ChatGPT pricing](https://chatgpt.com/pricing/), [Claude pricing](https://claude.com/pricing), [Perplexity enterprise](https://www.perplexity.ai).

*Published by Andrew for [AI Tools Optimizer](https://aitoolsoptimizer.com).*

[Notion AI](/tools/notion-ai/) is in the [productivity and notes directory](/tools/category/productivity-notes/). Directory pages may use affiliate links. A purchase through them may earn us a commission at no extra cost to you.
