from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import os
import mariadb



conn_params = {
    "user" : os.getenv('MARIADB_USER'),
    "password" : os.getenv('MARIADB_PASSWORD'),
    "host" : os.getenv('MARIADB_HOST'),
    "database" : os.getenv('MARIADB_DATABASE'),
    "port" : int(os.getenv('MARIADB_PORT'))
}



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
  return {
    "status": True
  }

@app.get("/data")
def data(table : str ):
  return {
    "status" : True,
    "result" : getData(table)
  }


def getData(table):
  try:
    conn = mariadb.connect(**conn_params)
    cur = conn.cursor()
    sql = f"SELECT * FROM {table}"
    cur.execute(sql)
    columns = [col[0] for col in cur.description]
    result = [dict(zip(columns, row)) for row in cur.fetchall()]
  except mariadb.Error as e:
    print(f"접속 오류 : {e}")
  return result

# def getData(table):
#   conn = mariadb.connect(**conn_params)
#   cur = conn.cursor()
#   sql ="select * from data1"
#   cur.execute(sql)
#   conn.commit()

#   cur.close()
#   conn.close()