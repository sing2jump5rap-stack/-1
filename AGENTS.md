# Codex 專案指引

本專案是「澄序品牌顧問」企業品牌形象網站示範版，使用原生 HTML5、CSS3 與 JavaScript ES6+，不需要建置工具或套件安裝。

## 檔案規範
- `index.html`：網站內容與語意化結構。
- `style.css`：所有視覺樣式、版面與響應式規則。
- `script.js`：導覽、案例篩選、文章/案例對話框、FAQ、表單前端驗證與捲動互動。
- 請維持以上三個網站檔案的相對路徑與檔名，避免引入框架或建置流程，除非使用者明確要求。

## Codex 開發規則
1. 修改前先閱讀三個檔案，理解既有結構與互動，不要整站重寫或刪除現有功能。
2. 新增功能時優先沿用既有設計語言：深藍 `#19334C`、白色、淺灰 `#E8EDF2`、金色 `#C69B55`。
3. 保持繁體中文介面、行動裝置響應式、鍵盤可操作性及語意化 HTML。
4. 動畫必須尊重 `prefers-reduced-motion`；圖片需有適當 `alt`，非首屏圖片使用 lazy loading。
5. 品牌、團隊、案例、文章及聯絡資訊目前都是示範佔位資料。不得將其改寫成真實企業歷史、客戶、認證或商業績效。
6. 聯絡表單目前只有前端驗證，不會寄信或儲存資料。除非真的串接後端服務，否則不可顯示「已成功寄出」。
7. 不要把 API 金鑰、密碼或個人資料放入前端程式碼。
8. 避免新增不必要的第三方套件。若使用外部圖片或字型，需保留合理替代方案並注意授權。
9. 完成修改後檢查 JavaScript 語法、所有相對連結、手機版版面與瀏覽器 Console；修復發現的錯誤。
10. 除非使用者要求，不要新增建置工具、伺服器或複雜資料夾。網站應能直接以 `index.html` 開啟。

## GitHub Pages 部署
- 將 `index.html`、`style.css`、`script.js` 放在 GitHub Repository 根目錄。
- Repository → Settings → Pages → Build and deployment，選擇 `Deploy from a branch`。
- Branch 選 `main`，資料夾選 `/ (root)`，儲存後等待部署完成。
- 本專案使用相對路徑，適用於 GitHub Pages 專案網站子路徑。

## 本機預覽
可直接開啟 `index.html`，或在專案資料夾執行：

```bash
python -m http.server 8000
```

再瀏覽 `http://localhost:8000`。
