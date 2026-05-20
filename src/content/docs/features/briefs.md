---
title: Briefs
description: What a brief is, how templates work, and the lifecycle from draft to delivered.
sidebar:
  order: 1
---

import Placeholder from '../../../components/Placeholder.astro';

<aside class="sb-tldr">
<p class="sb-tldr-label">TL;DR</p>
A brief is a templated report bound to a client and a reporting period. Briefs move through these states: <strong>Draft → Scheduled → Sent → Opened → Acknowledged</strong>.
</aside>

## What's in a brief

Every brief has three layers:

1. **Template** — the structure, prose, and block order. Reusable.
2. **Bindings** — which data source feeds each block. Per-client.
3. **Period** — the time window for the data (last month, last week, etc.).

A brief is the render of those three layers at a specific moment in time.

## Blocks

Templates are composed of blocks. SendBriefs ships with these block types:

| Block | What it shows | Example use |
|---|---|---|
| **Headline metric** | One big number with a delta | "$48,210 revenue (+12% MoM)" |
| **Comparison table** | Multi-row × multi-column metric grid | Channel-by-channel breakdown |
| **Top performers** | Sorted list of items by metric | Top 5 campaigns by spend |
| **Trend chart** | Line or bar chart over time | Last 6 months of conversions |
| **Status indicator** | Goal vs. actual with color | "70% to monthly target" |
| **Prose section** | Free-form markdown text with optional variables | "Issues + opportunities" |
| **Call to action** | Button with URL | "Open dashboard" |
| **Divider** | Visual section break | n/a |

Each block has its own config (filters, formatting, color rules). The block library is extensible — request a new block type at support@sendbriefs.com if you need one we don't have.

## Brief lifecycle

<Placeholder type="diagram" caption="State diagram: Draft → Scheduled → Sending → Sent → Opened → Acknowledged. Failed and Canceled as alt branches." />

### Draft
The brief exists but hasn't been scheduled. You can edit anything. Drafts auto-save every 5 seconds.

### Scheduled
You picked a send time. Until 5 minutes before that time, you can still edit. After the 5-minute cutoff, the brief locks. (You can cancel, but you can't edit content.)

### Sending
The brief is being rendered and sent right now. Usually takes 10-30 seconds. If a data binding fails during this step, the brief moves to **Failed** with a specific error.

### Sent
SMTP accepted the brief. The recipient should have it. We log the send timestamp here.

### Opened
At least one recipient loaded the brief's tracking pixel. Best-effort — many email clients block tracking. Don't treat "not opened" as "not read."

### Acknowledged
The recipient clicked a tracked link OR (if you have approvals on) approved the brief. This is the strongest signal that the brief was actually read.

### Failed / Canceled
- **Failed** = something went wrong during render or send. We retry SMTP-level failures up to 3 times.
- **Canceled** = you canceled before send.

## Creating a brief

From a client page, click **New brief**. Three paths:

1. **From a starter template** — built-in templates.
2. **From a saved template** — your previously saved templates.
3. **From scratch** — start with an empty brief, add blocks as you go.

For most cases, "from a saved template" is what you want. Your template carries the bindings — you just confirm the reporting period and hit preview.

## Editing a brief

Click any brief in the **Drafts**, **Scheduled**, or **Sent** tab to open the editor.

<Placeholder type="screenshot" caption="Brief editor — left panel: block list with drag handles; right panel: live preview" />

The editor has two panes:

- **Left**: block list. Drag to reorder. Click a block to edit its config.
- **Right**: live preview. Updates as you edit.

The preview uses real data from the bound integrations.

## Versioning

Every saved change creates a new version. From the brief's **History** tab, you can:

- See who changed what and when.
- Restore a previous version.
- Compare two versions side-by-side.

For sent briefs, versions are frozen — you can read history but not restore over a sent version.

## Common gotchas

- **Period boundaries are inclusive on both ends.** "Last month" means the full calendar month, including the last day.
- **A brief's time zone is the client's time zone, not yours.** If a client is on Sydney time and you schedule "9am," it sends at 9am Sydney.
- **Edits after the 5-minute cutoff are blocked.** This prevents accidental edits to a brief that's already mid-render. If you really need to change something, cancel and reschedule.
- **The preview pane caches integration data for 60 seconds.** If you just updated a binding and the preview hasn't refreshed, click the refresh icon on the preview pane.

## See also

- [Clients](/features/clients/) — how briefs attach to recipients
- [Reports & data](/features/reports/) — how data flows into briefs
- [Templating a recurring brief](/flows/templating-recurring/) — the recipe for making one template work everywhere
