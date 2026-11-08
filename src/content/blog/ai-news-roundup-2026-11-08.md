---
title: "AI News Roundup – November 8, 2026"
description: "Today’s AI news: Claude Code’s “don’t ask again” rule left passwords and keys in 1,122 public GitHub files; Anthropic pushes ahead with a $1.25T–$1.75T IPO; open DeepSeek nears OpenAI’s restricted cyber model; AI agents fail open national-lab research; Ripple-65B and Inkling 2 Small; Google takes over Crusoe’s Wyoming site."
pubDate: 2026-11-08T15:30:00-05:00
tags: ["ai-news"]
relatedTools: ["claude-code", "claude", "cursor", "deepseek", "github-copilot", "gemini"]
sample: false
draft: false
---

## TL;DR

- **Claude Code**: security firm **Apiiro** found **1,122** public GitHub copies of `.claude/settings.local.json` holding at least one secret (**1,379** distinct secrets, including **379** database passwords) saved when developers clicked **“Yes, and don’t ask again.”**
- **Anthropic** is pushing ahead with a pre-Thanksgiving IPO, aiming to raise **$80B–$100B** at a **$1.25T–$1.75T** valuation, per investors cited by the Financial Times.
- **Vals AI**: open-weight **DeepSeek V4.1 Flash** hit **72.8%** of simulated cyberattack objectives, close to **80.8%** for OpenAI’s restricted **GPT-6 Sol Daybreak**, at about a seventh of the cost per run.
- **Into the Unknown**: nine AI agents attempted **15** open research problems from US national labs; **none** of **135** submissions passed, and **114** failed integrity checks.
- **Ricursive** released **Ripple-65B Preview**, an Apache 2.0 coding model that self-reports **80.52** on TerminalBench 2.1.
- **Thinking Machines** launched **Inkling 2 Small** (594B total, 17B active), with Apache 2.0 weights promised next week.
- **Google** took over **Crusoe**’s unfinished Wyoming data center site and plans to invest **$17B** there.

**Today’s take:** The convenience click is the new security hole. If you use [Claude Code](/tools/claude-code/), [Cursor](/tools/cursor/) or any coding agent, treat its project folder like a `.env` file: never type secrets into commands, and check what your agent saved before you push.

---

## Did Claude Code leak passwords to GitHub?

**Short answer:** Some users’ saved approvals did. When you pick **“Yes, and don’t ask again”** on a Bash prompt, Claude Code saves an allow rule in `.claude/settings.local.json`. If the rule is one exact command, any password or token typed into it is saved in plain text. Apiiro’s research, reported by The Hacker News on November 7, 2026, searched public GitHub:

| Finding | Number |
|---|---|
| Public copies of `.claude/settings.local.json` | **104,185** (in 103,617 repos) |
| Copies holding at least one secret | **1,122** (~1.1%) |
| Distinct secrets in those files | **1,379**, from **63** organizations |
| Database passwords | **379** |
| SSH logins / GitHub, GitLab & npm tokens / AWS keys | **43** / **42** / **23** |
| Wider total (git history, shared `settings.json`, saved transcripts) | **2,539** secrets in **1,994** repos |
| Files flagged by gitleaks / TruffleHog / neither | **564** / **643** / **215** |

