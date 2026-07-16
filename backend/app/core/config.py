from pydantic_settings import BaseSettings, SettingsConfigDict
from pathlib import Path
from dotenv import load_dotenv

BASE_DIR = Path(__file__).resolve().parents[2] 
load_dotenv(BASE_DIR / ".env", override=True)

class Settings(BaseSettings):
    DATABASE_URL: str
    SECRET_KEY: str
    ALGORITHM: str = "HS256"
    ACCESS_TOKEN_EXPIRE_MINUTES: int = 60
    TMDB_API_TOKEN: str
    TMDB_BASE_URL: str
    model_config = SettingsConfigDict(env_file=".env",case_sensitive=True)
    GOOGLE_CLIENT_ID: str
settings = Settings()