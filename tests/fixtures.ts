// tests/fixtures.ts
import { test as base, expect } from '@playwright/test';

export const test = base.extend<{ preparedPage: any }>({
  preparedPage: async ({ page }: any, use: any) => {
    // Common setup
  
  await page.goto('https://the-internet.herokuapp.com/');
  await expect(page.locator('h1')).toContainText('Welcome to the-internet');
    
    // Use the page in the test
    await use(page);
 
    // Cleanup after test
    await page.close();
    

  },
});

export { expect };