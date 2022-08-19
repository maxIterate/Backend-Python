// Bucles

// for

// for ([expresion-inicial]; [condicion]; [expresion-final])sentencia
// for(expresion-inicial; condicion; actualización)
let a;
a = a + 1
a += 1
a++

for (let i = 0; i < 10; i ++) {
    console.log(i)
}

// recorrer un array con for

let lista = [8, 22, 10, 23, 99, 100]

for (let i = 0; i < lista.length; i++) {
    console.log(lista[i])
}


// Estructura for...of

for (let valor of lista) {
    console.log(valor)
}

// Estructura forEach

lista.forEach(valor => {
    console.log(valor)
})


// Estructura for...in
let persona = {
    nombre: 'masi',
    apellido: 'pa',
    edad: 21,
    isDeveloper: true
}

for (let propiedad in persona) {
    console.log(propiedad)
    console.log(persona[propiedad])
}