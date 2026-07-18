from fastapi import FastAPI

from app.routers import api_router

from fastapi.middleware.cors import CORSMiddleware


app = FastAPI(
    title="FilmNest API",
    version="1.0.0",
    description="Backend API for FilmNest",
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "http://localhost:5174",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(api_router)


@app.get("/")
def root():
    return {
        "message": "Welcome to FilmNest API"
    }

