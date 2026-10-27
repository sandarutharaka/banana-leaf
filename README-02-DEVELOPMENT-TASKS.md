# Banana Leaf Website — Task-by-Task Codex Build Plan

Version: 1.1 · Completeness audit and revision: 26 October 2026

Companion: `README-01-CODEX-MASTER-BRIEF.md` is the source of truth for content, design, motions, assets and email behaviour. Read it completely before starting this plan.

This plan builds the website locally. Do not modify the earlier hosted prototype, deploy publicly, purchase services or send live mail automatically. Complete the local implementation with explicit mock email previews; then give the owner the exact configuration and launch checklist.

## How the owner uses these files

1. Create/open your intended Next.js project folder in VS Code.
2. Copy both Markdown files into the project root.
3. Put the five supplied reference screenshots into `docs/references/`, preserving their original filenames or add a short filename map.
4. Open Codex and paste the kickoff prompt below.
5. Let Codex build the stages in order. You can review at milestone boundaries; the agent does not need to ask you to approve every routine coding step.
6. Add real business information and private environment variables when the local site is ready. Keep API keys out of screenshots, Git and chat messages.

### Full kickoff prompt

> You are implementing my banana leaf business website locally in this repository. First read README-01-CODEX-MASTER-BRIEF.md and README-02-DEVELOPMENT-TASKS.md completely, then inspect docs/references. Use Next.js App Router, TypeScript, Tailwind CSS and GSAP. Implement the original premium botanical design, especially the two independently opening banana leaves, the modern rounded leaf product cards, restrained interactive motion and the server-side contact form. Use the provided exact content and asset prompts. Implement owner enquiry emails and the designed customer thank-you email with Resend, initially in explicit mock mode. Follow Tasks 01–18 in order, maintaining docs/progress.md. Finish each milestone with appropriate checks and continue unless blocked by a genuinely missing prerequisite. Missing brand/email settings must not stop frontend development. Do not invent business facts, reuse competitor content, silently claim emails were sent, modify the earlier hosted site or deploy. Do not stop after scaffolding: complete the local implementation and give me an accurate handoff with remaining owner setup items.

### If Codex loses context or a session ends

> Read both specification Markdown files and docs/progress.md. Inspect the current Git diff and repository before changing anything. Resume from the first incomplete task, preserving finished work. Do not regenerate approved images or rebuild completed components without a concrete defect. Summarize the current milestone in one paragraph, then continue implementation.

## Working agreements

- Respect repository `AGENTS.md` guidance and existing user changes; never reset unrelated work.
- The master brief defines the result. This file defines the order. If an implementation API changed, use current official docs and record the compatibility adjustment without discarding the design.
- Use one package manager and commit its lockfile. Avoid installing two animation libraries for the same effect.
- Save major choices, completed checks and unresolved blockers in `docs/progress.md` rather than relying on chat context.
- Missing credentials: use mock adapters and fixtures. Missing factual business information: use central config and a launch checklist. Missing image-generation capability: preserve prompts and identify unfinished assets honestly.
- No public placeholder email addresses, fake phone numbers, fabricated certifications or “worldwide shipping” claims.
- Test meaningful behaviours. Do not write hundreds of snapshot tests for copy and CSS or claim a performance score without measurement.
- The customer form submits an enquiry, not an order. No checkout or payments in this scope.

## Milestone map

| Milestone | Tasks | Reviewable result |
| --- | --- | --- |
| A — Foundation | 01–03 | Working Next.js shell, editable content, consistent design tokens |
| B — Visual site | 04–08 | Original assets, complete responsive pages and product cards |
| C — Signature interactions | 09–11 | Two-leaf opening, controlled scroll motion, accessible menus/details |
| D — Contact and emails | 12–15 | Validated enquiry flow, owner/customer templates, reliable server integration |
| E — Verification and handoff | 16–18 | Checked local build, accurate launch checklist and owner instructions |

## Task 01 — Inspect the repository and references

**Dependencies:** none.

**Actions:**

- Read both briefs and any repository instructions.
- Identify whether the directory is empty or contains an existing app; inspect package versions and existing changes.
- Open all five reference images. Summarize their specific design contribution from the reference matrix.
- Inventory any existing usable leaf artwork and fonts. Do not treat competitor screenshots as production assets.
- Create `docs/progress.md` with the milestone table, checked/unchecked tasks, decision log and blockers.
- Record actual installed versions once chosen; do not assume the older Next.js 15 context remains current.

**Done when:** the project scope, chosen style and current repository state are documented; no unrelated code was overwritten.

**Focused prompt:**
> Perform Task 01. Read the complete briefs and inspect every reference image. Record the baseline and implementation decisions in docs/progress.md, then proceed to Task 02.

## Task 02 — Set up the Next.js foundation

**Dependencies:** Task 01.

**Actions:**

- For a new project, scaffold a current stable Next.js App Router app with TypeScript, Tailwind CSS, a `src/` directory and an import alias.
- For an existing compatible project, preserve its setup rather than recreating it.
- Add only required dependencies from master Section 8. Configure the Tailwind version correctly.
- Add GSAP/React integration, validation, mail SDK and small UI helpers as needed. Create testing setup only for the planned checks.
- Set scripts for development, production build, type checking and chosen tests. Use the installed framework's current lint setup if linting is already part of the project.
- Add `.env.example` with empty secrets and `EMAIL_MODE=mock`; make sure `.env.local` and generated private previews are ignored.
- Add app metadata defaults without publishing fake canonical domains.

**Done when:** the development app starts, the initial build passes and no secret value has been written into tracked files.

## Task 03 — Design tokens, content and shared components

**Dependencies:** Task 02.

**Actions:**

- Implement master Section 3 tokens, font loading, container sizes, breakpoints, focus styles and reduced-motion CSS defaults.
- Create typed brand, navigation, products, FAQ and content modules from the exact proposed copy.
- Add Button, Field, SectionHeading and container primitives with semantic elements.
- Centralize product identifiers and human-readable labels for UI and emails; reject unknown values.
- Build site header and footer. Hide blank contact channels rather than inventing a phone/email.
- Include a development-only configuration notice for unresolved owner settings, not an intrusive public banner.

**Done when:** colours, spacing and typography are consistent; missing business fields are editable in one place; all buttons have visible keyboard focus.

**Milestone A check:** open the site at desktop and mobile widths; confirm fonts and base spacing. Keep main content readable without motion.

## Task 04 — Produce and organize the assets

**Dependencies:** Task 03.

**Actions:**

- Use A1–A12 in master Section 9 as the asset list.
- Create A1/A2 as separate original SVG leaves with matching style and distinct silhouettes. Check closed coverage on tall and wide viewports.
- Generate hero and three genuinely distinct product cutouts if tooling is available. Do not replace missing images with repeated copies of one image.
- Create story/gallery illustration or photographic assets, pattern, vein connector, email banner and later the branded social preview.
- Preserve source artwork separately; export optimized delivery files with real alpha where required.
- Record prompts, dimensions, generation/source, filenames and status in `docs/asset-manifest.md`.
- If a generation tool is unavailable, document exact missing artwork and use deliberate temporary botanical SVGs. Do not pretend temporary illustrations are final product photographs.

**Done when:** each required visual slot has an appropriate asset or an explicitly documented pending asset. No screenshot borders, competitor logos, banana chips or monstera imagery appear in production assets.

**Focused prompt:**
> Implement Task 04 using the original asset prompts and reference mapping. Prioritize the two separate intro leaves, the hero arrangement and three different product cutouts. Inspect all exported assets on both cream and dark green backgrounds before integrating them.

## Task 05 — Build the static hero and introductory band

**Dependencies:** Tasks 03–04.

**Actions:**

- Implement the hero copy and composition from Section 5.2 without the entrance animation first.
- Create the layered decorative “Naturally” type, sage organic background and hero cutout with deliberate depth.
- Keep actual H1 readable and separate from decorative type.
- Add real links to products and contact; add the small audience band.
- Reserve image dimensions, supply correct responsive image sizes and optimize the LCP asset.
- On mobile, keep headline, useful intro and CTA compact before the image. Never force desktop overlaps onto a small viewport.

**Done when:** the hero looks designed at 390, 768 and 1440 px, has no overflow, and remains readable when imagery or JavaScript is unavailable.

## Task 06 — Build product cards and inline details

**Dependencies:** Task 05.

**Actions:**

- Implement all confirmed/proposed catalogue items with the master copy and distinct assets.
- Use the R5-inspired cream body, botanical cutout, rounded silhouette and curved green base.
- Add visible inline-detail toggles with `aria-expanded` and associated content IDs.
- Add working product-specific contact links with stable allowlisted identifiers. Use the query mapping in master Section 18.4 and give hidden/unknown products a neutral fallback.
- Add optional filter pills only if the resulting experience is clear and small; no empty states caused by invisible filters.
- Keep details useful: format, intended use, preferred dimensions and quote basis. Do not add unconfirmed prices or technical specifications.

**Done when:** every product CTA preselects the correct item on contact, keyboard users can open details, and mobile users do not depend on hover.

## Task 07 — Build the rest of the homepage

**Dependencies:** Task 06.

**Actions:**

- Build the story panel, three-step enquiry process, wholesale/overseas panel, leaf gallery, FAQ and contact invitation.
- Use varied composition and deliberate section pacing; do not put every section inside an identical card grid.
- Connect all anchor navigation and CTAs correctly. Shared navigation uses `/#section-id` so it works from inner pages; account for the header height and preserve native URL/hash behaviour.
- Present overseas enquiries conditionally without fabricated export history or map pins.
- Use illustrated leaf-vein structure for the process; do not imply an unconfirmed preservation or packing method.
- Check that all page copy is sourced from the master brief and remains editable.

**Done when:** the homepage is complete and usable from navigation to footer before animation is added.

## Task 08 — Build secondary page layouts

**Dependencies:** Task 07.

**Actions:**

- Create `/contact`, `/thank-you`, `/privacy` and the not-found component.
- Build the contact page with its dark botanical context and fully opaque cream form area.
- Add all fields, visible labels, privacy link and basic client validation. Use contextual preselection from product/type query parameters without trusting unknown values. Apply the exact limits and field interactions in master Section 18.3.
- Make a direct visit to `/thank-you` show a neutral contact prompt until an actual result state exists.
- Implement the supplied thank-you, validation, 404 and privacy copy from master Section 17. Keep owner retention/contact placeholders in local configuration, and require them to be resolved before public launch.
- Create a working mobile menu with Escape and focus management.

**Done when:** all pages render at desktop/mobile widths, links work and no public page exposes development/debug panels.

**Milestone B review:** inspect full-page screenshots at 390 and 1440 px plus a 320 px overflow check. Compare against the five reference roles. Fix cramped typography, missing visual hierarchy and generic filler before adding motion.

## Task 09 — Implement the signature two-leaf entrance

**Dependencies:** Task 08; A1/A2 assets ready.

**Actions:**

- Implement the exact lifecycle, transforms, offsets and desktop/mobile timings in Section 7.1.
- Use independent wrappers for the two SVGs. Test central seam coverage, overlay stacking and exit distance.
- Add eligibility checks: home page, top of page, no hash deep link, first tab session, no reduced motion, assets ready, no meaningful prior user interaction.
- Add the session key, skip button, Escape support, fail-safe and all cleanup paths.
- Make underlying page content inert only while actively covered; restore interaction, scrolling and focus correctly.
- Add the explicit footer replay control. Do not replay on ordinary route navigation or resizing.
- Make failure graceful: no JavaScript, broken image, GSAP import failure and blocked session storage must still leave a usable page.

**Done when:** the effect clearly looks like two real illustrated leaves opening, runs once when appropriate, and can never trap the visitor behind a green screen.

**Critical checks:**

- Fresh tab/home: intro runs and completes within the specified duration.
- Reload/same tab: no automatic replay.
- `/contact` direct load and `/#products`: no intro.
- Skip and Escape: immediate unlock and no invisible pointer blocker.
- Reduced motion: no large-scale leaf movement.
- Strict Mode / resize / back navigation: no duplicated timelines or locks.
- Simulated failed leaf asset: page is usable immediately.

**Focused prompt:**
> Implement only the intro behaviour described in master Section 7.1 and Task 09. Do not substitute plain panels for leaf silhouettes or add a fake loading delay. Verify all exit paths before adding any other animation.

## Task 10 — Add restrained scroll and hover motion

**Dependencies:** Task 09.

**Actions:**

- Implement the exact motion table in Section 7.2 with shared duration/easing tokens.
- Use `useGSAP`, scoped refs and matchMedia; avoid duplicate global listeners.
- Add limited hero pointer depth on fine pointers, subtle hero scroll, one-time section reveals and product hover motion.
- Draw the process vein on scroll with the SVG path; preserve native vertical scrolling and normal content flow.
- Avoid permanent `will-change` on every element. Pause offscreen/hidden work.
- Reduced motion removes parallax, major travel and scroll-linked drawing; the design still looks complete.

**Done when:** the site has a coherent motion language, no scroll hijacking, no content flashes or forever-hidden elements, and no layout jank caused by decorative effects.

## Task 11 — Interaction and accessibility pass

**Dependencies:** Task 10.

**Actions:**

- Complete accessible FAQ, product filters, details expansion, mobile drawer and focus indicators.
- Test all navigation with keyboard only and at 200% zoom.
- Verify coarse-pointer behaviour; disable hover-only depth on touch.
- Ensure interactive areas are at least 44 × 44 px, headings follow a sensible order, and decorative assets are hidden from screen readers.
- Test a live change of the reduced-motion preference and teardown/rebuild behaviour.
- Check the intro, menu and details do not fight over body scroll or focus.

**Done when:** all important actions work without a mouse, motion is optional and no layer intercepts clicks after dismissal.

**Milestone C review:** demonstrate the first-visit opening, replay, skip, touch cards and reduced-motion version. Record observed defects and fixes, not just “animations done.”

## Task 12 — Validation, form state and contact service contracts

**Dependencies:** Task 11.

**Actions:**

- Implement the shared Zod schema and normalized domain types from Section 6.
- Build idle/validating/submitting/error/success states with accessible status messages.
- Preserve field values on network/server errors and retain an unchanged submission UUID for retries.
- Implement a testable `ContactService` that calls dependency-injected mail, bot-check, rate-limit and request-store interfaces.
- Add an explicit mock provider that produces owner/customer previews locally without sending.
- Make production configuration validation strict; missing keys are not success.
- Correctly validate date-only fields against Asia/Colombo without converting dates into accidental UTC day shifts.

**Done when:** invalid input is rejected server-side as well as client-side; valid local submissions produce clearly labelled mock results; no personal data is placed into URLs.

## Task 13 — Build both email templates

**Dependencies:** Task 12.

**Actions:**

- Implement the customer template from Section 12 with branded forest/cream styling, banner, summary panel, button, footer and plain-text counterpart.
- Implement the owner notification from Section 13 with all submitted fields and a useful compact layout.
- Keep sender and recipients server-configured; `replyTo` differs appropriately for owner and customer messages.
- Escape user content; preserve message line breaks safely in the owner email. Do not insert arbitrary message text or URLs into customer acknowledgements.
- Generate local fixture previews; never expose an arbitrary public send endpoint for previewing templates.
- Test long names, long reference values, absent optional fields, Unicode/Sinhala names, blocked images and narrow clients.

**Done when:** both templates render cleanly in HTML and plain text; the acknowledgement does not claim an order was confirmed; owner replies are directed to the visitor.

**Focused prompt:**
> Implement the owner notification and customer thank-you email from master Sections 12–13. Use table layout and inline styles for email compatibility. Create local preview fixtures only; do not send real emails. Show how CONTACT_TO_EMAIL, EMAIL_FROM and CONTACT_REPLY_TO_EMAIL control delivery.

