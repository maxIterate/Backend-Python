// Inheritance - Herencia
// Polimorfismo

class Persona {
    _nombre
    _edad
    constructor(nombre, edad) { //metodo
        this._nombre = nombre //como se declaran los atributos de una clase.
        this._edad = edad
    }

    saludo() {
        console.log(`Hola, mi nombre es ${this._nombre} y tengo ${this._edad} años`)
    }
}

class Desarrollador extends Persona {
    constructor(nombre, edad, lenguaje) {
        super(nombre, edad)
        this.lenguaje = lenguaje
    }

    saludo() { // Override
        super.saludo()
        console.log(`Hola soy desarrollador de ${this.lenguaje}`) 
    }
}

const nuevodev = new Desarrollador('popoyo', 300, 'Javascript')
console.log(nuevodev)
nuevodev.saludo()

// Polimorfismo => varias formas