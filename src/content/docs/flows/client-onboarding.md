---
title: Onboarding a new client in 10 minutes
description: A repeatable recipe for adding a new client to your SendBriefs workspace and shipping their first brief in under 30 minutes total.
sidebar:
  order: 2
---

import Placeholder from '../../../components/Placeholder.astro';

<aside class="sb-tldr">
<p class="sb-tldr-label">TL;DR</p>
Three steps: <strong>create the client record (2 min) → connect their data sources (5-10 min, mostly waiting on OAuth) → bind your house template (2-5 min)</strong>. Send a test brief in the same sitting.
</aside>

This is the same recipe we use for our pilot agencies. Once it's muscle memory, you can onboard a new client during a coffee break.

## Before you start

Have these ready:

- **Client name** and **primary contact email**.
- **Brand assets** if you're white-labeling (logo, color).
- **Data source credentials** OR a stakeholder at the client who can OAuth-approve on their side.

That last one is the long pole. If you can't reach someone with access to the client's GA4 / Stripe / etc., onboarding stalls there.

## Step 1: Create the client (2 minutes)

1. **Clients → New client**.
2. Fill in:
   - Name (legal or trade — whichever you'll see in your nav)
   - Primary recipient email
   - Time zone (defaults to workspace; override if needed)
   - Tags (e.g., `industry:ecommerce`, `tier:vip`, `owner:alex`)
3. Click **Create**.

The client record exists. Now connect their data.

## Step 2: Connect data sources (5-10 minutes)

For each source the client uses:

1. Inside the client, click **Integrations → Add**.
2. Pick the source.
3. Go through OAuth. If you have the client's credentials, do this yourself. If not, send the OAuth link to the client's contact and ask them to complete it.
4. Pick the specific property/account/store within that source.

### The "send to client" pattern for OAuth

If you don't have direct access:

1. Click **Add integration**, pick the source.
2. Click **Send to client** instead of "Connect myself."
3. Add the client's email. They get a secure one-time link.
4. They click, OAuth on their side, done.

This is the same flow we use ourselves when we onboard agencies who don't want to share credentials.

<Placeholder type="screenshot" caption="The 'Send OAuth link to client' modal with email field" />

### Standard source list for a new client

For most agencies, the first batch is:

- **Analytics** — usually GA4
- **Ad platform** — whichever the client spends most on
- **Billing/Revenue** — Stripe, Shopify, or QuickBooks depending on type
- **CRM** — if the brief includes pipeline metrics

You can always add more later. Don't connect everything on day one — connect what the first brief actually needs.

## Step 3: Bind your house template (2-5 minutes)

1. Click **New brief → From template → [your house template]**.
2. Each block's binding pre-fills based on what's available. Review.
3. Override any binding that needs to differ for this client (e.g., this client uses a custom Stripe metric).
4. Set the reporting period.
5. Click **Preview**.

If everything looks right, click **Save as draft**. Done.

## Step 4: Send a test brief (still in the same sitting)

This is where you catch problems before the client does:

1. From the draft, click **Send test to me**.
2. Open the test in your inbox.
3. Check:
   - Numbers match what's in the source platform.
   - Branding looks right.
   - No "data not found" warnings.
   - Subject line and "From" name read well.

If anything's off: fix and re-test. Most issues are binding mismatches that show up immediately.

## Step 5: Schedule recurring + assign to the cycle

Once the test brief is clean:

1. Click **Set up recurring** on the draft.
2. Pick cadence (matching your house cycle — e.g., monthly on day 3 at 9am).
3. Set approval if applicable.
4. Confirm.

The client is now on the cycle. Their next brief will fire on the next scheduled date.

## Onboarding-day checklist

Use this as a literal checklist:

- [ ] Client record created
- [ ] Primary recipient added
- [ ] Branding set (or inherit confirmed)
- [ ] Time zone correct
- [ ] At least one data source connected
- [ ] House template applied with bindings
- [ ] Preview reviewed — numbers spot-checked
- [ ] Test brief sent to internal email
- [ ] Test brief opens cleanly in inbox + PDF readable
- [ ] Recurring schedule set
- [ ] Client added to the Friday review queue

## Common bumps

### Client doesn't respond to the OAuth invite
Common. Two options: ask their team contact to make the intro to whoever holds the credential, OR ask them to grant `sync@sendbriefs.com` access in their platform and we'll connect server-side.

### Client has weird custom metrics
Add a [custom metric](/features/reports/#custom-metrics) before binding. Define the formula once, reuse forever.

### Client wants their own logo / branding
Two minutes under **Client → Settings → Branding**. Toggle "Custom for this client" and upload.

### Client's primary metric is something we don't auto-detect
Add a [custom metric](/features/reports/#custom-metrics) at the client level, then bind the headline metric block to it.

### Client wants a different template than your house one
Either:
- Save a variant of your house template for this client type, OR
- Edit the brief draft for this specific client (changes apply going forward).

We try to keep templates standardized — variant templates multiply quickly. Only branch the template when you genuinely have a different report shape.

## After onboarding

The client is in the cycle. From your perspective, nothing changes — they show up in the weekly review queue alongside everyone else.

If the client requests changes mid-cycle (e.g., "can we also include the bounce rate?"), edit the template *or* their specific brief. If it's a recurring need, edit the template so it persists.

## See also

- [Connect your first client](/getting-started/connect-first-client/) — the basic walkthrough
- [Templating a recurring brief](/flows/templating-recurring/) — building the house template
- [Monthly client reporting workflow](/flows/monthly-reporting/) — the cycle this onboarding feeds into
