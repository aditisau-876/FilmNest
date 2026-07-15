from sqlalchemy.orm import Session

from app.core.security import (
    create_access_token,
    hash_password,
    verify_password,
)
from app.models.user import User
from app.repositories.user_repository import UserRepository
from app.schemas.auth import (
    TokenResponse,
    UserLogin,
    UserResponse,
    UserSignup,
)


class AuthService:
    def __init__(self, db: Session):
        self.user_repository = UserRepository(db)

    def signup(
        self,
        user_data: UserSignup,
    ) -> tuple[UserResponse, TokenResponse]:

        existing_user = self.user_repository.get_by_email(
            user_data.email
        )

        if existing_user:
            raise ValueError("Email already registered")

        hashed_password = hash_password(
            user_data.password
        )

        user = self.user_repository.create_user(
            username=user_data.username,
            email=user_data.email,
            hashed_password=hashed_password,
        )

        token = create_access_token(
            subject=user.email
        )

        return (
            UserResponse.model_validate(user),
            TokenResponse(
                access_token=token
            ),
        )

    def login(
        self,
        credentials: UserLogin,
    ) -> TokenResponse:

        user = self.user_repository.get_by_email(
            credentials.email
        )

        if user is None:
            raise ValueError("Invalid email or password")

        if not verify_password(
            credentials.password,
            user.hashed_password,
        ):
            raise ValueError("Invalid email or password")

        return TokenResponse(
            access_token=create_access_token(
                subject=user.email
            )
        )