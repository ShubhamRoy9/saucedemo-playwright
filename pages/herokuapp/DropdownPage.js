class DropdownPage{
    constructor(page){
        this.page = page;
        this.dropdown = page.locator('select[id="dropdown"]');
       // locator 'option' means , find all <option> elements inside that dropdown only
        this.option = this.dropdown.locator('option');
    }
        async goto() {
            await this.page.goto('/dropdown');
        }

        async selectByValue(value){
            await this.dropdown.selectOption(value);
        }

        async getSelectedText() {
            return await this.dropdown.inputValue();
        }

        async getAllOptions() {
            return await this.option.allTextContents();
        }
    
}

module.exports = { DropdownPage };