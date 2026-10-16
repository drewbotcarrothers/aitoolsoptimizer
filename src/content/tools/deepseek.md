---
name: "DeepSeek"
category: "chatbots-assistants"
subcategory: "AI assistant & low-cost API models"
company: "DeepSeek"
tagline: "Chinese AI lab offering a free chat assistant and some of the lowest-cost frontier-class API models."
description: "DeepSeek is a Hangzhou-based AI company offering a free chat assistant on web and mobile, the DeepSeek Harness desktop app, and an API with very low per-token prices, including the DeepSeek-V4.1-Flash model with a 1M-token context."
seoTitle: "DeepSeek Review 2026: Free Chat, API Pricing (V4.1-Flash), Features & Alternatives"
seoDescription: "DeepSeek review: free chat app, API prices from $0.15 per 1M input tokens off-peak, V4.1-Flash with 1M context, peak/off-peak pricing, privacy, pros, cons and alternatives."
pricing: "freemium"
pricingModel: "Free chat app; API billed per token with peak and off-peak rates"
startingPrice: "Free chat; API from $0.15 per 1M input tokens (off-peak, cache miss)"
freePlan: "Yes — free chat on web and mobile apps"
platforms: "Web, iOS, Android, DeepSeek Harness desktop app, API (OpenAI- and Anthropic-compatible)"
website: "https://www.deepseek.com"
logo: "/logos/deepseek.png"
bestFor: "Cost-conscious developers and users who want capable AI chat and APIs at very low prices"
verdict: "DeepSeek is the price leader among capable AI models. Its chat assistant is free, and its API costs a fraction of most Western rivals, with off-peak rates at half price. DeepSeek-V4.1-Flash adds native vision and a 1M-token context. The main considerations are data governance, since DeepSeek is a China-based company, and frequent model changes, so check the docs before you build."
takeaways:
  - "Free chat assistant on web and mobile, plus the DeepSeek Harness desktop app."
  - "API (deepseek-flash, DeepSeek-V4.1-Flash): $0.30 input and $1.20 output per 1M tokens at peak; half price off-peak."
  - "1M-token context length and up to 384K output tokens."
  - "OpenAI- and Anthropic-format API endpoints make switching easy."
  - "V4-Pro requests now route to V4.1-Flash until V4.1-Pro launches."
keyFeatures: ["Free chat assistant","DeepSeek-V4.1-Flash model","1M-token context","Thinking mode","Tool calls and JSON output","OpenAI- and Anthropic-compatible API"]
useCases: ["Low-cost API workloads","Coding agents","Long-document analysis"]
pros:
  - "Free chat app"
  - "Extremely low API prices, with 50% off-peak discounts"
  - "Large 1M-token context window"
  - "Drop-in compatible with OpenAI and Anthropic API formats"
  - "Supports popular coding agents like Claude Code, Codex and OpenCode"
cons:
  - "China-based company, which matters for some data and compliance policies"
  - "Model lineup changes quickly (V4-Pro is being phased out)"
  - "Fewer consumer features (image generation, voice) than ChatGPT or Gemini"
  - "Peak-hour pricing requires planning for cost-sensitive jobs"
idealFor:
  - "Build apps or agents where API cost matters most"
  - "Want a capable free chatbot for general questions"
  - "Run batch jobs you can schedule off-peak"
notFor:
  - "Work under policies that restrict China-based data processing"
  - "Need an all-in-one assistant with images, voice and video"
  - "Need long-term model stability without migrations"
alternatives: ["chatgpt","claude","gemini","mistral-vibe","grok"]
faq:
  - q: "Is DeepSeek free?"
    a: "Yes. DeepSeek's chat assistant is free on the web and mobile apps. The API is paid per token."
  - q: "How much does the DeepSeek API cost?"
    a: "For deepseek-flash (DeepSeek-V4.1-Flash), DeepSeek lists $0.30 per 1M input tokens (cache miss), $0.006 (cache hit) and $1.20 per 1M output tokens at peak. Off-peak rates are half: $0.15, $0.003 and $0.60."
  - q: "When are DeepSeek's off-peak hours?"
    a: "Peak hours are 01:00–04:00 and 06:00–10:00 UTC, Monday to Friday, excluding Chinese public holidays. All other times, including weekends, are off-peak."
  - q: "What is DeepSeek-V4.1-Flash?"
    a: "It's DeepSeek's newest model, announced in September 2026, with a new encoder-decoder architecture, native visual understanding, a 1M-token context and both thinking and non-thinking modes."
  - q: "Can I use DeepSeek with Claude Code or the OpenAI SDK?"
    a: "Yes. DeepSeek offers OpenAI-format and Anthropic-format endpoints, and its docs list integrations with Claude Code, Codex, OpenCode and others."
