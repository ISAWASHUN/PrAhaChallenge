// tests/hotel.spec.ts
import { test, expect, Page } from '@playwright/test';

const SAMPLE_BASE  = 'https://hotel.testplanisphere.dev/ja';
const EXAMPLE_BASE = 'https://hotel-example-site.takeyaqa.dev/ja';

interface TestPages {
  registeredPage?: Page;
  storage?: any;
}

const testPages: TestPages = {};

test.describe('Hotel Test Planisphere サイト', () => {
  const user = {
    email: 'testuser@example.com',
    password: 'Password123',
    username: 'テスト 太郎',
    rank: 'normal',
    address: '東京都千代田区1-1-1',
    tel: '09012345678',
    gender: '1',
    birthday: '1990-01-01',
    notification: true,
  };

  test('トップページにアクセスできる', async ({ page }) => {
    await page.goto(`${SAMPLE_BASE}/`);
    await expect(page).toHaveTitle(/HOTEL PLANISPHERE/);
  });

  test('会員登録ページに移動できる', async ({ page }) => {
    await page.goto(`${EXAMPLE_BASE}/signup.html`);
    await expect(page).toHaveURL(/\/ja\/signup\.html$/);
    await expect(page.locator('h2')).toHaveText(/会員登録/);
  });

  test('会員登録フォームを入力して送信できる', async ({ page, context }) => {
    testPages.registeredPage = page;
    
    await page.goto(`${EXAMPLE_BASE}/signup.html`);
    const form = page.locator('#signup-form');

    await form.locator('#email').fill(user.email);
    await form.locator('#password').fill(user.password);
    await form.locator('#password-confirmation').fill(user.password);
    await form.locator('#username').fill(user.username);
    await form.locator(`input[name="rank"][value="${user.rank}"]`).check();
    await form.locator('#address').fill(user.address);
    await form.locator('#tel').fill(user.tel);
    await form.locator('#gender').selectOption(user.gender);
    await form.locator('#birthday').fill(user.birthday);
    if (user.notification) {
      await form.locator('#notification').check();
    }

    await form.locator('button[type="submit"]').click();
    await page.waitForURL(/\/ja\/mypage\.html$/, { timeout: 60000 });
    
    const storage = await context.storageState();
    testPages.storage = storage;
  });

  test('マイページに入力内容が反映されている', async ({ browser }) => {
    const context = await browser.newContext({
      storageState: testPages.storage
    });
    const page = await context.newPage();
    
    await page.goto(`${EXAMPLE_BASE}/mypage.html`);
    
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(1000);
    
    await expect(page.locator('#email')).toBeVisible();
    await expect(page.locator('#email')).toHaveText(user.email);
    await expect(page.locator('#username')).toHaveText(user.username);
    await expect(page.locator('#rank')).toHaveText('一般会員');
    await expect(page.locator('#address')).toHaveText(user.address);
    await expect(page.locator('#tel')).toHaveText(user.tel);
    await expect(page.locator('#gender')).toHaveText('男性');
    await expect(page.locator('#birthday')).toHaveText('1990年1月1日');
    await expect(page.locator('#notification')).toHaveText('受け取る');
  });
});
