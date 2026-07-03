import {test, expect} from '@playwright/test';

test.describe('Automation Exercise', () => {
  test.beforeEach(async({page}) =>{
    await page.goto('https://automationexercise.com/');
    await expect(page.getByRole('link', {name: 'Home'})).toBeVisible();
    await page.getByRole('link', {name: 'Products'}).click();
    await expect(page.getByRole('heading', {name: 'All Products'})).toBeVisible();
    await page.locator('#search_product').fill('top');
    await page.locator('#submit_search').click();
  });

  test('automation test', async({page}) => {  
    await expect(page.getByRole('heading', {name: 'Searched Products'})).toBeVisible();
  });

  test('automation test 2', async({page}) => {
    await page.getByRole('link', {name: 'View Product'}).first().click();
    await expect(page).toHaveURL(/product_details/);
    await expect(page.getByRole('heading', {name: 'Blue Top'})).toBeVisible();
    await expect(page.getByText(/Rs\./)).toBeVisible();
  });
});