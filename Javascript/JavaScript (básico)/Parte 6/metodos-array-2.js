let array1 = [20, 'hola', NaN]
let array2 = [undefined, false, {obj: 1}, 'chau']

let array3 = array1.concat(array2)
console.log(array3)

// unir dos listas con el factor de propagación
console.log(...array3)

let array4 = [...array1, ...array2]
console.log(array4)

// ERROR!}
let array5 = [array1, array2]
console.log(array5)

// .slice() no modifica el array original
let array6 = [2839, true, undefined, 'hola', 3, 45, 6, NaN]
console.log(array6.slice(2, 4))
let array7 = array6.slice(1, -3)
console.log(array7)

