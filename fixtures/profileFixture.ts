import { Page } from '@playwright/test';
import { ProfilePage } from '../POM/ProfilePage';

export const profilePageFixture = async (page: Page): Promise<ProfilePage> => {
  return new ProfilePage(page);
};
