---
title: "AI News Roundup – November 24, 2026"
description: "Today’s AI news: GPT-6.2 now powers ChatGPT’s everyday Chat tab; OpenAI and Cisco open-source Shirudo; DeepMind agents cut a fusion quantum algorithm’s cost 11.8x; Sierra raises $1.75B; Humanity’s First Exam; OpenAI healthcare API configs; OpenWorks."
pubDate: 2026-11-24T15:30:00-05:00
tags: ["ai-news"]
relatedTools: ["chatgpt", "openai-codex", "gemini"]
sample: false
draft: false
---

## TL;DR

- **GPT-6.2 now runs ChatGPT’s everyday Chat tab** for Plus, Pro, Business and Enterprise. In OpenAI’s own tests it scored **71.7%** on image understanding, up from **47.4%** for GPT-6. Free and Go plans don’t get it, and GPT-5.6 Sol retires on **Dec 23**.
- **OpenAI and Cisco open-sourced Shirudo**, which deploys temporary “shields” on running Linux systems to block exploits until a patch lands.
- **Google DeepMind’s Gemini 4 agent teams** cut the estimated cost of a fusion quantum algorithm **11.8x**, with every result proved in Lean.
- **Sierra is raising $1.75 billion** at a **$30 billion** valuation for AI customer-service agents.
- **DeepMind launched Humanity’s First Exam**, a **544-prompt** benchmark that checks whether models get easy, everyday questions right every time.
- **OpenAI’s API added Healthcare model configurations** that search a dedicated index of medical sources.
- **OpenAI’s OpenWorks pilot** pays local AI experts up to **$8,000 a month** to help U.S. small businesses for free.

**Today’s take:** The best model upgrade is the one you don’t have to switch on. ChatGPT just moved its paid users’ default chats to GPT-6.2, but every number behind it is OpenAI’s own test against GPT-6, so try it on your real photos and research questions before you change how you work.

---

<div class="video-embed" style="position:relative;width:100%;max-width:960px;aspect-ratio:16/9;margin:1.5rem 0;border-radius:12px;overflow:hidden;background:#000;">
  <iframe src="https://www.youtube-nocookie.com/embed/yqkSLTWsYKw" title="GPT-6.2 Is Now in ChatGPT Chat: What Changed" style="position:absolute;inset:0;width:100%;height:100%;border:0;" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## What changed in ChatGPT’s Chat tab with GPT-6.2?

**Short answer:** Your everyday chats on a paid plan now use a chat-tuned version of GPT-6.2 Sol. On Nov 23, OpenAI started rolling it out globally in the **Chat tab** for **Plus, Pro, Business and Enterprise**. A week earlier, GPT-6.2 had launched only in ChatGPT Work, Codex and the API ([our Nov 17 roundup](/blog/ai-news-roundup-2026-11-17/)). OpenAI says it is better at detailed instructions and web research, such as weighing hotels by price and location, and at knowing when to follow up, like offering to tell you when a price drops.

| OpenAI’s Chat-tab test (vs. GPT-6) | GPT-6 | GPT-6.2 |
|---|---|---|
| Image understanding | 47.4% | **71.7%** |
| Following instructions on especially hard prompts | 62.5% | **78.1%** |
| Internal expert-task evaluation (lowest reasoning setting) | 52% | **65%** |
| Internal BrowseComp (Extra high) | 54.4% | **64.5%** |
| Safety-policy compliance in challenging conversations | 77–80% | **91–94%** |

Enterprise access depends on admin settings, and the models in Work and Codex aren’t changing. MacRumors notes GPT-6.2 isn’t available on the Free and Go plans. 9to5Mac reports that OpenAI will retire **GPT-5.6 Sol** from Chat, Work and Codex on **Dec 23**, and **GPT-5.6 Terra** from Work and Codex the same day. On Nov 24, OpenAI also pointed the API’s `chat-latest` snapshot at the newest ChatGPT model, while recommending the GPT-6.2 family for production apps.

**Why it matters to you:** If you pay for [ChatGPT](/tools/chatgpt/), your default chats got the newer model without any switching, and the biggest jump is in reading photos (text on a label, symbols on a sign). The scores are OpenAI’s internal tests, so check them on your own tasks. If a workflow depends on GPT-5.6 Sol, you have until Dec 23. Developers pay **$2 / $10** per million tokens for GPT-6.2 Sol in the API (see our [models page](/models/)).

