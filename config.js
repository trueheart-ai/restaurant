/* ══════════════════════════════════════════════════════════════
   今天吃什麼 — 設定檔

   這個檔案你只需要填一次。之後拿到新版的 index.html 直接覆蓋，
   這個檔不用動。

   兩個檔案要放在同一層：
     index.html
     config.js   ← 就是這個
   ══════════════════════════════════════════════════════════════ */

window.EATWHAT_CONFIG = {

  /* Apps Script 部署後的網址，/exec 結尾 */
  proxyUrl: 'https://script.google.com/macros/s/AKfycbz-hJJieCVlWWDYGZGplOrZmkqsad8awkVoXeE8wsidI-Zqg64RcYXOgcVmuCgrhT8/exec',

  /* Code.gs 裡的 ACCESS_TOKEN，要一模一樣 */
  proxyToken: 'eat2026abc',

  /* 本週優惠。留空陣列的話，網頁上那一區會整個隱藏。
     text 必填，until 可以不寫。 */
  promos: [
    // { text: '○○燒肉 平日午餐 88 折', until: '8/31' },
    // { text: '××火鍋 四人同行一人免費' },
  ],

};
