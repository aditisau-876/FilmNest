from datetime import datetime


class RecommendationService:

    def rank_movies(
        self,
        movies: list,
        favorite_genres: list[str] | None = None,
        watched_movie_ids: list[int] | None = None,
    ) -> list:

        favorite_genres = favorite_genres or []
        watched_movie_ids = watched_movie_ids or []

        scored_movies = []

        current_year = datetime.now().year

        for movie in movies:

            score = 0

            # -----------------------
            # Rating Score
            # -----------------------
            if movie.rating >= 8:
                score += 20
            elif movie.rating >= 7:
                score += 10

            # -----------------------
            # Recent Movie Score
            # -----------------------
            if movie.release_date:

                try:
                    release_year = int(movie.release_date[:4])

                    if current_year - release_year <= 5:
                        score += 10

                except Exception:
                    pass

            # -----------------------
            # Favorite Genre Score
            # -----------------------
            if hasattr(movie, "genres"):

                movie_genres = {
                    genre.name.lower()
                    for genre in movie.genres
                }

                for genre in favorite_genres:

                    if genre.lower() in movie_genres:
                        score += 25

            # -----------------------
            # Already Watched
            # -----------------------
            if movie.id in watched_movie_ids:
                score -= 100

            scored_movies.append(
                (
                    score,
                    movie,
                )
            )

        scored_movies.sort(
            key=lambda x: x[0],
            reverse=True,
        )

        return [
            movie
            for score, movie in scored_movies
        ]


recommendation_service = RecommendationService()