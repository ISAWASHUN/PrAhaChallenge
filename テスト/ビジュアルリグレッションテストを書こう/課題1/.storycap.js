module.exports = {
  outDir: './__screenshots__',
  puppeteerLaunchOptions: {
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage'],
    defaultViewport: {
      width: 800,
      height: 600
    }
  },
  // 待機時間を大幅に増やす
  delay: 3000,
  // タイムアウト時間を大幅に延長
  timeout: 60000,
  // 特定の要素が表示されるまで待機する
  waitFor: '#root div',
  // キャプチャ対象の要素を指定
  captureSelector: '#root',
  // キャプチャ後に検証する
  disableCssAnimation: true,
  // 画像の形式
  captureFormat: 'png'
}; 
