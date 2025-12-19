import { test, expect } from './fixtures';

test('checkboxes', async ({ preparedPage }) => {

await preparedPage.getByRole('link', { name: 'Checkboxes' }).click();
await expect(preparedPage.getByRole('heading')).toContainText('Checkboxes');
await expect(preparedPage.getByRole('checkbox').first()).not.toBeChecked();
await expect(preparedPage.getByRole('checkbox').nth(1)).toBeChecked();
await expect(preparedPage.getByRole('checkbox').nth(1)).toBeChecked();
  

});