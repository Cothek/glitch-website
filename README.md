# Glitch Website

The marketing site for [Glitch AI](https://github.com/Cothek/glitch-ai) — a personal AI companion with persistent memory, skills, and agents.

**Live**: _(deployed URL here)_

## Stack

- **Next.js 16** (App Router) + **React 19** + **TypeScript**
- **Tailwind CSS v4** for styling
- **Geist** + **Geist Mono** fonts (next/font)
- **Vercel** for hosting (one-click deploy)

## Project structure

```
glitch-website/
├── app/
│   ├── layout.tsx              # Root layout, fonts, metadata
│   ├── page.tsx                # Landing page (composes all sections)
│   └── globals.css             # Design system (Tailwind v4 @theme)
├── components/                 # One component per landing section
│   ├── nav.tsx
│   ├── hero.tsx
│   ├── scan-lines.tsx          # Hero background animation
│   ├── features.tsx
│   ├── showcase.tsx            # Terminal-style demo
│   ├── architecture.tsx
│   ├── install.tsx
│   ├── copy-button.tsx         # Client component
│   ├── download.tsx
│   ├── footer.tsx
│   ├── terminal.tsx            # Reusable terminal frame
│   └── icons.tsx               # Inline SVG icons (no icon library)
├── lib/                        # Reserved for shared utilities
├── public/
│   ├── favicon.svg
│   ├── og-image.svg
│   ├── manifest.json
│   └── images/                 # Screenshots
├── scripts/
│   └── deploy.mjs              # Vercel deployment helper
├── next.config.ts
├── tailwind config             # Tailwind v4 (in CSS via @theme)
├── postcss.config.mjs
├── vercel.json                 # Vercel deployment config
├── tsconfig.json
├── package.json
└── README.md
```

## Develop

```bash
# Install deps
npm install

# Start the dev server (http://localhost:3000)
npm run dev

# Full production build
npm run build

# Serve the production build
npm start
```

## Deploy to Vercel

### One-click

Click this button (after pushing to GitHub):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FCothek%2Fglitch-website&project-name=glitch-website)

### Manual

```bash
# Install Vercel CLI
npm i -g vercel

# First-time setup (will prompt for login + project creation)
cd glitch-website
vercel

# Production deploy
vercel --prod
```

### Configuration

In the Vercel dashboard for the project:

| Setting | Value |
|---|---|
| **Framework Preset** | Next.js (auto-detected) |
| **Build Command** | `npm run build` (default) |
| **Install Command** | `npm install` (default) |
| **Output Directory** | `.next` (default) |

Optional env vars:
- `NEXT_PUBLIC_SITE_URL` — your deployed URL (e.g. `https://glitch-ai.vercel.app`). Used for OpenGraph and canonical links.

## Download archive

The download button on the site points to the GitHub archive URL (`https://github.com/Cothek/glitch-ai/archive/refs/heads/main.zip`). GitHub automatically packages the repo as a ZIP on every download — no build step needed.

## Design system

All design tokens live in `app/globals.css` under `@theme { ... }`. Tailwind v4 picks them up automatically.

| Token | Value |
|---|---|
| `bg`, `bg-elevated`, `bg-surface`, `bg-code` | Surface colors |
| `text`, `text-muted`, `text-dim` | Text scale |
| `border`, `border-strong` | Border colors |
| `accent` (purple), `cyan`, `green`, `amber`, `red` | Brand + semantic |
| `accent-soft`, `cyan-soft` | Soft variants (15% opacity) |
| `font-sans` (Geist), `font-mono` (Geist Mono) | Typography |
| `radius-sm`, `radius`, `radius-lg`, `radius-xl` | Spacing |
| `ease-out`, `ease-in-out` | Easing curves |
| `duration-fast`, `duration`, `duration-slow` | Animation durations |

## Anti-slop checklist

This site is intentionally NOT generic. We avoid:

- ❌ Stock photos
- ❌ "Trusted by 10,000+" social proof
- ❌ Cookie-cutter 3-column features
- ❌ Tailwind default blue-500
- ❌ Gratuitous gradients everywhere
- ❌ `text-3xl font-bold` for everything

Instead we use:

- ✅ Real product screenshots
- ✅ Terminal-style demos with authentic Glitch output
- ✅ Scan-line hero (echoing the existing glitch-ai landing)
- ✅ Custom monospace accents (Cascadia/JetBrains Mono)
- ✅ Restrained color: 90% neutral, accent only on CTAs
- ✅ Custom SVG icons (no icon library)
- ✅ Tasteful motion (max 3 simultaneous animations, reduced-motion respected)

## License

MIT — same as the parent Glitch project.
