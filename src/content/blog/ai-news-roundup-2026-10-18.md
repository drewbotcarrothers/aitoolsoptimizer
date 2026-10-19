---
title: "AI News Roundup – October 18, 2026"
description: "Today’s AI news: Anthropic commits 5% of its shares to a new Public Benefit Fund, its draft federal AI safety bill, the OpenCode API-key breach, Anthropic’s junior-hiring data, ChatGPT Slides, Meta’s revised crawling terms, and Anthropic’s first Canadian data center."
pubDate: 2026-10-18T15:00:00-04:00
tags: ["ai-news"]
relatedTools: ["claude", "chatgpt", "claude-code", "meta-ai", "microsoft-copilot"]
sample: false
draft: false
---

## TL;DR

- **Anthropic** is committing **5% of its shares** to a new **Anthropic Public Benefit Fund** (subject to stockholder approval), with **2% more** possible for every **50%** rise in company value above a set baseline.
- **Politico** reported that Anthropic has quietly pitched lawmakers a **draft federal AI safety bill**: the government could stop a model only for an imminent risk of **more than $1 billion** in damages or **more than 50** deaths or serious injuries.
- **OpenCode** said a breach tied to a “large scale distillation attack” hit **1.4%** of OpenCode Console users who had linked outside AI providers. Saved API keys may have been exposed.
- **Anthropic’s own data:** the junior share of its technical hires fell from **27% to 9%**, and by August its AI agents were logging **6x** the hours of the people directing them.
- **OpenAI** is rolling out **ChatGPT Slides** for Pro, Business and Enterprise users with Space access, with export to PowerPoint, PDF and Google Slides.
- **Meta** removed the word **“train”** from its new crawling terms for business accounts after publisher backlash. Legal experts say the revised text is still broad.
- **Anthropic** signed its **first Canadian data-center lease**, for EverWind’s planned **95 MW** first phase in Nova Scotia.

## Watch: AI News Roundup video (Oct 18, 2026)

<div class="video-embed" style="position:relative;width:100%;max-width:960px;aspect-ratio:16/9;margin:1.5rem 0;border-radius:12px;overflow:hidden;background:#000;">
  <iframe src="https://www.youtube-nocookie.com/embed/iMMA5wbqK3Y" title="Anthropic Pledges 5% to Public Good, Its Draft AI Bill, ChatGPT Slides | AI News Oct 18" style="position:absolute;inset:0;width:100%;height:100%;border:0;" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

