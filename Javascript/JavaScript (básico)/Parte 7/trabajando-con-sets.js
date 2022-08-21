// Trabajando con sets o conjuntos

let array = [1, 2, 3, 4, 5, 1 , 2, 5, 'hola', { id: 5 }, { id: 5 }] //conjunto de valores ordenados
let mySet = new Set(array) //conjunto de valores no ordenados y únicos. A pesar de eso los objetos pueden estar compuestos iguales, pero su referencia es diferente 

console.log({ id: 5} === { id: 5}) //tecnicamente son distintos

console.log(array)
console.log(mySet)


// .add() agrega un nuevo elemento al final, pero si se repite no lo agrega
mySet.add(9)
console.log(mySet)

// .delete() elimina un elemento
mySet.delete('hola')
console.log(mySet)

// .clear() borra todos los elementos de un set
let mySet2 = new Set([3, 5, 67, 78, 89, 99, 1, 2])
mySet2.clear()
console.log(mySet2)

// .has() es como el .include() de un array
console.log(array.includes(2))
console.log(mySet.has(2))

// .size indica la cantidad de valores que tiene un set
console.log(mySet.size)

mySet.forEach(valor => {console.log(valor)})

// .values()

let it_mySet = mySet.values()
console.log(it_mySet)

const ar_mySet = [ ...mySet ]
console.log(ar_mySet)