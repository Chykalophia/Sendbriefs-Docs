/**
 * Smoke tests — every route returns 200, has a sensible title, and key
 * brand elements (Comfort FAB, footer, sidebar) appear.
 */

import { test, expect } from '@playwright/test';

const ROUTES = [
  '/',
  '/getting-started/welcome/',
  '/features/briefs/',
  '/flows/monthly-reporting/',
  '/billing/plans/',
  '/api/coming-soon/',
] as const;

test.describe('Smoke — routes load, brand chrome renders', () => {
  for (const route of ROUTES) {
    test(`${route} loads with brand chrome`, async ({ page }) => {
      const response = await page.goto(route);

      // 200 response
      expect(response?.status()).toBe(200);

      // Title contains SendBriefs
      await expect(page).toHaveTitle(/SendBriefs/i);

      // Comfort FAB is present (it's on every page)
      await expect(page.locator('.sb-comfort-fab')).toBeVisible();

      // Footer tagline is present
      await expect(page.locator('.sb-footer-tagline')).toBeVisible();
    });
  }
});

test.describe('Comfort Panel — opens, toggles, persists', () => {
  test('opens the dialog on FAB click', async ({ page }) => {
    await page.goto('/');
    await page.locator('.sb-comfort-fab').click();
    await expect(page.locator('.sb-comfort-dialog')).toBeVisible();
    await expect(page.locator('#sb-comfort-title')).toHaveText('Reading comfort');
  });

  test('toggling text size persists across reloads', async ({ page }) => {
    await page.goto('/getting-started/welcome/');
    await page.locator('.sb-comfort-fab').click();

    // Click "L" in the text size segmented control
    await page
      .locator('[data-sb-comfort-segmented="textSize"] [data-value="l"]')
      .click();

    // Check that html attribute updated
    await expect(page.locator('html')).toHaveAttribute('data-text-size', 'l');

    // Reload and confirm setting persists
    await page.reload();
    await expect(page.locator('html')).toHaveAttribute('data-text-size', 'l');
  });

  test('toggling high-contrast persists across reloads', async ({ page }) => {
    await page.goto('/getting-started/welcome/');
    await page.locator('.sb-comfort-fab').click();

    await page
      .locator('[data-sb-comfort-toggle="highContrast"]')
      .click();

    await expect(page.locator('html')).toHaveClass(/high-contrast/);

    await page.reload();
    await expect(page.locator('html')).toHaveClass(/high-contrast/);
  });

  test('reset clears all settings', async ({ page }) => {
    await page.addInitScript(() => {
      window.localStorage.setItem(
        'sb-comfort-v1',
        JSON.stringify({
          v: 1,
          textSize: 'l',
          density: 'spacious',
          dyslexiaFont: true,
          highContrast: true,
        }),
      );
    });
    await page.goto('/');
    await page.locator('.sb-comfort-fab').click();
    await page.locator('[data-sb-comfort-reset]').click();

    await expect(page.locator('html')).toHaveAttribute('data-text-size', 'm');
    await expect(page.locator('html')).not.toHaveClass(/density-spacious/);
    await expect(page.locator('html')).not.toHaveClass(/dyslexia-mode/);
    await expect(page.locator('html')).not.toHaveClass(/high-contrast/);
  });
});

test.describe('Placeholder is dev-only', () => {
  test('placeholders are not in the production HTML', async ({ page }) => {
    // The Getting Started pages have placeholders in dev. They must
    // NOT appear in the production preview build.
    await page.goto('/getting-started/connect-first-client/');
    await expect(page.locator('.sb-placeholder')).toHaveCount(0);
  });
});
