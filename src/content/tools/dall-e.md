---
name: "ChatGPT Images (formerly DALL·E)"
category: "image-generation"
subcategory: "AI image generation in ChatGPT"
company: "OpenAI"
tagline: "OpenAI's image generation inside ChatGPT, now powered by GPT Image models after DALL·E's retirement."
description: "ChatGPT Images is OpenAI's conversational image creation and editing inside ChatGPT. It succeeded DALL·E: OpenAI removed DALL·E 2 and DALL·E 3 from its API on May 12, 2026, and now recommends GPT Image models for generation and editing."
seoTitle: "DALL·E in 2026: Retired — ChatGPT Images & GPT Image Pricing, Features & Alternatives"
seoDescription: "What happened to DALL·E: removed from OpenAI's API in May 2026. How image creation works in ChatGPT today, plan limits, GPT Image API pricing and alternatives."
pricing: "freemium"
pricingModel: "Included in ChatGPT plans (limits vary); API billed per token"
startingPrice: "Included with ChatGPT Free (limited), Go $8, Plus $20"
freePlan: "Yes — limited image creation on ChatGPT Free"
platforms: "ChatGPT web, desktop, iOS, Android; OpenAI API"
website: "https://chatgpt.com"
logo: "/logos/dall-e.png"
bestFor: "Anyone who wants to create or edit images by describing them in plain language"
verdict: "DALL·E as a product is gone: OpenAI removed DALL·E 2 and 3 from its API on May 12, 2026, and image creation in ChatGPT now runs on newer GPT Image models. For most people the practical answer is simple: create images directly in ChatGPT, where even the free plan includes limited image creation and paid plans raise the limits. Developers should migrate to the GPT Image models in the API."
takeaways:
  - "DALL·E 2 and DALL·E 3 were shut down in OpenAI's API on May 12, 2026."
  - "OpenAI recommends GPT Image models (including GPT-Image-2.5 Sunburst) as replacements."
  - "ChatGPT Free includes limited image creation; Go, Plus and Pro raise limits, with Pro offering unlimited, faster image creation."
  - "API pricing for GPT-Image-2.5 Sunburst is $8 per 1M image input tokens and $30 per 1M image output tokens (standard)."
  - "You can edit images conversationally: ask for changes and ChatGPT revises the image."
keyFeatures: ["Text-to-image in chat","Conversational image editing","Image inputs and references","Text rendering in images","API access via GPT Image models"]
useCases: ["Quick illustrations","Social graphics","Mockups and concept art"]
pros:
  - "No new app to learn; works inside ChatGPT"
  - "Edit by chatting instead of re-prompting from scratch"
  - "Available on the free plan with limits"
  - "Strong at following detailed instructions and rendering text"
cons:
  - "DALL·E-specific workflows and API calls had to be migrated"
  - "Free and Go image limits can be reached quickly"
  - "Less fine-grained artistic control than dedicated tools like Midjourney"
  - "Content policies restrict some requests"
idealFor:
  - "Already use ChatGPT and want images without another subscription"
  - "Need quick visuals with readable text, like posters or diagrams"
  - "Are a developer migrating from the DALL·E API"
notFor:
  - "Want maximum artistic style control (consider Midjourney)"
  - "Need commercially indemnified enterprise imagery (consider Adobe Firefly)"
  - "Need video generation"
alternatives: ["midjourney","adobe-firefly","ideogram","leonardo-ai","flux"]
faq:
  - q: "Is DALL·E still available?"
    a: "Not in OpenAI's API. OpenAI notified developers in November 2025 and removed DALL·E 2 and DALL·E 3 on May 12, 2026. Image creation continues in ChatGPT using newer GPT Image models."
  - q: "What replaced DALL·E 3?"
    a: "OpenAI recommends its GPT Image models, such as GPT-Image-2 and GPT-Image-2.5 Sunburst, for image generation and editing."
  - q: "Can I make images in ChatGPT for free?"
    a: "Yes. ChatGPT Free includes limited image creation. Go ($8/month) and Plus ($20/month) offer more and higher-quality image creation, and Pro offers unlimited, faster image creation."
  - q: "How much does OpenAI's image API cost?"
    a: "OpenAI's API pricing lists GPT-Image-2.5 Sunburst at $8 per 1M image input tokens, $2 for cached input and $30 per 1M image output tokens on standard processing, with lower Batch rates."
  - q: "Can I edit an image I already have?"
    a: "Yes. Upload an image to ChatGPT and describe the changes, such as changing the background or adding text."
