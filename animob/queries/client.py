import os
from pymongo import MongoClient


dbhost = os.environ['MONGOHOST']
dbuser = os.environ['MONGOUSER']
dbpass = os.environ['MONGOPASSWORD']
mongo_str = f"mongodb://{dbuser}:{dbpass}@{dbhost}"
print(mongo_str)
client = MongoClient(mongo_str)




class Queries:
    DB_NAME = 'animob'
    @property
    def collection(self):
        db = client[self.DB_NAME]
        return db[self.COLLECTION]
