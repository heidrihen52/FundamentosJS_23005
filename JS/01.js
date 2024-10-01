// comentarios de una sola luinea
/**
 * Comentarios multilinea
 * sss
 */
//Declaracion de variables
// a) Var
var miNombre = "Adrian";
var misApellidos;
var miEdad= 19;

//El objeto de console nos permite enviar datos a la terminal y poder visualizar el valor de una variable o resultado de una funcion o metodo
console.warn("---Declaracion de variables usando: VAR");
console.log("Intetando leer las variables: ",miNombre, misApellidos);
misApellidos = "Perez Jimenez";
console.log("Ya que ambas fueron inicializads, vuelvo a intentar leerlas;",miNombre,misApellidos);
//Una variable puede cambiar en el proceso de ejecución del programa

//b) Const

console.warn("---Declaracion de variables usando: CONST---")
const miUniversidad = "UT Xicotepec";
const miMatricula=230052;
console.log("Hola, ",miNombre," ",misApellidos," se que estudias actualmente en: ",miUniversidad, " asignaron la matricula: ",miMatricula, " y tienes la edad de: ", miEdad);
// Para saber el tipio de datos que tiene una variable o constamte podemos utilizar la funcion typeOf()
console.log("Analizando los datos puedo deducir que: ")
console.log("miNombre es del tipo: ", typeof(miNombre))
console.log("misApellidos es del tipo: ", typeof(misApellidos))
console.log("miUniversidad es del tipo: ", typeof(miUniversidad))
console.log("miEdad es del tipo: ", typeof(miEdad))
console.log("miMatricula es del tipo: ", typeof(miMatricula))
// c) LET
let miFechaNacimiento = "2005-08-10";
let miColorFavorito;

console.warn("---Declaracion de Variables Locales usando: LET")
console.log("Genial, te voy conociendo mejor, ahore sé que tu naciste el: ",miFechaNacimiento,"y tu color favorito es: mmmm dejame pensar....")
miColorFavorito = "verde"
console.log(`Creo que es ${miColorFavorito}, le atiné?`) //alt + 96 para usar " ` " y se usa para la interpolacion. Interpolacion se le conoce a la manera de mezclar textps fijos con el valor actual de las variables
console.log("Analizando los datos puedo deducir que: ")
console.log("miFechaNacimiento es del tipo: ", typeof(miFechaNacimiento))
console.log("miColorFavorito es del tipo: ", typeof(miColorFavorito))

// " ` " se le conoce como backtic Esto se utiliza para interpolar.
// [] se les conoce como Brackets
// {} se les conoce como Curly Brackets
// DEBUG se le conoce como DEPURAR
// DOM Document Object Model