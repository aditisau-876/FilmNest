from app.clients.tmdb_client import TMDBClient
from app.schemas.ai import MoviePreferences


class EntityResolver:
    def __init__(self):
        self.tmdb = TMDBClient()

    async def _search_person(self, name: str) -> int | None:
        """
        Search a person (actor/director) on TMDB and return their ID.
        """
        response = await self.tmdb.get(
            "/search/person",
            params={"query": name},
        )

        if response.get("results"):
            return response["results"][0]["id"]

        return None

    async def _search_keyword(self, keyword: str) -> int | None:
        """
        Search a keyword on TMDB and return its ID.
        """
        response = await self.tmdb.get(
            "/search/keyword",
            params={"query": keyword},
        )

        if response.get("results"):
            return response["results"][0]["id"]

        return None

    async def _search_provider(self, provider_name: str) -> int | None:
        """
        Search streaming providers (Netflix, Prime, etc.)
        """

        response = await self.tmdb.get(
            "/watch/providers/movie",
            params={"watch_region": "IN"},
        )

        for provider in response.get("results", []):

            if (
                provider["provider_name"].lower()
                == provider_name.lower()
            ):
                return provider["provider_id"]

        return None

    async def resolve(
        self,
        preferences: MoviePreferences,
    ) -> MoviePreferences:

        # -----------------------------
        # Resolve actors
        # -----------------------------
        for actor in preferences.actors:

            actor_id = await self._search_person(actor)

            if actor_id:
                preferences.actor_ids.append(actor_id)

        # -----------------------------
        # Resolve directors
        # -----------------------------
        for director in preferences.directors:

            director_id = await self._search_person(director)

            if director_id:
                preferences.director_ids.append(director_id)

        # -----------------------------
        # Resolve keywords
        # -----------------------------
        for keyword in preferences.keywords:

            keyword_id = await self._search_keyword(keyword)

            if keyword_id:
                preferences.keyword_ids.append(keyword_id)

        # -----------------------------
        # Resolve streaming provider
        # -----------------------------
        if preferences.streaming_provider:

            provider_id = await self._search_provider(
                preferences.streaming_provider
            )

            if provider_id:
                preferences.provider_ids.append(provider_id)

        return preferences


entity_resolver = EntityResolver()