from fastapi import FastAPI
from src.server import router

tags_metadata = [
    {
        "name": "similar",
        "description": "Find similar drugs by name",
    },
]

app = FastAPI(openapi_tags=tags_metadata)


@app.get("/")
async def root():
    return {"message": "Movie Recommendation Engine API"}

app.include_router(router, prefix="/api")
