## Funciones

# Una función nos permite reutilizar código, y solo debe realizar una tarea en concreto.
# Las funciones en python deben ser cargadas por el interprete antes de ser utilizadas.
# Cuando una función se ejecuta, se detiene la ejecución del programa principal, ejecuta la función, retorna el resultado y continua el programa.

def mi_funcion():
    print("Nombre")

print('antes')
mi_funcion()
print('después')

# nombre es una variable de ámbito de función. Solo se podrá utilizar dentro de la función.
def miFuncion(nombre):
    print('Hola,', nombre)

miFuncion('Jorge')

#función suma
def sum(a, b):
    print(a + b)

sum(5, 5)

#funciones dentro de funciones

def matematicas(a, b):
    def sum(a, b):
        print(a + b)
    def sub(a, b):
        print(a - b)

    sum(a, b)
    sub(a, b)

matematicas(6, 2)


# Variable shadowing: se crea una variable local temporal en la función hasta que termina el bloque de código. Esto puede ser revertido aplicando "global" a la variable local.

temp = 12

def weather():
    global temp
    temp = 6
    print(temp, 'grados')

weather()

print(temp)

#---------------------------------------#

# Parámetros opcionales
# Si hay más de tres parámetros, solo el último puede ser opcional, o deben serlo todos.

def mi_nombre(nombre="Usuario"):
    print('Hola', nombre)

mi_nombre()
mi_nombre('Maxi')

#---------------------------------------#

# Parámetros variables

# Por convención se suele utilizar *args, convierte en una tupla.

def suma(*args):
    resultado = 0

    for arg in args:
        resultado += arg
    
    print(resultado)

suma(1, 2, 3, 4, 5, 6, 7, 8)

# **kwargs: convierte en un diccionario

def sum(**kwargs):
    if kwargs['color'] == 'rojo':
        print('Tu coche es rojo')

sum(coche='fiat', color='rojo')

print('------------------')
#---------------------------------------#

# Las funciones no deben tener print dentro
# Las funciones solo devuelven valores.

def operaciones(a, b):
    return a + b, a - b, a * b, a / b

su, resta, multi, divi = operaciones(2, 4)
print(su)
print(resta)
print(multi)
print(divi)

print('-------------------')
#---------------------------------------#

def sumador(**kwargs):
    inicial = kwargs['inicial'] if 'inicial' in kwargs else 0
    final = kwargs['final'] if 'final' in kwargs else inicial

    resultado = 0

    for x in range(inicial, final + 1):
        resultado += x
    
    return resultado

print(sumador(inicial=15))


#---------------------------------------#

# Función anonima = lambda

anonima = lambda nombre, apellido: print('hola', nombre, apellido)
anonima('bicho', 'saltamontes')