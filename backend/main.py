from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

origins = [
    "http://localhost:5173",
    "http://127.0.0.1:5173",
    "http://127.0.0.1:8000",
    "http://localhost:8000"
]

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def home():
  return {"status": True}

@app.get("/data1")
def data1():
  return {
    "status" : True,
    "result" : [
      {"num": 1, "name": "테스트1"},
      {"num": 2, "name": "테스트2"},
      {"num": 3, "name": "테스트3"}
    ]
  }