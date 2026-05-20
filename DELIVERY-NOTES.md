# Delivery notes — SendBriefs Docs

> Built overnight on 2026-05-19. Peter — read this first. Everything else is in `README.md`.

## What you got

A complete, production-ready Astro + Starlight docs site for `docs.sendbriefs.com`:

- **24 documentation pages** (Getting Started, Core Features, Processes & Flows, Billing & Plans, API placeholder, custom 404, homepage)
- **Full SendBriefs brand fidelity** — colors, fonts, voice, the works
- **Comfort Panel** with all 6 toggles (text size, density, reduce-motion, dyslexia font, high-contrast, skim mode)
- **Dev-only Placeholder component** for screenshots/videos you'll fill in
- **WCAG 2.1 AA accessibility tests** (Playwright + axe-core)
- **Smoke tests** for the Comfort Panel and placeholder behavior
- **Production build verified clean** — 4 MB, 24 pages, Pagefind search built-in, zero placeholders in prod HTML

## ⚠️ Two cleanup items before you move

Two leftover files in this folder are sandbox sentinels — they have permissions the VM build couldn't remove:

- `.test` (empty)
- `.test-write` (5 bytes)
- `.git/` directory — a **partial git init** from a failed attempt. The clean git history is in the build sandbox; you'll re-init below.

Just remove all three after you move the folder.

## Move it to where it belongs

```bash
# 1. Move the folder to the canonical location
mv ~/Documents/Claude/Projects/SaaS\ Product\ Architect/SendBriefs-Docs ~/Development/SendBriefs-Docs

# 2. Clean the sandbox leftovers
cd ~/Development/SendBriefs-Docs
rm -rf .git .test .test-write

# 3. Fresh git init (now in the right place)
git init -b main
git add -A
git commit -m "feat: initial SendBriefs Docs scaffold"
```

## Then run it

```bash
cd ~/Development/SendBriefs-Docs

# First time — install everything
pnpm install
pnpm test:install   # downloads Chromium for Playwright (~150 MB, one-time)

# Day-to-day
pnpm dev            # http://localhost:4321 — hot-reloads on edits
pnpm build          # → dist/, ready to deploy
pnpm preview        # serve dist/ at http://localhost:4321 for verification

# Quality gates
pnpm test:a11y      # WCAG 2.1 AA scan of every route
pnpm test:smoke     # Comfort Panel + placeholder behavior tests
pnpm test           # both projects
```

## Deploying to docs.sendbriefs.com

1. New Vercel project pointed at this repo.
2. Framework preset: **Astro**.
3. Build command: `pnpm build`. Output: `dist`.
4. Add env var: `SITE_URL=https://docs.sendbriefs.com`.
5. Add custom domain `docs.sendbriefs.com`. Add CNAME → Vercel in your DNS.

That's the whole deploy. Static output works on Cloudflare Pages or Netlify identically.

## What's in the brand

I ported everything from `~/Development/SendBriefs/sendbriefs_marketing/app/globals.css` (the post-2026-05-11 indigo overhaul). The voice rules come from `~/Development/SendBriefs/sendbriefs_marketing/docs/BRAND.md`. The Comfort Panel is a vanilla-JS port of `~/Development/SendBriefs/sendbriefs_marketing/components/comfort/` — same localStorage key (`sb-comfort-v1`), same class contracts, no Radix dependency.

If the marketing brand tokens evolve, the only file to touch is `src/styles/brand.css`. The header comment maps each token back to its marketing equivalent.

## What I left for you (deliberate placeholders)

Every documentation page that should have a screenshot or video has a `<Placeholder>` component in its place. Run `pnpm dev` and you'll see them as dashed-bordered crates with captions describing exactly what should go there.

In production, placeholders are statically eliminated. They don't ship. Open `dist/` after a build and grep for `sb-placeholder` — you'll find zero matches.

When you have a screenshot, replace the `<Placeholder>` with a regular `<img>` referencing a file in `public/`. The MDX import for the Placeholder component can stay (unused imports are fine in Astro) or be removed.

## What it doesn't have yet

- **Real screenshots** — by design (placeholders waiting for you).
- **Real product API** — there isn't a public one yet; the API section is a "Coming Soon" placeholder page in line with what BRAND.md considers acceptable language.
- **An "Edit this page" link** — points at a `github.com/sendbriefs/sendbriefs-docs` URL that doesn't exist yet. Update `editLink.baseUrl` in `astro.config.mjs` when you create the repo (or remove the property to hide the link).
- **Analytics** — none included. Add Plausible/Fathom/Vercel Analytics in `src/overrides/Head.astro` when you want it.

## Page inventory

| Section | Pages | URLs |
|---|---|---|
| Homepage | 1 | `/` |
| Getting Started | 6 | `/getting-started/{welcome, create-account, first-workspace, connect-first-client, send-first-brief, whats-next}/` |
| Core Features | 6 | `/features/{briefs, clients, reports, workspaces, integrations, notifications}/` |
| Processes & Flows | 5 | `/flows/{monthly-reporting, client-onboarding, templating-recurring, edits-and-approvals, annual-review}/` |
| Billing & Plans | 4 | `/billing/{plans, managing-subscription, invoices, upgrading-canceling}/` |
| API | 1 | `/api/coming-soon/` |
| 404 | 1 | `/404` |

## Notes I made to myself while building this

- **The Comfort Panel uses a native `<dialog>` element** instead of Radix Dialog. Smaller bundle, native focus trap, native ESC to close, accessibility-tested. The marketing site can later be ported to this approach if you want to drop the Radix dependency there.
- **All comfort modes are tested** for WCAG compliance individually (not just default mode). See `tests/a11y.spec.ts`.
- **The skim mode is opinionated** — it collapses paragraphs to one line and reveals on hover. Headers, lists, code blocks, callouts stay fully visible. There's a small banner at the top of the page when active so the user remembers it's on.
- **Fonts are self-hosted** via `@fontsource/*` packages. No third-party font CDN, no privacy concerns, no FOUT.
- **The placeholder system uses `import.meta.env.DEV`** — Vite statically eliminates the JSX branch at build time. Truly zero bytes in production.

You can delete this file after you've moved everything.
