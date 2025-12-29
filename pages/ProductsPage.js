class ProductsPage {
    constructor(page) {
        this.page = page;
        this.firstAddToCartButton = page.locator('#add-to-cart-sauce-labs-backpack');
        this.cartIcon = page.locator('.shopping_cart_link');
        this.cartBadge = page.locator('[data-test ="shopping-cart-badge"]');
        this.sortDropdown = page.locator('[data-test ="product-sort-container"]');
        this.productPrices = page.locator('[data-test ="inventory-item-price"]');''
    }

    async addFirstProductToCart(){
        await this.firstAddToCartButton.click();   //This will only get first product 
    }   


    async addProductByName(productName){
        const item = this.page.locator('.inventory_item', { hasText: productName });
        await item.getByRole('button', { name: 'Add to cart' }).click();
    }

    async sortByLowToHigh(page){
        //await page.getByTestId('product-sort-container').selectOption('lohi');
    
        await this.sortDropdown.selectOption('lohi')
    }

    async getAllProductPrices() {
        const prices = await this.productPrices.allTextContents()
            return prices.map(p => Number(p.replace('$', '')));
        
    }


    async gotoCart() {
        await this.cartIcon.click();
    }
}

module.exports = { ProductsPage };