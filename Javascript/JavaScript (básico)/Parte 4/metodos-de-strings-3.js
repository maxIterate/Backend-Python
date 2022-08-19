// https://regexr.com

let str_largo = 'la capacidad que tiene la cosa para ser la gran manera de que la persona común usa la hoja de la pieza'

//cuántas veces la palabra está en el texto
console.log(str_largo.match(/la/g))

// existe la palabra dentro del texto
console.log(str_largo.includes('tiene'))

//saber si un texto empieza con una palabra
console.log(str_largo.startsWith('la capacidad'))

//si un texto termina con otra palabra
console.log(str_largo.endsWith('de la pieza'))