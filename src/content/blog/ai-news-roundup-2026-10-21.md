---
title: "AI News Roundup – October 21, 2026"
description: "Today’s AI news: AI helped uncover two critical PHP flaws (php2shell), so patch now; Anthropic’s draft IPO filing shows $16.3B in first-half revenue and an $80.7B loss; OpenAI models come to Google Cloud; ElevenLabs launches Eleven Realtime; Gemini gets personal on Android Auto; humans& releases Ampersand; and DeepMind’s AI tackles the Busy Beaver problem."
pubDate: 2026-10-21T15:30:00-04:00
tags: ["ai-news"]
relatedTools: ["openai-codex", "chatgpt", "claude", "gemini", "elevenlabs"]
sample: false
draft: false
---

## TL;DR

- **Patch PHP now:** AI-assisted researchers uncovered **two critical PHP flaws** (dubbed **php2shell**, both rated **CVSSv4 9.2**) that can let an unauthenticated attacker run code on a server. Fixed versions **8.5.12, 8.4.27, 8.3.36 and 8.2.35** shipped October 21, and early attacks are already being seen.
- **Anthropic’s numbers leak:** The Wall Street Journal reviewed a draft IPO filing showing **$16.3 billion** in first-half 2026 revenue (up from **$1.1 billion**), an **$80.7 billion** net loss (mostly non-cash) and about **$450 billion** in cloud commitments.
- **OpenAI on Google Cloud:** **GPT-6 Astra, GPT-6.1 Sol and GPT-6 Luna** are rolling out in private preview in Google Cloud’s Model Garden, and Codex can connect too.
- **ElevenLabs** launched **Eleven Realtime**, speech-to-speech models that each work as a complete voice agent, in **90+ languages**.
- **Google** is rolling out Gemini’s **Personal Intelligence** on **Android Auto**, so it can use your Gmail, Calendar, Photos and Maps hands-free.
- **humans&** released **Ampersand v0.1**, a model trained to help **groups** work together.
- **Google DeepMind** used a Gemini-based agent to discover and formally prove new results on the **Busy Beaver** problem.

---

## Watch: AI News Roundup video (Oct 21, 2026)

<div class="video-embed" style="position:relative;width:100%;max-width:960px;aspect-ratio:16/9;margin:1.5rem 0;border-radius:12px;overflow:hidden;background:#000;">
  <iframe src="https://www.youtube-nocookie.com/embed/pd3FZXsNSeA" title="AI Found Critical PHP Flaws + Anthropic&#39;s IPO Numbers Leak | AI News Oct 21" style="position:absolute;inset:0;width:100%;height:100%;border:0;" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

