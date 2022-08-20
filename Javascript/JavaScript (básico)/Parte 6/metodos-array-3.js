// métodos avanzados
// .map() .filter() .reduce()

const array = ['Buenos Aires', 'Campana', 'Escobar', 'Zárate', 'Lima']

const newArray = array.map((valor, indice) => {
    return `${indice + 1}- ${valor}`
})
console.log(newArray)

// o
const newArray2 = array.map((valor, indice) => `${indice + 1}- ${valor}`)
console.log(newArray2)


const perros = [
    {nombre: 'Mindy', edad: 44},
    {nombre: 'Roko', edad: 14},
    {nombre: 'Mila', edad: 6},
    {nombre: 'Mimi', edad: 8}
]

const perrosJovenes = perros.filter(obj => {
    if (obj.edad < 10) {
        return true
    } else {
        return false
    }
})
console.log(perrosJovenes)

// o

const perrosJovenes2 = perros.filter(obj => obj.edad < 10)
console.log(perrosJovenes2)

const perrosSinMindy = perros.filter(obj => obj.nombre !== 'Mindy')
console.log(perrosSinMindy)


// .reduce()
const arrayNum = [1, 4, 67, 10, 22, 25]

const suma = arrayNum.reduce((acumulado, current, indice, arrayOriginal) => {
    console.log(acumulado)
    console.log(current)
    console.log(indice)
    console.log(arrayOriginal)
    return acumulado + current
})
console.log(suma)