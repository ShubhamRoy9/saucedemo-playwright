const {test, expect} = require('@playwright/test');
const {DynamicControlPage} = require('../../pages/herokuapp/DynamicControlPage');

// test('@flacky test', async({page}) => {

//     const dc = new DynamicControlPage(page);

//     await dc.goto();
//     await dc.enableInput();

//     await expect(dc.inputField).toBeEnabled();
// });


//stabality test 

test.describe('@stability', () => {  //this describe is test suite and test is test case 

    test.describe.configure({ retries: 2 });

    test('@uielement enable input', async ({page}) => {

        const dc = new DynamicControlPage(page);

        await dc.goto();
        await dc.enableInput();

        await expect(dc.statusMessage).toHaveText("It's enabled!");

        await expect(dc.inputField).toBeEnabled();
    });
});