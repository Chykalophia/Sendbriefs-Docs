---
title: Monthly client reporting workflow
description: The standard end-to-end recipe for sending monthly briefs to a roster of clients without it eating your Friday.
sidebar:
  order: 1
---

import Placeholder from '../../../components/Placeholder.astro';

<aside class="sb-tldr">
<p class="sb-tldr-label">TL;DR</p>
The workflow is: <strong>template once → bind once per client → schedule once → review the digest after each send</strong>. After the initial setup (~30 min per client), monthly reporting takes 0 minutes of active work and ~10 minutes of review per Monday.
</aside>

## The painful version (what we're replacing)

Without SendBriefs, the typical monthly cycle looks like this:

1. **Day 1 of the month**: log into 4 platforms per client, copy numbers into a Google Doc.
2. **Days 2-4**: format, polish, write commentary.
3. **Day 5**: send manually, often with last-minute formatting fixes.
4. **Days 5-7**: chase the one client who replies "can you also include X?"
5. **Repeat for every client.** Twenty clients × 2 hours × 12 months = 480 hours per year of report assembly.

## The SendBriefs version

After the initial setup, the cycle looks like this:

1. **Friday before send day**: review what's queued. Open the Monday-morning batch and skim each preview. Approve or flag for edits. ~10 minutes for 20 clients.
2. **Monday morning**: briefs auto-send between 9am and 10am client-local. You get a Slack digest at 11am summarizing the batch.
3. **Throughout the week**: respond to actual client questions (the substance, not the formatting).

If you do this for a year: ~60 hours of active reporting work instead of 480. The reclaimed 420 hours go to client strategy, new business, or — radically — taking Fridays off.

## Setup: do this once

### Build your house template

Start from a sent brief that worked well. Click **Save as template**. Name it something durable like "Monthly performance — Studio v2."

Add variables for client-specific things:

```
{{client.name}} — {{period.month_name}} performance
{{client.primary_metric_name}}: {{primary_metric.value}}
```

[Templating a recurring brief →](/flows/templating-recurring/) covers this in detail.

### Per-client bindings

For each client:

1. Open the client.
2. Click **New brief → From template → Monthly performance — Studio v2**.
3. Confirm or override each binding (most will pre-fill from previous briefs).
4. Set the period to **Last calendar month**.
5. Click **Save as draft**.

You now have a draft brief per client, all using the same template.

### Schedule recurring

Open one of the drafts. Click **Set up recurring**:

- **Cadence**: Monthly on day 1 (or whatever you prefer — day 3 gives data sources time to settle).
- **Send time**: 9am client-local.
- **Approval step**: Optional. If on, the brief moves to "pending approval" 2 days before send.

Apply this schedule to all clients via **bulk schedule** in the Drafts view.

## The monthly cycle (after setup)

### Friday before send week: review

The previous month's data is now available. Open **Drafts** and you'll see each scheduled brief.

For each:

1. Click to open the preview.
2. Skim the numbers. Anything that looks wildly off (10× anomaly, missing data warning)?
3. If something looks wrong: open the underlying data, decide if it's a real issue or a binding glitch.
4. If something is genuinely interesting (a record high/low, a campaign blowup): add a one-line commentary to the prose section.
5. Approve.

For 20 clients, this takes about 10 minutes. The whole point is that *most* months are routine — the data is right and the brief reads itself.

### Send day: ignore everything

Briefs send automatically. You get a Slack message at 11am with the digest:

> 📬 **Monthly batch sent (May 2026)**
> - 20 briefs sent successfully
> - 2 briefs paused (data error: GA4 reauth needed for Acme + Beta)
> - 18 ready for client review

If there are errors, the digest tells you exactly what. Fix and re-trigger the affected briefs.

<Placeholder type="screenshot" caption="Slack digest message after a monthly batch send" />

### Through the week: respond to substance

Most replies are positive — "thanks, looks great." Some will be substantive — "wait, why did organic traffic drop?"

These are the conversations you want to be in. They're not formatting questions, they're strategy questions.

## What to do when it goes wrong

### Data binding errors mid-batch

If GA4 tokens expired for some clients, briefs in the batch will fail with a clear error. Reconnect under **Integrations**, then click **Retry send** on each failed brief.

### A client wants a one-off addition

Open their next scheduled brief. Add the requested block (or write commentary in the prose section). Save. The recurring schedule continues unchanged — your edit applies only to this period.

If they want this every month, add it to the template instead.

### A client wants a different cadence

Edit their recurring schedule. Just for that client.

### You want to pause everything

**Settings → Send schedule → Pause all recurring sends**. Useful around holidays or if you're between agencies and don't want to send briefs during a transition.

## Sample weekly rhythm

Here's how one of our pilot agencies (20 clients, 2-person team) runs it:

| Day | Activity | Time |
|---|---|---|
| **Mon AM** | Slack digest from yesterday's send. Skim. | 2 min |
| **Mon-Wed** | Substantive client replies. | Variable |
| **Thu** | Connect new client (if onboarding). Test new template version. | 30 min |
| **Fri PM** | Review next week's queued briefs. Approve or flag. | 10 min |
| **Sat-Sun** | Off. | 0 min |

The Fri-PM review is the load-bearing habit. Treat it like a 10-minute calendar event. If you skip it, the briefs still send — but you lose the opportunity to add per-period commentary.

## See also

- [Templating a recurring brief](/flows/templating-recurring/) — the template recipe
- [Onboarding a new client](/flows/client-onboarding/) — adding a client to the cycle
- [Edits & approvals](/flows/edits-and-approvals/) — managing client review
