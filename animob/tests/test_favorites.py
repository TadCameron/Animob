import json
from fastapi.testclient import TestClient
from routers.auth import authenticator
from main import app
from queries.favorites import FavoritesIn, FavoritesOut, FavoritesQueries
from queries.anime import AnimeQueries


def mock_get_current_account_data():
    return {
        "id": "7",
    }


client = TestClient(app=app)


class MockFavoritesQuery:
    def create_favorite(
        self, favorite_in: FavoritesIn, account_id: str
    ) -> FavoritesOut:
        return FavoritesOut(id=2, account_id=account_id, **favorite_in.dict())

    def get_all(self, account_id):
        return [
            {
                "animeTitle": "Bleach",
                "animeId": "Bleach",
                "animeImg": "https://gogocdn.net/images/anime/B/bleach.jpg",
                "account_id": "7",
            },
            {
                "animeTitle": "Naruto",
                "animeId": "Naruto",
                "animeImg": "https://gogocdn.net/images/anime/N/naruto.jpg",
                "account_id": "7",
            },
        ]

    def get_favorite(self, favorite_id, account_id):
        return {
            "animeTitle": "Bleach",
            "animeId": "Bleach",
            "animeImg": "https://gogocdn.net/images/anime/B/bleach.jpg",
            "account_id": "7",
        }

    def delete_favorite(
        self, favorites: FavoritesIn, account_id: int
    ) -> FavoritesOut:
        return True


def test_mock_create_favorite():
    # Arrange
    print("hello")
    app.dependency_overrides[FavoritesQueries] = MockFavoritesQuery
    app.dependency_overrides[
        authenticator.get_current_account_data
    ] = mock_get_current_account_data
    expected = {
        "animeTitle": "Bleach",
        "animeId": "Bleach",
        "animeImg": "https://gogocdn.net/images/anime/B/bleach.jpg",
        "account_id": "7",
    }

    # Act
    response = client.post("/api/favorites", json.dumps(expected))

    # Assert (needs boolean)
    assert response.status_code == 200
    assert response.json()["id"] == "2"
    assert response.json()["animeTitle"] == "Bleach"
    assert response.json()["animeId"] == "Bleach"
    assert (
        response.json()["animeImg"]
        == "https://gogocdn.net/images/anime/B/bleach.jpg"
    )

    app.dependency_overrides = {}


def test_mock_get_all():
    # Arrange
    app.dependency_overrides[FavoritesQueries] = MockFavoritesQuery
    app.dependency_overrides[
        authenticator.get_current_account_data
    ] = mock_get_current_account_data
    expected = {
        "favorites": [
            {
                "animeTitle": "Bleach",
                "animeId": "Bleach",
                "animeImg": "https://gogocdn.net/images/anime/B/bleach.jpg",
                "account_id": "7",
            },
            {
                "animeTitle": "Naruto",
                "animeId": "Naruto",
                "animeImg": "https://gogocdn.net/images/anime/N/naruto.jpg",
                "account_id": "7",
            },
        ]
    }

    # Act
    response = client.get("/api/favorites")

    # Assert
    assert response.status_code == 200
    assert response.json() == expected

    app.dependency_overrides = {}


class MockAnimeQuery:
    def get_anime_detail(self, name: str):
        return {"name": name, "description": "mock description"}

    def get_top_airing_anime(self):
        return {
            "animeList": [
                {
                    "animeTitle": "Bleach",
                    "animeId": "Bleach",
                    "animeImg": "https://gogocdn.net/images/anime/B/bleach.jpg",
                },
                {
                    "animeTitle": "Naruto",
                    "animeId": "2",
                    "animeImg": "https://gogocdn.net/images/anime/N/naruto.jpg",
                },
            ]
        }


def test_get_anime_detail():
    # Arrange
    app.dependency_overrides[AnimeQueries] = MockAnimeQuery

    # Act
    response = client.get("/api/anime-details/?name=mockname")

    # Assert
    assert response.status_code == 200
    assert response.json() == {
        "name": "mockname",
        "description": "mock description",
    }

    app.dependency_overrides = {}


def test_get_top_airing_anime():
    # Arrange
    app.dependency_overrides[AnimeQueries] = MockAnimeQuery
    expected = {
        "animeList": [
            {
                "animeTitle": "Bleach",
                "animeId": "Bleach",
                "animeImg": "https://gogocdn.net/images/anime/B/bleach.jpg",
            },
            {
                "animeTitle": "Naruto",
                "animeId": "2",
                "animeImg": "https://gogocdn.net/images/anime/N/naruto.jpg",
            },
        ]
    }

    # Act
    response = client.get("/api/top-airing/")

    # Assert
    assert response.status_code == 200
    assert response.json() == expected

    app.dependency_overrides = {}
