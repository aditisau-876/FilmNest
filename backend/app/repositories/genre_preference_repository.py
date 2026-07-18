from datetime import datetime

from sqlalchemy.orm import Session

from app.models.genre_preference import GenrePreference


class GenrePreferenceRepository:

    def __init__(self, db: Session):
        self.db = db

    def get_preference(self, user_id: int, genre: str):
        return (
            self.db.query(GenrePreference)
            .filter(
                GenrePreference.user_id == user_id,
                GenrePreference.genre == genre,
            )
            .first()
        )

    def create(self, user_id: int, genre: str):
        preference = GenrePreference(
            user_id=user_id,
            genre=genre,
            search_count=1,
        )

        self.db.add(preference)
        self.db.commit()
        self.db.refresh(preference)

        return preference

    def increment(self, preference: GenrePreference):
        preference.search_count += 1
        preference.last_searched = datetime.utcnow()

        self.db.commit()
        self.db.refresh(preference)

        return preference

    def get_top_genres(self, user_id: int, limit: int = 3):
        return (
            self.db.query(GenrePreference)
            .filter(GenrePreference.user_id == user_id)
            .order_by(GenrePreference.search_count.desc())
            .limit(limit)
            .all()
        )