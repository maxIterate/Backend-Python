// iterar los valores de un array

// Forma antigua
let array = [23, 23, 343, 12390 , 2, 34]
for (let i = 0; i < array.length; i++) {
    console.log(array[i])
}

// Forma ES6
let suma = 0
array.forEach(valor => {
    suma += valor
    console.log(valor)
})
console.log(suma)

const variable = array.find(valor => {
    if (valor === 343) {
        return true
    }
})
console.log(variable)

const perros = [
    {nombre: 'Mindy', edad: 44},
    {nombre: 'Roko', edad: 14},
    {nombre: 'Mila', edad: 6},
    {nombre: 'Mimi', edad: 8}
]

const edadRoko = perros.find(o => {
    if(o.nombre === 'Roko') {
        return o
    }
})
console.log(edadRoko.edad)

// o

const ageRoko = perros.find(o => {
    return o.nombre === 'Roko'
})
console.log(ageRoko.edad)

// o

const { edad } = perros.find(o => o.nombre === 'Roko')
console.log(edad)

