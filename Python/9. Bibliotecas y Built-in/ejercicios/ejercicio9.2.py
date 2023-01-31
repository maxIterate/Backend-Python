# En este segundo ejercicio, tenéis que crear una aplicación que obtendrá los elementos impares de una lista pasada por parámetro con filter y realizará una suma de todos estos elementos obtenidos mediante reduce.
from functools import reduce

listA = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

def no_pair(x):
    if x % 2 != 0:
        return True

filtered_list = filter(no_pair, listA)
filtered_list = list(filtered_list)


def sumNumbers(a, b):
    return a + b

sumA = reduce(sumNumbers, filtered_list)

print(sumA)