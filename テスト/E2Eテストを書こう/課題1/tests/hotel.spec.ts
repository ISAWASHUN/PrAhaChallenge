import { test, expect } from '@playwright/test';

test.describe('Hotel Test Planisphere サイト', () => {
  // 課題1-2
  test('トップページにアクセスできる', async ({ page }) => {
    await page.goto('https://hotel.testplanisphere.dev/ja/');
    await expect(page).toHaveTitle(/HOTEL PLANISPHERE - テスト自動化練習サイト/i);
  });

  // 課題1-3
  test('会員登録ページに移動できる', async ({ page }) => {
    await page.goto('https://hotel-example-site.takeyaqa.dev/ja/signup.html');

    await expect(page).toHaveURL(/\/ja\/signup\.html$/);
    const heading = page.locator('h1');
    await expect(heading).toHaveText(/Hotel Planisphere/);
  });
});
