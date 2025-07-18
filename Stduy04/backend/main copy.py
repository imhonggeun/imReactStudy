from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()
    origins = [
    "http://localhost:5173",
    "http://127.0.0.1:5173",
]
    
@app.get("/")
def home():
    return {"status" : 1}