Prefer YouTube? [Watch on the AI Tools Optimizer channel](https://www.youtube.com/watch?v=pd3FZXsNSeA).

## What is php2shell, and do you need to patch PHP?

**Short answer:** Yes, if you run PHP, update now. On October 21 the PHP project released **PHP 8.5.12, 8.4.27, 8.3.36 and 8.2.35** to fix two critical vulnerabilities, **CVE-2026-109618** (memory corruption when a request hits the memory limit at the wrong moment) and **CVE-2026-109619** (a use-after-free from leftover state between requests). Both are rated **CVSSv4 9.2** and can allow an **unauthenticated attacker to execute code** on the server. PHP says every installation that serves web requests is at risk, including PHP-FPM, Apache with mod_php, php-cgi, FrankenPHP and LiteSpeed, with mod_php the most exposed. In the PHP Foundation’s words: “If you run PHP, it is imperative that you update now.”

AI played a central role in finding them. OpenAI says security firm **Calif** identified a critical flaw using **GPT-5.6 Sol** as part of OpenAI’s **Patch the Planet** program, and **Wiz** also independently found and reported both. OpenAI then led a two-month effort with maintainers, researchers and security providers to prepare fixes before disclosure, calling it “one of the most impactful security issues in recent memory.” The release was pulled forward a day after the CVE IDs leaked online on October 20. Tenable reports that **Cloudflare** is seeing early attacks and **watchTowr** is seeing exploitation attempts. Cloudflare has deployed stopgap firewall rules for all customers, including free plans. Older PHP 7.4 to 8.1 get only source backports, and 5.4 to 7.3 get no fix at all. OpenAI has published a [PHP version checker](https://github.com/openai/php2shell-checker) and a Codex skill to help you check your sites.

**Why it matters:** PHP runs a large share of the web, including WordPress, Drupal, Joomla and Magento sites. It’s also a turning point: AI is now finding security holes with internet-wide impact. That helps defenders only if people patch quickly. If you use [OpenAI Codex](/tools/openai-codex/), you can point it at OpenAI’s checker repo, or simply ask your host which PHP version you’re on.

**Sources:** [OpenAI: Patch the Planet](https://openai.com/index/coordinated-disclosure-of-critical-vulnerabilities/) · [PHP Foundation](https://thephp.foundation/blog/2026/10/21/todays-php-security-release-and-how-were-strengthening-php-security/) · [Tenable FAQ](https://www.tenable.com/blog/php2shell-cve-2026-109618-cve-2026-109619-frequently-asked-questions-about-critical-php-remote) · [OpenAI on X](https://x.com/OpenAI/status/2112907856018309586)

---

## What does Anthropic’s leaked IPO filing reveal?

**Short answer:** The Wall Street Journal reviewed a draft of Anthropic’s **S-1** prospectus. According to its reporting (as summarized by Fortune and Stocktwits), Anthropic earned **$16.3 billion** in revenue in the first half of 2026, up from **$1.1 billion** a year earlier, already well above its **$4.6 billion** for all of 2025. It also posted an **$80.7 billion** net loss for the half, though about **$72 billion** of that came from non-cash charges tied to convertible notes and other financing. It spent nearly **$9 billion** on computing and infrastructure in six months, more than the **$7.3 billion** it spent in all of 2025, and has signed roughly **$450 billion** in mostly noncancelable cloud deals over the next seven to ten years.

The risk factors include AI models showing self-preserving behavior, such as blackmail to avoid being shut down. The WSJ says the IPO could value Anthropic at up to **$2 trillion**. IFR reports that Anthropic plans to file publicly on **October 26**, start its roadshow **November 9** and raise up to **$100 billion**. These figures come from a draft and press reports. Anthropic hasn’t commented, and the public filing isn’t out yet.

**Why it matters:** This is the clearest look yet at the economics of frontier AI. Revenue is soaring, but compute bills and commitments are bigger still. How investors price Anthropic will shape AI funding and pricing across the industry, including what you pay for [Claude](/tools/claude/). Compare model prices on our [Models](/models/) page.

**Sources:** [The Wall Street Journal](https://www.wsj.com/tech/ai/anthropic-revenue-growth-ipo-accaf0f1) · [Fortune](https://fortune.com/2026/10/21/anthropic-s-1-leak-income-statement-ipo/) · [Stocktwits via Yahoo Finance](https://finance.yahoo.com/technology/ai/articles/anthropic-prospectus-shows-revenue-growing-224511416.html) · [IFR](https://www.ifre.com/equities/2499407/anthropic-pushes-ahead-with-mid-november-ipo)

---

## Can you now use OpenAI models on Google Cloud?

**Short answer:** In preview, yes. On October 21, OpenAI and Google Cloud announced that OpenAI’s frontier models and **Codex** are coming to Google Cloud’s **Model Garden**. Google says **GPT-6 Astra**, **GPT-6.1 Sol** and **GPT-6 Luna** are rolling out now in **private preview** to select enterprise customers. Customers can build with them through Google Cloud APIs and connect local **Codex CLI and Desktop** workflows to Google’s Gemini platform for inference. OpenAI says general availability is planned in the coming weeks.

Purchases run through **Google Cloud Marketplace**, show up on one Google Cloud invoice and count toward existing cloud spending commitments. OpenAI models are also coming soon to **Google Antigravity** and Gemini’s business agent tools. Google says it is now the only major cloud offering all three leading closed-model families, alongside more than 200 other models. OpenAI notes that **Microsoft remains its primary cloud partner**.

**Why it matters:** Rival labs’ models are turning into interchangeable parts inside the big clouds. If your company is on Google Cloud, using GPT-6 models no longer means a separate contract, so you have more freedom to pick the best model for each job. See [ChatGPT](/tools/chatgpt/), [OpenAI Codex](/tools/openai-codex/), [Gemini](/tools/gemini/) and the [Models](/models/) page.

**Sources:** [OpenAI: OpenAI models are coming to Google Cloud](https://openai.com/index/openai-models-google-cloud/) · [Google Cloud blog](https://cloud.google.com/blog/products/ai-machine-learning/google-cloud-brings-openai-models-to-customers) · [Reuters via Investing.com](https://www.investing.com/news/stock-market-news/openai-to-sell-its-top-models-on-google-cloud-in-latest-enterprise-push-4962854)

---

## What is ElevenLabs’ Eleven Realtime?

**Short answer:** On October 20, ElevenLabs launched **Eleven Realtime**, a new family of **speech-to-speech** models. Each model is a complete voice agent, with speech recognition, turn-taking, the language model and the voice tuned together as one system. **Realtime v1 Mini** is built for natural conversations at low cost, and **v1 Max** for complex tasks like customer support and multi-step workflows. Both support **90+ languages** and any of the **17,000+** voices in the ElevenLabs library.

ElevenLabs cites independent testing by Artificial Analysis. **v1 Max** scored **98.8%** on the Big Bench Audio reasoning test and starts speaking in **0.57 seconds** on average. Mini scored **75.9%** and starts in **0.62 seconds**. On tool-use tasks, Max completed **87.1%** and Mini **60.3%**. The models are available in **ElevenAgents** and through a Realtime API that’s compatible with OpenAI’s, so switching is mostly a change of endpoint and model name. Pricing is per minute plus tokens, and Max costs more than Mini.

**Why it matters:** Building a natural-sounding voice agent used to mean stitching together five separate parts. One model with a familiar API makes phone bots, tutors and support agents much faster to ship. See our [ElevenLabs](/tools/elevenlabs/) review.

**Sources:** [ElevenLabs: Introducing Eleven Realtime](https://elevenlabs.io/blog/realtime) · [Eleven Realtime page](https://elevenlabs.io/realtime) · [The Decoder](https://the-decoder.com/elevenlabs-releases-two-new-speech-to-speech-models-designed-for-real-time-ai-conversations/)

---

## What can Gemini do in your car now?

**Short answer:** Google said on October 20 that **Personal Intelligence** in Gemini is rolling out starting that day on **Android Auto**, and in the coming months on cars with Google built-in. With your permission, it connects **Gmail, Google Calendar, Google Photos, Google Maps, YouTube and Search**, so you can ask things like “What’s my flight gate? And is my flight on time?” or “Find the car wash from the photo I took last week and navigate there” without touching your phone.

It’s opt-in and can be turned off anytime. If you already enabled it in the Gemini app, it carries over to the car. It’s rolling out to eligible personal Google accounts for users **18 and older** globally, except in the **EEA, Switzerland, the UK and Nigeria**, and isn’t available for Workspace business, enterprise or education accounts.

**Why it matters:** This is an assistant that knows your email and photos riding along hands-free, a big step beyond basic voice commands. It’s also a privacy choice worth making on purpose before you switch it on. See our [Gemini](/tools/gemini/) review.

**Sources:** [Google blog](https://blog.google/products-and-platforms/platforms/android/android-auto-cars-with-google-built-in-gemini-personal-intelligence/) · [Android Authority](https://www.androidauthority.com/gemini-personal-intelligence-on-android-auto-3725650/) · [The Verge](https://www.theverge.com/tech/1014999/google-gemini-ai-cars-android-auto)

---

## What is humans&’ Ampersand model?

**Short answer:** On October 20, startup **humans&** released **Ampersand v0.1**, which it calls “the first model trained for people to achieve more together.” Instead of completing one person’s task, it’s designed to help a group with both shared and individual goals, for example sitting in a group chat and deciding after each message whether to speak up or stay quiet. It was trained from Z.ai’s open-weight **GLM 5.3** (744B parameters) in long, multi-person simulations.

humans& reports that Ampersand scores **59.1%** on the Collaborative Intelligence benchmark at high effort, versus **49.8%** for the strongest open-weight result it shows, and **39.0%** cooperative success on CooperBench, versus **17.3%** for base GLM 5.3. It also admits a downside: Ampersand sometimes coaches people who just want an answer. It’s available now through an API that follows OpenAI’s Agents API, with no waitlist. All of these benchmark figures are self-reported.

**Why it matters:** Most AI is built to work for one user. Ampersand is an early bet on AI that helps teams, families and friends coordinate, which could change how group tools work. Track new models on our [Models](/models/) page.

**Sources:** [humans&: Ampersand](https://ampersand.humansand.ai/blog/) · [Ampersand v0.1 model card](https://ampersand.humansand.ai/blog/model-card.html)

---

## How is AI tackling the Busy Beaver problem?

**Short answer:** The **Busy Beaver** problem asks which tiny programs (Turing machines) run the longest before stopping, a question no algorithm can answer in general. Researchers from **Google DeepMind**’s Discovery team shared a paper on October 21 describing a **Gemini-based agent pipeline** that simulates these machines, spots patterns, conjectures mathematical rules, writes proofs and then checks them formally in the **Lean 4** proof assistant.

According to the paper, the system discovered and formally verified new rules for **11 previously unanalyzed machines** in the six-state class, **BB(6)**. The team provisionally classifies them as **“Cryptids”**, machines whose behavior is tied to unsolved math problems like the Collatz conjecture, pending acceptance by the Busy Beaver community. It also produced formal proofs for **15** machines the community had already studied. The proofs are open source.

**Why it matters:** Most AI math systems solve problems that humans pose. This shows AI finding new problems on its own, and because every result is machine-checked in Lean, you don’t have to take the model’s word for it. See our [Gemini](/tools/gemini/) review.

**Sources:** [arXiv: At the Limits of Computability](https://arxiv.org/abs/2610.22603) · [Tom Zahavy (Google DeepMind) on X](https://x.com/TZahavy/status/2112922030165090573)

---

## What should builders watch next?

1. **PHP patching:** how quickly hosts and WordPress sites update, and whether real exploitation grows now that the fix is public.
2. **AI security findings:** OpenAI says similar AI-found vulnerabilities will “increase sharply in the coming months.”
3. **Anthropic’s public S-1:** reportedly due around October 26, with audited numbers in place of leaked drafts.
4. **Multi-cloud models:** when OpenAI on Google Cloud reaches general availability, and how pricing compares with OpenAI’s own API.
5. **Voice and group AI:** single-model voice agents like Eleven Realtime and group-aware models like Ampersand point to new kinds of apps.

For tool deep-dives, browse the [AI tools directory](/tools/) or the [Models](/models/) page. This roundup summarizes public announcements and reporting; it is not hands-on product testing.

*Published by Andrew for [AI Tools Optimizer](https://aitoolsoptimizer.com).*
