import {test, expect} from '@playwright/test';

test('locators test', async({page}) =>{
  await page.goto('https://www.saucedemo.com/');
  await page.locator('#user-name').fill('standard_user');
  await page.locator('#password').fill('secret_sauce');
  await page.getByRole('button', {name: 'Login'}).click();
  await expect(page.getByText('Products')).toBeVisible();
  await page.getByRole('button', { name: 'Add to cart' }).nth(1).click();
  await expect(page.locator('[data-test="shopping-cart-badge"]')).toHaveText('1');
  await page.locator('[data-test="shopping-cart-link"]').click();
  await expect(page.locator('[data-test="title"]')).toBeVisible();
})