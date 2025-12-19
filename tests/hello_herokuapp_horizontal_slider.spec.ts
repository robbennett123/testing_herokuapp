import { test, expect } from './fixtures';

test('horizontal slider', async ({ preparedPage }) => {
  await expect(preparedPage.getByRole('link', { name: 'Horizontal Slider' })).toBeVisible();
  await preparedPage.getByRole('link', { name: 'Horizontal Slider' }).click();
  await expect(preparedPage.getByRole('heading', { name: 'Horizontal Slider' })).toBeVisible();

await preparedPage.getByRole('slider').fill('5');
await expect(preparedPage.locator('#range')).toContainText('5');

});