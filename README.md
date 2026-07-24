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
- Web App 網址：https://script.google.com/macros/s/AKfycbwvu550kwXLRI4933weIaRFvK6IPYW3mYZBJjm1n1o6L2k40226Wl49114-EXl2wQAD/exec

### 為什麼表單目前無法寫入 Google Sheet？

Google Apps Script 第一次執行時，**腳本擁有者（kirkchu@gmail.com）必須先授權**，否則對外 Web App 會回傳「存取遭拒」。這是 Google 的安全機制，無法透過程式自動完成。

### 授權步驟

1. 用 **kirkchu@gmail.com** 登入 Google。
2. 開啟 Apps Script 專案：https://script.google.com/d/1HLGchFuhjIfmfzyHaLF2ErfBmeP_Lxf6FdN-6YTlz_Or4MG53-9AgJn-/edit
3. 點選「執行」→ 執行 `doGet` 函式（或任意函式）。
4. 畫面會跳出「Google 尚未驗證此應用程式」→ 點選「進階」→「前往 2026workshop（不安全）」→ 允許以下權限：
   - 查看、編輯、建立及刪除您的所有 Google 試算表檔案
   - 查看、編輯、建立及刪除您的所有 Google 雲端硬碟檔案
5. 授權完成後，重新整理報名網頁再送一次表單。

### 檢查 Web App 權限

如果授權後仍無法存取，請在 Apps Script 編輯器中：
1. 點選「部署」→「管理部署作業」。
2. 找到目前的部署，點選右側「⏷」→「編輯」。
3. 確認：
   - **執行身份**：我
   - **可存取該應用程式的人員**：所有人
4. 點選「部署」儲存。

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
