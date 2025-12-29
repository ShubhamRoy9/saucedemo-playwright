const { test, expect} = require('@playwright/test');

const {LoginPage} = require('../../pages/LoginPage');
const {ProductsPage} = require('../../pages/ProductsPage');

const data = require('../../fixtures/testData.json');

test('@regression products should sort by price low to high', async({page}) =>{

    const loginPage = new LoginPage(page);
    const productsPage = new ProductsPage(page);

    await loginPage.goto();
    await loginPage.login(
        data.validUser.username,
        data.validUser.password
    );

    await productsPage.sortByLowToHigh();

    const pricesFromUI = await productsPage.getAllProductPrices();
    console.log('prices from UI:', pricesFromUI);

    // created a sorted copy
    const sortedPrices = [...pricesFromUI].sort((a,b) => a-b);
    console.log('Expected sorted prices:', sortedPrices);

    //compare UI order vs expected order 
    expect(pricesFromUI).toEqual(sortedPrices);

});