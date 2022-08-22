// Qué son las funciones, cómo se declaran y cómo se utilizan

// Qué son las funciones?
// Son bloques de código que se ejecutan con un fin determinado
let namee = 'Roko'


function saludar(nombre) {
    console.log(`Hola ${nombre}`)
}
saludar(namee)

///////////////////

let nombre_2 = 'Juan'
console.log(nombre_2)

despedir(nombre_2)

function despedir(nombre) {
    nombre = 'Pablo'
    console.log(`Adios ${nombre}`)
}

let yoMismo = {nombre: 'Maximiliano', apellido: 'Palavecino'}
console.log(yoMismo)

saludarPersona(yoMismo)

console.log(yoMismo)



function saludarPersona(objeto) {
    objeto.apellido = 'Villar'
    console.log(`Hola ${objeto.nombre} ${objeto.apellido}`)
}

saludarPersona(yoMismo)

//////////////

function imprimeNumero(numero = 7) { // Parametros por defecto
    console.log(numero)
}
imprimeNumero()

//////////////

function imprimir(...parametros) {
    console.log(parametros)
}

imprimir(1, 2, 4, 6, 8, 990, 0, 1)

function suma(...numeros) {
    return numeros.reduce((a, b) => a + b)
}

const sum = suma(2, 44, 99, 1234)

console.log(sum)

/////////////

