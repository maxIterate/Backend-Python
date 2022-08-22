// Carga y sobrecarga de funciones

function saludar() {
    hola()
}

function hola() {
    console.log('Hola soy la función hola')
}

saludar()

/// 1. global()
/// 2. saludar() global()
/// 3. hola() saludar() global()
/// 4. saludar() global()
/// 5. global()

// Es la operación de interpretación que realiza javascript para la optimización de memoria.
// hasta que no encuentra la llamada de una función, no la mete en el cache


/// CASOS:
// funciones recursivas
function revursivo() {
    recursivo() //al llamarse a si misma una y otra vez sobrecarga el cache
}
// recursivo()

