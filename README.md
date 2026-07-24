# 2026 時間設計半日工作坊｜活動報名網站

活潑明亮的活動報名網站，共三列排版：活動標題、活動圖片、活動內容與報名表單並排。

## GitHub Pages 網址

<!-- PAGES_URL -->
**網址：** https://kirkchu.github.io/2026workshop/
<!-- /PAGES_URL -->

## 本機預覽

直接以瀏覽器開啟 `index.html` 即可預覽畫面。

## Google Sheet 報名資料串接

本專案已透過 `clasp` 自動建立並部署 Google Apps Script Web App，表單會將資料寫入名為 `2026workshop` 的 Google 試算表，第一列為標題列，「電話」欄位會以文字格式儲存。

- Apps Script 專案：https://script.google.com/d/1HLGchFuhjIfmfzyHaLF2ErfBmeP_Lxf6FdN-6YTlz_Or4MG53-9AgJn-/edit
- Web App 網址：https://script.google.com/macros/s/AKfycbzrEHBRPhvvF77eC7h5yaINzKwRQlRzQ6zZ91iSXei_2Oz_vk2w6neyjws6yPLFDlk7/exec

> 注意：部署後若首次開啟 Web App 出現「存取遭拒」，請以 `kirkchu@gmail.com` 帳號開啟 Apps Script 專案，確認權限設定為「任何人」均可存取，並重新授權執行。

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
