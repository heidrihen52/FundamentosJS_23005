// Objetos
const bg = "linear-gradient(11deg,rgba(2,0,36,1) 0%,rgba(9,9,121,1) 33%, rgba(0,212,255,1) 86%)";
const style_console = `background: ${bg}; color: white; border-radius: 6px; paddig: 4px; font-size: 1.0rem; font weight: bold`;
// Variables independiemtes
console.log("%c1.- Variables Independientes", style_console)
let Producto_Nombre ="PC de escritorio"
let Producto_Marca ="Dell"
let Producto_Modelo="Latitude"
let Producto_Precio= 20998.9
let Producto_Disponibilidad = true
let Producto_SKU = Symbol("LT123456")
let Producto_Stock = 15
let Producto_Imagen =null
let Producto_Barcode;
let Producto_Categorias = ["Electronicos","Cputacion","Oficina","Mas vendidos"];
console.log(`Los datos del producto son: \n
    Nombre: ${Producto_Nombre}, Tipo de dato <${typeof(Producto_Nombre)}>
    Marca: ${Producto_Marca}, Tipo de dato <${typeof(Producto_Marca)}>
    Modelo: ${Producto_Modelo}, Tipo de dato <${typeof(Producto_Modelo)}>
    Precio: ${Producto_Precio}, Tipo de dato <${typeof(Producto_Precio)}>
    Dispionibilidad: ${Producto_Disponibilidad}, Tipo de dato <${typeof(Producto_Disponibilidad)}>
    Stock: ${Producto_Stock}, Tipo de dato <${typeof(Producto_Stock)}>
    Imagen: ${Producto_Imagen}, Tipo de dato <${typeof(Producto_Imagen)}>
    Barcode: ${Producto_Barcode}, Tipo de dato <${typeof(Producto_Barcode)}>
    Categorias: ${Producto_Categorias}, Tipo de dato <${typeof(Producto_Categorias)}>`)
console.log("En el caso de SKU, no se puede concatenar a la caden a de texto anterior, ya que es un SKU")
console.log(Producto_SKU)
console.log(typeof(Producto_SKU));
//Ahora lo declaramos como un OBjeto
console.log("%c2.- Objeto", style_console)
let Producto = {
    Nombre: "Laptop HP",
    Marca: "Hewlett Packard",
    Modelo: "DV 3000",
    Precio: 15999.99,
    Disponibilidad: true,
    Stock: 3,
    SKU: "HP125342",
    Imagen: "./assets/lan_4403214.png",
    Barcode:null,
    Categoria:["Electronicos","Portatiles"]
}
//Ahora leemos el objeto completo
console.table(Producto)
console.log("Accediendo a propiedades especificas de PRODUCTO")
console.log(`Nombre Completo del Producto: ${Producto.Nombre} ${Producto.Marca} ${Producto.Modelo}`)
console.log(`Precio: ${Producto.Precio}`)
if(Producto.Disponibilidad == 0)
console.log(`Estatus: Agotado`)
else
console.log(`Estatus: ${Producto_Stock} unidades disponibles.`);
//Desestructuracion de Objetos.
console.log("%c3.- Deestructuración de Objetos", style_console)
let Producto2 = {
    Clave:612,
    Nombre: "Televison",
    Marca: "Sony",
    Modelo: "Bravia",
    Precio: 18999.99,
    Disponibilidad: true,
    Stock: 18,
    SKU: "SONBV25342",
    Imagen: "./assets/lan_4403214.png",
    Barcode: 5575434,
    Categoria:["Electronicos","Entretenimiento","Casa"]
}
let Comprador= {
    Clave: 3324,
    Nombre: "Adrian",
    Apellidos: "Perez Jimenez",
    Tipo: "Frecuente",
    Correo:"apjgmail.com",
    PaisOrigen: "México",
    SaldoActual: 199992.23
}
let Pedido = {
    Producto_Clave:612,
    Comprador_Clave: 3324,
    Cantidad: 2,
    Estatus: "Carrito de Compra",
    TipoPago: "tarjeta de Debito"
}
//En base a los 3 objetos necesitamos calcular el costo de la compra y si le alcanza con su saldo a favor
let {Precio: Producto_Precio2} = Producto2;
let {Cantidad: Pedido_Cantidad} = Pedido;
let {SaldoActual: Cliente_SaldoActual} = Comprador;
let Costo_Compra = Producto_Precio2 * Pedido_Cantidad;
console.log(`El cliente ha agregado a su carrido de compras ${Pedido_Cantidad} unidades, con un coste total de: $${Costo_Compra}`)
if(Costo_Compra<Cliente_SaldoActual)
console.log("El cliente tiene saldo suficiente.")
//Actualizar el valor de los objetos
console.log("%c4.- Actualizacion de los valores de las propiedades de un Objeto", style_console);
console.log(`El objeto actualmente tiene los siguientes valores`)
console.log(JSON.stringify(Producto2, null, 2)); //StringFy lo vuelve cadena
//convierte el objeto a una cadena para evitar problemas con la referencia
console.log(`Por cuestiones de inflacion el costp del producto ha cambiado y debe ser actualizado... de 6,829.00 a 6,915.50`)
//Para modificar el valor de un objeto basta con igualar el nuevo valor de la propiedad deseada
Producto2,Precio=6915.50;
console.log(`Los nuevos valores del Producto son:  `)
console.log(Producto2);
/////////////////////////////////////////////////////
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
    autenticado: autenticado,
    usuario: usuario
}
console.table(nuevoObjeto)