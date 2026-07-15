from sqlalchemy.orm import Session

from app.models.user import User


class UserRepository:
    def __init__(self, db: Session):
        self.db = db

    def get_by_email(self, email: str) -> User | None:
        """Return a user by email."""
        return (
            self.db.query(User)
            .filter(User.email == email)
            .first()
        )

    def get_by_id(self, user_id: int) -> User | None:
        """Return a user by ID."""
        return (
            self.db.query(User)
            .filter(User.id == user_id)
            .first()
        )

    def create_user(
        self,
        username: str,
        email: str,
        hashed_password: str,
    ) -> User:
        """Create a new user."""
        user = User(
            username=username,
            email=email,
            hashed_password=hashed_password,
        )

        self.db.add(user)
        self.db.commit()
        self.db.refresh(user)

        return user