---
title: Send your first brief
description: Pick a template, render with real data, review, send. About 15 minutes for the first one. Two minutes the second time.
sidebar:
  order: 5
---

import Placeholder from '../../../components/Placeholder.astro';

<aside class="sb-tldr">
<p class="sb-tldr-label">TL;DR</p>
From the client page, click <strong>New brief</strong>. Pick the <em>Monthly performance summary</em> starter template, point it at your connected data, click <strong>Preview</strong>, fix anything that looks off, click <strong>Send test to me</strong>, then <strong>Send to client</strong>.
</aside>

## The mental model

A brief is built from three things:

1. **A template** — the structure and the prose between data blocks. Reused every period.
2. **A reporting period** — last week, last month, last quarter, custom.
3. **A data binding** — which integrations supply numbers for each block.

The template + period + bindings get rendered into an HTML email and a PDF. Both get sent (the PDF is attached).

## Step 1: Pick a starter template

From your client's page, click **New brief → From starter template**.

<Placeholder type="screenshot" caption="Template gallery with 8 starters: Monthly performance, Weekly snapshot, Quarterly review, etc." />

We ship 8 starter templates. The most common starting point is **Monthly performance summary** — it's the right shape for 80% of agency reports.

It has six blocks out of the box:

1. Headline metric (e.g., revenue, conversions, or whichever KPI matters most).
2. Period-over-period table (this month vs. last month vs. same month last year).
3. Top performers (top 5 campaigns, products, pages — depending on integrations).
4. Trend chart (last 6 months of the headline metric).
5. Issues + opportunities (free-text section with optional AI-drafted bullets).
6. Next steps (free-text section).

You can add, remove, or reorder blocks. We'll do that in [Templating a recurring brief](/flows/templating-recurring/) later.

## Step 2: Bind data

For each block, the template asks "where does the number come from?"

<Placeholder type="screenshot" caption="Data binding screen — left side: blocks; right side: integration picker" />

For example, the headline metric block asks:

- **Source**: Pick GA4 (or whichever integration has the metric).
- **Metric**: Pick *Total revenue* (auto-suggests based on the source).
- **Filter** (optional): Limit to a specific country, segment, or property.

Repeat for each block. The template comes with reasonable defaults — for most starter templates, you just confirm each binding.

If a block can't find data (e.g., the chosen metric returned `null`), the brief preview will show an inline warning and suggest fixes.

## Step 3: Set the reporting period

By default, the starter template is set to **Last month** (calendar month, in the client's time zone).

Other options:

- **Last week** (week starts on Monday by default; configurable)
- **Last 30 / 60 / 90 days** (rolling)
- **Last quarter** (calendar quarter)
- **Custom** (pick a start and end date)

The period defines the time window for every data binding. Briefs sent on May 5 with "Last month" set will report on April 1 – April 30.

## Step 4: Preview

Click **Preview**. We render the brief with real data.

<Placeholder type="screenshot" caption="Preview pane — desktop view of the rendered brief with sample data" />

What to check:

- **Are the numbers right?** Cross-check the headline metric against the source platform.
- **Does any block look empty or weird?** A zero is fine; a blank is usually a binding issue.
- **Are dates correct?** The period header should match what you set.
- **Does the branding match expectations?** Logo, color, recipient name in the salutation.

## Step 5: Send a test to yourself first

Before the client sees anything, click **Send test to me**. This sends the rendered brief to *your* email so you can:

- See it in your actual inbox (rendering can differ from preview).
- Open the PDF attachment and skim.
- Click through any links (e.g., "Open dashboard") to make sure they work.

This step takes 30 seconds and catches problems the preview pane can't show.

## Step 6: Send to client

When the test looks right:

1. Click **Send to client**.
2. Confirm the recipient list (primary + any CC/BCC).
3. Choose **Send now** or **Schedule** (date + time in the client's time zone).
4. Confirm.

You'll see a confirmation toast and the brief will move to the **Sent** tab.

If you scheduled it, you can edit the brief content up until 5 minutes before send time. After that, it's locked.

## Step 7: Watch delivery

Inside the sent brief, you'll see:

- **Delivered** — SMTP success (usually within 30 seconds).
- **Opened** — if the recipient loaded images (most email clients do; some don't, like Apple Mail Privacy Protection).
- **Clicked** — if any tracked link in the brief was clicked.

These are best-effort. Don't read too much into "0 opens" — privacy-conscious recipients block tracking pixels. Phone call follow-up beats email tracking every time.

## You did it

You sent a brief. You can do the same thing for every other client now. The second one takes about 2 minutes — most of the work is reusable.

## Next: what comes next

[What's next →](/getting-started/whats-next/)
