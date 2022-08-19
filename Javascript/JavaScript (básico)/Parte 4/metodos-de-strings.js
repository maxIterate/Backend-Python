// Métodos más utilizados con strings

// Obtener la longitud de un string
let str = 'Hola soy un string extremadamente largo xd'

console.log(str.length)


// Obtener partes de cadenas de caracteres
// slice() substring() substr()

let slice_str = str.slice(0,8)
console.log(slice_str)

let substring_str = str.substring(0, 8)
console.log(substring_str)

let substr_str = str.substr(0, 8)
console.log(substr_str)

// replace
let str2 = 'El perro tomaba agua desde la silla'
let str2_replace = str2.replace('perro', 'gato') //solo va a reemplazar la primera coincidente que encuentre
console.log(str2_replace)


let str_largo = "la capacidad de que la cosa salga bien o mal depende totalmente de la manera en que la persona hace frente a la cosa"

// replace normal
console.log(str_largo.replace('la', 'lolo'))

// replace con expresión regular /g (global)
console.log(str_largo.replace(/la/g, 'lolo'))