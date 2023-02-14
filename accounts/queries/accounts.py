from pydantic import BaseModel
from pymongo.errors import DuplicateKeyError

class DuplicateAccountError(ValueError):
    pass

class AccountIn(BaseModel):
    username: str
    password: str

class AccountOut(BaseModel):
    id: str
    username: str
    password: str

class AccountOutWithPassword(AccountOut):
    hashed_password: str

class AccountQueries(Queries):
    #region properties

    def get(self, username:str) -> AccountOutWithPassword:
     

    def create(self, user: AccountIn, hashed_password: str) -> AccountOutWithPassword:
