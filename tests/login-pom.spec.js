import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { CartPage } from '../pages/CartPage';

test('Login and add product to cart', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const cartPage = new CartPage(page);
  
  // Login
  await loginPage.goto();
  await loginPage.login('standard_user', 'secret_sauce');
  
  // Add to cart
  await cartPage.addToCart();
  
  // Verify
  await cartPage.verifyItemInCart();
});