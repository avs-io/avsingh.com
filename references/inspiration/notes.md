# Inspiration Notes — 7 Stellar Personal Websites

> For **avsingh.com**. Hand-picked for sharing our brief: long-form essayists, type-driven, warm-serious tone, no startup aesthetic. Compiled 2026-07-11.

---

## 1. Craig Mod — `craigmod.com`

**URL:** https://craigmod.com

**What makes it work:** A "small nook on the web" built around a single, patient typographic system. Mod has explicitly described the site as an act of typographic meditation — FF Meta Serif and Sans across the whole thing, with proper small caps, drop caps in blown-up bold Sans, and carefully reconsidered margins. The voice is conversational and gently self-deprecating ("little nook," "I'm not a total nudnik"); the layout is monastic. Photography appears as full-bleed warmth in the middle of paragraphs of plain prose. It reads like a beautifully typeset book that happens to load in a browser.

**3 things to steal:**
1. **One type family for everything.** FF Meta Serif for prose, FF Meta Sans for drop caps, headings, small caps. The discipline of a single family gives the whole site the consistency of a printed page.
2. **Drop caps as ornament.** Blowing the Sans up large reveals weird quirks in the J, T, Q, F — turning typography itself into illustration. Cheap, distinctive, instantly readable as "this person cares about print."
3. **Full-text RSS + comments removed.** The funnel goes to email, not engagement. Removes all visual noise (no comment counts, no avatars) and treats writing as a one-to-many broadcast, not a conversation.

**3 things to skip:**
1. **Cloudflare Turnstile challenge** that gates the homepage on first load — adds friction and visual jitter that fights the calm tone.
2. **Mixing newsletter CTAs, books-for-sale, and essays in a single scroll** — useful as a hub, but visually competes with the essays. For a focused essay site, separate those more cleanly.
3. **Editorial footnote superscripts in essays** — charming for a book, noisy on the web. Use inline links instead.

**Palette / Type / Motion:**
- **Palette:** warm off-white background, near-black ink, one or two photographic accent colors per page. No brand colors.
- **Type:** FF Meta Serif (body, prose) + FF Meta Sans (display, drop caps, small caps). Generous leading (~1.6), restrained measure (~65ch).
- **Motion:** essentially none. No scroll animation, no parallax, no fade-ins. The discipline of stillness *is* the motion signature.

**Screenshots:**
- https://craigmod.com/images/homepage/tbot/tbot_2025.jpg (homepage hero, photo + book promo)
- https://craigmod.com/essays/images/hello_again/helloagain01.jpg (article body showing drop caps and rhythm — from his own design essay)
- https://craigmod.com/essays/images/hello_again/phone-bio.png (mobile typography on the bio page)

---

## 2. Robin Sloan — `robinsloan.com`

**URL:** https://www.robinsloan.com

**What makes it work:** A literary homepage treated as a *directory of intentions* rather than a sales page. The site opens with a one-line identity ("Robin Sloan — a creative industrialist") and then a short, plain paragraph listing what he is (novelist, founder, app-maker), followed by * * * separators and section headers for Novels / Novellas / Short Stories / Notable Essays. Every link has utm_source parameters for analytics. The whole thing feels like the front matter of a collected works — quiet, confident, slightly old-fashioned. His lab newsletter ("too nerdy for my main newsletter") is a separate, equally calm site.

**3 things to steal:**
1. **Plain-text "directory" homepage.** No hero image, no card grid, no "Hi, I'm Robin" hero. Just headers and bullet lists, separated by * * * — the same convention as a book frontispiece.
2. **Branded utm_source on every outbound link.** Tags every external link with `utm_source=Robin_Sloan_sent_me`. A signal-of-life that quietly tracks reach without dashboards or pixels.
3. **Two parallel publications** (main newsletter + lab) with explicit positioning ("too nerdy for my main newsletter"). Lets the reader self-select register without splitting the brand.

**3 things to skip:**
1. **No clear visual identity beyond typography.** Could feel interchangeable with any other text-only author site. A subtle mark or color would help.
2. **Star markers (★) on selected works** are easy to miss and easy to over-curate. Choose one canonical "current project" rather than several.
3. **Analytics-by-utm only.** No first-party analytics means no real understanding of which essays earn attention. Pair with a small reader signal.

