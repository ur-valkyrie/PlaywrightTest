import { Page } from '@playwright/test';

export class BookStorePage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async navigateToBookStore() {
    await this.page.click('#item-2');
  }

  async addBookToCollection() {
    try {
      await this.page.click('//a[contains(text(),"Git Pocket Guide")]');
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