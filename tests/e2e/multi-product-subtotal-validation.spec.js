// STEPS:
// Login >
// Add Multiple Products > 
// get Product Prices from Product Page > 
// Go to cart - verify item exist > 
// proceed to checkout > 
// verify    (Item Total == Sum of Individual Product Prices)


const { test, expect } = require('@playwright/test');

const { LoginPage } = require('../../pages/LoginPage');
const { ProductsPage } = require('../../pages/ProductsPage');
const { CartPage } = require('../../pages/CartPage');
const { CheckoutPage } = require('../../pages/CheckoutPage');

const data = require('../../fixtures/testData.json');

test('@Regression2 @Regression subtotal should equal sum of selected product prices', async ({page}) => {

    const login = new LoginPage(page);
    const products = new ProductsPage(page);
    const cart = new CartPage(page);
    const checkout = new CheckoutPage(page);

    const items= [
        'Sauce Labs Backpack', 
        'Sauce Labs Bolt T-Shirt', 
        'Sauce Labs Fleece Jacket', 
        'Sauce Labs Bike Light', 
        'Sauce Labs onesie'
    ];

    await login.goto();
    await login.login(
        data.validUser.username,
        data.validUser.password
    );


    let calculatedSum = 0;

    //Add products + collect prices >> going through items array
    for(const name of items){
        await products.addProductByName(name);
        calculatedSum += await products.getProductPrice(name);
    };

    console.log('calculated sum from product page:', calculatedSum);

    await products.gotoCart();

    //Ensure cart contains both items
    for(const name of items){
        await expect(cart.cartItem(name)).toBeVisible();
    }

    await cart.checkout();

    await checkout.fillDetails(
        data.checkout.firstName,
        data.checkout.lastName,
        data.checkout.postalCode
    );

    const itemTotalUI = await checkout.getItemTotal();

    console.log('Item total displayed on checkput:', itemTotalUI);

    expect(itemTotalUI).toBeCloseTo(calculatedSum, 2);

});