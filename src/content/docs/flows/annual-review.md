---
title: Annual review workflow
description: Building, scheduling, and sending year-end summary briefs that justify the relationship and renew the engagement.
sidebar:
  order: 5
---

import Placeholder from '../../../components/Placeholder.astro';

<aside class="sb-tldr">
<p class="sb-tldr-label">TL;DR</p>
Annual reviews aren't bigger monthly briefs — they're a different shape. Use the <strong>Year-in-review</strong> starter template. Build it in December (or your fiscal Q4) using twelve months of cached data. Schedule for the first week of January (or fiscal Q1). Plan 30-45 minutes per client of human-written commentary on top of the auto-rendered numbers.
</aside>

## Why annual reviews are different

A monthly brief is news — "here's what happened in May." An annual review is narrative — "here's the year, here's what we did about it, here's where we go next."

The data work is automated. The narrative work isn't.

## The structure

The **Year-in-review** starter template has nine blocks:

1. **Year headline** — the one number that defines the year (revenue, growth rate, total leads, whatever).
2. **Year-over-year comparison** — this year vs. last year, broken out by quarter.
3. **Quarterly trend chart** — 8 quarters of the headline metric.
4. **Highlight reel** — top campaigns, biggest wins, key moments (typically prose + 3 mini-stat callouts).
5. **Mistakes + lessons** — what didn't work, in honest language. This block is what makes the brief feel real.
6. **Year-end goals vs. actuals** — if you set targets at the start of the year, here's how they landed.
7. **Next year's focus** — three priorities for the coming year. Prose, written by you.
8. **Account team note** — a personal signoff from the account manager.
9. **Renewal CTA** — a soft prompt about next year's engagement.

You can swap blocks. The structure matters more than the specific blocks — annual reviews tell a story, and stories have shape.

## Building it: a December (or fiscal Q4) workflow

Block out **half a day** for this. Even with templates, the commentary work is real.

### Week 1 of December

1. **Open one client's annual review draft.** Start from the **Year-in-review** starter template.
2. **Confirm bindings.** Most pre-fill from existing monthly bindings. Add bindings for any year-only metrics.
3. **Render the auto blocks.** The headline, comparison, trend chart, and goals-vs-actuals all render from data. Confirm the numbers.
4. **Write the prose blocks.** Highlight reel, mistakes + lessons, next year's focus, account team note. This is where the time goes.
5. **Test send to yourself.** Read the whole thing as if you were the client. Does it feel like a year? Does it justify the engagement? Does it land?

### Week 2-3 of December

Repeat for every client. Most agencies block 2-3 days for this and treat it as their year-end ritual.

If you have 20 clients, that's roughly 10-15 hours of writing. It's also the highest-leverage 15 hours of the year — these briefs are read carefully, often forwarded internally, and frequently end up in renewal conversations.

### First week of January (or fiscal Q1)

Briefs send on schedule. You answer thoughtful replies all week.

## The "mistakes + lessons" block

This is the block that distinguishes a real review from a marketing exercise.

Don't write:

> 2025 was a successful year with growth across all channels.

Write:

> Organic traffic dropped 18% after the May Google update. We responded with a content audit in June and recovered ~12% of the loss by Q4. The remaining gap is structural — we'll address it in 2026 by [specific plan].

Be honest about what underperformed and what you'd do differently. Clients trust agencies that own mistakes more than agencies that perform competence.

## The "next year's focus" block

Three priorities is the right number. Two feels thin. Four loses focus.

Each priority should have:

- A one-sentence statement.
- One paragraph of context.
- A specific deliverable or milestone.

Example:

> **Priority 2: rebuild the abandoned-cart flow.**
>
> Current abandoned-cart recovery is 8% — industry benchmark for your category is 12-16%. We've identified [specific issues] in the current flow and have a redesign queued.
>
> **Milestone:** new flow live by end of Q1. Target: 12% recovery by end of Q2.

This block doubles as your engagement roadmap. Reference it in the year's monthly briefs.

## Renewal CTA: soft, not pushy

The bottom block is a renewal prompt. Keep it light:

> Our retainer renews on [date]. We'd love to keep building. [Schedule a 30-min call] to discuss the year ahead.

Don't make this the loudest block. The brief is the value demonstration — the renewal is the natural consequence.

## Scheduling

In the brief's recurring settings:

- **Cadence**: Yearly on [your fiscal year start + 1 week].
- **Time**: 9-10am client-local.
- **Approval**: Strongly recommended. Annual reviews are the worst place to ship a typo.

If you operate on a calendar year, that's first week of January. If you're on a fiscal year (some clients use their fiscal, not yours), set per-client.

## What to do if a client churns mid-year

Generate a **partial-year review** instead. Same template, but the period is "engagement start to last brief date."

This is a relationship-closer. Even when an engagement ends, sending a thoughtful summary of what was accomplished leaves a positive door open.

The renewal CTA doesn't apply here. Replace it with a "thanks for the trust" note.

## Privacy and retention

Annual reviews reference 12 months of historical data. Make sure:

- The client's integrations have been connected the whole year. If GA4 was reconnected mid-year, the gap will show in the trend chart.
- Past data is still in our cache. We retain 24 months of normalized data by default; longer on Pro plans.
- Sensitive details (e.g., one-off NDA topics) aren't auto-rendered. Use the prose blocks for anything that requires editorial judgment.

## Common gotchas

- **Time zone for "the year" boundaries.** A calendar year in the client's time zone may differ from yours by a day. We use the client's time zone (consistent with monthly briefs).
- **Goals vs. actuals only renders if goals were set.** If you didn't track explicit goals, this block stays empty. Either skip the block or backfill goals retroactively.
- **The trend chart needs ≥8 quarters of data.** If the client started with you in month 6, you'll only have 2 quarters. The chart adapts (shows fewer bars) — just note in the prose if you want to call out the limitation.
- **Don't ship the same prose to multiple clients.** It's tempting after writing 20 of these. But "Priority 2 for 2026" should be specific to each client. We've seen clients catch this.

## See also

- [Templating a recurring brief](/flows/templating-recurring/) — building the underlying template
- [Edits & approvals](/flows/edits-and-approvals/) — approval workflow for high-stakes sends
- [Monthly client reporting workflow](/flows/monthly-reporting/) — the cadence this is the capstone of
