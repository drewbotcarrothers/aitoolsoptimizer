---
name: "Hermes Agent"
category: "automation-agents"
subcategory: "Open-source AI agent"
company: "Nous Research"
tagline: "Nous Research's open-source, self-improving AI agent that learns skills from experience and runs anywhere."
description: "Hermes Agent is an MIT-licensed AI agent from Nous Research. It creates and improves skills from experience, keeps persistent memory across sessions and runs locally, on a VPS, in Docker or on serverless sandboxes. You talk to it from a terminal interface or from Telegram, Discord, Slack, WhatsApp and Signal."
seoTitle: "Hermes Agent Review 2026: Nous Research's Open-Source AI Agent"
seoDescription: "Hermes Agent review: Nous Research's free, MIT-licensed, self-improving AI agent. Features, model options, costs, setup, pros, cons and alternatives."
pricing: "free"
pricingModel: "Free and open source (MIT); bring your own model or use a Nous Portal subscription"
startingPrice: "Free (model costs separate)"
freePlan: "Yes — free software"
platforms: "Linux, macOS, Windows, WSL2; Docker, SSH and serverless sandboxes"
website: "https://hermes-agent.nousresearch.com"
logo: "/logos/hermes-agent.png"
bestFor: "Developers and power users who want a self-hosted agent that learns and improves over time"
verdict: "Hermes Agent stands out for its built-in learning loop: according to Nous Research, it writes skills after complex tasks, improves them as it uses them and builds a model of you across sessions. It's free and MIT licensed, runs from a $5 VPS to serverless sandboxes, and works with many model providers. It's aimed at technical users; if you want a private chat-app assistant, compare it with OpenClaw."
takeaways:
  - "Open-source (MIT) AI agent built by Nous Research."
  - "Creates and improves its own skills, with persistent memory and cross-session search."
  - "Terminal UI plus Telegram, Discord, Slack, WhatsApp and Signal from one gateway."
  - "Runs locally, in Docker, over SSH, or on Modal, Daytona and Vercel Sandbox."
  - "Works with many providers; Nous Portal is the recommended quick setup."
keyFeatures: ["Self-improving skills","Persistent memory and session search","Full terminal interface","Messaging gateway","Multiple execution backends","MCP server support","Scheduled tasks"]
useCases: ["Coding and repo work","Personal assistant via Telegram","Long-running research tasks","Scheduled automations","Generating training trajectories"]
pros:
  - "Free and MIT licensed"
  - "Learning loop improves skills over time"
  - "Flexible hosting, including cheap idle serverless"
  - "Broad model provider support"
  - "Native Windows support"
cons:
  - "Technical setup and maintenance"
  - "Model costs are separate"
  - "Nous Portal pricing couldn't be verified on an official page"
  - "Fast release pace means frequent updates"
idealFor:
  - "Are comfortable with a terminal"
  - "Want an agent that remembers and improves"
  - "Want to run it on a server or in the cloud"
notFor:
  - "Want zero setup (consider Grok Bot or OpenAI Dots)"
  - "Mainly want a chat-app assistant (consider OpenClaw)"
  - "Need a no-code automation builder (consider Zapier or n8n)"
alternatives: ["openclaw","grok-bot","openai-dots","claude-code","n8n"]
faq:
  - q: "Is Hermes Agent made by Nous Research?"
    a: "Yes. The official GitHub repository is NousResearch/hermes-agent, and the README calls it 'the self-improving AI agent built by Nous Research.'"
  - q: "Is Hermes Agent free?"
    a: "The software is free and MIT licensed. You pay for the model provider you use, either with your own API keys or through a Nous Portal subscription. We couldn't verify Nous Portal prices on an official page."
  - q: "What makes Hermes Agent different?"
    a: "Nous Research highlights its closed learning loop: it creates skills after complex tasks, improves them in use, curates its own memory and searches past conversations."
  - q: "Where can Hermes Agent run?"
    a: "Locally, in Docker, over SSH, with Singularity, or on Modal, Daytona and Vercel Sandbox. It runs on Linux, macOS, WSL2 and natively on Windows."
  - q: "How do I install Hermes Agent?"
    a: "On Linux, macOS or WSL2, run curl -fsSL https://hermes-agent.nousresearch.com/install.sh | bash. Windows has a PowerShell installer. Then run hermes model or hermes setup --portal to choose a provider."
