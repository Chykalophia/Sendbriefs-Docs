---
title: Connect your first client
description: Add a client, connect at least one data source, define a recipient. About 10 minutes.
sidebar:
  order: 4
---

import Placeholder from '../../../components/Placeholder.astro';

<aside class="sb-tldr">
<p class="sb-tldr-label">TL;DR</p>
In <strong>Clients → New client</strong>, add the client's name, primary recipient email, branding (or inherit), and connect one data source. The minimum to send a brief is one data source and one recipient.
</aside>

## What a client is in SendBriefs

A "client" is the organization that receives your reports. Inside each client live:

- **Recipients** — the actual people who get briefs (one or many).
- **Integrations** — data sources scoped to this client (e.g., *their* Google Analytics property, not yours).
- **Briefs** — the templates and sent reports for this client.
- **Branding overrides** — if this client gets a white-label brief, that's set here.

If you do work for a parent company with sub-brands, you can model the sub-brands as separate clients sharing recipients, or use [client groups](/features/clients/#client-groups) (Pro plan and above).

## Adding the client

Click **Clients → New client** in the nav.

<Placeholder type="screenshot" caption="New-client modal with name, primary recipient, branding fields" />

You'll see four sections:

### 1. Basics

- **Name**: How this client appears in your internal nav. Use the legal name or the trade name — whichever you say out loud.
- **Industry** (optional): Used for benchmarks if you opt into them later. Doesn't affect anything else.
- **Logo** (optional): For white-label briefs. SVG or PNG, square.

### 2. Recipients

Add at least one. The primary recipient is the default "To:" address for briefs. You can add more recipients with **CC** or **BCC** roles later.

For the first client, just add yourself or a test address. You'll change it before going live.

### 3. Branding

Two options:

- **Inherit from workspace** (default) — uses your agency's branding. Good for non-white-label work.
- **Custom for this client** — uses the client's logo and color. Required if you white-label.

You can change this anytime.

### 4. Time zone

Inherits from the workspace by default. Override if this client is on a different schedule (e.g., your workspace is in Chicago but this client wants 9am Sydney time).

Click **Create client**. You now have an empty client.

## Connecting your first data source

A brief is data + a template. You need data before you can send anything useful.

Inside the new client, click **Integrations → Add integration**.

<Placeholder type="screenshot" caption="Integration picker showing GA4, Google Ads, Meta Ads, Shopify, Stripe, HubSpot, etc." />

The most common first integration is **Google Analytics 4**. It's also a good test because the OAuth flow exercises most of our auth code path.

### Connecting GA4

1. Click **Google Analytics 4**.
2. You'll redirect to Google's OAuth consent screen. Sign in with the Google account that has access to your client's GA4 property.
3. Grant the read-only scope (we never request write).
4. Back in SendBriefs, you'll see a list of all GA4 properties this account can read. Pick the one for this client.
5. Confirm.

We'll do a one-time pull of the last 30 days to populate previews. After that, we pull fresh data each time a brief renders.

**If you don't see the property**, the Google account you signed in with doesn't have access. Add the email `sync@sendbriefs.com` as a Viewer in GA4, then retry. (This is a service account-style pattern — it survives the original Googler leaving.)

### Connecting other sources

Same pattern for most sources:

- **Google Ads** — OAuth, pick MCC or account.
- **Meta Ads** — OAuth, pick the ad account.
- **Shopify** — install our app from the Shopify App Store.
- **Stripe** — restricted API key (Read access to charges, customers, subscriptions).
- **HubSpot** — OAuth, pick the portal.

Full list and per-integration setup: [Integrations →](/features/integrations/).

## Common gotchas

- **OAuth tokens expire.** Most providers issue refresh tokens that last 90+ days. We refresh in the background and email you if a token actually fails. If you see a yellow warning on a brief, it usually means a token was revoked (someone in the client's org reset access).
- **Permissions need to be granular.** Don't connect an admin account if a Viewer account is enough. Less surface area if something goes wrong.
- **Multiple properties** under one Google account are common. We let you pick one per client, not "all of them." Connect each client to *their* property.

## Next: send your first brief

You have a client and at least one data source. Time to template a brief and send it.

[Send your first brief →](/getting-started/send-first-brief/)
