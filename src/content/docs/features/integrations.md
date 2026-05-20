---
title: Integrations
description: Every data source we support, what scopes we request, and per-source gotchas.
sidebar:
  order: 5
---

import Placeholder from '../../../components/Placeholder.astro';

<aside class="sb-tldr">
<p class="sb-tldr-label">TL;DR</p>
Connect data sources at the workspace level (used across clients) or client level (this client's GA4 property). We use OAuth where available and request read-only scopes. Disconnecting revokes our access immediately.
</aside>

## Supported sources

### Analytics
- **Google Analytics 4** — OAuth, read-only
- **Plausible** — API key
- **Fathom** — API key
- **PostHog** — API key

### Ad platforms
- **Google Ads** — OAuth, read-only
- **Meta Ads** — OAuth, read-only
- **LinkedIn Ads** — OAuth, read-only
- **TikTok Ads** — OAuth, read-only

### Billing
- **Stripe** — restricted API key (Read on charges, customers, subscriptions, invoices)
- **QuickBooks Online** — OAuth, read-only
- **Xero** — OAuth, read-only

### CRM
- **HubSpot** — OAuth, contacts + deals + companies (read)
- **Salesforce** — OAuth, configurable scopes
- **Pipedrive** — API key

### Ecommerce
- **Shopify** — App install (Shopify App Store)
- **WooCommerce** — REST API keys

### Project management
- **ClickUp** — OAuth or API key
- **Asana** — OAuth
- **Linear** — OAuth

### Manual / file-based
- **CSV upload** — drag-and-drop per period
- **Google Sheets** — OAuth, specific sheet permission
- **Webhook** — push your own data in

## Workspace vs. client scope

Some integrations make sense at the workspace level (e.g., Stripe if you bill every client through your one Stripe account). Others must be per-client (each client has their own GA4).

| Scope | Examples | Why |
|---|---|---|
| **Workspace** | Stripe (if shared), CSV templates, custom metrics | One credential, used by many clients |
| **Client** | GA4, Google Ads, Meta Ads, Shopify | Each client has their own account/property |

When you bind a brief block, you can pick from both levels. Workspace-level sources show up under every client.

## OAuth basics

Most integrations use OAuth 2.0. The flow:

1. You click **Connect [provider]**.
2. We redirect you to the provider's login.
3. You authorize the read scope.
4. Provider redirects back with a code.
5. We exchange the code for an access token + refresh token.
6. Tokens are stored encrypted at rest (AES-256-GCM, per-workspace key).

Disconnecting calls the provider's revocation endpoint immediately and deletes our stored tokens.

## What scopes we request

We follow the principle of least privilege. We never request write scopes if read scopes will do.

### Google Analytics 4
- `https://www.googleapis.com/auth/analytics.readonly`

That's it. We can read your GA4 reports. We can't create properties, change settings, or write events.

### Google Ads
- `https://www.googleapis.com/auth/adwords`

Google's Ads API uses one scope for read or write. We only call read endpoints (Reports, Campaign listing).

### Meta Ads
- `ads_read`
- `business_management` (only if connecting via Business Manager)

We use `ads_read`, never `ads_management`.

### Stripe
- Restricted key with: `charges:read`, `customers:read`, `subscriptions:read`, `invoices:read`

We provide the key configuration. You generate it in your Stripe dashboard and paste it in.

### HubSpot
- `crm.objects.contacts.read`
- `crm.objects.companies.read`
- `crm.objects.deals.read`

### Shopify
- `read_orders`
- `read_products`
- `read_customers`

Installed via the Shopify App Store, scopes shown at install time.

## Per-source gotchas

### Google Ads MCC accounts
If you're an agency with an MCC, connect at the MCC level — we'll discover all sub-accounts and let you pick per client.

### GA4 sampling
GA4 samples data on high-traffic properties. We don't bypass sampling (impossible without enterprise GA4). When sampling is detected, we surface a warning in the brief footer.

### Meta Ads "no spend" days
Meta returns no row for days with zero spend, not a row with zeroes. This can make trend charts look incomplete. We fill missing days with zero before rendering.

### Stripe currency mixing
Stripe reports each currency separately. If a client has charges in USD and EUR, we won't convert — the brief shows two subtotals. Set a base currency on the client to force conversion at the daily ECB rate.

### HubSpot rate limits
HubSpot has a 100 requests / 10 seconds / portal limit. We rate-limit our pulls accordingly. For very large portals (>1M contacts), the first sync can take 10+ minutes.

### Shopify multi-store
Each Shopify store is a separate connection. If a client has three stores under one Shopify Plus account, you'll do three integration installs.

## CSV uploads (manual)

For data without an API:

1. **Integrations → Add → CSV upload**.
2. Upload the CSV with columns matching the schema: `date, metric_name, value, segment` (segment optional).
3. The data is available for binding immediately.
4. To update, upload a new CSV with the same metric name — we'll merge by date.

We don't auto-fetch CSVs. You upload each period. (We can set up a Google Sheets connection that polls if you'd rather automate.)

## Webhooks (push your own data)

Send data to us instead of us pulling. Useful for:

- Internal systems with no public API.
- Privately hosted analytics.
- Real-time data (Stripe webhooks for instant updates).

Configure under **Integrations → Add → Webhook**. We give you a URL + signing secret. POST JSON to the URL whenever you have new data.

[Webhook schema reference →](/api/coming-soon/)

## Disconnecting

To revoke our access:

1. **Settings → Integrations → [source]**.
2. Click **Disconnect**.
3. Confirm.

We immediately revoke the token with the provider and delete it from our stores. Any briefs bound to that source will show a binding error on next render until you reconnect.

## Health checks

We poll each connected source nightly to confirm the token is still valid. If we detect a revoked token (the user reset access on the provider's side), we email the workspace owner.

A red dot next to an integration in **Settings → Integrations** means there's an authentication problem. Click to see the specific error and a "Reconnect" button.

## See also

- [Reports & data](/features/reports/) — how integration data flows into briefs
- [Connect your first client](/getting-started/connect-first-client/) — the walkthrough
