import { Page, expect } from '@playwright/test';

export class HomePage {
  readonly page: Page;
  readonly expectedCategories: string[] = ['Elements', 'Forms', 'Alerts, Frame & Windows', 'Widgets', 'Interactions'];

  constructor(page: Page) {
    this.page = page;
  }

  async goto() {
    await this.page.goto('https://demoqa.com/');
  }

  async verifyCategories() {
    for (const category of this.expectedCategories) {
      const isVisible = await this.page.isVisible(`text=${category}`);
      expect(isVisible).toBeTruthy();
    }
  }
}
