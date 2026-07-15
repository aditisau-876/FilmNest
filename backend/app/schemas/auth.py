from pydantic import BaseModel, EmailStr, Field, ConfigDict


class UserSignup(BaseModel):
    username: str = Field(
        ...,
        min_length=3,
        max_length=50,
        examples=["tiyasa"]
    )

    email: EmailStr = Field(
        ...,
        examples=["tiyasa@gmail.com"]
    )

    password: str = Field(
        ...,
        min_length=8,
        max_length=128,
        examples=["Password@123"]
    )


class UserLogin(BaseModel):
    email: EmailStr

    password: str


class TokenResponse(BaseModel):
    access_token: str
    token_type: str = "bearer"


class MessageResponse(BaseModel):
    message: str


class UserResponse(BaseModel):
    id: int
    username: str
    email: EmailStr
    is_active: bool

    model_config = ConfigDict(from_attributes=True)