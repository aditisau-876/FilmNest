from typing import List

from pydantic import BaseModel


class GenreResponse(BaseModel):
    id: int
    name: str

class MovieCardResponse(BaseModel):
    id: int
    title: str
    overview: str
    poster_url: str | None = None
    backdrop_url: str | None = None
    release_date: str | None = None
    rating: float


class MovieListResponse(BaseModel):
    success: bool
    data: List[MovieCardResponse]





class MovieDetailResponse(BaseModel):
    id: int
    title: str
    overview: str
    poster_url: str | None = None
    backdrop_url: str | None = None

    release_date: str | None = None
    runtime: int | None = None
    rating: float

    tagline: str | None = None
    status: str | None = None

    genres: List[GenreResponse]

class WatchProviderResponse(BaseModel):
    provider_id: int
    provider_name: str
    logo_url: str | None = None


class WatchProvidersResponse(BaseModel):
    success: bool
    flatrate: list[WatchProviderResponse] = []
    rent: list[WatchProviderResponse] = []
    buy: list[WatchProviderResponse] = []


class TrailerResponse(BaseModel):
    success: bool
    youtube_key: str | None = None    


class CastResponse(BaseModel):
    id: int
    name: str
    character: str
    profile_url: str | None = None


class CastListResponse(BaseModel):
    success: bool
    data: list[CastResponse]

class ReviewResponse(BaseModel):
    id: str
    author: str
    content: str
    rating: float | None = None
    created_at: str


class ReviewListResponse(BaseModel):
    success: bool
    data: list[ReviewResponse]