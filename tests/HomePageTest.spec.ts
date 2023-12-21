import { test, expect } from '@playwright/test';

test('Verify categories are displayed', async ({ page }) => {
  await page.goto('https://demoqa.com/');

  const expectedCategories = ['Elements', 'Forms', 'Alerts, Frame & Windows', 'Widgets', 'Interactions'];

  for (const category of expectedCategories) {
    const isVisible = await page.isVisible(`text=${category}`);
    expect(isVisible).toBeTruthy();
  }
});
