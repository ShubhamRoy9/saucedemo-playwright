class WindowPage {
    constructor(page){
        this.page = page;
        this.clickHereLink = page.locator('a[href="/windows/new"]');
        this.heading = page.locator('h3');
    }

    async openNewWindow(){
        await this.clickHereLink.click();
    }

    async getHeadingText() {
        return await this.heading.textContent();
    }
}

module.exports = { WindowPage }