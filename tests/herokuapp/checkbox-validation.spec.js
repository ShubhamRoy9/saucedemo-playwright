const {test, expect} = require('@playwright/test');
const {CheckboxesPage} = require('../../pages/herokuapp/CheckboxesPage');

test('@checkbox validation', async ({page}) => {
    
    const checkboxPage = new CheckboxesPage(page);

    await checkboxPage.goto();

    if(!(await checkboxPage.checkbox1.isChecked()))
    await checkboxPage.checkbox1.check();
    await expect(checkboxPage.checkbox1).toBeChecked();


    if(await checkboxPage.checkbox2.isChecked())
        await checkboxPage.checkbox2.uncheck();

    await expect(checkboxPage.checkbox2).not.toBeChecked();
});