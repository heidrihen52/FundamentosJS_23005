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
 let numeroGrande = 12123445678654323456555555555555555555555
 const numeroGrande2 = 464454465446546465465464654646465
 const numeroGrande3 =464333454465446546465465464654646465
 let numeroGrande4 = 12345678910111213141516171819202122232425262728293031323334353637383940
 console.log(`El primer experimento de un numero grande es: ${numeroGrande},que si es soportado por NUMBER, y su tipo de dato es; ${typeof(numeroGrande)}`)
 console.log(`El segundo experimento de un numero grande es: ${numeroGrande2},que si es soportado por NUMBER, y su tipo de dato es; ${typeof(numeroGrande2)}`)
 console.log(`El tercer experimento de un numero grande es: ${numeroGrande3},que ya no es soportado por NUMBER,ya que hay perdida de precision y su tipo de dato es; ${typeof(numeroGrande3)}`)
 console.log(`El cuarto experimento de un numero grande es: ${numeroGrande4},que ya no es soportado por NUMBER,ya que hay perdida de precision y su tipo de dato es; ${typeof(numeroGrande4)}`)
//para definir el tipo de dato big int debemos invocar la funcion Big INt o usae una letra "n" al final del numero en la asignacion del valor
console.log("⭕----Declaramos los valores numericos en gran tamaño----⭕")
numeroGrande = BigInt(54656465456454654646464664644)
numeroGrande4 = 54654654654654654646546464564n
console.log(`El quinto experimento de un numero grande es: ${numeroGrande},que si es soportado por NUMBER, y su tipo de dato es; ${typeof(numeroGrande)}`)
console.log(`El sexto experimento de un numero grande es: ${numeroGrande4},que si es soportado por NUMBER, y su tipo de dato es; ${typeof(numeroGrande4)}`)
 // hay que considerar que los tipos de datos declarados como bigint no son operables con los de tipo number 
