""" Class definition to get the Environment variables from .env"""
import os
from dotenv import load_dotenv

class Env():

    def __init__(self):
        load_dotenv()
        # Loading the variables from .env file
        # And store it in the private variable in the Env class

        # Scripts related Variables
        self._mongo_uri = \
            os.environ.get("MONGO_URI")
        self._database = \
            os.environ.get("DATABASE")
        self._collection = \
            os.environ.get("COLLECTION")
        self._auth0domain = \
            os.environ.get("AUTH0_DOMAIN")
        self._api_identifier = \
            os.environ.get("API_IDENTIFIER")
        self._algorithm = \
            os.environ.get("ALGORITHMS")
        self._clientid = \
            os.environ.get("CLIENT_ID")
        self._clientsecret = \
            os.environ.get("CLIENT_SECRET")
        self._audience = \
            os.environ.get("AUDIENCE")
    
    @property
    def mongo_uri(self):
        return self._mongo_uri
    
    @property
    def database(self):
        return self._database
    
    @property
    def collection(self):
        return self._collection
    
    @property
    def auth0domain(self):
        return self._auth0domain
    
    @property
    def api_identifier(self):
        return self._api_identifier
    
    @property
    def algorithm(self):
        return self._algorithm
    
    @property
    def clientid(self):
        return self._clientid
    
    @property
    def clientsecret(self):
        return self._clientsecret
    
    @property
    def audience(self):
        return self._audience
    

if __name__ == '__main__':
    e = Env()