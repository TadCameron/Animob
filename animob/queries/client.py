import os
from pymongo import MongoClient



client = MongoClient('mongodb://localhost:27017/')


class Queries:
    @property
    def collection(self):
        db = client[self.animob]
        return db[self.accounts]
