a = 5
print(id(a))

a = 6
print(id(a))

# Las variables de python son una referencia de memoria donde hay un valor exacto. Es por esto que las variables a pesar de no usarse, siempre estará disponible su referencia.
# Esto significa que los valores en Python son inmutables.

# En python existen 3 tipos de datos inmutales:
#   - Los enteros (int) [Sí cambio el número cambia la referencia de memoria]
#   - Las cadenas de texto (string) [Los string no soportan asignación]
#   - Las tuplas (tuples) [No soporta asignación]

#-------------------------------------------------------------#

# Diferencia entre tupla y lista:
#   - Una tupla es inmutable, no se puede alterar
#       > tuple()
#       > tupla = ()
#   - Una lista es mutable, se puede alterar
#       > list()
#       > lista = []

#-------------------------------------------------------------#

# Diccionario:

# diccionario = {"clave":"valor","clave":"valor"}

diccionario = {
    "clave1": 33,
    "clave2": 99,
    "clave3": 120,
    "clave4": 999
}
print(diccionario)

# .pop(): Elimina el último valor por defecto sí no se especifica la clave a borrar. También devuelve el valor que se borró
elemento_borrado = diccionario.pop("clave1")
print(diccionario)
print(elemento_borrado)

# del(): Elimina, pero no devuelve el valor
del(diccionario["clave2"])
print(diccionario)

#-------------------------------------------------------------#

## Set/Conjunto

# En un conjunto no se pueden duplicar los items

conjunto = {1, 2, 3, 1, 2, 3}

a = {1, 4, 9, 10, 2}
b = {2, 4, 9, 11, 3}

# unión
print(a | b)

# intersección
print(a & b)

# diferencia
print(a - b)

# diferencia simetrica
print(a ^ b)

#-------------------------------------------------------------#

# Métodos de string:

string = "hola, mucho gusto"

#.capitalize()
print(string.capitalize())

#.title()
print(string.title())

#.lower()
print(string.lower())

#.upper()
print(string.upper())

#.replace()
print(string.replace('o', 'u'))

#.find()
print(string.find('mucho'))

#.split()
print(string.split())
print('='.join(string))