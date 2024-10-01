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
 //String o cadenas de texto  este tipo de dato se utiliza para declara variables del tipo de texto o cadena de texto
 const alumno = "Adrian Perez Jimenez"
 let producto;
 console.warn("--- Tipo de datos - STRING (Cadena de Caracteres)")
 console.log(`El nombre del alumno es: ${alumno}, que es un tipo de dato ${typeof(alumno)}`)
 producto = "Monitor 20\""
 console.log(`El nombre del producto es: ${producto}, que es un tipo de dato ${typeof(producto)}`)
 //Manipulando los strings
 console.log(`Mas adelnate podremos transformar el contenido de los STRINGS usando funciones especificas como convertir a mayusculas: ${alumno} => ${alumno.toUpperCase()}`)
 console.log(`O en su defecto a minusculas: ${producto} => ${producto.toLowerCase()}`)
 
 // BigiInt (Enteros de Dimensiones Amplias)
 console.warn("--- Tipo de dato - BIGINT (Número Amplio)")
 const numeroGrande = 12123445678654323456555555555555555555555
 const numeroGrande2 = BigInt(464454465446546465465464654646465)
 const numeroGrande3 = BigInt(464333454465446546465465464654646465)
 const numeroGrande4 = 12345678910111213141516171819202122232425262728293031323334353637383940
 console.log(`El primer experimento de un numero grande es: ${numeroGrande},que si es soportado por NUMBER, y su tipo de dato es; ${typeof(numeroGrande)}`)
 console.log(`El primer experimento de un numero grande es: ${numeroGrande2},que si es soportado por NUMBER, y su tipo de dato es; ${typeof(numeroGrande2)}`)
 console.log(`El primer experimento de un numero grande es: ${numeroGrande3},que si es soportado por NUMBER, y su tipo de dato es; ${typeof(numeroGrande3)}`)
 console.log(`El primer experimento de un numero grande es: ${numeroGrande4},que si es soportado por NUMBER, y su tipo de dato es; ${typeof(numeroGrande4)}`)
 //BigInt Se usa para declarar numeros muy granades
 
 
 
 const numero1 = 10
 const numeroo2 = 20
 console.log(numero + Number(numeroGrande))
 
 const numerooo = "30"
 const numerooo2 = 30
 
 console.log(typeof String(numero2))
 console.log(typeof Number(numero))
 
  Symbol
 const primerSymbol = Symbol(30)
 const segundoSymbol = Symbol(30)
 
 console.log(primerSymbol === segundoSymbol)
 console.log(primerSymbol.valueOf())
 console.log(segundoSymbol.valueOf())
 
 //Null  se utiliza para declarar variables con un valor nulo
 const descuento = null
 console.log(typeof descuento)
 /*const numero = "30"
 const numero2 = 30
 console.log(typeof numero)
 console.log(typeof numero2)*/