---
title: Templating a recurring brief
description: How to build one template that works across every client and stays current period after period.
sidebar:
  order: 3
---

import Placeholder from '../../../components/Placeholder.astro';

<aside class="sb-tldr">
<p class="sb-tldr-label">TL;DR</p>
A good template uses <strong>variables</strong> instead of hardcoded names/numbers, has <strong>conditional blocks</strong> so it adapts when a client lacks a data source, and is <strong>versioned</strong> so you can roll back if a change reads poorly.
</aside>

## What a great template looks like

A great template:

1. **Renders correctly for every client** without per-client edits.
2. **Adapts gracefully** when data is missing (e.g., a client without Stripe doesn't see a broken revenue block).
3. **Reads like prose, not a dashboard** — variables fill in client-specific numbers inside human sentences.
4. **Is versioned** — past sent briefs use the template version that existed when they sent; future briefs use the latest.

## Variables

Variables resolve at render time. Syntax: `{{namespace.field}}`.

### Client variables
- `{{client.name}}` — Display name
- `{{client.industry}}` — Industry tag if set
- `{{client.primary_recipient.first_name}}` — For salutations
- `{{client.timezone}}` — IANA TZ string

### Period variables
- `{{period.month_name}}` — "May"
- `{{period.month_short}}` — "May"
- `{{period.year}}` — "2026"
- `{{period.start}}` — ISO date
- `{{period.end}}` — ISO date
- `{{period.label}}` — "May 2026" / "Week of May 12" / "Q2 2026"
- `{{period.previous.label}}` — "April 2026" / "Week of May 5"
- `{{period.same_period_last_year.label}}` — "May 2025"

### Metric variables
Every binding exposes its value:

- `{{primary_metric.value}}` — Formatted with currency/percent/units
- `{{primary_metric.value_raw}}` — Unformatted number
- `{{primary_metric.change_pct}}` — Percent change vs. previous period
- `{{primary_metric.change_abs}}` — Absolute change
- `{{primary_metric.direction}}` — "up" / "down" / "flat"

### Workspace variables
- `{{workspace.name}}` — Your agency name
- `{{workspace.signature}}` — Configured signature

## Conditional blocks

Show a block only when data is available:

```
{{#if integrations.stripe}}
  ## Revenue this {{period.label}}
  ${{revenue.value}}, a {{revenue.change_pct}}% change from {{period.previous.label}}.
{{/if}}
```

`integrations.<source>` resolves to true/false based on whether that source is connected for the client.

You can also gate on data presence:

```
{{#if revenue.value_raw > 0}}
  ## Strong revenue period
  ${{revenue.value}} — your best {{period.month_name}} since {{revenue.peak_period.label}}.
{{/if}}
```

## Prose template patterns

Bad (reads as a dashboard):

```
Revenue: $48,210
Sessions: 12,400
Conversions: 412
```

Good (reads as a brief):

```
{{period.month_name}} closed at ${{revenue.value}}, a {{revenue.change_pct}}% change
from {{period.previous.month_name}}. {{sessions.value}} sessions converted to
{{conversions.value}} actions ({{conversion_rate.value}}%).
```

The brief version is the same data, but it tells the client "here's what happened" instead of "here's a table to interpret."

## Branding inside templates

The template inherits client-level branding by default. To force workspace branding for a specific template (e.g., your quarterly business review always uses your house branding regardless of client):

In **Template settings → Branding**, toggle **Override client branding**. Now this template always uses workspace branding when rendered.

## Saving and versioning

Templates are versioned automatically. Every save creates a new version. Past sent briefs reference the version that existed when they sent.

To roll back:

1. **Templates → [template] → History**.
2. Pick the version you want.
3. Click **Restore as current**.

Future sends will use the restored version. Past sends are unaffected.

## Testing template changes

Before pushing a template change to all clients:

1. Save the changed template.
2. From any client, create a **preview brief** using the new template version + last period's data.
3. Visually inspect.
4. If good: click **Apply to all clients on this template**.

This way, you catch breaking changes (e.g., a variable typo) on one preview brief instead of 20 live ones.

<Placeholder type="screenshot" caption="Template editor with version history sidebar visible" />

## Variant templates

Sometimes one template isn't enough. Common variants:

- **Monthly performance** — your house monthly
- **Weekly snapshot** — for clients who get faster cadence
- **Quarterly review** — deeper, with commentary slots
- **Campaign launch report** — one-off for major campaigns
- **End-of-engagement summary** — when a client wraps

Keep variants to the minimum that genuinely have different structures. Two variants is fine. Twelve is a sign you're not using variables.

## Variables don't replace good editorial judgment

The template renders the numbers. You write the commentary.

The "Issues + opportunities" block is intentionally a prose block — you fill it in each period (or let an AI assistant draft a starting point you edit). The numbers are objective; the interpretation is not. Don't try to template insight.

## Common gotchas

- **A variable that doesn't resolve renders as `{{variable.name}}`** in the brief. We surface a warning in the preview when this happens, but check carefully — it's easy to miss in a long brief.
- **Conditional blocks must close.** `{{#if ...}}...{{/if}}` — forgetting the closing tag breaks the entire brief render.
- **Period variables compute in the client's time zone.** "Last month" in a client on Sydney time may differ from "Last month" in a client on Chicago time. Usually what you want, but be aware.
- **Variables in subject lines work.** `Brief: {{client.name}} — {{period.label}}` is a valid subject template.

## See also

- [Briefs](/features/briefs/) — block types
- [Reports & data](/features/reports/) — what's available as a metric
- [Monthly client reporting workflow](/flows/monthly-reporting/) — the cycle this template feeds
