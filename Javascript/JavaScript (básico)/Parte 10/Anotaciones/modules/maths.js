// Modulo, parte de código que se puede reutilizar en cualquier parte de un programa

function suma(a, b) {
    return a + b
}

function resta(a, b) {
    return a - b
}

function multiplicacion(a, b) {
    return a * b
}

function elevar(a, b) {
    return a ** b
}

function factorial(a) {
    let factorial = 1
    for (let i = 2; i <= a; i++) {
        factorial *= i
    }
    return factorial
}

module.exports = {
    suma,
    resta,
    multiplicacion,
    elevar,
    factorial
}