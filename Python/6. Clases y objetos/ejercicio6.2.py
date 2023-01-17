# Crear un programa que tenga una clase llamada Alumno que tenga como atributos su nombre y su nota. Deberéis de definir los métodos para inicializar sus atributos, imprimirlos y mostrar un mensaje con el resultado de la nota y si ha aprobado o no.

class Alumno:
    _nombre = None
    _nota = None

    def __init__(self, nombre, nota):
        self._nombre = nombre
        self._nota = nota
    
    def isApproved(self):
        if self._nota > 7:
            print('Ha aprobado con una nota de:', self._nota)
        else:
            print('Ha desaprobado con una nota de:', self._nota)

alumno1 = Alumno('Joaco', 9)
print('Nombre:', alumno1._nombre)
print('Nota:', alumno1._nota)
alumno1.isApproved()