from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from src.server import router

tags_metadata = [
    {
        "name": "similar",
        "description": "Find similar drugs by name",
    },
]

origins = [
    "http://localhost",
    "http://localhost:8080",
    "http://localhost:3000",
    "http://localhost:5173",
]

app = FastAPI(openapi_tags=tags_metadata)

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
async def root():
    return {"message": "Movie Recommendation Engine API"}

app.include_router(router, prefix="/api")
