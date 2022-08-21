//si alguno de los elementos de un array cumplen con una condición

// .some()

let array = [2, 6, 9, 10, 200, 23, 11, 1, -1]
// cumple una condición
let resultado = array.some(valor => valor < 0)
console.log(resultado)

// existe
const exist = array.some(value => value === 9)
console.log(exist)

// con objetos
const perros = [
    {nombre: 'Mindy', edad: 44},
    {nombre: 'Roko', edad: 14},
    {nombre: 'Mila', edad: 6},
    {nombre: 'Mimi', edad: 8}
]

const doggoExist = perros.some(doggo => doggo.nombre === 'Roko')
console.log(doggoExist)


// Obtener un array a partir de un objeto iterable
let str = 'Holaa soy mamo y me gusta el poyo'

const ar_str = Array.from(str)
console.log(ar_str)

const set = new Set([2, 3, 'start', 5])
const ar_set = Array.from(set)
console.log(ar_set)


// .keys() retorna una array de elementos iterables
const keys = array.keys()
console.log(keys)
// creamos un objeto de tipo iterator, con las keys (indices)

const ar_keys = Array.from(keys)
console.log(ar_keys)
//con el método .from ingresamos las keys a un array