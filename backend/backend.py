from fastapi import FastAPI, Request
from pydantic import BaseModel, EmailStr
import uvicorn
from environment_variables import Env
from pymongo import MongoClient
from jose import jwt
from urllib.request import urlopen
import json

app = FastAPI()
e = Env()

connection = MongoClient(e.mongo_uri)
db = connection[e.database]
collection = db[e.collection]


class UserCreate(BaseModel):
    firstName: str
    lastName: str
    email: EmailStr
    phone: str
    company: str
    country: str
    message: str


def get_jwks():
    jwks_url = f"https://{AUTH0_DOMAIN}/.well-known/jwks.json"
    response = urlopen(jwks_url)
    return json.loads(response.read())


def verify_token(token):
    jwks = get_jwks()
    unverified_header = jwt.get_unverified_header(token)
    rsa_key = {}
    for key in jwks["keys"]:
        if key["kid"] == unverified_header["kid"]:
            rsa_key = {
                "kty": key["kty"],
                "kid": key["kid"],
                "use": key["use"],
                "n": key["n"],
                "e": key["e"],
            }
    if rsa_key:
        try:
            payload = jwt.decode(
                token,
                rsa_key,
                algorithms=[e.algorithm],
                audience=e.api_identifier,
                issuer=f"https://{e.auth0domain}/",
            )
            return payload
        except jwt.ExpiredSignatureError:
            return None
        except jwt.JWTClaimsError:
            return None
        except Exception:
            return None
    return None


@app.post("/submit")
async def submit(user: UserCreate, request: Request):
    token = request.headers.get("Authorization").split()[1]
    payload = verify_token(token)
    if payload:
        data = {
            "firstName": user.firstName,
            "lastName": user.lastName,
            "email": user.email,
            "phone": user.phone,
            "company": user.company,
            "country": user.country,
            "message": user.message,
        }
        collection.insert_one(data)
        return {"message": "Form Submitted Successfully"}
    else:
        return {"message": "Token expired"}, 403


if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)