sources:
  - title: "NousResearch/hermes-agent (official GitHub repo)"
    url: "https://github.com/NousResearch/hermes-agent"
  - title: "Hermes Agent Quickstart (official docs)"
    url: "https://hermes-agent.nousresearch.com/docs/getting-started/quickstart"
  - title: "Hermes Agent releases (GitHub)"
    url: "https://github.com/NousResearch/hermes-agent/releases"
sourceUrls: ["https://github.com/NousResearch/hermes-agent","https://hermes-agent.nousresearch.com/docs/getting-started/quickstart","https://github.com/NousResearch/hermes-agent/releases"]
lastVerified: "2026-10-16"
lastUpdated: "2026-10-16"
sample: false
---

## What Hermes Agent is

Hermes Agent is an open-source AI agent from **Nous Research**, the lab behind the Hermes models. Its README calls it "the self-improving AI agent built by Nous Research" and says it's "the only agent with a built-in learning loop": it creates skills from experience, improves them during use, nudges itself to save knowledge, searches its own past conversations and builds a model of who you are across sessions.

It isn't tied to your laptop. Nous Research says you can run it on a $5 VPS, a GPU cluster or serverless infrastructure that costs nearly nothing when idle, and talk to it from Telegram while it works on a cloud machine. It's MIT licensed and released frequently (v0.22.2 was the latest release when we checked).

## Key features

### Learning loop
Autonomous skill creation after complex tasks, skills that improve during use, agent-curated memory and full-text search across past sessions.

### Skills
Each skill is a `SKILL.md` file with a name, description and steps. The agent reads short descriptions and only loads a full skill when a task needs it.

### Terminal interface
A full TUI with multiline editing, slash-command autocomplete, history, interrupt-and-redirect and streaming tool output.

### Messaging gateway
Telegram, Discord, Slack, WhatsApp, Signal and CLI from one gateway process, with voice memo transcription.

### Execution backends
Run tools locally or via Docker, SSH, Singularity, Modal, Daytona or Vercel Sandbox. Daytona and Modal can hibernate when idle.

### Providers and MCP
Use Nous Portal, GitHub Copilot or your own API keys, and add MCP servers in the config.

## Pricing breakdown

Checked October 16, 2026:

| Item | Cost |
|---|---|
| Hermes Agent software | Free (MIT license) |
| Bring your own API keys | Billed by your chosen provider |
| Nous Portal subscription | Not verified (official pricing page was not accessible) |
| Hosting | Your own machine, VPS or serverless account |

The quickstart recommends Nous Portal as the easiest setup: OAuth login, a model plus Tool Gateway tools, billed to your Nous Portal subscription. We couldn't confirm Nous Portal prices from an official page, so check portal.nousresearch.com before subscribing.

## Best use cases

- **Coding:** summarize repos, find entry points and set up PR workflows.
- **Always-on assistant:** run it on a server and message it from Telegram.
- **Recurring tasks:** schedule jobs that run without you.
- **Research:** batch trajectory generation for training tool-calling models.

## How to get started

1. Install: `curl -fsSL https://hermes-agent.nousresearch.com/install.sh | bash` (PowerShell installer on Windows).
2. Run `hermes model` or `hermes setup --portal` to choose a provider.
3. Verify a working chat with a simple prompt.
4. Check enabled tools with `hermes tools`.
5. Start the messaging gateway if you want to use Telegram or Slack.

## Tips and tricks

- **Let it build skills** from repeated tasks, then review them.
- **Use serverless backends** for an always-available agent that's cheap when idle.
- **Add MCP servers** to connect GitHub and other tools.
- **Keep it updated,** since releases ship often.

Example prompt (from the official quickstart):

> Summarize this repo in 5 bullets and tell me what the main entrypoint is.
