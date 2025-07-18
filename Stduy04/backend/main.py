from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

origins = [
    "http://localhost:5173",
    "http://127.0.0.1:5173",
]

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

arr = [1,2,3,4,5]

@app.get("/")
def home():
    return {"status" : 1}

@app.get("/list")
def list():    
    return {"result" : arr}

@app.get("/add")
def add(num : int):
    arr.append(num)
    return {"result" : arr}

@app.get("/remove")
def remove(index : int):
    # arr.remove(index + 1)
    del arr[index]
    return {"result" : arr}