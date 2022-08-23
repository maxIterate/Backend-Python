export function suma(a, b) {
    return a + b
}

export function resta(a, b) {
    return a - b
}

export function multiplicacion(a, b) {
    return a * b
}

export function elevar(a, b) {
    return a ** b
}

export function factorial(a) {
    let factorial = 1
    for (let i = 2; i <= a; i++) {
        factorial *= i
    }
    return factorial
}

export const nombre = 'matematicas'