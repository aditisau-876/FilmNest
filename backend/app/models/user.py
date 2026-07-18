from __future__ import annotations
from datetime import datetime
from sqlalchemy import Boolean, DateTime, String, func
from sqlalchemy.orm import Mapped, mapped_column
from app.core.database import Base
from sqlalchemy.orm import relationship
from typing import TYPE_CHECKING

if TYPE_CHECKING:
    from app.models.watchlist import Watchlist
    
if TYPE_CHECKING:
    from app.models.genre_preference import GenrePreference

class User(Base):
    __tablename__ = "users"

    id: Mapped[int] = mapped_column(primary_key=True)
    username: Mapped[str] = mapped_column(String(50), nullable=False)
    email: Mapped[str] = mapped_column(String(255), unique=True, nullable=False, index=True,)
    hashed_password: Mapped[str] = mapped_column(String(255),nullable=False, default="")
    provider: Mapped[str] = mapped_column(String(20), default="LOCAL", nullable=False)
    google_id: Mapped[str | None] = mapped_column(String(255), unique=True, nullable=True)
    profile_picture: Mapped[str | None] = mapped_column(String(500), nullable=True,)
    is_active: Mapped[bool] = mapped_column(Boolean, default=True, nullable=False,)
    created_at: Mapped[datetime] = mapped_column(DateTime(timezone=True), server_default=func.now(), nullable=False,)
    updated_at: Mapped[datetime] = mapped_column(DateTime(timezone=True), server_default=func.now(), onupdate=func.now(), nullable=False,)




    watchlist: Mapped[list["Watchlist"]] = relationship(
        back_populates="user",
        cascade="all, delete-orphan",
    )


    genre_preferences: Mapped[list["GenrePreference"]] = relationship(
        "GenrePreference",
        back_populates="user",
        cascade="all, delete-orphan",
    )

    watch_history = relationship(
        "WatchHistory",
        back_populates="user",
        cascade="all, delete-orphan",
    )