from pymongo import MongoClient
from pydantic import BaseModel

class FavoritesIn(BaseModel):
    animeTitle: str
    animeImg: str

class FavoritesOut(FavoritesIn):
    id: str

class Queries:
    @property
    def collection(self):
        db = client[self.dbname]
        return db[self.COLLECTION]

class FavoritesQueries(Queries):
    COLLECTION = 'favorites'

    def get_all(self, account_id:str) -> list[FavoritesOut]:
        results = self.collection.find({"account_id":account_id})
        favorites = []
        for row in results:
            row['id'] = row['_id']
            favorite= FavoritesOut(**row)
            favorites.append(favorite)
        return favorites

    def get_favorite(self, id) -> FavoritesOut:
      results = self.collection.find_one({"_id": id})
      if results:
           results['id'] = str(results['_id'])
           return FavoritesOut(**results)
