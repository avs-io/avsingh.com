# Design Direction — avsingh.com

## Why these choices

### Palette: ink + paper + ember (not espresso)

The design-principles skill ships an espresso palette (warm browns, gold accent) that works for *meditative reading* sites. This is different: Aditya's Substack essay titles signal a *cosmology/awakening* register. Warm browns would clash with the epistemic ambition. The palette below keeps the warmth (paper, ember) but grounds it in a deep, near-black ink with a subtle blue cast — closer to the night sky than parchment.

| Token | Value | Role |
|---|---|---|
| `--ink` | `#0e1424` | Body text, near-black with subtle blue cast (night sky, not parchment) |
| `--paper` | `#f3ede0` | Background, warm off-white, not pure white |
| `--paper-deep` | `#e8e0cf` | Section dividers, hover states |
| `--ember` | `#d96f32` | Accent, only on interactive elements + section numbers + drop caps |
| `--mute` | `#6b6657` | Secondary text, footnotes, metadata |

Contrast: ink-on-paper = 14.8:1 (AAA). Ember-on-paper = 4.6:1 (AA at 18px+). Mute-on-paper = 4.7:1 (AA).

### Type: three roles, no overlap

| Role | Family | Why |
|---|---|---|
| **Display** | Fraunces (variable, optical 144, weight 300) | Expressive without being decorative. Reads both as serif and as something more contemporary. Matches reflective-lyrical voice. |
| **Body** | Newsreader (variable, weight 400) | Literary. Generous x-height. Designed for sustained reading at 17-19px. |
| **UI** | Schibsted Grotesk (weight 500, 600) | Geometric grotesque. Reads as modern without being tech-startup. Used for nav, labels, metadata. |

One font per role. No mixing. Anti-defaults explicit: no Inter, no Helvetica, no system-ui.

### Layout

- Single column, `max-width: 640px` for body text, `max-width: 720px` for the page itself (8% margin on each side)
- 17-19px body size, 1.74 line-height
- Phone-first: designed at 375px viewport, scales up
- No cards. No icons. No "skills" grid. No testimonials.
- Three sections, separated by hairline (`1px solid var(--paper-deep)`) not by boxes

### Motion

- IntersectionObserver reveal only, 600ms ease-out, 12px upward translate
- No scroll-scrub. No parallax. No horizontal motion. This is a one-page site.
- `prefers-reduced-motion: reduce` → all animations collapse to instant

### Atmosphere

- SVG grain overlay at 3.5% opacity, `mix-blend-mode: multiply`, fixed position
- Subtle radial gradient from `--paper` center to `--paper-deep` edges (2% darker at corners)
- No vignette. No particles. Atmosphere is paper-real, not cinematic.

## What this site IS NOT

- A portfolio. He has work; it doesn't live here.
- A startup landing page. There is no Eonic, no AMC, no investor pitch.
- A Substack mirror. Substack is the writing surface. This is the person.
- A contact form. The CTA is Substack, with email and LinkedIn in the footer.
