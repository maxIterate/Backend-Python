//  Introducción a la Programación Orientada a Objetos

const persona = {
    nombre: 'Maximiliano',
    edad: 21,
    isDeveloper: true,
    saludo: function() {
        console.log('hola')
    }
}

console.log(persona)

persona.saludo()

//////////////
// Factory function
const creaPersona = (nombre, edad, isDeveloper) => {
    return {
        nombre,
        edad,
        isDeveloper,
        saludo: function() {
            console.log('Hello')
        }
    }
}

const otra_persona = creaPersona('Popoyo', 300, true)
console.log(otra_persona)