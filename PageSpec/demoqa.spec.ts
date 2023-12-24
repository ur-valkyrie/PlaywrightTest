import { test } from '@playwright/test';
import { HomePage } from '../POM/HomePage';
import { ButtonsPage } from '../POM/ButtonsPage';

test.describe('UI tests using POM', () => {

  test('Verify categories are displayed', async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.goto();
    await homePage.verifyCategories();
  });

  test('Click buttons and verify messages', async ({ page }) => {
    const buttonsPage = new ButtonsPage(page);
    await buttonsPage.goto();
    await buttonsPage.verifyButtonActions();
  });

});
