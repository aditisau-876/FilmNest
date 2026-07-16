from pydantic import BaseModel


class Movie(BaseModel):
    id: int
    title: str
    overview: str
    poster_path: str | None = None
    backdrop_path: str | None = None
    release_date: str | None = None
    vote_average: float