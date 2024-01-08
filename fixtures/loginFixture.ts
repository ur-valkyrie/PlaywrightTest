import { LoginPage } from '../POM/LoginPage';

export const loginFixture = async (page: any, username: string, password: string) => {
  const loginPage = new LoginPage(page);
  await loginPage.navigate();
  await loginPage.login(username, password);
  return loginPage;
};


