from datetime import datetime, timezone

from app.repositories.watchlist_repository import WatchlistRepository
from app.repositories.genre_preference_repository import (
    GenrePreferenceRepository,
)
from app.services.genre_preference_service import (
    GenrePreferenceService,
)
from app.services.movie_service import MovieService



class NotificationService:

    def __init__(self, db):
        self.db = db
        self.movie_service = MovieService()

        genre_repo = GenrePreferenceRepository(db)

        self.genre_service = GenrePreferenceService(
            genre_repo
        )

        self.watchlist_repo = WatchlistRepository(db)

    async def get_notifications(self, current_user):

        notifications = []

    # ---------------------------------------
    # Recommendation Notification
    # ---------------------------------------
        try:
            top_genres = self.genre_service.get_top_genres(
            current_user.id
            )

            if top_genres:
                genre_name = top_genres[0].genre

                notifications.append(
                    {
                        "type": "recommendation",
                        "title": "Recommended For You",
                        "message": (
                            f"Because you enjoy {genre_name} movies, "
                            f"check out more titles in this genre."
                        ),
                        "created_at": datetime.now(timezone.utc),
                    }
                )

        except Exception as e:
            print("Recommendation Notification Error:", e)

    # ---------------------------------------
    # Watchlist Notification
    # ---------------------------------------
        recent_watchlist = []

        try:
            recent_watchlist = self.watchlist_repo.get_recent(
                current_user.id,
                limit=1,
            )

            if recent_watchlist:

                movie = await self.movie_service.get_movie_details(
                    recent_watchlist[0].movie_id
                )

                notifications.append(
                    {
                        "type": "watchlist",
                        "title": "Watchlist Update",
                        "message": (
                            f"{movie.title} is waiting in your Watchlist."
                        ),
                        "created_at": recent_watchlist[0].created_at,
                    }
                )

        except Exception as e:
            print("Watchlist Notification Error:", e)

    # ---------------------------------------
    # Trending Notification
    # ---------------------------------------
        try:

            trending = await self.movie_service.get_trending_movies()

            if trending.data:

                notifications.append(
                    {
                        "type": "trending",
                        "title": "Trending Now",
                        "message": (
                            f"{trending.data[0].title} "
                            f"is trending worldwide."
                        ),
                        "created_at": datetime.now(timezone.utc),
                    }
                )

        except Exception as e:
            print("Trending Notification Error:", e)

    # ---------------------------------------
    # Trailer Notification
    # ---------------------------------------
        try:

            if recent_watchlist:

                movie = await self.movie_service.get_movie_details(
                    recent_watchlist[0].movie_id
                )

                trailer = await self.movie_service.get_trailer(
                    movie.id
                )

                if trailer.youtube_key:

                    notifications.append(
                        {
                            "type": "trailer",
                            "title": "New Trailer",
                            "message": (
                                f"The latest trailer for "
                                f"{movie.title} is available."
                            ),
                            "created_at": datetime.now(timezone.utc),
                        }
                    )

        except Exception as e:
            print("Trailer Notification Error:", e)

        notifications.sort(
            key=lambda x: (
                x["created_at"]
                if x["created_at"].tzinfo
                else x["created_at"].replace(
                    tzinfo=timezone.utc
                )
            ),
            reverse=True,
        )

        return notifications