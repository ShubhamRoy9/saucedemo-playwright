const { test, expect } = require('@playwright/test');

test('@deleteapi delete post', async ({ request }) => {

  // ✅ Step 1: Resource ID to delete
  const postId = 1;

  console.log('DELETING POST ID:', postId);

  // ✅ Step 2: Send DELETE request
  const response = await request.delete(
    `https://jsonplaceholder.typicode.com/posts/${postId}`
  );

  // ✅ Step 3: Validate status
  expect(response.status()).toBe(200);

  // ✅ Step 4: Get response
  const body = await response.json();
  console.log('RESPONSE:', body);

  // ✅ Step 5: Validate deletion (mock API behavior)
  expect(body).toEqual({});
});
