from pydantic import BaseModel
from pymongo.errors import DuplicateKeyError
from typing import Optional
# from client import Queries

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


class AccountQueries:
    def __init__(self, collection):
        self.collection = collection

    def get(self, username: str) -> Optional[AccountOutWithPassword]: #we might not need this optional thing
        account_data = self.collection.find_one({'username': username})
        if account_data is None:
            return None
        return AccountOutWithPassword(
            id=str(account_data['_id']),
            username=account_data['username'],
            hashed_password=account_data['hashed_password']
        )

    def create(self, account: AccountIn, hashed_password: str) -> AccountOutWithPassword:
        account_data = account.dict()
        account_data['hashed_password'] = hashed_password
        try:
            result = self.collection.insert_one(account_data)
        except DuplicateKeyError:
            raise DuplicateAccountError(f"Account with username {account.username} already exists")
        account_out = AccountOutWithPassword(
            id=str(result.inserted_id),
            username=account.username,
            hashed_password=hashed_password
        )
        return account_out

# class AccountQueries(Queries):
#     #region properties

#     def get(self, username:str) -> AccountOutWithPassword:


#     def create(self, user: AccountIn, hashed_password: str) -> AccountOutWithPassword:
