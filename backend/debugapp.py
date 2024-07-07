import requests
from environment_variables import Env

e = Env()

# Define the API endpoint
client_id = e.clientid
client_secret = e.clientsecret
audience = e.audience
auth0_domain = e.auth0domain


def get_access_token(client_id, client_secret, audience, auth0_domain):
    url = f"https://{auth0_domain}/oauth/token"
    headers = {"content-type": "application/json"}
    payload = {
        "client_id": client_id,
        "client_secret": client_secret,
        "audience": audience,
        "grant_type": "client_credentials",
    }

    response = requests.post(url, json=payload, headers=headers)
    access_token = response.json().get("access_token")
    return access_token


print("Making GET request...")
url = "https://skyblulabs-db-api.onrender.com/submit"
# url = "http://localhost:5000/submit"
token = get_access_token(client_id, client_secret, audience, auth0_domain)
print("token", token)
# token = "abc"
# Data to be sent in the POST request
data = {
    "firstName": "John",
    "lastName": "Doe",
    "email": "john.doe@example.com",
    "phone": "1234567890",
    "company": "Example Inc.",
    "country": "USA",
    "message": "This is a test message",
}

# Headers including the Authorization token
headers = {"Content-Type": "application/json", "Authorization": f"Bearer {token}"}

response = requests.post(url, json=data, headers=headers)

# Print the response from the server
print(response.status_code)
print(response.json())
