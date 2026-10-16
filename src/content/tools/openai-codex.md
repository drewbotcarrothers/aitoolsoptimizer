---
name: "OpenAI Codex"
category: "coding"
subcategory: "AI coding agent"
company: "OpenAI"
tagline: "OpenAI's coding agent across the ChatGPT desktop app, CLI, IDE extension, web and cloud."
description: "OpenAI Codex is a coding agent that reads, writes, runs and reviews code. It works in the ChatGPT desktop app, the Codex CLI, IDE extensions, the web and iOS, and Codex Cloud, with GitHub code review, Slack, an SDK and subagents. It's included with ChatGPT plans from Free to Enterprise or billed via API key."
seoTitle: "OpenAI Codex Review 2026: Pricing (Free, Plus $20, Pro from $100), Features & Alternatives"
seoDescription: "OpenAI Codex review: included in ChatGPT Free, Go $8, Plus $20, Pro $100/$200/$500, Business $20/user (annual), API-key option, CLI, cloud tasks, code review, pros, cons and alternatives."
pricing: "freemium"
pricingModel: "Included with ChatGPT plans, or pay-as-you-go via API key"
startingPrice: "Free; Plus $20/mo for full Codex"
freePlan: "Yes — quick coding tasks on ChatGPT Free"
platforms: "ChatGPT desktop app (Mac, Windows), CLI, IDE extensions, web, iOS, SDK"
website: "https://openai.com/codex"
logo: "/logos/openai-codex.png"
bestFor: "Developers who want an agent that works in their terminal, IDE and cloud from one ChatGPT subscription"
verdict: "Codex is one of the most complete coding agents available: it runs locally in your terminal or IDE, takes on parallel tasks in the cloud and reviews pull requests on GitHub, all under the ChatGPT subscription you may already have. Plus at $20 a month suits a few focused sessions a week; heavy users will want Pro from $100. Usage limits vary a lot by model and task size, so watch the usage dashboard."
takeaways:
  - "Codex is included in ChatGPT plans: Free ($0) and Go ($8/mo) for light tasks, Plus ($20/mo) for full Codex on web, CLI, IDE and iOS."
  - "Pro plans cost $100, $200 or $500 per month; Pro has no five-hour limit and Pro $500 adds Ultrafast mode."
  - "Business is $20 per user/month billed annually (2+ users) or $25 monthly; Enterprise and Edu are via sales."
  - "An API-key option bills Codex at API rates for CLI, SDK and IDE use, without cloud features like GitHub code review."
  - "ChatGPT Work and Codex now share usage; GPT-5.5 retired from Codex with ChatGPT sign-in on October 14, 2026."
keyFeatures: ["Codex CLI","IDE extension","Codex Cloud tasks","GitHub code review","Slack integration","Subagents","AGENTS.md instructions","Sandboxing and approvals","Codex SDK"]
useCases: ["Feature development","Bug fixing","Code review","Refactoring and migrations","Writing tests"]
pros:
  - "Works locally and in the cloud"
  - "Included with ChatGPT subscriptions"
  - "Automatic GitHub code review"
  - "Strong sandboxing and approval controls"
  - "Subagents for parallel work"
cons:
  - "Usage limits are hard to predict"
  - "Heavy use needs Pro ($100+)"
  - "Cloud features unavailable with API keys"
  - "Rapid model changes require migrations"
idealFor:
  - "Delegate well-scoped coding tasks"
  - "Want automatic PR reviews"
  - "Already pay for ChatGPT"
notFor:
  - "Want an AI-first IDE (consider Cursor)"
  - "Build apps without coding (consider Lovable or Replit)"
  - "Need inline completions only (consider GitHub Copilot)"
alternatives: ["claude-code","cursor","github-copilot","devin-desktop","replit"]
faq:
  - q: "Is OpenAI Codex free?"
    a: "Yes, on a limited basis. ChatGPT Free lets you explore Codex on quick coding tasks, and Go ($8/month) covers lightweight coding tasks."
  - q: "How much does Codex cost?"
    a: "Codex is part of ChatGPT plans: Plus is $20/month, Pro is $100, $200 or $500/month, and Business is $20 per user/month billed annually (2+ users) or $25 billed monthly. Enterprise and Edu are through sales. You can also use an API key and pay API rates."
  - q: "What are Codex usage limits?"
    a: "Limits depend on the model, task size and complexity, and whether tasks run locally or in the cloud. Plus and Business have five-hour windows (weekly limits may also apply); Pro currently has no five-hour limit. Check your usage dashboard or run /status in the CLI."
  - q: "Where can I use Codex?"
    a: "In the ChatGPT desktop app, the Codex CLI, IDE extensions, on the web and iOS, through Codex Cloud, and programmatically via the Codex SDK."
  - q: "Does Codex review pull requests?"
    a: "Yes. Plus and higher include cloud integrations like automatic code review on GitHub and a Slack integration. These aren't available when you use Codex with an API key."
  - q: "What changed with GPT-5.5?"
    a: "GPT-5.5 retired from Codex with ChatGPT sign-in on October 14, 2026. Plans now use newer models such as GPT-6.1 Sol and GPT-6 Luna; API-key sessions weren't affected."
