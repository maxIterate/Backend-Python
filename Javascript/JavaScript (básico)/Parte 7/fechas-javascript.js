const fecha = new Date()

console.log(fecha)

// Atención - Los meses inicializan en 00 (Enero 00, Diciembre 11)
// las fechas de Date inicializan desde el 1 de Enero de 1970 y se cuenta en milisegundos
const fecha2 = new Date(2000, 10, 20, 19, 50, 23)
console.log(fecha2)

const fecha3 = new Date(-999999999999999) // Milisegundos
console.log(fecha3)

const fecha4 = new Date('March 5, 2002')
console.log(fecha4)

//la fecha más grande será la más reciente
console.log(fecha > fecha2)

//no se puede comparar si las fechas son iguales, para ello deben convertirse a milisegundos
const fechaComp1 = new Date(1996, 03, 02)
console.log(fechaComp1)

const fechaComp2 = new Date('April 02 1996')
console.log(fechaComp2)

console.log(fechaComp1 === fechaComp2)

// se utiliza el método .getTime() que pasa las fechas a milisegundos
console.log(fechaComp2.getTime() === fechaComp1.getTime())

///////////

// Obtener el día, el mes y el año de una fecha

const fechaUltima = new Date()
console.log(fechaUltima)

// Obtener el día .getDate()
console.log(fechaUltima.getDate())

// Obtener el mes .getMonth()
console.log(fechaUltima.getMonth() + 1)

// Obtener el año .getFullYear()
console.log(fechaUltima.getFullYear())

//toLocaleDateString
console.log(fechaUltima.toLocaleDateString())

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString