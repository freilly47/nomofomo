# NoMo FOMO Contact Page — Implementation Plan

## Scope
Create a responsive contact page that extends the supplied NoMo FOMO homepage. It will retain the existing project’s dark, neon-accented character and give visitors a clear form to send a note. The supplied homepage will be retained as the site’s `/` page and linked to the new `/contact.html` page.

### Required behavior
- Match the supplied homepage’s brand colors, typography, spacing, component language, and atmospheric background.
- Provide name, email, subject, and message fields.
- Validate required fields and email format with clear, inline feedback.
- Provide a disabled submission state and a clear success state after valid client-side submission.
- Work gracefully across mobile, tablet, and desktop widths.

## Design direction

- **Design movement:** Neo-futurist night-mode product design, directly continued from the supplied homepage.
- **Core principles:** Spacious focus, vivid-but-sparing color, rounded glasslike surfaces, and human microcopy.
- **Color philosophy:** Near-black slate maintains calm and depth; lime signals forward progress and calls to action; violet adds optimistic energy; muted slate protects readability. The signature brand color is **signal lime `#C9FF63`**.
- **Layout paradigm:** A one-column conversation flow framed by a slim content rail. A compact contact-context card precedes the form and an editorial status block follows it instead of a dashboard-style grid.
- **Signature elements:** Diffused lime/violet/cyan background glows, thin translucent borders, and oversized rounded panels.
- **Interaction philosophy:** Inputs become visibly focused and acknowledged without visual noise; feedback stays immediately beside the action that caused it.
- **Animation:** Brief, reduced-motion-safe fade/slide entrance for the page panels; focus and hover transitions are fast and restrained. Success state uses a small checkmark reveal rather than a disruptive modal.
- **Typography system:** System sans stack consistent with the source site; bold, tight display heading; medium-weight field labels; comfortably leading body text.
- **Brand essence:** *NoMo FOMO helps people make the right moments feel reachable, not overwhelming.* Personality: optimistic, considerate, sharp.
- **Brand voice:** Warm, direct, and quietly encouraging. Example lines: “Tell us what’s on your mind.” and “Good conversations start with a small note.”
- **Wordmark & logo:** Reuse the existing lime rounded-square spark mark with the “NoMo FOMO” wordmark.

## Implementation approach
- Build a dependency-free static site in `public/` served locally by a small Node HTTP server.
- Copy the supplied homepage into `public/index.html`, retaining its Tailwind CDN presentation and updating its Contact links to point to `contact.html`.
- Add `public/contact.html` with the shared header, page footer, decorative background treatment, semantic labels, accessible `aria-live` feedback, and front-end validation/submission logic.
- Add `public/manus-routes.json` to declare `/` and `/contact.html`.
- Configure static build output for `public/` and provide `package.json` scripts for local serving and validation.

## Project structure

| Path | Responsibility |
| --- | --- |
| `public/index.html` | The supplied homepage, preserved as the home route with updated contact navigation. |
| `public/contact.html` | Matching responsive contact page, client-side form validation, submit/loading/success states. |
| `public/manus-routes.json` | Browser-readable manifest of the available public routes. |
| `server.js` | Minimal static development server listening on the configured port. |
| `package.json` | Start, validation, and static-site metadata. |
| `TODO.md` | Outcome-oriented implementation record. |

## Constraints
No backend, data persistence, or external email notification is included because the confirmed notification power-up was not selected. The form is an interactive front-end demonstration that validates input and shows a success state without transmitting personal information.
