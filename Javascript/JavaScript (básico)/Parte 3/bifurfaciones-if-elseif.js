// Estructuras de control

// estructuras que nos permiten decidir si seguir por un camino o por otro.

// Bifurcaciones if-else

if (true) {
    console.log('Es verdadero')
} else {
    console.log('No es verdadero')
}

let manzanasEnCaja = 80
let manzanasRetirar = 20

if (manzanasRetirar < 80) {
    console.log(`Compraste ${manzanasRetirar} manzanas.`)
} else {
    console.log('No puedes comprar tantas manzanas.')
}


let nota = 8

if (nota === 10) {
    console.log('Sacaste un 10 alto kapo')
} else if (nota >= 7 || nota <= 9) {
    console.log('Aprobaste')
} else {
    console.log('Desaprobaste')
}


// Switch

switch (nota) {
    case 10: 
        console.log('Sacaste un 10 alto kapo')
        break;
    case 9:
    case 8:
    case 7:
        console.log('Aprobaste')
        break;
    case 6:
    case 5:
    case 4:
    case 3:
    case 2:
    case 1:
        console.log('Desaprobaste')
        break;
    default:
        break;
}