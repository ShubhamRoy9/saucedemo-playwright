class AlertPage {
    constructor(page){
        this.page = page;
        this.jsAlertBtn = page.locator('button[onclick="jsAlert()"]');
        //or page.getByRole('button', {name: 'jsAlert()'})
        this.jsConfirmBtn = page.locator('button[onclick="jsConfirm()"]');
        this.jsPromptBtn = page.locator('button[onclick="jsPrompt()"]');

        this.result = page.locator('#result');
    }

    async clickJsALert(){
        await this.jsAlertBtn.click();
    }

    async clickJsConfirm(){
        await this.jsConfirmBtn.click();
    }

    async clickJsPrompt() {
        await this.jsPromptBtn.click()
    }

    async getResultText(){
        return await this.result.textContent();
    }
}

module.exports = {AlertPage}