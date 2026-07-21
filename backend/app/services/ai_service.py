from sqlalchemy.orm import Session

from app.models.user import User

from app.ai.query_builder import query_builder
from app.ai.entity_resolver import entity_resolver
from app.clients.gemini_client import gemini_client

from app.services.movie_service import MovieService
from app.services.recommendation_service import recommendation_service

from app.repositories.watch_history_repository import (
    WatchHistoryRepository,
)
from app.repositories.genre_preference_repository import (
    GenrePreferenceRepository,
)

from app.services.watch_history_service import (
    WatchHistoryService,
)
from app.services.genre_preference_service import (
    GenrePreferenceService,
)


class AIService:

    def __init__(self, db: Session):
        self.db = db
        self.movie_service = MovieService()

        self.watch_history_service = WatchHistoryService(
            WatchHistoryRepository(db)
        )

        self.genre_service = GenrePreferenceService(
            GenrePreferenceRepository(db)
        )

    async def recommend_movies(
        self,
        prompt: str,
        current_user: User,
    ):
        # Step 1: Extract preferences from Gemini
        preferences = gemini_client.extract_preferences(prompt)

        # Step 2: Save searched genres for future recommendations
        if preferences.genres:
            self.genre_service.record_genres(
                current_user.id,
                preferences.genres,
            )

        # Step 3: Resolve names to TMDB IDs
        preferences = await entity_resolver.resolve(
            preferences
        )

        # Step 4: Build TMDB Discover query
        params = query_builder.build(
            preferences
        )

        # Step 5: Fetch movies from TMDB
        movies = await self.movie_service.discover_movies(
            params
        )

        # Step 6: Load user preferences
        favorite_genres = (
            self.genre_service.get_favorite_genres(
                current_user.id
            )
        )

        watched_movie_ids = (
            self.watch_history_service.get_watched_movie_ids(
                current_user.id
            )
        )

        # Step 7: Personalize ranking
        ranked_movies = recommendation_service.rank_movies(
            movies.data,
            favorite_genres,
            watched_movie_ids,
        )

        movies.data = ranked_movies

        return movies