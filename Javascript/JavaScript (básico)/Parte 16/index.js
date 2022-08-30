const parrafos = document.querySelectorAll('.parrafo')
const secciones = document.querySelectorAll('.seccion')
const tarro = document.querySelector(".tarro")
console.log(tarro)
console.log(parrafos)

parrafos.forEach(parrafo => {
    parrafo.addEventListener("dragstart", event => {
        console.log("arrastrando el parrafo " + parrafo.innerText)
        parrafo.classList.add("dragging")
        event.dataTransfer.setData("id", parrafo.id)

        const elemento_fantasma = document.querySelector(".imagen-fantasma")
        event.dataTransfer.setDragImage(elemento_fantasma, 0, 0)
    })

    parrafo.addEventListener("dragend", () => {
        console.log("Arrastrado finalizado")
        parrafo.classList.remove("dragging")
    })
})

secciones.forEach(seccion => {
    seccion.addEventListener("dragover", event => {
        event.preventDefault()
        event.dataTransfer.dropEffect = "move" // copy por defecto
        // console.log('Drag over')
    })

    seccion.addEventListener("drop", event => {
        console.log('drop')
        const id_parrafo = event.dataTransfer.getData("id")
        // console.log("Párrafo id: "+id_parrafo)
        const parrafo = document.getElementById(id_parrafo)
        seccion.appendChild(parrafo)
    })


})

tarro.addEventListener("dragover", event => {
        event.preventDefault()
        event.dataTransfer.dropEffect = "move"
    })

tarro.addEventListener("drop", event => {
    const id_parrafo  = event.dataTransfer.getData("id")
    const parrafo = document.getElementById(id_parrafo)

    parrafo.parentNode.removeChild(parrafo)
})