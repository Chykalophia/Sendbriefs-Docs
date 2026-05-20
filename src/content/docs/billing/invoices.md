---
title: Invoices & receipts
description: Where invoices live, how to download them, and how to forward them automatically to accounting.
sidebar:
  order: 3
---

import Placeholder from '../../../components/Placeholder.astro';

<aside class="sb-tldr">
<p class="sb-tldr-label">TL;DR</p>
Past invoices live at <strong>Settings → Billing → Invoices</strong>. Download as PDF. Set up auto-forwarding to accounting@yourdomain.com if your accountant wants every invoice automatically.
</aside>

## Where invoices live

**Settings → Billing → Invoices**. Visible to Owners and Admins only.

You'll see a table of every invoice with:

- Invoice number
- Date issued
- Amount
- Status (Paid / Past due / Refunded)
- Period covered
- PDF download link
- "Send to email" button

## Downloading invoices

Click the PDF icon next to any invoice. Downloads immediately.

The PDF includes:

- Your business name + billing address (from tax info)
- Our business name + address
- Invoice number + date
- Period covered
- Line items
- Subtotal
- Tax (if applicable)
- Total
- Payment method (last 4 digits of card or ACH last 4)
- Payment date

The PDF is suitable for submission to expense systems (Expensify, Brex, Ramp, Concur, etc.).

## Auto-forwarding to accounting

If you want every invoice to automatically go to your bookkeeper:

1. **Settings → Billing → Invoice email forwarding**.
2. Enter the destination email (e.g., `accounting@youragency.com`).
3. Save.

Going forward, every invoice we issue is also sent to that address with the PDF attached. Owners + Admins still get the original.

You can add up to 3 forwarding addresses.

## Past invoices for past plan periods

We keep invoices for the lifetime of your account.

If you closed your account and need an old invoice, email billing@sendbriefs.com. We'll send the PDF within 1 business day.

## Re-issuing invoices

Sometimes you need an invoice re-issued (e.g., your tax ID changed, your billing address moved, you need a different business entity on the invoice).

1. Update the relevant info in **Settings → Billing → Tax info**.
2. From the invoice list, click the invoice you want re-issued.
3. Click **Re-issue with current tax info**.
4. New PDF generates. Old one stays in the history with a "superseded" badge.

We don't change the invoice number for re-issues — same number, marked as a revision.

## Receipts (for credit card payments)

Every paid invoice doubles as a receipt. The PDF includes payment confirmation.

If you specifically need a separate "receipt" document (some accounting systems require this), the **Send to email** action sends a clean receipt PDF.

## Currency

Invoices are issued in the currency you signed up with (default USD; we also support EUR, GBP, CAD, AUD).

To change currency, contact billing@sendbriefs.com. Change applies to the next renewal — we don't switch mid-cycle.

## Tax / VAT

The invoice clearly separates pre-tax subtotal, tax amount, and total.

For EU-based customers with a valid VAT number, the invoice shows "Reverse charge applies. Customer to account for VAT."

For US-based customers, sales tax (if applicable) is itemized by state.

For non-EU, non-US: no tax is added unless you've specifically asked us to (rare; usually for customers with local tax filing obligations).

## Refunds

Refund details appear on the original invoice as a "credit" line item.

If you got a refund mid-cycle (e.g., from a plan change or cancellation), the next invoice shows the refund as a negative line item rather than a separate document.

For full refunds (e.g., 30-day money-back from an annual plan), we issue a separate credit note PDF.

## Expense system integration

We don't have native integrations with Expensify / Brex / Ramp etc., but the PDF format works with all of them. Forward to your expense system's email-in address (most have one).

Some agencies set up auto-forwarding to their Brex or Ramp inbox by using our invoice email forwarding feature.

## Receipts and tax season

A common question around tax season: "where can I find all my invoices from last year?"

**Settings → Billing → Invoices** has filters for date range. Filter to "January 1 - December 31 of [year]" and click **Download all as ZIP** to get every invoice in one archive.

<Placeholder type="screenshot" caption="Invoices tab with date filter + Download all as ZIP button" />

## Common gotchas

- **Time zone matters.** Invoices issued at 11:55pm on Dec 31 in our system time zone (UTC) might show up as Jan 1 in your local time zone. Use the issue date on the PDF, not the email timestamp, for filing purposes.
- **PDF attachment size.** Some corporate email systems strip attachments over a threshold. If your accountant says "the invoice didn't come through," it's almost always email system filtering — re-download from the dashboard.
- **Re-issued invoices don't auto-forward.** When you re-issue, only the workspace Owner gets the new copy by default. If you have forwarding set up, manually click "Send to email" on the re-issued invoice.

## See also

- [Managing your subscription](/billing/managing-subscription/) — billing cycles, payment methods
- [Pricing & plans](/billing/plans/) — what's on each invoice
