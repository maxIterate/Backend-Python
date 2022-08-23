// - Una clase llamada "Estudiante" que tenga:

// - Una variable llamada nombre

// - Otra variable lista llamada asignaturas con 3 asignaturas: Javascript, HTML, CSS

// - Un método "obtenDatos" que devuelva un objeto con las propiedades nombre y asignaturas

class Estudiante {
    nombre
    asignaturas
    constructor (nombre, asignaturas) {
        this.nombre = nombre
        this.asignaturas = ['Javascript', 'HTML', 'CSS']
    }

    obtenDatos() {
        return {
            nombre: this.nombre,
            asignaturas: this.asignaturas
        }
    }
}


// - Crea una nueva instancia de "Estudiante"
let estudiante = new Estudiante('Maxi', this.asignaturas)
console.log(estudiante)


// - Haz la llamada al método obtenDatos
console.log(estudiante.obtenDatos())