**Palette / Type / Motion:**
- **Palette:** white background, near-black text, occasional blue link underline. Effectively monochrome.
- **Type:** a humanist serif (looks like a Source Serif / Tisa / Lora family) for body, sans-serif for nav and metadata. Restrained italic for emphasis.
- **Motion:** none. Static HTML. RSS-first.

**Screenshots:**
- https://www.robinsloan.com/ (homepage, directory of works)
- https://www.robinsloan.com/lab/ (lab notebook — same template, slightly more informal)
- https://www.robinsloan.com/notes/home-cooked-app/ (long-form essay with image embeds — the "An app can be a home-cooked meal" piece)

---

## 3. Dustin Curtis — `dustincurtis.com`

**URL:** https://dustincurtis.com

**What makes it work:** The canonical *business-card website*. One H1 ("Dustin Curtis"), three lowercase noun phrases ("designer, investor, nomad" / "builder of interfaces between machines and humans"), and a four-link list (email, imessage, thoughts, writing, travel). Then nothing. A live visitor counter ("14,324") at the bottom is the only motion. The whole page is the literary equivalent of a handshake — first impression in five seconds, total comprehension in five more. Famous in design circles since the late 2000s; covered by Smashing Magazine's "About Page" roundup as the ur-example of using the about page as the home page.

**3 things to steal:**
1. **One screen, no scroll.** The homepage is the entire site. For a personal landing page that links out to a real blog elsewhere, this is the move.
2. **Two lines of identity.** The H1 is the name; the next line is three or four lowercase nouns. This pattern beats "I'm a designer and developer passionate about…" every time.
3. **No marketing language.** "Builder of interfaces between machines and humans" is the only "about" copy on the site. Trust the reader to be curious.

**3 things to skip:**
1. **Live visitor counter.** It dates the site (2009-vibe) and adds noise. Modern equivalent would be a static "X essays since 2014" if you want any number at all.
2. **Mixing personal contact (email, imessage) with public links (thoughts, writing) on one row** — slight tension. Consider separating DMs from broadcasts.
3. **Total absence of context** — readers arriving from search have no hook. A single 80-word "what I write about" paragraph below would not hurt.

**Palette / Type / Motion:**
- **Palette:** white background, black text, system-link blue for URLs.
- **Type:** system serif (looks like a default macOS / iOS font stack). No webfont — explicitly low-effort.
- **Motion:** a ticking visitor counter (one digit animates as you load). Otherwise completely still.

**Screenshots:**
- https://dustincurtis.com/ (the homepage itself — visit-and-screenshot)
- https://archive.smashing.media/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/78cff4fa-b468-47d9-b948-d8b594889b7d/about-dustin-curtis.jpg (Smashing Magazine 2009 screenshot of an older, more elaborate version with the famous "death clock" timeline)

---

## 4. Sean Carroll — `preposterousuniverse.com`

**URL:** https://preposterousuniverse.com

**What makes it work:** A working academic's hub built on WordPress (designed by Digital Executrix) that succeeds by *not pretending to be a brand*. The homepage leads with a headshot + bio paragraph in the warm, slightly self-deprecating register of a public intellectual, then a horizontal icon-row of social links (Bluesky, YouTube, Reddit, Amazon, Google Scholar, INSPIRE, PhilPeople, IMDb), then "Latest and Greatest" — a flat stream of podcast episodes, blog posts, and book promos, each with a thumbnail and date. The /about page is unusually long and human: it includes his academic genealogy (advisor → advisor → advisor), his collaborators, his high-school debate career, and a "Stuffy Official Bio" section explicitly framed as the institutional version of himself. It is unfashionable, generous, and completely unembarrassed about being a personal site.

**3 things to steal:**
1. **Two bios, side by side.** A warm human one in your own voice, then a "Stuffy Official Bio" in third-person institutional voice. Lets you serve journalists and grant committees without sounding like a CV.
2. **Icon strip, not icon wall.** One row of social links at the top, each ~64px, all grayscale. No "follow me everywhere" energy — just quick exits.
3. **Reverse-chronological "Latest and Greatest"** as the homepage's primary content surface, with category labels (Podcast / Essay / Event) baked into the typography, not into a tabbed nav.

