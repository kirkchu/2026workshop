const APPS_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbxFfjTbMV1D7UaMiPvkpQrRjdB0ooCAkkaCjJnzt6QLQoCxohPf23quptak1JfD_nLn/exec";

const form = document.querySelector("#registration-form");
const statusText = document.querySelector("#form-status");
const submitButton = form.querySelector("button[type='submit']");

function setStatus(message, type = "") {
  statusText.textContent = message;
  statusText.className = `form-status${type ? ` is-${type}` : ""}`;
}

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  if (!APPS_SCRIPT_URL) {
    setStatus("請先在 script.js 填入 Apps Script Web App URL。", "error");
    return;
  }

  const formData = new FormData(form);
  formData.set("submittedAt", new Date().toISOString());

  submitButton.disabled = true;
  setStatus("送出中...");

  try {
    await fetch(APPS_SCRIPT_URL, {
      method: "POST",
      mode: "no-cors",
      body: formData,
    });

    form.reset();
    setStatus("已送出，請至 Google Sheet 確認資料是否寫入。", "success");
  } catch (error) {
    setStatus("送出失敗，請檢查 Apps Script 部署網址後再試一次。", "error");
  } finally {
    submitButton.disabled = false;
  }
});
