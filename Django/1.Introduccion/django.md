# DJANGO

django es un framework gratuito de código abierto escrito en python.

Framework: marco de trabajo que nos ofrece un conjunto de herramientas, o librerias que nos van a facilitar el proceso de trabajo.

## Patrón de arquitectura MTV

**MTV: Model Template View**
*Modelo Plantilla Vista*
deriva del patrón MVC (Model View Controller): Un usuario se conecta a una URL. Esta URL ejecuta un controlador, que es el que se encarga de toda la lógica. Supongamos que necesita obtener los últimos 10 posts. Necesitará un modelo para extraer los datos de la base de datos. Para esto un modelo utiliza un ORM (Object Relational Mapping) que funciona como comunicador entre la base de datos y el modelo. Una vez el controlador ya posee los datos, ofrece la vista. La vista, utilizará las funciones front pertinentes para mostrar algo al usuario.

El módelo MTV es el mismo que el MVC, a diferencia que los Controladores se llaman "Vistas" y las vistas se llaman "Plantillas".

## Estructura de archivos

manage.py: nos permite gestionar el proyecto
__init__.py: nos permite gestionar cada aplicación como un paquete
urls.py: asocia las urls con las vistas que lo gestionan.
-------------------------------
settings.py: establece las configuraciones del paquete.

INSTALLED_APPS: es un array que contiene aplicaciones instaladas por defecto.
    - django.contrib.admin: establece un panel de administración
    - django.contrib.auth: gestiona las autenticaciones
    - django.contrib.contenttypes: gestiona los distintos tipos de contenido
    - django.contrib.sessions: gestiona las sesiones
    - django.contrib.messages: controla los mensajes
    - django.contrib.staticfiles: controlar la carga de archivos estaticos.

MIDDLEWARE:
    - django.middleware.csrf.csrViewMiddleware: protección contra ataques cross-sitting


**python manage.py migrate**: Si la base de datos aún no existe, migrate crea todas las tablas necesarias para que coincidan con las definiciones de su modelo.
De lo contrario, si la base de datos ya existe, migrate actualiza las definiciones de la tabla existente para que coincidan con las definiciones del modelo, es decir, tal vez agregó un campo a uno de sus modelos, por migratelo que agregaría esa columna a la tabla de la base de datos.

----------------------------------------------------------------

## VISTAS
Las vistas no son más que una colección de funciones.