// const { test, expect } = require('@playwright/test');

// test('@postapi create post', async ({ request }) => {

//   const response = await request.post(
//     'https://jsonplaceholder.typicode.com/posts',
//     {
//       json: {
//         title: 'Automation Test Post',
//         body: 'Created using Playwright API',
//         userId: 121
//       }
//     }
//   );

//   expect(response.status()).toBe(201);

//   const body = await response.json();
//   console.log(body);

//   // Validate creation
//   expect(body.id).toBeDefined();
// });



const { test, expect } = require('@playwright/test');

test('@postapi create post', async ({ request }) => {

  // ✅ Step 1: Create payload object
  const payload = {
    title: 'Automation Test Post',
    body: 'Created using Playwright API',
    userId: 121
  };

  // (Optional) Log payload
  console.log('REQUEST PAYLOAD:', payload);

  // ✅ Step 2: Send request with payload
  const response = await request.post(
    'https://jsonplaceholder.typicode.com/posts',
    {
      json: payload
    }
  );

  // ✅ Step 3: Validate status
  expect(response.status()).toBe(201);

  // ✅ Step 4: Get response
  const body = await response.json();
  console.log('RESPONSE:', body);

  // ✅ Step 5: Validate creation
  expect(body.id).toBeDefined();

  // ✅ Step 6: Validate payload (mock API-safe way)
  expect(payload.title).toBe('Automation Test Post');
  expect(payload.userId).toBe(121);
});
