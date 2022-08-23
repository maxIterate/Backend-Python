import { suma, multiplicacion } from "./controller.js";
import chalk from 'chalk'

let suma1 = suma(1, 2)
let suma2 = suma(4, 5)

console.log(chalk.green(multiplicacion(suma1, suma2)))