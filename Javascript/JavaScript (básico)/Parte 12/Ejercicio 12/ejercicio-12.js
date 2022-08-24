// - Una función que admita un parámetro "num", y devuelva una lista con esa cantidad de números de la secuencia de Fibonacci (Por ejemplo: num = 6 => Resultado [1, 1, 2, 3, 5, 8])

function listaFibonacci(num) {
    let fibonacci = []
    fibonacci[0] = 0
    fibonacci[1] = 1
    for (let i = 2; i <= num; i++) {
        fibonacci[i] = fibonacci[i - 2] + fibonacci[i - 1]
    }
    return fibonacci
}

console.log(listaFibonacci(6))