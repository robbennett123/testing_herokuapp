//this test is to identify elements that are intially off screen and need scrolling to

import { test, expect } from './fixtures';

test('typo', async ({ preparedPage }) => {
  await expect(preparedPage.getByRole('link', { name: 'Typos' })).toBeVisible();
  await preparedPage.getByRole('link', { name: 'Typos' }).click();
  await expect(preparedPage.getByRole('heading', { name: 'Typos' })).toBeVisible();



});