import {test, expect} from '@playwright/test';

test.beforeEach(async({page}) => {
  await page.goto('https://www.saucedemo.com/');
  await page.locator('#user-name').fill('standard_user');
  await page.locator('#password').fill('secret_sauce');
  await page.locator('#login-button').click();
  await expect(page).toHaveTitle(/Swag Labs/);
});

test('Add product to cart', async({ page }) => {  
  await expect(page.getByText('Products')).toBeVisible();
  await page.getByRole('button', {name: 'Add to cart'}).first().click();
  await expect(page.locator('.shopping_cart_badge')).toHaveText('1');

});

test('Logout test', async({page}) => {
  await page.locator('#react-burger-menu-btn').click();
  await page.locator('#logout_sidebar_link').click();
  await expect(page.locator('.submit-button')).toBeVisible();
});