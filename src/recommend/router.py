from fastapi import APIRouter

from src.recommend.service import getMedicineByNameService

router = APIRouter()


@router.get("/")
async def root():
    return {"message": "Get all recommendations"}


@router.get("/similar", tags=["similar"])
async def findSimilarByName(name: str):
    try:
        result = await getMedicineByNameService(name)
        return {"message": name, "searchedDrug": result[0], "similarDrugs": result[1], "medicalCondition": result[2]}
    except:
        return {"message": "An unhandled exception occurred"}
