const { test, expect } = require('@playwright/test');

test('@integration UI + API validation', async ({ page }) => {

  // Step 1: Open page
  await page.goto('https://the-internet.herokuapp.com/notification_message_rendered');

  // Step 2: Wait for API call
  const [response] = await Promise.all([

    // Listen for backend response
    page.waitForResponse(resp =>
      resp.url().includes('notification') && resp.status() === 200
    ),

    // Trigger UI action
    page.click('a')
  ]);

  // Step 3: Validate API response
  expect(response.status()).toBe(200);

  const body = await response.text();
  console.log('API RESPONSE:', body);

  // Step 4: Validate UI
  const message = await page.locator('#flash').textContent();

  expect(message).toBeTruthy();
});

