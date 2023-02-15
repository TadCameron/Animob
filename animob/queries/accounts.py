from pydantic import BaseModel
from pymongo.errors import DuplicateKeyError
from .client import Queries
from pymongo import MongoClient

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
    DB_NAME = "animob"
    COLLECTION = "accounts"

    def get(self, email: str) -> AccountOut:
        props = self.collection.find_one({"email": email})
        if not props:
            return None
        props["id"] = str(props["_id"])
        return AccountOut(**props)

    def create(self, info: AccountIn, hashed_password: str) -> AccountOut:
        props = info.dict()
        props["password"] = hashed_password
        try:
            self.collection.insert_one(props)
        except DuplicateKeyError:
            raise DuplicateAccountError()
        props["id"] = str(props["_id"])
        return AccountOut(**props)

    def delete_account(self, id: str) -> int:
        with MongoClient(host=self.host, port=self.port) as client:
            db = client[self.db_name]
            db.users.delete_one({"id": id})