## Task 14 — Production contact endpoint, Resend and request protection

**Dependencies:** Tasks 12–13.

**Actions:**

- Implement `POST /api/contact` as a real Next.js server endpoint with the Section 11 request/response contract.
- Implement the Resend adapter and inspect both returned provider errors and thrown exceptions.
- Add body-size checks, strict enum validation, origin validation, honeypot, server-verified Turnstile and shared-store rate limiting.
- Use server-only environment access. The form must never decide the owner recipient or sender.
- Implement an atomic shared request-state store with payload hashes, short processing locks, immutable email payloads and separate owner/customer statuses.
- Follow current Resend idempotency API documentation and the 24-hour limitation.
- Use bounded awaited sends; do not leave critical emails to un-awaited promises.
- Provide local mocks for external dependencies and a clean configuration error when production dependencies are missing.

**Done when:** production code is ready to send owner and customer emails safely once configured, while automated tests never accidentally send to real addresses.

## Task 15 — Partial failure, retry and thank-you behaviour

**Dependencies:** Task 14.

**Actions:**

- Owner fails: return a retryable failure and preserve form values/submission identity.
- Owner accepted, customer fails: keep successful enquiry status and display the exact partial-failure wording. Do not prompt resubmission.
- Retry same unchanged UUID: never resend an accepted message; only complete a missing operation within the supported window.
- Same UUID with different data: return `409 CONFLICT`. Concurrent duplicate: one operation owns the lock; the other receives `409 IN_PROGRESS` and a short `Retry-After`, never a successful receipt. Reuse the same immutable payload/key when retrying; refresh the bot token.
- Timeout/unknown result: reconcile by reusing the same provider key and frozen message content, not creating a new submission automatically.
- Reset Turnstile when a fresh attempt needs a new token. Do not replay an already-consumed token.
- On genuine owner acceptance, store only a reference and outcome in tab state for `/thank-you`; on mock mode show the explicit preview-only result.
- Record sanitized provider IDs and status, not full contact messages.

**Done when:** the UX accurately reflects every delivery outcome and no normal retry creates duplicate enquiries or misleading success messages.

**Milestone D check:** run the mocked scenario matrix below. Real inbox checks remain a separate owner-configured task.

| Scenario | Expected outcome |
| --- | --- |
| Valid mock enquiry | Preview-only state, zero real sends |
| Invalid input | Field errors, zero sends |
| Missing production credentials | Safe configuration failure, no false success |
| Honeypot / invalid Turnstile | Rejected, zero sends |
| Rate exceeded | 429 and friendly retry guidance |
| Owner send rejected | Recoverable error, no acknowledgement |
| Owner accepted + acknowledgement accepted | Success and “confirmation on its way” |
| Owner accepted + acknowledgement rejected | Success with explicit confirmation warning |
| Provider timeout | Unknown status handled with existing idempotency key |
| Double-click / concurrent same key | No duplicate owner/customer messages |
| Same key, changed payload | 409 conflict, no altered resend |
| Expired idempotency window | No automatic promise of deduplication; manual investigation documented |
| Direct thank-you URL | Neutral contact prompt, not fake receipt |

## Task 16 — Production build, responsive and functional QA

**Dependencies:** Task 15.

**Actions:**

- Run type checking, production build and meaningful tests; run configured repository checks as required.
- Use a production-mode local server for final browser checks, not just development mode.
- Test widths 320, 390, 768, 1024 and 1440 px. Inspect hero, cards, mobile nav, forms and footer.
- Test normal motion and reduced motion, broken-image fallback, slow network and disabled JavaScript content access.
- Check console errors, failed assets, dead links, horizontal overflow, layout shift and navigation history.
- Use targeted tests for validation, immutable retries, partial failure, fixed recipient and HTML escaping. Use a small set of browser tests for intro, navigation, preselection and form submission.
- Run accessibility and performance checks if tooling is available; report actual measured conditions and limitations. Do not claim Gmail/Outlook compatibility without real client inspection.

**Done when:** critical journeys pass, known defects are fixed or explicitly listed and measured checks are recorded in progress notes.

