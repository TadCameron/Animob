from queries.favorites import FavoritesIn, FavoritesQueries
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
