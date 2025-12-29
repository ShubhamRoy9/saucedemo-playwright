class CartPage {

  constructor(page) {
    this.page = page;

    // locator for ALL items in cart (plural)
    this.cartItems = page.locator('.cart_item');

    this.checkoutButton = page.locator('#checkout');
  }

  // returns locator for a SPECIFIC item (not async)
  cartItem(name) {
    return this.page.locator('.cart_item', {
      hasText: name
    });
  }

  // remove action method (async)
  async removeItem(name) {
    const item = this.cartItem(name);
    await item.getByRole('button', { name: 'Remove' }).click();
  }

  async checkout() {
    await this.checkoutButton.click();
  }
}

module.exports = { CartPage };
