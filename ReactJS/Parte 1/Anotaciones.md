# Parte 1 ReactJS

## ¿Qué es una SPA?

Una web SPA (Single Page Application) es una forma de desarrollo web en la que la página web está contenido en un único archivo HTML.

Mientras navegamos por la web, se irán solicitando los contenidos al servidor.

De esta forma se mejoran los tiempos de respuesta y, por tanto la experiencia de usuario.

-----------------------------------

## ¿Qué es ReactJS?

ReactJS es una librería de JavaScript para crear interfaces de usuario.

https://reactjs.org/

Esta librería, que no framework, fue creada por Facebook en 2013, y sigue siendo mantenida por esta compañía a día de hoy.

Pero no solo es uan librería de Facebook: Una de sus características más interesantes es que es de código abierto, lo que implica que existen numerosas comunidades por toda la red que aportan información y ayuda día a día, tanto para los usuarios como para mejorar React.

Además de ser de código abierto, React es famoso por otra serie de características:

- Velocidad
- Componentes
- Desarrollo Declarativo
- Anidación de Componentes (orden superior orden inferior)
<!-- Cómo la información puede viajar desde los componentes inferiores a los superiores y viceversa -->
- Isomorfismo
- Agilidad de desarrollo

### Velocidad

Uno de los aspectos que más destacan de React es su velocidad de renderizado.

Esto lo consigue trabajando sobre un DOM Virtual sobre el que aplcia los cambios que sufra la aplicación y luego actualiza únicamente los elementos que se hayan modificado.

### Componentes

Citando las palabras de la guía oficial: "Los componentes permiten separar la interfaz de usuario en piezas indepentiendes, reutilizables y pensar en cada pieza de independientes, reutilizables y pensar en cada pieza de forma aislada."

Al trabajar con componentes estamos forzando nuestro desarrollo a ser más mantenible.

React nos proporciona varios tipos de componentes (Puros, de contenedor, de clase, de función, etc...) con los que facilitar su reutilización en todos nuestros proyectos, tanto dentro como entre ellos.

### Anidación

Los componentes pueden ser anidados, de forma que los componentes de orden superior propagan datos a los de orden inferior.

La comunicación entre ellos es **unidireccional** y se usan los **eventos** para que los componentes inferiores sean **reconocidos** por los de orden superior.

Paso datos a los componentes inferiores, paso eventos a los componentes superiores.


### Declarativa

React sigue el **paradigma del desarrollo declarativo.**

Las aplicaciones que creemos estarán formadas por componentes. Tanto la aplicación global como cada componente tiene un estado propio, y es por este motivo que React es declarativo.

Con JavaScript puro (vanilla) trabajamos creando scripts que informan al DOM de qué debe de realizar o cómo hacerlo: Se está siguiendo un paradigma **imperativo.**

Sin embargo, esta librería trabaja sobre el estado global de la aplicación y responde a los cambios de cada componente en su estado por separado, actualizando únicamente lo necesario.


### Isomorfismo

React permite el **isomorfismo**, también conocido como JavaScript Universal, capacidad con la que podemos renderizar tanto en **servidor** como en **cliente**.

Esto hace que solucione problemas y mejore el **posicionamiento.**


### Agilidad
Con **ReactJS** disponemos de **todas las funcionalidades** que nos ofrece **jQuery.**

Ambas tecnologías **pueden convivir**, aunque no es necesario tener que usar jQuery en nuestros proyectos.

## Instalación de React

Para trabajar con React haremos uso de **NodeJS**, el entorno de ejecución más conocido de JavaScript.

Está basado en el uso de eventos **asíncronos** y en él destaca el uso de HTTP.
HTTP (HyperText Transfer Protocol)


// node_modules : donde todas las dependencias están instaladas
// package-lock.json : referencia estatica a los paquetes instalados y dónde lo ha instalado, qué versión tenian, etc.
// ReactDOM : utilizado para renderizar elementos.


## JSX

JSX es una extensión de sintaxis de JavaScript. 
Útil como ayuda visual cuando trabajan con la interfaz de usuario dentro del código JavaScript. También permite que React muestre mensajes de error y advertencia más útiles.

Ventajas:

- Si una etiqueta está vacía, puede cerrarla inmediatamente con />, como XML
- Las etiquetas JSX pueden contener elementos secundarios
- Se puede combinar html y javascript sin necesidad de utilizar las comillas.
