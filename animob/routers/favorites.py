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

@router.get('/api/favorites')
async def get_all(
    account_data: dict = Depends(authenticator.get_current_account_data),
    repo: FavoritesQueries = Depends(),

):
    return{
        'favorites': repo.get_all(account_id = account_data['id'])
    }

@router.delete('/api/favorites/{favorite_id}')
async def delete_favorite(
    favorite_id: str,
    repo: FavoritesQueries = Depends(),
    account_data: dict = Depends(authenticator.get_current_account_data),
):
    return {
        'favorites': repo.delete_favorite(account_id=account_data['id'], favorite_id=favorite_id)
    }
