from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.core.database import get_db
from app.core.dependencies import get_current_user
from app.models.user import User
from app.schemas.ai import AIRecommendationRequest
from app.services.ai_service import AIService


router = APIRouter(
    prefix="/ai",
    tags=["AI"],
)


@router.post("/recommend")
async def recommend_movies(
    request: AIRecommendationRequest,
    current_user: User = Depends(get_current_user),
    db: Session = Depends(get_db),
):
    ai_service = AIService(db)

    movies = await ai_service.recommend_movies(
        request.prompt,
        current_user,
    )

    return movies