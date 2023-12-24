import { Page, expect } from '@playwright/test';

export class ButtonsPage {
  readonly page: Page;
  readonly buttonsInfo = [
    { 
      action: () => this.page.dblclick('text=Double Click Me'),
      message: 'You have done a double click',
      messageLocator: '#doubleClickMessage'
    },
    { 
      action: () => this.page.click('text=Right Click Me', { button: 'right' }),
      message: 'You have done a right click',
      messageLocator: '#rightClickMessage' 
    },
    { 
      action: () => this.page.click('text=Click Me'),
      message: 'You have done a dynamic click',
      messageLocator: '#dynamicClickMessage'
    }
  ];

  constructor(page: Page) {
    this.page = page;
  }

  async goto() {
    await this.page.goto('https://demoqa.com/buttons');
  }

  async verifyButtonActions() {
    for (const { action, message, messageLocator } of this.buttonsInfo) {
      await action();
      await this.page.waitForSelector(messageLocator, { state: 'visible', timeout: 60000}); 
      await expect(this.page.locator(messageLocator)).toHaveText(message);
    }
  }
}
