// Errores en Javascript

const miFuncion = val => {
    if (typeof val === 'number') {
        return 2 * val
    } else {
        return err
    }
    // return false;
    throw new Error('El valor debe ser de tipo número') //lanzar errores
}

// const elDoble = miFuncion('21a')
// console.log(elDoble)
const numero = 8

try {
    // Código que puede fallar
    console.log('Está ejecutandose de manera correcta')
    const doble = miFuncion(numero)
    console.log(doble)
} catch(err) {
    // En caso de fallar, quiero que ejecutes
    console.error('Error')
} finally {
    console.log('Se va a ejecutar tanto si se produce un error, como si no se produce ninguno')
}



const numerosLokos = numero => {
    if (typeof numero === 'number') {
        return 2 * val
    }
    // } else {
    //     throw new Error('El valor debe ser de tipo numero')
    // }
}

let val = '92'

try {
    console.log('Está ejecutandose de manera correcta')
    const doble = numerosLokos(val)
    console.log(doblea)
} catch(err) {
    console.error(`El valor del error es: ${err}`)
    console.error('Error')
} finally {
    console.log('holis')
}

// InternalError, SyntaxError, TypeError, RangeError, ReferenceError

// InternalError: overflow
// SyntaxError: error de sintaxis
// TypeError: pasar a un tipo de dato incorrecto
// RangeError: tratando de acceder a una posición que sobrepasa
// ReferenceError: cuando no existe la referencia a la que hacemos referencia