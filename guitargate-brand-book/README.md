# Guitargate Brand Book — Starter Asset Library

Code-based brand book and starter asset library for the Guitargate three-brand system (Guitargate, Teleport, Voxbox). Version 0.5. Vanilla HTML + CSS + SVG — no framework, no build step, no JavaScript beyond one small IntersectionObserver for TOC active states. Open any file by double-clicking.

---

## File Structure

```
guitargate-brand-book/
├── brand-book.html              ← single-page brand book (start here)
├── styles.css                   ← design tokens + all brand book styles
├── README.md                    ← this file
│
├── assets/
│   ├── logos/
│   │   ├── guitargate-wordmark.svg   ← GUITARGATE wordmark (light + dark variants)
│   │   ├── g-symbol.svg              ← (G) symbol mark (light + dark variants)
│   │   ├── teleport-wordmark.svg     ← TELEP(O)RT wordmark
│   │   └── voxbox-wordmark.svg       ← VO(X)BOX wordmark
│   │
│   ├── color-swatches/
│   │   ├── guitargate-palette.svg    ← GG Blue 950/900/700/500/100
│   │   ├── teleport-palette.svg      ← Teleport Violet 950/700/500/100
│   │   └── voxbox-palette.svg        ← Voxbox Orange 950/700/500/100
│   │
│   ├── posters/
│   │   ├── trueline-divider.html     ← "Keep it in your hands." chapter divider
│   │   ├── membership-web-hero.html  ← Full-viewport blue hero section
│   │   ├── teleport-poster.svg       ← 600×900 Teleport device poster
│   │   ├── voxbox-poster.svg         ← 600×900 Voxbox device poster
│   │   └── system-descriptor-flyer.svg ← A5 corkboard flyer
│   │
│   ├── diagrams/
│   │   ├── logo-construction.svg     ← S-unit grid + cap height diagram
│   │   └── grid-system.svg           ← 12-column 1440px grid diagram
│   │
│   ├── stickers/
│   │   ├── g-sticker.svg             ← Circular (G) mark sticker
│   │   └── trueline-sticker.svg      ← Rectangular trueline sticker
│   │
│   ├── packaging/
│   │   ├── teleport-box.svg          ← 5"×4"×2" Teleport box dieline
│   │   └── voxbox-box.svg            ← 7"×5"×2" Voxbox box dieline
│   │
│   ├── typography/
│   │   └── specimen.html             ← Full type specimen for all three typefaces
│   │
│   └── email/
│       └── signature.html            ← HTML email signature with instructions
```

---

## Design Tokens

All tokens live in `styles.css` as CSS custom properties on `:root`.

### Brand Colors

```css
/* Guitargate Blue */
--gg-blue-950: #010719;   /* dark BG — navy */
--gg-blue-900: #0A1A4A;   /* deep blue */
--gg-blue-700: #1A3CBD;   /* text on light (8.66:1 AA) */
--gg-blue-500: #4476FF;   /* primary accent */
--gg-blue-100: #CDDAFF;   /* subtle tint */

/* Teleport Violet */
--tp-violet-950: #160620;
--tp-violet-700: #5B1FCC;
--tp-violet-500: #8144FF; /* primary accent */
--tp-violet-100: #D8CDFF;

/* Voxbox Orange */
--vb-orange-950: #190B03;
--vb-orange-700: #B84000;
--vb-orange-500: #FF7420; /* primary accent */
--vb-orange-100: #FEC784;

/* Neutral (shared by all three brands) */
--neutral-900: #242321;   /* headings, near-black */
--neutral-700: #383735;   /* body text */
--neutral-600: #787572;   /* muted text (AA-safe) */
--neutral-500: #8C8784;   /* placeholder / large text only */
--neutral-100: #E6E8DC;   /* borders */
--neutral-50:  #FAF9F8;   /* page background / cream */
```

### Logo Construction

```css
--logo-S:      24px;          /* base unit */
--logo-cap:    96px;          /* cap height = 4S */
--logo-symbol: 144px;         /* (G) symbol = 6S */
--logo-clear:  24px;          /* clearspace = 1S on all sides */
```

### Typography

```css
--font-display: "transducer-extended", "Transducer", "Inter", system-ui, sans-serif;
--font-body:    "articulat-cf", "Articulat CF", "Inter", system-ui, sans-serif;
--font-mono:    "cofo-sans-mono-variable", "CoFo Sans", ui-monospace, monospace;
```

### Spacing (8px grid)

`--sp-2` `--sp-4` `--sp-8` `--sp-12` `--sp-16` `--sp-24` `--sp-32` `--sp-48` `--sp-64` `--sp-96` `--sp-128`

---

## Fonts

Fonts load from **Adobe Fonts kit `nem7lpy`** via:

```html
<link rel="stylesheet" href="https://use.typekit.net/nem7lpy.css">
```

Loaded faces: `transducer-extended` (weight 700), `articulat-cf` (variable), `cofo-sans-mono-variable`.

**If the Adobe Fonts kit is unavailable** (no internet, kit expired), all files fall back to Inter / system-ui for display and body, and ui-monospace for annotation. The brand book is readable but wordmarks won't render in Transducer.

**For print production / Illustrator delivery:**
1. Open the SVG in Adobe Illustrator while connected to Creative Cloud (fonts load automatically from the CC font library if the kit is active)
2. Select all text → Type → Create Outlines before sending to print vendor
3. This ensures correct rendering regardless of the vendor's font environment

---

## Asset Priority

### P1 — Complete

