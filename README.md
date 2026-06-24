# 2026時間設計半日工作坊

活動報名網站，包含活動標題、活動圖片、活動內容與報名表單。

## GitHub Pages

Pages 網址：部署完成後填入

## Google Sheet 與 Apps Script 設定

1. 建立一份新的 Google Sheet。
2. 開啟 `擴充功能` > `Apps Script`。
3. 貼上以下程式碼並儲存。
4. 點選 `部署` > `新增部署作業`。
5. 類型選擇 `網頁應用程式`。
6. `執行身分` 選擇 `我`。
7. `誰可以存取` 選擇 `任何人`。
8. 按下 `部署`，依畫面完成 OAuth 驗證與授權。
9. 複製 Web App URL，貼回給我，我會把網址寫入 `script.js` 並繼續進行驗證與測試。

```javascript
function doPost(e) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
  ensureHeaderRow_(sheet);

  const phoneColumn = 4;
  sheet.getRange(1, phoneColumn, sheet.getMaxRows(), 1).setNumberFormat("@");

  sheet.appendRow([
    new Date(),
    e.parameter.name || "",
    e.parameter.email || "",
    e.parameter.phone || "",
    e.parameter.organization || "",
    e.parameter.jobTitle || "",
  ]);

  return ContentService
    .createTextOutput(JSON.stringify({ ok: true }))
    .setMimeType(ContentService.MimeType.JSON);
}

function doGet() {
  return ContentService
    .createTextOutput(JSON.stringify({ ok: true }))
    .setMimeType(ContentService.MimeType.JSON);
}

function ensureHeaderRow_(sheet) {
  const headers = ["時間戳記", "姓名", "email", "電話", "單位", "職稱"];
  const current = sheet.getRange(1, 1, 1, headers.length).getValues()[0];
  const hasHeaders = headers.every((header, index) => current[index] === header);

  if (!hasHeaders) {
    sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
    sheet.getRange(1, 4, sheet.getMaxRows(), 1).setNumberFormat("@");
  }
}
```

## 本機預覽

直接以瀏覽器開啟 `index.html` 即可預覽。表單送出前，請先完成 Apps Script 部署並將 Web App URL 填入 `script.js` 的 `APPS_SCRIPT_URL`。
