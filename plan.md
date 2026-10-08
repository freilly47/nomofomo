# NoMo FOMO — Hackathon Project Showcase

## Product scope
NoMo FOMO is a **project showcase** with a small working personalization demo. The home page gives a judge, teammate, or visitor the project story without a wall of data; the Activity Library keeps the research browsable; and the new Plan Finder demonstrates how a student’s preferences become three suitable suggestions.

The project promise remains: **“More memories. Less money.”** NoMo FOMO helps Dublin students turn a free evening and small budget into an enjoyable plan—whether that is a gig, run club, book club, fitness class, food plan, society event, or free local experience.

## Design direction

- **Design movement:** Warm, editorial student-project presentation with social-card pacing; avoid app-dashboard chrome and futuristic AI visual language.
- **Core principles:** Immediate idea clarity; evidence-led feature storytelling; restrained purple brand presence; mobile-first scanability.
- **Color philosophy:** Oat paper background, aubergine text, purple HSB(278°, 50%, 47%) / `#623C78` as the project signature, and muted orchid/coral/mint accents for hierarchy—not decoration.
- **Layout paradigm:** A compact narrative overview on the home page, with dedicated detail pages for research and the working Plan Finder.
- **Hero treatment:** A tangible “Friday after class” plan board shows the NoMo FOMO outcome: affordable budget, friends, short itinerary, and group-chat-ready invitation.
- **Signature elements:** Purple spark mark, rounded paper cards, simple stamp labels, annotated prototype fragments, and large, readable editorial headings.
- **Interaction philosophy:** Navigation anchors serve the project narrative; filters and native disclosure controls reveal data on demand; the Plan Finder uses deliberate choices rather than a long questionnaire.
- **Typography system:** Rounded heavy display fallback for project headlines and an accessible system sans for body text.
- **Brand essence:** *NoMo FOMO makes social plans feel possible for budget-aware Dublin students.* Personality: optimistic, grounded, social.
- **Brand voice:** Concise, candid, and encouraging. Example lines: “A good evening should not require a big spend.” and “Pick a vibe. We’ll make the plan feel possible.”

## Page contents

1. **Home (`/`):** Concise hero, problem/solution, five product features, compact research proof point, product journey, impact, demo scope, future roadmap, and contact call-to-action.
2. **Plan Finder (`/find`):** A working client-side preference form for interests, budget, social style, available time, transport, and optional free-text notes. A transparent scoring model ranks the supplied activity dataset and returns three personalized activity cards with a short explanation of why each fits. Preferences stay in the current browser session only.
3. **Activity Library (`/activities`):** The supplied 13-entry Dublin/DCU research snapshot, filterable by category. Cards show category, last-checked date, short description, estimate, duration, and location; a native disclosure reveals why it fits, transport, what to bring, caveat, and official source.
4. **Contact (`/contact`):** Matching contact page with local validation and preview-only feedback.

## Matching model

The Plan Finder is deliberately a **rules-based prototype**, not a claim of live AI. It adds points for selected categories, compatible supplied cost estimate, stated transport suitability, matching activity intensity/social wording, suitable duration, and optional note keywords found in the activity’s supplied description and interest tags. The user sees a plain-language explanation for each recommendation, while the activity source data remains the basis for all planning claims.

## Project structure

| Path | Responsibility |
| --- | --- |
| `public/index.html` | Concise purple project overview and hand-off to the Plan Finder and Activity Library. |
| `public/find.html` | Working preference form and transparent client-side matching results. |
| `public/activities.html` | Filterable, progressive-disclosure Activity Library. |
| `public/contact.html` | Matching contact page with accessible client-side validation and preview-only success feedback. |
| `public/data/nomo-fomo-activities.json` | Supplied researched activity dataset, served as a static source for the Plan Finder and Activity Library. |
| `public/manus-routes.json` | Declares home, Plan Finder, Activity Library, and contact routes. |
| `public/logo.svg` | Purple NoMo FOMO spark asset. |
| `server.js` | Minimal static development server, including clean Plan Finder and Activity Library routes. |
| `package.json` | Local start and source-check scripts. |

## Constraints
The Plan Finder does not persist personal information, call external services, or claim machine learning. The Activity Library retains supplied date checks, caveats, and official-source links; it is a research snapshot, not a promise of live availability, verified ticket prices, ticket inventory, user accounts, integrations, email delivery, or automated AI actions.
