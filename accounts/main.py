from fastapi import FastAPI, APIRouter, Request, Response, Depends, HTTPException, status
from authenticator import authenticator
from jwtdown_fastapi.authentication import Token
from pydantic import BaseModel
from queries.accounts import AccountIn, AccountOut, AccountQueries, DuplicateAccountError


class AccountForm(BaseModel):
    username: str
    password: str

class AccountToken(Token):
    account: AccountOut

class HttpError(BaseModel):
    detail: str

router = APIRouter()
app = FastAPI()
app.include_router(authenticator.router)

@router.post("/api/accounts", response_model=AccountToken)
async def create_account(
        info: AccountIn,
        request: Request,
        response: Response,
        accounts: AccountQueries=Depends()
    ):
        hashed_password = authenticator.hash_password(info.password)
        try:
            account = accounts.create(info, hashed_password)
        except DuplicateAccountError:
            raise HTTPException(
                status_code=status.HTTP_400_BAD_REQUEST,
                detail="Cannot create an account with those credentials",
            )
        form = AccountForm(username=info.email, password=info.password)
        token = await authenticator.login(response, request, form, accounts)
        return AccountToken(account=account, **token.dict())