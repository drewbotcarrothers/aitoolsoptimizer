---
title: "What Is Function Calling in AI? (2026): When a Model Uses a Tool"
description: "Function calling lets a model request a tool, such as search or a calendar, and then continue from the result. A 2026 explainer with the products that already do it."
pubDate: "2026-10-24"
category: "automation-agents"
tags: ["function-calling", "glossary", "tools", "agents"]
relatedTools: ["chatgpt", "claude", "lindy", "zapier", "make", "chatbase", "deepseek"]
sample: false
draft: false
---

**Function calling is how a model asks to run a tool, then uses the tool's result in the next step.** The tool might be web search, a calculator, a calendar lookup, or your own function. The model proposes the call, usually as structured fields. Your software runs it. The model does not gain permission by wishing. You granted the tool.

That mechanism is why a chat can book a meeting or query a database without you pasting the rows. It is also why a bad tool definition becomes a bad action. The model will call what you exposed.

A product that pursues a goal across several tool calls is [an AI agent](/blog/what-is-an-ai-agent-2026/). A path you drew in advance, with no model choosing the branch, is a workflow. Both can sit on top of functions. They are not the same bill.

Prices are US list prices excluding tax from directory pages checked October 16, 2026. This page does not include a copy-paste schema. Use the API reference for the model you call.

## The handoff

| Step | Who does it | What can go wrong |
|---|---|---|
| You define the tool | You, or the product vendor | A vague tool gets called for the wrong job |
| The model requests a call | The model | It can request a call you did not want. Your code can refuse |
| Your system runs the tool | Your code, the app, or the vendor | The tool's own permissions apply. The model does not bypass them |
| The result goes back | The tool's output | A wrong or empty result becomes part of the next reply |
| The model writes to the user | The model | It can misread the tool output. Check actions that move money or mail |

```mermaid
flowchart TD
  user["User request"] --> model["Model decides a tool is needed"]
  model --> call["Structured tool request"]
  call --> allow{"Does your system allow this call?"}
  allow -->|No| refuse["Refuse and say so"]
  allow -->|Yes| run["Tool runs with its own permissions"]
  run --> back["Result returns to the model"]
  back --> reply["Model replies, or asks for another tool"]
```

Each round trip spends [tokens](/blog/what-are-ai-tokens-explained-2026/): the request, the tool result, and the reply. A loop of tool calls is why an "agent" task costs more than a one-line answer.

## Products where you already meet this

| Shape | Example | What is being called | Price to know |
|---|---|---|---|
| Chat with built-in tools | [ChatGPT](/tools/chatgpt/) or [Claude](/tools/claude/) | Search, files, code, or connectors the plan includes | ChatGPT Plus $20/month. Claude Pro $20, or $17 billed annually |
| An API that documents tool calls | [DeepSeek](/tools/deepseek/) | Your functions, if you wire them. The directory page lists tool calls on the API | Chat is free. API input from $0.15 per 1 million tokens off-peak on a cache miss |
| A role that picks among tools | [Lindy](/tools/lindy/) | Email, calendar, and the integrations on the agent | Team starts at $49.99/month for 5,000 credits. The trial is $50 in credits for 7 days |
| A path you drew | [Zapier](/tools/zapier/) or [Make](/tools/make/) | The steps in the Zap or scenario | Zapier Professional is $19.99/month billed annually for 750 tasks. Make Core is from $9/month billed annually |
| Answers from your help center | [Chatbase](/tools/chatbase/) | Your content, plus handoff rules you set | Hobby is $32/month billed yearly |

The buying split between a drawn workflow and an agent is [Zapier vs Make vs n8n](/blog/zapier-vs-make-vs-n8n/). A non-code starting point is [how to create an AI agent without coding](/blog/how-to-create-an-ai-agent-without-coding/). Lindy's review is [Lindy review](/blog/lindy-review-2026/).

n8n's cloud prices were shown to this directory in euros, from €20/month billed annually for Starter. This page does not convert that to dollars.

## What to allow a tool to do

**Read first.** Search, lookup, and draft are reversible. Send, pay, delete, and post are not. Put a person on the irreversible step until you have seen the tool called correctly on real requests.

**Narrow the arguments.** A tool called "update the record" with a free-text field will be used broadly. A tool called "set the meeting to this ISO time" is easier to reject when the time is missing.

**Return errors the model can say out loud.** An empty result should become "the calendar has no free slot," not a guessed time. The guessed time is [a hallucination](/blog/what-is-ai-hallucination-2026/) with a side effect.

**Log the call.** When a customer asks why an email went out, the log is the answer. The model's paragraph is not.

If you only needed the model to follow a format, you needed a prompt, not a tool. That skill is [what prompt engineering is](/blog/what-is-prompt-engineering-2026/). Function calling is for when the answer depends on a system outside the prompt.

## FAQ

### Is function calling the same as an agent?

An agent is a product that can take several steps toward a goal. Function calling is one way those steps invoke tools. A single tool call in a chat is function calling. It is not automatically an agent you should pay an agent platform for.

### Does Claude or ChatGPT include it?

Both products can use tools the plan exposes: search, files, and connectors. Building your own function and having the model call it is an API project. The chat seats above are the consumer price, not an API rate.

### Can the model run code on my computer by itself?

Only if you installed a product that has that permission. A function call is a request. Your runtime decides whether it executes. Read the permission prompt before you approve file or shell access in a coding agent.

### Does a tool call cost extra?

It costs tokens or a task credit, depending on the product. Zapier counts tasks. Lindy counts credits. An API counts the tokens in the call and the tool result. Check the meter on the plan you are on.

## Last verified

October 16, 2026 for the prices named above. Published October 24, 2026.

**Sources:** [DeepSeek API docs](https://api-docs.deepseek.com/), [Zapier pricing](https://zapier.com/pricing), [Lindy pricing](https://www.lindy.ai/pricing), [Claude pricing](https://claude.com/pricing).

*Published by Andrew for [AI Tools Optimizer](https://aitoolsoptimizer.com).*

[Lindy](/tools/lindy/), [Zapier](/tools/zapier/), and [Make](/tools/make/) are in the [automation directory](/tools/category/automation-agents/). Directory pages may use affiliate links. A purchase through them may earn us a commission at no extra cost to you.
