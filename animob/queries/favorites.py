from .client import Queries
from pydantic import BaseModel

class FavoritesIn(BaseModel):
    animeTitle: str
    animeImg: str

class FavoritesOut(FavoritesIn):
    id: str
    account_id: str

class FavoritesList(BaseModel):
    favorites: list[FavoritesOut]

class FavoritesQueries(Queries):
    COLLECTION = 'favorites'

    def get_all(self, account_id:str) -> list[FavoritesOut]:
        print("*********")
        results = self.collection.find({"account_id":account_id})
        print(results)
        favorites = []
        for row in results:
            row['id'] = str(row['_id'])
            row['id'] = str(row['_id'])
            favorite= FavoritesOut(**row)
            favorites.append(favorite)
        return favorites

    def get_favorites(self, account_id) -> FavoritesOut:
      results = self.collection.find_one({"_id": account_id})
      if results:
           results['_id'] = str(results['account_id'])
           return results

    def create_favorite(self, account_id:str, favorite_in:FavoritesIn) -> FavoritesOut:
        favorite_to_add = favorite_in.dict()
        favorite_to_add['account_id'] = account_id
        result = self.collection.insert_one(favorite_to_add)
        if result.inserted_id:
            result = self.get_favorites(result.inserted_id)
            return result
