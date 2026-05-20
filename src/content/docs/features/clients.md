---
title: Clients
description: Managing client records — recipients, branding, integrations scoped per client.
sidebar:
  order: 2
---

import Placeholder from '../../../components/Placeholder.astro';

<aside class="sb-tldr">
<p class="sb-tldr-label">TL;DR</p>
Clients are the organizations you report to. Each client owns its recipients, integrations, branding, and briefs. You can group, tag, archive, and bulk-manage them.
</aside>

## What lives on a client record

| Field | Notes |
|---|---|
| **Name** | The display name in your nav. Required. |
| **Recipients** | One or more people who get briefs. At least one required. |
| **Integrations** | Per-client data sources (the client's GA4 property, etc.). |
| **Branding** | Inherit from workspace or override per client. |
| **Time zone** | For scheduled send times and "last month" boundaries. |
| **Tags** | Free-form labels for grouping (e.g., "ecommerce", "B2B"). |
| **Notes** | Internal-only notes. Not visible to the client. |
| **Status** | Active / Paused / Archived. |

## Adding recipients

Each client can have multiple recipients with different roles:

- **Primary** — the "To:" address. One per brief.
- **CC** — copied on every brief.
- **BCC** — copied invisibly. Useful for internal account managers.

When you click **Add recipient**, you can paste a list of comma-separated emails — we'll parse them into separate rows.

<Placeholder type="screenshot" caption="Recipients panel with primary + CC + BCC rows, plus the bulk-paste field" />

### Roles per recipient

Recipients can also have view-level access if you turn on **client portal** (Pro plan and above). That's separate from email delivery — even non-portal recipients receive briefs by email.

## Branding overrides

By default, every client inherits your workspace branding (logo + color + sender name).

To override for a specific client (white-label):

1. Open the client.
2. Click **Settings → Branding**.
3. Toggle **Custom branding for this client**.
4. Upload the client's logo, set their brand color, set the sender name (e.g., "Your Agency on behalf of Client").

The override applies to every brief sent to this client.

### Per-template branding overrides

If one brief for this client uses different branding (e.g., quarterly review uses a different layout), you can override at the template level too. Brief-level branding > template-level > client-level > workspace-level.

## Tags and grouping

Tags are free-form labels. Use them for any classification that helps you:

- **Industry** — "ecommerce", "B2B SaaS", "professional services"
- **Tier** — "vip", "standard", "pilot"
- **Account manager** — "owner:alex", "owner:sam"
- **Service line** — "paid-search", "seo", "full-service"

You can filter the clients list by tag and bulk-act on tagged clients (e.g., "send Q1 review to all 'vip' clients").

### Client groups (Pro plan)

For multi-brand or parent-child relationships:

- A **group** can contain multiple clients.
- Recipients can be assigned to the group instead of individual clients.
- Briefs can roll up data across all clients in the group.

Common pattern: a holding company that wants one "portfolio summary" brief covering all sub-brands.

## Archiving vs. deleting

- **Archive** — preserves all history. Briefs stay readable. Removed from the active clients list. Can be unarchived.
- **Delete** — permanently removes the client and all briefs. Two-step confirmation. **Not recoverable.**

Most agencies archive instead of delete. Storage is cheap and the audit trail matters.

## Bulk operations

From the clients list, you can:

- **Bulk import** — CSV upload with columns: name, primary email, tags, time zone.
- **Bulk archive** — select multiple, archive.
- **Bulk tag** — select multiple, apply a tag.
- **Bulk re-bind** — if you connected a new shared data source, point all clients at it in one move.

## Client-scoped roles (Pro plan)

By default, every workspace member can see every client. For larger teams, you'll want to scope access:

- **Account managers** see only their assigned clients.
- **Specialists** (e.g., paid-search team) see only clients with matching tags.

Configure under **Settings → Members → Scoping rules**. Rules use the same tag system, so "Alex can see clients tagged `owner:alex`" is a one-line rule.

## Common gotchas

- **Renaming a client changes the URL slug.** Old in-app links keep working (we redirect), but if you pasted a client URL into Slack last week, the slug there will redirect.
- **Time zone changes don't retroactively re-compute past brief periods.** A brief sent last month with the old time zone keeps its old period definition.
- **Tags are case-sensitive.** "VIP" and "vip" are different tags. Be consistent.

## See also

- [Briefs](/features/briefs/) — what gets sent to these clients
- [Integrations](/features/integrations/) — connecting per-client data
- [Onboarding a new client](/flows/client-onboarding/) — the 10-minute recipe
