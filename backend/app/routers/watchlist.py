from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session

from app.core.database import get_db
from app.core.dependencies import get_current_user
from app.models.user import User
from app.schemas.watchlist import WatchlistCreate
from app.services.watchlist_service import WatchlistService

router = APIRouter(
    prefix="/watchlist",
    tags=["Watchlist"],
)


@router.post("/", status_code=status.HTTP_201_CREATED)
async def add_to_watchlist(
    watchlist_data: WatchlistCreate,
    current_user: User = Depends(get_current_user),
    db: Session = Depends(get_db),
):
    try:
        service = WatchlistService(db)
        return await service.add_movie(current_user, watchlist_data)

    except ValueError as e:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail=str(e),
        )


@router.get("/")
async def get_watchlist(
    current_user: User = Depends(get_current_user),
    db: Session = Depends(get_db),
):
    service = WatchlistService(db)
    return await service.get_watchlist(current_user)


@router.delete("/{movie_id}")
async def remove_from_watchlist(
    movie_id: int,
    current_user: User = Depends(get_current_user),
    db: Session = Depends(get_db),
):
    try:
        service = WatchlistService(db)
        return await service.remove_movie(
            current_user,
            movie_id,
        )

    except ValueError as e:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail=str(e),
        )