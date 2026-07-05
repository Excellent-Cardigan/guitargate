# Guitargate App Prototype — Build Tightening Brief (v0.1)

**For: Claude Code, working against the existing prototype at `http://localhost:5173/`**
**Goal: a complete, demo-ready prototype to present to Michael for flow sign-off.**
**Source of truth for these decisions: this brief.** It encodes choices made on top of `guitargate-product-site-ia-v0.1.md` (IA §4–§5) and `guitargate-loop-someone-in-concept-v0.1.md`.

---

## 0. Prime directives (read first)

1. **No open questions in the UI.** Remove every "OPEN / to be validated" banner, placeholder-debate note, or TODO that is visible on screen. The demo must read as a finished product, not a working doc. (Specifically: delete the "⚠ OPEN — Structure to be validated" block on the Play screen.)
2. **Structure-first, monochrome.** Do **not** introduce brand accent color. Stay in the existing grayscale system. Color is deliberately deferred until after Michael signs off the flow (IA §2, principle 4). Tokens in §6.
3. **Stay in voice.** Use the say/never list in §7. If you must write copy, write what a shy bedroom player would feel *generous* sending — never what a marketer would write.
4. **Don't invent scope.** If something isn't specified here, keep it lightweight and placeholder rather than building a new system. See §8 (out of scope).

---

## 1. Locked decisions (the model to build)

