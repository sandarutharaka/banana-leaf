# Banana Leaf Business Website — Codex Master Brief

Version: 1.1 · Completeness audit and revision: 26 October 2026 · Stack: Next.js App Router + TypeScript + Tailwind CSS + GSAP

## 0. Read this first

This document is the complete creative, content, asset, interaction and engineering specification for a **new local build in VS Code with Codex**. Read this document fully, then `README-02-DEVELOPMENT-TASKS.md`. Implement the tasks in order. Do not reuse or modify the earlier hosted demonstration unless the owner separately asks for that. This handoff contains instructions, not a finished application.

The owner wants a distinctive, modern Sri Lankan banana leaf business website, with a memorable entrance where **two illustrated banana leaves open to reveal the homepage**. The site must support both domestic enquiries and overseas buyer enquiries. The contact form must send the submitted details to the owner's configured email and send an attractive acknowledgement email to the customer.

Make reasonable implementation decisions without repeatedly asking for approval. Missing business information must remain in clearly marked configuration; do not invent it. Build the interface, email templates, mock transport and tests without credentials. Real email delivery and public deployment are separate launch steps requiring the owner's settings. Never describe a mock submission as a real email sent.

### Copy this kickoff prompt into Codex

> Read README-01-CODEX-MASTER-BRIEF.md and README-02-DEVELOPMENT-TASKS.md completely. Inspect the five supplied reference images before coding. Build the banana leaf business website locally with Next.js App Router, TypeScript, Tailwind CSS and GSAP. Follow the design, exact opening-leaf choreography, supplied copy, product-card specification, asset-generation briefs, email architecture and acceptance criteria. The site should feel like an original premium botanical brand, not a generic SaaS page or a copy of the references. Implement one milestone at a time, keep the task checklist updated, and verify each milestone before proceeding. Use placeholders only for missing owner information; centralize them. Build functioning server-side contact delivery with Resend, an owner notification and a designed customer acknowledgement, with a clearly labelled local mock mode until credentials are configured. Do not deploy, buy services, send real emails, or alter the previous hosted site during implementation. If image generation is available, create the specified original assets; otherwise prepare the exact prompts and temporary labelled assets and report what remains. Do not stop after a plan or scaffold: carry the authorized local build through the acceptance checks and report the remaining owner setup items.

## 1. Business context and truth rules

**Business:** a banana leaf selling business based in Sri Lanka. Products and packaging are still being finalized. The audience includes households, restaurants, caterers, retailers, wholesalers and potential overseas importers.

**Primary conversion:** send a relevant product or wholesale enquiry.

**Secondary conversion:** contact the business on WhatsApp if a real number is configured.

**Not part of this version:** shopping cart, checkout, online payments, customer accounts, inventory management, admin dashboard, newsletter automation or an AI chatbot. Use a clear catalogue-to-enquiry flow.

**Never invent:** a registered company name, business address, export licence, certifications, organic status, food-safety certification, countries already served, years of experience, reviews, customers, turnover, guaranteed shelf life, processing methods, daily capacity, delivery coverage, shipping time or product price. Do not imply that generated images show the actual farm or production facility.

The Indonesian exporter screenshot is a design reference, not evidence about this business. Do not copy its company name, registration numbers, contact details, claims, product specifications, banana chips, certificates or country of origin.

Use **`YOUR_BRAND`** in configuration until the owner supplies the final name. “Ceylon Leaf” is only an earlier concept name, not an approved company identity. All leaf formats below are catalogue concepts; the owner must confirm which can actually be supplied before public launch.

## 2. Reference images: what to take from each

Place copies of the five supplied reference images inside `docs/references/`. Do not put the screenshots into the production asset folder or display them as site artwork. If filenames differ, match by visual description. The design must remain implementable from these descriptions if the images are unavailable in a later Codex session.

| Ref | Uploaded filename | What is visible | Use in the new design | Do not copy |
| --- | --- | --- | --- | --- |
| R1 | `Screenshot_26-10-2026_173548_bananaexportindo.com.jpeg` | Long white exporter page; split white/green hero; green banana leaves and banana-chip bowl; light botanical outline background; leaf product cutouts; about, values, specifications, gallery and green footer | Banana-specific identity, subtle outline-leaf texture, product cutouts, clear specification details, coherent green footer | Its sparse long gaps, copied wording, chips, business credentials, exact page composition |
| R2 | `image(20261026-121919).png` | Dense flat banana-leaf illustration; overlapping broad leaves; thin dark outlines; pale lime central veins; multiple green tones | Primary illustration language for the two entrance leaves, original decorative leaves and small pattern fragments | A flat rectangular screenshot covering the whole viewport; screenshot borders or UI |
| R3 | `image(20261026-121943).png` | White product stage; oversized black serif “banana”; a peeled banana overlaps the type; yellow organic side shape; small left facts column | Editorial scale, layered object/type depth, one strong product focal point, restrained organic shape | Yellow as the main brand colour, banana-fruit sales, fake cart icons, low-contrast disabled-looking buttons |
| R4 | `image(20261026-122057).png` | Dark outer frame, leafy photographic background, large soft green translucent rounded panel, white serif type, leaf branch crossing the right edge | Depth, framed botanical atmosphere, sophisticated green surfaces, a branch/leaf that breaks the panel boundary | Monstera or houseplant identity, huge blur layers, illegible glass text, screenshot “Visit site” button |
| R5 | `image(20261026-122106).png` | Two narrow mobile-style white rounded product cards on dark green; plant cutouts; green lower portion; small supporting details | Product card silhouette, cutout escaping image area, pale content surface, curved green bottom shelf, compact specifications | Plant-pot facts, price of $250, sunlight/water icons, tiny unreadable mobile text |

**Chosen synthesis:** R2 provides the recognizable illustrated leaf language; R3 provides the editorial hero composition; R4 provides premium environmental depth; R5 provides the product cards; R1 supplies banana-leaf context and useful information architecture. Do not simply stack five unrelated reference styles.

## 3. Creative direction: “The Leaf Opens”

A warm, premium botanical website with tactile illustrated leaves, oversized editorial type, clean useful content, and a quiet cinematic entrance. It should feel like opening a leaf-wrapped parcel and discovering the business inside.

### Visual signature

1. Two separate illustrated banana leaves cover the entry view, then gently part from the middle.
2. A very large “Naturally” headline sits behind an original banana-leaf product cutout without covering essential words.
3. Product cards resemble softly folded botanical labels: pale upper body, rounded edges, green curved base.
4. A fine central leaf vein connects three preparation/enquiry panels as the visitor scrolls.
5. A dark botanical homepage closing section combines a contact invitation and subtle line illustration. The complete contact form lives on `/contact` in a warm cream email-card-like surface; do not duplicate the full form on the homepage.

Avoid generic equal feature-card grids, neon gradients, purple/blue technology styling, excessive glassmorphism, confetti, glowing borders, a custom cursor, scroll hijacking, meaningless counters and perpetual spinning badges. Use fewer, better effects.

### Colour tokens

| Token | Value | Intended role |
| --- | --- | --- |
| forest-950 | `#102C21` | Dark sections, primary text on cream |
| forest-800 | `#1D5138` | Buttons, navigation accents |
| leaf-600 | `#42834B` | Illustration midtone, decorative leaf surfaces |
| leaf-400 | `#8EB36A` | Illustration highlights, non-text accents |
| lime-200 | `#DCE8AA` | Small badges, a warm accent on dark green |
| sage-100 | `#E8EEDC` | Card backgrounds and panel transitions |
| cream-50 | `#F7F5EC` | Main page background |
| paper | `#FFFDF7` | Form and product-card content areas |
| ink-muted | `#526457` | Supporting text on pale surfaces |
| outline | `#D1DBC9` | Dividers and input boundaries |
| error | `#AD3434` | Validation messages with text/icons |

Test actual rendered contrast. Green illustration colours are not automatically suitable for text. Primary CTA: paper text on forest-800; secondary CTA: forest-950 on cream with a visible outline. No text on a busy vein pattern without an opaque backing.

### Typography, sizing and layout

- Display: **DM Serif Display** or **Instrument Serif**, choose one and keep it consistent. Use a locally served font through `next/font`; Georgia is the fallback. Body: **Manrope**, with system sans-serif fallback.
- H1 desktop: `clamp(4rem, 7.5vw, 7.25rem)`, line-height about 0.98–1.04. Mobile: `clamp(2.75rem, 12vw, 4rem)` with intentional line breaks.
- H2: 40–64 px desktop / 32–42 px mobile. Body: 16–18 px. Never shrink product or contact text below comfortable reading size to fit a composition.
- Content max width 1280 px, desktop gutters 56–80 px, tablet 32 px, mobile 20 px. Use a 12-column desktop grid and a simple stacked mobile order.
- Sections: roughly 96–128 px vertical space desktop / 64–80 px mobile; vary deliberately. Do not recreate the long empty gaps in R1.
- Radii: hero stage 32 px desktop / 24 px mobile; product card 28–32 px; fields 12 px; pill buttons only where appropriate.
- Shadow: diffuse green-black, low opacity. Restrict large backdrop blur to one small optional panel; an opaque sage fallback must look equally good.
- Use real SVG botanical art and cutout imagery. An icon library can supply UI arrows/checks, but must not substitute generic leaves for the signature artwork.

## 4. Routes and page structure

| Route | Purpose |
| --- | --- |
| `/` | Full marketing homepage, products, story, process, wholesale, FAQ and contact invitation |
| `/contact` | Complete enquiry form with contextual product preselection |
| `/thank-you` | Accessible post-submit confirmation; no customer data in the URL |
| `/privacy` | Plain data-use policy based on the real implementation; owner details configurable |
| Unmatched URLs (`src/app/not-found.tsx`) | Helpful 404 with a home link; this is not a literal `/not-found` route |

