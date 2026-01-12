//We cant interact with iframe element directly using "page.locator()"

class IframePage {
    constructor(page){
        this.page = page;

        // iframe locator
        this.iframe = page.frameLocator('#mce_0_ifr');

        //element Inside iframe
        this.editorBody = this.iframe.locator('#tinymce');

        //element outside iframe
        this.heading = page.locator('h3');
    }

    // async clearEditor() {
    //     await this.editorBody.fill('');
    // }

    async typeInEditor(text){
        await this.editorBody.type(text);
    }

    async getEditorText() {
        return await this.editorBody.textContent();
    }

    async getPageHeading() {
        return await this.heading.textContent();
    }

}

module.exports = { IframePage };

