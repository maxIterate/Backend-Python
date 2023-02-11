# Platinllas

Las template tags de Django nos permiten comunicar elementos de Python a HTML, para que puedas construir sitios web dinámicos más rápido y fácil.

La parte lógica siempre va a estar del lado de las views, y la parte visual, los HTML, la parte estetica y frontal va a estar dentro de los templates (plantillas), de esta forma se consigue la estructuración completa utilizando el modelo MTV.

Parte visual: templates
Parte logica: views
Estructura de datos: models

Las plantillas nos van a ayudar para no repetir código HTML. Poder reutilizar botones, por ejemplo.

**from django.shortcuts import render**
utilizado para renderizar contenido html

La función render() toma un objeto request como primer un argumento, un nombre de template como segundo argumento y un diccionario como tercer argumento opcional. Devuelve un objeto HttpResponse con el template renderizado con el contexto dado.

render() se encarga de pintar el HTML, en pantalla, pero necesita 3 argumentos:
1- request: la información de la petición, la request. De esta forma pasamos la información a la plantilla
2- plantilla: se indica que plantilla se quiere cargar
3- contexto: la plantilla habitualmente no va a ser estatica, por eso necesita datos e información para poder funcionar correctamente. por ejemplo: un post, pasarle la imagen, el texto, los likes, etc. El contexto en Django no va a ser más que un diccionario, en el cual asociaremos a cada clave un valor.


## Qué son los request?

Django usa los objetos respuesta y petición para pasar información de estado a través del sistema. Cuando se peticiona una página, Django crea un objeto HttpRequest que contiene metadatos sobre la petición. Luego Django carga la vista apropiada, pasando el HttpRequest como el primer argumento de la función de vista. Usualmente el código de estado de una solicitud HTTP debe ser 200.

------------------------------------------------------------

# Uso de Contexto en plantillas

El contexto será una variable que almacenará en forma de diccionario todo aquel valor que se desea mostrar en el HTML.
Para referirse a una clave del diccionario del contexto en html se utiliza {{}}.

--------------------------------------------------------------

# Bucles y condicionales en plantillas

Estas estructuras de codificación son especialmente y especificamente destinadas para la gestión de la plantilla en sí, ósea la visualización del contenido. 
No delegar acciones de visualización, ósea de lógica a nuestras plantillas. Esto ensucia la estructura de nuestro código.
Siempre mantenerlo separado.

Sí es una acción de lógica debemos colocarlo en el views.
Sí es una acción destinada simplemente a mostrar información, entonces debe ir en el template.

## Así se inserta código python en html

Con las llaves se le indica que se está escribiendo script y no HTML.

{% for category in categories %}
    {% if category == 'code' %}
        <li><b>{{ category }}</b></li>
    {% else %}
        <li>{{ category }}</li>
    {% endif %}
{% endfor %}

------------------------------------------------------------

# Comentarios y filtros

multilineas pero se pinta en el html:
<!-- Este es un comentario HTML -->

una sola línea, pero no se pinta:
{# este también es un comentario #}

muchas líneas, pero no se pinta:
{% comment %} comentario epico {% endcomment %}

------------------------------------------------------------

# Archivos estáticos

settings > STATIC_URL

settings > 
STATICFILES_DIRS = [
    BASE_DIR / 'static',
    '/var/www/static'
]

Cuando se especifica una ruta como estatic "static" en el HTML, esta va a comenzar desde el  directorio base static. Por ejemplo si indicamos static a style.css lo buscará dentro de la carpeta static.

Para que los archivos estaticos funcionen correctamente se debe:

en settings: 

INSTALLED_APPS = [
    "django.contrib.staticfiles"
]

STATIC_URL = "static/"

STATICFILES_DIRS = [
    BASE_DIR / 'static',
    '/var/www/static' //directorio donde va a estar el despliegue
]

luego en el HTML:

{% load static %}

y agregar static a cada archivo que queremos importar desde la carpeta de static.

------------------------------------------------------------

# Herencia de plantillas

{% extends './layouts/base.html' %}