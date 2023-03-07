from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import os

from routers import auth
from routers import accounts, anime, favorites


app = FastAPI()

origins = [
    "http://localhost:3000",
    os.environ.get("CORS_HOST, None")
]

app.add_middleware(
    CORSMiddleware,
    allow_origins= origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/api/launch-details")
def launch_details():
    return {
        "launch_details": {
            "year": 2022,
            "month": 12,
            "day": "9",
            "hour": 19,
            "min": 0,
            "tz:": "PST"
        }
    }


app.include_router(auth.authenticator.router)
app.include_router(accounts.router, tags=['Accounts'])
app.include_router(anime.router, tags=['Anime'])
app.include_router(favorites.router, tags=['Favorites'])
