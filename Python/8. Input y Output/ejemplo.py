# Input / Output

numero = 511
texto = 'quijote'
otromas = 1.2

print("El numero es %d y el texto es %s y tiene %f" % (numero, texto, otromas))

print('Valor float es: %.3f' % otromas)

print("El numero es {1} y el texto es {0} y tiene {2}"
.format(texto, numero, otromas))

print("El numero es {n} y el texto es {s} y tiene {f}"
.format(s=texto, n=numero, f=otromas))

def suma(a ,b):
    return a + b

txt = f"El numero es {suma(numero, numero)} y el texto es {texto.upper()} y tiene {otromas}"
print(txt)

#str() se utiliza para salidas a usuarios
#repr() utilizado para salidas de depuración y desarrollo

