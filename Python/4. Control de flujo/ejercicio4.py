# Escribe un programa que sea capaz de mostrar los números del 1 al 100 en orden inverso.

list = []

for x in range(1, 100+1):
    list.append(x)

print(sorted(list, reverse=True))