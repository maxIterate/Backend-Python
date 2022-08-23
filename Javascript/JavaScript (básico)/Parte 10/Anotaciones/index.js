// Formas de importar/exportar modulos
// 1. CommonJS - require
// 2. Import ES6 - import

// const modulosMaths = require('./modules/maths');
// const factorial = modulosMaths.factorial;
// const { factorial, suma } = modulosMaths
const { factorial, suma } = require('./modules/maths.js')

console.log(factorial(5))

// o

// const fact = modulosMaths.factorial(5)
// console.log(fact)

