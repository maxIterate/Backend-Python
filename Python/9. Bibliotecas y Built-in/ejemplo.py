# Funciones built-in:
# Las built-in functions son funciones que vienen incorporadas y definidas desde el momento en que instalamos Python. Estas funciones siempre están disponibles para su uso y no es necesario definir ninguna librería para poder usarlas.

# Libreria estándar de python:
# https://docs.python.org/3/library/

#Programación multi-hilo

import _thread
import time

def horaActual(nombre_thread, delay):
    count = 0

    while count < 5:
        time.sleep(delay)
        count += 1
        print(f'hilo: {nombre_thread} - {time.ctime(time.time())}')

_thread.start_new_thread(horaActual, ('thread uno', 1))
_thread.start_new_thread(horaActual, ('thread dos', 2))

while True:
    time.sleep(0.1)