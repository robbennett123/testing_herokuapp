import { test, expect } from './fixtures';

test('file upload', async ({ preparedPage }) => {
  await expect(preparedPage.getByRole('link', { name: 'File Upload' })).toBeVisible();
  await preparedPage.getByRole('link', { name: 'File Upload' }).click();
  await expect(preparedPage.getByRole('button', { name: 'Upload' })).toBeVisible();

  await preparedPage.close();
});