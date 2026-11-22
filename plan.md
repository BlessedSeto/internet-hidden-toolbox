# Internet’s Hidden Toolbox — Implementation Plan

## Product and boundaries

Build a polished, responsive, single-page directory for the 50 user-supplied websites. Preserve every entry as a distinct record—including both temporary-email entries—and retain each supplied description exactly. Group the records into clear categories; support instant text search and category filtering; provide direct outbound links using the supplied HTTPS URLs where supported. The project is independent of WorldWide: no reuse, replacement, or modification of its files or repository; no connection to an existing GitHub repository; no publication, deployment, or domain configuration.

The page is client-only and static. It needs no account, server, database, Redis, API credentials, or user-generated persistence. Outbound links will open in a new tab with `noopener noreferrer`; search and filters operate entirely in the browser.

## Implementation approach

Use a lightweight Vite + TypeScript static frontend, with no application framework or backend. Keep the 50 records in one typed data module, including stable original list numbers, URL, exact description, and category. Render category sections and searchable resource rows from that data. A single stateful page controller will combine case-insensitive live search across description and URL host with a single selected-category filter, update visible counts, and show a useful empty state and clear-filter action. Category controls will include an “All tools” option and counts; selecting a category will not change or rewrite resource data.

Use semantic headings, buttons and anchors, visible keyboard focus, accessible labels, and reduced-motion-aware transitions. All core content and interactions remain available on narrow screens: the desktop category navigation becomes a compact wrapping or horizontally scrollable filter strip, and resource rows reflow without horizontal page overflow. Use the supplied HTTPS URLs as the source of truth; do not silently substitute a different destination. No external image assets are required—the visual identity will be drawn with CSS and a small inline toolbox/index mark.

### Category assignment

- **Research & Learning:** 1–3, 7–10, 33–38
- **Visual & Image Tools:** 11–15, 18–19, 46
- **Code & Developer Tools:** 16–17, 39–43
- **Privacy & Security:** 20–24, 50
- **Audio & Focus:** 27–32
- **Discovery & Everyday Tools:** 4–6, 25–26, 44–45, 47–49

These assignments cover all 50 original list numbers once each. The supplied text, including capitalization, punctuation, symbols, and descriptions such as “70K+ free books” and “Merge/split PDFs,” remains unchanged.

## Project structure

The initialized project directory is empty of framework, starter, package manifest, dependencies, and development server. Proposed source layout:

- `index.html` — document shell, page metadata, and application mount.
- `src/main.ts` — page entry point and initialization.
- `src/data/resources.ts` — the complete typed set of 50 supplied records and category assignments.
- `src/app.ts` — rendering, search/filter state, result counts, and empty-state behavior.
- `src/styles.css` — responsive visual system, layout, typography, and accessible interaction states.
- `public/manus-routes.json` — route manifest for the single `/` page, available before starting the dev server.
- `package.json`, `pnpm-lock.yaml`, and `pnpm-workspace.yaml` — pinned minimal Vite/TypeScript toolchain and reviewed lifecycle-script policy.
- `plan.md` — this approved implementation/design plan.
- `TODO.md` — outcome-based implementation criteria, to be created after plan approval.

There is no backend or persistent data layer. The static page is served through the Webdev runtime for Preview; project configuration stays limited to what is needed for the development runtime. No publishing settings or domain will be added.

## Design direction

Three distinct visual directions considered (brief alternatives only): **Field-kit editorial index** (0.08): a playful, carefully labeled directory with the feel of a well-used tool manual. **Terminal-era utility** (0.06): a restrained retro-computing catalog with command-line cues. **Swiss reference atlas** (0.04): a crisp modern index built around typography and precise alignment. Select **Field-kit editorial index** to balance professional clarity with the user’s playful, tool-like direction.

- **Design movement:** Contemporary field-guide editorial, mixing utility labels and confident print-like typography without faux-aged textures.
- **Core principles:** Scan before you click; categorize without hiding the breadth; keep original resource names and descriptions authoritative; make every interaction quick and calm.
- **Color philosophy:** Warm paper-like neutrals provide an approachable workbench; near-black ink ensures legibility; an ownable bright cobalt/teal tool-color marks active filters and useful actions. Category distinctions use restrained secondary hues, never color alone.
- **Layout paradigm:** An editorial tool index rather than a generic centered card grid: a compact masthead and large “50” lead into a search/control bar, followed by a desktop category index rail and a generous main list of grouped, horizontal resource rows. On mobile the rail becomes a compact filter strip and rows stack naturally.
- **Signature elements:** A custom toolbox/index glyph formed from simple CSS geometry; small numbered index stamps beside entries; thin ruled dividers and capsule category labels that evoke a tidy field manual.
- **Interaction philosophy:** Search responds as the user types; category selection is immediate and visibly persistent; counts explain the current result set; a clear reset returns to the full index. Links are clearly identified as leaving the directory.
- **Animation:** Subtle, short transitions for filter selection and row appearance only; no looping or scroll-jacking effects. Respect `prefers-reduced-motion` and keep all state changes understandable without motion.
- **Typography system:** A distinctive editorial display face paired with a neutral sans-serif for interface text, with a monospace accent for entry numbers and small metadata. Use locally available/system fallbacks so the page does not depend on a third-party font service.
- **Brand essence:** A friendly, no-nonsense field guide to useful corners of the web; for curious people who want the right utility without digging through lists. Personality: resourceful, clear, playful.
- **Brand voice:** Short, useful, lightly witty; no generic onboarding filler. Example lines: “Good tools. Oddly hard to find.” “50 useful corners of the internet, indexed.”
- **Wordmark & logo:** A compact custom “toolbox index” mark—outlined box, lid, and a small index notch—paired with the title in a strong editorial wordmark, not a default-font emoji logo.
- **Signature brand color:** Vivid cobalt-teal, used consistently for active controls, link affordances, and the logo’s index notch.

## Approval gate

This plan is presented for user approval. Do not create application code, configure dependencies, or start implementation until the plan is approved. After approval, create `TODO.md` with the complete outcome criteria from the request, then implement the approved scope. Do not publish, deploy, set up a domain, or connect to an existing repository.