## Task 17 — SEO, privacy and owner configuration review

**Dependencies:** Task 16.

**Actions:**

- Set accurate metadata, OG image, sitemap, robots and canonical configuration for the intended deployment state.
- Keep previews out of indexing; ensure no example domain survives public-launch configuration.
- Validate only factual structured data; omit unverified prices, ratings, address and certifications.
- Match privacy copy to actual mail/store behaviour and retention settings.
- Make a single owner settings checklist for brand, recipient, sender domain, reply inbox, WhatsApp, products, destination policy and images.
- Document that domain registration, mailbox, hosting and request-state storage are distinct from the email provider's free sending allowance.
- Recheck current provider limits before the owner chooses a plan; do not quietly activate a paid upgrade.

**Done when:** the owner can identify every unresolved launch item without reading implementation code.

## Task 18 — Local handoff and launch instructions

**Dependencies:** Task 17.

**Actions:**

- Update the project README with install/dev/build commands, required runtime version, actual dependency versions and environment setup.
- Explain the difference between owner recipient, verified sender and monitored reply inbox with one small table.
- Include how to edit page content, product options, images, motion durations and the intro session key.
- Provide commands to run template previews and tests, plus the exact files to inspect.
- Produce `docs/launch-checklist.md` and mark real delivery as unverified until an owner-authorized controlled test is complete. Apply the documentation-versus-implementation completion distinction in master Section 19; do not mark tests complete from reading this brief alone.
- Explain how to connect Resend and DNS without exposing secrets or guessing provider-specific DNS values.
- Explain deployment needs: Next.js server support, commercial use permitted by the selected hosting plan, environment values set, correct URLs and Turnstile hostname.
- Do not deploy as part of this local build. Do not modify or delete the previous hosted demonstration.

**Done when:** the finished local application, tests, visual assets, email previews and honest list of remaining owner actions are ready for review.

## Owner-configured email acceptance check (after implementation)

This is a final configuration check, not permission to send messages while building the templates.

1. Owner adds the real inbox, verified sending domain, monitored reply inbox, secret key and other production settings privately.
2. Owner chooses controlled test recipient addresses and authorizes a real send.
3. Submit one test enquiry through the actual form.
4. Confirm the owner inbox receives all submitted details and its Reply action addresses the visitor.
5. Confirm the customer inbox receives the designed thank-you email, its Reply action reaches the monitored business inbox, and website/privacy links work.
6. Inspect spam folders and actual Gmail/Outlook/mobile appearance as available. Provider acceptance alone is not an inbox-delivery test.
7. Check idempotency by retrying the same controlled submission; do not use a new UUID for that check.
8. Remove fixture content, preserve verification evidence without secrets, and record limitations.

## Final review rubric

| Area | Required result |
| --- | --- |
| Originality | Clear botanical identity using reference principles, not a copied layout |
| Intro | Two illustrated leaves, once-per-session, skip/fail-safe/reduced-motion support |
| Product cards | Distinct cutouts, strong readable hierarchy, useful detail interaction |
| Motion | Purposeful, restrained, performant and optional |
| Contact | Validated real server endpoint; correct owner destination; no fake sends |
| Emails | Owner notification + branded customer acknowledgement + plain text |
| Reliability | Stable idempotency, shared protection, partial failure handled honestly |
| Mobile | No clipped content, comfortable typography and complete touch interactions |
| Facts | No invented claims, certifications, prices, shipping routes or testimonials |
| Handoff | Clear config, runnable project, checks and remaining launch requirements |

### What Codex should say when finished

Report the local result, how to run it, what was built, which checks passed and what still needs owner configuration. Link actual files where possible. Mention unverified real email delivery or missing final imagery plainly. Do not claim the public website is live, the business is export certified, or emails reached an inbox without evidence.

## Audited completion ledger — copy into `docs/progress.md`

This is a blank implementation checklist, not a claim that tasks have been done. Update each row only after meeting that task's acceptance criteria. Read the version 1.1 additions in master Sections 17–19 before implementation. They resolve secondary-page copy, responsive card details, form limits, query mapping and submission states.

