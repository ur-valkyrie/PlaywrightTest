import { test, expect } from '@playwright/test';
import { loginFixture } from '../fixtures/loginFixture';
import { bookStoreFixture } from '../fixtures/bookStoreFixture';
import { profilePageFixture } from '../fixtures/profileFixture';

test('Add book to collection and verify on Profile page', async ({ page }) => {
  try {
    const loginPage = loginFixture(page, '123', 'Dexter4!');
    const bookStorePage = bookStoreFixture(page);

    await bookStorePage.navigateToBookStore();
    await bookStorePage.addBookToCollection();

    const profilePage = await profilePageFixture(page);
    const isBookAdded = await profilePage.isBookAdded();

    expect(isBookAdded).toBeTruthy();
  } catch (error) {
    console.error('Test failed:', error);
    throw error;
  }
});