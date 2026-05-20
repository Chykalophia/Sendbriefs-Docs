---
title: Edits & approvals
description: Handling client edits, internal approvals, and the audit trail without slowing the cycle to a crawl.
sidebar:
  order: 4
---

import Placeholder from '../../../components/Placeholder.astro';

<aside class="sb-tldr">
<p class="sb-tldr-label">TL;DR</p>
Two approval patterns: <strong>internal</strong> (a teammate approves before send) and <strong>external</strong> (the client approves before send). Both can be combined. Use the lightest workflow that keeps your reports correct — approval everywhere adds friction without proportional safety.
</aside>

## When approvals are worth the friction

Approval workflows trade speed for safety. They're worth it when:

- The client is a **major account** where a mistake would cost the relationship.
- The data is **high-stakes** (board-facing, regulatory, financial reporting).
- You're **early in a relationship** and want extra eyes on the first 3-6 sends.
- The **client explicitly requested** review before send.

For everything else, send-without-approval and rely on the **Friday review** habit to catch issues.

## Internal approval (teammate review)

The simplest form. A teammate has to click **Approve** before a brief sends.

### Configuring internal approval

1. **Template → Settings → Approval**.
2. Turn on **Require internal approval**.
3. Pick the approver(s):
   - **Specific person** — Alex must approve every brief from this template
   - **Role** — any Admin can approve
   - **Round-robin** — distributed across a team

### The approver experience

When a brief is ready for approval:

1. The approver gets an email + Slack notification (if Slack is connected).
2. They click through to a preview of the rendered brief.
3. They can **Approve**, **Request changes**, or **Skip approval this cycle**.

<Placeholder type="screenshot" caption="Internal approval inbox showing 3 briefs pending with preview thumbnails" />

If they **Request changes**, the brief goes back to the editor (you) with their comment. You fix and resubmit.

### Timing

By default, internal approval requests fire **2 days before the scheduled send time**. Plenty of buffer for review and edits.

You can shorten or lengthen this in the schedule settings (minimum: 1 hour; maximum: 14 days before send).

## External approval (client review)

Higher friction but useful for sensitive clients. The recipient gets a preview before the final send.

### Configuring external approval

1. **Client → Settings → Approval policy**.
2. Turn on **Require recipient approval before send**.
3. Pick which recipients can approve (usually the primary).

### The recipient experience

Two days before scheduled send, the recipient gets a "preview" email:

> Your {{period.month_name}} brief is ready for review.
> Open the preview, approve, or reply with edits.
> If you don't respond by {{send_time}}, we'll send the brief as-is.

They click and see the full rendered brief with three buttons:

- **Approve and send now** — fires the send immediately
- **Approve, send on schedule** — keeps the original send time
- **Request changes** — opens a comment thread

If they don't respond by the scheduled send time, the brief sends automatically (with a note that no explicit approval was given).

### Why we default to "send anyway"

The alternative — blocking sends until explicit approval — caused recipients to forget, and briefs piled up indefinitely. The fail-open default keeps your cadence reliable. Configure to fail-closed if your situation requires it.

## Comments and threads

When anyone (you, a teammate, or the recipient) clicks **Request changes**, they open a comment thread:

- Comments are scoped to a specific brief.
- They can reference specific blocks (e.g., "the revenue number looks off").
- All comments are visible to anyone with access to the brief.

The thread lives on the brief forever. Past comments become the audit trail for "why did we change this?"

## Audit trail

Every brief tracks:

- **Who edited what, when.** Every block change, every binding update.
- **Approval events.** Who approved, when, on which version.
- **Send events.** When sent, to whom, from which domain.
- **Engagement events.** Opens, clicks (best-effort).

Export the audit trail per brief from **Brief → History → Export audit log** (CSV).

For workspace-wide compliance reports, **Settings → Audit log → Export** gives you everything across all briefs.

## Bulk approvals

If you have 20 briefs queued and they all look fine, you can approve them in one action:

1. Open **Approvals → Pending**.
2. Select all (or filter by template, client, etc.).
3. Click **Approve selected**.

This works for internal approvals. External approvals can't be bulk-approved on the client's behalf (they have to click their own link).

## Handling client edits requested after send

Sometimes a client replies "this is wrong — the conversion number should be X" after the brief has already gone out. Options:

### Option A: send a correction

Open the brief. Click **Send correction**. Add a note explaining what changed. We send a corrected brief with an "UPDATED:" prefix in the subject and a clear correction note at the top.

### Option B: fix it for next period

Lower-friction. Make a note in the brief's comment thread: "Next period: switch conversion source to GA4 events." Update the binding for next month. Move on.

Most agencies prefer (B) unless the error materially misrepresents the period. Correction sends create more noise than they fix.

## Common gotchas

- **Approval is per template, not per client.** If you want different policies per client, use [client-scoped approval rules](#external-approval) at the client level.
- **Approvers can't approve their own briefs.** Built-in conflict-of-interest check. Reassign if you're the editor and approver.
- **Approval requests count toward your client's email volume.** They show up in unsubscribe stats if a client unsubscribes from "approval reminders." Brief their team that the preview emails are part of the workflow.
- **Time-based approval expirations don't fire on weekends.** A Friday-scheduled brief with a 24-hour approval window is treated as having until Monday 5pm. Configurable.

## See also

- [Briefs](/features/briefs/) — the brief lifecycle
- [Notifications & delivery](/features/notifications/) — how approval requests get delivered
- [Monthly client reporting workflow](/flows/monthly-reporting/) — fitting approvals into the cycle
