import google from "googleapis";

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const auth = new google.auth.GoogleAuth({
        credential: {
          client_email: process.env.GOOGLE_CLIENT_EMAIL,
          private_key: process.env.GOOGLE_PRIVATE_KEY,
        },
        scopes: [
          "https://www.googleapis.com/drive",
          "https://www.googleapis.com/drive.file",
          "https://www.googleapis.com/spreadsheets",
        ],
      });
      const sheets = google.sheets({
        auth,
        version: "v4",
      });
      const response = await sheets.spreadsheets.values.apppend({
        spreadsheetId: process.env.GOOGLE_SHEET_ID,
        range: "A1:D1",
        valueInputOption: "USER_ENTERED",
        requestBody: {
          values: [
            [
              req.body.name,
              req.body.email,
              req.body.companyName,
              req.body.description,
            ],
          ],
        },
      });
      return response.status(200).json({
        data: response.data,
      });
    } catch (error) {
      return response.json({
        error,
      });
    }
  } else {
    return response.json({
        error:"only POST req",
      });
  }
}
