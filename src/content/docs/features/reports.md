---
title: Reports & data
description: How SendBriefs pulls, caches, transforms, and exposes data inside briefs.
sidebar:
  order: 3
---

import Placeholder from '../../../components/Placeholder.astro';

<aside class="sb-tldr">
<p class="sb-tldr-label">TL;DR</p>
Data flows: <strong>source → pull → normalize → cache → bind → render</strong>. Pulls are scheduled and on-demand. Caches expire by source (analytics: 1 hour, billing: 15 minutes, ads: 30 minutes). You can force a refresh per brief.
</aside>

## The data pipeline

When you bind a brief block to a data source, here's what actually happens:

1. **Source connection** — OAuth or API key issued at the workspace or client level.
2. **Pull** — we hit the provider's API on a schedule (or on-demand for previews).
3. **Normalize** — provider-specific shapes get mapped to our common metric model (so "revenue" in Shopify and "purchase_value" in GA4 look the same in templates).
4. **Cache** — normalized data is stored in our warehouse with a TTL.
5. **Bind** — when a brief renders, it queries the cache for each block.
6. **Render** — bound values flow into the template at render time.

You don't have to think about most of this. But understanding the cache TTLs matters when you're troubleshooting "why is yesterday's data missing?"

## Cache TTLs by source

| Source category | Cache TTL | Pull cadence |
|---|---|---|
| Analytics (GA4, Plausible, Fathom) | 1 hour | Hourly |
| Ad platforms (Google Ads, Meta, LinkedIn) | 30 minutes | Every 30 minutes |
| Billing (Stripe, QuickBooks, Xero) | 15 minutes | Every 15 minutes |
| CRM (HubSpot, Salesforce, Pipedrive) | 1 hour | Hourly |
| Ecommerce (Shopify, WooCommerce) | 30 minutes | Every 30 minutes |
| Manual / CSV / Sheet | n/a | Pulled on each render |

A brief that renders at 9:00am with a 1-hour-cache source might show data from 8:01am. If the lag matters, you can force a refresh.

## Forcing a refresh

On any brief, click the **Refresh data** icon next to the period selector. We'll re-pull every bound source, ignoring cache.

<Placeholder type="screenshot" caption="Brief header with the Refresh data icon highlighted; tooltip shows 'Last pulled 3 min ago'" />

Refreshes take 10–60 seconds depending on how many sources are bound. The brief preview will update when each source returns.

## Metric model

We normalize across providers so the same template works for any client. The common metrics:

### Revenue
| Source | Maps to |
|---|---|
| Stripe | Net charges (excludes refunds) |
| Shopify | Gross sales |
| QuickBooks | Income accounts |
| GA4 | `purchaseRevenue` event property |

### Sessions
| Source | Maps to |
|---|---|
| GA4 | `sessions` |
| Plausible | Sessions |
| Fathom | Sessions |

### Conversions
| Source | Maps to |
|---|---|
| GA4 | Configured conversion events |
| Google Ads | Conversions |
| Meta Ads | Configured pixel events |

### Ad spend
| Source | Maps to |
|---|---|
| Google Ads | Total spend |
| Meta Ads | Amount spent |
| LinkedIn Ads | Total spent |

For metrics not in the common model, you can use **provider-native** metrics (e.g., GA4's `sessionsPerUser`). Templates that bind to native metrics aren't cross-source compatible, but they work fine for clients that only use one source.

## Custom metrics

You can define formulas combining other metrics:

```
ROAS = revenue / ad_spend
LTV_proxy = (avg_order_value * purchases) / unique_customers
```

Custom metrics live at the workspace level (available to all clients) or client level (just one client). Define them under **Settings → Custom metrics**.

## Date alignment

Different sources report time differently:

- **GA4** reports by event date (when the event happened, in the property's time zone).
- **Stripe** reports by charge created date (UTC).
- **Meta Ads** reports by ad-served date (in the ad account's time zone).

We align all of these to the **brief's reporting period**, expressed in the **client's time zone**.

If you see a "stripe transaction outside the period" warning, it's because Stripe's UTC date converted to the client's time zone falls outside the window. The data is correct — the warning is just a heads-up.

## Manual data input

Not everything comes from an API. For data you enter by hand (e.g., "deals closed offline this month"):

- Create a **manual metric** under **Settings → Custom metrics**.
- Update it each period via the dashboard or the [bulk update CSV](/features/integrations/#manual-csv).
- Bind blocks to it like any other metric.

## Common gotchas

- **GA4 sampling.** For high-traffic properties, GA4 samples data. We surface a small warning in the brief when sampling is detected (>5% sampled).
- **Stripe currency mixing.** If a client has charges in multiple currencies, we don't auto-convert. The brief will show subtotals per currency unless you set a base currency in the client settings.
- **Refunds count negatively.** Stripe revenue is net of refunds. If your client's reporting convention is "gross revenue," set the metric source to "Stripe gross" instead.
- **Time zone drift around DST.** Briefs straddling a DST transition will show a 23-hour or 25-hour "day" in trend charts. We flag this in the brief footer.

## Exporting data

You can export the underlying data for any brief as CSV from the **Data** tab inside the brief. Useful for clients who want raw numbers alongside the rendered report.

## See also

- [Integrations](/features/integrations/) — connecting sources
- [Briefs](/features/briefs/) — how rendered data appears in briefs
- [Edits & approvals](/flows/edits-and-approvals/) — what happens when data looks wrong
