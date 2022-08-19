// lista/array
const lista = [1, 'lista', true, undefined, null]
const lista2 = new Array(2, 'hola', false, null) //creará un array con los datos ingresados
const lista3 = new Array(3) //creará un array con 3 espacios vacíos
lista3[0] = 'hola' //ahora el primer elemento vacío de la lista3 tendrá como valor el string asignado

// objeto
const objeto = {
    tienePatas: 4,
    sabeDecir: "me gusta el pan",
    esWebon: true,
    propiedadesExtras: ['hola', false],
    "es grande": false
}

console.log(objeto.propiedadesExtras[0])



// fechas
// Librerias de apoyo: Moment.js
const ahora = new Date()
console.log(ahora)

const fecha_milis = new Date(10)
console.log(fecha_milis)

const fecha_string = new Date('March 25 2020')
console.log(fecha_string)

const fecha_valores = new Date(2022, 0, 15)
console.log(fecha_valores)

const dia = ahora.getDate()
const mes = ahora.getMonth() + 1
const year = ahora.getFullYear()

console.log(dia, mes, year)