Use homepage section IDs `products`, `our-story`, `how-it-works`, `wholesale`, `faq`. Shared header/footer links must use `/#products`, `/#our-story`, `/#how-it-works`, `/#wholesale`, `/#faq` so navigation also works from `/contact` and `/privacy`. Same-page buttons may use fragment-only links. Keep products on the homepage initially. Navigation: Our Leaves · Our Story · Wholesale · Contact Us. Primary button: Request a Quote. Brand links home. Mobile menu: simple accessible drawer with focus management, Escape support and readable tap targets.

Footer: brand, a short statement, product/story/contact/privacy links, real email and WhatsApp only if configured, Sri Lanka as country, current year. Do not invent a street address. Include a discreet “Replay leaf opening” button only on the homepage; it explicitly restarts the effect.

## 5. Homepage content and composition

The copy below is proposed final copy. The owner must confirm product and service availability. Put copy into `src/content/site.ts` or small typed content modules so edits do not require changing components.

### 5.1 Entrance

No loading percentage and no artificial wait. A compact wordmark may be visible on the leaves. A clearly visible **“Skip intro”** control sits in the lower right on a solid, high-contrast surface. Detailed animation contract is in Section 7.

### 5.2 Hero — a product-first botanical stage

**Eyebrow:** BANANA LEAVES · SRI LANKA

**Headline:** Naturally made.\nThoughtfully supplied.

**Supporting copy:** Fresh banana leaves for everyday meals, memorable gatherings and growing businesses. Tell us what you need, and let’s plan your supply.

**Primary CTA:** Explore Our Leaves → `#products`

**Secondary CTA:** Request a Quote → `/contact`

**Small supporting line:** Household, catering and wholesale enquiries welcome.

Composition: cream canvas, compact left copy, large right leaf arrangement, oversized low-contrast background word **“Naturally”** placed as decoration and hidden from assistive technology. Keep the actual H1 separate and readable. A soft sage organic shape sits behind the cutout. One thin outline leaf crosses a corner. A small fixed label near the cutout says “Banana leaves / A natural part of your table.” No made-up freshness or sustainability seal.

At mobile sizes, copy comes first, CTAs next, then a shorter art stage. The image must not push the primary action below several screens. Use 100svh only as a maximum composition guide, not an inflexible height that clips content.

### 5.3 A slim audience band

**For family tables. For busy kitchens. For bigger plans.**

Small static labels: Home use · Restaurants · Catering · Wholesale. Separate with delicate leaf marks. It is not a never-ending marquee and does not show fake customer logos.

### 5.4 Products — three interactive botanical cards

**Eyebrow:** FIND YOUR LEAF

**Heading:** A natural fit for what you’re planning.

**Intro:** Explore leaf options for serving, wrapping and bulk supply. Sizes, quantities and availability are confirmed with your quote.

| Product | Description | Visible specification chips | CTA and destination |
| --- | --- | --- | --- |
| Whole Banana Leaves | A flexible choice for serving, wrapping and preparing leaves to suit your kitchen. | Whole leaf · Size on request | Enquire About Whole Leaves → `/contact?product=whole-leaves` |
| Cut-to-Size Leaves | Planning individual servings or food parcels? Tell us the dimensions and quantity you need. | Custom dimensions · Availability to confirm | Request Your Size → `/contact?product=cut-leaves` |
| Bulk Supply Enquiries | Discuss a one-off bulk requirement or regular supply for your restaurant, catering service or retail business. | Wholesale · One-off or recurring | Discuss Bulk Supply → `/contact?product=bulk-supply&type=wholesale` |

Do not list unconfirmed prices. Use “Request pricing” instead of LKR placeholders on the public site. Make these products individually hideable until the owner confirms them.

**Card design contract:** 3 columns on desktop, 2 where comfortable on tablet, 1 on mobile. About 360–400 px wide desktop, consistent CTA baseline. The leaf cutout floats in a sage top art compartment, with a small part breaking the inner boundary but never obscuring text. The cream body carries title, concise description, chips and CTA. A forest-green curved lower shelf echoes R5. Make the curve with CSS/SVG, not a screenshot. Add a visible “View details” button that expands an inline specification area: format, intended use, preferred dimensions, availability and quote basis. Only the button toggles; do not nest interactive elements inside a giant clickable card. Keyboard focus gets the same useful detail access as hover. No flipped text on the back of a 3D card.

Optional category pills: All · For the Table · For Business. Filtering fades outgoing items and moves remaining items without losing focus; mobile touch support is mandatory. Do not add search for three products.

### 5.5 Story — asymmetric editorial panel

**Eyebrow:** ROOTED IN SRI LANKA

**Heading:** A familiar leaf. A fresh beginning.

**Copy:** Banana leaves have a place in the meals we share and the traditions we keep. We’re building a Sri Lankan banana leaf business to connect that everyday natural material with homes, kitchens and businesses that value it.

**Copy:** Whether you need leaves for a gathering or want to discuss a larger order, we begin with your requirements: the format, quantity, destination and timing.

**CTA:** Tell Us What You Need → `/contact`

Layout: large original leaf illustration on one side, narrower copy opposite; a quiet line-art vein passes behind the image only. Do not represent stock/generated artwork as the owner’s farm. A later real-owner photograph can replace this image.

### 5.6 Process — useful information, not unsupported manufacturing claims

**Eyebrow:** FROM YOUR IDEA TO AN ENQUIRY

**Heading:** Your order starts with a conversation.

1. **Choose your leaf format.** Tell us whether you need whole leaves, a specific serving size or a bulk quantity.
2. **Share the details.** Add your location, preferred date and any packing or recurring-supply requirements.
3. **Confirm the possibilities.** We’ll discuss availability, specifications, pricing and delivery or collection before you place an order.

Do not claim the business already uses washing, hydro-cooling, boiling, vacuum packing, cold-chain shipping or a validated export process. Such content can be added only after confirmation. The visual process uses illustrations of a leaf, a dimension guide, and a simple parcel—not fabricated documentary photos.

### 5.7 Wholesale and overseas enquiries

**Eyebrow:** THINKING BIGGER?

**Heading:** Local kitchens. Wider possibilities.

**Copy:** Looking for a bulk order or exploring banana leaf supply from Sri Lanka? Share your business details, destination, approximate quantity and preferred schedule so we can discuss what is possible.

**Two compact enquiry choices:**

- **Domestic wholesale:** For restaurants, caterers, retailers and other businesses in Sri Lanka.
- **Overseas buyer enquiry:** For importers and distributors exploring supply from Sri Lanka.

**CTA:** Start a Wholesale Enquiry → `/contact?type=wholesale`

**Small note:** Export availability, documentation, packaging and destination requirements are assessed individually.

Do not draw an animated shipping map with unverified destination pins or say “worldwide delivery.” The business can invite export enquiries without claiming a completed export track record.

### 5.8 Gallery / leaf detail band

Use three purposeful original images: whole-leaf detail, serving-size arrangement, folded-leaf bundle. Give each a short factual visual caption. Do not show banana fruit or chips as products. If no real business photos exist, describe the section as **“A closer look at the leaf”**; avoid “Our farm,” “Our factory” and “Our shipments.” A large scroll-linked crop can reveal veins slowly; image itself stays in document flow.

### 5.9 FAQ — exact proposed copy

**What types of banana leaves can I enquire about?**
You can enquire about whole leaves, cut-to-size leaves and bulk supply. Available formats and quantities will be confirmed with your quote.

**Can I request a particular size?**
Yes. Include your preferred dimensions and quantity in the enquiry so we can discuss availability and preparation options.

**Do you accept restaurant and catering enquiries?**
Yes. Tell us how you plan to use the leaves, your quantity and whether you need a single order or recurring supply.

**How much do the leaves cost?**
Pricing depends on the requested format, quantity and arrangements. Send your requirements to request a quote.

**Can you arrange delivery?**
Share your town or destination in the form. Delivery or collection options and any charges must be confirmed before ordering.

**Can overseas buyers contact you?**
Yes. Overseas buyers can submit their destination and requirements. Export feasibility, documents and shipping arrangements need to be assessed for each enquiry.

Use native `details/summary` or an equally accessible accordion. Do not hide these answers behind hover.

### 5.10 Contact invitation

**Heading:** Let’s grow something naturally good.

**Copy:** A small gathering or a bigger business order—tell us what you have in mind.

**Primary:** Contact Us → `/contact`

**Secondary:** Chat on WhatsApp → only show with a confirmed number.

## 6. Contact page and submission experience

**Eyebrow:** CONTACT US

**Heading:** Let’s talk leaves.

**Intro:** Share a few details about your requirements. We’ll use them to get back to you about availability and a suitable quote.

Desktop: 40% contact information / 60% cream form panel in a botanical dark-green environment. Mobile: heading and essential contact channels, then form. The form is always fully opaque. A single decorative leaf partly crosses an outer corner, never the fields.

| Field | Required | Validation / behaviour |
| --- | --- | --- |
| Full name | Yes | Trim; 2–100 characters |
| Email address | Yes | Valid address, max 254; used for acknowledgement |
| Phone / WhatsApp | No | Max 30; accept international punctuation; do not demand Sri Lankan format for overseas buyers |
| Company / organisation | No | Max 120 |
| Enquiry type | Yes | General, Household, Catering/Restaurant, Wholesale, Overseas buyer |
| Product | Yes | whole-leaves, cut-leaves, bulk-supply, not-sure; server allowlist |
| Approximate quantity | No | Positive number within a documented sane maximum; paired with unit “leaves” or “kg”; blank allowed when unsure |
| Preferred dimensions | No | Max 100; example “30 × 40 cm”; do not silently assume dimensions |
| Town / country | Yes | Max 120; show destination country prominently for overseas type |
| Preferred date | No | No date earlier than today in Asia/Colombo; correct day-only handling |
| Message | Yes | Trim; 10–2,000 characters |
| Privacy acknowledgement | Yes | “I’ve read the Privacy Notice and understand that my details will be used to respond to this enquiry.” Link `/privacy` |
| Honeypot | Hidden | Not keyboard-focusable, not announced; populated values rejected without sending |
| Anti-bot token | In production | Cloudflare Turnstile; verified server-side |

Buttons: **Send Enquiry**, **Sending…**, with an inline spinner. Preserve form data on errors. Display a friendly error summary linked to invalid fields and field-specific messages. Use HTML validation plus the same Zod schema on the server. Show a non-marketing note: “This is an enquiry, not an order or payment.” Do not automatically subscribe anyone to a mailing list.

Success state after the owner email is accepted by the provider: **“Thank you—your enquiry has been submitted.”** Explain that the team will review the requirements. If the acknowledgement was accepted, say **“A confirmation email is on its way. Please check your spam folder too.”** Do not promise inbox placement or a fixed response time. If the acknowledgement fails but the owner notification succeeds, say **“Your enquiry was submitted, but we couldn’t send the confirmation email. There’s no need to submit it again.”**

Navigate to `/thank-you` only after the server confirms owner notification acceptance. Store only the opaque reference and UI outcome in session storage; no personal details in query strings. Direct visits to `/thank-you` show “Ready to contact us?” and a contact link, not a fabricated successful submission. Browser refresh may preserve the legitimate receipt for that tab. Provide Back to Home and Submit Another Enquiry actions.

Local `EMAIL_MODE=mock`: show **“Preview only—no emails were sent.”** Never use the real success copy for mock mode. Missing production email settings must produce a clear server-side configuration failure, not silent success.

## 7. Motion specification — mandatory, not just “add animations”

### 7.1 The two-leaf entrance

**Concept:** two broad illustrated banana leaves overlap along the centre seam and part like an organic curtain. It must visibly be **two leaves moving independently**, not two plain green rectangles, a zooming background or a static picture fading away.

**Asset:** original left and right banana-leaf illustrations, transparent outside each silhouette, with R2-inspired dark outlines, lighter central ribs and subtle curved veins. Use vector SVGs where possible. They should feel like the same botanical family but should not be exact mirrored clones. Orientation and export specifications are in Section 9.

**First load behaviour:** run on the first eligible home visit in the tab, once per session; set a versioned session key `leaf-intro-v1`. Inner routes, a homepage hash deep-link and reduced-motion visitors skip it. A footer Replay button allows intentional repetition. Use try/catch around session storage; a storage failure must never block entry.

**State contract:** `disabled → idle → opening → completed`, with `skipped` and `failed` exit paths. Every exit runs the same cleanup. Server-rendered page is usable with no intro by default; client enhancement may activate the entrance only while the visitor is at the top and before meaningful interaction. Do not show a surprise curtain after someone has scrolled or focused content during slow hydration.

**Composition:** fixed overlay within an isolated stacking context. The leaves cover the centre with a 3–5vw overlap. Left leaf initially extends beyond the left edge; right leaf beyond the right edge. Use `object-fit: contain`/SVG viewBox geometry and test wide and narrow ratios. A dark backdrop fills tiny gaps during closure. Use wrappers to separate translate/rotate from inner SVG curvature, so GSAP does not fight CSS transforms on the same node.

**Timeline (desktop, maximum 1.6 seconds):**

| Time | Action |
| --- | --- |
| 0–100 ms | Closed leaves visible immediately if assets are ready; no artificial hold |
| 100–350 ms | Left/right vein highlights brighten gently; leaf tips move outward 8–16 px, suggesting a small breath |
| 200–1250 ms | Left wrapper translates roughly `-110%` of its own width and rotates `-12deg`; right wrapper translates `110%` and rotates `12deg`. Small stagger about 70 ms. Transform origins near outer lower thirds. Use `power3.inOut` / a comparable smooth organic ease |
| 550–1350 ms | Backdrop opacity falls to zero; the already-rendered hero becomes visible. Hero cutout settles from y=24px, scale=.97 to its natural position; no blur animation |
| 800–1450 ms | H1 line wrappers reveal with y=20px to 0 and opacity 0 to 1, stagger 90 ms. Accessible text remains one readable heading |
| 1450–1600 ms | Dispose overlay; clear locks and `inert`; restore scroll position without jumping; record session completion |

On mobile: smaller leaf rotation (6–8 degrees), no extra breathing phase, total 900–1100 ms. Keep the hero still during reveal. Intro must not replay on viewport resize, React Strict Mode remount, route back-navigation or form submission.

**Escape hatches:** visible Skip intro; Escape key; reduced motion means immediate reveal with at most a brief opacity transition; if artwork fails to load, do not begin. A separate fail-safe removes any active overlay within 2 seconds even if the animation fails. Do not wait indefinitely for fonts or images. Skip on slow asset readiness rather than extending the intro.

**Focus and scrolling:** while active, underlying interactions are temporarily inert and focus remains in the intro controls. Releasing the intro must not leave focus on a removed element or reset the user's scroll position. Restore a sensible hero/skip-link focus only if focus was inside the intro; do not steal focus otherwise. All cleanup happens on completion, skip, timeout, error and unmount. No-JavaScript users can read the page because there is no server-rendered blocking overlay.

### 7.2 Remaining motion vocabulary

| Element | Trigger and movement | Duration / limit | Small-screen / reduced-motion behaviour |
| --- | --- | --- | --- |
| Hero leaf depth | Pointer position changes outer transform at most x/y 10px, rotate 2deg; interpolate with RAF only while hero is visible | Settles in 300–500 ms; no constant loop | Off for coarse pointers and reduced motion |
| Hero scroll | Cutout moves at most 48px over the first screen while decorative word shifts at most 24px; content remains normal scroll | Scroll-linked via ScrollTrigger, no pinning | Off on mobile and reduced motion |
| Section reveal | Heading and image rise 20px with opacity; trigger once when 15–20% visible | 550–700 ms, children stagger 60–90 ms, max 4 staggered items | Opacity only or immediate; DOM visible by default |
| Product hover | Card lifts 6px, shadow deepens, cutout rotates 1.5deg and moves 5px | 250–350 ms | Focus has clear outline; touch does not require hover |
| Product details | Inline area expands; arrow turns 90deg; use measured height or grid rows with tested content overflow | 200–280 ms | Immediate if reduced motion; no flip |
| Product filter | Brief opacity change plus reflow transition if supported without layout instability | 180–240 ms | Immediate, preserve active control and focus |
| Leaf-vein process | One thin SVG vein draws down as the section is traversed; each step gets a small circle accent | Section progress 0–1 | Static complete vein, no pinned scrolling |
| Gallery detail | Image scale 1.03 to 1.00 as it enters; subtle edge reveal through rounded mask | 700 ms once | Static image |
| CTA hover | Arrow advances 4px; background changes slightly | 160–220 ms | Same visible state on focus; no magnetic cursor |
| FAQ | Expand content with sensible height animation; indicator rotates | 200 ms | Instant open/close |
| Form success | Checkmark SVG stroke draws once; copy fades in | 400–600 ms | Static check and immediate copy |
| Mobile drawer | Panel slides from right 24px with opacity; simple backdrop | 220 ms | Immediate or 100 ms opacity |

**Engineering:** GSAP + `@gsap/react` + ScrollTrigger; use scoped refs and `useGSAP` cleanup. Do not add Motion, AOS, Lenis and a second scroll engine to duplicate GSAP. Native scrolling is mandatory. `gsap.matchMedia` separates desktop, coarse pointer and reduced motion. Resize must revert/rebuild scoped timelines without stacking listeners. Stop pointer/scroll work when offscreen or hidden. Prefer transforms and opacity; never animate a full-screen blur, huge shadow or top/left layout continuously. No animation may hide meaningful content if JS fails. Respect a preference change during the session, not only initial load.

## 8. Engineering architecture

Use the current stable, mutually compatible versions at implementation time; inspect an existing project before changing dependencies. Do not pin to the earlier conversation's Next.js 15 version by habit. Use App Router and TypeScript strict mode. Use the Tailwind setup matching the installed version; current guidance uses an imported Tailwind stylesheet, not blindly pasted v3 configuration.

### Dependencies

- Core: Next.js, React, TypeScript, Tailwind CSS.
- Motion: `gsap`, `@gsap/react`.
- Validation/forms: `zod`; React Hook Form and the Zod resolver if they materially simplify the multi-field form.
- Mail: `resend`; React-based email templates with inline styles. React Email tooling is optional for previews, not a second frontend design system.
- UI: `lucide-react`, `clsx`, `tailwind-merge` as needed. Avoid importing a full component suite for a small site.
- Production abuse/idempotency: an HTTPS-accessible Redis store such as Upstash with atomic operations, plus server-verified Turnstile. Confirm current plan availability; do not promise all infrastructure is free.
- QA: Playwright for a few critical browser journeys; the project's standard test runner for server/email logic. Do not build a huge test framework for decorative CSS.

### Suggested source layout

```text
src/
  app/
    layout.tsx
    page.tsx
    globals.css
    contact/page.tsx
    thank-you/page.tsx
    privacy/page.tsx
    api/contact/route.ts
    not-found.tsx
    robots.ts
    sitemap.ts
  components/
    layout/{site-header,mobile-nav,site-footer}.tsx
    motion/{leaf-intro,hero-motion,section-reveal,leaf-vein-progress}.tsx
    home/{hero,audience-band,product-collection,product-card,story,process,wholesale,gallery,faq,contact-cta}.tsx
    contact/{enquiry-form,form-status,thank-you-state}.tsx
    ui/{button,field,section-heading}.tsx
  content/{site,products,faq}.ts
  config/{site,env.server}.ts
  lib/
    contact/{schema,service,rate-limit,idempotency,store,turnstile}.ts
    email/{provider,resend-provider,mock-provider}.ts
  emails/{customer-thank-you,owner-enquiry}.tsx
public/
  images/{hero,products,story,gallery,email}/
  illustrations/{leaf-intro-left.svg,leaf-intro-right.svg,leaf-vein.svg,botanical-pattern.svg}
docs/
  references/
  asset-manifest.md
  launch-checklist.md
  progress.md
.env.example
README.md
README-01-CODEX-MASTER-BRIEF.md
README-02-DEVELOPMENT-TASKS.md
```

Most page content should be server rendered. Only intro, interactive navigation, cards, motion islands and form need client boundaries. Do not place `'use client'` on the entire root layout. The mail client, recipient, Turnstile secret and Redis credentials live in server-only modules. Use the Node runtime for the mail route unless the selected SDK/runtime is verified to work elsewhere.

Do not configure static export: `/api/contact` requires a server. Choose deployment hosting that supports Next.js server functionality and permits this commercial business use. Do not automatically assume a hobby/free hosting plan permits a business website.

### Owner-editable configuration

```ts
export const siteConfig = {
  brandName: 'YOUR_BRAND',
  tagline: 'Naturally made. Thoughtfully supplied.',
  country: 'Sri Lanka',
  town: '',
  publicEmail: '',
  whatsappNumber: '', // international digits only, e.g. 94...; blank hides CTA
  siteUrl: '',       // real HTTPS origin before public launch
  logoPath: '',
  showOverseasEnquiries: true,
  catalogueProductIds: ['whole-leaves', 'cut-leaves', 'bulk-supply'],
  businessContentApproved: false, // owner review required before public launch
};
```

The initial catalogue array is for preview, not a declaration that supply is confirmed. Keep `businessContentApproved` false until the owner reviews the brand, catalogue and business claims. Public launch requires this review; it must not prevent local development. In the product data, give each item an `enabled` field and a `supplyConfirmed` field; unconfirmed items may appear in local previews but must be hidden or rewritten as exploratory enquiries before public launch. Display a development-only configuration notice for missing details; do not leak configuration debugging into the finished customer flow. Do not put actual secrets into this exported object.

### Environment template

```dotenv
# Local defaults: previews only; no outgoing email.
EMAIL_MODE=mock
RESEND_API_KEY=
CONTACT_TO_EMAIL=
EMAIL_FROM=
CONTACT_REPLY_TO_EMAIL=
SITE_URL=http://localhost:3000
ALLOWED_ORIGINS=http://localhost:3000
# Public site key is safe to expose; the secret is server-only.
NEXT_PUBLIC_TURNSTILE_SITE_KEY=
TURNSTILE_SECRET_KEY=
UPSTASH_REDIS_REST_URL=
UPSTASH_REDIS_REST_TOKEN=
RATE_LIMIT_HASH_SECRET=
# Optional configured real WhatsApp number stays in public site configuration.
```

Production requires `EMAIL_MODE=live`, a real `SITE_URL`, allowed origin, verified sender, real owner recipient, reply inbox, Turnstile and shared request-state store. `CONTACT_TO_EMAIL` may be the owner's Gmail/Outlook mailbox. `EMAIL_FROM` must be a sender on the verified business domain; it is not the visitor's email. `CONTACT_REPLY_TO_EMAIL` must be a monitored inbox; otherwise replies to the acknowledgement could disappear. None of the secret settings may have a `NEXT_PUBLIC_` prefix.

## 9. Original asset creation brief and prompts

This section is the image-creation handoff. Do not simply paste the supplied screenshots into the website. Generate fresh artwork inspired by their visual language. Prefer code-native SVG for illustrations that need crisp responsive scaling or controlled path animation; use image generation for photographic cutouts and detailed raster artwork. If generation tools are unavailable, save these prompts in the asset manifest and make intentional temporary SVG illustrations; clearly mark the unfinished photographic assets in development notes.

### Shared art direction

Banana leaves only: broad elongated blades, prominent lighter midrib and fine parallel lateral veins. No monstera holes, palm fronds, ficus leaves, flowers or banana fruit unless later requested. Palette: forest green, leaf green, sage and cream. Light arrives from upper left. Original artwork, no borrowed logos, no baked-in text, no watermark, no screen UI. Keep the illustratorly entrance and photographic product cutouts related through palette and silhouette.

Transparent means actual alpha, not a checkerboard drawn into the image. Inspect edges against both white and forest green. Keep shadows on a separate layer or within tight bounds. Do not let a transparent export include a huge invisible margin. Preserve full leaf tips and suitable safe margins.

| Asset | Final path | Suggested source dimensions | Format / role |
| --- | --- | --- | --- |
| A1 left entrance leaf | `public/illustrations/leaf-intro-left.svg` | ViewBox about 1000 × 1800 | Original editable SVG, broad left-opening blade |
| A2 right entrance leaf | `public/illustrations/leaf-intro-right.svg` | ViewBox about 1000 × 1800 | Matching SVG with a slightly different silhouette |
| A3 hero arrangement | `public/images/hero/banana-leaf-arrangement.webp` | 1800 × 1600 | Transparent WebP/PNG, hero cutout |
| A4 whole leaf product | `public/images/products/whole-leaves.webp` | 1400 × 1400 | Transparent cutout with subtle shadow |
| A5 serving leaf product | `public/images/products/cut-leaves.webp` | 1400 × 1400 | Transparent cutout, distinct from A4 |
| A6 bulk leaf product | `public/images/products/bulk-leaves.webp` | 1400 × 1400 | Folded stack, no claims or branded packaging |
| A7 story art | `public/images/story/leaf-study.webp` | 1600 × 1800 | Leaf study on warm cream, or original SVG |
| A8 vein detail | `public/images/gallery/leaf-detail.webp` | 1800 × 1200 | Macro botanical detail, no alpha needed |
| A9 serving scene | `public/images/gallery/serving-scene.webp` | 1600 × 1200 | Simple leaf on a neutral table; no fictional facility |
| A10 pattern + vein | `public/illustrations/botanical-pattern.svg`, `leaf-vein.svg` | Scalable | Low-opacity decorative linework |
| A11 email header | `public/images/email/leaf-banner.png` | 1200 × 360 | Flat raster, no text; displayed about 600 × 180 |
| A12 social preview | `public/images/og.jpg` | 1200 × 630 | Composed from approved assets and real HTML/SVG text |

**A1/A2 illustration prompt (if exploring visually before creating SVG):**

> Original botanical illustration of a single large banana leaf, vertically elongated but broad enough to function as one half of an opening website curtain. Flat forest and fresh green colour fields, fine dark green outline, pale lime central midrib, many graceful thin lateral veins inspired by hand-drawn botanical pattern illustration. Slight natural curvature and a few subtle edge splits, elegant and premium, not childish clip art. Entire leaf visible, stem short, transparent background, no text, no banana fruit, no additional leaves, no shadows outside the silhouette. Create a left-curving leaf, then a coordinated right-curving version with a genuinely different silhouette. Keep both broad, readable and suitable for independent animation.

Implementation note: if generation returns raster artwork, keep it as a legitimate raster asset and use wrapper transforms. Do not rename PNG to SVG or embed a giant bitmap inside a purported vector. For the most reliable entrance, draw original editable SVG silhouettes and vein paths to match the visual brief. Use a few larger groups rather than hundreds of animated paths. Only the full leaf wrappers move; individual fine veins remain static.

**A3 hero prompt:**

> Premium editorial product cutout of two broad fresh banana leaves and one softly rolled leaf section, arranged in an elegant sweeping diagonal composition. Botanical banana-leaf anatomy with prominent light midrib, parallel veins, rich natural green colour, subtle authentic imperfections. Soft studio sunlight from upper left, refined realistic material detail, restrained soft contact shadows. Isolated on a genuinely transparent background, complete leaves within frame, generous usable silhouette, no vase, no fruit, no bowl, no text, no logo, no watermark. Composition should overlap a large website headline on the right without becoming a dense bouquet.

**A4 whole leaves prompt:**

> Product photography cutout of three whole banana leaves laid in a loose fan, elongated broad blades fully visible with intact tips, visible midribs and fine lateral veins. Rich natural green, same upper-left soft lighting as the hero, slight depth, minimal contact shadow. Transparent background. No bananas, no packaging, no hands, no text, no logo. Square catalogue composition with comfortable margins and a natural angle.

**A5 cut leaves prompt:**

> Premium product cutout of a neat small stack of rectangular banana-leaf serving portions, top piece slightly offset to show layered edges and natural parallel veins. Clean straight cut edges with realistic material thickness, vibrant but believable green, soft studio light from upper left. Transparent background, square composition, no utensils, no food, no fruit, no logos or printed text. Clearly distinguish these cut portions from whole leaves.

**A6 bulk leaves prompt:**

> Editorial product cutout of several broad banana leaves loosely folded and stacked for a bulk-supply catalogue concept, with visible green layered edges and natural veins. Simple unbranded arrangement, no industrial warehouse, no vacuum-sealed packaging, no shipping label or certification marks. Soft upper-left studio lighting, rich forest and fresh greens, transparent background, square composition, full stack visible. Do not imply a particular approved packing or preservation process.

**A7 story prompt:**

> Sophisticated botanical study of a banana leaf on warm cream paper: one large gently curved fresh leaf, one small folded leaf section, restrained thin hand-drawn vein illustration behind them. Editorial art direction, balanced negative space, tactile subtle paper texture, forest green and sage palette, soft daylight. No words, no logos, no people, no farm, no bananas. Vertical composition suited to a premium Sri Lankan botanical brand story section.

**A8 macro prompt:**

> Extreme close botanical photograph of the surface of a banana leaf, a pale green central rib and fine parallel lateral veins, subtle tonal gradients from forest to fresh green, authentic natural texture and a few tiny imperfections. Soft directional natural light, refined editorial detail, no heavy water droplets, no artificial plastic shine, no text, landscape composition.

**A9 serving prompt:**

> Minimal editorial table scene with one banana-leaf serving portion placed on a warm neutral stoneware plate on a cream linen table, soft side daylight, quiet natural shadows, subtle Sri Lankan everyday dining atmosphere without decorative stereotypes. Leaf is the main subject; no food is needed. No people, no logos, no words, no branded restaurant setting. Landscape 4:3 composition with room for a small caption outside the image.

**A10 SVG brief:** draw thin banana-leaf outlines with a clear central vein and simple angled secondary veins. Pattern fragments are used at 3–6% opacity only. The process connector is one continuous central path with three branch joints aligned to the content steps. Keep text outside the SVG and keep decoration `aria-hidden`.

**A11 email banner prompt:**

> Wide shallow botanical banner, cream background with two original illustrated banana leaves entering gently from the left and right edges, forest green and sage with pale lime veins, calm premium visual style, mostly clear centre. Flat illustration and very subtle paper texture. No text, no logo, no border, no animation. 10:3 composition for a business thank-you email.

**A12 OG composition:** build a 1200 × 630 design with the actual brand name, the text “Fresh banana leaves from Sri Lanka”, a strong approved cutout and forest/cream colours. Render text deterministically; do not rely on generated image text. Publish only after the owner confirms the brand and offering.

### Asset handling and performance targets

- Preserve originals outside `public/`; put optimized delivery variants in `public/`.
- Hero raster target under about 300–450 KB; each product under 150–220 KB; intro SVGs ideally under 80 KB combined; email banner under 100 KB. These are project budgets, not guarantees.
- Use `next/image`, explicit dimensions/aspect ratios, accurate `sizes`, responsive formats and lazy loading below the fold. Use the installed Next.js version's current priority/preload API for the actual LCP image only.
- Decorative SVGs have empty alternatives/`aria-hidden`; meaningful images have concise alt text describing the actual image. Do not put SEO keyword lists into alt text.
- Asset manifest records asset ID, filename, prompt, source/generation method, whether illustrative or actual product photography, dimensions, usage and optimization status.
- Use distinct product artwork. Do not recycle the same image three times with only rotation or crop changes.

## 10. Email service choice and configuration

### Recommendation: Resend for this Next.js build

Resend is the selected default because it has a direct Next.js integration and works with React-based transactional templates. It is a practical choice for a small enquiry site, not a claim that it is the universal cheapest provider.

Verified on 26 October 2026: the free transactional allowance is **3,000 emails/month with a 100-email daily cap**. One successful enquiry normally sends **two messages**: owner notification + customer acknowledgement. If no other emails consume the quota, that corresponds to at most approximately **1,500 enquiries/month and 50 enquiries/day**. Real available capacity is lower when tests, retries or other traffic consume quota. Recheck the provider's terms before launch. The sending allowance does not include buying a domain, hosting the website or supplying a mailbox.

Brevo is a higher-daily-volume alternative: its published free limit is 300 sends/day, about 150 two-message enquiries/day before other usage. Use a provider interface to allow switching later; do not implement and configure two mail providers in the first release. Verify current branding and account restrictions directly before choosing an alternative plan.

### Domain and inbox rules

1. Owner creates the email provider account and obtains their API key privately.
2. Add a domain or sending subdomain that the owner controls; publish the DNS records shown by the provider and verify them. Do not guess DNS records.
3. Set `EMAIL_FROM` to a verified address such as `YOUR_BRAND <enquiries@send.your-real-domain>`.
4. Set `CONTACT_TO_EMAIL` to the **owner's provided inbox**. This is the answer to “the contact mail comes to my provided email.” It stays server-side and cannot be overridden by a form field.
5. Set `CONTACT_REPLY_TO_EMAIL` to a monitored business reply inbox. It can match the owner inbox.
6. Customer's address goes into the acknowledgement `to` field only after validation; owner notification `replyTo` is the customer's validated address, so Reply in the owner's mailbox contacts the customer.
7. For the customer acknowledgement, `replyTo` is the owner's monitored reply inbox.
8. The `resend.dev` sender is for restricted testing; it cannot serve as the production sender for acknowledgements to arbitrary customers. A verified domain is needed for that.
9. Receiving replies is a mailbox function; purchasing a domain or verifying a sender does not automatically create a monitored inbox.

Do not send from the visitor's Gmail address, expose an API key in frontend JavaScript or replace this requirement with a `mailto:` link. Real contact submission must occur on the server.

## 11. Contact API and reliability contract

### Request and response

`POST /api/contact`, JSON body, max 16 KB, strict schema, same-origin form. The form generates a UUID submission key and retains it for retries of an unchanged submission. Editing the payload after an attempted submission starts a new key. Product query parameters are allowlisted and only preselect a UI option; never trust them as prices, recipient addresses or an order commitment.

```ts
// Conceptual API contract; implement with Zod and inferred types.
type ContactResult =
  | { ok: true; mode: 'live'; reference: string;
      confirmation: 'accepted' | 'failed' }
  | { ok: true; mode: 'mock'; reference: string }
  | { ok: false; code: 'VALIDATION' | 'RATE_LIMITED' | 'BOT_CHECK'
      | 'CONFIGURATION' | 'DELIVERY_UNAVAILABLE' | 'CONFLICT' | 'IN_PROGRESS';
      message: string; fieldErrors?: Record<string, string[]> };
```

Return appropriate HTTP codes: 400 validation, 403 origin/bot check, 409 same-key/different-payload conflict or same-submission-in-progress (distinguished by the response code), 429 limit with `Retry-After`, 503 unavailable production configuration or provider, 200 accepted or explicit local mock. Never return raw provider exceptions, stack traces, keys or the owner's private inbox.

### Server sequence

1. Reject unsupported methods/content type and oversized payloads. Validate allowed origin for browser submissions; do not derive the allowlist from untrusted forwarded headers.
2. Validate and normalize all fields, consent, enum values, optional date and lengths. Date comparison uses Asia/Colombo day boundaries, not UTC midnight by accident. Treat a populated honeypot as a rejected submission; never send acknowledgement to it.
3. Apply shared-store rate limits to a deployment-trusted client-IP identifier and normalized recipient address. Hash identifiers with a server secret; do not log raw IPs. Starter limits: 5 attempts/hour/IP and 3 distinct customer acknowledgement submissions/day/address; make limits configurable and test shared-network behaviour. Reserve acknowledgement quota atomically before sending so concurrent requests cannot bypass it. Reconciliation of the same immutable submission must not consume an additional per-address reservation; rejected traffic must still count toward the IP attempt limit. Do not trust a user-supplied forwarding header directly.
4. Verify Turnstile server-side, including expected hostname/action. Widget rendering alone is not protection. Refresh tokens after an expired/rejected challenge or retry; a token is single-use. Local mock tests may bypass with an explicit development-only adapter; production must fail closed on missing verification configuration.
5. Atomically establish the submission record using the UUID and a hash of the normalized payload. Same UUID + altered data returns 409. A short processing lock prevents concurrent submissions. A duplicate arriving while a lock is active receives `409 IN_PROGRESS` with a short `Retry-After`, not a successful receipt. The client preserves the existing key and data; it may retry after that interval with a fresh anti-bot token, without creating a new enquiry. Do not implement production locks/rate limits with a process-local `Map` on serverless infrastructure.
6. Freeze the accepted payload and rendered message data in a short-lived record so retries reuse exactly the same email body, reference and timestamp. The record tracks `owner: pending/accepted/failed/unknown` and `customer: not-attempted/accepted/failed/unknown`, plus provider IDs when known. Keep minimal encrypted-in-transit data; expire request records after 24 hours measured from first creation, not refreshed on every retry. Do not resend an ambiguous request near or beyond the provider’s 24-hour deduplication window. The client discards the ability to retry a stale local submission and directs the user to contact the business with any retained reference; it must not silently create a new key and resend it. This is bounded deduplication, not a permanent delivery guarantee. Production privacy copy must reflect this short retention as well as mailbox/provider retention.
7. Await the owner notification with provider idempotency key `enquiry/{submissionId}/owner`. Check the SDK's explicit error result as well as thrown errors. “API accepted” means provider accepted the message for sending, not proof it landed in the inbox.
8. Only after owner acceptance, await the customer's acknowledgement with `enquiry/{submissionId}/customer`. Each send uses a bounded timeout. Do not use un-awaited background promises inside a request that may terminate.
9. If owner notification fails, return a recoverable failure, preserve input and reuse the same UUID for retry. A timeout has unknown delivery outcome; retry with the same provider idempotency key and immutable body rather than sending a new message under a new key.
10. If owner succeeds and acknowledgement fails, return success with `confirmation: 'failed'`. Do not ask the customer to resubmit; record the partial outcome for diagnosis. A deliberate same-key retry within the idempotency window must skip accepted sends and only attempt the missing send with its existing key.
11. Persist status before returning; release locks safely. Log request reference, operation, duration, sanitized error code and provider message ID, without the full message or contact data.

Resend's documented idempotency window is 24 hours. This is **not permanent exactly-once delivery**. Do not claim it covers retries beyond that window. Do not automatically retry an old ambiguous record after expiry; investigate provider history before a manual resend. A database-backed outbox and monitored queue can be added later if the owner requires guaranteed background retry, but is not required for this small first version. Do not claim background retry exists when it has not been built.

The acknowledgement must remain a short fixed transactional message. Do not reflect a visitor's free-form message, arbitrary links or HTML into an email sent to a third-party address. Owner notification can contain the complete escaped submission. React escaping or a trustworthy renderer must encode all user strings; never use unescaped `dangerouslySetInnerHTML`.

## 12. Customer thank-you email — content and visual template

### Subject and text

**Subject:** Thank you for contacting {{brandName}} · {{reference}}

**Preheader:** We’ve received your banana leaf enquiry. Here’s what happens next.

**Headline:** A fresh conversation starts here.

**Body:**

Hello {{firstName}},

Thank you for getting in touch with {{brandName}}. We’ve received your enquiry and will review your requirements before getting back to you.

**Your enquiry**
Reference: {{reference}}
Interested in: {{safeProductLabel}}
Quantity: {{safeQuantityLabelOrNotSpecified}}

**What happens next?**
We’ll discuss availability, suitable specifications, pricing and delivery or collection options. This email acknowledges your enquiry; it does not confirm an order or payment.

Need to add something? Reply to this email and include your enquiry reference.

Warm regards,
The {{brandName}} team
Sri Lanka

**Button:** Visit Our Website

**Footer:** You received this email because this address was used to contact {{brandName}}. If that wasn’t you, you can ignore this message. Privacy Notice.

Do not promise a 24-hour reply unless the owner explicitly commits to it. Do not send marketing promotions, discount codes or newsletter enrollment in the receipt.

### Visual direction

600 px maximum width, cream outer canvas, forest-green header, small actual brand logo or a text wordmark, subtle botanical banner, large Georgia headline, white/cream message body, pale sage summary panel with a 3 px green left rule, deep green CTA, a quiet footer. Use a clear Arial body at 16 px with 1.6 line-height. Email design should echo the website without carrying its animation into email.

No JavaScript, SVG dependency, video, CSS grid, blur, external font requirement or hover-only information. Use layout tables with `role="presentation"`, inline styles, raster header artwork, descriptive alt text, explicit image dimensions and a readable plain-text counterpart. Must remain understandable with images blocked. Full-width stacked layout on narrow clients; tolerate Outlook dropping rounded corners.

### Ready-to-adapt React template

The following is a template seed to implement as `src/emails/customer-thank-you.tsx`. It deliberately uses ordinary JSX tables and inline styles so it does not depend on changing UI-library exports. Send it using Resend's supported React email input or render to HTML with the selected email renderer. Generate a plain-text equivalent from the exact copy above. `siteUrl`, `privacyUrl`, banner URL and all brand props must come from validated server configuration. Never accept arbitrary URL props from the form.

```tsx
import * as React from 'react';

type ThankYouEmailProps = {
  brandName: string;
  firstName: string;
  reference: string;
  productLabel: string;
  quantityLabel: string;
  siteUrl: string;
  privacyUrl: string;
  bannerUrl?: string;
};

export function CustomerThankYouEmail(p: ThankYouEmailProps) {
  const bodyText: React.CSSProperties = {
    margin: '0 0 18px', fontFamily: 'Arial, sans-serif',
    fontSize: '16px', lineHeight: '26px', color: '#334D3F',
  };
  return (
    <html lang="en">
      <head><meta name="viewport" content="width=device-width, initial-scale=1" /></head>
      <body style={{ margin: 0, padding: 0, backgroundColor: '#F7F5EC' }}>
        <div style={{ display: 'none', maxHeight: 0, overflow: 'hidden', opacity: 0 }}>
          We’ve received your banana leaf enquiry. Here’s what happens next.
        </div>
        <table role="presentation" width="100%" cellPadding={0} cellSpacing={0}
          style={{ backgroundColor: '#F7F5EC' }}>
          <tbody><tr><td align="center" style={{ padding: '28px 12px' }}>
            <table role="presentation" width="600" cellPadding={0} cellSpacing={0}
              style={{ width: '100%', maxWidth: '600px', backgroundColor: '#FFFDF7' }}>
              <tbody>
                <tr><td style={{ padding: '25px 28px', backgroundColor: '#102C21' }}>
                  <p style={{ margin: 0, fontFamily: 'Georgia, serif', fontSize: '26px', color: '#FFFDF7' }}>
                    {p.brandName}
                  </p>
                  <p style={{ margin: '7px 0 0', fontFamily: 'Arial, sans-serif', fontSize: '11px', letterSpacing: '2px', color: '#DCE8AA' }}>
                    NATURALLY MADE. THOUGHTFULLY SUPPLIED.
                  </p>
                </td></tr>
                {p.bannerUrl && <tr><td>
                  <img src={p.bannerUrl} width="600" height="180" alt="Illustrated green banana leaves"
                    style={{ display: 'block', width: '100%', maxWidth: '600px', height: 'auto', border: 0 }} />
                </td></tr>}
                <tr><td style={{ padding: '32px 28px' }}>
                  <h1 style={{ margin: '0 0 24px', fontFamily: 'Georgia, serif', fontSize: '34px', lineHeight: '40px', fontWeight: 400, color: '#102C21' }}>
                    A fresh conversation starts here.
                  </h1>
                  <p style={bodyText}>Hello {p.firstName},</p>
                  <p style={bodyText}>
                    Thank you for getting in touch with {p.brandName}. We’ve received your enquiry
                    and will review your requirements before getting back to you.
                  </p>
                  <table role="presentation" width="100%" cellPadding={0} cellSpacing={0}
                    style={{ marginBottom: '24px', backgroundColor: '#E8EEDC', borderLeft: '3px solid #1D5138' }}>
                    <tbody><tr><td style={{ padding: '20px' }}>
                      <p style={{ ...bodyText, marginBottom: '10px', fontWeight: 700 }}>Your enquiry</p>
                      <p style={{ ...bodyText, marginBottom: 0, fontSize: '14px' }}>
                        Reference: {p.reference}<br />
                        Interested in: {p.productLabel}<br />
                        Quantity: {p.quantityLabel}
                      </p>
                    </td></tr></tbody>
                  </table>
                  <h2 style={{ margin: '0 0 12px', fontFamily: 'Georgia, serif', fontSize: '24px', color: '#102C21', fontWeight: 400 }}>
                    What happens next?
                  </h2>
                  <p style={bodyText}>
                    We’ll discuss availability, suitable specifications, pricing and delivery or
                    collection options. This email acknowledges your enquiry; it does not confirm
                    an order or payment.
                  </p>
                  <p style={bodyText}>Need to add something? Reply to this email and include your enquiry reference.</p>
                  <table role="presentation" cellPadding={0} cellSpacing={0} style={{ margin: '25px 0' }}>
                    <tbody><tr><td bgcolor="#1D5138" style={{ borderRadius: '8px', textAlign: 'center' }}>
                      <a href={p.siteUrl} style={{ display: 'inline-block', padding: '15px 23px', fontFamily: 'Arial, sans-serif', fontSize: '15px', fontWeight: 700, color: '#FFFFFF', textDecoration: 'none', border: '1px solid #1D5138', borderRadius: '8px' }}>
                        Visit Our Website
                      </a>
                    </td></tr></tbody>
                  </table>
                  <p style={{ ...bodyText, marginBottom: 0 }}>Warm regards,<br />The {p.brandName} team<br />Sri Lanka</p>
                </td></tr>
                <tr><td style={{ padding: '23px 28px', borderTop: '1px solid #D1DBC9' }}>
                  <p style={{ ...bodyText, fontSize: '12px', lineHeight: '19px', marginBottom: '8px' }}>
                    You received this email because this address was used to contact {p.brandName}.
                    If that wasn’t you, you can ignore this message.
                  </p>
                  <a href={p.privacyUrl} style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px', color: '#1D5138', textDecoration: 'underline' }}>Privacy Notice</a>
                </td></tr>
              </tbody>
            </table>
          </td></tr></tbody>
        </table>
      </body>
    </html>
  );
}
```

Do not blindly use this seed as proof of email-client compatibility. Render it and inspect long names, long references, absent banner, narrow width, blocked images and plain text. Production template props must be escaped by React and derived from normalized, length-limited values. Product label comes from an enum-to-label map; quantity is formatted from validated numeric data. Omit the raw free-text message and untrusted URLs from this customer email.

## 13. Owner notification email

**Recipient:** `CONTACT_TO_EMAIL`, exclusively from the server environment.

**Subject:** New {{enquiryTypeLabel}} enquiry · {{reference}}

**Preheader:** {{safeProductLabel}} enquiry received through your website.

**Header:** New banana leaf enquiry

**Top summary:** Reference · Submitted time in Asia/Colombo · Enquiry type

**Contact panel:** name, email, optional phone/WhatsApp, company, location/country.

**Requirements panel:** product, quantity and unit, dimensions, preferred date.

**Message panel:** complete escaped plain-text message; preserve line breaks without interpreting HTML.

**Footer:** “Reply to this email to contact the customer. Confirm specifications, price and fulfilment before accepting an order.”

Design: same 600 px cream/green template family; more compact and practical than the customer email, with readable label/value rows. On narrow screens, stack labels and values. Avoid decorative image weight. Include a plain-text version with every submitted field. Never set the visitor's email as `from`; set validated customer email as `replyTo`. Avoid user-authored subject fragments; use enum labels and the server-generated reference.

Show an internal preview of both templates with fixture data. Keep any preview route development-only or generate local HTML preview files outside public production routes. Do not expose arbitrary email rendering/sending endpoints to visitors.

## 14. Accessibility, performance, SEO and privacy

### Accessibility

- Semantic landmarks, one H1 per page, correct heading hierarchy, skip link, visible focus, descriptive links.
- Minimum 44 × 44 px interactive targets; buttons remain identifiable without hover.
- Menus and dialogs support Escape, focus containment and focus restoration. Form feedback uses `aria-live` without repeated announcements.
- No colour-only validation; announce error summary and mark invalid fields. Labels stay visible when fields contain values.
- Entrance skip control is keyboard-accessible. Reduced-motion settings suppress the entrance, scroll effects and pointer parallax.
- At 200% zoom and a 320 px viewport, no essential content is clipped and no unintended horizontal page scrolling occurs.
- Without JS, main content and contact channels stay available; provide a clear form fallback instead of claiming JavaScript-dependent delivery works.

### Performance

