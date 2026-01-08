const { test, expect } = require('@playwright/test');
const { DropdownPage } = require('../../pages/herokuapp/DropdownPage');

test('@dropdown validation', async({page}) => {

    const dropdownPage = new DropdownPage(page);

    await dropdownPage.goto();
    const options = await dropdownPage.getAllOptions();
    console.log('Dropdown Options:', options);

    expect(await dropdownPage.getSelectedText()).toBe('');

    await dropdownPage.selectByValue('1');
    expect(await dropdownPage.getSelectedText()).toBe('1');

    await dropdownPage.selectByValue('2');
    expect(await dropdownPage.getSelectedText()).toBe('2');


});