---
title: "Claude Code for Beginners (2026): A First Session on Pro"
description: "How to start Claude Code in 2026: which Claude plan includes it, where beginners should open it, a first task that is safe to review, and when Cursor or a no-code builder fits better."
pubDate: "2026-10-24"
category: "coding"
tags: ["claude-code", "beginners", "ai-coding", "anthropic"]
relatedTools: ["claude-code", "claude", "cursor", "github-copilot", "openai-codex", "lovable"]
sample: false
draft: false
---

**[Claude Code](/tools/claude-code/) is Anthropic's coding agent, and it is not free.** It is included with Claude Pro, Max, Team, and Enterprise. Pro is $20/month, or $17/month billed annually ($200 up front). Anthropic describes Pro as short coding sprints in small codebases. A beginner with one repo fits that description. A beginner does not need Max.

This guide uses Claude's pricing page and the Claude Code product page as checked October 16, 2026. It does not paste an install command. Install steps change, and the product page is the place to copy them. We did not score how often the agent is right.

## What has to be true before the first prompt

You need three things:

1. **A paid Claude plan.** The free Claude plan does not include Claude Code. API billing is the other door, and it is a worse door for a first afternoon because the meter is less obvious than Pro.
2. **A repository you are allowed to change,** with git already in use. Work on a branch. If you cannot read a diff, do not let an agent write production code. Use a scratch repo.
3. **A task small enough to check.** "Add a test for this function" is a first task. "Rebuild the app" is not.

Usage is shared with Claude chat. A day spent writing in [Claude](/tools/claude/) and a day spent in Claude Code draw on the same plan. If you are also comparing Max, that decision is [Claude Pro vs Max](/blog/claude-pro-vs-max-2026/). The three-way coding choice is [Cursor vs Claude Code vs Codex](/blog/cursor-vs-claude-code-vs-codex-2026/).

> **Figure (first-session diagram, not a product screenshot).** **Alt:** A paid Claude plan unlocks Claude Code on the web, desktop, IDE, or terminal. The first prompt asks for an explanation of the repo. The second prompt is one scoped change on a branch. The person reads the diff and runs the test. Auto mode is marked as on by default, with a note to keep risky commands visible.

## Where a beginner should open it

Claude Code runs in the terminal, in VS Code and JetBrains, in the desktop app, on the web, and in Slack. For a first session, use the **web or desktop app** if the terminal is the thing you are avoiding. Use the **IDE extension** if you already live in VS Code and you want the diff next to the file. Use the **terminal** when you are ready to run it from the project folder.

Follow the install instructions on the Claude Code product page for the surface you picked. Do not run a copied shell one-liner from a blog, including this one. We are not publishing one.

**Auto mode** is on by default for Pro, Max, and Team. Anthropic describes it as a way for the agent to keep working without a permission prompt on every step, while still catching risky commands. On a first session, read what it ran. If you cannot see the command, you are not reviewing the change. Turn the autonomy down until the first successful task is boring.

## The first hour

1. Subscribe to Pro, monthly, so you can stop after one month. Annual Pro at $200 is a fine price after the tool has earned it. It is a poor first swipe.
2. Open a scratch branch.
3. Ask Claude Code to explain the repository: where the app starts, how tests are run, and which files it would not touch. Correct that explanation before you accept edits. This is the onboarding use the product is sold for.
4. Give one task with a check:

> In this practice repo, add a unit test that fails if the total function drops cents. Do not change production code unless the test proves a bug. Run the test command I paste here, and stop.

5. Read the diff. Run the test yourself in a second terminal if you are in the CLI. Reject the change if you cannot explain it.
6. Commit only the lines you meant to keep.
7. Look at the usage indicator before you start a second task. Pro's limit is the lesson. Hitting it on day one means the tasks were too big, or that Max is a capacity conversation for later, not a quality upgrade.

Max 5x is $100/month and includes $100/month in API credits. Max 20x is $200/month and includes $200/month in API credits. Anthropic describes Max 5x as everyday use in larger codebases and Max 20x as a power-user plan. Beginners should not buy either to "get the better model." Buy Max when Pro actually stops a normal day. Team and Enterprise add admin and SSO. They are not beginner plans.

Self-hosted environments are a public beta for sessions that must stay on your network. Ignore that until a security review asks for it.

## When Claude Code is the wrong first tool

| You are | Start somewhere else |
|---|---|
| You want autocomplete in an editor at $8 | [Cursor](/tools/cursor/) Plus. See [Cursor review](/blog/cursor-review-2026/) |
| You already pay for ChatGPT and want coding in that bill | [Codex](/tools/openai-codex/) on Plus |
| You want a $10 GitHub seat | [GitHub Copilot](/tools/github-copilot/) Pro |
| You do not want to review code | [Lovable vs Bolt vs Replit](/blog/lovable-vs-bolt-vs-replit/). You can still outgrow those tools into Claude Code later |
| You wanted a writing partner, not a repo agent | Claude chat on the same Pro plan. The assistant comparison is [ChatGPT vs Gemini vs Claude](/blog/chatgpt-vs-gemini-vs-claude-2026/) |

Secrets do not go in the prompt. Do not ask the agent to print tokens, `.env` files, or customer data into a pull request. If a task needs a key, use the project's existing secret path and say so.

## A beginner score you can fill in after one session

| After the first hour | Stay on Pro | Stop |
|---|---|---|
| I can explain the diff | Fits | |
| The test I named is the test that ran | Fits | |
| I do not know what changed | | Stop. Smaller task, or a human pair |
| I hit the limit on a toy repo | | The tasks were too broad. Do not buy Max yet |
| I needed an editor with Tab more than an agent | | Cursor Free or Plus |

## FAQ

### Is Claude Code free for beginners?

No. It requires Claude Pro at $20/month ($17/month annual), Max, a team plan, or API billing. There is no permanent free Claude Code tier in the pricing we checked.

### Do I have to use the terminal?

No. The product also runs in a desktop app, on the web, and in VS Code and JetBrains. The terminal is the most direct version. It is not the only version.

### Is Max better for learning?

Max raises capacity. Anthropic does not describe it as a beginner quality tier. Learn on monthly Pro. Move to Max 5x only after Pro's limit is what stops real work in a larger codebase.

## Last verified

October 16, 2026.

**Sources:** [Claude Code](https://claude.com/product/claude-code), [Claude pricing](https://claude.com/pricing), [What is the Max plan?](https://support.claude.com/en/articles/11049741-what-is-the-max-plan).

[Claude Code](/tools/claude-code/) is in the [coding directory](/tools/category/coding/). Directory pages may use affiliate links. A purchase through them may earn us a commission at no extra cost to you.
