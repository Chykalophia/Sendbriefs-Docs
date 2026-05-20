---
title: API access
description: A public API for SendBriefs is in development. Webhooks are available today.
sidebar:
  order: 1
  badge:
    text: Soon
    variant: note
---

A public REST API for SendBriefs is in active development. Here's what's available today and what's coming.

## Available today: webhooks

If you need to push data into SendBriefs from your own systems, [webhooks](/features/integrations/#webhooks-push-your-own-data) are live and stable.

You can send custom metric data, custom event streams, or anything else you'd model as time-series data. Bind brief blocks to webhook-fed data the same way you bind to GA4 or Stripe.

## In development

We're building a public REST API for the operations our customers most ask about:

- **Programmatic client creation** — provision a new client from your CRM when a deal closes.
- **Programmatic brief sending** — trigger a one-off brief from your code.
- **Programmatic integration management** — connect/disconnect data sources via API.
- **Bulk template operations** — apply template changes across many clients atomically.

## When

We don't pre-announce ship dates we're not sure of yet. Realistic window for the first public endpoints is **late 2026**.

When the API is ready, this page will be replaced with full reference docs.

## In the meantime

If you have a specific automation need that's blocking you today, email partners@sendbriefs.com and describe what you're trying to build. We've been doing one-off API arrangements with Agency-tier customers and Enterprise customers for the past six months. We may already support the thing you need, just not as a documented public endpoint.

The pattern we typically take: you describe the workflow, we either point you at an existing internal endpoint with the appropriate auth setup, or we add it to the public roadmap with your use case as a forcing function.

## Wait-list

If you want to be notified the day the public API ships, email api@sendbriefs.com with "wait-list" in the subject. We'll notify you with full reference docs the day they're public.

No marketing follow-up, no drip sequences. One email when the API ships.

## See also

- [Integrations](/features/integrations/) — connect data sources we already support
- [Notifications & delivery](/features/notifications/) — Slack and email notifications
