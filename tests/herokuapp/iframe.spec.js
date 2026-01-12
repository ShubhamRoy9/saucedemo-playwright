const { expect, test } = require('@playwright/test');
const { IframePage } = require('../../pages/herokuapp/IframePage');

test('@iframe test', async ({page}) => {

    await page.goto('/iframe');
    const iframePage = new IframePage(page);

    //validate page heading (outside iframe)
    expect(await iframePage.getPageHeading()).toContain('Editor');

    //Interact inside iframe 
    // await iframePage.clearEditor();
    await iframePage.typeInEditor('Playwright iFrame automation');

    const editorText = await iframePage.getEditorText();
    expect(editorText).toContain('Playwright iFrame automation');
});