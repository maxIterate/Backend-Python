localStorage.setItem("nombre", "Popoyo")

console.log(localStorage.getItem("nombre"))

localStorage.setItem("persona", JSON.stringify({ nombre: "popoya", edad: 444}))

console.log(JSON.parse(localStorage.getItem("persona")))

//JSON.stringify --> convierte un objeto/array en string
//JSON.parse --> convierte un objeto/array convertido a través de stringify a objeto de javascript

localStorage.removeItem("nombre")

sessionStorage.setItem("nombre-session", "Popoyooo")

/* Cookie */

document.cookie = "nombreCookie=PopoyoCookie"

document.cookie = "nombreCaducidad=Nombre;expires="+ new Date(2023, 04, 06).toUTCString()
console.log(document.cookie)