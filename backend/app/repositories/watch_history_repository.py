from sqlalchemy.orm import Session

from app.models.watch_history import WatchHistory


class WatchHistoryRepository:
    def __init__(self, db: Session):
        self.db = db

    def get_by_user_and_movie(
        self,
        user_id: int,
        movie_id: int,
    ):
        return (
            self.db.query(WatchHistory)
            .filter(
                WatchHistory.user_id == user_id,
                WatchHistory.movie_id == movie_id,
            )
            .first()
        )

    def create(
        self,
        user_id: int,
        movie_id: int,
    ):
        history = WatchHistory(
            user_id=user_id,
            movie_id=movie_id,
        )

        self.db.add(history)
        self.db.commit()
        self.db.refresh(history)

        return history

    def update(self, history: WatchHistory):
        self.db.add(history)
        self.db.commit()
        self.db.refresh(history)

        return history

    def get_recent(
        self,
        user_id: int,
        limit: int = 10,
    ):
        return (
            self.db.query(WatchHistory)
            .filter(WatchHistory.user_id == user_id)
            .order_by(WatchHistory.last_viewed.desc())
            .limit(limit)
            .all()
        )