| Done | Task | Required evidence |
| --- | --- | --- |
| [ ] | 01 — Inspect repository and references | All five references opened; baseline and choices recorded |
| [ ] | 02 — Next.js foundation | Local start and initial production build succeed |
| [ ] | 03 — Tokens, content and shared UI | Central editable configuration; clear focus styles |
| [ ] | 04 — Original assets | Manifest; two separate leaves; distinct product artwork or stated missing assets |
| [ ] | 05 — Hero | Desktop/mobile visual inspection and readable fallback |
| [ ] | 06 — Product cards | Keyboard details and correct product preselection |
| [ ] | 07 — Full homepage | Every section and CTA present; shared anchor links work |
| [ ] | 08 — Supporting pages | Contact, thank-you, privacy and unmatched-URL views complete |
| [ ] | 09 — Leaf entrance | Entry, session, skip, replay, failure and reduced-motion checks pass |
| [ ] | 10 — Motion | Scoped cleanup; no scroll hijacking; usable static version |
| [ ] | 11 — Accessibility | Keyboard/mobile/zoom checks; no trapped focus or scroll |
| [ ] | 12 — Form contracts | Client/server validation; explicit mock state |
| [ ] | 13 — Email templates | Both HTML and plain-text previews inspected |
| [ ] | 14 — Contact server | Fixed recipient; protected route; provider and store adapters |
| [ ] | 15 — Retry/failure states | Scenario matrix including `IN_PROGRESS`, conflict and partial send |
| [ ] | 16 — QA | Production build, type checks and critical browser tests recorded |
| [ ] | 17 — SEO/privacy/config | No fabricated metadata; owner launch fields listed |
| [ ] | 18 — Handoff | Run instructions, configuration map and launch checklist delivered |

### Targeted regression checks added in version 1.1

1. Open `/contact`, then click “Our Leaves” in the shared header. Confirm it reaches the homepage product section rather than adding a dead `#products` fragment to `/contact`.
2. Open the bulk, domestic and overseas links in Section 18.4. Confirm the expected product/type selection and that the visitor can change it.
3. Test quantity blank, one whole leaf, fractional leaves, fractional kg, out-of-range values and a quantity without a unit. Ensure the same normalization is used in the UI, owner email and customer summary.
4. Start with an overseas enquiry; ensure country is required, town/port is optional, and a non-Sri Lankan phone is accepted. Switching back to domestic must not silently leave a contradictory country in the submitted payload.
5. Open an unmatched path. Confirm the Next.js not-found component renders with a valid home link; do not invent a separate `/not-found` page for this test.
6. Submit simultaneously with the same key. Confirm the lock loser returns `IN_PROGRESS`, not false success. Verify retry does not reserve a second acknowledgement quota slot for the same submission.
7. Confirm request-record expiry is anchored to initial creation, not extended indefinitely by retries. Do not claim deduplication outside the documented provider window.
8. Inspect a phone-sized product card with long text and expanded details. Confirm leaf art does not clip, hide the CTA or overlap the next card.
9. Search production content for `YOUR_BRAND`, unresolved `{{...}}`, `.example` links and blank contact targets before public launch. Keep local development possible while those owner fields are pending.

### Portable bundle layout

If using the accompanying ZIP, extract it and copy its contents into the chosen project folder. It contains the two specifications and copies of the five supplied reference screenshots; it does **not** contain an already-built Next.js application or the final A1–A12 artwork. The screenshots are design inputs, not assets to display on the finished website.

```text
banana-leaf-codex-pack/
  README-01-CODEX-MASTER-BRIEF.md
  README-02-DEVELOPMENT-TASKS.md
  docs/
    references/
      Screenshot_26-10-2026_173548_bananaexportindo.com.jpeg
      image(20261026-121919).png
      image(20261026-121943).png
      image(20261026-122057).png
      image(20261026-122106).png
```

If only the two Markdown files are downloaded, add the five original reference images manually. Their names and visual descriptions are also preserved in the master brief.
