from fastapi import APIRouter
from src.recommend.router import router as recommendRouter
router = APIRouter()


@router.get("/")
async def root():
    return {"message": "API Route"}

router.include_router(recommendRouter, prefix="/recommend", tags=["Recommend"])
