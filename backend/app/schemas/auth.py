from pydantic import BaseModel, ConfigDict, EmailStr, Field

class UserSignup(BaseModel):
    username: str = Field(min_length=3, max_length=50, description="Unique username",)

    email: EmailStr
    password: str = Field(min_length=8, max_length=128, description="User password")
    model_config = ConfigDict(
        json_schema_extra={
            "example": {"username": "aditi","email": "aditi@example.com","password": "Password@123",}
        }
    )

class UserLogin(BaseModel):
    email: EmailStr
    password: str
    model_config = ConfigDict(
        json_schema_extra={
            "example": {"email": "aditi@example.com","password": "Password@123",}
        }
    )

class TokenResponse(BaseModel):
    access_token: str
    token_type: str = "Bearer"

    model_config = ConfigDict(
        json_schema_extra={
            "example": {"access_token": "<jwt_token>", "token_type": "Bearer",}
        }
    )

class MessageResponse(BaseModel):
    message: str

class GoogleLogin(BaseModel):
    access_token: str