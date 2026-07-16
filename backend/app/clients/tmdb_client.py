from typing import Any

import httpx
from fastapi import HTTPException

from app.core.config import settings


class TMDBClient:
    def __init__(self):
        self.base_url = settings.TMDB_BASE_URL
        self.headers = {
            "Authorization": f"Bearer {settings.TMDB_API_TOKEN}",
            "accept": "application/json",
        }
        self.timeout = httpx.Timeout(10.0)

    async def get(
        self,
        endpoint: str,
        params: dict[str, Any] | None = None,
    ) -> dict:

        url = f"{self.base_url}{endpoint}"

        try:
            async with httpx.AsyncClient(
                timeout=self.timeout,
                headers=self.headers,
            ) as client:

                response = await client.get(
                    url,
                    params=params,
                )

                response.raise_for_status()

                return response.json()

        except httpx.ConnectTimeout:
            raise HTTPException(
                status_code=503,
                detail="Unable to connect to TMDB. Check your internet connection or network.",
            )

        except httpx.HTTPStatusError as e:
            raise HTTPException(
                status_code=e.response.status_code,
                detail=e.response.text,
            )

        except httpx.RequestError as e:
            raise HTTPException(
                status_code=503,
                detail=f"TMDB request failed: {str(e)}",
            )