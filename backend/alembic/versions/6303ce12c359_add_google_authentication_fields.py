"""Add Google authentication fields

Revision ID: 6303ce12c359
Revises: 6f93e75bb889
Create Date: 2026-07-16 21:21:28.591519
"""

from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa


# revision identifiers
revision: str = "6303ce12c359"
down_revision: Union[str, Sequence[str], None] = "6f93e75bb889"
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    # Existing users become "local" users
    op.add_column(
        "users",
        sa.Column(
            "provider",
            sa.String(length=20),
            nullable=False,
            server_default=sa.text("'local'"),
        ),
    )

    op.add_column(
        "users",
        sa.Column(
            "google_id",
            sa.String(length=255),
            nullable=True,
        ),
    )

    op.add_column(
        "users",
        sa.Column(
            "profile_picture",
            sa.String(length=500),
            nullable=True,
        ),
    )

    op.create_unique_constraint(
        "uq_users_google_id",
        "users",
        ["google_id"],
    )

    # Remove the database default for future inserts.
    # SQLAlchemy model's default="local" will handle it.
    op.alter_column(
        "users",
        "provider",
        server_default=None,
    )


def downgrade() -> None:
    op.drop_constraint(
        "uq_users_google_id",
        "users",
        type_="unique",
    )

    op.drop_column("users", "profile_picture")
    op.drop_column("users", "google_id")
    op.drop_column("users", "provider")
