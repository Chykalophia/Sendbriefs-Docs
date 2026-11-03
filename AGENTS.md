# SendBriefs Docs — AI Agent Rules

Astro + Starlight static site for docs.sendbriefs.com. Page content lives in `src/content/docs/`; site chrome overrides in `src/overrides/`.

## Comment policy

1. Comments explain _why_, not _what_. Don't restate the next line.
2. No history in code: no "used to / previously / now / fixed", dates, or audit/PR/ticket IDs that only record when something changed. Git and the PR hold history.
3. No reasoning journals, conversation references, hedges, emoji, "Step N" narration, or commented-out code.
4. A why-comment is ≤2 lines, present tense, next to the code it explains. Longer rationale goes in `docs/` with a link.
5. Exported APIs get a TSDoc block (purpose, params, returns, throws). Don't repeat types the signature already gives.
6. A TODO names a ticket or an owner plus a concrete action, e.g. `TODO(CU-868abc): …`. Otherwise it goes in ClickUp.
7. Nothing developer-facing ships: no `<!-- -->` in templates, emails, `.astro` or `.mdx`. Use `{/* */}` (JSX/Astro/MDX) or `{{/* */}}` (Go email templates).
8. When you change code, fix or delete the comments around it. A wrong comment is worse than none.
