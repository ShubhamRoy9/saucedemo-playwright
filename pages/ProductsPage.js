class ProductsPage {
    constructor(page) {
        this.page = page;
        this.firstAddToCartButton = page.locator('#add-to-cart-sauce-labs-backpack');
        this.cartIcon = page.locator('.shopping_cart_link');
    }

    async addFirstProductToCart(){
        await this.firstAddToCartButton.click();
    }

    async gotoCart() {
        await this.cartIcon.click();
    }
}

module.exports = { ProductsPage };