from sqlalchemy import Column, Integer, ForeignKey, DateTime
from sqlalchemy.sql import func

from app.core.database import Base


class RecentlyViewed(Base):
    __tablename__ = "recently_viewed"

    id = Column(Integer, primary_key=True, index=True)

    user_id = Column(
        Integer,
        ForeignKey("users.id", ondelete="CASCADE")
    )

    movie_id = Column(Integer)

    viewed_at = Column(
        DateTime(timezone=True),
        server_default=func.now()
    )