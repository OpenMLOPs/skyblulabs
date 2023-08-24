import os
import json
from dotenv import load_dotenv
from google.oauth2 import service_account
from googleapiclient.discovery import build
from googleapiclient.errors import HttpError
from googleapiclient.http import MediaFileUpload
import gspread
from flask import Flask, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)
load_dotenv()

env_variables = ["type", "project_id", "private_key_id", "private_key", "client_email", "client_id", "auth_uri", "token_uri", "auth_provider_x509_cert_url", "client_x509_cert_url", "universe_domain"]
env_data = {}
for var_name in env_variables:
    env_data[var_name] = os.getenv(var_name)
json_format = json.dumps(env_data, indent=4)

FILE = 'secrets.json'
SCOPES = ['https://www.googleapis.com/auth/spreadsheets']
SPREADSHEET_ID = '1TO8JR1Lb4DFv9Sv6UQruxfN_NxhAq0P0ZYa_fqwl6vE'
if not os.path.exists(FILE):
    with open(FILE, "w") as json_file:
        json_file.write(json_format)    

@app.route('/contact', methods=['POST'])
def get_data():
    RANGE = 'Sheet1'
    
    data = request.json
    name = data['name'] 
    email = data['email']
    phone = data['phone']
    description = data['description']
    try:
        creds = service_account.Credentials.from_service_account_file(FILE, scopes=SCOPES)
        client = gspread.authorize(creds)
        spreadsheet = client.open_by_key(SPREADSHEET_ID)
        worksheet = spreadsheet.worksheet(RANGE)
        data = [name, email, phone, description]
        return worksheet.append_row(data)
    except HttpError as err:
        print(err)

@app.route('/careers', methods=['POST'])
def careers():
    RANGE = 'Sheet2'
    DRIVE_SCOPES = ['https://www.googleapis.com/auth/drive.file']

    form_data = {}
    uploaded_file = None
    try:
        # creds = service_account.Credentials.from_service_account_file(FILE, scopes=DRIVE_SCOPES)
        # service = build('drive', 'v3', credentials=creds)
        if 'file' in request.files:
            print("run")
            uploaded_file = request.files['file']
            print(uploaded_file)
        # file_metadata = {'name': uploaded_file.filename}
        # media = MediaFileUpload(uploaded_file, mimetype=uploaded_file.mimetype)
        # file = service.files().create(body=file_metadata, media_body=media, fields='id').execute()
        
    except Exception as e:
        print('Error: ' + str(e))

    for key, value in request.form.items():
        form_data[key] = value
    name = form_data['name'] 
    email = form_data['email']
    phone = form_data['phone']

    # try:
    #     creds = service_account.Credentials.from_service_account_file(FILE, scopes=SCOPES)
    #     client = gspread.authorize(creds)
    #     spreadsheet = client.open_by_key(SPREADSHEET_ID)
    #     worksheet = spreadsheet.worksheet(RANGE)
    #     data = [name, email, phone]
    #     return worksheet.append_row(data)
    # except HttpError as err:
    #     print(err)

    return 'Data received successfully'

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=3001)