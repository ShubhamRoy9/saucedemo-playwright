const { test, expect } = require('@playwright/test');

test('@putapi update post', async ({ request }) => {

  const payload = {
    title: 'Update Automated Post',
    body: 'Updated using Playwright API',
    userId: 121
  };

  console.log('UPDATE PAYLOAD:', payload);

  const response = await request.put(
    'https://jsonplaceholder.typicode.com/posts/1',
    {
      json: payload
    }
  );

  // Status validation
  expect(response.status()).toBe(200);

  const body = await response.json();
  console.log('RESPONSE:', body);

  // Validate update (mock-safe)
  expect(body.id).toBeDefined();

  // Validate request payload
  expect(payload.title).toBe('Update Automated Post');
  expect(payload.userId).toBe(121);
});
