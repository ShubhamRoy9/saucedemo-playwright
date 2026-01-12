const { expect, test } = require('@playwright/test');
const { AlertPage } = require('../../pages/herokuapp/AlertPage');

test('@Alert functionality', async({page}) => {
    const alertPage = new AlertPage(page);
    await page.goto('/javascript_alerts');

    // JS Alert OK 
    // (Below all are dialog event- alert, confirm or prompt) 
    // Alerts are event based, must be registered before clicking, otherwise test will hang
    page.once('dialog', async dialog => {  //Hey Playwight, listen for the next browser dialog that appears on this page
        expect(dialog.type()).toBe('alert');// page.once - runs only one time, best for single alert,,, page.on -runs every time , best for multiple dialog
        expect(dialog.message()).toBe('I am a JS Alert');
        await dialog.accept();
    });
    await alertPage.clickJsALert();
    expect(await alertPage.getResultText()).toContain('You successfully clicked an alert');


    // JS Confirm (Cancel)s

    page.once('dialog', async dialog => {
        expect(dialog.type()).toBe('confirm');
        await dialog.dismiss();
    });

    await alertPage.clickJsConfirm();
    expect(await alertPage.getResultText()).toContain('You clicked: Cancel');


    //JS Prompt(Input)

    page.once('dialog', async dialog => {
        expect(dialog.type()).toBe('prompt');
        await dialog.accept('Playwright')// it will put the playwright in prompt imput
    });

    await alertPage.clickJsPrompt();
    expect(await alertPage.getResultText()).toContain('Playwright');
});