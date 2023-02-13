import pymongo
import os

client = pymongo.MongoClient(os.environ["DATABASE_URL"])
mydb = os.environ['animob-data']
