from datetime import datetime

from pydantic import BaseModel


class NotificationResponse(BaseModel):
    type: str
    title: str
    message: str
    created_at: datetime