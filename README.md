# Drug Recommendation System

## Overview

This repository contains the code for a Drug Recommendation System. This system aims to provide personalized drug recommendations based on patient data and disease information. It leverages machine learning techniques to analyze complex datasets and suggest appropriate medications.

## Features

- Quick and fast results with similarity score for easier understanding.
- Disease-Specific Recommendations: Considers the specific disease and its characteristics when generating recommendations.
- No training required since any new entry into the database is ready for use directly.
- Easy to understand and use UI.

## Setup

Before proceeding with the setup, please look at the `.env.example` file and create another `.env` file at the root of the system. To get started with Neo4J, one can use [Neo4J AuraDB](https://neo4j.com/product/auradb/) for quick and easy deployment.

After creating the `.env` file, run the following steps -

### (Sample Data)

No extra steps required to use sample data.

### (Custom data set)

Replace `file_location` in `data_entry/main.py:10` with the path of the csv file and ensure the csv structure remains the same as `data_entry/data.csv`.

```
pip install -r requirements.txt
python3 /data_entry/main.py
```

### Start server

Once ingestion is completed, run the server using the following command -

```
fastapi run main.py
```

### Start client

Once the server is up and running, run this command to start the UI -

```
yarn
cd client
yarn start dev
```
