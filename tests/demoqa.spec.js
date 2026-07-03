import { test, expect } from '@playwright/test';

test('demoQA test', async ({ page }) => {
  await page.goto('https://demoqa.com/text-box');
  await page.locator('#userName').fill('Arjun Harish');
  await page.locator('#userEmail').fill('arjunhebbar2711@gmail.com');
  await page.locator('#currentAddress').fill('Bengaluru, Karnataka');
  await page.locator('#permanentAddress').fill('Bengaluru');
  await page.getByRole('button', { name: 'Submit' }).click();
  await expect(page.locator('#name')).toContainText('Arjun Harish');
  await expect(page.locator('#email')).toContainText('arjunhebbar2711@gmail.com');
});