sources:
  - title: "Codex pricing (ChatGPT docs)"
    url: "https://learn.chatgpt.com/docs/pricing"
  - title: "Models (ChatGPT docs)"
    url: "https://learn.chatgpt.com/docs/models"
  - title: "ChatGPT and Codex docs index"
    url: "https://learn.chatgpt.com/llms.txt"
sourceUrls: ["https://learn.chatgpt.com/docs/pricing","https://learn.chatgpt.com/docs/models","https://learn.chatgpt.com/llms.txt"]
lastVerified: "2026-10-16"
lastUpdated: "2026-10-16"
sample: false
---

## What OpenAI Codex is

Codex is OpenAI's coding agent. Instead of only suggesting lines, it can read your repository, plan a change, edit files, run commands and tests in a sandbox, and propose a diff or pull request. You can work with it interactively in your terminal or IDE, or hand off tasks to run in the cloud while you do something else.

Codex now lives alongside ChatGPT's other agentic features: **ChatGPT Work and Codex share the same pricing, credits and usage limits**, and the ChatGPT desktop app on Mac and Windows is a main surface for projects, files and long-running work.

## Key features

### Codex CLI and IDE extension
Use Codex from your terminal and scripts, or inside your editor. Configure it with config.toml and give project-specific instructions with **AGENTS.md**.

### Codex Cloud
Run coding tasks in the cloud, in parallel, and review the results.

### Code review
Understand pull requests, investigate findings and review local changes; automatic GitHub code review is available on Plus and above.

### Safety controls
Sandboxing, approvals, network controls and rules for which commands Codex can run outside the sandbox.

### Subagents, skills and SDK
Use subagents and custom Codex agents, build skills, and control Codex programmatically with the SDK or embed it with the App Server.

### Speed modes
Fast and Ultrafast modes trade more usage for speed (Ultrafast on Pro $500).

## Pricing breakdown

From OpenAI's ChatGPT/Codex pricing docs, checked October 16, 2026.

| Plan | Price | Codex access |
|---|---|---|
| Free | $0 | Quick coding tasks (GPT-6 Luna, Standard speed, subject to rollout) |
| Go | $8/mo | Lightweight coding tasks |
| Plus | $20/mo | Web, CLI, IDE, iOS; code review and Slack; GPT-6.1 Sol and GPT-6 Luna; extend with credits |
| Pro | $100, $200 or $500/mo | More usage, no five-hour limit; Ultrafast on $500 |
| Business | $20/user/mo annual (2+ users) or $25 monthly | Larger cloud VMs, admin controls, SAML SSO, no training on business data by default |
| Enterprise & Edu | Contact sales | Priority processing, SCIM, EKM, RBAC, analytics |
| API key | API rates | CLI, SDK, IDE only; no cloud features |

Fast mode uses included usage at 2.5x the Standard rate; Ultrafast at 8x. OpenAI notes that API token prices are separate from subscription usage.

## Best use cases

- **Feature work:** "add pagination to the orders API with tests."
- **Bug triage:** reproduce, fix and explain an issue.
- **Code review:** automatic review comments on every PR.
- **Migrations:** upgrade dependencies or refactor modules in parallel tasks.

## How to get started

1. Sign in with your ChatGPT account (or an API key).
2. Install the CLI or IDE extension, or open the desktop app.
3. Add an AGENTS.md describing build, test and style rules.
4. Start with a small, testable task and review the diff.
5. Connect GitHub to enable cloud tasks and code review.

## Tips and tricks

- **Be explicit about acceptance criteria** and test commands.
- **Keep tasks scoped**—one feature or bug per task.
- **Use approvals** for commands that touch the network.
- **Check /status** to track remaining limits.

Example task:

> In the /api/orders route, add cursor-based pagination (limit default 50, max 200), update the OpenAPI spec, and add unit tests. Run npm test and fix any failures.
