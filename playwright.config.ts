import { defineConfig, devices } from '@playwright/test';

/**
 * Playwright config for SendBriefs Docs.
 *
 * Two projects:
 *   - a11y — runs axe-core scans against every route (WCAG 2.1 AA)
 *   - smoke — basic page-loads-without-error checks
 *
 * Both run against `pnpm preview` (production build served locally).
 */

const PORT = Number(process.env.PORT ?? 4321);
const BASE_URL = `http://localhost:${PORT}`;

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 2 : undefined,
  reporter: process.env.CI ? [['github'], ['html', { open: 'never' }]] : 'list',

  use: {
    baseURL: BASE_URL,
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
  },

  // Spin up the preview server automatically for the test run.
  webServer: {
    command: `pnpm preview --port ${PORT} --host`,
    url: BASE_URL,
    reuseExistingServer: !process.env.CI,
    timeout: 60_000,
    stdout: 'pipe',
    stderr: 'pipe',
  },

  projects: [
    {
      name: 'a11y',
      testMatch: /a11y\.spec\.ts/,
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'smoke',
      testMatch: /smoke\.spec\.ts/,
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});
