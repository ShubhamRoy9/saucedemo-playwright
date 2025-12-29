const { test, expect } = require('@playwright/test');

const { LoginPage } = require('../../pages/LoginPage');
const { ProductsPage } = require('../../pages/ProductsPage');
const { CartPage } = require('../../pages/CartPage');

const testData = require('../../fixtures/testData.json');

test('@sanity user should add and remove item from cart', async ({ page }) => {

  const loginPage = new LoginPage(page);
  const productsPage = new ProductsPage(page);
  const cartPage = new CartPage(page);

  const productName = 'Sauce Labs Backpack';
  const productName2 = 'Sauce Labs Bolt T-Shirt';

  await loginPage.goto();
  await loginPage.login(
    testData.validUser.username,
    testData.validUser.password
  );

  // add two products
  await productsPage.addProductByName(productName);
  await productsPage.addProductByName(productName2);

  await expect(productsPage.cartBadge).toHaveText('2');

  await productsPage.gotoCart();

  // both products visible
  await expect(cartPage.cartItem(productName)).toBeVisible();
  await expect(cartPage.cartItem(productName2)).toBeVisible();

  // remove first product
  await cartPage.removeItem(productName);

  // product-1 removed
  await expect(cartPage.cartItem(productName)).toHaveCount(0);

  // product-2 still present
  await expect(cartPage.cartItem(productName2)).toHaveCount(1);

  // cart contains 1 item
  await expect(cartPage.cartItems).toHaveCount(1);


  // remove second product
  await cartPage.removeItem(productName2);

  // product-2 removed
  await expect(cartPage.cartItem(productName2)).toHaveCount(0);

  // cart is now empty
  await expect(cartPage.cartItems).toHaveCount(0);

});
