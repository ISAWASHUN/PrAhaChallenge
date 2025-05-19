// tests/hotel.spec.ts
import { test, expect } from '@playwright/test';

const BASE_URL = 'https://hotel.testplanisphere.dev/ja';

test.describe('Hotel Test Planisphere サイト', () => {
  // 課題1-1
  test('トップページにアクセスできる', async ({ page }) => {
    await page.goto(`${BASE_URL}/`);
    await expect(page).toHaveTitle(/HOTEL PLANISPHERE - テスト自動化練習サイト/i);
  });

  // 課題1-2
  test('会員登録ページに移動できる', async ({ page }) => {
    await page.goto(`${BASE_URL}/signup.html`);
    await expect(page).toHaveURL(/\/ja\/signup\.html$/);
    await expect(page.locator('h2')).toHaveText(/会員登録/);
  });

  // 課題1-3
  test('会員登録フォームを入力して送信できる', async ({ page }) => {
    await page.goto(`${BASE_URL}/signup.html`);
    const form = page.locator('form#signup-form');

    await form.locator('#email').fill('testuser@example.com');
    await form.locator('#password').fill('Password123');
    await form.locator('#password-confirmation').fill('Password123');
    await form.locator('#username').fill('テスト 太郎');

    await form.locator('input[name="rank"][value="normal"]').check();

    await form.locator('#address').fill('東京都千代田区1-1-1');
    await form.locator('#tel').fill('09012345678');
    await form.locator('#gender').selectOption('1');
    await form.locator('#birthday').fill('1990-01-01');
    await form.locator('#notification').check();

    await form.locator('button[type="submit"]').click();
    await page.waitForURL(/\/ja\/mypage\.html$/, { timeout: 60000 });

    await expect(page).toHaveURL(/\/ja\/mypage\.html$/);
  });
});
