import { Page, Locator } from '@playwright/test';

export class ProfilePage {
  readonly page: Page;
  readonly bookName: Locator;

  constructor(page: Page) {
    this.page = page;
    this.bookName = this.page.locator('//a[contains(text(),"Git Pocket Guide")]');
  }

  async isBookAdded(): Promise<boolean> {
    return await this.page.isVisible(this.bookName.toString());
  }
}
