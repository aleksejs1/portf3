# Aleksejs Kovaļovs — Executive Portfolio

> **High-performance, minimal portfolio for an Engineering Leader & CTO Candidate.**  
> Built with **Astro 5**, **Tailwind CSS**, and **TypeScript**.

[![Astro](https://img.shields.io/badge/Astro-5.x-BC52EE.svg?style=flat&logo=astro&logoColor=white)](https://astro.build)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC.svg?style=flat&logo=tailwind-css&logoColor=white)](https://tailwindcss.com)
[![TypeScript](https://img.shields.io/badge/TypeScript-Strict-3178C6.svg?style=flat&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Lighthouse](https://img.shields.io/badge/Lighthouse-100%2F100-success.svg?style=flat&logo=lighthouse&logoColor=white)](https://pagespeed.web.dev/)

---

## 🧭 Overview & Strategic Positioning

This portfolio is deliberately designed for the transition into a **Chief Technology Officer (CTO)** or **VP of Engineering** role:
- **The 5-Second Pitch:** Immediately communicates a mature engineering leader with 17+ years in tech, proven people management expertise, and domain depth across Core Banking and IoT telematics.
- **The Leadership Shift:** Highlights the deliberate January 2022 transition from 10+ years of high-load backend engineering into people and technical leadership.
- **Hands-on Proof:** Showcases custom tools created for leadership practices ([`encrypted1on1`](https://github.com/aleksejs1/encrypted1on1), [`ari`](https://github.com/aleksejs1/ari)), modern web platforms ([`minimalist.lv`](https://minimalist.lv), [`4m.lv`](https://4m.lv)), and an interactive searchable archive of 20+ historical projects.

---

## 🛠️ Tech Stack

- **Framework:** [Astro 5](https://astro.build) (Zero-JS static generation by default)
- **Styling:** [Tailwind CSS](https://tailwindcss.com) with `@tailwindcss/typography`
- **Language:** [TypeScript](https://www.typescriptlang.org) (Strict mode)
- **Icons:** [Lucide Astro](https://lucide.dev)
- **Image Optimization:** Built-in Astro Assets powered by [Sharp](https://sharp.pixelplumbing.com/) (auto WebP conversion)

---

## 🚀 Quick Start (Development & Build)

### Prerequisites
- **Node.js:** v18.17+, v20+, or v22+
- **Package Manager:** `npm` (or `pnpm` / `bun`)

### 1. Installation
Clone the repository and install dependencies:
```bash
git clone git@github.com:aleksejs1/portf3.git
cd portf3
npm install
```

### 2. Local Development Server
Start the local hot-reloading dev server:
```bash
npm run dev
```
Open **[http://localhost:4321](http://localhost:4321)** in your browser.

### 3. Type Checking & Diagnostics
Validate TypeScript types and Astro template integrity:
```bash
npm run check
# or: npx astro check
```

### 4. Production Build
Compile static HTML, CSS, client scripts, and optimized images into the `dist/` directory:
```bash
npm run build
```

### 5. Preview Production Build
Test the compiled production output locally:
```bash
npm run preview
```
Visit **[http://localhost:4321](http://localhost:4321)** to verify production performance.

### 6. Docker & Production Deployment
The repository includes a production-ready, multi-stage Docker setup. It compiles the project inside `node:22-alpine` and serves the static output via an ultra-lightweight `nginx:alpine` image (~25MB), configured with Gzip, aggressive cache headers for immutable assets, security headers, and health checks.

```bash
# 1. Copy environment template (default PORT=8210)
cp .env.example .env

# 2. Build and run container in detached mode
docker compose up -d --build

# 3. Check health and status
docker compose ps
curl http://localhost:8210/healthz

# 4. View container logs
docker compose logs -f
```

The container automatically restarts on failure or reboot (`restart: unless-stopped`). Expose port `8210` to your reverse proxy (Nginx, Traefik, Caddy, Cloudflare Tunnel).

---

## 📂 Project Structure

```text
portf3/
├── public/                       # Static public assets
│   ├── favicon.svg               # Sleek monogram favicon
│   └── profile.jpg               # Fallback profile portrait
├── src/
│   ├── assets/                   # Processed assets (optimized by Sharp)
│   │   └── profile.jpg           # Studio portrait of Aleksejs
│   ├── components/               # Astro UI Components
│   │   ├── Header.astro          # Floating frosted-glass navigation bar
│   │   ├── Hero.astro            # 5-second pitch, stats chips & portrait card
│   │   ├── Philosophy.astro      # 3 core leadership pillars
│   │   ├── ExperienceTimeline.astro # Career journey & watershed banner
│   │   ├── ProjectsShowcase.astro   # Categorized projects & live archive search
│   │   ├── Articles.astro        # Habr articles & writing highlights
│   │   ├── ContactCTA.astro      # Direct email with copy button, social links
│   │   └── Footer.astro          # Clean minimal tech disclosure
│   ├── data/                     # Strictly typed data sources
│   │   ├── experience.ts         # Career history & civic governance
│   │   ├── philosophy.ts         # Leadership pillars & actionable principles
│   │   └── projects.ts           # Curated & archive projects catalogs
│   ├── layouts/
│   │   └── Layout.astro          # HTML shell, SEO, OpenGraph, fonts, ambient glows
│   ├── styles/
│   │   └── global.css            # Tailwind directives, custom scrollbars
│   └── pages/
│       └── index.astro           # Executive One-Pager entrypoint
├── astro.config.mjs              # Astro configuration
├── tailwind.config.mjs           # Tailwind theme configuration
├── tsconfig.json                 # TypeScript strict configuration
├── AGENTS.md                     # Agentic AI guidelines & codebase rules
├── CLAUDE.md                     # Claude Code CLI context & instructions
└── package.json
```

---

## 📝 How to Update Content

All content is cleanly separated from UI components and resides in `src/data/`:

1. **Work Experience & Milestones:**  
   Edit `src/data/experience.ts` to add new roles, update company descriptions, or adjust highlights.
2. **Projects & Open Source:**  
   Edit `src/data/projects.ts` to add new flagship tools or historical projects.
3. **Leadership Philosophy:**  
   Edit `src/data/philosophy.ts` to adjust leadership pillars and management principles.
4. **Profile Photo:**  
   Replace `src/assets/profile.jpg` (Astro automatically optimizes and generates WebP versions on build).

---

## 🌐 Deployment Options

Since this project outputs clean, static HTML/CSS/JS (`output: "static"`), it can be deployed anywhere with zero server runtime costs:

- **Cloudflare Pages:** Connect Git repo, framework preset: `Astro`, build command: `npm run build`, output directory: `dist`.
- **Vercel:** Connect Git repo, preset: `Astro`, output directory: `dist`.
- **GitHub Pages:** Add an Astro GitHub Actions workflow deploying the `dist` directory.
- **Static Nginx / Caddy VPS:** Run `npm run build` and point your web server root to `/path/to/dist`.

---

## 📄 License

Personal portfolio content &copy; 2026 Aleksejs Kovaļovs. Source code available under the [MIT License](LICENSE).
