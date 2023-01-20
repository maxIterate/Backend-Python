#En este segundo ejercicio tendréis que crear un script que nos diga si es la hora de ir a casa. Tendréis que hacer uso del modulo time. Necesitaréis la fecha del sistema y poder comprobar la hora.

#En el caso de que sean más de las 7, se mostrará un mensaje y en caso contrario, haréis una operación para calcular el tiempo que queda de trabajo.

import time

# system_date = time.strftime('%H:%M')
# print(system_date)

# left_time = time.strftime('%H:%M', time.time())
# print(left_time)

# hours_left = system_date - left_time

# tiempo = time.ctime()
# print(tiempo)

# tiempo_mo = tiempo + 3
# print(tiempo)

# def goHome(system_date):
#     if (system_date >= '19:00'):
#         print("Es hora de irse a casa")

def hours_until_7pm():
    current_time = time.localtime()
    target_time = (current_time.tm_year, current_time.tm_mon, current_time.tm_mday, 19, 0, 0, current_time.tm_wday, current_time.tm_yday, current_time.tm_isdst)
    time_until_target =  time.mktime(target_time) - time.mktime(current_time)
    return int(time_until_target / 3600)

horas = hours_until_7pm()
print(horas)

asd = time.mktime
print(asd)


# def irse_casa(horas):
#     if(int(horas) < 19):
#         print('faltan:',horas,'horas para las 19:00')
#     else:
#         print('Ya puedes irte a casa')

# irse_casa(horas)

# Me rendí :(