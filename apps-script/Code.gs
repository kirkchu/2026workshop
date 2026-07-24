/**
 * 2026workshop 報名資料寫入 Google Sheet
 * 部署為 Web App（執行身份：USER_DEPLOYING，存取權：ANYONE_ANONYMOUS）
 */

const SHEET_NAME = "2026workshop";

function doPost(e) {
  try {
    const params = e.parameter || {};
    const name = params.name || "";
    const email = params.email || "";
    const phone = params.phone || "";
    const org = params.org || "";
    const title = params.title || "";

    const sheet = getOrCreateSheet();
    ensureHeaders(sheet);

    // 在電話前加上單引號，確保 Google Sheet 將其視為文字
    sheet.appendRow([name, email, "'" + phone, org, title]);

    return jsonResponse({ success: true });
  } catch (error) {
    return jsonResponse({ success: false, message: error.toString() });
  }
}

function doGet(e) {
  return jsonResponse({
    success: true,
    message: "2026workshop 報名 API 運作中。請使用 POST 提交表單。",
  });
}

function getOrCreateSheet() {
  const files = DriveApp.getFilesByName(SHEET_NAME);
  let spreadsheet;

  if (files.hasNext()) {
    spreadsheet = SpreadsheetApp.open(files.next());
  } else {
    spreadsheet = SpreadsheetApp.create(SHEET_NAME);
    const sheet = spreadsheet.getActiveSheet();
    sheet.setName("報名資料");
  }

  return spreadsheet.getActiveSheet();
}

function ensureHeaders(sheet) {
  const headers = ["姓名", "email", "電話", "單位", "職稱"];
  const firstRow = sheet.getRange(1, 1, 1, headers.length).getValues()[0];

  if (firstRow.join("") === "") {
    sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
    sheet.getRange(1, 1, 1, headers.length).setFontWeight("bold");
    // 將「電話」欄設為文字格式（第 3 欄）
    sheet.getRange(2, 3, sheet.getMaxRows() - 1, 1).setNumberFormat("@");
  }
}

function jsonResponse(payload) {
  return ContentService.createTextOutput(JSON.stringify(payload)).setMimeType(
    ContentService.MimeType.JSON
  );
}
