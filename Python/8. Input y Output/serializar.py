import pickle

class Juguete:
    nombre = ''
    precio = 0.0

    def __init__(self, nombre, precio):
        self.nombre = nombre
        self.precio = precio

    def getNombre(self):
        return self.nombre
    
j1 = Juguete('Papa', 10.5)
f = open('./8. Input y Output/datos.bin', 'wb')
pickle.dump(j1, f)
f.close()

f = open('./8. Input y Output/datos.bin', 'rb')
papa = pickle.load(f)
f.close()

print(type(papa))
print(papa.getNombre(), 'precio:', papa.precio)

#--------------------------------------------------#

class Estado:
    def Player():
        pass
    def Status():
        pass

    player = Player()
    status = Status()
    life_remaining = 100
    armor = False

e = Estado()
f = open('./8. Input y Output/gamestatus.dat', 'wb')
pickle.dump(e, f)
f.close()

f = open('./8. Input y Output/gamestatus.dat', 'rb')
pickle.load(f)
f.close()
print(e)