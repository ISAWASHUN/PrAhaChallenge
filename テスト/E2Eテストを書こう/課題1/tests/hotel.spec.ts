import { test, expect } from '@playwright/test';

// 課題1-2
test('Hotel site トップページが読み込める', async ({ page }) => {
  await page.goto('https://hotel.testplanisphere.dev/ja/');

  await expect(page).toHaveTitle(/HOTEL PLANISPHERE - テスト自動化練習サイト/i);
});
