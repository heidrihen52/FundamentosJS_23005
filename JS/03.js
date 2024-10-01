// Objetos

const producto = { //Asignacion de atributos
    nombre: "Tablet 9\"",
    marca: "Mac",
    modelo: "iPad",
    costoCompra: 11500.25,
    constoVenta: 15400,
    disponible: true,
    SKU: Symbol("ABCDE"),
    colores: ["Blanco","Negro","Rosa","Azul","Amarillo"] //Arreglo
}
//Imprimir el objeto
console.warn("----Objetos----")
console.log(producto)
 //Los objetos tambien pueden representarse con formato de tabla usando la funcion console.table
 console.table(producto)
//Acceder a las propiedades del producto
console.warn("Leyendo las Propiedades de un Objeto y sus tipos de dato")
    console.log(`Nombre del Producto: ${producto.nombre} que es del tipo: ${typeof(producto.nombre)}`);
    console.log(`Nombre del Producto: ${producto.marca} que es del tipo: ${typeof(producto.marca)}`);
    console.log(`Nombre del Producto: ${producto.modelo} que es del tipo: ${typeof(producto.modelo)}`);
    console.log(`Nombre del Producto: ${producto.costoCompra} que es del tipo: ${typeof(producto.costoCompra)}`);
    console.log(`Nombre del Producto: ${producto.constoVenta} que es del tipo: ${typeof(producto.constoVenta)}`);
    console.log(`Nombre del Producto: ${producto.disponible} que es del tipo: ${typeof(producto.disponible)}`);
    console.log(`Nombre del Producto: ${String(producto.SKU)} que es del tipo: ${typeof(producto.SKU)}`);
    console.log(`Nombre del Producto: ${producto.colores} que es del tipo: ${typeof(producto.colores)}`);
 console.log(producto.nombre) // Añadir en cadena los datos del producto
 console.log(producto.marca)
 console.log(producto.modelo)
 console.log(producto.costoCompra)
 console.log(producto.constoVenta)
 console.log(producto.disponible)
 console.log(producto.SKU)
 console.log(producto.colores)
// Desctructuring : Sacar una estructura
const { nombre ,marca ,modelo } = producto
console.log(nombre)
console.log(marca)
console.log(modelo)
// Objet Literarl Enhacement colocar datos dentro de un objeto
const autenticad = true
const usuario = "juan"
const nuevoObjeto = {
    autenticad: autenticado,
    usuario: usuario
}
console.table(nuevoObjeto)