sources:
  - title: "DeepSeek API docs: Models & Pricing"
    url: "https://api-docs.deepseek.com/quick_start/pricing"
  - title: "DeepSeek news: Introducing DeepSeek-V4.1-Flash"
    url: "https://www.deepseek.com/en/news/deepseek-v4-1-flash/"
  - title: "DeepSeek homepage"
    url: "https://www.deepseek.com"
sourceUrls: ["https://api-docs.deepseek.com/quick_start/pricing","https://www.deepseek.com/en/news/deepseek-v4-1-flash/"]
lastVerified: "2026-10-16"
lastUpdated: "2026-10-16"
sample: false
---

## What DeepSeek is

DeepSeek is an AI research company based in Hangzhou, China. It became widely known in early 2025 when its R1 reasoning model rivaled leading Western models at a fraction of the training and usage cost. Today it offers three things: a **free chat assistant** (web, iOS and Android), the **DeepSeek Harness** desktop app, and the **DeepSeek API** for developers.

In September 2026 DeepSeek introduced **DeepSeek-V4.1-Flash**, the smallest model in a new architecture family with native visual understanding. DeepSeek says multiple tests put it ahead of its own V4-Pro on performance, cost and speed, so V4-Pro requests now route to V4.1-Flash until V4.1-Pro launches.

## Key features

### Free chat assistant
Ask questions, write, code and analyze documents for free in the web or mobile app.

### V4.1-Flash model
A new causal encoder-decoder design with just 8B active parameters for input and 16B for output, plus a much smaller KV cache that DeepSeek says cuts cache-hit costs for agents.

### Long context and thinking mode
1M-token context, up to 384K output tokens, and both thinking (default) and non-thinking modes.

### Developer-friendly API
JSON output, tool calls, a Responses API, chat prefix and fill-in-the-middle completion (beta), and both OpenAI- and Anthropic-format base URLs.

### Agent integrations
DeepSeek's docs list setups for Claude Code, Codex, OpenCode and other coding agents.

## Pricing breakdown

From DeepSeek's API docs, checked October 16, 2026 (per 1M tokens, USD). Prices took effect September 10, 2026.

| deepseek-flash (V4.1-Flash) | Off-peak | Peak |
|---|---|---|
| Input, cache hit | $0.003 | $0.006 |
| Input, cache miss | $0.15 | $0.30 |
| Output | $0.60 | $1.20 |

Peak hours are 01:00–04:00 and 06:00–10:00 UTC on weekdays (excluding Chinese public holidays). Charges deduct from a prepaid balance, using any granted balance first. The chat app is free.

## Best use cases

- **High-volume API tasks:** classify or summarize thousands of support tickets for a few dollars.
- **Coding agents:** point a compatible coding agent at DeepSeek's Anthropic-format endpoint to cut costs.
- **Long documents:** analyze very long reports or codebases within the 1M-token context.
- **Everyday chat:** use the free app for explanations, drafts and brainstorming.

## How to get started

1. Use the free chat at deepseek.com or download the app.
2. For the API, create an account on the DeepSeek Platform and top up a balance.
3. Create an API key and set the base URL to `https://api.deepseek.com` (or the `/anthropic` endpoint).
4. Use the model name `deepseek-flash`.
5. Schedule large batch jobs during off-peak hours to halve costs.
6. Check DeepSeek's change log regularly, as models are retired quickly.

## Tips and tricks

- **Use context caching**: repeated prompt prefixes hit the cache at a tiny fraction of the cost.
- **Switch thinking mode off** for simple tasks to reduce output tokens.
- **Review your data policies** before sending sensitive information.
- **Keep a fallback model** in your app in case of model changes or outages.

Example API system prompt:

> You are a support ticket classifier. Return JSON with fields "category" (billing, bug, how-to, feature-request), "urgency" (low, medium, high) and a one-sentence "summary." Do not include any other text.
