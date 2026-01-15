class DynamicLoadingPage {
    constructor(page){
        this.page = page;
        this.startButton = page.locator('#start button');
        this.loadingText = page.locator('#loading');
        this.finishText = page.locator('#finish h4');
    }

    async clickStart() {
        await this.startButton.click();
    }

    async getFinishText() {
        return await this.finishText.textContent();
    }
}

module.exports = { DynamicLoadingPage };
