// Crear un objeto clase Persona
class Persona {
    constructor(nombre, edad, isDeveloper) { //metodo
        this.nombre = nombre //como se declaran los atributos de una clase.
        this.edad = edad
        this.isDeveloper = isDeveloper
    }

    saludo() {
        console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años`)
    }
}

// this hace referencia al objeto en el cual está ahora mismo
// al atributo nombre le estamos pasando el nombre que pasemos por el constructor

//creamos un objeto de la clase Persona
const nueva_persona = new Persona('Popoyo', 99, true)
console.log(nueva_persona)

// instanciación
// forma de inicializar una clase

let numero = 60 // inicializar
console.log(typeof numero)

let persona_2 = new Persona('Maria', 34, false) // instanciar
console.log(typeof persona_2)
console.log(persona_2 instanceof Persona) //si es de clase de tipo persona


// instanceof --> similar a typeof, pero para clases