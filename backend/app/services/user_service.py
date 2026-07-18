from sqlalchemy.orm import Session

from app.models.user import User
from app.models.watchlist import Watchlist

from app.repositories.genre_preference_repository import (
    GenrePreferenceRepository,
)
from app.services.genre_preference_service import (
    GenrePreferenceService,
)

from app.repositories.watch_history_repository import WatchHistoryRepository
from app.services.watch_history_service import WatchHistoryService
from app.services.movie_service import MovieService
from app.repositories.watchlist_repository import WatchlistRepository


class UserService:

    def __init__(self, db: Session):
        self.db = db
        self.movie_service = MovieService()

    def get_profile(self, current_user: User):

        watchlist_count = (
            self.db.query(Watchlist)
            .filter(Watchlist.user_id == current_user.id)
            .count()
        )

        genre_repo = GenrePreferenceRepository(self.db)
        genre_service = GenrePreferenceService(genre_repo)

        favorite_genres = [
             preference.genre
            for preference in genre_service.get_top_genres(current_user.id)
        ]

        return {
            "id": current_user.id,
            "username": current_user.username,
            "email": current_user.email,
            "profile_picture": current_user.profile_picture,
            "stats": {
                "movies_watched": 0,
                "watchlist_count": watchlist_count,
                "reviews_count": 0,
            },
            "favorite_genres": favorite_genres,
        }
    
    async def get_watch_history(
        self,
        current_user,
    ):
        history_repo = WatchHistoryRepository(self.db)
        history_service = WatchHistoryService(history_repo)

        history = history_service.get_recent_history(
            current_user.id
        )

        movie_ids = [
            item.movie_id
            for item in history
        ]

        movies = await self.movie_service.get_movies_by_ids(
            movie_ids
        )

        return movies
    
    async def get_recent_activity(
        self,
        current_user,
    ):
        watchlist_repo = WatchlistRepository(self.db)
        history_repo = WatchHistoryRepository(self.db)

        watchlist = watchlist_repo.get_recent(current_user.id)
        history = history_repo.get_recent(current_user.id)

        activities = []

        for item in watchlist:
            movie = await self.movie_service.get_movie_details(item.movie_id)

            activities.append({
                "type": "watchlist",
                "title": movie.title,
                "created_at": item.created_at,
            })

        for item in history:
            movie = await self.movie_service.get_movie_details(item.movie_id)

            activities.append({
                "type": "history",
                "title": movie.title,
                "created_at": item.last_viewed,
            })

        activities.sort(
            key=lambda x: x["created_at"],
            reverse=True,
        )

        return activities[:10]