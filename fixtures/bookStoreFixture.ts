import { BookStorePage } from '../POM/BookStorePage';
import { Page } from '@playwright/test';


export const bookStoreFixture = (page: Page) => new BookStorePage(page);