**Sources:** [OpenAI Help Center: ChatGPT release notes](https://help.openai.com/en/articles/6825453-chatgpt-release-notes) · [9to5Mac](https://9to5mac.com/2026/11/23/chatgpt-expands-gpt-6-2-sol-as-openai-sets-retirement-date-for-two-models/) · [MacRumors](https://www.macrumors.com/2026/11/23/openai-gpt-6-2-sol-chatgpt/) · [OpenAI API changelog](https://developers.openai.com/api/docs/changelog)

---

## What is Shirudo, and how does it block exploits before a patch?

**Short answer:** It drops a temporary, approved “shield” into a running Linux system to block the vulnerable behavior while the real fix rolls out. On Nov 23, OpenAI and Cisco launched **Shirudo** (Japanese for “shield”), an open-source runtime built on **eBPF**, the Linux feature that runs small programs inside the operating system. Teams test whether a shield blocks the exploit while normal requests still pass, then an operator approves it and it deploys with no restart.

Shields are cryptographically signed and checked by Linux’s eBPF verifier, and a TPM chip supports a verifiable record of protections loaded or removed. In a controlled test, a **Codex-generated** shield added an input check to Java’s Base64 decoder and blocked a Java4Shell exploit attempt against a running Elasticsearch service. It’s licensed BSD 2-Clause, builds on Cisco’s Isovalent Tetragon work, and is still pre-release. BleepingComputer quotes Expel researcher Marcus Hutchins questioning whether AI agents should write rules that touch the kernel.

**Why it matters to you:** AI is finding bugs faster than teams can patch. If you run servers you can’t easily restart, this is a way to buy time, with a human approving every shield. See how [OpenAI Codex](/tools/openai-codex/) fits in and our [AI tools for security operations](/blog/best-ai-tools-for-security-ops-2026/).

**Sources:** [OpenAI](https://openai.com/index/introducing-shirudo) · [Cisco Newsroom](https://newsroom.cisco.com/c/r/newsroom/en/us/a/y2026/m11/cisco-and-openai-launch-shirudo-a-new-project-to-safeguard-agentic-ai.html) · [The Register](https://www.theregister.com/security/2026/11/24/cisco-and-openai-pitch-ebpf-kernel-plugins-as-the-way-to-tame-the-patchpocalypse/5311795) · [BleepingComputer](https://www.bleepingcomputer.com/news/security/new-shirudo-tool-uses-ai-to-shield-unpatched-linux-systems-from-exploits/)

---

## How did DeepMind’s agent teams make quantum algorithms cheaper?

**Short answer:** Separate teams of Gemini 4 agents searched for improvements, proved each one in the Lean theorem prover, and swapped ideas at a virtual “conference” every four hours. On Nov 23, Google DeepMind and Google Quantum AI shared the results:

| Problem | Reported improvement |
|---|---|
| Inertial confinement fusion property | Cost cut **11.8x**; memory **5,650 → 4,338** error-corrected qubits |
| Light-sensitive molecule simulation | **8x** cheaper |
| Cytochrome P450 (drug-metabolism enzyme) | **2.5x**; memory **481 → 333** qubits |
| One Grover’s algorithm implementation | **2.57x** speedup |
| Arcsin routine | **290x** speedup |

These are resource estimates, not measured runtimes, and DeepMind says the simulations would still need more than the first error-corrected quantum computers are likely to provide. It is open-sourcing the Lean library, problem specs and verified solutions.

**Why it matters to you:** It’s the third “AI plus a proof checker” result in a week, after the [Lean proof by GPT-6.2 Astra](/blog/ai-news-roundup-2026-11-23/). The lesson for anyone using AI agents: output you can verify mechanically is worth far more than output you have to trust. See how agent teams work in [AI agent orchestration](/blog/what-is-ai-agent-orchestration-2026/).

**Sources:** [Google DeepMind](https://deepmind.google/blog/finding-faster-quantum-algorithms-with-agents-and-formal-verification/) · [The Next Web](https://thenextweb.com/news/google-deepmind-gemini-agents-quantum-algorithms-lean)

---

## Why is Sierra worth $30 billion?

**Short answer:** Investors are betting AI agents become the front door for customer service. On Nov 23, Sierra, co-founded by Bret Taylor and Clay Bavor, said it is raising **$1.75 billion** at a **$30 billion** valuation, led by Greenoaks and Lightspeed Venture Partners, with Benchmark, Sequoia, GV and Tiger Global returning. Sierra says it passed **$400M** in annual recurring revenue in just over two and a half years, and that it charges for **outcomes** (a problem resolved, a claim paid) rather than usage or tokens. TechCrunch says the valuation doubled within six months.

**Why it matters to you:** The next support chat you open is more likely to be an AI agent. If you buy AI for a business, outcome-based pricing (pay per result, not per token) is worth asking vendors about. Compare options in [the best AI chatbots for business](/blog/best-ai-chatbots-for-business-2026/).

**Sources:** [Sierra](https://sierra.ai/blog/series-f-30b) · [TechCrunch](https://techcrunch.com/2026/11/23/sierra-doubles-valuation-to-30b-within-six-months-as-demand-for-ai-in-cx-takes-off/)

---

## What is Humanity’s First Exam?

**Short answer:** A Google DeepMind benchmark that asks whether AI gets **easy** questions right **every time**, not whether it can solve hard ones once. Launched on Kaggle on Nov 24, it has **544** elementary text and image prompts across **20** foundational capabilities, and checks models on each task and slight variations of it. One example: list the color of the third letter of each word in a neon sign. DeepMind says frontier models have made significant progress on it over the last six months. There’s a live leaderboard, a technical report, and a three-week Kaggle competition through **Dec 15** to submit everyday questions models still get wrong.

**Why it matters to you:** Most benchmarks show a model’s best day. Consistency on simple, repeated tasks decides whether you can trust a tool with routine work. Build a small version for yourself with an [AI eval golden set](/blog/what-is-ai-eval-golden-set-2026/).

**Source:** [Google blog](https://blog.google/innovation-and-ai/models-and-research/google-deepmind/humanitys-first-exam/)

---

## What are OpenAI’s new Healthcare model configurations?

**Short answer:** API presets for clinical questions. On Nov 24, OpenAI released Healthcare configurations for the Responses API (`gpt-6.2-astra-healthcare`, `gpt-6.2-sol-healthcare`, `gpt-6-astra-healthcare` and `gpt-6.1-sol-healthcare`), pairing select models with a harness tailored to clinical questions. When the model uses web search, it searches a **dedicated index of medical sources**.

**Why it matters to you:** If you build health apps, you get a narrower, medical-source search without building your own. It’s a developer configuration, not a medical device, and answers still need clinical review. Background: [what AI hallucination is](/blog/what-is-ai-hallucination-2026/).

**Source:** [OpenAI API changelog](https://developers.openai.com/api/docs/changelog)

---

## What is OpenAI’s OpenWorks program?

**Short answer:** A U.S. pilot that pays local AI experts to help small businesses for free. Launched Nov 23 in **20** U.S. cities, OpenWorks gives “OpenWorks Partners” (individuals, small teams or consultancies) a monthly stipend of **up to $8,000** to work with independently owned small businesses on projects the owners pick, and to host a monthly workshop. Businesses get one-on-one help and **3 months of ChatGPT Business** at no cost. Software, SaaS, venture-backed and private-equity-owned companies aren’t eligible. OpenAI’s examples are business-reported, such as a microgreens grower who estimates his response rate rose from 20% to 75%.

**Why it matters to you:** It’s U.S.-only, but it shows where AI tools are heading: hands-on setup help for non-technical businesses, bundled with a paid seat. Compare plans in [ChatGPT pricing explained](/blog/chatgpt-pricing-explained-2026/).

**Source:** [OpenAI](https://openai.com/openworks/)

---

## What this means for you

If you pay for ChatGPT, spend ten minutes re-running a few prompts you rely on, especially ones with photos or web research, and note anything that still depends on GPT-5.6 Sol before it goes away. Today’s other stories point the same way: trust AI output in proportion to how well you can check it, whether that’s a signed and approved shield, a proof checker or a repeated test. If you’re choosing a plan or a model, compare on your own tasks rather than on launch-day charts.

- Which paid tier gets what: [ChatGPT Go vs. Plus vs. Pro](/blog/chatgpt-go-vs-plus-vs-pro-2026/).
- Testing a model on your own prompts: [what AI eval testing is](/blog/what-is-ai-eval-testing-2026/).
- API prices side by side: [AI model comparison](/models/).

---

*Education only. Prices, plans and model availability can change; verify with the official sources above. Compare current model prices on our [models page](/models/) and browse the [AI tools directory](/tools/).*
