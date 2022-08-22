// Funciones asincronas

function miAsync() {
    // Hace una llamada a una base de datos externa
    // Puede darnos algún error
}


// Forma tradicional de consumir una promesa
const miPromesa = new Promise((resolve, reject) => {

    // Si está todo correcto
    if (false) {
        resolve() // función de prueba que siempre resuelve de manera correcta
    } else {
        reject()
    }
})

// Las promesas son funciones que pueden o no ejecutarse de manera exitosa.

miPromesa
    .then(console.log('Se ha ejecutado de forma correcta')) //respuesta true
    .catch(console.log('ERROR')) //respuesta false
    .finally(console.log('Siempre se ejecuta')) //siempre se va a ejecutar


