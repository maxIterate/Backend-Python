const boton = document.querySelector("#button")

boton.addEventListener('click', () => {
    alert("click en el botón")
})

$(() => {

    $("#button").click(() => {
        console.log("Hola, estoy utilizando jQuery")
    })
    
})
