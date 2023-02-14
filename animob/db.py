import pymongo
import os
from passlib.hash import bcrypt

client = pymongo.MongoClient(os.environ["mongodb://localhost:27017/"])
db = os.environ['animob-data']
users = db["users"]


user_data = {
    "username": "myusername",
    "password_hash": bcrypt.hash("mypassword")
}
result = users.insert_one(user_data)
