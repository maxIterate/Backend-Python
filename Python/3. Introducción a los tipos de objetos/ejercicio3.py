# Escribe un programa en la consola de python que pida al usuario su peso (en kg) y estatura (en metros), calcule el índice de masa corporal y lo almacene en una variable, e imprima por pantalla la frase Tu índice de masa corporal es donde es el índice de masa corporal calculado redondeado con dos decimales. 

peso = float(input('Ingrese su peso en kg: '))
estatura = float(input('Ingrese su estatura en metros: '))

imc = peso / estatura**2
imc = round(imc, 2)

print(f'Tu índice de masa corporal es {imc}IMC')