let input = 'cAsa GigAnte'
let db = 'casa gigante'

// toLowerCase() - toUpperCase()

console.log(input.toUpperCase())
console.log(input.toLowerCase())
console.log(input.toLowerCase() === db.toLowerCase())


// Formas de concatenar strings

let str_1 = 'Cadena de texto muy epica 1'
let str_2 = 'Dice lo que dice porque lo estaba diciendo'

console.log(str_1.concat(" ", str_2))
console.log(str_1 + " " + str_2)
console.log(`${str_1} ${str_2}`)

//Eliminar espacios al inicio y al final
let str_3 = '        Hola soyun string xd.               '
console.log(str_3.length)
// trim()
console.log(str_3.trim().length)

//Eliminar espacios al principio
// trimStart()
console.log(str_3.trimStart().length)
//Eliminar espacios al final
// trimStart()
console.log(str_3.trimEnd().length)


// Obtener el caracter que hay en cierta posición
let str_4 = 'Oración bien hermosa que dicta que las cosas'
console.log(str_4.charAt(14))
console.log(str_4[19])

// Obtener la posición de una palabra dentro de un string
let str_5 = 'La playa estaba llena de personas con llena paraguas'
console.log(str_5.indexOf('llena')) //primera instancia que encuentre
console.log(str_5.lastIndexOf('llena'))  //última instancia que encuentre


