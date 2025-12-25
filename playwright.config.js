const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',

  use: {
    baseURL: 'https://www.saucedemo.com',
    headless: true,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure'
  },

  reporter: [
    ['list'],                     // console output
    ['html', { open: 'never' }],  // Playwright HTML report
    ['allure-playwright']         // Allure results generator
  ]
});
