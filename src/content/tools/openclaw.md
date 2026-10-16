---
name: "OpenClaw"
category: "automation-agents"
subcategory: "Open-source AI assistant"
company: "OpenClaw Foundation"
tagline: "Free, MIT-licensed personal AI assistant you run yourself and talk to from WhatsApp, Telegram, Slack and more."
description: "OpenClaw is an open-source, self-hosted AI assistant. You run a single Gateway on your own computer or server, connect a model provider, and chat with your agent from apps such as WhatsApp, Telegram, Discord, Slack, iMessage and Signal. It's MIT licensed and stewarded by the non-profit OpenClaw Foundation, with no paid tier."
seoTitle: "OpenClaw Review 2026: Free Open-Source AI Assistant, Features and Setup"
seoDescription: "OpenClaw review: the free, MIT-licensed, self-hosted AI agent you chat with from WhatsApp, Telegram and Slack. Features, costs, setup, pros, cons and alternatives."
pricing: "free"
pricingModel: "Free and open source (MIT); you pay your model provider"
startingPrice: "Free (model costs separate)"
freePlan: "Yes — fully free software"
platforms: "macOS, Windows, Linux; iOS and Android apps; self-hosted server"
website: "https://openclaw.ai"
logo: "/logos/openclaw.png"
bestFor: "Technical users who want a private, self-hosted assistant in the chat apps they already use"
verdict: "OpenClaw is the leading open-source option for a personal AI agent: free, MIT licensed and run on your own hardware, with your state, memory and credentials kept local. You chat with it from WhatsApp, Telegram, Slack and 20+ other channels and swap models freely. The trade-off is setup and responsibility: you install and maintain it and pay your model provider directly."
takeaways:
  - "Free, MIT-licensed, self-hosted AI assistant."
  - "Connects to 20+ chat channels including WhatsApp, Telegram, Discord, Slack, iMessage and Teams."
  - "Models (Claude, GPT, local models) are swappable plugins."
  - "Stewarded by the OpenClaw Foundation, a US 501(c)(3); no paid tier or hosted service."
  - "Install with a one-line script, npm/pnpm/bun, Docker, Nix or from source."
keyFeatures: ["Self-hosted Gateway","20+ chat channels","Swappable models and agent harnesses","Skills directory (ClawHub)","Browser, email and calendar tools","Native desktop and mobile apps","Multi-agent routing"]
useCases: ["Managing email and calendar from chat","Personal assistant on WhatsApp or Telegram","Shared team assistant in Slack","Coding agent from your phone","Home and app automations"]
pros:
  - "Completely free and MIT licensed"
  - "Data, memory and credentials stay on your hardware"
  - "Works in the chat apps you already use"
  - "Choose any model provider, including local models"
  - "Large, active open-source community"
cons:
  - "You install, secure and maintain it yourself"
  - "Model usage costs are separate"
  - "No official hosted version"
  - "More technical than consumer assistants"
idealFor:
  - "Want a private, self-hosted assistant"
  - "Live in WhatsApp, Telegram or Slack"
  - "Want to choose or switch models freely"
notFor:
  - "Want zero setup (consider Grok Bot or OpenAI Dots)"
  - "Need vendor support contracts"
  - "Only need simple app automations (consider Zapier or n8n)"
alternatives: ["hermes-agent","grok-bot","openai-dots","n8n","manus"]
faq:
  - q: "Is OpenClaw free?"
    a: "Yes. OpenClaw is MIT licensed and the project says it has no paid tier, hosted service or token. You pay only for the model provider you connect, unless you use local models."
  - q: "Who makes OpenClaw?"
    a: "It's stewarded by the OpenClaw Foundation, an independent US 501(c)(3) non-profit. Donors include OpenAI, Amazon and Red Hat, but the project says OpenClaw is not an OpenAI product and donors don't control it."
  - q: "Which chat apps does OpenClaw work with?"
    a: "Discord, iMessage, Slack, Microsoft Teams, Telegram, WhatsApp, Signal, Matrix, Google Chat and more through channel plugins."
  - q: "How do I install OpenClaw?"
    a: "The official quick install is curl -fsSL https://openclaw.ai/install.sh | bash on macOS/Linux, or a PowerShell script on Windows. npm, pnpm, bun, Docker, Nix and desktop apps are also available."
  - q: "Does OpenClaw send my data anywhere?"
    a: "Your prompts go to the model provider and chat platforms you configure. By default OpenClaw itself only sends a daily version check, which you can turn off."