| # | Question | Decision |
|---|----------|----------|
| 1 | Organizing model for Play | **Hybrid** — feed is the surface; **Bands** (persistent groups) are a layer on top. |
| 2 | Unit of sharing | **An open loop** (an invitation to add a part), not a finished broadcast take. |
| 3 | Composer behavior | Composer **posts to the in-app feed**. Sharing *outside* the app happens from an individual loop's/song's/project's own page or menu — never from the main composer. Voice is adjustable (see §7). |
| 4 | Card action row | **React + Load to pedal + Add your part** (plus Like — see #5). |
| 5 | Like vs React | **Two distinct primitives.** ♥ **Like** = lightweight tap, stays, available to anyone (you can like without adding a part). **React** = comment-style feedback (a short message/thread), not a like. |
| 6 | Discover | The **"Everyone" filter is** discovery. No separate Discover surface. |
| 7 | External sharing in v1 | **Yes** — exists as the outward face of the open-loop invitation, surfaced from each item's own page/menu (per #3). |
| 8 | Incentive shown in-app | **Quiet teaser only** — show the milestone ladder with **no numbers, no credit math.** |
| 9 | Virtual band object | **Lightweight Band/group entity** — unified with the Rooms layer from #1. |
| 10 | Empty / first-run state | **Both** — prompt to open your first loop **and** keep a seeded "Everyone" feed so it never looks dead. |

---

## 2. Global / app shell

- **Bottom tab bar (all screens):** Home · Learn · Play · Pedals. Play is centered with the play-button (▶ in circle) icon. Active tab is bold/filled. Account lives in the top-right avatar menu, not the tab bar.
- **Typography** (load with fallbacks; the brand faces may not be installed in the dev environment):
  - Display / headers / `GUITARGATE` wordmark → **Transducer Extended Bold** *(fallback: Arial Bold)*
  - Body / UI → **Articulat CF** *(fallback: a neutral grotesque, e.g. Inter)*
  - Mono / annotation / the bracketed waveform labels like `[ Cliffs of Dover — take 2 ]` → **CoFo Sans** *(fallback: Roboto Mono)*
  - Teleport / Voxbox wordmarks (Pedals screen) → **Conthrax Bold** *(fallback: a wide geometric sans)*
  - Scale: H1 32 · H2 24 · H3 18 · body 16 · caption 13.
  - **Amended 2026-07-03:** Transducer Extended and Conthrax removed from the website prototype at the user's explicit request — every display/header/wordmark use (including Teleport/Voxbox) now renders in Articulat CF, keeping the prototype to exactly two faces (Articulat CF + CoFo Sans Mono). Scope is the website prototype only; `guitargate-brand-book/`'s documented type system (which still specifies Transducer/Conthrax as locked brand faces) is untouched.
- **One shared card component.** The activity card on Home and the loop card in Play should share a single component (variant by type) so like/react/timestamp/avatar behavior is identical everywhere.

---

## 3. Play screen — primary work

### 3.1 Remove
- The entire **"⚠ OPEN — Structure to be validated"** info block. Gone.

### 3.2 Header
- Title **Play** + segmented filter: **Mine · Friends · Everyone** (keep current control). This filter drives the feed.

### 3.3 Bands layer (the "rooms" of the hybrid model)
- Add a horizontally-scrolling **Bands** strip directly under the header: small circular/group tiles ("+ New band" first, then the member's bands).
- Tapping a band → a **Band space**: the same feed UI, scoped to that band, with a composer that opens a loop *to that band*. Keep it shallow — no real-time, no roles, no settings. A band is just a persistent group a loop can be opened into.
- Seed 2–3 demo bands (e.g. "Tuesday Night Jam", "Blues Essentials Cohort").

### 3.4 Composer
- Top-of-feed pill + `+`. Posting **opens a loop into the feed** (and, if inside a band, into that band).
- Placeholder copy — default to on-register: **"Leave a loop open…"** (alternates if you prefer: "Open a loop…", "Share a loop for someone to join…"). Avoid pure broadcast phrasing like "Share what you're playing" per voice guardrails. This copy is explicitly adjustable.

### 3.5 Loop card (feed item)
Each card represents **an open loop**:
- Header: avatar · name · `·` · relative time · (optional band name if posted to a band) · overflow `…`.
- Body: waveform placeholder + loop name in mono, e.g. `[ Cliffs of Dover — take 2 ]`.
- **Action row (all four):**
  - ♥ **Like** (count) — tap to like; no part required.
  - ↩ **React** (count) — opens a comment-style thread (short text reactions). This is *not* the like.
  - **Add your part** — the join/invitation CTA (the heart of the open-loop model).
  - **Load to pedal** — pushes the loop to the device.
- Overflow `…` → **Share** (external — see 3.7), plus minor actions (save, report) as placeholders.
  - **Amended 2026-07-02:** built as a direct Share icon button next to Load to pedal, not behind an overflow `…` menu. Correct as built — an overflow menu whose only item is Share doesn't earn the extra tap; revisit only if "save" / "report" or other minor actions actually get built out.

### 3.6 Loop detail page
- Tapping a card opens a **loop detail** view: the loop, **Add your part**, the **React** thread, **Like**, **Load to pedal**, and a **Share** menu. This is the "each loop's own page" referenced in decision #3.

### 3.7 External share artifact (decision #2 + #7)
- From a loop's overflow `…` or detail-page **Share**, open a **preview of the open-loop invitation card**:
  - A generated **SVG pattern** as the card image (placeholder generative pattern is fine — final pattern TBD), the loop name, a single CTA (**"Come play this"** / **"Add your part"**), and a link/QR placeholder back into the app.
  - Reward/incentive does **not** appear on this outward card.
- Targets shown as placeholders (IG / Messages / Copy link). No live platform integration needed.

### 3.8 Empty / first-run state (decision #10)
- **Mine** with zero loops → friendly prompt: "You haven't opened a loop yet" + CTA to open one.
- **Everyone** is **always seeded** with demo loops so the tab never looks dead. Even on first run, a new member dropping into Everyone sees an active community.

### 3.9 Incentive teaser (decision #8 — numberless, but no longer "quiet")
- **Amended 2026-07-02:** originally specced as a muted footer row below the feed. Kept its position at the bottom of the flow (above the bottom nav), but restyled with real visual contrast — bordered card, filled icon badge, bold label — instead of a low-contrast caption row. The "no numbers, no credit math" constraint still holds — only the *contrast/weight* changed, not the position or the content restraint.
- It opens a simple **milestone ladder** page: sticker pack → picks → hat → hoodie, shown as a tangible "you earned your patch" ladder. **No counts, no credit values, no "refer & earn" language.** Caregiver framing only.

---

## 4. Home screen — tightening

The Home build (Live Now · Continue · What Members Are Playing · Go to Play) is the right answer to "what does Home-as-community-energy render" — lock it. Tighten for consistency:

- **Polymorphic activity cards.** "shared a loop" cards (Sarah, Priya) carry the full loop-card primitives (Like, React, **View in Play →**). "completed a lesson" cards (Marcus) are lighter — no Add-your-part, no Load-to-pedal; they're activity notes, optionally with Like only. Render actions by card type.
- **Consistency with Play.** Reuse the shared card component; same heart/react icons, same timestamp format, same avatar placeholders as the Play feed.
- **Deep links.** "View in Play →" navigates to the Play tab focused on that loop (loop detail or feed-scrolled-to-card). "Go to Play →" navigates to the Play tab. "Continue where you left off" resumes in Learn. "Live Now" tiles open a placeholder live view.
- **Header.** `GUITARGATE` wordmark (Transducer) + avatar (Account menu).

---

## 5. Learn / Pedals (light pass only)
Not the focus, but make them non-broken so the demo can tab through all four:
- **Learn:** Paths · Courses · Song lessons · Library (search/filter). Placeholder content is fine.
- **Pedals:** Teleport (register, songs on device, settings) + a Voxbox slot ("when it ships"). Teleport/Voxbox wordmarks in Conthrax. Placeholder content fine.

---

## 6. Grayscale tokens (use these exactly — from IA Appendix A)

- Ink / text: `#242321`
- Secondary text: `#8C8784`
- Borders / dividers: `#EDECEB`
- Surface: `#FFFFFF`
- Page background: `#FAF9F8`
- Media / waveform placeholders: solid `#EDECEB` fill, thin `#8C8784` border, centered mono label.

**No other colors.** No purple, no orange, no accent. (Accent ramps are a deliberate post-sign-off phase.)

---

## 7. Voice & copy

**Say:** Loop someone in · Save them a seat · Come play this · Leave it open · Add your part · The band you always wanted — wherever you are.
**Never:** Go viral · Grow your audience · Share to unlock · Refer & earn · Build your following · leaderboards / clout / "your following".
**Mantra:** Keep it in your hands. **Promise:** You'll play more.

Test every label: would it make a shy bedroom player feel *generous*, or feel like a *marketer*? If the second, rewrite it.

---

## 8. Out of scope / deliberately deferred (do not build)

- Brand accent color (monochrome only for this pass).
- Real referral numbers, credit math, leaderboards, or any visible economics.
- A real audio engine — loops/waveforms are visual placeholders.
- Real recording for "Add your part" — a placeholder flow/modal is enough.
- Live real-time infrastructure for Bands — keep bands lightweight and shallow.
- The final external-share SVG pattern — placeholder generative pattern only.
- Live social-platform share APIs — placeholder targets only.

---

## 9. Acceptance checklist

- [ ] Play "OPEN — Structure to be validated" block removed.
- [ ] Mine / Friends / Everyone filter drives the Play feed.
- [ ] Bands strip renders under the Play header; tapping a band opens a scoped Band space with its own composer. 2–3 seeded bands.
- [ ] Composer posts a loop to the feed; on-register placeholder copy (no broadcast phrasing).
- [x] Loop card shows **Like (♥)**, **React (comments)**, **Add your part**, **Load to pedal**, and **Share** — built as a direct icon button rather than an overflow `…` menu; confirmed correct 2026-07-02 (see §3.5 note).
- [ ] Like and React are visibly distinct behaviors (like = tap; react = comment thread). Like works without adding a part.
- [ ] Loop detail page exists with Add-your-part, React thread, Like, Load to pedal, Share.
- [ ] External Share opens an open-loop invitation card preview (SVG pattern placeholder + loop name + CTA + link/QR). No reward on the outward card.
- [ ] Empty Mine → first-loop prompt; Everyone always seeded (never empty).
- [ ] Quiet "Loop someone in" teaser → numberless milestone ladder (sticker → picks → hat → hoodie).
- [ ] Home activity cards are polymorphic (loop-share vs lesson-completion) with correct actions; reuse the shared card component.
- [ ] "View in Play →" deep-links into Play; "Go to Play →" / "Continue" / "Live Now" all navigate.
- [ ] Bottom nav consistent on every screen; Play centered/active styling correct.
- [ ] Brand fonts loaded with the specified fallbacks; grayscale tokens applied; no accent color anywhere.
- [ ] All four tabs are navigable without a broken view.

---

*v0.1 — encodes the 10 locked decisions. "Bands" unifies the hybrid Rooms layer (#1) with the lightweight band entity (#9); flag if those were meant as separate objects. Monochrome is intentional pending Michael's flow sign-off.*
