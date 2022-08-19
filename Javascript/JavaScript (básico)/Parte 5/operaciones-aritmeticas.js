// Principales operaciones aritméticas
let a = 3.1;
let b = 4.1;

// Suma (+)
console.log(a + b)
// Resta (-)
console.log(a - b)
// Multiplicación (*)
console.log(a * b)
// División (/)
console.log(a / b)

// Representación de los números en cadenas de texto
console.log(typeof a)
let aString = a.toString()
console.log(typeof aString)

// Redonde de números decimales
let c = 3.3;
let d = c * 3;

console.log(d)

// .toFixed("indicar la cantidad de numeros decimales") limita el numero de decimales y lo convierte a string
console.log(d.toFixed(0))


// .toPrecision() limita el número de cifras significativas y lo devuelve como string
let e = 1829.728738546

console.log(e.toPrecision(4))