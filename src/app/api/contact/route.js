import { google } from "googleapis";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { Name, Email, Budget, Category, CompanyName, Description } =
      await request.json();
    const auth = new google.auth.JWT(
      process.env.GOOGLE_CLIENT_EMAIL,
      null,
      process.env.GOOGLE_PRIVATE_KEY,
      [
        "https://www.googleapis.com/auth/drive",
        "https://www.googleapis.com/auth/drive.file",
        "https://www.googleapis.com/auth/spreadsheets",
      ]
    );
    await auth.authorize();
    const sheets = await google.sheets({
      version: "v4",
      auth,
    });
    const response = await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: "Sheet1!A5:F",
      insertDataOption: "INSERT_ROWS",
      valueInputOption: "RAW",
      requestBody: {
        values: [[Name, Email, Budget, Category, CompanyName, Description]],
      },
    });
    return NextResponse.json({ response });
  } catch (e) {
    console.log(e.message);
    return NextResponse.json({ error: true, message: e.message });
  }
}
