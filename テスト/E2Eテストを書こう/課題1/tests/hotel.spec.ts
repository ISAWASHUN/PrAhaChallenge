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

  // 課題1-1
  test('トップページにアクセスできる', async ({ page }) => {
    await page.goto(`${SAMPLE_BASE}/`);
    await expect(page).toHaveTitle(/HOTEL PLANISPHERE/);
  });

  // 課題1-2
  test('会員登録ページに移動できる', async ({ page }) => {
    await page.goto(`${EXAMPLE_BASE}/signup.html`);
    await expect(page).toHaveURL(/\/ja\/signup\.html$/);
    await expect(page.locator('h2')).toHaveText(/会員登録/);
  });

  // 課題1-3と課題1-4
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

  // 課題1-5
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
  
  // 課題1-6
  test('宿泊予約ができる', async ({ page }) => {
    const reservationInfo = {
      date: '2025-01-15',
      term: '2',
      headCount: '3',
      breakfast: true,
      earlyCheckIn: true,
      sightseeing: false,
      username: '予約 太郎',
      contact: 'no',
      comment: 'テスト予約です'
    };
    
    await page.goto(`${EXAMPLE_BASE}/plans.html`);
    await expect(page).toHaveTitle(/宿泊プラン一覧/);
    
    const reserveButton = page.locator('.btn-primary').filter({ hasText: 'このプランで予約' }).first();
    
    const pagePromise = page.context().waitForEvent('page');
    await reserveButton.click();
    const newPage = await pagePromise;
    await newPage.waitForLoadState();
    
    await expect(newPage).toHaveURL(/reserve\.html/);
    await expect(newPage.locator('h2')).toHaveText(/宿泊予約/);
    
    const form = newPage.locator('#reserve-form');
    
    await newPage.evaluate((date) => {
      const dateInput = document.getElementById('date') as HTMLInputElement;
      if (dateInput) {
        dateInput.value = date;
        dateInput.dispatchEvent(new Event('change'));
      }
    }, reservationInfo.date);
    
    await form.locator('#term').fill(reservationInfo.term);
    await form.locator('#head-count').fill(reservationInfo.headCount);
    
    await newPage.waitForTimeout(500);
    
    if (reservationInfo.breakfast) await form.locator('#breakfast').check();
    if (reservationInfo.earlyCheckIn) await form.locator('#early-check-in').check();
    if (reservationInfo.sightseeing) await form.locator('#sightseeing').check();
    
    await form.locator('#username').fill(reservationInfo.username);
    await form.locator('#contact').selectOption(reservationInfo.contact);
    await form.locator('#comment').fill(reservationInfo.comment);
    
    await newPage.waitForTimeout(1000);
    
    await newPage.waitForSelector('#submit-button:not([disabled])');
    
    await form.locator('button[type="submit"]').click();
    
    await newPage.waitForURL(/confirm\.html/);
    await expect(newPage.locator('h2')).toHaveText(/宿泊予約確認/);
    
    await expect(newPage.locator('#term')).toBeVisible();
    await expect(newPage.locator('#head-count')).toContainText('名様');
    
    const plansElement = newPage.locator('#plans');
    if (reservationInfo.breakfast) {
      await expect(plansElement).toContainText('朝食');
    }
    if (reservationInfo.earlyCheckIn) {
      await expect(plansElement).toContainText('チェックイン');
    }
    
    await expect(newPage.locator('#username')).toContainText(reservationInfo.username);
    await expect(newPage.locator('#contact')).toContainText('希望しない');
    await expect(newPage.locator('#comment')).toContainText(reservationInfo.comment);
    
    await newPage.locator('.btn-primary').filter({ hasText: 'この内容で予約する' }).click();
    
    await newPage.waitForSelector('#success-modal.show');
    
    await newPage.locator('.btn-success').filter({ hasText: '閉じる' }).click();
  });
});
