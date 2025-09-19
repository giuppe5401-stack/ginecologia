
// Google Apps Script (da incollare in Editor Script)
function doPost(e) {
  const SPREADSHEET_ID = 'SOSTITUISCI_CON_TUO_ID';
  const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
  const sheet = ss.getSheetByName('Leads') || ss.insertSheet('Leads');
  const data = JSON.parse(e.postData.contents || '{}');
  sheet.appendRow([
    new Date(),
    data.name || '',
    data.email || '',
    data.phone || '',
    data.date || '',
    data.message || '',
    data.city || '',
    data.doctorId || ''
  ]);
  return ContentService.createTextOutput(JSON.stringify({ ok: true }))
    .setMimeType(ContentService.MimeType.JSON);
}
