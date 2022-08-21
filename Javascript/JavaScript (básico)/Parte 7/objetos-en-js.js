// Trabajando con objetos

const obj = {
    id: 45,
    producto: 'leche',
    sabor: 'vainilla',
    isVencida: false,
    marcas: ['Sancor', 'Serenisima', 'La Veronica'],
    "4-juegos": [1, 2, 3, 4]
}

//acceder a una propiedad
console.log(obj.id)
console.log(obj["4-juegos"])

const prop = 'isVencida'
console.log(obj[prop])

const obj2 = obj
console.log(obj2)

obj2.producto = 'chocolatada'
console.log(obj2.producto)

console.log(obj.producto)
// se modifica tanto el obj2 como el obj principal, ya que ambas variables apuntan al mismo esapcio de memoria

let val1 = 4
let val2 = val1

val2 = 6

console.log(val1)
console.log(val2)

// de esta manera no se asigna el mismo espacio de memoria
const obj3 = { ...obj }

console.log(obj.producto)
console.log(obj3.producto)

obj3.producto = 'yogurt'

console.log(obj.producto)
console.log(obj3.producto)

//////////////////

// Cómo ordenar listas de objetos en función de una propiedad

let listaObjetos = [
    {producto: 'arroz', id: 20},
    {producto: 'fideos', id: 44},
    {producto: 'leche', id: 6},
    {producto: 'lenteja', id: 1},
    {producto: 'banana', id: 89}
]

// .sort() ---> muta el valor de la lista original
listaObjetos.sort((a, b) => a.id - b.id)
console.log(listaObjetos)