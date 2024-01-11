// import { test, expect } from '@playwright/test';
// import { LoginPage } from '../POM/LoginPage';
// import { loginFixture } from '../fixtures/loginFixture';


// test('user can login', async ({ page }) => {
//   const loginPage = new LoginPage(page);
//   await loginPage.navigate();
//   await loginPage.login('123', 'Dexter4!');

//   await expect(page).toHaveURL(process.env.BASE_URL + '/profile');
// });

import { test, expect } from '@playwright/test';
import { loginFixture } from '../fixtures/loginFixture';

test('user can login', async ({ page }) => {
  const loggedInPage = await loginFixture(page, '123', 'Dexter4!');

  await expect(loggedInPage.page).toHaveURL(process.env.BASE_URL + '/profile');
});


