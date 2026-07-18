from datetime import datetime

from app.repositories.watch_history_repository import (
    WatchHistoryRepository,
)


class WatchHistoryService:
    def __init__(self, repo: WatchHistoryRepository):
        self.repo = repo

    def record_view(
        self,
        user_id: int,
        movie_id: int,
    ):
        history = self.repo.get_by_user_and_movie(
            user_id,
            movie_id,
        )

        if history:
            history.last_viewed = datetime.utcnow()
            return self.repo.update(history)

        return self.repo.create(
            user_id,
            movie_id,
        )

    def get_recent_history(
        self,
        user_id: int,
        limit: int = 10,
    ):
        return self.repo.get_recent(
            user_id,
            limit,
        )