
import pandas as pd


class Database:
    def __init__(self):
        self.df = pd.read_excel('base_de_datos.xlsx')


    def get_database(self):
       return self.df.where(pd.notnull(self.df), None).to_dict(orient='records')
    def get_values_columns(self,name):
        valores = self.df[name].value_counts()
        return valores


hola = Database()
name = 'Estatus del cliente'
print(hola.get_values_columns(name))
name = 'Categoría Artículo'
print(hola.get_values_columns(name))
