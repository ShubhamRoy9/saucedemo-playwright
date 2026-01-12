const { test, expect } = require('@playwright/test');
const { WindowPage } = require('../../pages/herokuapp/WindowPage');

test('@Newwindow', async({page}) => {

    await page.goto('https://the-internet.herokuapp.com/windows')
    //page- playwrigts parent browser tab, WindowPage - Page Object which we have created , windowPage - pageObject instance bound to the parent tab
    const windowPage = new WindowPage(page);

    //wait for new tab
    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'),
        windowPage.openNewWindow()
    ]);


    await newPage.waitForLoadState();

    // we are using same page object i.e. WindowPage for both parents and child because they both have same DOM
    const childWindow = new WindowPage(newPage);
    const heading = await childWindow.getHeadingText();

    expect(heading).toBe('New Window');

    await newPage.close();

    const parentHeading = await windowPage.getHeadingText();
    expect(parentHeading).toBe('Opening a new window')



})

