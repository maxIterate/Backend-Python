// .sort() ->

let array = [1, 2, 4, 67, 80, 12]

console.log(array)


array.sort((a, b) => {
    if (a < b) {
        return -1
    } else if (a > b) {
        return +1
    } else {
        return 0
    }
})
console.log(array)

// ordenar arrays númericos
let arrayNumerico = [0, 34, 23, 12, 22, 2, 8, 9, 1]

arrayNumerico.sort((a, b) => a - b)
console.log(arrayNumerico)

// ordenar objetos
const perros = [
    {nombre: 'Mindy', edad: 44},
    {nombre: 'Roko', edad: 14},
    {nombre: 'Mila', edad: 6},
    {nombre: 'Mimi', edad: 8}
]

perros.sort((a, b) => a.edad - b.edad)
// Explicación:
// retorna la resta entre a y b, si es negativa significa que a es menor que b,
// si es positiva significa que b es menor que a
// 
console.log(perros)

///////////////////////////////////////////////////////////////////////////////

// Comparar arrays
// .every(), si todos los compoenentes de una array cumplen una condición

let arrayNum = [3, 22, 11, 20, 6, 7, 8, 1]

let resultado = arrayNum.every(valor => {
    if (valor > 0) {
        return true
    } else {
        return false
    }
})
console.log(resultado)

let resultadoCorto = arrayNum.every(valor => valor > 0)
console.log(resultadoCorto)

//// 

let arr1 = [1, 2, 3, 4]
let arr2 = [1, 2, 3, 4]

console.log(arr1 === arr2) //los array no se pueden comparar de esta manera

////

const compararArrays = ((array1, array2) => {
    if (array1.length !== array2.length) return false
    const res = array1.every((valor, i) => {
        if (valor === array2[i]) return true
        return false
    })
    return res
})
console.log(compararArrays(arr1, arr2))

// forma reducida
const compararArrays1 = ((array1, array2) => {
    if (array1.length !== array2.length) return false
    const res = array1.every((valor, i) => valor === array2[i])
    return res
})

console.log(compararArrays1(arr1, arr2))

