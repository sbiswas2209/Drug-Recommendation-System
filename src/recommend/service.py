from neo4j import GraphDatabase
from utils.constants import uri, username, password


async def getMedicineByNameService(medicineName: str):
    driver = GraphDatabase.driver(uri, auth=(username, password))

    def getMedicineByName(tx, medicineName):
        results = []
        res = tx.run(
            '''MATCH (d:Drug) 
            WHERE toLower(d.name)=toLower($name)
            MATCH (d)-[r:TREATS]->(m:MedicalCondition)<-[r1:TREATS]-(drug:Drug)
            WHERE d <> drug
            WITH d, m, drug, [x IN d.drugClasses WHERE x IN drug.drugClasses] AS commonClasses
            RETURN d as searchQuery, drug as result, m.name as medicalCondition
            ORDER BY SIZE(commonClasses) DESC''',
            name=medicineName,
        )
        return res.to_df()

    with driver.session() as session:
        try:
            result = session.execute_write(getMedicineByName, medicineName)
        except Exception as e:
            print(f"An unhandled exception occurred: {e}")

    driver.close()
    return (result["searchQuery"][0], list(result["result"]), result["medicalCondition"][0])
