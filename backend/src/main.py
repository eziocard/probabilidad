from typing import Union
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from dataframe import *
app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Cambia esto a dominios específicos si es necesario
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/database")
def read_root():
    db = Database()
    view = db.get_database()
    
    return view


@app.get("/items/{item_id}")
def read_item(item_id: int, q: Union[str, None] = None):
    return {"item_id": item_id, "q": q}
