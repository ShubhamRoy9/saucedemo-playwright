class ProductsPage {
    constructor(page) {
        this.page = page;
        this.firstAddToCartButton = page.locator('#add-to-cart-sauce-labs-backpack');
        this.cartIcon = page.locator('.shopping_cart_link');
        this.cartBadge = page.locator('[data-test ="shopping-cart-badge"]');
    }

    async addFirstProductToCart(){
        await this.firstAddToCartButton.click();   //This will only get first product 
    }   


    async addProductByName(productName){
        const item = this.page.locator('.inventory_item', { hasText: productName });
        await item.getByRole('button', { name: 'Add to cart' }).click();
    }


    async gotoCart() {
        await this.cartIcon.click();
    }
}

module.exports = { ProductsPage };