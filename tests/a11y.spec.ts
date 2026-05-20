/**
 * Accessibility tests — runs axe-core against every route in the docs site.
 * Asserts zero violations at WCAG 2.1 AA + 2.0 AA.
 *
 * Two coverage layers:
 *   1. Static crawl — every URL we know about
 *   2. Comfort modes — sample page with each toggle applied (so we catch
 *      contrast regressions in dyslexia / high-contrast / etc.)
 */

import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

// Keep this list in sync with the sidebar in astro.config.mjs.
const ROUTES = [
  '/',
  '/getting-started/welcome/',
  '/getting-started/create-account/',
  '/getting-started/first-workspace/',
  '/getting-started/connect-first-client/',
  '/getting-started/send-first-brief/',
  '/getting-started/whats-next/',
  '/features/briefs/',
  '/features/clients/',
  '/features/reports/',
  '/features/workspaces/',
  '/features/integrations/',
  '/features/notifications/',
  '/flows/monthly-reporting/',
  '/flows/client-onboarding/',
  '/flows/templating-recurring/',
  '/flows/edits-and-approvals/',
  '/flows/annual-review/',
  '/billing/plans/',
  '/billing/managing-subscription/',
  '/billing/invoices/',
  '/billing/upgrading-canceling/',
  '/api/coming-soon/',
] as const;

const A11Y_TAGS = ['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'] as const;

test.describe('Accessibility — every route is WCAG 2.1 AA clean', () => {
  for (const route of ROUTES) {
    test(`${route} has no axe violations`, async ({ page }) => {
      await page.goto(route);
      await page.waitForLoadState('networkidle');

      const results = await new AxeBuilder({ page }).withTags([...A11Y_TAGS]).analyze();

      // Filter out any known false positives here if they appear.
      // (As of writing, none.)
      const violations = results.violations;

      if (violations.length > 0) {
        // Print clearly so the failure tells you which rules fired
        console.log(
          'A11y violations on',
          route,
          '\n',
          JSON.stringify(
            violations.map((v) => ({ id: v.id, impact: v.impact, help: v.help })),
            null,
            2,
          ),
        );
      }

      expect(violations).toEqual([]);
    });
  }
});

test.describe('Accessibility — comfort modes preserve compliance', () => {
  const SAMPLE_ROUTE = '/getting-started/welcome/';

  test('high-contrast mode passes axe', async ({ page }) => {
    await page.addInitScript(() => {
      window.localStorage.setItem(
        'sb-comfort-v1',
        JSON.stringify({ v: 1, textSize: 'm', density: 'comfort', highContrast: true }),
      );
    });
    await page.goto(SAMPLE_ROUTE);
    await page.waitForLoadState('networkidle');

    const results = await new AxeBuilder({ page }).withTags([...A11Y_TAGS]).analyze();
    expect(results.violations).toEqual([]);
  });

  test('dyslexia-mode passes axe', async ({ page }) => {
    await page.addInitScript(() => {
      window.localStorage.setItem(
        'sb-comfort-v1',
        JSON.stringify({ v: 1, textSize: 'm', density: 'comfort', dyslexiaFont: true }),
      );
    });
    await page.goto(SAMPLE_ROUTE);
    await page.waitForLoadState('networkidle');

    const results = await new AxeBuilder({ page }).withTags([...A11Y_TAGS]).analyze();
    expect(results.violations).toEqual([]);
  });

  test('large text + spacious density passes axe', async ({ page }) => {
    await page.addInitScript(() => {
      window.localStorage.setItem(
        'sb-comfort-v1',
        JSON.stringify({ v: 1, textSize: 'l', density: 'spacious' }),
      );
    });
    await page.goto(SAMPLE_ROUTE);
    await page.waitForLoadState('networkidle');

    const results = await new AxeBuilder({ page }).withTags([...A11Y_TAGS]).analyze();
    expect(results.violations).toEqual([]);
  });
});
