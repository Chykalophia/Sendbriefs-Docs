---
title: Upgrading, downgrading, canceling
description: How plan changes work mid-cycle, what happens to your data when you cancel, and how to reactivate later.
sidebar:
  order: 4
---

<aside class="sb-tldr">
<p class="sb-tldr-label">TL;DR</p>
Upgrade anytime — we prorate and charge the difference. Downgrade anytime — change applies at the end of the current cycle. Cancel anytime — data retained for 90 days, briefs stop sending. Reactivate within 90 days to restore everything.
</aside>

## Upgrading

You can upgrade your plan at any time. The change takes effect immediately.

### How upgrades are billed

- **Monthly plans**: we calculate the prorated difference between your current plan and the new plan for the remainder of the current cycle. You're charged that difference today. Future cycles bill at the new rate.
- **Annual plans**: same logic. We prorate based on days remaining in the annual cycle.

Example: you're on Studio monthly ($X/mo) and upgrade to Agency monthly ($Y/mo) on day 15 of a 30-day cycle. We charge ($Y - $X) ÷ 2 today. Day 31 onward bills at the full Agency rate.

### How to upgrade

1. **Settings → Billing → Subscription**.
2. Click **Change plan**.
3. Pick the new plan.
4. Review the prorated charge.
5. Confirm.

You'll see the upgrade reflected immediately. All gated features become available within a few seconds.

## Downgrading

Downgrades take effect **at the end of the current billing cycle**, not immediately. This way you don't lose features you already paid for.

### How to downgrade

Same path as upgrading: **Settings → Billing → Subscription → Change plan → pick a lower tier**.

You'll see a notice: "Plan will downgrade to [Plan] on [date]." Until that date, you have the current plan's features.

### What happens if you exceed the new plan's limits

You can't downgrade to a plan that doesn't fit your current usage. We'll show a friendly error like:

> "Studio allows up to 25 clients. You currently have 32. Archive or delete 7 clients before downgrading."

The error includes a direct link to the clients list, filterable by **least recently used**, so you can identify candidates for archiving.

## Canceling

Canceling stops your subscription at the end of the current billing cycle. You keep access until then.

### How to cancel

1. **Settings → Billing → Subscription**.
2. Click **Cancel subscription**.
3. Tell us why (optional but appreciated — helps us improve).
4. Confirm.

You'll get a confirmation email. Your subscription stays active until the end of the current cycle.

### Canceling mid-cycle

If you cancel partway through a cycle, you keep access through the end of that cycle. We don't refund the unused portion for monthly plans.

For annual plans, you keep access through the end of the annual term. If you'd prefer a prorated refund for the unused months, email billing@sendbriefs.com — we'll evaluate case-by-case (usually fine for cancellations within 30 days of purchase, harder later in the term).

### What happens after the cancellation date

1. **Briefs stop sending.** All scheduled briefs pause.
2. **Data is preserved for 90 days.** You can log in, see everything, export data. You just can't send new briefs.
3. **At day 90, data is permanently deleted.** Templates, clients, briefs, integrations, audit logs — all wiped.

If you change your mind within the 90-day window, [reactivate](#reactivating).

### What's NOT deleted at day 90

- Your **user account** (the login) stays usable for joining other workspaces.
- **Past invoices** stay accessible for tax / compliance reasons.

## Reactivating

If you canceled but want back in within 90 days:

1. Log in to your existing account.
2. You'll see a "Reactivate" banner at the top.
3. Click **Reactivate** and pick a plan.
4. Add a payment method.
5. Confirm.

Your data is restored exactly as you left it. Any scheduled briefs that would have sent during the cancellation period are flagged as "Missed during cancellation" and aren't auto-sent — you decide if you want to send them now or skip.

## Switching billing cadence (monthly ↔ annual)

You can switch monthly → annual at any time:

1. **Settings → Billing → Subscription**.
2. Click **Switch to annual**.
3. We prorate the unused portion of the current monthly cycle as a credit toward the annual.
4. Confirm.

Going annual → monthly only happens at annual renewal. We don't break annual contracts mid-cycle.

## Refunds policy

- **First 30 days of an annual plan**: full refund minus any prorated usage at the monthly rate.
- **Monthly plans**: no refunds; just cancel and pay for the current cycle through to the end.
- **Mid-annual cancellation**: prorated refund evaluated case-by-case. Email billing@sendbriefs.com.

For mistaken charges (e.g., your card was charged after we agreed to cancel), email billing@sendbriefs.com immediately. We resolve these within 1 business day.

## Data export before canceling

Before you cancel, you can export everything:

- **Templates**: **Templates → [template] → Export JSON**.
- **Clients**: **Settings → Bulk client export** (CSV).
- **Briefs**: each brief has an **Export** option for HTML, PDF, and raw data CSV.
- **Audit log**: **Settings → Audit log → Export CSV**.

If you want a single bulk export of everything in a structured format, email support@sendbriefs.com. We can produce a complete workspace export within 2 business days.

## What happens to your clients' data

When you cancel:

- Scheduled briefs to your clients stop.
- We **do not** send any "your service is ending" message to your clients automatically. That's your call.
- Past briefs your clients received are unaffected — they stay in the recipient's inbox.

If you'd like us to notify your clients on your behalf as part of an off-boarding, talk to support — we have a template for this and can send from your verified domain.

## Common gotchas

- **Downgrade gotcha:** if you're on Studio with 5 team members and downgrade to Solo, you'll need to remove 4 members first.
- **Annual cancellation timing:** canceling on day 360 of a 365-day cycle means you keep access for 5 more days, then it ends. Plan accordingly.
- **Reactivation after 90 days creates a fresh workspace.** Same login, new (empty) workspace.
- **You can have multiple cancellations and reactivations.** No penalty for changing your mind, but data is only retained 90 days after each cancellation.

## See also

- [Pricing & plans](/billing/plans/) — what each tier includes
- [Managing your subscription](/billing/managing-subscription/) — payment methods, tax info
- [Invoices & receipts](/billing/invoices/) — accessing past invoices
