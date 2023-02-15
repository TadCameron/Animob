from fastapi import APIRouter
<<<<<<< HEAD

router = APIRouter()

@router.get('/api/anime-details/$animeTitle')


=======
from queries.anime import AnimeQueries

router = APIRouter()

@router.get("/")
def get_popular_anime():


@router.get("/")
def get_anime_detail():


@router.get("/")
def get_top_airing_anime():


@router.get("/")
def get_genres():


@router.get("/")
def get_anime_by_genre():
>>>>>>> 2bcfd8175f9c064ba073cd101bf01e4d9d4e4004
