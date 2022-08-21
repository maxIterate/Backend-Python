// - Una variable que contenga la lista de la compra (mínimo 5 elementos)
let listaCompra = ['leche', 'arroz', 'fideos', 'azucar', 'cafe', 'te']
console.log(listaCompra)

// - Modifica la lista de la compra y añádele "Aceite de Girasol"
listaCompra.push('Aceite de Girasol')
console.log(listaCompra)

// - Vuelve a modificar la lista de la compra eliminando "Aceite de Girasol"
listaCompra.pop()
console.log(listaCompra)

// - Una lista de tus 3 películas favoritas (objetos con propiedades: titulo, director, fecha)
let listaPeliculas = [
    {titulo: 'Shrek', director: 'Andrew Adamson', fecha: new Date(2001, 06, 21) },
    {titulo: 'Finding Nemo', director: 'Andrew Stanton', fecha: new Date(2003, 06, 03) },
    {titulo: 'Monsters, Inc', director: 'Pete Docter', fecha: new Date(2001, 11, 06) }
]

// - Una nueva lista que contenga las películas posteriores al 1 de enero de 2010 (utilizando filter)
let nuevaLista = listaPeliculas.filter(peliculas => peliculas.fecha > Date(2010, 00, 01))
console.log(nuevaLista)

// - Una nueva lista que contenga los directores de la lista de películas original (utilizando map)
let listaDirectores = listaPeliculas.map(peliculas => peliculas.director)
console.log(listaDirectores)

// - Una nueva lista que contenga los títulos de la lista de películas original (utilizando map)
let listaTitulos = listaPeliculas.map(pelicula => pelicula.titulo)
console.log(listaTitulos)

// - Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando concat)
let titulosConDirectores = listaTitulos.concat(listaDirectores)
console.log(titulosConDirectores)

// - Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando el factor de propagación)
let propagacion = [...listaTitulos, ...listaDirectores]
console.log(propagacion)