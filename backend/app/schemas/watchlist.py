from datetime import datetime

from pydantic import BaseModel, ConfigDict


class WatchlistCreate(BaseModel):
    movie_id: int


class WatchlistItem(BaseModel):
    movie_id: int
    added_at: datetime

    model_config = ConfigDict(from_attributes=True)