| File | Description |
|---|---|
| `brand-book.html` | Single-page brand book, all 8 sections, sticky TOC |
| `styles.css` | All design tokens as CSS custom properties |
| `assets/logos/guitargate-wordmark.svg` | Primary wordmark, light + dark |
| `assets/logos/g-symbol.svg` | (G) symbol mark, light + dark |
| `assets/logos/teleport-wordmark.svg` | TELEP(O)RT device wordmark |
| `assets/logos/voxbox-wordmark.svg` | VO(X)BOX device wordmark |
| `assets/color-swatches/guitargate-palette.svg` | GG Blue ramp |
| `assets/color-swatches/teleport-palette.svg` | Teleport Violet ramp |
| `assets/color-swatches/voxbox-palette.svg` | Voxbox Orange ramp |
| `assets/posters/trueline-divider.html` | "Keep it in your hands." chapter divider |
| `assets/posters/membership-web-hero.html` | Full-viewport membership hero |

### P2 — Complete

| File | Description |
|---|---|
| `assets/posters/teleport-poster.svg` | 600×900 Teleport device poster |
| `assets/posters/voxbox-poster.svg` | 600×900 Voxbox device poster |
| `assets/posters/system-descriptor-flyer.svg` | A5 corkboard flyer |
| `assets/diagrams/logo-construction.svg` | S-unit construction diagram |
| `assets/diagrams/grid-system.svg` | 12-column grid system diagram |

### P3 — Complete

| File | Description |
|---|---|
| `assets/stickers/g-sticker.svg` | Circular (G) sticker · ~3" die-cut round |
| `assets/stickers/trueline-sticker.svg` | Trueline sticker · ~4.5"×1.5" die-cut rectangle |
| `assets/packaging/teleport-box.svg` | Teleport box dieline · 5"×4"×2" |
| `assets/packaging/voxbox-box.svg` | Voxbox box dieline · 7"×5"×2" |
| `assets/typography/specimen.html` | Full type specimen |
| `assets/email/signature.html` | HTML email signature |

---

## How to Refine

### Adobe Illustrator

- SVG files open directly in Illustrator. All text uses the Adobe Fonts kit — ensure Creative Cloud is running and the `nem7lpy` kit is active in your CC account.
- To prep for print: Select All → Type → Create Outlines. Add 3mm bleed outside all dieline boundaries before exporting for vendor.
- Color swatch SVGs: open in Illustrator, select swatches, and use the Swatches panel to add them to your working document library.
- Logo construction diagrams: use as live reference — dimension callouts are editable text, S-unit grid lines are grouped separately.
- Box dielines: dashed stroke = cut line, lighter dashed stroke = score/fold line. Set dieline stroke to spot color "CUT" or "DIELINE" before sending to vendor so it's not printed.

### Photoshop

- Device posters (teleport-poster.svg, voxbox-poster.svg): export at 2× or 3× resolution. Place in Photoshop as a Smart Object, then composite the actual pedal photo into the labeled photo slot rectangle. Use the ref IDs (GE-08, GE-09) from `guitargate_shot_list.md` to pull the correct images.
- Brick wall / corkboard composites: export the HTML poster as a full-resolution PNG, place in Photoshop, apply perspective warp + multiply/overlay blend mode at ~85–95% opacity to match the surface.
- Flat lay (§8.11): arrange merch SKU01–SKU05 on a warm neutral surface. Natural overhead window light. Include Teleport or Voxbox in frame. Reference ML series shot list for styling notes.

### Figma

- Import SVG logo assets via File → Place Image or drag directly onto canvas. They'll come in as flattened vectors.
- Use `styles.css` token values to set up a Figma color style library — all tokens are documented above.
- Typography styles: set up Figma text styles using the exact font names (`transducer-extended`, `articulat-cf`, `cofo-sans-mono-variable`). These names match the Adobe Fonts CSS names exactly.
- The brand book HTML is the source of truth for layout patterns and spacing — use the `--sp-*` scale (multiples of 8px) and `--logo-S: 24px` construction math when building new components.

---

## Open Items (as of v0.5)

1. **§4.5 Voxbox Channel Two green** — working HEX `#4FCB80` is approximate. Replace with exact value from source hardware design file once locked.
2. **§3.4 Co-branded lockups** — cap-height ratio suggested at 55%; needs final sign-off.
3. **§3.6 Minimum sizes** — suggested values documented in brand book; needs locking.
4. **§5.4 Custom display typeface** — in progress; fill in once complete.
5. **§7.3 Intimate texture library** — new photographic direction (v0.4); source library needs to be built out.

---

## Brand Correctness Notes

- **Trueline:** "Keep it in your hands." — period included, sentence case. This is the brand mantra of record. Do not shorten, paraphrase, or uppercase.
- **Voxbox wordmark:** VO(X)BOX — parentheses around the X, X in Voxbox Orange `#FF7420`. The retired glyph VO⋈BOX must not appear in any new asset.
- **Voxbox device:** vocal preamp that feeds into Teleport. Not a "duet device." Not an "amp." See §3.3 for the precise description.
- **Channel Two green:** `#4FCB80` is a product-UX color only (LED indicator, hardware). Never appears in brand marketing, social, packaging hero art, or the brand book's visual system.
- **Orange button text:** ALWAYS `#190B03` dark, NEVER white. Orange on white fails WCAG AA.
- **Photo slots in SVGs:** rectangles labeled "PHOTO · Composite in Photoshop" are intentional placeholders for Photoshop compositing. Do not fill them with AI-generated imagery.

Source of truth: `guitargate_brand_system.md` (in `E:\_Code_Projects\Guitargate\website\`)
