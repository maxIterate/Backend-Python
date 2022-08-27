const hTexto = document.getElementById('h-texto')

console.log(hTexto)

hTexto.addEventListener('cambioDeTexto', evento => {
    console.log(evento.detail)
    hTexto.innerText = evento.detail.texto
    hTexto.style.color = evento.detail.color
})

function cambiarTexto(nuevoTexto, color) {
    const evento = new CustomEvent("cambioDeTexto", {
        detail: {
            texto: nuevoTexto,
            color
        }
    })
    hTexto.dispatchEvent(evento)
}