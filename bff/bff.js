const express = require('express');
const bodyParser = require('body-parser');
const { google } = require('googleapis');
const cors = require('cors');

const app = express();
const port = 3001;

app.use(cors());

app.use(bodyParser.json());

app.post('/submit', async (req, res) => {
  const { name, email, phone, description } = req.body;

  const auth = new google.auth.GoogleAuth({
    keyFile: 'secrets.json',
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  });

  const sheets = google.sheets('v4');
  const sheetsId = '1TO8JR1Lb4DFv9Sv6UQruxfN_NxhAq0P0ZYa_fqwl6vE';

  try {
    const client = await auth.getClient();
    const request = {
      auth: client,
      spreadsheetId: sheetsId,
      range: 'Sheet1',
      valueInputOption: 'RAW',
      insertDataOption: 'INSERT_ROWS',
      resource: {
        values: [[name, email, phone, description]],
      },
    };

    await sheets.spreadsheets.values.append(request);
    res.status(200).json({ message: 'Data successfully sent to Google Sheets' });
  } catch (error) {
    res.status(500).json({ message: 'Error sending data to Google Sheets' });
  }
});

app.listen(port, () => {
  console.log(`BFF server listening at http://localhost:${port}`);
});
