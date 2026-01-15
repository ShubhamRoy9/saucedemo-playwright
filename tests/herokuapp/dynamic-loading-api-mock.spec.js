const { test, expect } = require('@playwright/test');
const { DynamicLoadingPage } = require('../../pages/herokuapp/DynamicLoadingPage');

// test('@mock dynamic loading backend', async ({page}) =>{

//     //Mock backend before page load. page.route - intercepts all network requests matching the pattern 
//     //**/dynamic.. **/ - match anything before or after dynamic specific api path
//     // page.route - intercept
//     await page.route('**/dynamic_loading/**', async route => {

//         //Simulate backend delay(optional) - artificially delays response by 500ms
//         await new Promise(res => setTimeout(res, 500));

//         //Fulfill with fake response
//         // route.full - MOCK
//         // It stops the ral backend call and send this response instead
//         await route.fulfill({
//             status: 200,
//             contentType: 'text/html',
//             body:
//             <div id="finish">
//                 <h4>Hello World!</h4>
//             </div>
//         });

//     });

//     // Open the same Herokuapp page
//     await page.goto('https://the-internet.herokuapp.com/dynamic_loading/1');

//     const dynamicPage = new DynamicLoadingPage(page);

//     //Trigger UI action
//     await dynamicPage.clickStart();

//     //Validate UI(from Mocked backend)
//     const text = await dynamicPage.getFinishText();
//     expect(text).toBe('Hello World!');
// });



test('@mock dynamic loading backend', async ({ page }) => {

  await page.route('**/dynamic_loading/**', async route => {

    // 👇 Let the MAIN HTML page load
    if (route.request().resourceType() === 'document') {
      return route.continue();
    }

    // 👇 Mock only backend/XHR
    await new Promise(res => setTimeout(res, 500));

    await route.fulfill({
      status: 200,
      contentType: 'text/html',
      body: `
        <div id="finish">
          <h4>Hello World!</h4>
        </div>
      `
    });
  });

  await page.goto('https://the-internet.herokuapp.com/dynamic_loading/1');

  const dynamicPage = new DynamicLoadingPage(page);
  await dynamicPage.clickStart();

  const text = await dynamicPage.getFinishText();
  expect(text).toBe('Hello World!');
});
