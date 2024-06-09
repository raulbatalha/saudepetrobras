import { defineConfig } from '@playwright/test';
const path = require('path');

export default defineConfig({
  expect: {
    timeout: 10000
  },
  globalSetup: "./global.setup",
  fullyParallel: false,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 1 : 1,
  workers: process.env.CI ? 3 : undefined,
  reporter: 'html',

  projects: [
    { name: 'setup', testMatch: /.*\.setup\.ts/ },
    {
      name: 'UI tests',
      testDir: 'ui-tests',
      retries: 0,
      use: {
        browserName: 'chromium',
        trace: 'on-first-retry',
        headless: true,
        //storageState: path.resolve(__dirname, 'authToken', '.auth', 'loginAuth.json'),
        screenshot: 'only-on-failure',
        video: 'retain-on-failure',
        viewport: { width: 1920, height: 1080 },
      },
      timeout: 60000,
      dependencies: ['setup'],
    },
  ],
});