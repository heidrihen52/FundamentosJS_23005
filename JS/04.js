// Objetos
//const precio = 300
//onst disponible = true
const producto = { //Asignacion de atributos
    nombre: "Tablet",
    precio: 300,
    disponible: true
}
 console.log(producto)
 console.log(producto)
 console.log(producto.nombre) // Añadir en cadena los datos del producto
 console.log(producto.precio)
 console.log(producto.disponible)
// Desctructuring : Sacar una estructura
const { nombre ,precio ,disponible } = producto
console.log(nombre)
console.log(precio)
console.log(disponible)
// Objet Literarl Enhacement colocar datos dentro de un objeto
const autenticad = true
const usuario = "juan"
const nuevoObjeto = {
    autenticad: autenticado,
    usuario: usuario
}
console.table(nuevoObjeto)