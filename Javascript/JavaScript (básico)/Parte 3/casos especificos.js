// Casos muy especificos -- break, continue

let lista = [1, 2, 3, 4, 5, 6, 7, 8];

for (let i = 0; i < lista.length; i++) {

    if (lista[i] === 3) {
        continue; //vuelve a hacer el bucle, salta un paso
    }

    console.log(lista[i])

    if (lista[i] > 5) {
        break; //salta y cierra un bucle
    }
}


// Cuál es el ámbito de un bucle
for (let i = 1; i <= 20; i++) {
    console.log(i)
    var afe = 'oso'
    let afi = 'pato'
    const afo = 'ganso'
}

console.log(afe)
console.log(afi)
console.log(afo)

// var tiene ámbito global, vive dentro y fuera de la función sin importar donde es declarada
// let no tiene ámbito global, si fue declarada dentro de una función solo vivirá dentro de la función
// const no tiene ámbito global, si fue declarada dentro de una función solo vivirá dentro de la función

