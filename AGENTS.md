# AGENTS.md — AI Developer & Agent Guidelines

> **Target Audience:** AI Coding Assistants (Antigravity, Cursor, Claude Code, GitHub Copilot, Windsurf) and human contributors.  
> **Project:** Executive Portfolio for **Aleksejs Kovaļovs** (Engineering Leader & CTO Candidate).  
> **Repository:** `kovalovs2`

---

## 1. Core Positioning & Strategic Narrative

When modifying text, copy, or visual components, you **must strictly adhere** to the following executive narrative:

1. **The 5-Second Executive Rule:**
   - The site is an **Executive Profile for a CTO / VP of Engineering / Head of Engineering** position.
   - It is **NEVER** a junior portfolio, a student showcase, or a freelancer agency website.
   - The tone must be authoritative, pragmatic, empathetic, and grounded in real-world business outcomes.

2. **The Career Watershed (January 2022):**
   - **Phase 1 (2011 — 2021):** Deep backend engineering foundation (5.5 years in Core Banking at DNB Bank + 5 years high-load backend at inbox.lv).
   - **Phase 2 (2022 — Present):** Deliberate transition to people and technical leadership (Technical Project Manager at inbox.lv, Engineering Manager at Mapon).
   - **The Synthesis:** Aleksejs leads technical teams effectively *because* he has deep engineering roots. He speaks the language of engineers without micromanaging, while speaking the language of business (P&L, delivery velocity, risk mitigation) to executives.

3. **Pet Projects as Architectural Proof:**
   - Pet projects are **not** hobbies to fill a resume. They prove that moving into management was a deliberate choice to scale impact, not an escape from obsolete technical skills.
   - Flagship projects focus on management tools (`encrypted1on1`, `ari`, `obsidian-contact-sync-plugin`) and modern zero-bloat web architectures (`minimalist.lv`, `4m.lv`).

---

## 2. Technical Stack & Architectural Constraints

- **Astro 5 (`output: "static"`):**
  - Keep the site **Zero-JS by default**. Only use client scripts for essential progressive enhancements (e.g., mobile menu toggle, real-time archive search filter, email clipboard copy).
  - Do not introduce heavy client frameworks (React, Vue) unless explicitly requested.

- **Content & Data Separation:**
  - **Never hardcode portfolio content** directly into `.astro` UI components.
  - All career history, projects, and leadership philosophy belong in `src/data/`:
    - `src/data/experience.ts` — Work experience and civic leadership.
    - `src/data/projects.ts` — Curated flagships and historical archive projects.
    - `src/data/philosophy.ts` — Leadership pillars and principles.

- **Tailwind CSS & Styling Conventions:**
  - Modern, minimalist *Executive Tech* aesthetic (inspired by Linear, Vercel, Stripe).
  - Dark mode by default (`class="dark"` on `<html>`, background `bg-zinc-950`, text `text-zinc-100`).
  - Palette: Neutral zinc backgrounds, Indigo primary accents (`#6366f1`), Emerald highlights for status/metrics (`#22c55e`), Sky for secondary accents.
  - Accessible focus outlines and responsive layouts (mobile, tablet, desktop).

- **Strict TypeScript:**
  - Strict mode enabled (`extends: "astro/tsconfigs/strict"`).
  - All data structures must have explicit TypeScript interfaces.
  - Zero TypeScript errors (`npx astro check` must report 0 errors).

- **Image Assets:**
  - Use Astro's built-in `<Image />` component from `astro:assets` for local images.
  - The image pipeline utilizes `sharp` for automatic WebP conversion and responsive scaling.

---

## 3. Essential Commands Cheat Sheet

| Task | Command |
| :--- | :--- |
| **Dev Server** | `npm run dev` |
| **Type Check** | `npx astro check` |
| **Build** | `$env:ASTRO_TELEMETRY_DISABLED="1"; npx astro build` |
| **Preview Build** | `npx astro preview` |

> [!IMPORTANT]
> In automated/non-interactive terminal environments on Windows, always prepend `$env:ASTRO_TELEMETRY_DISABLED="1"` to avoid interactive telemetry prompts.

---

## 4. Verification Workflow for Agents

Before completing any task or claiming work is done, an AI agent **must run and verify**:

1. `npx astro check` — Ensure 0 errors and 0 warnings.
2. `npx astro build` — Ensure the static production build compiles cleanly without errors.
3. Review git changes to make sure no unwanted files (e.g. `.astro/`, `dist/`, logs) are staged or modified.
