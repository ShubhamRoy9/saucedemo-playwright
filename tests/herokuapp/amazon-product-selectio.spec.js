const { test } = require('@playwright/test');
const { AmazonSearchPage } = require('../../pages/herokuapp/AmazonSearchPage');

test('@amazon product selection and cart validation', async ({ page }) => {

    const amazon = new AmazonSearchPage(page);

    const searchKeyword = 'iphone';
    const productToSelect = 'iPhone 17 Pro 256 GB';

    await amazon.goto();
    await amazon.searchProduct(searchKeyword);

    await amazon.selectProductAddToCartAndVerify(productToSelect);
});
