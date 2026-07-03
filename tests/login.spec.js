
import { test, expect } from '@playwright/test';       

test.beforeEach(async ({ page }) => {
  await page.goto('https://www.saucedemo.com');
  await page.locator('#user-name').fill('standard_user');      
  await page.locator('#password').fill('secret_sauce'); 
  await page.locator('#login-button').click();
});

test('Login Test', async ({ page }) => {
  await expect(page).toHaveURL(/inventory/);
});

test('cart Test', async ({page}) => {
    await expect(page).toHaveTitle(/Swag Labs/);
  await expect(page.getByText('Products')).toBeVisible();
  await expect(page).toHaveURL(/inventory/);
  await page.getByRole('button', { name: 'Add to cart' }).first().click();
  await expect(page.locator('.shopping_cart_badge')).toHaveText('1');
});