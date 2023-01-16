# Escribe una función que pueda decirte si un año (número entero) es bisiesto o no.

año = int(input('Ingrese el año para descubrir sí es bisiesto: '))

def isLeapYear(año):
    global respuesta
    respuesta = ''
    if (año % 4) == 0:
        if (año % 100) != 0:
            respuesta = 'es bisiesto'
        else:
            respuesta = 'no es bisiesto'
    else:
        respuesta = 'no es bisiesto'
    
    return respuesta

isLeapYear(año)

print('el año', año, respuesta)

