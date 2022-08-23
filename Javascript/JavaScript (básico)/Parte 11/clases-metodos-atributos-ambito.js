class Persona {
    // Private --> # con esto privatizamos los atributos
    // Solo se puede acceder desde dentro de la clase
    #nombre
    #edad

    // Protected --> _ con esto protegemos los atributos
    // Solo se puede acceder desde dentro de la clase y desde clases descendientes
    _isDeveloper = true
    constructor(nombre, edad) {
        this.#nombre = nombre
        this.#edad = edad
    }

    saludo() {
        console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años`)
    }

    obtenNombre() { // Función getter --> Nos permite acceder (de forma controlada) a algún atributo protegido
        return this.#nombre
    }

    #obtenEdad() {
        return this.#edad
    }

    getEdad() {
        return this.#edad
    }

    setEdad(nuevaedad) {
        this.#edad = nuevaedad
        return this.#edad
    }
}

const persona1 = new Persona('Popoyo', 400)
// console.log(persona1)
// console.log(persona1.nombre)
persona1.saludo()

console.log(persona1.obtenNombre())
// console.log(persona1.#obtenEdad()) //no me trae nada porque está protegida

console.log(persona1._isDeveloper)

// métodos publicos pueden llamarse desde afuera
// métodos privados y protegidos no se pueden acceder desde afuera

///////////////

// Getter --> métodos que nos permiten obtener atributos/métodos privados o protegidos
const edad = persona1.getEdad()
console.log(edad)
// está accediendo a un atributo que es privado, pero es gracias al método getter podemos acceder a este atributo de forma controlada

// Setter --> métodos que nos permiten cambiar el valor de alguno de los atributos privados o protegidos
// Quiero cambiar la edad de la persona
persona1.setEdad(32)
console.log(persona1.getEdad())