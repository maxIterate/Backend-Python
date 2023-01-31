
numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

# FILTER #
# Aplica una función a todos los elementos de una lista. Si devuelve True, filter guarda ese valor.

#La función siempre debe devolver True o False
def mi_funcion(x):
    if x % 2 == 0:
        return True


#                  acepta funcion lambda o funcion
resultado = filter(lambda x: x % 2 == 0, numeros)
print(list(resultado))

#----------------------------------------------------#

# MAP
# Aplica indiscriminadamente sobre cada elemento de la lista la función.

def cuadrado(x):
    return x * x

resultado2 = map(lambda x: x * x, numeros)

print(list(resultado2))

#----------------------------------------------------#

from functools import reduce

# REDUCE
# Ejecuta de forma recursiva una función sobre la lista, hasta que la lista se quede con un único elemento.

def suma(a, b):
    print(f'a={a}, b={b}')
    return a + b

resultado3 = reduce(suma, numeros)

print(resultado3)

#----------------------------------------------------#

# zip()
# Crea un objeto iterable, en el cual cada elemento es una dupla creada a partir de otros objetos iterables. Cuando usamos la función zip(), estamos uniendo uno o más iterables y cada unión de elementos resulta en una dupla.

# Si hay más elementos en una lista que en la otra, estos ultimos no se toman, ya que no pueden hacer par.


cursos = ['Java', 'Python', 'Git']
asistentes = [15, 20, 4]
demo = zip(cursos, asistentes)

print(list(demo))

#----------------------------------------------------#

# any: cualquiera que sea True, devuelve True.

listaA = [1 == 1, 2 == 2, 3 == 4]
res = any(listaA)
print(res)

# all: todas deben ser True para que devuelva True.
res2 = all(listaA)
print(res2)

# Sirven para atravesar una lista y verificar que se cumplan todas las condiciones o una de ellas.

#----------------------------------------------------#

# ROUND: redondea al valor más próximo

a = 5.5
b = 5.4
c = 5.6

print(round(a))
print(round(b))
print(round(c))

#----------------------------------------------------#

# MIN: devuelve el menor valor

print(min(23, 55, 77, 21, 19))

#----------------------------------------------------#

# POW: potencia de x

print(pow(2,10))

#----------------------------------------------------#

# SORTED: ordena lista alfabeticamente.

listaB = ['a', 'z', 'c', 'b', 'p']

print(sorted(listaB, reverse=True))

#----------------------------------------------------#

from getpass import getpass

user = input('username: ')
passwd = getpass('password: ')

print(user, passwd)