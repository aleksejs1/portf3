# CLAUDE.md

## Project Overview
Executive Portfolio for **Aleksejs Kovaļovs** (Engineering Leader / CTO Candidate).  
Tech Stack: Astro 5, Tailwind CSS, TypeScript, Sharp (image optimization).

## Development Commands
- `npm run dev`: Start local Astro development server at `http://localhost:4321`.
- `npx astro check`: Run TypeScript and Astro template typechecking.
- `npm run build`: Generate static production site into `dist/`.
- `npm run preview`: Preview production build locally.
- In PowerShell, disable telemetry: `$env:ASTRO_TELEMETRY_DISABLED="1"`.

## Architecture & Code Style
- **Data-Driven:** Keep all portfolio content in `src/data/` (`experience.ts`, `projects.ts`, `philosophy.ts`). Never hardcode copy inside `.astro` components.
- **Positioning:** Maintain the executive tone: Senior Engineering Leader & CTO Candidate with 17+ years in tech, a 2022 leadership watershed from backend engineering to people leadership, and pet projects as architectural proof.
- **Styling:** Tailwind CSS, dark mode by default (`bg-zinc-950`), minimalist executive aesthetic (Linear/Vercel style).
- **Zero-JS by Default:** Only write client `<script>` tags for lightweight UI enhancements (modal, instant search, copy-to-clipboard).
- **Strict TypeScript:** No `any`. Explicit interfaces for all data objects.
- **Validation:** Always verify changes with `npx astro check` and `npm run build` before finishing.