let numero = 238
// si intentamos realizar una operacion matematica entre estos dos tipos de datos, obtendremos un error  critico en la operacion
console.log(`El resultado de la operacion de : numeroGrande4\ numero es = a:${numeroGrande4/BigInt(numero)}`)
//6. Symbol
console.warn("---Tipo de dato Symbol convierte el valor de una variable en unico---")
const numero1 = 2;
const numero2 = 2.0;
const numero3 = "2"
const numero4 = "2.0"
const numero5 = Symbol(2)
const numero6 = Symbol(2.0)
const numero7 = Symbol("2")
const numero8 = Symbol("2.0")
const numero9 = Symbol(2) //Symbol lo hace unico, asi que no se iguala a nada
//Prueba de comparacion 1; ¿es 2=2.0?
console.log("---Prueba de comparacion 3; ¿es 2 = '2'?")
if(numero1 == numero2){
    console.log(`Se han comparado los valores de numero1 y numero2, confirmando que tienen el mismo valor`)
}else{
    console.log(`Se han comparado los valorees de numer1 y numero2, detectando que tiene el mismo valor`)
}
//Prueba de comparacion 2; ¿es 2 = "3"?
console.log("---Prueba de comparacion 3; ¿es 2 = \"3\"?")
if(numero1 == numero3){
    console.log(`Se han comparado los valores de numero1 y numero2, confirmando que tienen el mismo valor`)
}else{
    console.log(`Se han comparado los valorees de numer1 y numero2, detectando que tiene el mismo valor`)
}
//Prueba de comparacion 3; ¿es 2 = "2"?
console.log("---Prueba de comparacion 3; ¿es 2 = \"2\"?")
if(numero1 === numero2){  
    console.log(`Se han comparado los valores de numero1 y numero2, confirmando que tienen el mismo valor`)
}else{
    console.log(`Se han comparado los valorees de numer1 y numero2, detectando que tiene el mismo valor`)
}
//Prueba de comparacion 4; ¿es 2 = "2"?
console.log("---Prueba de comparacion 4; ¿es 2 = \"2.0\"?")
if(numero1 === numero4){  
    console.log(`Se han comparado los valores de numero1 y numero2, confirmando que tienen el mismo valor`)
}else{
    console.log(`Se han comparado los valorees de numer1 y numero2, detectando que NO tienen el mismo valor`)
}
//Prueba de comparacion 5; ¿es 2 = "2"?
console.log("---Prueba de comparacion 6; ¿es 2 = \"2.0\"?")
if(numero1 === numero4){  
    console.log(`Se han comparado los valores de numero1 y numero2, confirmando que tienen el mismo valor`)
}else{
    console.log(`Se han comparado los valorees de numer1 y numero2, detectando que NO tienen el mismo valor`)
}
//Prueba de comparacion 6; ¿es 2 = "2"?
console.log("---Prueba de comparacion 6; ¿es 2 = Symbol(2)?")
if(numero1 === numero5){  
    console.log(`Se han comparado los valores de numero1 y numero2, confirmando que tienen el mismo valor`)
}else{
    console.log(`Se han comparado los valorees de numer1 y numero2, detectando que NO tienen el mismo valor`)
}
//Prueba de comparacion 7; ¿es 2 = "2"?
console.log("---Prueba de comparacion 7; ¿es 5 = Symbol(5)?")
if(numero1 === numero5){  
    console.log(`Se han comparado los valores de numero1 y numero2, confirmando que tienen el mismo valor`)
}else{
    console.log(`Se han comparado los valorees de numer1 y numero2, detectando que NO tienen el mismo valor`)
}
//Prueba de comparacion 8; ¿es 5 = "5"?
console.log("---Prueba de comparacion 8; ¿es 5 = Symbol(\"5\")?")
if(numero5 === numero7){  
    console.log(`Se han comparado los valores de numero1 y numero2, confirmando que tienen el mismo valor`)
}else{
    console.log(`Se han comparado los valorees de numer1 y numero2, detectando que NO tienen el mismo valor`)
}
//Prueba de comparacion 9; ¿es 5 = "5"?
console.log("---Prueba de comparacion 9; ¿es 5 = Symbol(\"5\")?")
if(numero5 == numero9){  
    console.log(`Se han comparado los valores de numero1 y numero2, confirmando que tienen el mismo valor`)
}else{
    console.log(`Se han comparado los valorees de numer1 y numero2, detectando que NO tienen el mismo valor`)
}
// = es asignacion; == igualdad de valor; === Igualdad estricta, compara valor y tipo de dato;
//Null  se utiliza para declarar variables con un valor nulo
console.warn("---Tipo de dato Null o Nulo---")
//El tipo de dato nulo se asigna cuando el sistema o el usuario saben de la variable perp prefieren dejarlo vacio, bajo su consentimiento, a diferencia de UNDEFINIED que es un valor deconociodo asignado po DEFAULT por JS
let nombreUsuario = null
let passUsuario = null
let generoUsuario = null
let estatusRelacionSentimental = null
let fechaUltimoPost= undefined
//Supongamos que estamos programando una red social, tipo Facebook, en la que parte de la información se publicará en el perfil del usuario
//Si el usuario no hainiciado sesión en eldispositivo movil o en la aplicacion web, puede esxplorar contenido de acceso publico, y no existira informacion para mostrar.
//En el HU (Historia de Usuario), que el usuario desea logearse debera ingresas su numero telefonico o correo y una contraseña que deberemos guardar en las variables previamente declaradas
//Supongamos que el usuario Adrian J, con correo adrian.j@gmail.com desea ingresar con su contraseña: pas1234
nombreUsuario ="adrian.j@gmail.com"
passUsuario="pas1234"
//En este momento de ejecucion del sistema no sabemos su genero, ni su estatus de relacion sentimental.
console.log(`El usuario: ${nombreUsuario} está intentando Logearse con una contraseña ${passUsuario}`)
//Lo que prosigue es que el sistema controlara los datos ingresados en la base de datos y en caso de que los datos sean correctos, comenzará la sesión en la plataforma actualizando estos valores
//Dado que Adrian es del genero masculino y denota que su estatus de relacion no ha sido capturadoo lo mantuvo privado esto genera la actualizacion de los valores  de las variables
generoUsuario= "M"
estatusRelacionSentimental=null
console.log(`El usuario: ${nombreUsuario} se ha logeado exitosamente, al tener acceso a su informacion de perfil podemos deducir que es del genero ${generoUsuario} y que su estatus sentimental es: ${estatusRelacionSentimental} y su ultimo post fue: ${fechaUltimoPost}`)

/*const numero = "30"
 const numero2 = 30
 console.log(typeof numero) console.log(typeof numero2)*/