Prefer YouTube? [Watch on the AI Tools Optimizer channel](https://www.youtube.com/watch?v=iMMA5wbqK3Y).

---

## What is Anthropic’s new Public Benefit Fund?

**Short answer:** On October 18, 2026, Anthropic said it is committing a portion of its shares to the **Anthropic Public Benefit Fund**, a new wholly owned entity. Subject to stockholder approval, **5% of Anthropic’s shares** are committed now, and the board can add **another 2%** for every **50% increase** in the company’s value above a set baseline.

Anthropic says the fund is a **wholly owned LLC** rather than a 501(c)(3), so it can switch between different forms of giving. It might, for example, make large donations to traditional nonprofits or direct distributions to specific populations. Anthropic named **labor-market impacts** as one example area. It has already committed **$200 million** to studying and addressing that issue. **None of the equity held by the LLC will be used for lobbying or political giving**, in the US or abroad.

Anthropic’s co-founders have pledged to donate **80%** of their equity, and about **half of employees** take part in an equity donation match. Counting those, Anthropic says **roughly 20% of its shares** will be dedicated to the public good, plus whatever valuation milestones may add. It will publish more on the fund’s structure, governance and milestones in the coming months.

**Why it matters:** Anthropic is tying a growing slice of its equity to public-benefit spending, including the effect of AI on jobs, where other companies might use escalating executive awards. The key details, governance and baseline valuation, are still to come. See [Claude](/tools/claude/).

**Sources:** [Anthropic: Investing in the public benefit](https://www.anthropic.com/news/public-benefit-fund) · [Anthropic on X](https://x.com/AnthropicAI/status/2111881963657412903) · [Reuters via WTVB](https://wtvbam.com/2026/10/18/anthropic-to-commit-5-stake-to-new-public-benefit-fund/)

---

## What is in Anthropic’s draft AI safety bill?

**Short answer:** Politico reported on October 16 that Anthropic representatives have quietly pitched Capitol Hill lawmakers a **confidential draft bill** on frontier AI safety and security. Under the draft, the government could block a model’s release or use only if it poses a **foreseeable, imminent risk** of **more than $1 billion** in damages or of killing or seriously injuring **more than 50 people**.

According to Politico and Reuters, the risk would have to come from a **biological weapon**, a **model evading its developer’s controls**, or a **cyberattack**. **Independent evaluators** registered with the **Commerce Department** would periodically assess labs and their frontier models. Labs could pay the evaluators as long as the payment isn’t tied to the result. An evaluator that finds an “imminent enumerated risk” would have to report it to Commerce **within 72 hours**. Commerce could then ask a federal judge in Washington, DC to suspend the model, and the draft explicitly bars every other federal agency from suspending development, deployment or internal use. Politico says it would also preempt some state AI safety laws.

An Anthropic spokesperson said the bill reflects the company’s **Advanced AI Framework**, which it has been advocating since June: “These are sensible policies we believe Congress should act on.”

**Why it matters:** The draft shows what one frontier lab wants federal rules to look like. It would require testing and independent evaluation, but set a high bar before the government could stop a model and put a single agency in charge. Critics are already debating whether those thresholds are too high. See [Claude](/tools/claude/).

**Sources:** [Politico](https://www.politico.com/news/2026/10/16/anthropic-ai-safety-01124654) · [Reuters via Investing.com](https://www.investing.com/news/stock-market-news/anthropic-quietly-pitches-its-own-ai-safety-bill-to-lawmakers-politico-reports-4954941) · [Tom’s Hardware](https://www.tomshardware.com/tech-industry/artificial-intelligence/anthropics-proposed-ai-safety-bill-only-kicks-in-if-50-deaths-or-usd1-billion-in-damages-are-on-the-line-proposal-would-effectively-make-the-commerce-department-the-only-agency-capable-of-stopping-an-ai-model)

---

## What happened in the OpenCode breach?

**Short answer:** On October 17, 2026, OpenCode, the open-source coding agent, said it “had a security breach last night related to a large scale distillation attack that impacted **1.4% of OpenCode Console users**.” It emailed everyone affected and said that users who didn’t get an email were not impacted. The affected group was a subset of users who had **linked external AI providers**.

According to reports, the attackers got into a **legacy system** and reached **third-party API keys** saved in Console workspaces, such as keys for OpenAI, Anthropic and Google models. Some users reported unauthorized charges. OpenCode says it is working with the providers on remediation and has told affected users to revoke and replace their keys.

**Why it matters:** Any tool that stores your AI keys is now a target, because a stolen key gives an attacker free access to expensive frontier models. If you’ve pasted provider keys into hosted tools, rotate them at the provider, check your usage, and set spending limits. That goes for setups built around [Claude Code](/tools/claude-code/), [OpenAI Codex](/tools/openai-codex/), [ChatGPT](/tools/chatgpt/) or [Gemini](/tools/gemini/) APIs.

**Sources:** [OpenCode on X](https://x.com/opencode/status/2111519637049319818) · [Crypto Briefing](https://cryptobriefing.com/opencode-distillation-attack-api-key-breach/) · [AiLookout](https://ailookout.news/blog/opencode-breach-exposed-saved-ai-provider-keys-console-users-distillation-attack/)

---

## How is AI changing hiring inside Anthropic?

**Short answer:** In a report published October 16, *How employment is changing at Anthropic*, the company’s researchers found that the junior share of **technical-department staff** fell from **21% to 14%** since early 2025, and the junior share of **technical hires** fell faster, from **27% to 9%**.

Meanwhile, agent work grew quickly. By August, **employee-directed AI agents worked 6x as many hours** as the people directing them, and **code commits per engineer** were about **5x** their level of six months earlier. The report also finds that **human attention is now the bottleneck**: interactive Claude sessions spend around **80% of their time waiting** for a human to respond, and the median employee spends **20% more time in meetings** than a year ago. Hiring managers now put more weight on **autonomy and judgment** and less on narrow domain expertise. Anthropic says it has set up an early-warning system for jobs at risk and prioritizes moving affected staff into other roles.

**Why it matters:** This is rare first-hand data from a workplace built around AI agents. It suggests fewer entry-level technical roles, and that the scarce skill becomes managing and reviewing agent output. See [Claude](/tools/claude/) and [Claude Code](/tools/claude-code/).

**Sources:** [Anthropic: How employment is changing at Anthropic](https://www.anthropic.com/research/employment-at-anthropic) · [TechCrunch](https://techcrunch.com/2026/10/17/anthropic-says-its-workforce-has-become-less-junior-and-is-spending-more-time-in-meetings/)

---

## What can ChatGPT Slides do?

**Short answer:** OpenAI is rolling out **Slides** in ChatGPT for **Pro, Business and Enterprise** plans with **Space** access. You can create a deck from a conversation, attached files, an outline or a template, then edit text, images, shapes, tables and charts directly.

To change one part of a slide, select it and choose **Request edits**, or ask in the prompt bar. Teammates with edit access can work on the same deck in real time, leave shared comments and @mention ChatGPT to make changes. You can present straight from ChatGPT. On the web, decks export to **PowerPoint (.pptx), PDF or Google Slides**, and the desktop app can open them in PowerPoint or Keynote. Plus is not among the listed plans.

**Why it matters:** ChatGPT is moving further into office software and now competes directly with [Microsoft Copilot](/tools/microsoft-copilot/) in PowerPoint and with dedicated deck tools like [Gamma](/tools/gamma/) and [Beautiful.ai](/tools/beautiful-ai/). OpenAI’s own guidance applies: check the content and formatting before you present. See [ChatGPT](/tools/chatgpt/).

**Sources:** [OpenAI Help Center: Creating and collaborating on slides in ChatGPT](https://help.openai.com/en/articles/20001605-creating-and-collaborating-on-slides-in-chatgpt) · [ChatGPT Slides](https://chatgpt.com/features/slides/)

---

## Did Meta drop AI training from its crawling terms?

**Short answer:** Partly. The first draft of Meta’s new Commercial Terms let it use content from websites “associated with” business accounts to “provide, develop, improve, research, **train**” Meta products. On Friday, after Nieman Lab’s reporting and publisher criticism, Meta **removed “train”** and limited those uses to **“advertising and business products.”**

Meta said the crawling terms “only applied to our ads and business products” and that it “does not change how Meta uses web crawlers.” It added that robots.txt preferences are respected. However, the revised terms contain **no explicit robots.txt language**, and legal experts told Nieman Lab that “develop … advertising and business products” is still broad. The terms take effect **October 30**, and the only way to opt out is to stop using Meta’s business products. The News/Media Alliance had called the original terms “outrageous and probably illegal.”

**Why it matters:** Almost every publisher and many small businesses have a Meta business account, so this contract language could govern how your site is crawled. The fight over AI training data is now being fought in terms of service as well as in court. See [Meta AI](/tools/meta-ai/).

**Sources:** [Nieman Lab](https://www.niemanlab.org/2026/10/legal-experts-warn-metas-new-terms-still-grant-broad-scraping-permissions-despite-language-changes/) · [TechCrunch](https://techcrunch.com/2026/10/17/meta-removes-language-that-raised-scraping-and-ai-training-concerns/) · [News/Media Alliance](https://www.newsmediaalliance.org/changes-to-meta-commercial-terms-of-use/)

---

## Where is Anthropic’s first Canadian data center?

**Short answer:** Anthropic will lease the first phase of a data-center campus that **EverWind** plans to build at **Point Tupper, Nova Scotia**. Reuters, citing a company executive, called it Anthropic’s **first data-center agreement in Canada**.

EverWind says the plan totals **more than C$10 billion** (about **US$7.1 billion**, per Bloomberg). That breaks down as more than C$8 billion for the campus and C$2 billion for onshore wind. The campus starts with a **95 MW** phase in **late 2027**, followed by a **325 MW** expansion targeted for **2028** (subject to commercial, technical and regulatory conditions), for **420 MW** at full build. CBC reports the lease runs **at least 20 years**, and its value was not disclosed. Anthropic said the site “will power Claude models and serve growing demand from Canadian and global customers.” EverWind says it will pay the grid costs tied to the project so they aren’t passed on to ratepayers.

**Why it matters:** More Claude capacity is being built outside the US. Commitments on power, water and ratepayer costs are now a central part of how AI data-center deals win approval. See [Claude](/tools/claude/).

**Sources:** [EverWind (GlobeNewswire)](https://www.globenewswire.com/news-release/2026/10/16/3382650/0/en/everwind-announces-10-billion-investment-in-point-tupper-data-centre-campus-and-renewable-energy-portfolio-across-nova-scotia.html) · [CBC News](https://www.cbc.ca/news/canada/nova-scotia/nova-scotia-to-host-massive-data-centre-to-power-anthropic-s-ai-assistant-claude-9.7383129) · [Reuters via Investing.com](https://www.investing.com/news/stock-market-news/anthropic-signs-lease-for-first-canadian-data-center-4954967) · [Bloomberg](https://www.bloomberg.com/news/articles/2026-10-16/everwind-to-build-nova-scotia-data-center-lease-to-ai-developer)

---

## What should builders watch next?

1. **Public Benefit Fund details:** stockholder approval, governance, and the baseline valuation behind the extra 2% steps.
2. **Federal AI rules:** whether any lawmaker introduces Anthropic’s draft, and how its $1 billion / 50-person thresholds hold up in debate.
3. **Key hygiene:** after OpenCode, rotate provider keys stored in hosted tools and set spend caps.
4. **Meta’s October 30 deadline:** whether the crawling terms change again before they take effect.

For tool deep-dives, browse the [AI tools directory](/tools/) or the [Models](/models/) page. This roundup summarizes public announcements and reporting; it is not hands-on product testing.

*Published by Andrew for [AI Tools Optimizer](https://aitoolsoptimizer.com).*
