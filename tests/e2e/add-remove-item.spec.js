const { test, expect } = require('@playwright/test');

const {LoginPage} = require('../../pages/LoginPage');
const {ProductsPage} = require('../../pages/ProductsPage');
const {CartPage} = require('../../pages/CartPage');

const testData = require('../../fixtures/testData.json');

test('@sanity user should add and remove item from cart', async({page}) =>{

    const loginPage = new LoginPage(page);
    const productsPage = new ProductsPage(page);
    const cartPage = new CartPage(page);

    const productName = 'Sauce Labs Backpack';

    await loginPage.goto();
    await loginPage.login(
        testData.validUser.username,
        testData.validUser.password
    );


    await productsPage.addProductByName(productName);

    await expect(productsPage.cartBadge).toHaveText('1');

    await productsPage.gotoCart();

    await expect(cartPage.cartItem(productName)).toBeVisible();

    await cartPage.removeItem(productName);

    // verify specific item removed
    await expect(cartPage.cartItem(productName)).toHaveCount(0);

    // verify cart is empty
    await expect(cartPage.cartItems).toHaveCount(0);



});