const { name } = require("../../playwright.config");

class DynamicControlPage{
    constructor(page){
        this.page = page;
        this.enableButton = page.getByRole('buuton', {name: 'Enable'});
        this.disableButton = page.getByRole('button', {name: 'Disable'});
        this.inputField = page.locator('input[type = "text"]');
        this.statusMessage = page.locator('#message');
    }

    async goto(){
        await this.page.goto('/dynamic_controls');
    }

    async enableInput() {
        await this.enableButton.click();
    }

    async disableInput() {
        await this.disableButton.click();
    }

}

module.exports = {DynamicControlPage}