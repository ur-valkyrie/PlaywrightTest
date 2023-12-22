import { test, expect } from '@playwright/test';

test('Click buttons and verify messages', async ({ page }) => {
  await page.goto('https://demoqa.com/buttons');

  const buttons = [
    { 
      action: () => page.dblclick('text=Double Click Me'),
      message: 'You have done a double click',
      messageLocator: '#doubleClickMessage'
    },
    { 
      action: () => page.click('text=Right Click Me', { button: 'right' }),
      message: 'You have done a right click',
      messageLocator: '#rightClickMessage' 
    },
    { 
      action: () => page.click('text=Click Me'),
      message: 'You have done a dynamic click',
      messageLocator: '#dynamicClickMessage'
    }
  ];

  for (const { action, message, messageLocator } of buttons) {
    await action();
    await page.waitForSelector(messageLocator, { state: 'visible', timeout: 60000}); 
    await expect(page.locator(messageLocator)).toHaveText(message);
  }
  
});
