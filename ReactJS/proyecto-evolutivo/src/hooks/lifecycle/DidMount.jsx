/**
 * Ejemplo de uso del método
 * de ciclo de vida en componente clase y el hook de ciclo de vida en componente funcional
 */

import React, { Component, useEffect } from 'react';

export class DidMount extends Component {

    componentDidMount() {
        console.log('Comportamiento antes de que el componente sea añadido al DOM (renderice)')
    }

    render() {
        return (
            <div>
                <h1>DidMount</h1>
            </div>
        );
    }
}


export const DidMountHook = () => {

    useEffect(() => {
        console.log('Comportamiento antes de que el componente sea añadido al DOM (renderice)')
    }, []); //con los corchetes solo se ejecuta una sola vez, si no los tiene, se ejecutará el useEffect cada vez que se actualice el componente. Con esto le indicas a React que el efecto no depende de ninguna variable de estado o props y no requiere volver a ejecutarse.
    

        return (
            <div>
                <h1>DidMount</h1>
            </div>
        );
}
