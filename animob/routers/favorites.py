from queries.favorites import FavoritesIn, FavoritesQueries, FavoritesList
from fastapi import APIRouter, Depends
from .auth import authenticator

router = APIRouter()

@router.post('/api/favorites')
async def create_favorite(
    favorite_in: FavoritesIn,
    repo: FavoritesQueries = Depends(),
    account_data: dict = Depends(authenticator.get_current_account_data),
):
    return repo.create_favorite(favorite_in=favorite_in, account_id = account_data['id'])

@router.get('/api/favorites')
async def get_favorites(
    account_data: dict = Depends(authenticator.get_current_account_data),
    repo: FavoritesQueries = Depends(),
):
    return{
        'favorites': repo.get_favorites(account_id = account_data['id'])
    }
