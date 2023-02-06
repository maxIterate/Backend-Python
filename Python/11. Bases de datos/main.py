## IMPORTS
import sqlite3
#------------------#
## FUNCTIONS

def main():
    username = input('Nombre de usuario: ')
    password = input('Contraseña: ')

    if verify_credentials(username, password):
        print('Login successfully')
    else:
        print('Incorrect password or username')

def verify_credentials(username, password):
    conn = sqlite3.connect('./11. Bases de datos/miaplicacion.db')
    cursor = conn.cursor()

    query = f"SELECT id FROM users WHERE username='{username}' AND password='{password}'"
    print('Query a ejecutar: ', query)

    cursor.execute(query)
    # data = rows.fetchone()
    # print('data es', type(data))

    cursor.close()
    conn.close()
if __name__ == '__main__':
    main()

# conn = sqlite3.connect('./11. Bases de datos/miaplicacion.db')
# cursor = conn.cursor()

# rows = cursor.execute('SELECT * FROM users WHERE username="jdoe"')

# for row in rows:
#     print(row)

# cursor.close()
# conn.close()