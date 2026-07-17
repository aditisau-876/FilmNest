from app.clients.tmdb_client import TMDBClient
from app.schemas.movie import (
    MovieCardResponse,
    MovieListResponse,
    MovieDetailResponse,
    GenreResponse,
    WatchProviderResponse,
    WatchProvidersResponse,
    TrailerResponse,
    CastResponse,
    CastListResponse,
    ReviewResponse,
    ReviewListResponse,
)
from app.core.config import settings

IMAGE_BASE_URL = settings.TMDB_IMAGE_BASE_URL


class MovieService:
    def __init__(self):
        self.tmdb = TMDBClient()

    def _format_movies(self, response: dict) -> MovieListResponse:
        movies = []

        for movie in response.get("results", []):
            movies.append(
                MovieCardResponse(
                    id=movie["id"],
                    title=movie.get("title") or movie.get("name", "Unknown Title"),
                    overview=movie["overview"],
                    poster_url=(
                        f"{IMAGE_BASE_URL}{movie['poster_path']}"
                        if movie.get("poster_path")
                        else None
                    ),
                    backdrop_url=(
                        f"{IMAGE_BASE_URL}{movie['backdrop_path']}"
                        if movie.get("backdrop_path")
                        else None
                    ),
                    release_date=movie.get("release_date"),
                    rating=movie.get("vote_average", 0.0),
                )
            )

        return MovieListResponse(
            success=True,
            data=movies,
        )

    async def get_trending_movies(self) -> MovieListResponse:
        response = await self.tmdb.get(
            "/trending/movie/week"
        )
        return self._format_movies(response)

    async def get_now_playing(self) -> MovieListResponse:
        response = await self.tmdb.get(
            "/movie/now_playing"
        )
        return self._format_movies(response)

    async def get_top_rated(self) -> MovieListResponse:
        response = await self.tmdb.get(
            "/movie/top_rated"
        )
        return self._format_movies(response)
    
    async def search_movies(self, query: str) -> MovieListResponse:
        response = await self.tmdb.get(
        "/search/movie",
        params={
            "query": query,
        },
    )
        return self._format_movies(response)
    
    async def get_movie_details(self, movie_id: int,) -> MovieDetailResponse:
        movie = await self.tmdb.get(
        f"/movie/{movie_id}"
    )

        return MovieDetailResponse(
        id=movie["id"],
        title=movie["title"],
        overview=movie["overview"],
        poster_url=(
            f"{IMAGE_BASE_URL}{movie['poster_path']}"
            if movie.get("poster_path")
            else None
        ),
        backdrop_url=(
            f"{IMAGE_BASE_URL}{movie['backdrop_path']}"
            if movie.get("backdrop_path")
            else None
        ),
        release_date=movie.get("release_date"),
        runtime=movie.get("runtime"),
        rating=movie.get("vote_average", 0.0),
        tagline=movie.get("tagline"),
        status=movie.get("status"),
        genres=[
            GenreResponse(
                id=g["id"],
                name=g["name"],
            )
            for g in movie.get("genres", [])
        ],
    )


    async def get_similar_movies(self, movie_id: int,) -> MovieListResponse:
      response = await self.tmdb.get(
        f"/movie/{movie_id}/similar"
    )
      return self._format_movies(response)


    async def get_watch_providers(self, movie_id: int,) -> WatchProvidersResponse:

        response = await self.tmdb.get(
            f"/movie/{movie_id}/watch/providers"
    )

        india = response.get("results", {}).get("IN", {})

        def parse_providers(providers):
            return [
                WatchProviderResponse(
                    provider_id=p["provider_id"],
                    provider_name=p["provider_name"],
                    logo_url=(
                        f"{IMAGE_BASE_URL}{p['logo_path']}"
                        if p.get("logo_path")
                        else None
                    ),
                )
                for p in providers
            ]

        return WatchProvidersResponse(
            success=True,
            flatrate=parse_providers(india.get("flatrate", [])),
            rent=parse_providers(india.get("rent", [])),
            buy=parse_providers(india.get("buy", [])),
        )
    
    async def get_trailer(self, movie_id: int,) -> TrailerResponse:
        response = await self.tmdb.get(
            f"/movie/{movie_id}/videos"
        )

        youtube_key = None

        for video in response.get("results", []):

            if (
                video.get("site") == "YouTube"
                and video.get("type") == "Trailer"
            ):
                youtube_key = video["key"]
                break

        return TrailerResponse(
            success=True,
            youtube_key=youtube_key,
        )
    
    async def get_movie_cast(self, movie_id: int,) -> CastListResponse:
        response = await self.tmdb.get(
            f"/movie/{movie_id}/credits"
        )

        cast = []

        for actor in response.get("cast", [])[:20]:

            cast.append(
                CastResponse(
                    id=actor["id"],
                    name=actor["name"],
                    character=actor.get("character", ""),
                    profile_url=(
                        f"{IMAGE_BASE_URL}{actor['profile_path']}"
                        if actor.get("profile_path")
                        else None
                    ),
                )
            )

        return CastListResponse(
        success=True,
        data=cast,
        )
    
    async def get_movie_reviews(self, movie_id: int,) -> ReviewListResponse:

        response = await self.tmdb.get(
            f"/movie/{movie_id}/reviews"
        )

        reviews = []

        for review in response.get("results", []):

            reviews.append(
                ReviewResponse(
                    id=review["id"],
                    author=review["author"],
                    content=review["content"],
                    rating=(
                        review.get("author_details", {})
                        .get("rating")
                    ),
                    created_at=review["created_at"],
                )
            )

        return ReviewListResponse(
            success=True,
            data=reviews,
        )
    
    async def get_recommendations(self, movie_id: int,) -> MovieListResponse:

        response = await self.tmdb.get(
            f"/movie/{movie_id}/recommendations"
        )

        return self._format_movies(response)
    
    async def get_upcoming_movies(self,) -> MovieListResponse:

        response = await self.tmdb.get(
            "/movie/upcoming"
        )

        return self._format_movies(response)