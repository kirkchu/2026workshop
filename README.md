# 2026 時間設計半日工作坊｜活動報名網站

活潑明亮的活動報名網站，共三列排版：活動標題、活動圖片、活動內容與報名表單並排。

## GitHub Pages 網址

<!-- PAGES_URL -->
**網址：** `待啟用 GitHub Pages 後填入`
<!-- /PAGES_URL -->

## 本機預覽

直接以瀏覽器開啟 `index.html` 即可預覽畫面。

## Google Sheet 報名資料串接

1. 開啟 [Google Apps Script](https://script.google.com/home) 並建立新專案。
2. 將 `apps-script/Code.gs` 與 `apps-script/appsscript.json` 的內容貼到專案中。
3. 點選「部署」→「新增部署作業」→「類型選擇 Web 應用程式」。
4. 設定：
   - 執行身份：我
   - 可存取該應用程式的人員：所有人
5. 部署並複製「網頁應用程式 URL」。
6. 回到 `index.html`，將 `GAS_WEB_APP_URL` 的值替換為剛剛複製的 URL。
7. 重新提交網站變更（`apps-script/` 與 `spec/` 資料夾不會被推到 GitHub Pages）。

表單送出後，資料會寫入名為 `2026workshop` 的 Google 試算表，第一列為標題列，「電話」欄位會以文字格式儲存。

## 專案結構

```
.
├── index.html        # 活動報名網站主頁
├── cover.jpg         # 活動封面圖
├── apps-script/      # Google Apps Script 原始碼
│   ├── Code.gs
│   └── appsscript.json
├── .gitignore        # 排除 spec/ 等資料夾
└── README.md
```
