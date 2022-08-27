// $(selector).accion()

// $('h1').hide()

//se ejecuta una vez cargue todo el documento
//si no utilizamos esta función corremos el riesgo de que la página no esté cargada y las variables estén undefined
// $(document).ready(() => {

// })

$(() => {
    // Selectores:
    // id="el-1" => "#el-1"
    // $("#el-1").hide()

    $(".hide-btn").click(() => {
        $("h1").fadeOut()
    })
    $(".show-btn").click(() => {
        $("h1").fadeIn()
    })

    $("li").dblclick(() => {
        $("h1").css({ color: "red" })
    })

    $(".new-element").click(() => {
        $("ul").prepend("<li>New Element</li>")
    })

    $("li").mouseenter((elem) => {
        elem.target.style.color = "blue"
    })

    $("li").mouseleave(elem => {
        elem.target.style.color = "black"
    })
})