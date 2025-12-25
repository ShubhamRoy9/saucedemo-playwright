class CheckoutPage{
    constructor(page) {
        this.page=page;
        this.firstNameInput = page.locator('#first-name');
        this.lastNameInput = page.getByRole('textbox', {name : 'Last Name'});
        this.postalCodeInput = page.locator('#postal-code');
        this.continueButton = page.locator('#continue');
        this.finishButton = page.locator('#finish');
        this.successMessage = page.getByText('Thank you for your order!');
    }

    async fillDetails(firstName, lastName, postalCode) {
        await this.firstNameInput.fill(firstName);
        await this.lastNameInput.fill(lastName);
        await this.postalCodeInput.fill(postalCode);
        await this.continueButton.click();
    }

    async finishOrder() {
        await this.finishButton.click();
    }

    async getSuccessMessage() {
        return await this.successMessage.textContent()

    }
}

module.exports = {CheckoutPage};