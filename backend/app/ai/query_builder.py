from app.schemas.ai import MoviePreferences
from app.ai.constants import GENRE_NAME_TO_ID, SORT_MAP


class QueryBuilder:

    def build(
        self,
        preferences: MoviePreferences,
    ) -> dict:

        params = {}

        # -----------------------------
        # Genres
        # -----------------------------
        if preferences.genres:

            genre_ids = [
                str(GENRE_NAME_TO_ID[g])
                for g in preferences.genres
                if g in GENRE_NAME_TO_ID
            ]

            if genre_ids:
                params["with_genres"] = ",".join(genre_ids)

        # -----------------------------
        # Excluded Genres
        # -----------------------------
        if preferences.exclude_genres:

            genre_ids = [
                str(GENRE_NAME_TO_ID[g])
                for g in preferences.exclude_genres
                if g in GENRE_NAME_TO_ID
            ]   

            if genre_ids:
                params["without_genres"] = ",".join(genre_ids)

        # -----------------------------
        # Actors
        # -----------------------------
        if preferences.actor_ids:

            params["with_cast"] = ",".join(
                map(str, preferences.actor_ids)
            )

        # -----------------------------
        # Directors
        # -----------------------------
        if preferences.director_ids:

            params["with_crew"] = ",".join(
                map(str, preferences.director_ids)
            )

        # -----------------------------
        # Keywords
        # -----------------------------
        if preferences.keyword_ids:

            params["with_keywords"] = ",".join(
                map(str, preferences.keyword_ids)
            )

        # -----------------------------
        # Streaming Providers
        # -----------------------------
        if preferences.provider_ids:

            params["with_watch_providers"] = ",".join(
                map(str, preferences.provider_ids)
            )

            params["watch_region"] = "IN"

        # -----------------------------
        # Language
        # -----------------------------
        if preferences.language:

            params["with_original_language"] = (
                preferences.language
            )

        # -----------------------------
        # Release Year
        # -----------------------------
        if preferences.year_from:

            params["primary_release_date.gte"] = (
                f"{preferences.year_from}-01-01"
            )

        if preferences.year_to:

            params["primary_release_date.lte"] = (
                f"{preferences.year_to}-12-31"
            )
        
        # -----------------------------
        # Runtime
        # -----------------------------
        if preferences.runtime_min:

            params["with_runtime.gte"] = (
                preferences.runtime_min
            )

        if preferences.runtime_max:

            params["with_runtime.lte"] = (
                preferences.runtime_max
            )

        # -----------------------------
        # Rating
        # -----------------------------
        if preferences.min_rating:

            params["vote_average.gte"] = (
                preferences.min_rating
            )

        # -----------------------------
        # Default Sorting
        # -----------------------------
        sort_field = SORT_MAP.get(
            preferences.sort_by,
            "vote_average",
        )

        params["sort_by"] = (
            f"{sort_field}.{preferences.sort_order}"
        )

        params["vote_count.gte"] = (
            preferences.minimum_votes
        )

        params["include_adult"] = (
            preferences.include_adult
        )


        return params
        


query_builder = QueryBuilder()