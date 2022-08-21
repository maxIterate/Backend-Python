// - Un objeto con tus datos personales (nombre, apellido, edad, altura, eresDesarrollador)
let obj = {
    nombre: 'Maximiliano',
    apellido: 'Palavecino',
    edad: 21,
    altura: 183,
    eresDesarrollador: true
}
console.log(obj)

// - Una variable que obtenga tu edad a partir del objeto anterior
let miEdad = obj.edad
console.log(miEdad)

// - Una lista que contenga el objeto con tus datos personales y un nuevo objeto con los datos personales de tus dos mejores amig@s
let lista = [
    obj,
    {
        nombre: 'José',
        apellido: 'Morales',
        edad: 22,
        altura: 180,
        eresDesarrollador: false
    },
    {
        nombre: 'Juan',
        apellido: 'Carlos',
        edad: 24,
        altura: 190,
        eresDesarrollador: false
    }
]

// - Una nueva lista con los objetos de la lista anterior ordenados por edad, de mayor a menor
const listaOrdenada = lista.sort((a, b) => a.edad - b.edad)
console.log(listaOrdenada)

