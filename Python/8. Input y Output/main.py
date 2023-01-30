#Sobrecarga de métodos.
#__str__ es el método que se ejecuta cuando se utiliza str()
#Sobrecarga: uno puede implementar su propia versión de str, como si fuera una clase abstracta.


class Juguete:
    nombre = " "
    precio = 0.0

    def __init__(self, nombre, precio):
        self.nombre = nombre
        self.precio = precio
    
    def __str__(self):
        return f'Mi nombres es {self.nombre} y mi precio {self.precio}'

j1 = Juguete('Potato', 10.5)

#El print implicitamente hace str(j1)
print(j1)

# __str__: salidas informales
# __repr__: saludas tecnicas


import pprint
pprint.pprint(dir(''))

#--------------------------------------------------#

# Metodos de string

cadena = '            hola mucho gusto la verdad           '
print(cadena)
print(cadena.strip())
print(cadena.lstrip())
print(cadena.rstrip())

#split(): transforma una cadena a lista
#por default separa todas las palabras y las mete a una lista
print(cadena.split())