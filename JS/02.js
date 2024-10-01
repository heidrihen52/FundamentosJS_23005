//Ejercicio numero2: Tipos de datos
//1. Undefinied
console.warn("--- Tipo de dato UDEFINIED ---")
let cliente;
console.log(`El cliente es: ${cliente}`);
console.log(`El tipo de dato de la variable cliente es: ${typeof(cliente)}`);
cliente= "Juan Romero";
console.log(`El cliente es: ${cliente}`);
console.log(`El tipo de dato de la variable cliente es: ${typeof(cliente)}`);
cliente= 1995;
console.log(`El cliente es: ${cliente}`);
console.log(`El tipo de dato de la variable cliente es: ${typeof(cliente)}`);
// Undefinied es el tipod de dato que por defecto se asigna a las variables no iniciaizadas o no declaradas
// 2. Boolean 
console.warn("--- Tipo de dato BOOLEAN (Boleano - True/ False) ---")
let esPremium = "No lo se";
console.log(`¿Es el cliente Premium? : ${esPremium}`);
console.log(`El tipo de dato de la variable esPremium es: ${typeof(esPremium)}`);//En esta parte muestra string porque fue inicializado como "no lo se"
console.log('Asignando el valor "true" a la variable esPremium ')
esPremium=true
console.log(`El tipo de dato de la variable esPremium es: ${typeof(esPremium)}`);//En esta parte se declara como boolean porque se declaro como true
console.log(`¿Es el cliente Premium? : ${esPremium}`);
esPremium=false
console.log(`¿Es el cliente Premium? : ${esPremium}`);
if(esPremium)
    console.log ("El cliente pago por usar el servicio")
else 
    console.log("El usuario no pagó por el servicio")
// 3. Number
console.warn("---Tipo de dato Number (Numeros, positivos, negativos, decimales, flotantes)---")
var cantidad;
const costo_producto = 10.50
let saldo_cuenta = -2500.40
let monto_transaccion;
console.log(`Tu saldo al dia de hoy es de: ${saldo_cuenta}, (Tipo de dato = ${typeof(saldo_cuenta)})`);
console.log(`El producto que haz seleccionado cuesta: ${costo_producto}`)
cantidad=8;
console.log(`Haz elegido comprar: ${cantidad} de productos.`)
console.log(`El importe total de la compra es: ${cantidad*costo_producto}`)
saldo_cuenta= saldo_cuenta - (cantidad*costo_producto);
console.log(`Tu nuevo saldo es de: ${saldo_cuenta}`);
// El cliente realiza un abono de $1500
monto_transaccion=1500;
console.log(`Tu abono de: ${monto_transaccion} ha sido recibido, tu nuevo saldo es de: ${saldo_cuenta+monto_transaccion}`);