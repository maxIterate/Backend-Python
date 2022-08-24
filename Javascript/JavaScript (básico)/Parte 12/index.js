const persona = {
    nombre: 'Popoyo',
    edad: 32
}

console.log(persona)

function obtenDobleEdad(edad) {
    return edad * 2
}

const dobleEdad = obtenDobleEdad(persona.edad)

console.log(dobleEdad)

//////////



function obtenArray(edad) {
    let arrayNums = []

    for (let i = 0; i < 10; i++) {
        const numero = edad + i
        console.log(numero)
        arrayNums = [...arrayNums, numero]
    }
    return arrayNums
}

const array = obtenArray(persona.edad)

console.log(array)

// la flecha salta de breakpoint en breakpoint
// la flecha completa toda la función
// la flechita para abajo va paso por paso
