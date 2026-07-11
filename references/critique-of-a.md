# Critique of Variant A (internal — not for review)

## What works
- Type stack is on-brief: Fraunces display + Newsreader body + Schibsted Grotesk UI. Three roles, no overlap, anti-defaults explicit.
- Ember accent is reserved correctly: only on section numbers, em tags, hover, and the active essay title. Nothing competing.
- Layout is single-column at 720px max, which holds up at 1440px and shrinks cleanly to 375px. No breakpoints fighting the design.
- Mobile essay-list grid reflows correctly: 1-2-3 with date/label stacking.
- Reading shelf is a 1-2 col grid separated by hairlines, not cards. On-brief.
- Atmospheric layer (grain + radial gradient) creates paper-real depth without competing with content.
- The "Pending" placeholders for Topmate + LinkedIn handle are honest — opacity 0.6 marks them as awaiting the right URL.

## What is weak — and these are the things Variant B must fix

### 1. Hero is a "what" paragraph, not a "who" paragraph
A lands well as a *positioning* page. But the user said the audience is "someone who wants to know more about me." A's hero is a thesis statement. The thesis is on Substack. The page should introduce the *person* first and the thesis second. The "I" sentence is buried in the Now section.

**Fix:** The opening line should be about the *person*, not the *work*. Something closer to "I am Aditya" or a short scene, not a stack of nouns.

### 2. The "Now" section is too long
A's "Now" section does three things: introduces the career arc, states a public thesis, and gives personal anchors (family, body, reading). These should breathe. Right now they're crammed into one section and feel CV-adjacent.

**Fix:** Split "Now" into two distinct sections: **Who** (short — career arc + identity, 2 paragraphs max) and **What I care about** (personal anchors, slightly lyrical, broken into 3 discrete cards or stacked fragments). Or alternatively, drop the career detail and lead with the *current moment* in a way that earns the reader's attention.

### 3. The CTA row is timid
Two buttons, both equal weight. The "Topmate · TBD" button is disabled-aria but still takes a slot. The Substack CTA is the correct primary, but the secondary is essentially noise.

**Fix:** Single primary CTA — Substack. Reach section handles the secondary channels. Don't double up.

### 4. The essay list is functional but reads like a database
Counter-based numbered list with title / sub / date. It's *fine* — not bad, but the three-part essay is a single work. Treating it as a list of three items understates it.

**Fix:** Lead with the trilogy as a single featured work, then the secondary essays below. Or collapse the three into a single entry with a "Three parts" sublabel.

### 5. The reading shelf is competent but reads as "books I should have read"
The one-line notes are tight, but the framing ("books I keep returning to") is a slightly cliché curator register. And the six titles include some that are obvious enough that they don't signal taste as much as signal "I read."

**Fix:** Curate fewer (3-4) and choose more specifically. The point isn't to look well-read; it's to look *distinctive*. The Hofstadter + McGilchrist + Attia trio says more than six. Or restructure the shelf by *what they did for you* rather than just title/author/note.

### 6. Copy still has a few AI patterns that slipped through
- "I am increasingly convinced that..." — this is the "increasingly" pattern, mildly AI.
- "The book I wish I had read at 19" — a touch too quotable, polished.
- "Two pages that have outlasted two hundred page books on strategy" — same.
- "I am wary of easy answers, including the easy answers of my own tradition" — strong line, but the construction is symmetrical in a way his own writing would not do.

**Fix:** Inject the asymmetric roughness his style atoms called for. Vary sentence length more. Cut the more quotable phrasing in favor of something more direct.

### 7. Visual hierarchy is correct but emotionally flat
The page reads as designed. It does not yet read as *him*. A is what a thoughtful designer's site looks like. B should be what *his* site looks like. The difference: the asymmetry, the voice, the specific rhythm.

**Fix:** Trust the type more. Let display sizes get bigger in one place (hero) and let the body breathe in another (Now). Don't make every section the same weight.

### 8. The "Reach" section duplicates the top CTA
"Substack" appears as both the primary CTA in the hero *and* the first item in Reach. This is a small thing, but it suggests the page hasn't decided what the top CTA is for.

**Fix:** The hero's primary CTA is "Subscribe on Substack." The Reach section's Substack line becomes the long-form pitch: "If you want a long-form thing, this is where it lives." Differentiate the two or merge.

## What carries over to B
- Palette (ink/paper/ember) — works
- Type stack — works
- Single column, 720px max — works
- Atmospheric grain + radial gradient — works
- Section number pattern (I, II, III, IV) — works
- Reveal animation (IntersectionObserver) — works
- Mobile breakpoint reflow — works
- Honest "pending" placeholders for Topmate + LinkedIn — keep, mark clearly

## What B does differently (the point of the comparison)
1. Open with the *person*, not the *thesis*
2. Cut the CTA duplication
3. Restructure "Now" — shorter, more breathing
4. Featured-essay treatment for the trilogy
5. Reading shelf: 4 books, structured by *what they did for you*
6. Sentence rhythm: more asymmetric, less quotable
7. Hierarchy: bigger hero, smaller mid-page
8. Add a "current" beat at the very top — a single dated line, like a journal entry — to signal liveness
