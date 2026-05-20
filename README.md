# SendBriefs Docs

Documentation site for SendBriefs, served at **docs.sendbriefs.com**.

Built with [Astro](https://astro.build) + [Starlight](https://starlight.astro.build). Static output. Designed to match the SendBriefs marketing brand and to be exceptionally readable for neurodivergent and ADHD users (Comfort Panel with dyslexia font, density, skim mode, high-contrast, reduce-motion).

---

## Quick start

```bash
pnpm install
pnpm dev
```

The site runs at `http://localhost:4321`. Edits to any `.md` / `.mdx` / `.astro` file hot-reload.

To produce a production build:

```bash
pnpm build       # outputs to dist/
pnpm preview     # serves dist/ locally for verification
```

---

## Project structure

```
SendBriefs-Docs/
├── astro.config.mjs            # Astro + Starlight config (sidebar, integrations, custom CSS)
├── package.json
├── tsconfig.json
├── playwright.config.ts        # accessibility + smoke test config
├── public/
│   ├── logo.svg                # SendBriefs mark (matches marketing)
│   ├── logo.png
│   └── favicon.svg
├── src/
│   ├── content.config.ts       # Astro content collection for Starlight
│   ├── content/docs/           # All page content (one .md / .mdx per page)
│   │   ├── index.mdx           # Homepage
│   │   ├── 404.md              # Custom 404 page
│   │   ├── getting-started/    # 6 pages — sequential onboarding track
│   │   ├── features/           # 6 pages — core feature reference
│   │   ├── flows/              # 5 pages — workflow recipes
│   │   ├── billing/            # 4 pages — plans, invoices, plan changes
│   │   └── api/                # 1 page — Coming Soon
│   ├── styles/
│   │   ├── brand.css           # SendBriefs design tokens + Starlight overrides
│   │   ├── comfort.css         # Comfort-mode classes (dyslexia, density, etc.)
│   │   └── fonts.css           # Self-hosted Inter, Atkinson Hyperlegible, JetBrains Mono
│   ├── components/
│   │   ├── SendBriefsMark.astro
│   │   ├── Placeholder.astro   # Dev-only screenshot/video placeholder
│   │   └── ComfortPanel.astro  # Floating reading-comfort settings panel
│   └── overrides/              # Starlight component overrides
│       ├── Head.astro          # Adds pre-hydration Comfort script, OG meta
│       ├── Header.astro        # Adds backdrop blur + shadow to sticky header
│       ├── Footer.astro        # Custom branded footer + mounts ComfortPanel
│       └── SocialIcons.astro   # Adds "Open dashboard" CTA + Linkedin/email
└── tests/
    ├── a11y.spec.ts            # axe-core scans every route
    └── smoke.spec.ts           # routes load, Comfort Panel works
```

---

## How to add a new page

1. Pick the right section folder under `src/content/docs/`.
2. Create a new `.md` or `.mdx` file. Filename becomes the URL slug.
3. Add frontmatter:

```yaml
---
title: Your page title
description: One-sentence summary (used for SEO + sidebar tooltips).
sidebar:
  order: 7   # Optional: control ordering in the section
---
```

4. Write the content. If you need screenshots/videos that you'll add later, use `<Placeholder>` (see below).
5. Add the page to the sidebar in `astro.config.mjs`. (Pages aren't auto-added.)
6. Save. The dev server hot-reloads.

### Using the Placeholder component

Placeholders are dev-only — they render visibly in `pnpm dev` and are stripped from production builds.

```mdx
import Placeholder from '../../../components/Placeholder.astro';

<Placeholder
  type="screenshot"
  caption="Brief composer with hover state visible"
  aspect="16/9"
/>
```

Props:

| Prop | Type | Default | Notes |
|---|---|---|---|
| `type` | `'screenshot' \| 'video' \| 'diagram'` | `'screenshot'` | Just affects the label |
| `caption` | string | **required** | Describe what should go there |
| `aspect` | string | `'16/9'` | CSS `aspect-ratio` |
| `width` | number | container width | Pixel max-width |

When you have the real asset, replace the `<Placeholder>` with an `<img>` (or `<video>`) referencing a file in `public/`. The image will automatically appear in both dev and prod.

---

## Brand fidelity

The brand is sourced from `~/Development/SendBriefs/sendbriefs_marketing/`:

- **Tokens** — `app/globals.css` (modern white surface, indigo→purple brand, post-2026-05-11 overhaul). Ported to `src/styles/brand.css`.
- **Voice** — `docs/BRAND.md`. Friday as cultural anchor. No hype words. Sentence-case headlines. Em dashes.
- **Comfort Panel** — `components/comfort/`. Re-implemented in vanilla JS (no Radix dependency) at `src/components/ComfortPanel.astro`.

If the marketing brand tokens change, update `src/styles/brand.css` to match. The header comment in that file documents the mapping.

---

## Accessibility

Every page must pass WCAG 2.1 AA. Enforced by:

```bash
pnpm test:install   # one-time: installs Chromium for Playwright
pnpm test:a11y      # runs axe-core against every route
```

The a11y tests also run each Comfort Panel mode (dyslexia font, high-contrast, large-text + spacious) and confirm they preserve compliance. See `tests/a11y.spec.ts`.

CI tip: gate merges on `pnpm validate` (which is `pnpm build && pnpm test`).

---

## Deployment

This is a static site. Build outputs `dist/` — drop that on any static host:

- **Vercel** — connect the repo, framework preset = "Astro," output = `dist`. Set `SITE_URL` env var. Done.
- **Cloudflare Pages** — same.
- **Netlify** — same.
- **S3 + CloudFront** — sync `dist/` to a bucket; point CloudFront at it.

For docs.sendbriefs.com on Vercel:

1. Create a new Vercel project pointed at this repo.
2. Set the `SITE_URL` env var to `https://docs.sendbriefs.com`.
3. Add the custom domain `docs.sendbriefs.com` in the Vercel project settings.
4. Add a `CNAME` record in your DNS for `docs.sendbriefs.com` → Vercel.
5. Wait for TLS provisioning (~30 seconds).

---

## Conventions

- **One topic per page.** If a page covers two things, split it.
- **TL;DR at the top.** Use the `.sb-tldr` HTML pattern (see existing pages for reference).
- **Internal links use trailing slashes.** Starlight expects `/foo/` not `/foo`.
- **Don't write "Learn more."** Say what they'll learn. ("Configure approvals →" not "Learn more.")
- **Friday voice.** Direct, practical, quietly confident. No hype, no exclamation marks unless load-bearing.

---

## Reading-comfort features

The Comfort Panel (bottom-right of every page) gives users:

- Text size: Small / Medium / Large
- Density: Compact / Comfort / Spacious
- Reduce motion (kills animations + transitions)
- Dyslexia-friendly font (Atkinson Hyperlegible)
- High-contrast theme (pure black on pure white)
- Skim mode (collapse paragraphs to 1 line, hover to expand)

State persists in `localStorage` under the key `sb-comfort-v1`. A pre-hydration script in `<head>` applies stored state before first paint to avoid FOUC.

These are the same toggles the marketing site offers — implementation is independent (vanilla JS here, React + Radix on marketing) but the keys and class contracts match. If we ever want to share state across sendbriefs.com and docs.sendbriefs.com, the localStorage shape is compatible.

---

## Where this project lives

This project is **standalone** — it has its own git history, its own deploys, and is **not** inside the main `SendBriefs` monorepo.

Canonical location: `~/Development/SendBriefs-Docs/`

---

## Maintenance

### Updating brand colors

1. Edit `src/styles/brand.css` — top section.
2. Run `pnpm test:a11y` to make sure new colors still pass contrast.

### Adding a new sidebar section

1. Create the folder under `src/content/docs/`.
2. Add pages with frontmatter.
3. Edit `astro.config.mjs` to add the section to the `sidebar` array.

### Updating fonts

Self-hosted via `@fontsource/*` packages. To swap a font, update the import in `src/styles/fonts.css` and the `--sb-font-*` variables in `src/styles/brand.css`.

---

## License

Internal project. Chykalophia Group, LLC. Not open-source.
