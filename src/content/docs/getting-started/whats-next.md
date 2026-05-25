---
title: What's next
description: You sent your first brief. Here are the highest-leverage things to do next.
sidebar:
  order: 6
---

<aside class="sb-tldr">
<p class="sb-tldr-label">TL;DR</p>
Five things to do next, in order of leverage: (1) save the brief you just sent as a template, (2) invite your team and assign sections, (3) connect the rest of your clients, (4) tune notifications so the right people get pinged, (5) move briefs onto a recurring schedule.
</aside>

You sent your first brief. Now compound the value.

## 1. Save the brief as a template

The starter templates are fine, but the brief you just shipped is closer to your house style than anything we ship by default.

From the brief detail page, open the menu and click **Save as template**. Give it a name like "Monthly performance — house style." It'll show up in the template picker for every new brief.

Templates remember:

- The block structure (text, metrics, charts, callouts, etc.).
- The default cadence (daily, weekly, biweekly, monthly, quarterly, milestone, ad-hoc, or custom).
- The sections, status defaults, and assignment defaults.

What templates *don't* lock in: the specific data values (those re-resolve each period) or the client (you pick that when you create a new brief from the template).

Full guide: [Templating a recurring brief →](/flows/templating-recurring/)

## 2. Invite your team

If you're the only person writing briefs, skip this. If anyone else contributes — even one teammate doing edits — bring them in now.

From **Settings → Team**, click **Invite member**. Add their email and pick a role:

- **Owner** — full control, including billing and workspace deletion.
- **Admin** — full control except deleting the workspace.
- **Member** — can create and edit briefs they own; can read briefs from teammates and the client directory; can't manage billing, team, or workspace settings.

Once they accept the invite, you can assign brief sections to them. This is the unlock for "I write the strategy section, you write the analytics section" without anyone stepping on anyone's toes.

[Workspaces & teams →](/features/workspaces/)

## 3. Connect the rest of your clients

The first client took you ~10 minutes. The next ones will be much faster — most of the time was understanding the integration flow, which only happens once.

Per-client steps after the first:

1. **Clients → New client** — name, optional website, optional logo. ~30 seconds.
2. **Contacts** — add the people who'll receive the brief. ~1 minute per contact.
3. Skip the integration setup if your briefs don't need auto-ingested data (most don't in the current preview). Add a Brief integrations mapping later if you want a ClickUp list to auto-append into a brief template.

Keep one client as your **smoke-test client** — the simplest setup, the most forgiving recipient. Use it to verify new templates or test new features before you roll changes out to your real client list.

Full guide: [Onboarding a new client →](/flows/client-onboarding/)

## 4. Tune notifications

Once you have teammates and clients, you'll start getting notified about brief activity. Out of the box:

- **In-app notifications** are on for most events.
- **Email notifications** are limited to approvals and mentions.

You can change this per event type from **Settings → Delivery → Notifications** (or the standalone `/notifications` page from the sidebar):

| Event | What it means |
|---|---|
| `report_submitted` | A brief is waiting for your approval. |
| `report_approved` | A brief you authored was approved. |
| `report_rejected` | A brief you authored had changes requested. |
| `report_sent` | A brief you authored was emailed to the client. |
| `section_reminder` | An assigned section is incomplete near the deadline. |
| `member_joined` | A new teammate joined the workspace. |

(There are a few more entries in the preference list — `section_assigned`, `section_comment`, `mention` — but their producers aren't wired in the current preview, so toggling them has no effect yet.)

For each event, you have separate in-app and email toggles plus a **Test** button. Tune aggressively — silence what you don't need.

[Notifications & delivery →](/features/notifications/)

## 5. Move briefs onto a recurring schedule

The whole point of SendBriefs is to stop assembling the same brief by hand every month.

Recurring schedules live at **Settings → Reports → Scheduling**. Each schedule is per-client + frequency (daily / weekly / monthly) + time-of-day. Once configured, the scheduler creates a draft brief on the cadence, routes it through your approval workflow (if enabled), and emails it on the scheduled day.

You get notified at each step so you can catch issues, but you're not the bottleneck for the standard path.

> **Frequency vs template cadence.** A template can have a cadence of `biweekly`, `quarterly`, `milestone`, etc., but the scheduler today only supports `daily`, `weekly`, and `monthly`. For other cadences, you create each period's brief manually via **Add to a brief**.

Full guide: [Monthly client reporting workflow →](/flows/monthly-reporting/)

---

## Things that aren't urgent but pay off later

### Set up approval workflows

If your briefs need a second pair of eyes before they go out, turn on workspace-level approval enforcement. Briefs can't move to `sent` until they're `approved` by an authorized teammate.

This is internal team approval — for the workflow where your *client* approves before send, see the [edits & approvals flow](/flows/edits-and-approvals/).

[Edits & approvals →](/flows/edits-and-approvals/)

### Set up ClickUp ambient ingest

If your team tracks brief inputs in ClickUp, you can wire it up yourself:

1. **Settings → Integrations** → **Integrations** card → **Connect** on the ClickUp tile. Paste a personal API token from ClickUp's Settings → Apps page (tokens start with `pk_`).
2. **Settings → Integrations** → **Brief integrations** card → **Add mapping**. Pick a brief template + the ClickUp integration + the source selector. New items in the list auto-append into the matching draft brief.

This is the one data-ingest integration that actually flows today.

[Integrations → ClickUp →](/features/integrations/#clickup)

### Enforce MFA for the whole workspace

If your team handles client data, requiring multi-factor authentication is table stakes. From **Settings → Security**, flip on **Require MFA**. Members get a **7-day grace period** with a banner reminding them to enroll; after that, they're blocked from the dashboard until they set up TOTP via `/mfa-enroll`.

[Workspaces & teams → Multi-factor authentication →](/features/workspaces/#multi-factor-authentication)

### Tune per-client branding

Every client can have their own logo. White-label work depends on this. Five minutes per client.

[Workspaces & teams → Branding →](/features/workspaces/#branding)

---

## When you get stuck

- **Read the workflow docs.** Most "how do I…" questions are answered in [Processes & flows](/flows/monthly-reporting/).
- **Email <a href="mailto:support@sendbriefs.com">support@sendbriefs.com</a>.** Real humans, four-hour response time, often much less.
- **Help center on the marketing site.** Quick reference at [sendbriefs.com/help](https://sendbriefs.com/help).

You're done with onboarding. The rest of these docs are reference — pull them up when you need them, ignore them otherwise.
