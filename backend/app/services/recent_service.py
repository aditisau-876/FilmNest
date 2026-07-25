from sqlalchemy.orm import Session
from app.models.recently_viewed import RecentlyViewed

def add_recent_movie(
    db: Session,
    user_id: int,
    movie_id: int,
):
    old = (
        db.query(RecentlyViewed)
        .filter(
            RecentlyViewed.user_id == user_id,
            RecentlyViewed.movie_id == movie_id,
        )
        .first()
    )

    if old:
        db.delete(old)
        db.commit()

    movie = RecentlyViewed(
        user_id=user_id,
        movie_id=movie_id,
    )

    db.add(movie)
    db.commit()


def get_last_recent_movie(
    db: Session,
    user_id: int,
):
    return (
        db.query(RecentlyViewed)
        .filter(
            RecentlyViewed.user_id == user_id
        )
        .order_by(
            RecentlyViewed.viewed_at.desc()
        )
        .first()
    )