Anthropic’s [settings docs](https://code.claude.com/docs/en/settings) say Claude Code adds the file to your **global git excludes** the first time it writes it. Apiiro’s point: that protection lives on one computer, doesn’t cover a file that was already committed or created by hand, and never lands in the project’s own `.gitignore`. In **539 of 1,105** repos the researchers traced, a commit listing Claude as co-author changed the file. Apiiro did not test whether the secrets still work, but one company it notified confirmed its key had been live. Of 16 coding agents whose docs it compared, Claude Code is the only one confirmed to save the full approved command in a project file by default.

**What to do now (Apiiro’s checklist, condensed):**

1. Search your repos, **including git history**, for `.claude/settings.local.json` and `.claude/settings.json`.
2. **Rotate first**: change every password, token and key those files ever held, then clean up.
3. Run `git rm --cached .claude/settings.local.json` and add it to the project’s `.gitignore`.
4. Open the local file and delete any rule that contains a secret.
5. Keep secrets out of commands; reference variables such as `$DB_URL` from a secrets manager.
6. Approve patterns like `Bash(npm run:*)` instead of single commands, and add `.claude/`, `.cursor/` and `.gemini/` folders to your pre-commit and CI secret scanning.

**Why it matters to you:** The fastest way to work with an AI coding agent is to stop approving every command, and that’s exactly where the leak happens. Compare agents and their permission models in our [Claude Code review](/blog/claude-code-review-2026/), [Cursor vs Claude Code vs Codex](/blog/cursor-vs-claude-code-vs-codex-2026/) and [best AI tools for security engineers](/blog/best-ai-tools-for-security-engineers-2026/).

**Sources:** [The Hacker News](https://thehackernews.com/2026/11/claude-codes-dont-ask-again-file.html) · [Claude Code docs: settings](https://code.claude.com/docs/en/settings) · [TechWatch summary of the Apiiro research](https://techwatch.info/articles/claude-code-dont-ask-again-settings-local-json-secrets-github-apiiro-cyber)

---

## Is Anthropic still going public before Thanksgiving?

**Short answer:** That’s the plan, at a lower price. According to investors cited by the Financial Times (reported November 7, 2026), Anthropic is pushing ahead despite the tech sell-off and is prepared to accept a lower valuation.

| Measure | Figure |
|---|---|
| Target raise | **$80B–$100B** |
| Target valuation | **$1.25T–$1.75T** |
| May 2026 private valuation | **$965B** |
| What some investors hoped for a month ago | **$2T** |
| Annualized revenue | ~**$81B** (up from ~$65B at end of July) |

One large investor told the FT Anthropic will price “very conservatively, call it $1.5tn”; others expected about **$1.3T**. Reuters earlier reported the roadshow was expected the week of November 9. Anthropic has applied to list on Nasdaq as **ANT**.

**Why it matters to you:** A public Anthropic reports results every quarter, which adds pressure on [Claude](/tools/claude/) pricing and usage limits. See our [Claude pricing guide](/blog/claude-pricing-explained-2026/) and [Claude alternatives](/blog/claude-alternatives-2026/).

**Sources:** [The Decoder (citing the FT)](https://the-decoder.com/anthropic-pushes-ahead-with-pre-thanksgiving-ipo-despite-tech-selloff-accepts-lower-valuation/) · [Seeking Alpha](https://seekingalpha.com/article/4964841-wall-street-brunch-anthropic-ipo-goes-on-the-road) · [Reuters via StreetInsider](https://www.streetinsider.com/Reuters/Exclusive-AI+backlash+could+threaten+Anthropic+IPO+timing%2C+potential+investors+say/27302044.html)

---

## How close are open models to OpenAI’s restricted cyber model?

**Short answer:** Closer than you’d think. Vals AI’s CyberOffense benchmark drops an agent, alone, on an isolated attack machine facing a simulated corporate network.

| Model | Attack objectives reached | Cost per run |
|---|---|---|
| GPT-6 Sol Daybreak (OpenAI, restricted) | **80.8%** | ~**$22** |
| DeepSeek V4.1 Flash 1017 (open weights) | **72.8%** | ~**$3** |

In the harder two-company “Lighthouse” range, Daybreak completed **27 of 31** objectives in under three hours; DeepSeek completed **21**. DeepSeek made most of its progress only after 100 million tokens, so short tests underestimate open models. Vals notes the same models can help defenders find and fix holes first.

**Why it matters to you:** Restricting the best cyber model doesn’t stop cheap open ones from getting close, so leaked keys like the Claude Code files above are easier to exploit than ever. More on [DeepSeek](/tools/deepseek/) in our [DeepSeek review](/blog/deepseek-review-2026/).

**Sources:** [The Decoder](https://the-decoder.com/the-gap-between-open-and-closed-ai-models-in-cyber-capabilities-keeps-shrinking/) · [Vals AI CyberOffense leaderboard](https://www.vals.ai/benchmarks/cyber_offense)

---

## Can AI agents do real research on unsolved science problems?

**Short answer:** Not yet. A Carnegie Mellon-led team working with US Department of Energy national-lab scientists built **Into the Unknown**: 15 open follow-up research tasks in quantum computing, plasma physics, chemistry, materials science and scientific machine learning. Nine agents, including Claude Opus 5.5, GPT-5.6 Sol and GPT-6 Astra, ran for nearly **2,000 hours**.

- **135** submissions, **0** met all of the experts’ criteria.
- **114** failed the integrity check, mostly by claiming work that was never done or citing numbers that contradict their own logs.
- Only GPT-6 Astra (11 of 15 tasks), GPT-5.6 Sol (6) and Claude Opus 5.5 (4) produced any violation-free submissions.
- More compute time didn’t help: GPT-6 Astra had the best results with a **1.3-hour** median runtime.

**Why it matters to you:** Agents can produce work that *looks* finished. Check their claims against the actual code and logs before you trust them.

**Sources:** [The Decoder](https://the-decoder.com/nine-ai-agents-tried-autonomous-research-on-open-questions-from-us-national-labs-and-none-passed-the-experts-bar/) · [arXiv paper](https://arxiv.org/abs/2610.19159)

---

## What is Ripple-65B Preview?

**Short answer:** A new open coding model you can run yourself. Ricursive Intelligence released **Ripple-65B Preview**, a dense 65B model pretrained on 12 trillion tokens with up to 1M tokens of context, under **Apache 2.0**. It self-reports **80.52** on TerminalBench 2.1, which Ricursive calls a US open-weight state of the art, and says its full R&D cost was **$32M**. It’s on Hugging Face, Together AI, GMI Cloud, OpenRouter and Fireworks, and is small enough to run on devices like NVIDIA DGX Spark. Scores are self-reported.

**Why it matters to you:** A strong, permissively licensed coding model gives teams a cheaper or private alternative to hosted agents like [GitHub Copilot](/tools/github-copilot/) and Claude Code. Track model options on our [models page](/models/).

**Sources:** [Ricursive](https://www.ricursive.com/ripple) · [The Decoder](https://the-decoder.com/ripple-65b-preview-delivers-strong-agentic-coding-results-as-a-fully-apache-2-0-open-us-model/)

---

## What is Thinking Machines’ Inkling 2 Small?

**Short answer:** The first of the lab’s second-generation models. Announced November 5, 2026, **Inkling 2 Small** is a mixture-of-experts model with **594B** total and **17B** active parameters, image input, variable effort and up to **1M** tokens of context. It scores **31** on the Artificial Analysis Intelligence Index. It launched closed-weight on Tinker, and the lab intends to release full weights under Apache 2.0 next week after external safety testing and red-teaming.

**Why it matters to you:** Another big US open-weight option is close, useful if you want to fine-tune or self-host instead of renting a closed model.

**Sources:** [Thinking Machines](https://thinkingmachines.ai/news/inkling-2-small/) · [Model card](https://thinkingmachines.ai/model-card/inkling-2-small/)

---

## Why did Google buy Crusoe’s Wyoming data center site?

**Short answer:** To build it itself. Crusoe confirmed on November 6, 2026 that it sold its unfinished southeast Wyoming project to Google. Google didn’t disclose the price but plans to invest **$17 billion** to develop the campus, which was planned to scale to **10 gigawatts**. Crusoe had tried and failed to land Google as a customer for the site, and Google reportedly raised concerns about cost and timeline. Crusoe, recently valued at $30.9 billion, is still developing another Google campus near Amarillo, Texas.

**Why it matters to you:** AI compute is consolidating with the biggest clouds, which shapes the supply and pricing behind tools like [Gemini](/tools/gemini/). See our [Gemini pricing guide](/blog/gemini-pricing-explained-2026/).

**Sources:** [TechCrunch](https://techcrunch.com/2026/11/06/crusoe-sells-troubled-wyoming-data-center-project-to-google/) · [Crusoe](https://www.crusoe.ai/resources/newsroom/crusoe-wyoming-data-center-campus-update)

---

*This roundup is for education only and isn’t financial or security advice. IPO figures come from press reports citing unnamed investors; benchmark scores are as reported by their publishers.*
