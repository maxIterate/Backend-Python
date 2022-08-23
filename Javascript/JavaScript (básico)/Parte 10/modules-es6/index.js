// Formas de importar/exportar modulos
// 2. Import ES6 - import

// import { suma, nombre } from './modules/maths.js'
import * as maths from './modules/maths.js'
import getAutor from './modules/literature.js'

const sum = maths.suma(5, 4)
console.log(sum)
console.log(maths.nombre)

console.log(getAutor())