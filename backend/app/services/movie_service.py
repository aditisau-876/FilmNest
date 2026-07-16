from app.clients.tmdb_client import TMDBClient


class MovieService:
    def __init__(self):
        self.tmdb = TMDBClient()

    async def get_trending_movies(self):
        return await self.tmdb.get(
            "/trending/movie/week"
        )

    async def get_now_playing(self):
        return await self.tmdb.get(
            "/movie/now_playing"
        )

    async def get_top_rated(self):
        return await self.tmdb.get(
            "/movie/top_rated"
        )