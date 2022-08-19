// Operador .valueOf() - Obtener valores numéricos a partir de literales
let a = 2;
let b = new Number(3);

console.log(a)
console.log(b)
console.log(a + b)
console.log(a.valueOf() + b.valueOf())

console.log(b.valueOf())

let str = new String('Holaaa me llamo hola')
console.log(str.valueOf())


// NaN (Not a Number) - Infinity
let n = Number('hola')
console.log(n)
console.log(isNaN(n))

let numerador = 19
let divisor = 0

// muestra que es infinito, pero en realidad es un valor indeterminado
console.log(numerador / divisor)

let divisor_2 = null;
console.log(numerador / divisor_2)


// Cómo convertir los string a valores numéricos con Number, parseInt y parseFloat.
let numero = '5.89'
let num2 = 17.2

console.log(typeof numero)
console.log(numero + num2) //lo concatena en ves de sumar

console.log(Number(numero) + num2)


console.log(parseInt(numero))
console.log(parseFloat(numero))

// Números hexadecimales (base 16) 1 byte = 8 bits
let numEx = '0x3a5b7'
console.log(parseInt(numEx, 16))


// Obtener los valores máximo y mínimo en Javascript.
let minPrecision = Number.EPSILON
let minValueJS = Number.MIN_VALUE
let maxValueJS = Number.MAX_VALUE

console.log(minPrecision)
console.log(minValueJS)
console.log(maxValueJS)
console.log(2 ** 5000)