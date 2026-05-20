---
title: Workspaces & teams
description: Workspace settings, member roles, branding, scoping, and the multi-workspace pattern.
sidebar:
  order: 4
---

import Placeholder from '../../../components/Placeholder.astro';

<aside class="sb-tldr">
<p class="sb-tldr-label">TL;DR</p>
Most agencies need one workspace. It holds members, clients, integrations, billing, and branding. Members get roles (Owner / Admin / Editor / Viewer). Larger teams use client-scoped roles to limit who sees what.
</aside>

## Workspace settings

Under **Settings**, you'll find these tabs:

- **General** — workspace name, time zone, default language.
- **Branding** — logo, color, sender name, font preference.
- **Sending domains** — verified email domains.
- **Members** — invite, remove, role changes.
- **Custom metrics** — workspace-wide metric definitions.
- **Integrations** — workspace-level data sources.
- **Billing** — subscription, invoices, payment method.
- **Audit log** — every administrative change with actor + timestamp.

## Member roles

| Role | Can do | Can't do |
|---|---|---|
| **Owner** | Everything | n/a — there's always exactly one Owner |
| **Admin** | Invite/remove members, change billing, edit any client | Delete workspace, change Owner |
| **Editor** | Create/edit briefs and clients, connect integrations | Manage members or billing |
| **Viewer** | Read briefs and reports | Edit anything |

To transfer ownership, the current Owner goes to **Settings → Members**, clicks their own row, and clicks **Transfer ownership** to another Admin.

## Adding members

1. **Settings → Members → Invite member**.
2. Enter email(s) — comma-separated is fine.
3. Choose role.
4. (Optional) Apply tag-based client scoping.
5. Send.

Invitees get an email with a 7-day signup link. If they're already in a workspace, they can switch between workspaces from the avatar menu.

### Client-scoped roles

By default, every member sees every client. To restrict:

1. **Settings → Members → [member]**.
2. Toggle **Restrict to specific clients**.
3. Pick a scoping rule:
   - **Specific clients** — pick a list.
   - **Tag-based** — see all clients with tag X.
   - **Combination** — see clients matching multiple tags.

Scoping applies to: clients list, briefs, integrations, custom metrics. The member won't see scoped-out clients at all (they're not in the nav).

Owners and Admins can't be scoped.

## Branding

The branding hierarchy:

```
Brief-level → Template-level → Client-level → Workspace-level
```

A brief's effective branding is the most specific level that has a value. So:

- If the workspace has a logo and the client has none, the workspace logo wins.
- If the client has a logo, it overrides the workspace.
- If a specific brief has a one-off logo, it overrides everything.

### What's customizable

- Logo (square or horizontal, both supported)
- Brand color (used for buttons + accents inside briefs)
- Sender name (the "From: Your Agency" line)
- Email signature (markdown supported)
- Font preference (Inter, Atkinson Hyperlegible, system default)

<Placeholder type="screenshot" caption="Branding preview pane showing the rendered brief header at workspace level" />

## Sending domains

By default, briefs send from `reports@sendbriefs.com`. To send from your own domain:

1. **Settings → Sending domains → Add domain**.
2. Copy the three DNS records (SPF, DKIM, optional MX for replies).
3. Paste into your DNS provider.
4. Click **Verify**.

Most DNS providers propagate in under 10 minutes. Some (e.g., 1and1, Network Solutions) can take up to 24 hours.

Once verified, you can pick this domain as the sender for any brief.

### Reply handling

When the recipient hits Reply, where does it go? Two options:

- **Reply to sender** (default) — the brief sender's email handles replies.
- **Reply to account manager** — replies route to the account manager assigned to the client.

Configure under **Settings → Sending domains → Reply routing**.

## Audit log

Every change that matters is logged:

- Member added / removed / role changed
- Integration connected / disconnected
- Brief sent / canceled
- Client created / archived / deleted
- Billing changes
- Sending domain verifications

You can filter the log by actor, action type, and date range. Export to CSV if you need it for compliance reviews.

## Multi-workspace pattern

You'd want multiple workspaces if:

- You run **two separate brands** that don't share clients or staff.
- You need **hard separation for compliance** (e.g., one workspace for healthcare clients with stricter access controls).
- You're **operating an agency network** where each franchise has its own data isolation.

Most agencies don't need this. If you're not sure, you don't need it.

### Switching workspaces

If you belong to multiple workspaces, click your avatar in the top-right → **Switch workspace**.

Each workspace is a fully separate tenant. Briefs, clients, integrations, billing — none of it crosses workspace boundaries.

## Common gotchas

- **You can't move a brief between workspaces.** Briefs are workspace-scoped. If you need to migrate, export the template and re-create in the destination workspace.
- **The Owner role is non-deletable.** You can't accidentally remove yourself as Owner. To leave the workspace, you must first transfer ownership.
- **Scoping doesn't hide data already in cached briefs.** If a Viewer reads a brief, then a scoping rule retroactively hides that client, the Viewer still has the brief content in their browser history. Scoping affects what they can access *going forward*.

## See also

- [Clients](/features/clients/) — what's inside each workspace
- [Integrations](/features/integrations/) — workspace vs. client-level
- [Onboarding a new client](/flows/client-onboarding/) — the standard recipe