**3 things to skip:**
1. **WordPress defaults bleeding through** (widget blockquote styling, calendar widget, "Scroll to Top" button, "A2A" share-this cruft at the bottom). Custom block theme or static rebuild would clean this up.
2. **Two full-width header photos** on the about page that compete with the prose. Pick one.
3. **The full collaborators list** on /about — charming but a privacy/career-maintenance headache. A "selected collaborators" link is enough.

**Palette / Type / Motion:**
- **Palette:** warm off-white, near-black, no brand color. Photo accents only.
- **Type:** a humanist serif for body (likely a system or Adobe Fonts pick — looks close to FF Tisa or Source Serif); sans for headings.
- **Motion:** none. No scroll-jacking, no fade-ins. WordPress-block defaults.

**Screenshots:**
- https://www.preposterousuniverse.com/ (homepage, "Latest and Greatest" stream)
- https://www.preposterousuniverse.com/about/ (the long-about-page-with-genealogy layout)
- https://www.preposterousuniverse.com/wp-content/uploads/library-big.jpg (the large Sean Carroll hero photo from the homepage)

---

## 5. Patrick McKenzie — `kalzumeus.com`

**URL:** https://www.kalzumeus.com

**What makes it work:** A 20-year-old WordPress blog that has never pretended to be more than that. The homepage is a flat, well-padded markdown document with H1 ("Kalzumeus Software"), a three-paragraph "I'm Patrick McKenzie" bio (signed "patio11"), and then three flat-link sections: Famous Essays, Recent Essays, and an All 575 Essays archive link. Every essay is a wall of prose with H2s, the occasional image, and almost no chrome. The site is famous for *the writing*, not the design — and the design's job is to get out of the way of the writing. There is no nav menu, no sidebar, no tags, no related-posts module. The whole site has the feeling of a man who has thought about information design at scale and decided that a single Google-able permalink per essay is the only architecture that matters.

**3 things to steal:**
1. **One H1, one bio paragraph, three link lists.** The homepage is the equivalent of a single, well-formatted letter. Boring is a feature.
2. **A "Best Work" / "Greatest Hits" curated list as the second block.** Tells the new reader what to read first without making them guess.
3. **Plain permalinks dated (`/2014/11/07/doing-business-in-japan/`)** — stable, archival, and a signal that you take longevity seriously.

**3 things to skip:**
1. **No real navigation or taxonomy.** New readers on mobile can't easily browse 575 essays. A single archive page sorted by topic or recency would help.
2. **WordPress default styling bleeding through** — blockquotes, code blocks, and tables use Twenty-Something defaults. Worth a light typographic pass.
3. **Inline image sizing in essays is inconsistent.** Some posts have full-width photos, some have left/right floats, some have none. A single essay template would tighten the visual.

**Palette / Type / Motion:**
- **Palette:** white, near-black, blue links. Zero decoration.
- **Type:** WordPress default serif (probably a stock theme stack — looks close to a Garamond/Georgia fallback).
- **Motion:** none. RSS-first, no JS to speak of.

**Screenshots:**
- https://www.kalzumeus.com/ (homepage — flat, dated, all-business)
- https://www.kalzumeus.com/greatest-hits/ (the "Best Work" curated list)
- https://www.kalzumeus.com/2012/01/23/salary-negotiation/ (a typical long-form essay layout)

---

## 6. A Working Library — `aworkinglibrary.com`

**URL:** https://aworkinglibrary.com

**What makes it work:** Mandy Brown's site reads like a card catalog crossed with a commonplace book. The homepage opens with a *Selected essays* list — five essay titles, each followed by a single italic epigraph from the essay — then a *Writing* list (dated entries with one-line excerpts), then a *Reading* list (book + author). No nav menu. No search bar. No sidebar. The /about page is itself an essay, opening with two epigraphs (Woolf and Manguel on the nature of reading) before explaining the project. The whole site is a single instrument — it exists to host three kinds of entries (essays, reading notes, books-read) and to make the slow, deliberate accumulation of all three feel like the *point*.

**3 things to steal:**
1. **Epigraphs as the primary UI.** Every essay on the homepage is shown as title + italic epigraph. The reader is invited in by the prose, not the headline.
2. **Three content types, named clearly** — *Selected essays*, *Writing* (dated stream), *Reading* (books). The "reading" category treats books-read as first-class content, which positions the author.
3. **An /about page that's an essay, not a bio.** Explains the *project*, with epigraphs and a thesis statement ("I use 'work' to mean not only our waged work, but our care work…"). Aligns the reader before they read anything else.

