import pandas as pd


class Database:
    def __init__(self):
        self.df = pd.read_excel('database.xlsx')


    def get_database(self):
       view = self.df.head()
       return view


db = Database()
print(db.get_database())


