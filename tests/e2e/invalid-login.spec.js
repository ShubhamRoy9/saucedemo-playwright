const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../pages/LoginPage');
const testData = require('../../fixtures/testData.json');

test('@Invalid login should show error message', async ({page}) =>{

    const loginPage = new LoginPage(page);

    await loginPage.goto();

    await loginPage.login(
        'wrong_user',
        'wrong_password'
    );

    const message = await loginPage.getErrorMessage();
   console.log(message);
})