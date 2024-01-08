import { ProfilePage } from '../POM/ProfilePage';
import { Page } from '@playwright/test';


export const profileFixture = (page: Page) => new ProfilePage(page);
