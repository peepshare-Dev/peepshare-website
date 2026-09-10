const SPREADSHEET_ID = "1_3PR8a6mzwtsjSDmaL1bcS75ASPsQd88l-hgSei9RVg";
const SHEET_NAME = "Sheet1";

const HEADERS = [
  "timestamp",
  "storeName",
  "googleMapsLink",
  "openingHours",
  "contactName",
  "contactPhone",
  "storeCategory",
  "promotionDetail",
  "storeDescription",
  "note",
  "consentStatus",
];

function doGet() {
  return jsonResponse({ ok: true, message: "PEEP SHARE form API is ready" });
}

function doPost(e) {
  const lock = LockService.getScriptLock();

  try {
    lock.waitLock(10000);

    const data = getRequestData(e);
    const sheet = SpreadsheetApp.openById(SPREADSHEET_ID).getSheetByName(
      SHEET_NAME,
    );

    if (!sheet) {
      throw new Error(`ไม่พบชีตชื่อ ${SHEET_NAME}`);
    }

    ensureHeaders(sheet);

    sheet.appendRow([
      new Date(),
      data.shopName || data.storeName || "",
      data.shopLocation || data.location || data.googleMapsLink || "",
      data.openingHours || data.hours || "",
      data.contactName || "",
      data.contactPhone || data.phone || "",
      data.shopCategory || data.category || data.storeCategory || "",
      data.promotionDetails || data.promotion || data.promotionDetail || "",
      data.shopDetails || data.details || data.storeDescription || "",
      data.shopChannels || data.channels || data.note || "",
      data.consent || data.consentStatus || "",
    ]);

    return jsonResponse({ ok: true, message: "บันทึกข้อมูลเรียบร้อยแล้ว" });
  } catch (error) {
    return jsonResponse({ ok: false, message: error.message });
  } finally {
    lock.releaseLock();
  }
}

function getRequestData(e) {
  if (!e) return {};

  const contentType = e.postData?.type || "";
  if (contentType.includes("application/json") || contentType.includes("text/plain")) {
    return JSON.parse(e.postData.contents || "{}");
  }

  return e.parameter || {};
}

function ensureHeaders(sheet) {
  const currentHeaders = sheet
    .getRange(1, 1, 1, HEADERS.length)
    .getValues()[0];

  if (currentHeaders.join("|") !== HEADERS.join("|")) {
    sheet.getRange(1, 1, 1, HEADERS.length).setValues([HEADERS]);
  }
}

function jsonResponse(payload) {
  return ContentService.createTextOutput(JSON.stringify(payload)).setMimeType(
    ContentService.MimeType.JSON,
  );
}
