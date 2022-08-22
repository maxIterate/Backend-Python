// Funciones tipo flecha - funciones anónimas

const array = [1, 5, 67, 8, 2, 45, 99]
console.log(array)

const array2 = array.map(function(valor) {return valor * 2})
console.log(array2)

// o

const array3 = array.map(valor => valor * 2)
console.log(array3)

// solo se pueden acceder a las funciones flechas después de haber sido inicializadas
const dobleDeValor = valor => valor * 2

console.log(dobleDeValor(8))

// recomendación: declarar las variables al principio de nuestro js

const array4 = array.map(dobleDeValor)
console.log(array4)

