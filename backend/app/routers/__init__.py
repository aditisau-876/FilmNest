from fastapi import APIRouter
from app.routers.auth import router as auth_router
from app.routers.movies import router as movies_router
from app.routers.watchlist import router as watchlist_router
from app.routers.users import router as users_router

api_router = APIRouter()

api_router.include_router(auth_router)
api_router.include_router(movies_router)
api_router.include_router(watchlist_router)
api_router.include_router(users_router)