import { Page } from '@playwright/test';

export class ProfilePage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async isBookAdded(): Promise<boolean> {
    const bookLocator = 'xpath=//a[contains(text(),"Git Pocket Guide")]';
    return await this.page.isVisible(bookLocator);
  }
}