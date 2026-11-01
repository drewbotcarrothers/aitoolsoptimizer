---
title: "AI News Roundup – November 1, 2026"
description: "Today’s AI news: ChatGPT and Codex will share one token-based usage allowance from December; DeepSeek open-sources a ‘super agent’ for coding teams; Google’s PlanAssist cuts planning work by up to 58%; OpenAI’s GPT-Rosalind-6 for vetted scientists; a fixed ChatGPT share-link flaw; and more."
pubDate: 2026-11-01T15:45:00-05:00
tags: ["ai-news"]
relatedTools: ["chatgpt", "openai-codex", "deepseek", "gemini", "claude", "claude-code"]
sample: false
draft: false
---

## TL;DR

- **OpenAI** says that starting in **December**, Plus, Pro and Business plans will have **one usage allowance shared across ChatGPT and Codex**, measured in **tokens**. **Instant** chat won’t count against it.
- **DeepSeek** open-sourced **dsh-superagent**, an MIT-licensed research prototype of a coding agent that takes requests from GitHub and team chat and answers with pull requests.
- **Google DeepMind’s PlanAssist**, built with Gemini, cut the time UK planning officers spent on householder assessments by **58%** in pilots and is expanding to **12 more councils**.
- **OpenAI** released **GPT-Rosalind-6** for approved life-sciences teams only. It uses the same weights as GPT-6 Astra, with fewer refusals on dual-use biology questions.
- Researchers at **Parameter** showed a public **ChatGPT share link** could run code in a viewer’s session and read private chats. OpenAI fixed it on **Oct 26**.
- A **Claude Sonnet 5** agent chose a gene therapy and injected it into a **live mouse’s brain** at startup Exin Therapeutics, WIRED reports.
- **Baseten** is nearing a roughly **$2 billion** round at up to a **$30 billion** valuation, Bloomberg reports.

**Today’s take:** Your AI subscription is turning into one shared token budget. When chat, agents and coding all draw from the same pool, the model you pick for each task decides how far your plan goes, so start watching Settings → Usage now.


<div class="video-embed" style="position:relative;width:100%;max-width:960px;aspect-ratio:16/9;margin:1.5rem 0;border-radius:12px;overflow:hidden;background:#000;">
  <iframe src="https://www.youtube-nocookie.com/embed/4fKykAIq53c" title="Why ChatGPT and Codex Will Share One Limit" style="position:absolute;inset:0;width:100%;height:100%;border:0;" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

---

## Will ChatGPT and Codex share one usage limit?

**Short answer:** Yes, from December. OpenAI’s Help Center says Plus, Pro and Business plans’ usage allowance “will be shared across ChatGPT and Codex as we bring the agentic capabilities of Work into the main ChatGPT experience.”

| What changes | Details (OpenAI) |
|---|---|
| Who | Plus, Pro and Business plans |
| When | December (no exact date yet) |
| How it’s measured | Tokens; depends on the model and the task |
| Uses more | More advanced models and complex tasks |
| Doesn’t count | Instant chat |
| Where to check | Settings → Usage (combined remaining usage and reset times) |
| At the limit | Wait for the reset, upgrade, or buy credits for eligible features |

- OpenAI says it expects “most users won’t need to wait for their usage to reset more often than they do now.” It hasn’t published allowance sizes per plan.
- In an email to subscribers seen by **BleepingComputer**, OpenAI said it will test a **combined Chat and Work experience** in the coming weeks with a small group of users. **Codex** stays a separate experience in the ChatGPT desktop app.
- OpenAI had already **doubled Work and Codex allowances** for its Pro 100, Pro 200 and Pro 500 plans, effective Oct 29, BleepingComputer reports.

**Why it matters to you:** If you code with [Codex](/tools/openai-codex/) all day, those runs will come out of the same budget as your advanced [ChatGPT](/tools/chatgpt/) chats. Use Instant for quick questions and save heavier models for work that needs them. Compare plans in our [ChatGPT pricing guide](/blog/chatgpt-pricing-explained-2026/) and [Codex pricing explained](/blog/openai-codex-pricing-explained-2026/).

