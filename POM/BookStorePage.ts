import { Page, Locator } from '@playwright/test';

export class BookStorePage {
  readonly page: Page;
  readonly bookName: Locator;

  constructor(page: Page) {
    this.page = page;
    this.bookName = this.page.locator('//a[contains(text(),"Git Pocket Guide")]');
  }

  async navigateToBookStore() {
    await this.page.click('#item-2');
  }

  async addBookToCollection() {
    try {
      await this.bookName.click();
      await this.page.click('#addNewRecordButton');
      this.page.on('dialog', (dialog) => dialog.accept());
      await this.page.getByRole('button').click();
      await this.page.waitForSelector('.text:has-text("Git Pocket Guide")');
    } catch (error) {
      console.error('Error adding book to collection:', error);
      throw error; 
    }
  }
}