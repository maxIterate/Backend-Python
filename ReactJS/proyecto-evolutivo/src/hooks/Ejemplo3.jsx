/**
 * Ejemplo Hooks:
 * - useState()
 * - useContext()
 */

import React, {useState, useContext} from 'react';

/**
 * 
 * @returns Componente 1
 * Dispone de un contexto que va a tener un valor
 * que recibe desde el padre
 */

    const miContexto = React.createContext(null)

const Componente1 = () => {

    const state = useContext(miContexto);
    // Inicializamos un estado vacío que va a rellenarse con los datos del contexto del padre

    return (
        <div>
            <h1>
                El token es: {state.token}
            </h1>
            {/* Pintamos el componente 2 */}
            <Componente2></Componente2>
        </div>
    );
}

const Componente2 = () => {

    const state = useContext(miContexto);

    return (
        <div>
            <h2>
                La sesión es: {state.session}
            </h2>
        </div>
    );
}

export default function MiComponenteConContexto() {

    const estadoInicial = {
        token: '12345',
        session: 1
    }

    // Creamos el estado de este componente
    const [sessionData, setSessionData] = useState(estadoInicial);

    function actualizarSesion(){
        setSessionData(
            {
                token: 'jwt12443',
                session: sessionData.session + 1
            }
        )
    }

    return (
        <miContexto.Provider value={sessionData}>
        {/* Todo lo que esté aquí dentro puede leer los datos de sessionData */}
        {/* Además, si se actualiza, los componentes de aquí, también lo actualizan */}
        <h1>--- Ejemplo de useState() y useContext() ---</h1>
        <Componente1></Componente1>
        <button onClick={actualizarSesion}>Actualizar Sesión</button>
        </miContexto.Provider>
    )
}

// dentro del return colocamos el elemento miContexto el cual crea un contexto en nulo.
//.Provider le indicamos al elemento mi contexto que se vuelva proveedor, en este caso del valor "sessionData" que posee como valor inicial "estadoInicial".

//Dentro de miContexto metemos Componente1, que cómo Componente1 es padre de Componente2, también nos permite usar "sessionData".