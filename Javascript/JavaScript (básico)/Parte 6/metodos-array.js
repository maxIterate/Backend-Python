// Array
let var1 = 23
let array = [1, true, {obj: 'q'}, 'hola', NaN, var1]

// Acceder a los valores de un array a través de su posición
console.log(array[3])
console.log(array[array.length - 1])

// Métodos para introducir nuevos valores en nuestros arrays
// .push() .unshift() => mutan el valor de nuestro array

// .push() añade un nuevo valor al final del array
array.push('asd')
console.log(array)

// .unshift() añade un nuevo valor al principio del array
array.unshift('chau')
console.log(array)


// Métodos para eliminar valores de nuestros arrays
// .pop() .shift() => mutan el valor de nuestro array

// .pop() elimina un valor al final del array
array.pop()
console.log(array)

// .shift() elimina un valor al principio del array
array.shift()
console.log(array)


// Método para eliminar, modificar o añadir valores en nuestro array
// .splice(x, y, z)
let array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// Eliminar valores .splice(indice, numDeValoresAEliminar)
array2.splice(2, 3)
console.log(array2)

// Añadir valores .splice(indice, 0, valores)
array2.splice(2, 0, 'hola')
console.log(array2)

// Modificar valores .splice(indice, 2, 4)
array2.splice(2, 2, 3)
console.log(array2)