---
title: Create your account
description: Sign up for SendBriefs in about 3 minutes. No credit card needed for the trial.
sidebar:
  order: 2
---

import Placeholder from '../../../components/Placeholder.astro';

<aside class="sb-tldr">
<p class="sb-tldr-label">TL;DR</p>
Visit <a href="https://app.sendbriefs.com/signup">app.sendbriefs.com/signup</a>, enter your work email, verify, set a password. 14-day trial, no card.
</aside>

## Before you start

You'll need:

- A **work email address** (not Gmail / Outlook personal — see [Why work email matters](#why-work-email-matters) below).
- About **3 minutes**.

You will **not** need:

- A credit card. The trial is 14 days, no card.
- Your team's invitation list. You can invite them later.
- Your client list. You'll set up your first client in the next step.

## The signup flow

<Placeholder type="screenshot" caption="The /signup page with email + password fields visible" />

1. Go to [app.sendbriefs.com/signup](https://app.sendbriefs.com/signup).
2. Enter your work email and a password (12+ characters; we'll suggest a strong one).
3. Check your inbox for a verification email. Click the link — it expires in 30 minutes.
4. You'll land on a screen asking for your name and your agency's name. Both can be edited later.
5. Done. You're signed in.

## Why work email matters

SendBriefs uses your email domain to:

- **Auto-detect your team.** If a colleague signs up later with the same domain, we'll prompt them to join your workspace instead of creating a new one. Saves the awkward "wait, why do we have two SendBriefs accounts?" conversation.
- **Verify domain ownership** when you connect your sending email (so client briefs go out from `@yourdomain.com`, not `@sendbriefs.com`).

If you signed up with a personal email by mistake, you can [add and verify your work domain later](/features/workspaces/#change-primary-email) — but it's faster to use it from the start.

## Two-factor authentication (recommended)

After your first login, you'll see a yellow banner asking you to enable 2FA. Do it now:

1. Click **Enable 2FA**.
2. Scan the QR code with your authenticator app (1Password, Authy, Google Authenticator — anything TOTP-compatible).
3. Enter the 6-digit code to confirm.
4. Save the recovery codes somewhere safe. If you lose your phone, these are how you get back in.

<Placeholder type="screenshot" caption="2FA enrollment screen with QR code and recovery codes" />

This is non-negotiable for any client briefs containing data you've connected. A leaked SendBriefs login could expose your clients' analytics and revenue data.

## Next: set up your first workspace

Workspaces are how SendBriefs separates one agency's clients from another. Even if you're a solo operator, you'll have at least one workspace.

[Set up your first workspace →](/getting-started/first-workspace/)
