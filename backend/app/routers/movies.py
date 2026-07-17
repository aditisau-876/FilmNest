from fastapi import APIRouter, Query
from app.services.movie_service import MovieService
from app.schemas.movie import (
    MovieListResponse,
    MovieDetailResponse,
    WatchProvidersResponse,
    CastListResponse,
    ReviewListResponse
)

router = APIRouter(prefix="/movies",tags=["Movies"])
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

@router.get("/search")
async def search_movies(
    query: str = Query("", min_length=0),
    genre: int | None = None,
    year: int | None = None,
    cast: str | None = None,
):
    return await movie_service.search_movies(
        query=query,
        genre=genre,
        year=year,
        cast=cast,
    )

@router.get(
    "/upcoming",
    response_model=MovieListResponse,
)
async def upcoming_movies():
    return await movie_service.get_upcoming_movies()

@router.get("/popular")
async def popular_movies():
    return await movie_service.get_popular_movies()

@router.get("/{movie_id}")
async def movie_details(
    movie_id: int,
):
    return await movie_service.get_movie_details(movie_id)

@router.get("/{movie_id}/similar")
async def similar_movies(
    movie_id: int,
):
    return await movie_service.get_similar_movies(movie_id)

@router.get("/{movie_id}/watch-providers")
async def watch_providers(
    movie_id: int,
):
    return await movie_service.get_watch_providers(movie_id)

@router.get("/{movie_id}/trailer")
async def movie_trailer(
    movie_id: int,
):
    return await movie_service.get_trailer(movie_id)

@router.get(
    "/{movie_id}/cast",
    response_model=CastListResponse,
)
async def get_movie_cast(
    movie_id: int,
):
    return await movie_service.get_movie_cast(
        movie_id
    )

@router.get(
    "/{movie_id}/reviews",
    response_model=ReviewListResponse,
)
async def get_movie_reviews(
    movie_id: int,
):
    return await movie_service.get_movie_reviews(
        movie_id
    )


@router.get(
    "/{movie_id}/recommendations",
    response_model=MovieListResponse,
)
async def get_recommendations(
    movie_id: int,
):
    return await movie_service.get_recommendations(
        movie_id
    )

