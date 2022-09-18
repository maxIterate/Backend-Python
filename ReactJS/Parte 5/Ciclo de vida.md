## Qué son los ciclos de vida?

El ciclo de vida de un componente, son métodos o funciones que se ejecutan de forma automatica, cuando el componente va a aparecer, cuando ha sufrido un cambio, y todos ellos conllevan a un tipo de ejecución de una función en concreta.

La primera fase de renderización de un componente es el montaje.

La segunda fase es la actualización.

Finalmente tenemos el desmontaje o la desaparición del componente.

- Mounting
- Updating
- Unmounting

-----------------------------

Ejemplo:

return = {
    <Ejemplo4>
}

^^^

Lo que ocurre es que estamos llamando al constructor, para montar el componente. Entra en la fase de renderización y luego pasa por la fase de commit.


### Mounting

- Mounting ---> constructor ---> render ---> React updates DOM and refs ---> componentDidMount

Cuando hacemos instancia de un componente pasamos por una fase de renderización que ejecuta el método render dentro de los componentes de tipo clase, en las funciones ejecuta el return. ósea ejecuta la función que devuelve el componente. 
El render devuelve un elemento HTML jsx.


- render: componentes de tipo clase
- return: funciones

Esto lo que hace automáticamente es actualizar el DOM virtual que tiene React y nos crea los elementos y las referencias.

**componentDidMount**, serían de las primeras funciones que se ejecutan dentro del ciclo de vida.
componentDidMount: cuando el componente ya ha sido montado y renderizado.

-------------------------

### Updating

Cuando el estado sufre algún cambio, recibe nuevas props o se usa forceUpdate, para forzar la actualización de la vista.

Sí los componentes padres proveen nuevo contexto a los componentes hijos estos se actualizarán.
Por lo tanto, los props que han recibido los componentes inferiores, han sido modificados o han cambiado, por lo tanto, hay un *new Props* y eso repercute en una nueva renderización del componente. 

setState() => componente de tipo clase
useState() => hooks

Ambos también implican una nueva renderización, ya que repercute en una actualización del DOM.

tanto si no es New Props, como setState(), se puede forzar la actualización utilizando un forceUpdate(). Todas son actualizaciones sobre el montaje inicial.

componentDidUpdate() --> Cuando el componente se actualiza.

------------------------------------

### Unmounting

Cuando un componente desaparece.

Ej: el SPA (Single Page Application) irá poniendo y sacando componentes.

Cuando se ponen ocurre el **Mounting** y cuando se sacan ocurre el **Unmounting**.

componentWillUnmount --> Antes de eliminarse. El punto de inflexión para hacer eventos/acciones antes de que desaparezca el componente.

------------------------------------
