from fastapi import APIRouter, Depends
from queries.anime import AnimeQueries
from pydantic import BaseModel

router = APIRouter()

class Popular(BaseModel):
    animeTitle: str

class TopAiring(BaseModel):
    animeTitle: str
    animeImg: str
    latestEpi: int
    genres: str

class Detail(BaseModel):
    animeTitle: str
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

@router.get("/api/genres/")
async def get_genres():
    anime_genre = [
    "action", "adventure", "cars", "comedy", "crime",
    "dementia", "demons", "drama", "dub", "ecchi",
    "family", "fantasy", "game", "gourmet", "harem",
    "historical", "horror", "josei", "kids", "magic",
    "martial-arts", "mecha", "military", "music",
    "mystery", "parody", "police", "psychological",
    "romance", "samurai", "school", "sci-fi", "seinen",
    "shoujo", "shoujo-ai", "shounen", "shounen-ai",
    "slice-of-Life", "space", "sports", "super-power",
    "supernatural", "suspense", "thriller", "vampire",
    "yaoi", "yuri",]
    return anime_genre

@router.get("/api/genres/{genre}")
def get_anime_by_genre(
    genre: str,
    repo: AnimeQueries = Depends()
):
    return repo.get_anime_by_genre(genre)
