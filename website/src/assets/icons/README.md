# Custom icons

Workflow for bringing custom Figma icons into the prototype, replacing `@remixicon/react` ones where needed.

## 1. Export from Figma

- Export each icon as **SVG**.
- Set fills/strokes to **`currentColor`**, not a hardcoded hex — this is what lets the `color` prop work per call site (active vs. inactive tab state, etc.). If Figma exports a hex, swap it for `currentColor` before dropping the file in.
- 24×24 artboard matches the rest of the icon set; other sizes work too, just note the viewBox.

## 2. Drop the raw file in `raw/`

Put the exported `.svg` file in `src/assets/icons/raw/` — this folder is just a holding area for originals, not imported by the app.

## 3. Wire it up

Each icon becomes a small component via `createIcon()` (see `createIcon.tsx`), matching `@remixicon/react`'s `size`/`color` prop signature so it's a drop-in replacement at any call site:

```tsx
// src/assets/icons/GgPlayIcon.tsx
import { createIcon } from './createIcon';

export const GgPlayIcon = createIcon(
  <path d="M8 5v14l11-7z" />,
);
```

Then export it from `index.ts`:

```ts
export { GgPlayIcon } from './GgPlayIcon';
```

And use it exactly like a Remix icon:

```tsx
import { GgPlayIcon } from '../assets/icons';

<GgPlayIcon size={18} color="var(--ink)" />
```

If a raw SVG has multiple paths/shapes, pass them all as children to `createIcon(...)` — see the JSX fragment example in `createIcon.tsx`'s doc comment.
