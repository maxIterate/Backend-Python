# Clases y objetos

# Relacionado con el paradigma de programación OOP.

# Cuando una variable de clase tiene un underscore "_" no se debe utilizar la variable desde afuera.

class Dino:
    _encendido = True

    # Para referirme a una variable de clase dentro de una función es necesario utilizar el "self".
    #Esto se debe a que cuando queremos manipular una variable dentro de una función está la declara en ámbito local. Se utiliza "self" para indicar que es una variable de la clase.
    def enciende(self):
        self._encendido = True
    def apaga(self):
        self._encendido = False
    def isEncendido(self):
        return self._encendido

# Cada vez que se crea una instancia, se reserva un espacio de memoria único para cada una, es así que nunca van a estar relacionada uno con la otra, d1 es distinto de d2.
d1 = Dino()
d1.apaga()
print(d1.isEncendido())

d2 = Dino()
d2.enciende()
print(d2.isEncendido())

print(d1.isEncendido())

#----------------------------------------------------------#

# Clase estatica: comparten el espacio de memoria, es un único espacio de memoria para todos. Pueden ser utilizadas como placeholder de opciones o numeradores.

class Estatica:
    numero = 1

    def incrementa():
        Estatica.numero+=1

Estatica.incrementa()
print(Estatica.numero)

print('---------------------------------------')
#---------------------------------------------------------#

# Herencia

# Una clase hereda las propiedades y los métodos de otra clase y los puede utilizar.

# Clase base: aquella clase de la que se hereda.

class Juguete:
    _encendido = False

    def encender(self):
        self._encendido = True
    
    def apagar(self):
        self._encendido = False

    def isEncendido(self):
        return self._encendido


class Dino(Juguete):
    SonidoDino = False

    def Roar(self):
        self.SonidoDino = True
    
    def close(self):
        self.SonidoDino = False

d = Dino()
d.encender()
print(d.isEncendido())

# Devuelve una lista de funciones y metodos de la clase
print(dir(d))

print('---------------------------------------')
#---------------------------------------------------------#

# Una clase de construye cuando la instanciamos

# Constructor: para tener la clase en un estado predeterminado.


class Dino(Juguete):
    color = None
    nombre = None

    def __init__(self, nombre):
        self.color = 'Verde'
        self.nombre = nombre
    
    def verEscamas(self):
        pass

p = Dino('masi') #<-- parámetros que se van a implementar en el constructor

print(p.color)
print(p.nombre)


print('---------------------------------------')
#---------------------------------------------------------#

# Destructores

class Dino(Juguete):
    color = None
    nombre = None

    def __init__(self, nombre):
        self.color = 'Verde'
        self.nombre = nombre
    
    # def __del__(self):
    #     print("Estoy en el destructor", self.__class__)

    def verEscamas(self):
        pass

p = Dino('masi') #<-- parámetros que se van a implementar en el constructor
# del(p)
# print(p.color)
# print(p.nombre)

print('---------------------------------------')
#---------------------------------------------------------#

# Las clases en Python no existen realmente, son diccionarios
print('---------------------------------------')
#---------------------------------------------------------#

# Clases abstractas: las clases abstractas no se pueden instanciar. Para instanciar debemos derivarla.
# Una clase abstracta sirve para definir un conjunto común de funciones, a otras clases.
# Las clases abstractas contienen implementaciones parciales de una funcionalidad dejando al programador implementar la funcionalidad concreta.


from abc import ABC, abstractmethod

class animal(ABC):

    #Solo se vuelve abstracto si tiene la etiqueta encima
    # Implementación concreta
    @abstractmethod
    def sonido(self):
        pass

    # Implementación parcial
    def saludo(self):
        pass

class perro(animal):
    def sonido(self):
        print('guau')

class gato(animal):
    def sonido(self):
        print('miau')


p = perro()
p.sonido()

g = gato()
g.sonido()

print('---------------------------------------')
#---------------------------------------------------------#

# Relaciones HIS-A (Herencia)

# Relaciones HAS-A (Contiene): Composición. La composición dice que una clase está compuesta u/de otras clases.



class motor:
    tipo = 'Diesel'

class ventanas:
    cantidad = 5

class ruedas:
    ruedas = 4

class carroceria:
    ventanas = ventanas()
    ruedas = ruedas()

class coche:
    motor = motor()
    carroceria = carroceria()


c = coche()
print('Motor es', c.motor.tipo)
print('Ventanas:', c.carroceria.ventanas.cantidad)

# La diferencia:

# Relación de herencia, hereda.
class Base:
    pass

class Hija(Base):
    pass

# Relación de composición, contiene.
class Base:
    pass

class Hija:
    b = Base()
    pass