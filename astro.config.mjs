// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import { unified } from '@astrojs/markdown-remark';
import rehypeTableRegion from './src/plugins/rehype-table-region.mjs';

const SITE = process.env.SITE_URL ?? 'https://docs.sendbriefs.com';

// https://astro.build/config
export default defineConfig({
  site: SITE,

  // Old feature pages moved into App tour and Settings; keep their links working.
  redirects: {
    '/features/activity': '/app/activity/',
    '/features/approvals': '/settings/approvals/',
    '/features/briefs': '/app/briefs/',
    '/features/clients': '/app/clients/',
    '/features/email-layout': '/settings/email-layout/',
    '/features/integrations': '/settings/connected-accounts/',
    '/features/media-library': '/settings/media-library/',
    '/features/notifications': '/app/notifications/',
    '/features/profile-security': '/app/profile/',
    '/features/recipient-experience': '/app/client-portal/',
    '/features/reports': '/app/brief-page/',
    '/features/scheduled-reports': '/settings/scheduling/',
    '/features/settings-overview': '/settings/',
    '/features/templates': '/settings/templates/',
    '/features/workspaces': '/app/workspaces/',
  },

  // Served at the root of docs.sendbriefs.com. To serve under sendbriefs.com/docs,
  // set `base: '/docs'` and update SITE_URL.

  integrations: [
    starlight({
      title: 'SendBriefs Docs',
      description:
        'How to send client briefs that don’t wreck your Friday. Use guides, workflows, and reference for the SendBriefs platform.',

      logo: {
        src: './src/assets/logo.svg',
        replacesTitle: false,
        alt: 'SendBriefs',
      },

      favicon: '/favicon.svg',

      editLink: {
        baseUrl: 'https://github.com/Chykalophia/Sendbriefs-Docs/edit/main/',
      },

      // Match marketing's social presence; no GitHub here on purpose.
      social: [
        {
          icon: 'linkedin',
          label: 'LinkedIn',
          href: 'https://www.linkedin.com/company/sendbriefs',
        },
        { icon: 'email', label: 'Contact', href: 'mailto:support@sendbriefs.com' },
      ],

      customCss: ['./src/styles/fonts.css', './src/styles/brand.css', './src/styles/comfort.css'],

      components: {
        Head: './src/overrides/Head.astro',
        Header: './src/overrides/Header.astro',
        Footer: './src/overrides/Footer.astro',
        TwoColumnContent: './src/overrides/TwoColumnContent.astro',
        SocialIcons: './src/overrides/SocialIcons.astro',
        MobileMenuToggle: './src/overrides/MobileMenuToggle.astro',
        Search: './src/overrides/Search.astro',
      },

      sidebar: [
        {
          label: 'Getting started',
          items: [
            { label: 'Welcome', slug: 'getting-started/welcome' },
            { label: 'Create your account', slug: 'getting-started/create-account' },
            { label: 'Set up your first workspace', slug: 'getting-started/first-workspace' },
            { label: 'Connect your first client', slug: 'getting-started/connect-first-client' },
            { label: 'Send your first brief', slug: 'getting-started/send-first-brief' },
            { label: 'What’s next', slug: 'getting-started/whats-next' },
          ],
        },
        {
          label: 'App tour',
          items: [
            { label: 'Home', slug: 'app/home' },
            { label: 'Briefs', slug: 'app/briefs' },
            { label: 'New brief', slug: 'app/new-brief' },
            { label: 'Due briefs', slug: 'app/due-briefs' },
            { label: 'The brief page', slug: 'app/brief-page' },
            { label: 'The brief editor', slug: 'app/brief-editor' },
            { label: 'Add an update', slug: 'app/add-an-update' },
            { label: 'Clients', slug: 'app/clients' },
            { label: 'Contacts', slug: 'app/contacts' },
            { label: 'Activity', slug: 'app/activity' },
            { label: 'Team', slug: 'app/team' },
            { label: 'Notifications', slug: 'app/notifications' },
            { label: 'Profile and security', slug: 'app/profile' },
            { label: 'Workspaces', slug: 'app/workspaces' },
            { label: 'Search and shortcuts', slug: 'app/search-and-help' },
            { label: 'What clients see', slug: 'app/client-portal' },
          ],
        },
        {
          label: 'Settings',
          collapsed: true,
          items: [
            { label: 'Overview', slug: 'settings' },
            { label: 'General', slug: 'settings/general' },
            { label: 'Security', slug: 'settings/security' },
            { label: 'Delete workspace', slug: 'settings/delete-workspace' },
            { label: 'Logo and colors', slug: 'settings/logo-and-colors' },
            { label: 'Client portal', slug: 'settings/client-portal' },
            { label: 'Media library', slug: 'settings/media-library' },
            { label: 'Templates', slug: 'settings/templates' },
            { label: 'Writing styles', slug: 'settings/writing-styles' },
            { label: 'Approvals', slug: 'settings/approvals' },
            { label: 'Scheduling', slug: 'settings/scheduling' },
            { label: 'Email sending', slug: 'settings/email-sending' },
            { label: 'Email layout', slug: 'settings/email-layout' },
            { label: 'Notifications', slug: 'settings/notifications' },
            { label: 'Connected accounts', slug: 'settings/connected-accounts' },
            { label: 'Plan and billing', slug: 'settings/plan-and-billing' },
          ],
        },
        {
          label: 'Emails',
          collapsed: true,
          items: [
            { label: 'Every email we send', slug: 'emails/overview' },
            { label: 'Client emails', slug: 'emails/client-emails' },
            { label: 'Team notifications', slug: 'emails/team-notifications' },
            { label: 'Account emails', slug: 'emails/account-emails' },
            { label: 'Billing and admin emails', slug: 'emails/billing-and-admin-emails' },
          ],
        },
        {
          label: 'Processes & flows',
          collapsed: false,
          items: [
            { label: 'Monthly client reporting', slug: 'flows/monthly-reporting' },
            { label: 'Onboarding a new client', slug: 'flows/client-onboarding' },
            { label: 'Templating a recurring brief', slug: 'flows/templating-recurring' },
            { label: 'Edits & approvals', slug: 'flows/edits-and-approvals' },
            { label: 'Multi-contributor briefs', slug: 'flows/add-an-update' },
            { label: 'Annual review workflow', slug: 'flows/annual-review' },
          ],
        },
        {
          label: 'Billing & plans',
          collapsed: true,
          items: [
            { label: 'Pricing & plans', slug: 'billing/plans' },
            { label: 'Managing your subscription', slug: 'billing/managing-subscription' },
            { label: 'Invoices & receipts', slug: 'billing/invoices' },
            { label: 'Upgrading, downgrading, canceling', slug: 'billing/upgrading-canceling' },
            { label: 'Add-ons — white-label & custom domain', slug: 'billing/addons' },
            { label: 'Plan limits & metering', slug: 'billing/limits-and-metering' },
          ],
        },
        {
          label: 'API & developers',
          collapsed: true,
          items: [
            {
              label: 'API access',
              slug: 'api/coming-soon',
              badge: { text: 'Soon', variant: 'note' },
            },
          ],
        },
      ],

      // Built-in Pagefind search — no Algolia, no external dependency.
      pagefind: true,

      // Match cookie + analytics ban: no Google Analytics, no third-party CDN fonts.
      // Self-hosted @fontsource fonts in src/styles/fonts.css.

      lastUpdated: true,

      pagination: true,
    }),
  ],

  markdown: {
    processor: unified({ rehypePlugins: [rehypeTableRegion] }),
    shikiConfig: {
      themes: {
        light: 'github-light',
        dark: 'github-dark-dimmed',
      },
      wrap: true,
    },
  },

  build: {
    inlineStylesheets: 'auto',
  },

  image: {
    responsiveStyles: true,
  },
});
