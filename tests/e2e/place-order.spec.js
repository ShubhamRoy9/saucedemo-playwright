const { test, expect } = require('@playwright/test');

const { LoginPage }    = require('../../pages/LoginPage');
const { ProductsPage } = require('../../pages/ProductsPage');
const { CartPage }     = require('../../pages/CartPage');
const { CheckoutPage } = require('../../pages/CheckoutPage');

const testData = require('../../fixtures/testData.json');

//just to test the ci/cd new branch , i am adding this comment 
test('@Smoke @Regression Valid User should place order successfully', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const productsPage = new ProductsPage(page);
  const cartPage = new CartPage(page);
  const checkoutPage = new CheckoutPage(page);

  await loginPage.goto();
  await loginPage.login(
    testData.validUser.username,
    testData.validUser.password
  );

  await productsPage.addFirstProductToCart();
  await productsPage.gotoCart();

  await cartPage.checkout();

  console.log('CI/CD Integration');

  await checkoutPage.fillDetails(
    testData.checkout.firstName,
    testData.checkout.lastName,
    testData.checkout.postalCode
  ); 

  await checkoutPage.finishOrder();

  const message = await checkoutPage.getSuccessMessage();
  expect(message).toContain('Thank you for your order');
});
