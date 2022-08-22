// - Una función sin parámetros que devuelva siempre "true"

function sinParametros() {
    return true
}
console.log(sinParametros)

// - Una función asíncrona que utilice un setTimeout y pase por consola un "Hola soy una promesa" 5 segundos después de haberse ejecutado

const funcionAsincrona = new Promise((resolve) => {
        setTimeout(resolve, 5000)
    })

funcionAsincrona
    .then(console.log("Hola soy una promesa"))


// - Una función generadora de índices pares automáticos
function* generadoraId() {
    let id = 0
    while(true) {
        id++
        yield id * 2
    }
}

const generadorPar = generadoraId();
console.log(generadorPar.next().value)
console.log(generadorPar.next().value)
console.log(generadorPar.next().value)
console.log(generadorPar.next().value)
console.log(generadorPar.next().value)
console.log(generadorPar.next().value)
console.log(generadorPar.next().value)