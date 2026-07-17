from sqlalchemy.orm import Session

from app.models.user import User
from app.repositories.watchlist_repository import WatchlistRepository
from app.schemas.watchlist import WatchlistCreate
from app.services.movie_service import MovieService


class WatchlistService:
    def __init__(self, db: Session):
        self.db = db
        self.repository = WatchlistRepository(db)
        self.movie_service = MovieService()

    async def add_movie(
        self,
        current_user: User,
        watchlist_data: WatchlistCreate,
    ):
        existing = self.repository.get_item(
            current_user.id,
            watchlist_data.movie_id,
        )

        if existing:
            raise ValueError("Movie already exists in your watchlist")

        movie = await self.movie_service.get_movie_details(
            watchlist_data.movie_id
        )

        item = self.repository.add(
            current_user.id,
            watchlist_data.movie_id,
        )

        return {
            "message": "Movie added to watchlist",
            "movie": movie,
            "added_at": item.created_at,
        }

    async def get_watchlist(
        self,
        current_user: User,
    ):
        items = self.repository.get_watchlist(current_user.id)

        movies = []

        for item in items:
            movie = await self.movie_service.get_movie_details(
                item.movie_id
            )

            movies.append(movie)

        return movies

    async def remove_movie(
        self,
        current_user: User,
        movie_id: int,
    ):
        item = self.repository.get_item(
            current_user.id,
            movie_id,
        )

        if item is None:
            raise ValueError("Movie not found in watchlist")

        self.repository.delete(item)

        return {
            "message": "Movie removed from watchlist"
        }