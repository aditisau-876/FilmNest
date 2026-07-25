from unittest import result

from fastapi import APIRouter, Query
from app.services.movie_service import MovieService
from app.schemas.movie import (
    MovieListResponse,
    MovieDetailResponse,
    WatchProvidersResponse,
    CastListResponse,
    ReviewListResponse
)
from app.repositories.watch_history_repository import WatchHistoryRepository
from app.services.watch_history_service import WatchHistoryService

from app.utils.tmdb_genres import TMDB_GENRES

from fastapi import Depends
from sqlalchemy.orm import Session

from app.core.database import get_db
from app.core.dependencies import get_current_user
from app.models.user import User

from app.repositories.genre_preference_repository import (
    GenrePreferenceRepository,
)
from app.services.genre_preference_service import (
    GenrePreferenceService,
)
from app.services.recent_service import add_recent_movie
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
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    result = await movie_service.search_movies(
    query=query,
    genre=genre,
    year=year,
    cast=cast,
)
    if genre is not None:
        repo = GenrePreferenceRepository(db)
        service = GenrePreferenceService(repo)

        genre_name = TMDB_GENRES.get(genre)

        if genre_name:
            service.record_search(
                current_user.id,
                genre_name,
            )

    return result


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
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    movie = await movie_service.get_movie_details(movie_id)
    history_repo = WatchHistoryRepository(db)
    history_service = WatchHistoryService(history_repo)

    history_service.record_view(current_user.id,movie_id)
    add_recent_movie(db=db,user_id=current_user.id,movie_id=movie_id)
    repo = GenrePreferenceRepository(db)
    service = GenrePreferenceService(repo)

    genres = [
    genre.name
    for genre in movie.genres
    ]

    service.record_genres(
    current_user.id,
    genres,
    )

    return movie

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
