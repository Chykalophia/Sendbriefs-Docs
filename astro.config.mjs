// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// Detect prod-vs-dev for the placeholder feature, etc.
const SITE = process.env.SITE_URL ?? 'https://docs.sendbriefs.com';

// https://astro.build/config
export default defineConfig({
  site: SITE,

  // The docs site is meant to live at docs.sendbriefs.com (subdomain).
  // If you ever move it to sendbriefs.com/docs, set `base: '/docs'` and
  // update SITE_URL accordingly.

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
        { icon: 'linkedin', label: 'LinkedIn', href: 'https://www.linkedin.com/company/sendbriefs' },
        { icon: 'email', label: 'Contact', href: 'mailto:support@sendbriefs.com' },
      ],

      customCss: [
        './src/styles/fonts.css',
        './src/styles/brand.css',
        './src/styles/comfort.css',
      ],

      // Component overrides — we wrap Starlight's defaults with SendBriefs chrome.
      components: {
        Head: './src/overrides/Head.astro',
        Header: './src/overrides/Header.astro',
        Footer: './src/overrides/Footer.astro',
        SocialIcons: './src/overrides/SocialIcons.astro',
      },

      // Disable Starlight's default mobile menu styling — we use ours.
      // (Starlight handles the menu; we only restyle.)

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
          label: 'Core features',
          items: [
            { label: 'Briefs', slug: 'features/briefs' },
            { label: 'Clients', slug: 'features/clients' },
            { label: 'Reports & data', slug: 'features/reports' },
            { label: 'Workspaces & teams', slug: 'features/workspaces' },
            { label: 'Integrations', slug: 'features/integrations' },
            { label: 'Notifications & delivery', slug: 'features/notifications' },
            { label: 'Recipient experience', slug: 'features/recipient-experience' },
          ],
        },
        {
          label: 'Settings reference',
          collapsed: true,
          items: [
            { label: 'Settings — the full tab map', slug: 'features/settings-overview' },
            { label: 'Brief templates', slug: 'features/templates' },
            { label: 'Approval policy', slug: 'features/approvals' },
            { label: 'Scheduled reports', slug: 'features/scheduled-reports' },
            { label: 'Email Layout', slug: 'features/email-layout' },
            { label: 'Media Library', slug: 'features/media-library' },
            { label: 'Activity & audit log', slug: 'features/activity' },
            { label: 'Profile & personal security', slug: 'features/profile-security' },
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
            { label: 'API access', slug: 'api/coming-soon', badge: { text: 'Soon', variant: 'note' } },
          ],
        },
      ],

      // Built-in Pagefind search — no Algolia, no external dependency.
      pagefind: true,

      // Match cookie + analytics ban: no Google Analytics, no third-party CDN fonts.
      // Self-hosted @fontsource fonts in src/styles/fonts.css.

      // Last-updated dates from git
      lastUpdated: true,

      // Pagination at the bottom of each page
      pagination: true,

      // Accessibility: skip link is on by default
    }),
  ],

  // Astro markdown config — add Mermaid via rehype-mermaid if needed later.
  markdown: {
    shikiConfig: {
      themes: {
        light: 'github-light',
        dark: 'github-dark-dimmed',
      },
      wrap: true,
    },
  },

  // Don't ship sourcemaps to production
  build: {
    inlineStylesheets: 'auto',
  },

  // Image optimization is enabled by default in Astro 6
  image: {
    responsiveStyles: true,
  },
});
