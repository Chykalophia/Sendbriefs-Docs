---
title: Notifications & delivery
description: How briefs get to recipients, what tracking exists, and how to wire up internal notifications.
sidebar:
  order: 6
---

import Placeholder from '../../../components/Placeholder.astro';

<aside class="sb-tldr">
<p class="sb-tldr-label">TL;DR</p>
Briefs send via SendGrid (your sending domain if verified, ours if not). Delivery, opens, clicks are tracked best-effort. Internal notifications (Slack, email digests) keep your team informed without babysitting every send.
</aside>

## Outbound delivery

When a brief is scheduled to send, here's the sequence:

1. **Render** — we compile the template + bindings + period into HTML and PDF.
2. **Sign** — SPF, DKIM, and DMARC alignment for your sending domain (or ours).
3. **Submit to SendGrid** — our email infrastructure provider.
4. **SendGrid delivers** — to the recipient's email provider over SMTP.
5. **Receipt logged** — we store the SendGrid message ID for tracking.

The whole sequence takes 10–60 seconds for most briefs.

## Sending domains

By default, briefs send from `reports@sendbriefs.com`. To send from your own domain:

1. **Settings → Sending domains → Add domain**.
2. Add DNS records (SPF + DKIM + optional MX for replies).
3. Click **Verify** — usually completes in under 10 minutes.

Once verified, you can pick the sending domain per brief or globally per workspace.

[Full sending domain setup →](/features/workspaces/#sending-domains)

## Tracking

We track three things, all best-effort:

### Delivered
SMTP-level success — the recipient's mail server accepted the message. Logged within ~30 seconds of send.

This is reliable. If "Delivered" shows green, the mail server got it. Whether the user opens it is a different question.

### Opened
The recipient loaded our 1×1 tracking pixel. Logged with timestamp.

**Caveats:**
- Apple Mail Privacy Protection (default on iOS 15+) auto-loads the pixel from a proxy, inflating opens.
- Outlook and some corporate Mail servers strip or pre-load images.
- "Plain text only" recipients never trigger an open.

Don't treat "not opened" as "not read." Phone follow-up beats opens-as-engagement metric every time.

### Clicked
The recipient clicked any link in the brief. We rewrite links to redirect through our tracker.

Cleaner signal than opens. If a recipient clicked a link, they engaged with the content.

### Bounced / Spam / Failed
- **Bounced** — recipient's server rejected the message (invalid address, mailbox full, etc.).
- **Spam** — recipient's server marked it as spam OR the recipient hit "Report spam."
- **Failed** — we couldn't even submit to SendGrid (rare; usually a malformed sending domain).

## Internal notifications

You don't need to watch every send. Configure these under **Settings → Notifications**:

### Slack
Connect Slack via OAuth. Choose:

- **Daily digest channel** — posts a summary every weekday morning: briefs sent yesterday, opens, anything failed.
- **Real-time alerts channel** — posts immediately on send failures, integration errors, or canceled briefs.

You can pick different channels for digest and alerts.

<Placeholder type="screenshot" caption="Slack settings panel showing connected workspace + channel pickers" />

### Email digest
Same data as the Slack digest, delivered to your email. Configurable per team member (each person can opt in independently).

### Per-brief notifications
On individual briefs, you can subscribe to:

- Send confirmation
- Open notification
- Click notification
- Approval needed

Useful for VIP clients where you want a real-time signal.

## Recipient delivery preferences

The recipient experience:

### Email
Default. HTML body + PDF attachment. Mobile-responsive.

### PDF only
For recipients who prefer attached PDFs without inline HTML. Set per recipient under **Client → Recipients**.

### Web link
A "View in browser" link at the top of every brief opens the brief in a hosted page. Useful for recipients who block HTML email.

### Client portal (Pro plan)
Recipients log into a portal at `portal.sendbriefs.com/[your-slug]` to see current and historical briefs. The portal supports comments and approvals.

## Unsubscribe handling

Every brief includes an unsubscribe link in the footer (CAN-SPAM compliance).

When a recipient clicks unsubscribe:

1. They land on a confirmation page with the option to unsubscribe from all SendBriefs sends to them OR from just this client.
2. We honor the choice immediately.
3. The workspace owner gets an email notification.

You can't override this — unsubscribe is a legal requirement and we don't allow disabling it.

## Reply handling

When a recipient replies to a brief:

- If your sending domain has MX records pointing to us, we can capture replies and forward them to the brief sender.
- If your sending domain doesn't, replies bounce. (We'll suggest setting up reply handling on first send.)

Replies appear in the brief's **Communications** tab. You can also opt to forward to your normal inbox.

## Rate limits

SendGrid has dynamic rate limits based on your warm-up and reputation. For most agencies, this is invisible — you can send thousands of briefs per day without hitting limits.

If you're planning a one-time large send (e.g., year-end report to 5,000 clients), email support@sendbriefs.com to coordinate. We'll temporarily increase capacity.

## Suppression list

If a recipient bounces hard or marks the brief as spam, we add them to a suppression list. We won't send to suppressed addresses, even if you add them to a new client.

Workspace owners can view and (carefully) un-suppress addresses under **Settings → Suppression list**.

Hard bounces stay suppressed permanently. Spam complaints stay suppressed for 90 days unless you manually un-suppress.

## Common gotchas

- **Gmail clipping.** Gmail truncates emails over ~102KB. Long briefs may get clipped with a "View entire message" link. We try to keep briefs under this limit but very data-heavy briefs can hit it. The PDF attachment is always complete.
- **Calendar invites in briefs.** If your template includes a meeting CTA, the recipient's calendar app may interpret the email as an invite. Avoid `text/calendar` MIME parts unless you actually want this.
- **Tracking blockers.** Recipients using extensions like Ugly Email or Mailtrack-style tools can see and block tracking pixels. Don't be surprised by 0% open rates from technical recipients.
- **Time zone in send confirmations.** Our internal notifications report timestamps in the workspace time zone, not the recipient's. Briefs themselves use the client's time zone.

## See also

- [Workspaces & teams → Sending domains](/features/workspaces/#sending-domains)
- [Edits & approvals](/flows/edits-and-approvals/) — for the approval workflow
- [Briefs](/features/briefs/) — what gets delivered
