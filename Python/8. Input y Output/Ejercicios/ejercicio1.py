# En este ejercicio, tendréis que crear un archivo py donde creéis un archivo txt, lo abráis y escribáis dentro del archivo. Para ello, tendréis que acceder dos veces al archivo creado.

write_input = input('Escribe algo: ')

f = open('./8. Input y Output/Ejercicios/ejercicio1.txt', 'a')

def escribir(w, f):
    if not w.endswith('\n'):
        w += '\n'

    f.write(w)

    f.close()

escribir(write_input, f)
