import { test, expect } from '@playwright/test';
import { LoginPage } from '../POM/LoginPage';

test('user can login', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.navigate();
  await loginPage.login(process.env.USERNAME!, process.env.PASSWORD!);

  await expect(page).toHaveURL(process.env.BASE_URL + '/profile');
});