- Keep initial motion JavaScript modest; lazy-load noncritical interactive sections where useful. Do not import unused animation plugins.
- Dimensions reserved for images, forms and header; no delayed font/image layout jumps.
- Project targets: LCP under 2.5 s, CLS under 0.1, INP under 200 ms in representative field use. Lab checks are estimates, not field guarantees. Aim for Lighthouse mobile performance 90+ with production build; report measured values, do not claim them without running checks.
- Native scroll only. Intro assets are lightweight and should not compete with the hero's LCP image. When there is a conflict, skip or simplify the intro.
- Do not use autoplay background video in this version. Botanical motion should come from two leaf layers, SVG paths and controlled transforms.

### Search metadata

- Title: `Fresh Banana Leaves in Sri Lanka | {{brandName}}` after actual name and offer confirmation.
- Description: `Explore banana leaf options for serving, wrapping and bulk enquiries in Sri Lanka. Contact {{brandName}} to discuss sizes, quantities and supply requirements.`
- Unique contact/privacy metadata, canonical URL from actual site configuration, sitemap and robots appropriate to deployment state.
- Private/staging preview must not be indexed. Do not put `example.com` canonicals on a public launch.
- Structured data may use verified Organization information. Do not create ratings, prices, postal addresses or certifications. Avoid Product offer markup when prices/availability are unknown.

### Privacy and data minimization

Privacy page explains the fields collected, why they are needed to respond, the mail provider and request-state store actually used, short-lived anti-abuse/idempotency records, and contact/deletion channel. Distinguish 24-hour application request-state retention from potentially longer mailbox/provider retention. The owner must set their actual retention practice; do not invent a policy or claim legal compliance certification. Do not add ad trackers, analytics cookies or marketing consent by default. Secrets and full submissions never appear in logs, client bundles or URLs.

## 15. Acceptance and owner setup

A finished local build must demonstrate:

- An original visual design clearly informed by all five references, without copied competitor content.
- Two individually animated leaf silhouettes opening on eligible homepage entry; skip, reduced motion, error fail-safe and replay all work.
- Responsive hero, distinct product artwork, useful product detail expansion, functioning navigation and FAQ.
- All proposed content centralized and editable; missing business facts are explicit launch blockers, not invented claims.
- Contact form with proper validation, production server integration, explicit mock mode, no automatic spam, two email templates and truthful partial-failure UI.
- Build/type checks pass; significant contact/motion behaviours are verified, including return navigation and reduced motion.
- A launch checklist and clear setup instructions. Real inbox delivery is marked **unverified** until configured live tests show it.

### The owner adds later

1. Final brand name and logo.
2. Owner recipient email (`CONTACT_TO_EMAIL`) and monitored reply inbox.
3. Verified sending domain, sender and Resend key.
4. WhatsApp number, if wanted.
5. Actual town/address if it should be public.
6. Confirmed products, sizes, prices or quote-only policy, order minimums and delivery arrangements.
7. Genuine product/business photos when available; approval of illustrative imagery until then.
8. Hosting/domain settings, Turnstile configuration and shared-store credentials.
9. Approval of public business claims and actual privacy/retention policy.

Do not require the owner to put secrets into a chat message. Explain where to add them in `.env.local` and the selected host's private environment settings.

## 16. Sources and version checks

These are implementation references, not text to reproduce on the customer's website. Checked 26 October 2026. Verify installed versions and provider limits at build/launch time.

- Next.js App Router setup: https://nextjs.org/docs/app/getting-started/installation
- Tailwind with Next.js: https://tailwindcss.com/docs/installation/framework-guides/nextjs
- GSAP React lifecycle: https://gsap.com/resources/React/
- GSAP responsive/reduced-motion patterns: https://gsap.com/docs/v3/GSAP/gsap.matchMedia()/
- Resend pricing: https://resend.com/pricing
- Resend account limits: https://resend.com/docs/knowledge-base/account-quotas-and-limits
- Resend with Next.js: https://resend.com/docs/send-with-nextjs
- Resend sender-domain setup: https://resend.com/docs/dashboard/domains/introduction
- Resend test-sender restrictions: https://resend.com/docs/knowledge-base/403-error-resend-dev-domain
- Resend idempotency: https://resend.com/docs/dashboard/emails/idempotency-keys
- Brevo free-plan limits: https://help.brevo.com/hc/en-us/articles/208580669-FAQs-What-are-the-limits-of-the-Free-plan
- Turnstile server validation: https://developers.cloudflare.com/turnstile/get-started/server-side-validation/
- React Email documentation, if used: https://react.email/docs/components/html

Continue with the audited completion details in Sections 17–19, then implement using `README-02-DEVELOPMENT-TASKS.md`.

## 17. Complete supporting-page copy and UI messages

These strings complete the content handoff. Interpolate only approved configuration and safe values. Double-braced values are placeholders, not text to display literally to visitors. A public launch must not contain `YOUR_BRAND`, unresolved braces or `.example` contact links.

### 17.1 Thank-you page

Use this page only with a legitimate result stored for the current tab. Treat session state as a UX convenience, not a server-authenticated order receipt; there is no order in this flow.

**Eyebrow:** ENQUIRY SUBMITTED

**Heading:** Thank you. Let’s take the next step.

**Body:** Your enquiry has been submitted to {{brandName}}. We’ll review your requirements and get back to you using the contact details you provided.

**Reference label:** Your enquiry reference

**Reference value:** {{reference}}

**Accepted acknowledgement:** A confirmation email is on its way. Please check your spam folder too.

**Failed acknowledgement:** Your enquiry was submitted, but we couldn’t send the confirmation email. There’s no need to submit it again.

**Small note:** This acknowledges your enquiry. Availability, pricing and fulfilment will be agreed separately before an order is confirmed.

**Primary action:** Back to Home

**Secondary action:** Submit Another Enquiry

On “Submit Another Enquiry,” clear the previous success-only UI state and generate a new UUID only for a genuinely new form. Do not erase useful retry data on an unresolved failure.

**Local mock variant:**

- Eyebrow: LOCAL PREVIEW
- Heading: Your enquiry preview is ready.
- Body: Preview only—no emails were sent. The owner notification and customer thank-you email are ready for local inspection.
- Action: Return to Contact Form
- Never show an email “on its way” message in mock mode.

**Direct URL without a receipt:**

- Heading: Ready to contact us?
- Body: Tell us about your banana leaf requirements using our contact form.
- Button: Start an Enquiry

### 17.2 Contact feedback strings

| State | Customer-facing text |
| --- | --- |
| Idle button | Send Enquiry |
| Submitting button | Sending your enquiry… |
| Error summary | Please check the highlighted fields. |
| Name missing | Enter your name. |
| Email invalid | Enter a valid email address so we can reply. |
| Message too short | Tell us a little more—please enter at least 10 characters. |
| Message too long | Keep your message within 2,000 characters. |
| Destination missing | Enter your town or destination country. |
| Quantity invalid | Enter a positive quantity, or leave it blank if you’re unsure. |
| Unit missing | Choose leaves or kilograms for the quantity. |
| Past preferred date | Choose today or a later date, or leave this blank. |
| Privacy unchecked | Please read and acknowledge the Privacy Notice. |
| Expired bot check | Please complete the security check again, then retry. |
| Temporarily rate limited | You’ve made several attempts. Please wait a little before trying again. |
| Request still processing | Your enquiry is still being processed. Please wait before trying again. |
| Offline / connection problem | We couldn’t confirm submission. Your details are still here; check your connection and try again. |
| Provider unavailable | We couldn’t submit your enquiry right now. Your details are still here. Please try again shortly. |
| Missing production configuration | The contact form is temporarily unavailable. Please use another contact option shown on this page. |
| No alternate contact configured | The contact form is temporarily unavailable. Please try again later. |

For a timeout, the server may have accepted a send. Therefore “couldn’t confirm submission” is more accurate than “nothing was sent.” Preserve the same payload and UUID on retry. Display numeric retry timing only when the response actually provides it. Never reveal keys, server exceptions or internal settings in customer messages.

### 17.3 Privacy Notice — editable launch draft

The following is a complete plain-language draft, subject to the owner's actual operational practices. Fill in the named fields and confirm that the described implementation matches the finished system. It is not a claim of jurisdiction-specific legal compliance.

**Title:** Privacy Notice

**Last updated:** {{privacyUpdatedDate}}

**Who we are**
{{brandName}} is a banana leaf business based in Sri Lanka. This notice explains how we use information submitted through our website. For questions about your information, contact {{privacyContactEmail}}.

**Information you provide**
When you contact us, we collect the details you enter in the form. These may include your name, email address, phone number, organisation, location, product requirements, preferred date and message. Please do not include payment-card details, identity documents or other information we do not need to answer your enquiry.

**Why we use this information**
We use your details to respond to your enquiry, discuss product availability and requirements, and maintain the correspondence needed for that conversation. We also use limited technical information to protect the form against spam and repeated submissions. Sending an enquiry does not subscribe you to a marketing mailing list.

**Services involved**
Our website uses {{emailProviderName}} to send enquiry notifications and acknowledgements. {{hostingProviderName}} hosts the website. The production form uses Cloudflare Turnstile to check for automated abuse and {{requestStoreProviderName}} for short-lived submission and anti-abuse records. These services process information as necessary to perform their functions. Remove or revise any service named here that is not actually used in production.

**How long information is kept**
Application records used to coordinate an enquiry submission are set to expire after 24 hours. Short-lived rate-limit records expire according to the configured hourly or daily limit. Email correspondence in our inbox and provider logs may be kept longer. Our business correspondence retention practice is {{businessRetentionPolicy}}. Contact us if you want to ask about the information associated with your enquiry.

**Your choices**
Optional fields can be left blank. You may contact {{privacyContactEmail}} to request correction or deletion of your enquiry information. We will review your request and explain any information that needs to be retained for a legitimate business or legal reason.

