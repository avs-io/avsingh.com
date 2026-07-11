# avsingh.com

Personal site for Aditya Vikram Singh.

## Structure

```
/                        — variant comparison (redirected to /variant-b/ for production)
  variant-a/             — Variant A: direct brief
    index.html
    styles.css
    app.js
  variant-b/             — Variant B: critique-then-redesign (recommended)
    index.html
    styles.css
    app.js
  references/            — design rationale, briefs, copy, critique
    design-direction.md
    variant-a-copy.md
    variant-b-copy.md
    critique-of-a.md
    reading-list.md      (when subagent returns)
    inspiration/notes.md (when subagent returns)
  screenshots/           — QA screenshots
```

## Recommendation

**Variant B** ships. Reasons in `references/critique-of-a.md` and `references/design-direction.md`.

The critique-first technique surfaced five concrete failures in A that the direct brief passed through. B is the corrected version.

## Deploy

- GitHub Pages: `avs-io/avsingh.com` → custom domain `avsingh.com`
- No build step. Pure static HTML + CSS + JS.
- For production: point `avsingh.com` (and `www.avsingh.com`) to GitHub Pages.

## Open items (pending from Chief)

- Topmate handle — `topmate.io/...?` not yet known
- LinkedIn slug — `/in/aditya-vikram-singh` not available; correct handle TBD

Both rendered as honest "pending" placeholders on the site, clearly marked.
