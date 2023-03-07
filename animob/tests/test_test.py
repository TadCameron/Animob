import json
from fastapi.testclient import TestClient
from main import app
from routers.auth import MyAuthenticator
from queries.favorites import FavoritesIn, FavoritesOut, FavoritesQueries


def mock_get_current_account_data():
    return {
        'id' : '7',
    }

client = TestClient(app=app)

class MockFavoritesQuery:
    def create(self, favorites:FavoritesIn, account_id: int) -> FavoritesOut:
        favorites = []
        return FavoritesOut(id=2, **favorites)

    def get_all_favorites(self, account_id):
        return [{"animeTitle": "Bleach",
        "animeId": "Bleach",
        "animeImg": "https://gogocdn.net/images/anime/B/bleach.jpg",
        "account_id": 7},

        {"animeTitle": "Naruto",
        "animeId": "Naruto",
        "animeImg": "https://gogocdn.net/images/anime/N/naruto.jpg",
        "account_id": 7}]

    def get_favorite(self, favorite_id, account_id):
        return {"animeTitle": "Bleach",
        "animeId": "Bleach",
        "animeImg": "https://gogocdn.net/images/anime/B/bleach.jpg",
        "account_id": 7}

    def delete_favorite(self, favorites:FavoritesIn, account_id: int) -> FavoritesOut:
        return True

def test_mock_create_favorite ():
    #Arrange
    app.dependency_overrides[FavoritesQueries] = MockFavoritesQuery
    app.dependency_overrides[
        MyAuthenticator.get_current_account_data
    ] = mock_get_current_account_data
    expected = {"animeTitle": "Bleach",
        "animeId": "Bleach",
        "animeImg": "https://gogocdn.net/images/anime/B/bleach.jpg",
        "account_id": 7}

    #Act
    response = client.post("/favorites", json.dumps(expected))

    #Assert (needs boolean)
    assert response.status_code == 200
    assert response.json()["id"] == 2
    assert response.json()["animeTitle"] == "Bleach"
    assert response.json()["animeId"] == "Bleach"
    assert response.json()["animeImg"] == "https://gogocdn.net/images/anime/B/bleach.jpg"

    app.dependency_overrides = {}