**Browser storage and external links**
The website uses session storage to remember whether the leaf introduction has played and to show the current tab's enquiry confirmation. These session values do not contain the full enquiry message or contact details. Security services may use their own technical mechanisms. If you choose a WhatsApp or other external contact link, that service's own privacy practices apply. This version does not add advertising trackers or subscribe visitors to newsletters.

**Updates**
We may update this notice when our website or practices change. The date at the top shows the latest revision.

Do not fill the retention field with an arbitrary number. Ask the owner to choose a real policy before public launch. Until then, keep the draft in local/staging mode. Do not claim all data disappears after 24 hours: emails and provider logs are a separate retention layer.

### 17.4 Footer, 404 and no-JavaScript fallback

**Footer statement:** Banana leaves for everyday meals, shared occasions and business enquiries.

**Footer link groups:** Explore: Our Leaves, Our Story, Wholesale. Get in Touch: Contact Us, configured email, configured WhatsApp. Information: Privacy Notice.

**Footer small print:** © {{currentYear}} {{brandName}}. Sri Lanka.

**404 heading:** This page has turned a new leaf.

**404 body:** We couldn’t find the page you’re looking for. Explore our leaves or get in touch with your enquiry.

**404 buttons:** Back to Home · Contact Us

**No-JavaScript form note:** To submit this form, enable JavaScript or use one of the contact options shown below.

Only show the latter clause when an actual configured contact channel is present. The homepage remains readable without JavaScript. Do not render a non-functional “Send” button with no explanation in the no-JavaScript state.

## 18. Implementation decisions resolved during the audit

### 18.1 Page composition and card geometry

The earlier “dark closing contact section” is the homepage invitation, not a second full contact form. The single complete form lives on `/contact`; this prevents duplicated validation and inconsistent submission states.

| Viewport | Hero | Products | Contact |
| --- | --- | --- | --- |
| 320–639 px | Single column; copy, CTAs, art; no pointer parallax | One card per row, full usable width; 20 px page gutters | Single column; 16 px minimum input font; full-width submit button |
| 640–1023 px | Two columns only where the headline and art have enough room; otherwise stack | Two columns; last card left-aligned, not stretched to double width | Stack until each form column can stay readable; do not squeeze labels |
| 1024 px and above | 5/12 copy and 7/12 art; maximum 1280 px content width | Three equal cards with 24–32 px gaps | About 40% information and 60% form |

Use CSS Grid alignment so product CTA rows align without fixed text heights. Card art stage: roughly 240–280 px desktop, about 220–260 px mobile. Keep 24 px interior padding, title around 25–30 px and body at least 16 px. The leaf may overlap the art compartment by about 24–40 px, but never cover the title, specification chips or focus indicator. A curved decorative base should not carry essential tiny text.

Draw the original base shape as an SVG or CSS pseudo-element. Give images, copy and CTA clear stacking levels. If the rounded outer card clips its contents, use an inner clipped surface with an outer overflow-visible artwork wrapper; do not accidentally cut off the leaf tips. Expanded details may increase the card height naturally; never obscure the next row.

### 18.2 Transparent asset sizes and phone typography

On 320 px screens, a 7-word heading cannot be made to fit by shrinking body text. Allow sensible text wrapping, reduce display size within the specified clamp and keep CTA buttons stacked when necessary. All input, select and textarea text should be at least 16 px on mobile to avoid uncomfortable reading and focus zoom behaviour. Include safe-area padding where a fixed skip button or drawer control approaches a device edge.

A full-screen curtain made from two transparent silhouettes can reveal tiny gaps around irregular leaf tips. Fill those gaps with a matching opaque backdrop during the closed state; fade it as the leaves part. The centre seam and moving broad leaf surfaces must still clearly read as two leaves. Test 320 × 740, 390 × 844, 768 × 1024 and 1440 × 900 compositions. Asset export dimensions are source guidance; CSS transforms must be based on measured wrappers rather than hard-coded screen pixels.

### 18.3 Exact remaining field rules

- Quantity accepts **1–1,000,000 whole leaves**, or **0.1–100,000 kg with up to two decimal places**. These are technical validation limits, not a statement of supply capacity. The owner may lower them after confirming normal order sizes.
- Unit becomes required only when quantity is provided. Both blank means “Not specified” in the owner email and acknowledgement summary.
- The `not-sure` product option is valid. An unknown product ID in a URL becomes `not-sure`; an unknown value submitted to the API is rejected.
- Selecting Overseas buyer displays Country and Town/port as separate accessible fields. Country is required; town/port is optional. Domestic types require town and set the country to Sri Lanka. Normalize to a clear destination object on the server rather than losing the country in an ambiguous text field.
- Preferred dimensions remain free text with a length limit because measurements can include length, width and shape. Do not infer an exact shape or unit if the visitor does not provide one.
- Phone is optional. Keep international prefixes and punctuation, reject control characters and cap length. Do not silently rewrite an overseas number into a Sri Lankan number.
- The preferred date is optional. Validate an actual calendar date and compare day-only values against today's date in Asia/Colombo. A date picker is a convenience, not the sole server validation.
- Duplicate-submit protection must cover both mouse double-click and pressing Enter repeatedly. Disable the submit action only while a request is actually pending; re-enable with preserved data after a recoverable error.

### 18.4 Query and CTA mapping

| Entry | URL | Form selection |
| --- | --- | --- |
| General header/contact CTA | `/contact` | General enquiry; product not sure |
| Whole-leaf card | `/contact?product=whole-leaves` | Whole banana leaves |
| Cut-size card | `/contact?product=cut-leaves` | Cut-to-size leaves |
| Bulk card | `/contact?product=bulk-supply&type=wholesale` | Bulk supply + Wholesale |
| Domestic wholesale choice | `/contact?type=wholesale` | Wholesale; product not sure |
| Overseas buyer choice | `/contact?type=overseas` | Overseas buyer; country field displayed |

Accept only known `product` and `type` values. Query input can prefill, but must not lock the visitor into that choice. If an item is disabled, select `not-sure` and show a neutral message to describe their requirement. Never prefill an email recipient, price or private setting from a URL.

Generate a WhatsApp link only from the configured business number: `https://wa.me/{internationalDigits}?text={encodedGenericEnquiry}`. Use a short generic message such as “Hello, I’d like to enquire about banana leaves.” Do not append all form data to a URL by default. Opening WhatsApp lets the user review and send; do not claim that opening the link sends a message. Blank number means the button is hidden.

### 18.5 Exact status handling and partial completion

- `409 CONFLICT`: same UUID with different normalized data. Offer a clearly intentional new enquiry if appropriate; do not silently overwrite the existing request record.
- `409 IN_PROGRESS`: the immutable enquiry is currently being processed. Preserve it, respect `Retry-After` and use a new anti-bot token for another attempt. Do not display the success page yet.
- `200` with `mode: 'live'`: only after owner notification acceptance. Customer acknowledgement outcome controls the secondary text.
- `200` with `mode: 'mock'`: explicitly labelled preview, never a real receipt.
- `503` before owner acceptance: preserve input and distinguish “not confirmed” from “definitely not sent” when a timeout makes the result uncertain.
- Stale submission after the supported deduplication period: no automatic resend under a fresh UUID. Explain the uncertainty and use a configured direct contact channel with the reference, where available.

Production uses the small shared request-state store described in Section 11; no full business database, user accounts, admin dashboard or scheduled queue is needed for this version. Avoid turning a simple enquiry website into a full commerce system.

## 19. Completeness audit and handoff boundary

**Audit result:** the two Markdown files form a complete specification and staged implementation handoff for the requested website. They are not evidence that the new Next.js website, final generated assets or live email setup already exist.

| Original requirement | Where it is specified | Document status |
| --- | --- | --- |
| Codex-ready prompt | Section 0; task-file kickoff | Included |
| Next.js + Tailwind | Section 8; Tasks 01–03 | Included |
| Modern design based on supplied references | Sections 2–5 and 18.1 | Included; all five images mapped |
| Two leaves open on entry | Section 7.1; Task 09 | Included with timings and exit paths |
| Unique interactive motion | Section 7.2; Tasks 10–11 | Included |
| Product/card design | Sections 5.4 and 18.1; Task 06 | Included |
| Full page content | Sections 5–6 and 17 | Included; owner-specific fields remain configurable |
| Image-generation instructions | Section 9; Task 04 | Included for A1–A12 |
| Contact form to owner's email | Sections 6, 10–11 and 18.5; Tasks 12–15 | Included; actual inbox/key supplied later |
| Suitable free-tier mail option | Section 10 | Resend selected; limits checked on stated date |
| Designed customer thank-you email | Section 12 | Full copy and React template seed included |
| Owner notification email | Section 13 | Complete content/layout/recipient contract included |
| Step-by-step development README | Companion file, Tasks 01–18 | Included |
| Mobile, accessibility and QA | Sections 7, 14 and 18; Tasks 11 and 16 | Included |
| Later owner setup and launch | Section 15; Tasks 17–18 | Included |

The owner information deliberately still missing is: actual brand, recipient and reply emails, domain, credentials, optional WhatsApp, confirmed commercial offering and retention policy. These are configuration needs, not reasons to leave the local website unbuilt.

For the implementation handoff, distinguish **specified**, **implemented**, **verified locally** and **verified live**. Mark real email delivery as verified live only after controlled inbox testing. Mark final artwork complete only when the actual required assets exist and have been inspected. Reading a prompt or compiling a template does not prove either outcome.

**Revision 1.1 changes:** supplied the complete supporting-page copy; corrected the 404 file convention and cross-page anchors; clarified homepage CTA versus contact-page form; separated preview products from confirmed supply; resolved quantity/country/CTA rules; clarified concurrent email submission status and bounded retry; added the coverage matrix and companion completion ledger.
