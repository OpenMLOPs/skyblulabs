import os
import json
from dotenv import load_dotenv
from google.oauth2 import service_account
from googleapiclient.discovery import build
from googleapiclient.errors import HttpError
from googleapiclient.http import MediaIoBaseUpload
from io import BytesIO
import gspread
from fastapi import FastAPI, Form, File, UploadFile
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel


app = FastAPI()


# Configure CORS
origins = [
    "http://localhost",
    "http://localhost:3000",  # Add the domains from which you want to allow requests
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


class Item(BaseModel):
    name: str
    email: str
    phone: str
    description: str


class CareersItem(BaseModel):
    name: str
    email: str
    phone: str


load_dotenv()

env_variables = [
    "type",
    "project_id",
    "private_key_id",
    "private_key",
    "client_email",
    "client_id",
    "auth_uri",
    "token_uri",
    "auth_provider_x509_cert_url",
    "client_x509_cert_url",
    "universe_domain",
]
env_data = {}
for var_name in env_variables:
    env_data[var_name] = os.getenv(var_name)
json_format = json.dumps(env_data, indent=4)

FILE = "secrets.json"
SCOPES = ["https://www.googleapis.com/auth/spreadsheets"]
SPREADSHEET_ID = "1TO8JR1Lb4DFv9Sv6UQruxfN_NxhAq0P0ZYa_fqwl6vE"
if not os.path.exists(FILE):
    with open(FILE, "w") as json_file:
        json_file.write(json_format)


@app.post("/contact")
async def get_data(item: Item):
    RANGE = "Sheet1"
    name = item.name
    email = item.email
    phone = item.phone
    description = item.description

    try:
        creds = service_account.Credentials.from_service_account_file(
            FILE, scopes=SCOPES
        )
        client = gspread.authorize(creds)
        spreadsheet = client.open_by_key(SPREADSHEET_ID)
        worksheet = spreadsheet.worksheet(RANGE)
        data = [name, email, phone, description]
        return worksheet.append_row(data)
    except HttpError as err:
        print(err)
    return {"message": "data received successfully"}


@app.post("/careers")
async def careers(
    name: str = Form(...),
    email: str = Form(...),
    phone: str = Form(...),
    file: UploadFile = File(...),
):
    form_data = CareersItem(name=name, email=email, phone=phone)

    print(form_data.name, form_data.email, form_data.phone)
    RANGE = "Sheet2"
    DRIVE_SCOPES = ["https://www.googleapis.com/auth/drive.file"]
    DRIVE_FOLDER_ID = "1YZs71dpb09ENd9moE4N1HeNGo9zRNMYT"

    try:
        creds = service_account.Credentials.from_service_account_file(
            FILE, scopes=DRIVE_SCOPES
        )
        service = build("drive", "v3", credentials=creds)
        uploaded_file = file

        file_metadata = {
            "name": uploaded_file.filename,
            "mimeType": "application/pdf",
            "parents": [DRIVE_FOLDER_ID]
            # Assuming the uploaded file is a PDF
        }
        media = MediaIoBaseUpload(
            BytesIO(await uploaded_file.read()),  # Stream the content directly
            mimetype="application/pdf",
        )

        uploaded_file = (
            service.files()
            .create(body=file_metadata, media_body=media, fields="id")
            .execute()
        )

        name = form_data.name
        email = form_data.email
        phone = form_data.phone
        link = f"https://drive.google.com/file/d/{uploaded_file['id']}"

        creds = service_account.Credentials.from_service_account_file(
            FILE, scopes=SCOPES
        )
        client = gspread.authorize(creds)
        spreadsheet = client.open_by_key(SPREADSHEET_ID)
        worksheet = spreadsheet.worksheet(RANGE)
        data = [name, email, phone, link]
        return worksheet.append_row(data)

    except Exception as e:
        print("Error: " + str(e))


if __name__ == "__main__":
    import uvicorn

    uvicorn.run(app, host="0.0.0.0", port=8000)
