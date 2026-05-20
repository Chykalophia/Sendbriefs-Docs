---
title: Set up your first workspace
description: A workspace is your agency's container for clients, briefs, team members, and billing. About 5 minutes.
sidebar:
  order: 3
---

import Placeholder from '../../../components/Placeholder.astro';

<aside class="sb-tldr">
<p class="sb-tldr-label">TL;DR</p>
Name your workspace, pick your time zone, set your branding (logo + brand color), invite your team. You can change everything later.
</aside>

## What a workspace is

A workspace is your agency's container. Inside it lives:

- **Clients** — the organizations you report to.
- **Briefs** — the templates and sent reports.
- **Members** — your team (roles: Owner, Admin, Editor, Viewer).
- **Integrations** — the data sources connected at the workspace level.
- **Billing** — the subscription paying for it all.

Most agencies need exactly one workspace. You'd only want multiple if you're operating two distinct brands that don't share clients or team members.

## The setup screen

When you first land in the app, you'll see a 4-step onboarding panel on the right side of the screen.

<Placeholder type="screenshot" caption="First-time onboarding panel — 4 steps, with progress bar" />

### Step 1: Name and time zone

Give the workspace your agency's name. This is what clients will see if you forget to override branding on a brief (don't worry, you'll get plenty of chances to set per-client branding later).

Time zone affects two things:

- **Scheduled delivery times** are interpreted in this time zone. "Send Monday at 9am" means 9am here.
- **Reporting period boundaries** (e.g., "this month") are computed in this time zone.

If your clients are in different time zones, you can override per-client later. Most agencies pick the founder's time zone here.

### Step 2: Branding

You can set a logo and a brand color now or skip and come back. Either way:

- **Logo**: PNG or SVG, square, at least 256×256. Used in the workspace nav and (by default) on every client brief.
- **Brand color**: A hex code (we'll show a picker). Used for CTA buttons and accent text inside briefs.

These are defaults. Each client can override them, which matters when a white-label agency reports under three different sub-brands.

### Step 3: Invite your team

Add team members by email. Each gets a role:

| Role | Can do | Can't do |
|---|---|---|
| **Owner** | Everything, including delete the workspace | n/a |
| **Admin** | Manage members, integrations, billing | Delete workspace |
| **Editor** | Create/edit briefs, manage clients | Manage members, billing |
| **Viewer** | Read briefs and reports | Edit anything |

You can change roles later from **Settings → Members**.

**Common gotcha:** A "Viewer" can still see all data inside any brief in the workspace. If you want a teammate to only see specific clients, use [client-scoped roles](/features/workspaces/#client-scoped-roles) (Pro plan and above).

### Step 4: Pick a plan (or stay on trial)

The 14-day trial unlocks everything. You don't need to pick a plan now.

When you're ready, [Billing & plans](/billing/plans/) explains what each tier includes. For most agencies, the **Studio** plan covers 5–25 clients comfortably.

## Verifying domain ownership (optional but recommended)

If you want briefs to send from `reports@youragency.com` instead of `reports@sendbriefs.com`, you'll need to verify your domain. Go to **Settings → Sending domains**:

1. Add your domain.
2. Copy the three DNS records (one MX, two TXT — for SPF and DKIM) into your DNS provider.
3. Click **Verify**. Most providers propagate in under 5 minutes; some take up to 24 hours.

We won't send from your domain until DKIM passes — this prevents accidental spoofing.

[More on sending domains →](/features/notifications/#sending-domains)

## Next: connect your first client

You now have an empty workspace. Time to add the first client and connect their data.

[Connect your first client →](/getting-started/connect-first-client/)
