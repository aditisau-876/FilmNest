from app.repositories.genre_preference_repository import (
    GenrePreferenceRepository,
)


class GenrePreferenceService:

    def __init__(self, repo: GenrePreferenceRepository):
        self.repo = repo

    def record_search(self, user_id: int, genre: str):
        preference = self.repo.get_preference(user_id, genre)

        if preference:
            return self.repo.increment(preference)

        return self.repo.create(user_id, genre)
    
    def record_genres(self, user_id: int, genres: list[str]):
        for genre in genres:
            self.record_search(user_id, genre)

    def get_top_genres(self, user_id: int):
        return self.repo.get_top_genres(user_id)
    
    def get_favorite_genres(
        self,
        user_id: int,
    ):
        preferences = self.repo.get_top_genres(user_id)

        return [
            preference.genre
            for preference in preferences
        ]