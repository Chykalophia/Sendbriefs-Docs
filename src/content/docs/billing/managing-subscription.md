---
title: Managing your subscription
description: Where to find billing settings, how to update payment methods, and what to expect at renewal.
sidebar:
  order: 2
---

import Placeholder from '../../../components/Placeholder.astro';

<aside class="sb-tldr">
<p class="sb-tldr-label">TL;DR</p>
Billing lives at <strong>Settings → Billing</strong>. Update card, change plan, view next invoice, manage tax info. Only Owners and Admins see billing.
</aside>

## Where billing lives

**Settings → Billing**. Only Owners and Admins can see this section.

You'll find six tabs:

- **Subscription** — current plan, renewal date, next charge amount
- **Payment method** — card on file
- **Tax info** — VAT/GST/tax ID and billing address
- **Invoices** — every past invoice as PDF
- **Usage** — current client count, team count vs. plan limits
- **Plan history** — every plan change with dates

## Subscription details

The **Subscription** tab shows:

- Your current plan and billing cycle
- The next billing date and amount
- Currently used vs. allowed clients and team members
- Any active promo codes or discounts

<Placeholder type="screenshot" caption="Billing subscription tab — plan summary card + usage meters" />

## Updating your payment method

We use Stripe for all billing. To update:

1. **Settings → Billing → Payment method**.
2. Click **Update card**.
3. Enter new card details in the Stripe form (PCI-compliant, hosted by Stripe — your card data never touches our servers).
4. Save.

The new card applies to your next charge. The current cycle's payment is unchanged.

### ACH / wire transfer (Agency + Enterprise)

For larger plans, we accept ACH (US) and SEPA (EU) bank debits. Setup takes 5-7 days for the first authorization, instant after.

For Enterprise, we accept wire transfer against invoice on net-30 terms.

Email billing@sendbriefs.com to set up either.

## Tax info

If your business needs invoices to show a specific tax ID (VAT number, GST number, US sales tax registration):

1. **Settings → Billing → Tax info**.
2. Enter:
   - Legal business name (must match the entity that pays)
   - Tax ID
   - Billing address
3. Save.

Next invoice will reflect this. Past invoices can be re-issued with updated tax info on request.

### EU VAT specifics

If you're EU-based with a valid VAT number, we'll apply the reverse-charge mechanism (VAT 0%, you self-account). We validate the VAT number with VIES at the time you enter it.

### US state sales tax

We're required to collect sales tax in some US states. The amount is added to your invoice automatically based on your billing address.

## Billing cycle and renewal

**Monthly plans** charge on the same day each month (or the closest business day if your billing day falls on a weekend).

**Annual plans** charge once per year on the anniversary of your initial subscription.

You'll get an email 7 days before the next charge with the amount and a link to update payment if needed.

### What happens at renewal

For annual plans, the renewal is auto-charged for the next year at the same plan tier and pricing. You'll see a "Renew now" reminder 30, 14, and 7 days out — you can change plans before renewal to lock in different pricing.

For monthly, every billing cycle is effectively a renewal. No special handling.

## Pausing your subscription

Not available — but you have two options that achieve similar outcomes:

### Option A: downgrade to the lowest plan
If you'll still need access but at lower volume, downgrade to Solo. Cheapest plan that keeps your data accessible.

### Option B: cancel + reactivate later
If you don't need access for a while, [cancel](/billing/upgrading-canceling/#canceling). Your data stays retrievable for 90 days. Within that window, you can reactivate without losing anything.

After 90 days, your data is permanently deleted per our retention policy. Reactivating after that creates a fresh workspace.

## Failed payments

If your card fails:

1. We retry **on day 3, 7, and 14**.
2. You get an email and an in-app banner after each failed attempt.
3. After day 14, the workspace **pauses** — briefs stop sending, but data is preserved.
4. Update your payment method and the workspace resumes immediately.

We don't auto-delete anything for failed payments — only for explicit account closure.

## Multi-workspace billing

Each workspace has its own subscription. There's no "umbrella" billing across multiple workspaces today.

If you operate multiple workspaces and want them on a single invoice, talk to sales about Enterprise billing — we can consolidate for organizations with 3+ workspaces.

## Reseller / agency-of-agencies arrangement

If you resell SendBriefs to your own agency clients (you manage their workspaces), email partners@sendbriefs.com. We have a partner program with reseller pricing for partners with 5+ managed workspaces.

## Common gotchas

- **Plan upgrades take effect immediately.** Downgrades take effect at the end of the current cycle (we don't refund the unused portion).
- **You can't have two payment methods.** Only one card on file at a time.
- **Invoices are emailed to the workspace Owner.** To send them elsewhere (e.g., accounting@), set up [invoice email forwarding](/billing/invoices/#invoice-email-forwarding).
- **Tax info changes apply to the *next* invoice.** Past invoices stay as-issued unless we manually re-issue.

## See also

- [Pricing & plans](/billing/plans/) — what each tier includes
- [Invoices & receipts](/billing/invoices/) — accessing and forwarding past invoices
- [Upgrading, downgrading, canceling](/billing/upgrading-canceling/) — mid-cycle changes
