## Abrir y modificar ficheros

# r: read
# a: append
# w: write
# x: create

# t: text
# b: binary

# +

f = open('C:/Users/Trabajo/Documents/file.txt', 'r')

#leer un archivo
datoss = f.read()
#leer por lineas
datos_linea = f.readlines()

f.close()

print(datoss)
print(datos_linea)
