// Funciones generadoras

function* generaId() {
    let id = 0
    while(true) {
        id++
        if (id === 10) {
            return id
        }
        yield id //cada vez que llamemos a la función nos devuelve un número, en vez de salir de la función se quedará esperando hasta que se vuelva a llamar
    }
}

const gen = generaId(); //objeto tipo generator

console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
// The next() method returns an object with two properties done and value.
//yield nos devolverá un valor, pero no termina la función
//done seguirá siendo false hasta que se ejecute un return
