---
title: What's next
description: You sent your first brief. Here are the three highest-leverage things to do next.
sidebar:
  order: 6
---

<aside class="sb-tldr">
<p class="sb-tldr-label">TL;DR</p>
Three things to do next, in order of leverage: (1) templatize your most common brief, (2) connect the rest of your clients, (3) schedule recurring sends so they fire without you.
</aside>

You sent your first brief. Now compound the value.

## 1. Templatize the brief you send most often

The starter templates are fine. But every agency has a "house style" — the order, the framing, the specific bullets you always include.

Open the brief you just sent and click **Save as template**. Give it a name like "Monthly performance — Studio house style." Now every new client gets that template as a starter.

Even better: add **variables** to the template so the same template works across clients with different KPIs:

```
The {{client.industry}} benchmark for {{period}} was {{benchmark.value}}.
Your {{primary_metric.name}} was {{primary_metric.value}}, a
{{primary_metric.change_pct}}% change from {{period.previous}}.
```

Variables resolve at render time from the client's bindings. One template, every client.

Full guide: [Templating a recurring brief →](/flows/templating-recurring/)

## 2. Connect the rest of your clients

The first client took you ~10 minutes. The next 9 will average closer to 4 minutes each — most of the work was understanding the integration flow.

**Speed tips:**

- Connect integrations at the workspace level when possible (e.g., one OAuth to Stripe covers all clients you bill through it).
- Use the **CSV import** option (Settings → Bulk client import) if you have 20+ clients with consistent metadata.
- Keep a "first client" you check first when something breaks. We use the one with the simplest data setup as our smoke-test client.

Full guide: [Onboarding a new client in 10 minutes →](/flows/client-onboarding/)

## 3. Schedule recurring sends

Open the brief you sent. Click **Set up recurring** at the top.

Pick:

- **Cadence** — weekly, monthly, quarterly, custom (e.g., every other Tuesday).
- **Send time** — recommended: 9–10am in the client's time zone.
- **Approval step** — optional: requires a teammate to review before send.

The brief now fires automatically. You'll get a Slack/email digest after each send showing what went out.

Full guide: [Monthly client reporting workflow →](/flows/monthly-reporting/)

---

## Things that aren't urgent but pay off later

### Set up edit + approval workflows

If your clients want to review briefs before send, turn on approval. The recipient gets a link to "Approve" or "Request changes" — and the brief doesn't go out until they approve.

[Edits & approvals →](/flows/edits-and-approvals/)

### Tighten your branding

Every client can have their own logo, color, and "from name." For white-label work this is critical. Five minutes per client.

[Workspaces & teams → Branding →](/features/workspaces/#branding)

### Connect Slack for delivery digests

You don't need to babysit every send. Connect Slack and we'll post a daily digest in a channel you pick: how many briefs sent, how many opened, anything that failed.

[Notifications & delivery →](/features/notifications/)

---

## When you get stuck

- **Read the workflow docs.** Most "how do I…" questions are answered in [Processes & flows](/flows/monthly-reporting/).
- **Email support@sendbriefs.com.** Response in under 4 business hours, often much less.
- **In-app chat.** Bottom-right inside the dashboard (not on this docs site). We answer it live during business hours.

You're done with onboarding. The rest of these docs are reference — pull them up when you need them, ignore them otherwise.
