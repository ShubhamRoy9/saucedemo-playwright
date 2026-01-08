class CheckboxesPage {
    constructor(page) {
        this.page=page;
        this.checkbox1 = page.locator('input[type = "checkbox"]').nth(0);
        this.checkbox2 = page.locator('input[type = "checkbox"]').nth(1);
    }

    async goto(){
       await this.page.goto('/checkboxes');
    }
}

module.exports ={ CheckboxesPage };