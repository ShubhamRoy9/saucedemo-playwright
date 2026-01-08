const { defineConfig } = require('@playwright/test');
const envConfig = require('./utils/env');   // <-- load env file

// ENV value from CLI / CI / default
const ENV = process.env.ENV || 'qa';

console.log(`👉 Running tests on ENV: ${ENV}`);

module.exports = defineConfig({

  // fullyParallel: true, // run tests in parallel across files
  // workers: '50%', //use half of available CPU cores

  testDir: './tests',

  retries: process.env.CI ? 2 : 0,

  workers: process.env.CI ? '50%' : undefined,

  use: {
    baseURL: envConfig[ENV].baseURL,
    headless: process.env.CI ? true : false,
    screenshot: 'only-on-failure',
    video: process.env.CI ? 'retain-on-failure' : 'off',
    // trace: 'on-first-retry',
    trace: process.env.CI ? 'retain-on-failure' : 'off'
  },

  reporter: [
    ['list'],
    ['html', { open: 'never' }],
    ['allure-playwright']
  ]
});
