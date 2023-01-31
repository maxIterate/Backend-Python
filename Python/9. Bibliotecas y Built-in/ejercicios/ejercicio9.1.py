#Crea un script que le pida al usuario una lista de países (separados por comas). Éstos se deben almacenar en una lista. No debería haber países repetidos (haz uso de set). Finalmente, muestra por consola la lista de países ordenados alfabéticamente y separados por comas.

user_countries = input('Ingrese separado por comas los países que desea listar: ')
splitted_input = set(user_countries.split(','))
listed_set = list(splitted_input)
sorted_list = sorted(listed_set)

print(sorted_list)