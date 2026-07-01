# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository layout

This directory holds two independent, unrelated-build Guitargate projects. There is no shared build, package manager, or root tooling — `cd` into the relevant subproject before running anything.

- **`website/`** — React 18 + Vite + TypeScript clickable wireframe prototype for stakeholder sign-off. Has its own detailed `website/CLAUDE.md` — **read it before touching anything under `website/`.**
- **`guitargate-brand-book/`** — Vanilla HTML + CSS + SVG brand book and starter asset library. No framework, no build step. Open files directly in a browser. See `guitargate-brand-book/README.md`.

Both projects describe the same **three-brand system**: Guitargate (parent, blue), Teleport (device, violet), Voxbox (vocal preamp that feeds Teleport, orange).

## website/ — prototype

```bash
cd website
npm run dev      # vite dev server at localhost:5173
npm run build    # tsc && vite build
npm run lint     # eslint src --ext ts,tsx
```

Architecture in brief (full detail in `website/CLAUDE.md`): single-state app in `src/App.tsx` switching between 12 named screens (`src/types.ts`), no router — all navigation via `nav.navigate(screen)`. Public screens wrap in `DesktopFrame`, member screens in `PhoneFrame`. Hand-written CSS only, all in `src/styles/global.css` with comprehensive utility classes — use them instead of inline styles. Grayscale, no color, no animation in the prototype.

Each component/screen has a paired `*.figma.tsx` Code Connect file (`@figma/code-connect`, `figma.config.json`). When you rename or change a component's props, update its `.figma.tsx` alongside it.

**Content rule:** never fabricate screen copy, labels, stats, or feature descriptions. Read the matching `src/screens/` component and cross-reference `guitargate_product_site_ia` source before writing wireframe content; ask if unsure. Invented content has misled stakeholders before (e.g. Voxbox is a vocal preamp, not an amp).

## guitargate-brand-book/ — brand assets

No commands — static files. `brand-book.html` is the single-page entry point; `styles.css` holds all design tokens as CSS custom properties. SVG assets under `assets/` are print-production sources meant to be refined in Illustrator/Photoshop/Figma (workflow notes in the README). Rectangles labeled "PHOTO · Composite in Photoshop" are intentional placeholders — do not fill them with generated imagery.

## Brand correctness (applies to both projects)

These are non-negotiable, sourced from `website/guitargate_brand_system.md`:

- **Trueline:** "Keep it in your hands." — exact wording, period included, sentence case. Never shorten, paraphrase, or uppercase.
- **Voxbox wordmark:** `VO(X)BOX` with parentheses around the X (X in Voxbox Orange `#FF7420`). The retired `VO⋈BOX` glyph must never appear in new assets.
- **Voxbox** is a vocal preamp feeding Teleport — not a "duet device," not an "amp."
- **Orange button text** is always dark `#190B03`, never white (orange-on-white fails WCAG AA).
- **Channel Two green `#4FCB80`** is a product/hardware UX color only — never in brand marketing, packaging, or the brand book's visual system.

## Fonts

Both projects load Adobe Fonts kit **`nem7lpy`** via `https://use.typekit.net/nem7lpy.css`. Faces: `transducer-extended` (display), `articulat-cf` (body/UI), `cofo-sans-mono-variable` (mono). Falls back to Inter / system-ui if the kit is unavailable.
