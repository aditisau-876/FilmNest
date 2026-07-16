from fastapi import APIRouter

from app.services.movie_service import MovieService

router = APIRouter(
    prefix="/movies",
    tags=["Movies"],
)

movie_service = MovieService()


@router.get("/trending")
async def trending():
    return await movie_service.get_trending_movies()


@router.get("/now-playing")
async def now_playing():
    return await movie_service.get_now_playing()


@router.get("/top-rated")
async def top_rated():
    return await movie_service.get_top_rated()