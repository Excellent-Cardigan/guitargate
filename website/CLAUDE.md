# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Guitargate wireframe prototype — clickable stakeholder sign-off prototype for the end-to-end customer flow. Not production code. Source of truth: `guitargate-product-site-ia-v0.1.md`.

## Stack

React 18 + Vite 6 + TypeScript. No UI library, no Tailwind. Hand-written CSS with CSS variables in `src/styles/global.css`.

## Commands

```bash
npm run dev      # dev server at localhost:5173
npm run build    # tsc && vite build
npm run lint     # eslint src --ext ts,tsx
```

## Architecture

**`src/types.ts`** — `Screen` union type (12 named screens), `AppNav` interface (`navigate` + `currentScreen`), `PHONE_SCREENS` list.

**`src/App.tsx`** — single state holder: `screen`. Switches between all 12 screens. Public screens wrapped in `DesktopFrame`, member screens in `PhoneFrame`. No router — all navigation goes through `nav.navigate(screen)`.

**`src/components/`**
- `Placeholder` — `--line` rectangle with label, used for all media/image blocks
- `DesktopFrame` — thin wrapper div with `.desktop-page` class
- `PhoneFrame` — renders the 390px phone chrome; also exports `StatusBar` (each member screen imports and renders its own)
- `TopNav` — public site sticky nav; GUITARGATE wordmark + 4 nav links + Sign in / Join
- `BottomTabBar` — member app 4-tab bar (Home · Learn · Play · Pedals) with SVG icons

**`src/screens/public/`** — 7 screens: BrandHome, TeleportPage, VoxboxPage, MembershipPage, CheckoutPage, StorePage, OnboardingPage. All use `TopNav` and render inside `DesktopFrame`.

**`src/screens/member/`** — 5 phone screens: AppHome, AppLearn, AppPlay, AppPedals, AppAccount. Each renders its own `<StatusBar>` and `<BottomTabBar>` inside `PhoneFrame`.

## CSS conventions

All styles live in `src/styles/global.css`. Use the utility classes from there rather than inline styles — they're comprehensive:
- Typography: `.t-display`, `.t-h1`–`.t-h3`, `.t-body`, `.t-caption`, `.t-label`, `.t-muted`, `.t-mono`, `.t-subbrand`
- Buttons: `.btn` + `.btn-primary / -secondary / -ghost` + `.btn-sm / -lg`
- Layout: `.container`, `.container-narrow`, `.section`, `.section-sm`, `.section-xs`, `.stack`, `.cluster`, `.divider`
- Cards: `.card`, `.card-sm`, `.card-flat`, `.feature-card`
- Badges/tags: `.badge`, `.tag`, `.badge-dark / -outline`, `.tag-dark / -outline`
- Phone app patterns: `.app-section`, `.app-list-item`, `.row-link`, `.tab-bar`, `.tab-item`
- Public page patterns: `.hero-bleed-section / -grid / -text / -visual`, `.stats-row`, `.feature-grid-2 / -3`, `.product-grid`
- Form: `.form-field`, `.form-field__input`, `.form-row`
- Misc: `.progress-bar`, `.feed-card`, `.continue-card`, `.live-card`, `.filter-pills`, `.open-notice`

**Do not reach for inline styles when a class already exists.**

## Design tokens

```css
--ink     #242321   /* primary text, fills */
--muted   #8C8784   /* secondary text, borders */
--line    #EDECEB   /* subtle borders, placeholder fills */
--surface #FFFFFF   /* card backgrounds */
--bg      #FAF9F8   /* page background */
```

Grayscale only. No color, no animation.

Font stacks via CSS variables: `--font-display` (transducer-extended), `--font-ui` (articulat-cf), `--font-mono` (cofo-sans-mono-variable).

## Fonts

Adobe Fonts kit `nem7lpy` is already wired in `index.html`. Loaded faces: transducer-extended (weight 600), articulat-cf (variable). Falls back to Inter if kit is unavailable.

## Flow / guided tour (not yet built)

The CSS in `global.css` includes ready-made classes for a guided tour overlay (`.flow-indicator`, `.flow-btn`, `.flow-dot`, `.flow-map-wrap`, `.flow-step-row`, `.screen-pill-grid`) but the corresponding React components (`FlowIndicator`, `FlowMap`) and the `flowStep` state haven't been built yet. When implementing: `FLOW_STEPS` and `startFlow`/`exitFlow` logic belong in `src/types.ts` and `src/App.tsx`.

The intended 6-step path: `brand-home → membership → checkout → onboarding → app-home → app-learn`.

## Content accuracy (paper.design wireframes)

**Never fabricate screen content.** Before writing any copy, UI labels, section names, stats, or feature descriptions into a wireframe:
- Read the corresponding React component in `src/screens/` first
- Cross-reference `guitargate-product-site-ia-v0.1.md` for IA/structure decisions
- If the source files don't cover it, ask — do not invent plausible-sounding content
- If unsure whether something is accurate, stop and ask rather than guessing

This rule exists because invented content (e.g. describing Voxbox as "an amp") can mislead stakeholders reviewing the prototype.

## Deployment

`dist/` is committed to git and deployed to cPanel. Always run `npm run build` before committing.
