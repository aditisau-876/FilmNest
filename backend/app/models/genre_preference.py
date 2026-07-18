from datetime import datetime

from sqlalchemy import ForeignKey, UniqueConstraint
from sqlalchemy.orm import Mapped, mapped_column, relationship

from app.core.database import Base


class GenrePreference(Base):
    __tablename__ = "user_genre_preferences"

    __table_args__ = (
        UniqueConstraint(
            "user_id",
            "genre",
            name="uq_user_genre",
        ),
    )

    id: Mapped[int] = mapped_column(primary_key=True)

    user_id: Mapped[int] = mapped_column(
        ForeignKey("users.id", ondelete="CASCADE")
    )

    genre: Mapped[str]

    search_count: Mapped[int] = mapped_column(default=1)

    last_searched: Mapped[datetime] = mapped_column(
        default=datetime.utcnow
    )

    user = relationship(
        "User",
        back_populates="genre_preferences",
    )