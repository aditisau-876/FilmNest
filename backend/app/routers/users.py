from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app.core.database import get_db
from app.core.dependencies import get_current_user
from app.models.user import User
from app.services.user_service import UserService
from app.services.recent_service import get_last_recent_movie
router = APIRouter(prefix="/users",tags=["Users"],)


@router.get("/me")
def get_profile(current_user: User = Depends(get_current_user),db: Session = Depends(get_db),):
    service = UserService(db)
    return service.get_profile(current_user)

@router.get("/watch-history")
async def get_watch_history(db: Session = Depends(get_db),current_user: User = Depends(get_current_user),):
    service = UserService(db)
    return await service.get_watch_history(current_user)


@router.get("/recent-activity")
async def recent_activity(db: Session = Depends(get_db),current_user: User = Depends(get_current_user),):
    service = UserService(db)
    return await service.get_recent_activity(current_user)

@router.get("/recommendation-base")
async def recommendation_base(current_user: User = Depends(get_current_user),db: Session = Depends(get_db),):

    recent = get_last_recent_movie(db, current_user.id,)
    if recent:
        return {"movie_id": recent.movie_id}
    return {"movie_id": None}