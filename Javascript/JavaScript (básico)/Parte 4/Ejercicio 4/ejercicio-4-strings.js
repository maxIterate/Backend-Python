let nombre = 'Maximiliano'
let apellido = 'Palavecino'
let estudiante = `${nombre} ${apellido}`
let estudianteMayus = estudiante.toUpperCase()
let estudianteMinus = estudiante.toLowerCase()

let estudianteLength = estudiante.length

let primeraLetra = nombre[0]

let ultimaLetra = apellido.charAt(apellido.length - 1)

let sinEspacios = estudiante.trim().replace(" ", "")

let boolean = estudiante.includes(nombre)

console.log(nombre)
console.log(apellido)
console.log(estudiante)
console.log(estudianteMayus)
console.log(estudianteMinus)
console.log(estudianteLength)
console.log(primeraLetra)
console.log(ultimaLetra)
console.log(sinEspacios)
console.log(boolean)