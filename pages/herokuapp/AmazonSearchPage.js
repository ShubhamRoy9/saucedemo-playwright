class AmazonSearchPage {
    constructor(page){
        this.page = page;
        this.searchBox = page.locator('input[placeholder="Search Amazon.in"]');
        this.searchButton = page.locator('#nav-search-submit-button');
    }

    async goto() {
        await this.page.goto('https://www.amazon.in');
    }

    async searchProduct(productName){
        await this.searchBox.fill(productName);
        await this.searchButton.click();
    }

    async selectProductAddToCartAndVerify(productName){

        // 1️⃣ Locate real product card
        const product = this.page
            .locator('[data-component-type][data-asin]', { hasText: productName })
            .first();

        // 2️⃣ Click product
        await product.click();

        // 3️⃣ Get active page (same tab OR new tab)
        const pages = this.page.context().pages();
        const productPage = pages[pages.length - 1];

        await productPage.waitForLoadState();

        // 4️⃣ Add to cart (ARIA-based locator)
        await productPage.getByRole('button', { name: /add to cart/i }).click();

        // 5️⃣ Navigate to cart
        await productPage.locator('#nav-cart').click();

        // 6️⃣ Validate product title in cart
        await expect(
            productPage.locator('.sc-product-title')
        ).toContainText(productName);
    }
}

module.exports = { AmazonSearchPage };



// //FOR FLIPKART 
// async selectProductByNameFlipkart(productName) {

//     const product = this.page
//         .locator('div._1AtVbE', { hasText: productName })
//         .first();

//     await product.click();
// }


// //FOR AMAZON 
//  async selectProductAddToCartAndVerify(productName){

//         const product = this.page
//             .locator('[data-component-type][data-asin]', { hasText: productName })
//             .first();

//         await product.click();
//  }

 
//  //Combine Logic 
//  async searchSelectAndAddToCart(productName) {

//   // search
//   await this.page.fill('#twotabsearchtextbox', productName);
//   await this.page.click('#nav-search-submit-button');

//   // select product by name
//   const product = this.page
//     .locator('[data-component-type][data-asin]', { hasText: productName })
//     .first();

//   await product.click();

//   // handle same tab / new tab
//   const pages = this.page.context().pages();
//   const productPage = pages[pages.length - 1];

//   await productPage.waitForLoadState();

//   // add to cart
//   await productPage.getByRole('button', { name: /add to cart/i }).click();
// }
