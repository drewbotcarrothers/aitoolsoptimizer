---
name: "FLUX (Black Forest Labs)"
category: "image-generation"
subcategory: "AI image & video models"
company: "Black Forest Labs"
tagline: "Black Forest Labs' FLUX models for image, video and audio generation via API, playground and open weights."
description: "FLUX is a family of generative models from Black Forest Labs. FLUX 3 is a multimodal model for images, video with native audio, and action prediction; earlier FLUX.2 and FLUX.1 models remain available. Access them through a pay-as-you-go API and playground, or run open-weight models yourself."
seoTitle: "FLUX Review 2026: FLUX 3 Pricing, API, Open Weights & Alternatives"
seoDescription: "FLUX review: Black Forest Labs' FLUX 3 and FLUX.2 models, pay-as-you-go credits ($0.01 each), image prices from under a cent, open weights, pros, cons and alternatives."
pricing: "paid"
pricingModel: "Pay as you go (1 credit = $0.01); enterprise and open-weights licensing"
startingPrice: "From $0.008 per image (FLUX 3 Klein, 768×768); no subscription"
freePlan: "No subscription required; pay per image or per second of video"
platforms: "API, web playground, open weights (self-hosted); also available through partner platforms"
website: "https://bfl.ai"
logo: "/logos/flux.png"
bestFor: "Developers, product teams and creators who want top-tier image and video models with flexible, usage-based pricing"
verdict: "FLUX is the model family many image tools quietly run on, and Black Forest Labs sells it directly with simple usage pricing: no subscriptions, no seats, same price in the API and playground. FLUX 3 adds video with native audio. It is ideal for developers and teams building products; casual users may prefer an app like Krea or Leonardo that wraps these models in an easier interface."
takeaways:
  - "Pay as you go: 1 credit equals $0.01, with no subscriptions or seat fees."
  - "FLUX 3 Klein images cost $0.008 (768×768) to $0.036 (4K) each."
  - "FLUX 3 generates video with synchronized audio, up to 20-second clips, priced per second."
  - "Same pricing in the API and playground; enterprise volume discounts available."
  - "Open-weight models can be downloaded, fine-tuned and run on your own infrastructure."
keyFeatures: ["FLUX 3 multimodal model","Text and image to image","Image editing (FLUX.2, Kontext)","Video with native audio","Open weights","Fine-tuned endpoints"]
useCases: ["Product imagery at scale","Apps with built-in image generation","Short video clips"]
pros:
  - "Simple usage pricing with no subscription"
  - "Very low per-image costs on smaller models"
  - "Accurate text rendering and complex prompt handling"
  - "Open weights for self-hosting and customization"
  - "Same price in playground and API"
cons:
  - "Less hand-holding than consumer apps"
  - "Costs scale with volume and resolution"
  - "Video pricing per second adds up for longer clips"
  - "Open-weight licensing terms need checking for commercial use"
idealFor:
  - "Build an app or workflow that needs image generation"
  - "Want to self-host and fine-tune models"
  - "Prefer paying only for what you generate"
notFor:
  - "Want a polished consumer app with templates (consider Canva or Krea)"
  - "Need an all-in-one subscription for occasional use"
  - "Need enterprise IP indemnity by default (consider Adobe Firefly)"
alternatives: ["midjourney","krea","leonardo-ai","ideogram","adobe-firefly"]
faq:
  - q: "How much does FLUX cost?"
    a: "Black Forest Labs uses credits worth $0.01 each, with no subscription. FLUX 3 Klein images cost $0.008 at 768×768 up to $0.036 at 4K; other models and video are priced per image or per second."
  - q: "Is FLUX free?"
    a: "There's no subscription, but generations are paid per use. Some FLUX models are released as open weights that you can run yourself, subject to their licenses."
  - q: "What is FLUX 3?"
    a: "FLUX 3 is Black Forest Labs' multimodal model for images, video with native audio (up to 20-second clips with multiple shots) and action prediction for robotics."
  - q: "Can I use FLUX in my own app?"
    a: "Yes. The FLUX API is built for production workloads, and enterprise plans add custom pricing, volume discounts, SLAs and dedicated support."
  - q: "Can FLUX edit images?"
    a: "Yes. FLUX.2 image editing and FLUX.1 Kontext models create and edit images using text and image inputs."
sources:
  - title: "Black Forest Labs pricing"
    url: "https://bfl.ai/pricing"
  - title: "FLUX API docs: pricing"
    url: "https://docs.bfl.ai/quick_start/pricing"
  - title: "Black Forest Labs homepage (FLUX 3)"
    url: "https://bfl.ai"
sourceUrls: ["https://bfl.ai/pricing","https://docs.bfl.ai/quick_start/pricing"]
lastVerified: "2026-10-16"
lastUpdated: "2026-10-16"
sample: false
---

## What FLUX is

FLUX is a family of generative AI models built by Black Forest Labs. Black Forest Labs also sells access directly through its API and a browser playground.

The latest release, **FLUX 3**, is described as "one multimodal model" for image, video, audio and action prediction. For images, it offers a wide range of styles, highly accurate text rendering and the ability to handle complex prompts. For video, it generates up to 20-second clips with optional synchronized audio (multilingual speech, effects and ambience) from text, an image or keyframes.

## Key features

### Image generation
FLUX 3 and FLUX.2 models generate photorealistic and stylized images at resolutions up to 4K.

### Image editing
FLUX.2 Image Editing and FLUX.1 Kontext [pro] and [max] edit images with text and image inputs, such as changing backgrounds or keeping a character consistent.

### Video with audio
FLUX 3 video uses per-second pricing; a FLUX Video Upscale endpoint is priced per output megapixel-second.

### Open weights
Download models, customize and deploy anywhere, or license them for products through enterprise agreements.

### Fine-tuned endpoints
LoRA fine-tuned endpoints (in beta) for custom styles or subjects.

## Pricing breakdown

From Black Forest Labs' pricing page and docs, checked October 16, 2026. 1 credit = $0.01; same price in the API and playground.

| FLUX 3 Klein (per image) | 768×768 | 1K | 1.5K | 2K | 4K |
|---|---|---|---|---|---|
| Price | $0.008 | $0.009 | $0.011 | $0.014 | $0.036 |

Other models (FLUX 3 variants, FLUX.2, FLUX.1 Kontext) have their own per-image rates; the default model in BFL's public calculator showed $0.048 per image. Video is billed per second. Enterprise customers get custom pricing, volume discounts and SLAs.

## Best use cases

- **E-commerce:** generate hundreds of lifestyle product images through the API.
- **App features:** add text-to-image to a design or marketing app.
- **Storyboarding:** create short video shots with ambient audio for a pitch.
- **Custom styles:** fine-tune a model on brand illustrations and self-host it.

## How to get started

1. Create an account at bfl.ai and open the playground.
2. Buy a small amount of credits to start.
3. Test prompts with a smaller, cheaper model first.
4. Generate an API key and follow the docs' quick start.
5. Compare models for quality vs. cost before scaling.
6. Contact sales for volume pricing if you'll generate at scale.

## Tips and tricks

- **Prototype at lower resolution**, then render finals at 2K or 4K.
- **Put exact text in quotes** in prompts for signs and labels.
- **Use image references** with Kontext for consistent characters or products.
- **Check open-weight licenses** before commercial self-hosting.

Example prompt:

> 1990s TV news reporter standing on a suburban street holding a notepad that reads "FLUX 3", grainy broadcast footage look, overcast daylight
