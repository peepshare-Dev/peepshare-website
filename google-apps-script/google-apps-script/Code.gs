/**
 * Merchant form receiver for Google Apps Script.
 *
 * Set SPREADSHEET_ID and FOLDER_ID in Project Settings > Script properties.
 * The form posts URL-encoded fields and Base64 image payloads in e.parameter.
 */
const HEADERS = [
  'Submitted at', 'Store name', 'Google Maps URL', 'Opening hours',
  'Contact name', 'Contact phone', 'Store category', 'Contact channel',
  'Promotion detail', 'Store description', 'Logo URL', 'Image URLs', 'Consent status',
];

function doPost(e) {
  try {
    const payload = e.parameter;
    const spreadsheetId = getRequiredProperty_('SPREADSHEET_ID');
    const folderId = getRequiredProperty_('FOLDER_ID');
    const sheet = getSheet_(spreadsheetId);
    const submittedAt = new Date().toISOString();
    const folder = DriveApp.getFolderById(folderId);
    const logoUrl = saveFile_(folder, payload.logoFile, 'logo');
    const imageUrls = saveFiles_(folder, payload.imageFiles, 'shop');

    sheet.appendRow([
      submittedAt,
      payload.shopName || '',
      payload.location || payload.shopLocation || '',
      payload.hours || payload.openingHours || '',
      payload.contactName || '',
      payload.phone || payload.contactPhone || '',
      payload.category || payload.shopCategory || '',
      payload.channels || payload.shopChannels || '',
      payload.promotion || payload.promotionDetails || '',
      payload.details || payload.shopDetails || '',
      logoUrl,
      imageUrls.join('\n'),
      payload.consent === 'on' ? 'ยอมรับ' : '',
    ]);
    return json_({
      success: true,
      message: 'Merchant registration saved',
      rowNumber: sheet.getLastRow(),
      submittedAt: submittedAt,
    });
  } catch (error) {
    console.error(error);
    return json_({ success: false, error: error.message || String(error) });
  }
}

function saveFiles_(folder, json, prefix) {
  if (!json) return [];
  const files = JSON.parse(json);
  return files.map((file, index) => saveFileObject_(folder, file, `${prefix}-${index + 1}`));
}

function saveFile_(folder, json, prefix) {
  if (!json) return '';
  return saveFileObject_(folder, JSON.parse(json), prefix);
}

function saveFileObject_(folder, file, prefix) {
  if (!file || !file.data) return '';
  const safeName = String(file.name || 'image').replace(/[^a-zA-Z0-9._-]/g, '_');
  const blob = Utilities.newBlob(Utilities.base64Decode(file.data), file.type, `${prefix}-${Date.now()}-${safeName}`);
  const driveFile = folder.createFile(blob);
  try {
    driveFile.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.VIEW);
  } catch (error) {
    console.warn('Public sharing is disabled for this account:', error);
  }
  return driveFile.getUrl();
}

function getSheet_(spreadsheetId) {
  const spreadsheet = SpreadsheetApp.openById(spreadsheetId);
  const sheet = spreadsheet.getSheets()[0];
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(HEADERS);
  } else {
    sheet.getRange(1, 1, 1, HEADERS.length).setValues([HEADERS]);
  }
  return sheet;
}

function getRequiredProperty_(name) {
  const value = PropertiesService.getScriptProperties().getProperty(name);
  if (!value) throw new Error('Missing Script Property: ' + name);
  return value;
}

function json_(payload) {
  return ContentService.createTextOutput(JSON.stringify(payload))
    .setMimeType(ContentService.MimeType.JSON);
}
