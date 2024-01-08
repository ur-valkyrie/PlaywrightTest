import { Page } from '@playwright/test';

export class LoginPage {
  readonly page: Page;
  readonly usernameInput = '#userName';
  readonly passwordInput = '#password';
  readonly loginButton = '#login';

  constructor(page: Page) {
    this.page = page;
  }

  async navigate() {
    await this.page.goto(process.env.BASE_URL + '/login');
  }

  async login(username: string, password: string) {
    await this.page.fill(this.usernameInput, username);
    await this.page.fill(this.passwordInput, password);
    await this.page.click(this.loginButton);
  }
}