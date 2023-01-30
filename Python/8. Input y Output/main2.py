def main():
    usuarios = listarUsuarios()
    print(usuarios)

def listarUsuarios():
    f = open('/etc/passwd/', 'r')
    datos = f.readlines()
    f.close()

    resultado = []
    for linea in datos:
        if linea[0] == '#':
            continue

        if linea[0] == '-':
            continue

        partes = linea.split(':')
        resultado.append(partes[0])
    
    return resultado

if __name__ == '__main__':
    main()