**Sources:** [OpenAI Help Center](https://help.openai.com/en/articles/20001625-understanding-chatgpt-and-codex-usage-limits) · [BleepingComputer](https://www.bleepingcomputer.com/news/artificial-intelligence/openai-says-its-doubling-pro-usage-limits-and-bringing-work-features-to-chat/)

---

## What is DeepSeek’s open-source “super agent”?

**Short answer:** A coding agent for software teams, released on GitHub as **dsh-superagent-prototype** under the MIT license. DeepSeek calls it a “research prototype for reference only, not an official DeepSeek product.”

- It works on **one GitHub repository**, packaged for **DeepSeek Harness**, and can also listen to **Feishu** chat.
- When an allowed person asks for work, it opens a work item, works in its own session and directory, and replies in the original thread, for example **with a pull request**. A web panel shows what needs a person.
- Its rule: “take as little human attention as possible, and give as much value as possible.” It acts only when asked or when a rule the team wrote allows it.
- The public code differs from DeepSeek’s internal version, and some ideas in the design article aren’t built yet. Bloomberg reports the agent is aimed at Anthropic’s Claude Code (via The Next Web).

**Why it matters to you:** Agents that sit in your team chat and open PRs are coming from every direction. This one is free to study, but it’s research code, so review it before you run it. Compare [DeepSeek](/tools/deepseek/), [Claude Code](/tools/claude-code/) and others in [the best AI coding assistants](/blog/best-ai-coding-assistants-2026/).

**Sources:** [GitHub (DeepSeek)](https://github.com/deepseek-ai/dsh-superagent-prototype) · [The Next Web](https://thenextweb.com/news/deepseek-super-agent-open-source-coding-agent) · [South China Morning Post](https://www.scmp.com/tech/article/3372884/deepseek-unveils-ai-super-agent-coding-race-openai-anthropic)

---

## How much time does Google’s PlanAssist save planners?

**Short answer:** Up to **58%**. In pilots in Barnet, Camden and Dorset since June, PlanAssist brought the average time planning officers spent on householder assessment tasks down by 58%, and **over 70%** of its reports were approved with no edits.

| PlanAssist | Detail |
|---|---|
| Built with | Gemini (Google DeepMind with the UK government, Google Cloud and Faculty) |
| Does | Checks documents and drawings, heritage constraints, local and national policies and prior objections, then drafts fully cited reports |
| Next | 12-month Beta on live applications; 12 more councils, 15 in total |
| Goal | All councils in England in 2027, subject to testing |

Planning officers keep the final say on every application.

**Why it matters to you:** It’s a clear template for useful workplace AI: automate the routine checks, cite everything, and keep a human approving the result. See [Gemini](/tools/gemini/).

**Sources:** [Google DeepMind](https://deepmind.google/blog/speeding-up-planning-decisions-with-ai/)

---

## What is GPT-Rosalind-6, and who can use it?

**Short answer:** OpenAI’s newest life-sciences model, for **approved organizations only**. Its Oct 30 system card says it uses the **same weights as GPT-6 Astra**, with fewer refusals on dual-use biology questions, while still refusing help with biological weapons. OpenAI treats it as **High** capability in biology and chemistry, below Critical.

| Benchmark (highest reasoning budget) | GPT-Rosalind-6 | GPT-Rosalind-5.5 |
|---|---|---|
| MedChemBench v7 | 49.6% | 28.9% |
| GeneBench Pro v13 | 37.7% | 16.7% |
| LifeSciBench Gold | 61.3% | 44.0% |

Approved Research organizations can use it in **Work and Codex**, and in the API where separately approved, but **not in the Chat tab**. In Enterprise workspaces it starts with a two-week Admin Preview, off by default.

**Why it matters to you:** OpenAI keeps putting its most capable science tools behind vetting rather than a subscription. Buying ChatGPT doesn’t unlock it. See our [models page](/models/).

**Sources:** [OpenAI Deployment Safety Hub](https://deploymentsafety.openai.com/gpt-rosalind-6/introduction) · [OpenAI Help Center](https://help.openai.com/en/articles/20001193-gpt-rosalind-for-life-sciences-research)

---

## Could a shared ChatGPT link read your private chats?

**Short answer:** It could, until **Oct 26**. Researchers at **Parameter** showed that an ordinary public ChatGPT share could run attacker-controlled code inside the signed-in session of whoever opened it. In their proof, it listed the victim’s conversations, read a private chat never shared with the attacker, and sent data to an outside server.

- The chain combined an interactive graph (which loaded the MathLive math library) with ChatGPT’s HTML Preview.
- Reported Oct 18; OpenAI reproduced it Oct 21, rated it **P1**, fixed it Oct 26 across two web frontends, and paid a **$5,000** bounty.

**Why it matters to you:** The fix was on OpenAI’s side. The lesson is broader: a share link from a trusted AI site is still a link from a stranger. See [ChatGPT](/tools/chatgpt/) and our [AI tools for security teams](/blog/best-ai-tools-for-security-engineers-2026/).

**Sources:** [Parameter](https://www.parameter.ai/labs/we-found-a-gap-at-openai)

---

## Did an AI agent really operate on a mouse?

**Short answer:** Yes, under human oversight. WIRED reports that Exin Therapeutics, a San Francisco startup, gave an AI agent **19 gene-therapy options**, a mouse with epilepsy and a motorized surgery rig. After a veterinary surgeon did the craniotomy, the agent picked the therapy, brain region and coordinates, then controlled the needle, volume and speed.

- **Claude Opus 5.5** refused to guide the needle, so the team switched to **Claude Sonnet 5**, which agreed.
- Safeguards included human approval of the plan, an emergency button that cut the rig’s motors, and no agent access to the equipment code. When a glitch broke the coordinates, the agent spotted the error but wouldn’t edit the code, so a separate **Opus 5** agent made the fix.
- The surgery took slightly over an hour (about 45 minutes is typical). The mouse is recovering; seizure results are pending, and the work isn’t peer-reviewed.

**Why it matters to you:** Agents are moving from planning experiments to running equipment. Notice which guardrails held and which needed a workaround. See [Claude](/tools/claude/) and [what an AI agent is](/blog/what-is-an-ai-agent-2026/).

**Sources:** [WIRED](https://www.wired.com/story/an-ai-agent-did-brain-surgery-on-live-mouse/) · [The Decoder](https://the-decoder.com/a-claude-model-autonomously-chose-a-gene-therapy-and-operated-on-a-mouse-brain-with-no-human-decision-making/)

---

## Why is Baseten worth up to $30 billion?

**Short answer:** Inference demand. Bloomberg reports Baseten is nearing about **$2 billion** in two tranches, valuing it at **$26 billion** and then **$30 billion**, led by existing investor Sands Capital. Baseten was valued at **$13 billion** in June after raising $1.5 billion. Rival Fireworks AI raised $1.5 billion in July at $17.5 billion. Baseten didn’t comment.

**Why it matters to you:** Companies that run open and custom models for others are drawing big money, which can mean more choice and lower prices for running AI apps. Learn the basics in [AI inference vs training](/blog/what-is-ai-inference-vs-training-2026/).

**Sources:** [Bloomberg via Investing.com](https://www.investing.com/news/company-news/baseten-seeks-30bn-valuation-in-new-2-billion-funding-round--bloomberg-4988882) · [Bloomberg](https://www.bloomberg.com/news/articles/2026-10-30/baseten-set-for-30-billion-valuation-with-new-funding)

---

## Where can I follow daily AI news?

Every roundup lives on our [AI news page](/ai-news/), with sources for each story. Browse the [AI tools directory](/tools/) to compare the tools mentioned here.

*Figures are as reported by the companies and outlets linked above. This roundup is for education only; verify primary sources before making decisions.*
