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
    const sheets = google.sheets({
      version: "v4",
      auth,
    });
    const response = await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: "Sheet1!A1:F",
      insertDataOption: "INSERT_ROWS",
      valueInputOption: "RAW",
      requestBody: {
        values: [[Name, Email, Budget, Category, CompanyName, Description]],
      },
    });
    return NextResponse.json({ error: "hello" });
  } catch (e) {
    console.log(e.message);
    return NextResponse.json({ error: true, message: e.message });
  }
}

// import { NextRequest, NextResponse } from "next/server";
// import { google } from "googleapis";

// export async function POST(request) {
//   try {
//     const auth = new google.auth.GoogleAuth({
//       credential: {
//         client_email: process.env.GOOGLE_CLIENT_EMAIL,
//         private_key: process.env.GOOGLE_PRIVATE_KEY?.replace("/\\n/g", "\n"),
//       },
//       scopes: [
//         "https://www.googleapis.com/auth/drive",
//         "https://www.googleapis.com/auth/drive.file",
//         "https://www.googleapis.com/auth/spreadsheets",
//       ],
//     });
//     const sheets = google.sheets({
//       auth,
//       version: "v4",
//     });
//     const response = await sheets.spreadsheets.values.append({
//       spreadsheetId: process.env.GOOGLE_SHEET_ID,
//       range: "A1:F1",
//       valueInputOption: "USER_ENTERED",
//       requestBody: {
//         values: [
//           ["hello", "hello", "hello", "hello", "hello", "hello"],
//         ],
//       },
//     });
//     return NextResponse.json({
//       data: response,
//     });
//   } catch (error) {
//     console.log(error.message);
//     return NextResponse.json({ data: "hello" });
//   }
// }
