from typing import List, Optional

from pydantic import BaseModel


class MoviePreferences(BaseModel):
    # Genres
    genres: List[str] = []
    exclude_genres: List[str] = []

    # Actors
    actors: List[str] = []
    actor_ids: List[int] = []

    # Directors
    directors: List[str] = []
    director_ids: List[int] = []

    # Keywords
    keywords: List[str] = []
    keyword_ids: List[int] = []

    # Mood
    mood: Optional[str] = None

    # Language
    language: Optional[str] = None

    # Release Years
    year_from: Optional[int] = None
    year_to: Optional[int] = None

    # Runtime
    runtime_min: Optional[int] = None
    runtime_max: Optional[int] = None

    # Rating
    min_rating: Optional[float] = None

    # Family Friendly
    family_friendly: Optional[bool] = None

    # Streaming
    streaming_provider: Optional[str] = None
    provider_ids: List[int] = []

    # NEW
    sort_by: Optional[str] = None
    sort_order: str = "desc"

    minimum_votes: int = 500

    include_adult: bool = False


class AIRecommendationRequest(BaseModel):
    prompt: str


class AIRecommendationResponse(BaseModel):
    success: bool
    data: list