import os
import json
from dotenv import load_dotenv
from google.oauth2 import service_account
from googleapiclient.errors import HttpError
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

@app.route('/contact', methods=['POST'])
def get_data():
    RANGE = 'Sheet1'
    SCOPES = ['https://www.googleapis.com/auth/spreadsheets']
    SPREADSHEET_ID = '1TO8JR1Lb4DFv9Sv6UQruxfN_NxhAq0P0ZYa_fqwl6vE'
    
    data = request.json
    name = data['name'] 
    email = data['email']
    phone = data['phone']
    description = data['description']
    if not os.path.exists(FILE):
        with open(FILE, "w") as json_file:
            json_file.write(json_format)    
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
    SCOPES = ['https://www.googleapis.com/auth/drive.file']

    # data = request.json
    # name = data['name'] 
    # email = data['email']
    # phone = data['phone']
    # description = data['description']
    # if not os.path.exists(FILE):
    #     with open(FILE, "w") as json_file:
    #         json_file.write(json_format)    
    # try:
    #     creds = service_account.Credentials.from_service_account_file(FILE, scopes=SCOPES)
    #     client = gspread.authorize(creds)
    #     spreadsheet = client.open_by_key(SPREADSHEET_ID)
    #     worksheet = spreadsheet.worksheet(RANGE)
    #     data = [name, email, phone, description]
    #     return worksheet.append_row(data)
    # except HttpError as err:
    #     print(err)
    form_data = {}
    pdf_file = None

    for key, value in request.form.items():
        form_data[key] = value

    if 'file' in request.files:
        pdf_file = request.files['file']

    return 'Data received successfully'

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=3001)