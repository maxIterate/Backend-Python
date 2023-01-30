# En este segundo ejercicio, tendréis que crear un archivo py y dentro crearéis una clase Vehículo, haréis un objeto de ella, lo guardaréis en un archivo y luego lo cargamos.

import pickle

class Vehiculo:
    marca = ''
    modelo = ''
    color = ''

    def __init__(self, marca, modelo, color):
        self.marca = marca
        self.modelo = modelo
        self.color = color

v1 = Vehiculo('Ford', 'V8', 'Rojo')

f = open('./8. Input y Output/Ejercicios/ejercicio2.bin', 'wb')
pickle.dump(v1, f)
f.close()

f = open('./8. Input y Output/Ejercicios/ejercicio2.bin', 'rb')
vehiculo = pickle.load(f)
f.close()

print(vehiculo)