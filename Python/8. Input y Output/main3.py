lista = [
    'linea uno',
    'linea dos',
    'linea tres',
]

def escribe(fichero, datos):
    f = open(fichero, 'w')

    for linea in datos:
        if not linea.endswith('\n'):
            linea += '\n'
        f.write(linea)

    f.close()

escribe('./8. Input y Output/mifichero.txt', lista)


# f.writelines(lista)