from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
from app.core.database import get_db
from app.schemas.auth import (GoogleLogin, TokenResponse, UserLogin, UserSignup)
from app.services.auth_service import AuthService

router = APIRouter(prefix="/auth",tags=["Authentication"])

@router.post("/signup",status_code=status.HTTP_201_CREATED,)
def signup(user: UserSignup, db: Session = Depends(get_db),):
    try:
        auth_service = AuthService(db)
        created_user, token = auth_service.signup(user)
        return {"user": created_user,"token": token,}
    except ValueError as e:
        raise HTTPException(status_code=400,detail=str(e))


@router.post("/login",response_model=TokenResponse)
def login(credentials: UserLogin,db: Session = Depends(get_db)):
    try:
        auth_service = AuthService(db)
        return auth_service.login(credentials)
    except ValueError as e:
        raise HTTPException(status_code=401,detail=str(e))
    
@router.post("/google", response_model=TokenResponse,)
def google_login(google_data: GoogleLogin, db: Session = Depends(get_db)):
    try:
        auth_service = AuthService(db)
        return auth_service.google_login(google_data)

    except ValueError as e:
        raise HTTPException(status_code=401,detail=str(e))