const boton = document.querySelector("#btn")

console.log(boton)

boton.addEventListener("click", () => {
    // alert("se ha hecho click")
    // confirm("Estas de acuerdo?") ?
    // console.log("okas lokas") 
    // : console.log(":(")

    const response = confirm('are you sure?')
    if (response) {
        console.log("you're sure")
    } else {
        console.log("you aren't sure")
    }
})

const botonInfo = document.querySelector('#info')

botonInfo.addEventListener('click', () => {
    const nombre = prompt("¿Cuál es tu nombre?")
    if (nombre) {
        console.log("Tu nombre es "+nombre)
    } else {
        console.log('No has introducido nada')
    }
})

const lista = [
    {nombre: 'popoyo', edad: 900},
    {nombre: 'papaya', edad: 20},
    {nombre: 'pepeye', edad: 45}
]

console.table(lista)