sources:
  - title: "OpenClaw (official site)"
    url: "https://openclaw.ai"
  - title: "OpenClaw docs"
    url: "https://docs.openclaw.ai/"
  - title: "openclaw/openclaw (official GitHub repo)"
    url: "https://github.com/openclaw/openclaw"
  - title: "OpenClaw install guide (GitHub)"
    url: "https://github.com/openclaw/openclaw/blob/main/docs/install/index.md"
sourceUrls: ["https://openclaw.ai","https://docs.openclaw.ai/","https://github.com/openclaw/openclaw","https://github.com/openclaw/openclaw/blob/main/docs/install/index.md"]
lastVerified: "2026-10-16"
lastUpdated: "2026-10-16"
sample: false
---

## What OpenClaw is

OpenClaw is an open-source AI assistant that runs on your own computer and "meets you in the channels you already use." You run a single **Gateway** process on a laptop or server, and it becomes the bridge between your messaging apps and an always-available AI agent. The same Gateway can run as a personal assistant or a shared team deployment.

According to the project, your state, memory and credentials live on your hardware, and models and agent harnesses (Claude, Codex, local models) are plugins you can swap. OpenClaw is MIT licensed and stewarded by the **OpenClaw Foundation**, an independent US 501(c)(3) that employs the core team and signs releases. It says there is no paid tier, hosted service or token.

## Key features

### Chat where you already are
Talk to your agent from WhatsApp, Telegram, Discord, Slack, iMessage, Signal, Microsoft Teams, Matrix, Google Chat and more through channel plugins.

### Swappable models
Connect Claude, GPT or local models, and change them without rebuilding your setup.

### Tools and skills
The official site lists tools for browsing, Gmail, GitHub, Obsidian, Spotify and Philips Hue, among others. ClawHub is the official skill directory.

### Agent-native design
Built for coding agents with tool use, sessions, memory and multi-agent routing.

### Apps on every platform
Native apps for macOS, iOS, Android, Windows and Linux, plus a Windows Hub companion.

### Privacy defaults
By default, OpenClaw only sends a daily version check, and anonymous feature statistics are opt-in.

## Pricing breakdown

OpenClaw itself is free. Checked October 16, 2026:

| Item | Cost |
|---|---|
| OpenClaw software | Free (MIT license) |
| Hosted or paid tier | None offered |
| Model usage | Billed by the provider you connect (not published by OpenClaw) |
| Hosting | Your own hardware, or a cloud server/VPS you pay for |

Your real cost depends on the model provider and hosting you choose.

## Best use cases

- **Personal admin:** clear your inbox, send emails and manage your calendar from chat.
- **Mobile access:** message your agent from WhatsApp or Telegram on the go.
- **Teams:** run a shared assistant in Slack or Teams.
- **Developers:** work across GitHub issues and pull requests from chat.

## How to get started

1. Run the installer: `curl -fsSL https://openclaw.ai/install.sh | bash` (or the PowerShell script on Windows).
2. Follow onboarding to connect a model provider.
3. Add a chat channel such as Telegram or WhatsApp.
4. Send your agent a first task.
5. Browse ClawHub for skills to add.

## Tips and tricks

- **Start with one channel** and add more once it works.
- **Use local models** if you want everything on your hardware.
- **Turn off version checks** with `update.checkOnStart: false` if you want zero outbound calls.
- **Review what tools you grant,** since the agent can act on your accounts.

Example message:

> Check my calendar for tomorrow, flag any conflicts, and draft a short reply to anyone I need to reschedule with.
