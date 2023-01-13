# if condicion:
#     accion

# Para acceder a una acción a través de una condición, se realiza un test de veracidad, donde;
# True : verdadero
# False : falso

a = 5
b = 6

# Operadores condicionales:

# > Mayor
# >= Mayor o igual
# == Exactamente igual
# <= Menor o igual
# < Menor

resultado = (a > 5 and b < 7)
# resultado = (False and False)
# resultado = False
# print(resultado)

# Tablas de la verdad:
#
# AND -> True, False
# print('t y t = ', True and True)
# print('t y t = ', True and False)
# print('t y t = ', False and True)
# print('t y t = ', False and False)
#
# XOR -> True, False
# print('t y t = ', True ^ True)
# print('t y t = ', True ^ False)
# print('t y t = ', False ^ True)
# print('t y t = ', False ^ False)
#
#---------------------------------------------------------#

#
#if condición:
#   acciones en if 1
#   acciones en if 2
#acciones fuera del if

#---------------------------------------------------------#

contador = 0
while contador <= 10:
    print(f'Contador:{contador}')
    contador+=1

# Lo que ocurre dentro del bucle es una iteración, cuando itera se vuelve a probar la condición, si es False seguirá iterando hasta que sea True.

# break, rompe el bucle padre
# continue, fuerza la siguiente iteración
# 
#---------------------------------------------------------#

lista = [1, 2, 3, 4, 5]
tupla = [6, 7, 8, 9, 10]

for valor in tupla:
    print(valor)

for numero in range(1, 20+1):
    print(numero)

# Iterar posiciones de lista sin conocer su cantidad de items:
list = [123, 3425, 346, 74567, 5756, 7567]

for num in range(len(list)):
    print(num)


#Utilizar break para que no ocurran errores logicos.

lista = ["hola", "adios", "hola", "hola", "hola", "hola", "hola", "hola", "hola", "hola"]

for saludo in lista:

    print(f'Palabra actual: {saludo}')

    if saludo == 'adios':
        print(f'Se encontró: {saludo}')
        break

#otra forma de hacerlo:

if 'adios' in lista:
    print('Se encontró la palabra: adios')

#----------------------------------------------#

# Ordenar una lista

# list_num = [1, 3, 8, 4, 12, 11, 9, 2, 19]
# print(list_num)

# ordered_list = sorted(list_num)
# print(ordered_list)

# reversed_list = sorted(list_num, reverse=True)
# print(reversed_list)

#----------------------------------------------#

# Switch en Python: (Solo en la versión 3.10^)

# Switch es una conveniencia para comparar un determinado valor y actuar en consecuencia.

valor = 5

# Switch en Python 3.9 para abajo
# if valor == 1:
#     print('val: 1')
# elif valor == 2:
#     print('val: 2')
# elif valor == 3:
#     print('val: 3')
# elif valor == 4:
#     print('val: 4')
# elif valor == 5:
#     print('val: 5')

# Switch en Python 3.10:

match valor:
    case 1:
        print('val: 1')
    case 2:
        print('val: 2')
    case 3:
        print('val: 3')
    case 4:
        print('val: 4')
    case 5:
        print('val: 5')

#----------------------------------------------#

# Cómo utilizar else


# El else del for se ejecuta siempre y cuando el for no se haya roto.

lista = ["hola", "mensaje", "adios"]

for palabra in lista:
    if palabra == "":
        print("Encuentro la palabra mensaje")
        break
else:
    print("No encuentro nada")

#Cuando no ocurre ningún break en la iteración, se ejecuta el else.

#----------------------------------------------#

# Ambito global y ambito de bucle

#----------------------------------------------#

#pass

listum = [1, 2, 3, 4, 5]

for x in listum:
    pass

# Utilizado para declarar un bucle pero no usarlo aún, o para que pase directamente del la acción a realizar.

