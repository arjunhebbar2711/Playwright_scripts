import { expect } from '@playwright/test';

export class CartPage {
  constructor(page) {
    this.page = page;
    this.addToCartButton = page.getByRole('button', {name: 'Add to cart'}).first();
    this.cartBadge = page.locator('.shopping_cart_badge');
    this.cartLink = page.locator('[data-test="shopping-cart-link"]');
    this.checkoutButton = page.locator('#checkout');
  }
  
  async addToCart() {
    await this.addToCartButton.click();
  }
  
  async viewCart() {
    await this.cartLink.click();
  }
  
  async verifyItemInCart() {
    await expect(this.cartBadge).toHaveText('1');
  }
}