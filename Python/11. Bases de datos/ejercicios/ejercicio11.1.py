#TODO: For any reason the SQL calls aren't working well.


#--------------------------------#
## IMPORTS
import sqlite3

#---------------#
# SQL Connection

# connect to database
con = sqlite3.connect('./11. Bases de datos/ejercicios/database.db')

# create cursor object
cursor = con.cursor()

# check if table Students exists. If not it will create one.
tableExist = con.execute("""SELECT name FROM sqlite_master WHERE type='table'
  AND name='Students'; """).fetchall()
if tableExist == []:
    cursor.execute('CREATE TABLE Students(id INT PRIMARY KEY, given_name TEXT NOT NULL, last_name TEXT NOT NULL)')
else:
    pass


#---------------#
## FUNCTIONS

# will call an add or get function according to the option chosen by the user
def sqlFunction(user_input):
    if (user_input == 1):
        sqlAdd()
    else:
        sqlGet()

# will make a new entry in Students table.
def sqlAdd():
    try:
        query = f'INSERT INTO Students(id, given_name, last_name) VALUES(1, "Juan", "José")'
        added = cursor.execute(query)
        print(f'You added {added} successfully')
    except:
        print('Something went wrong.')

# will get all entries from Students table.
def sqlGet():
    try:
        query_get = 'SELECT * FROM Students'
        get = cursor.execute(query_get)
        print(get)
    except:
        print('Something went wrong, try later.')

con.close()
#---------------#
## CODE

print('Options:\n1. Add a student\n2. Get all students')
user_input = input('Choose a numeric option: ')
user_input = int(user_input)
# print(type(user_input))
if type(user_input) == type(int()):
    sqlFunction(user_input)
else:
    print('You have to choose a correct option')
