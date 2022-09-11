/**
 * Ejemplo de uso de:
 * - useState()
 * - useRef() //identificar valores, referenciar elementos dentro de la vista
 * - useEffect() //controlan los cambios en la vista
 */

import React, {useState, useRef, useEffect} from 'react';

const Ejemplo2 = () => {

    // crear dos contadores distintos
    // cada uno en u nestado diferente
    const [contador1, setContador1] = useState(0);
    const [contador2, setContador2] = useState(0);

    // crear una referencia con useRef() para asociar una variable
    // con un elemento del DOM del componente (vista html)
    const miRef = useRef();

    function incrementar1(){
        setContador1(contador1 + 1)
    }

    function incrementar2(){
        setContador2(contador2 + 1)
    }

    /* Trabajando con useEffect */

    /**
     * ? Caso 1: Ejecutar SIEMPRE un snippet de código
     * Cada vez que haya un cambio en el estado del componente
     * se ejecuta aquello que esté dentro del useEffect()
     */

    // useEffect(() => {
    //     console.log('Cambio en el estado del componente')
    //     console.log('Mostrando referencia a elemento del DOM:')
    //     console.log(miRef)
    // });

    /**
     * ? Caso 2: Ejecutar solo cuando se cambie el contador 1
     * Cada vez que haya un cambio en contador 1, se ejecuta lo que diga el useEffect
     * En caso de que cambie el contador2, no habrá ejecución
     */

    useEffect(() => {
        console.log('Cambio en el estado del contador 1')
        console.log('Mostrando referencia a elemento del DOM:')
        console.log(miRef)
    }, [contador1]);

    /**
     * ? Caso 3: Ejecutar solo cuando se cambie el contador 1 o el 2
     * Cada vez que haya un cambio en contador 1, se ejecuta lo que diga el useEffect
     * En caso de que cambie el contador2, también se ejecuta el useEffect
     */

    useEffect(() => {
        console.log('Cambio en el estado del contador 1 o 2')
        console.log('Mostrando referencia a elemento del DOM:')
        console.log(miRef)
    }, [contador1, contador2]);

    return (
        <div>
            <h1>--- Ejemplo de useState(), useRef(), y useEffect() ---</h1>
            <h2>Contador 1: {contador1}</h2>
            <h2>Contador 2 : {contador2}</h2>
            {/* Elemento referenciado */}
            <h4 ref={miRef}>
                Ejemplo de elemento referenciado
            </h4>
            <div>
            {/* Botones para cambiar los contadores */}
                <button onClick={incrementar1}>Incrementar contador 1</button>
                <button onClick={incrementar2}>Incrementar contador 2</button>
            </div>
        </div>
    );
}

export default Ejemplo2;
