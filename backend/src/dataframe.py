
import pandas as pd


class Database:
    def __init__(self):
        self.df = pd.read_excel('base_de_datos.xlsx')


    def get_database(self):
       return self.df.where(pd.notnull(self.df), None).to_dict(orient='records') 


