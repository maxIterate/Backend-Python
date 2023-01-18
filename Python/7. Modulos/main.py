
import sys
# sys.path.append('C:\Users\Administrador\modulos')

import pprint
pprint.pprint(sys.path)

from modulos import *
import math

def main():


    # Codigo principal del programa
    # res = mates.sum(2,4)
    # print('La suma es:', res)

    res = operaciones.sum(2, 3)
    print(res)

    pprint.pprint(dir(math))
    # res2 = sumas.sumaEpica # sumas isn't defined.

    # print(mates.como_me_llamo())

    # op = mates.operaciones

    # print(op.multiplicacion(4, 2))

    pass

if __name__ == '__main__':
    main()