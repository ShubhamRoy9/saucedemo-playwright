const { defineConfig } = require('@playwright/test');
const envConfig = require('./utils/env');   // <-- load env file

// ENV value from CLI / CI / default
const ENV = process.env.ENV || 'qa';

console.log(`👉 Running tests on ENV: ${ENV}`);

module.exports = defineConfig({

  testDir: './tests',

  use: {
    baseURL: envConfig[ENV].baseURL,
    headless: true,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'on-first-retry'
  },

  reporter: [
    ['list'],
    ['html', { open: 'never' }],
    ['allure-playwright']
  ]
});
