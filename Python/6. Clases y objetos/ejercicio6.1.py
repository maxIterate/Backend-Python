# En este ejercicio vais a crear la clase Vehículo la cual tendrá los siguientes atributos:
# Color
# Ruedas
# Puertas

# Por otro lado crearéis la clase Coche la cual heredará de Vehículo y tendrá los siguientes atributos:
# Velocidad
# Cilindrada

# Por último, tendrás que crear un objeto de la clase Coche y mostrarlo por consola.


class vehiculo:
    
    color = ""
    
    ruedas = 0

    puertas = 0

class coche(vehiculo):

    velocidad = 0
    
    cilindrada = 0


class fiat(coche):
    coche.color = "rojo"
    coche.ruedas = 4
    coche.puertas = 4
    coche.velocidad = "180mph"
    coche.cilindrada = 8

f = fiat

print('Color del coche:', f.color)
print('Cantidad de ruedas:', f.ruedas)
print('Cantidad de puertas:', f.puertas)
print('Velocidad maxima:', f.velocidad)
print('Cilindrada:', f.cilindrada)