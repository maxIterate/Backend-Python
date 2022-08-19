let resultado = 1
let i = 1

while (i <= 10) {
    if (i === 10) {
        break;
    } else {
        i++
        resultado = resultado * i
    }
}
console.log(resultado)