**3 things to skip:**
1. **No visible dates on the homepage's "Selected essays"** — the entries are presented as eternal, which is elegant but makes the site feel unmaintained. Add a "last updated" line.
2. **No RSS discoverability hint.** This is a slow-publish site; readers should be nudged toward the feed or newsletter on first visit.
3. **Footer link to "everything changes\\\\A creative space to practice the future"** — a sister project, but the typography is jarring and unbranded relative to the rest. Either elevate it or drop it.

**Palette / Type / Motion:**
- **Palette:** warm off-white (slight cream tint), near-black ink, no accent color.
- **Type:** a humanist serif throughout (looks like a Source Serif or Spectral). Italics used liberally and gracefully.
- **Motion:** none. Static, hand-built feel.

**Screenshots:**
- https://aworkinglibrary.com/ (homepage, three stacked lists)
- https://aworkinglibrary.com/about (the essay-as-about-page)
- https://aworkinglibrary.com/writing/coming-home (typical essay template with epigraph at top)

---

## 7. The Marginalian (formerly Brain Pickings) — `themarginalian.com`

**URL:** https://www.themarginalian.org

**What makes it work:** A 20-year-old one-woman literary site (Library of Congress permanent web archive, 1,664+ pages indexed) that has resisted every temptation to become a media brand. The design is unapologetically *book-like*: a serif body face, generous leading, images centered in the column, a small "BP" / monogram glyph between posts on the homepage, and almost zero chrome. The /about page opens with a single full-bleed portrait photo of Maria Popova and three short paragraphs in first-person, followed by a long, hand-curated grid of "favorite pieces from the years" — each a thumbnail + title + link. The site is also notably *honest* about its funding model (Bookshop.org and Amazon affiliate links, "goes straight back into my own colossal biblioexpenses") in a footer note that doubles as voice. It is the warmest, slowest, most literary site on this list, and the only one that openly treats the web as an archive rather than a feed.

**3 things to steal:**
1. **Single full-bleed portrait as the entire /about hero** — followed by 200 words, then a curated grid. The portrait is the brand.
2. **A monogram glyph between posts** on the homepage (her old "BP" / new TM monogram). Acts as a visual breath mark — slows the reader down between entries without adding chrome.
3. **A "favorite pieces" curated grid on /about.** Instead of "recent posts," surface the work you'd most want a new reader to land on. This is the most generous thing a personal site can do.

**3 things to skip:**
1. **1,664+ pages of paginated archives with Next/Last buttons.** The pagination is functional but uninspiring. A yearly index page or an "essays by theme" page would serve the archive better.
2. **Affiliate-link disclosure in the footer** is honest but feels buried. Move to a dedicated /colophon page and link to it from the footer — keeps the prose clean.
3. **WordPress image URL conventions** (`i0.wp.com/...`) and Jetpack-style image resizing params (`?fit=320%2C442&ssl=1`) leak into the source. A static rebuild would tidy the markup.

**Palette / Type / Motion:**
- **Palette:** warm off-white, near-black, occasional color photographs. No brand color.
- **Type:** a refined transitional serif for body (looks close to Mercury or a hand-tuned FF Tisa), italic for prose emphasis. Small caps for some section labels.
- **Motion:** none. No scroll effects, no fade-ins. A faint monogram glyph is the only "ornament."

**Screenshots:**
- https://www.themarginalian.org/ (homepage feed of long essays)
- https://www.themarginalian.org/about/ (portrait + curated grid)
- https://www.themarginalian.org/2021/10/22/brain-pickings-becoming-the-marginalian/ (a typical long-form essay — image + prose, image + prose)

---

## Cross-cutting patterns (cheat sheet)

| Pattern | Appears in |
|---|---|
| **Single humanist serif throughout** | Mod, McKenzie, Brown, Carroll, Popova |
| **One screen / one page / no nav** | Curtis (extreme), Sloan (soft) |
| **Epigraphs as UI** | Brown, Popova, Mod (footnotes), Sloan (italics) |
| **Curated "best of" / "selected" surface** | McKenzie, Brown, Popova, Mod |
| **Two bios (human + stuffy)** | Carroll, Sloan |
| **RSS-first, no comments** | Mod, Sloan, Curtis, McKenzie |
| **No motion** | All 7. This is the motion signature. |

**Word budget used:** ~2,650 words.