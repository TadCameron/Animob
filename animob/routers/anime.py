from fastapi import APIRouter, Depends
from queries.anime import AnimeQueries
from pydantic import BaseModel

router = APIRouter()

class Popular(BaseModel):
    animeTitle: str

class TopAiring(BaseModel):
    animetitle: str
    animeImg: str
    latestEpi: int
    genres: str

class Detail(BaseModel):
    animetitle: str
    animeImg: str
    genres: str
    synopsis: str

class Genres(BaseModel):
    animeImg: str
    genres: str

class GenreDetail(BaseModel):
    animeTitle: str

@router.get('/api/popular/')
def get_popular_anime(
    repo: AnimeQueries = Depends()
):
    return repo.get_popular_anime()

@router.get("/api/anime-details/")
def get_anime_detail(
    name: str,
    repo: AnimeQueries = Depends()
):
    return repo.get_anime_detail(name)

@router.get("/api/top-airing/")
def get_top_airing_anime(
    repo: AnimeQueries = Depends()
):
    return repo.get_top_airing_anime()

@router.get("/api/genres/", response_model=Genres )
def get_genres(
    repo: AnimeQueries = Depends()
):
    return repo.get_genres()

@router.get("/api/genre/{genre}")
def get_anime_by_genre(
    genre: str,
    repo: AnimeQueries = Depends()
):
    return repo.get_anime_by_genre(genre)
