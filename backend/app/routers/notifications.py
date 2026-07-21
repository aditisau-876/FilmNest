from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.core.database import get_db
from app.core.dependencies import get_current_user

from app.models.user import User

from app.schemas.notification import NotificationResponse

from app.services.notification_service import (
    NotificationService,
)

router = APIRouter(
    prefix="/notifications",
    tags=["Notifications"],
)


@router.get(
    "",
    response_model=list[NotificationResponse],
)
async def get_notifications(
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):

    service = NotificationService(db)

    return await service.get_notifications(
        current_user
    )