sources:
  - title: "OpenAI API deprecations (DALL·E shutdown May 12, 2026)"
    url: "https://developers.openai.com/api/docs/deprecations"
  - title: "DALL·E 3 model page (OpenAI API docs)"
    url: "https://developers.openai.com/api/docs/models/dall-e-3"
  - title: "OpenAI API pricing"
    url: "https://developers.openai.com/api/docs/pricing"
  - title: "ChatGPT plans and pricing"
    url: "https://chatgpt.com/pricing/"
sourceUrls: ["https://developers.openai.com/api/docs/deprecations","https://developers.openai.com/api/docs/pricing"]
lastVerified: "2026-10-16"
lastUpdated: "2026-10-16"
sample: false
---

## What happened to DALL·E

DALL·E was OpenAI's text-to-image model family; DALL·E 3 launched inside ChatGPT in 2023 and became one of the most widely used image generators. OpenAI has since replaced it with **GPT Image** models. On November 14, 2025, OpenAI told developers that DALL·E 2 and DALL·E 3 would be removed from the API, and both were shut down on **May 12, 2026**. OpenAI's model page now states that DALL·E 3 "has been deprecated and removed from the API."

For everyday users, nothing changed about the workflow: you still type "make an image of…" in ChatGPT. The images simply come from newer models, which are better at following detailed instructions and placing readable text.

## Key features

### Create images in conversation
Describe what you want in plain language, including subject, style, lighting and layout. ChatGPT generates the image in the chat.

### Edit by chatting
Ask for changes ("make the sky sunset orange," "remove the person on the left," "add the headline 'Grand Opening'") and ChatGPT revises the image rather than starting over.

### Use your own images
Upload a photo or sketch as a reference or as the image to edit.

### Text in images
Newer GPT Image models render signs, labels and posters far more reliably than early DALL·E versions.

### API for developers
The OpenAI Images API uses models like `gpt-image-2` and `gpt-image-2.5-sunburst` for generation and editing.

## Pricing breakdown

Checked on OpenAI's pages on October 16, 2026.

| Option | Price | Image access |
|---|---|---|
| ChatGPT Free | $0 | Limited image creation |
| ChatGPT Go | $8/mo | More image creation |
| ChatGPT Plus | $20/mo | More complex and accurate image creation |
| ChatGPT Pro | From $100/mo | Unlimited and faster image creation (abuse guardrails apply) |
| API: GPT-Image-2.5 Sunburst | $8 / 1M image input tokens, $30 / 1M image output tokens | Pay as you go; Batch is half price |

## Best use cases

- **Social graphics:** a bakery creates a flat-lay image of seasonal pastries with "Fall Menu" lettering.
- **Mockups:** a founder visualizes an app icon in several styles before hiring a designer.
- **Teaching:** a teacher generates a labeled diagram of the water cycle.
- **Developers:** an e-commerce app migrates DALL·E 3 calls to GPT Image for product backgrounds.

## How to get started

1. Open ChatGPT (free account works) on web or mobile.
2. Ask for an image with a clear description and aspect ratio.
3. Request specific edits in follow-up messages.
4. Download the image when you're happy.
5. Developers: replace `dall-e-3` with a GPT Image model in your Images API calls and re-test prompts.

## Tips and tricks

- **Describe composition explicitly:** foreground, background, camera angle.
- **Put exact text in quotes** so it's spelled correctly.
- **Iterate in the same chat** to keep the style consistent.
- **Ask for several options**, then refine your favorite.

Example prompt:

> A cozy independent bookstore storefront at dusk, warm window light, a chalkboard sign that reads "Open Late Fridays", watercolor illustration style, 3:2 landscape
