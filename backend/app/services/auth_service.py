from sqlalchemy.orm import Session
from app.core.config import settings
from app.core.security import (create_access_token, hash_password, verify_password)
from app.models.user import User
from app.schemas.auth import (GoogleLogin, TokenResponse, UserLogin, UserSignup)
from app.schemas.user import UserResponse
import requests

class AuthService:
    def __init__(self, db: Session):
        self.db = db

    def signup(self, user_data: UserSignup) -> tuple[UserResponse, TokenResponse]:
        existing_user = (
            self.db.query(User)
            .filter(User.email == user_data.email)
            .first()
        )

        if existing_user:
            raise ValueError("Email already registered")

        hashed_password = hash_password(user_data.password)
        user = User(username=user_data.username, email=user_data.email, hashed_password=hashed_password,)
        self.db.add(user)
        self.db.commit()
        self.db.refresh(user)
        token = create_access_token(subject=user.email)

        return (
            UserResponse.model_validate(user),
            TokenResponse(access_token=token),)

    def login(self, credentials: UserLogin) -> TokenResponse:

        user = (
            self.db.query(User)
            .filter(User.email == credentials.email)
            .first()
        )

        if user is None:
            raise ValueError("Invalid email or password")

        if not verify_password(credentials.password, user.hashed_password):
            raise ValueError("Invalid email or password")

        if not user.is_active:
            raise ValueError("Your account has been deactivated")

        token = create_access_token(subject=user.email)

        return TokenResponse(access_token=token)
    
    def google_login(self,google_data: GoogleLogin) -> TokenResponse:

        response = requests.get("https://www.googleapis.com/oauth2/v3/userinfo",headers={"Authorization":f"Bearer {google_data.access_token}"})

        if response.status_code != 200:
            raise ValueError("Invalid Google token")

        id_info = response.json()
        email = id_info["email"]
        username = id_info.get("name",email.split("@")[0])
        google_id = id_info["sub"]
        picture = id_info.get("picture")
        user = (
            self.db.query(User)
            .filter(User.email == email)
            .first()
        )
        if user is None:
            user = User(username=username, email=email, hashed_password="", provider="GOOGLE", google_id=google_id, profile_picture=picture,)
            self.db.add(user)
            self.db.commit()
            self.db.refresh(user)

        if not user.is_active:
            raise ValueError("Your account has been deactivated")

        token = create_access_token(subject=user.email)
        return TokenResponse(access_token=token)