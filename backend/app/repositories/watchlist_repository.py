from sqlalchemy.orm import Session

from app.models.watchlist import Watchlist


class WatchlistRepository:
    def __init__(self, db: Session):
        self.db = db

    def get_watchlist(self, user_id: int):
        return (
            self.db.query(Watchlist)
            .filter(Watchlist.user_id == user_id)
            .all()
        )

    def get_item(self, user_id: int, movie_id: int):
        return (
            self.db.query(Watchlist)
            .filter(
                Watchlist.user_id == user_id,
                Watchlist.movie_id == movie_id,
            )
            .first()
        )

    def add(self, user_id: int, movie_id: int):
        item = Watchlist(
            user_id=user_id,
            movie_id=movie_id,
        )

        self.db.add(item)
        self.db.commit()
        self.db.refresh(item)

        return item

    def delete(self, item: Watchlist):
        self.db.delete(item)
        self.db.commit()


    def get_recent(self, user_id: int, limit: int = 10):
        return (
            self.db.query(Watchlist)
            .filter(Watchlist.user_id == user_id)
            .order_by(Watchlist.created_at.desc())
            .limit(limit)
            .all()
        )