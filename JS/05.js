//Repaso de Ciclo y Sentencias de Control

 //Estilizacion de los mensajes de salida
 const bg = "linear-gradient(11deg, rgba(79,130,246,9) 0%, rgba(79,130,246,1) 63%, rgba(79,44,266,2)86%)"
 const style_console=`background: ${bg}; color: white; border-radius: 6px; padding: 4px; font-size: 1,0; font-weight: bold`

 //Personalizacion de salida de consola
 console.warn("Practica 7: Arreglos en Java Script")

 console.log("%c1.- Condicionales - Si/Entonces ... (IF)",style_console)
 //Le indica al programa que hacer  o que no en base a una prueba logica de verdadero o falso
let fechaActual =new Date();
console.log(`Hoola, Lafecha de hoy es: ${fechaActual.toDateString()}`)
//Y si la necesitamos en forma local?
const fechaLocalMX = fechaActual.toLocaleString('es-MX',
    {
        weekday: 'long',
        year:'numeric',
        month:'long',
        day:'numeric',
        hour:'numeric',
        minute:'numeric',
        second:'numeric',
        hour12:'false'
    }
)
console.log(`en formato local (Mexico_: ${fechaLocalMX})`)
 //Si es antes de las doce saluda con un buenos dias

 if(fechaActual.getHours()<12)
    console.log(`Buenos dias, hoy es: ${fechaLocalMX}`)

 //Existe un extensor de la sentencia if(Si) que es else (en caso contrario)
 if (fechaActual.getMonth()<=6) {
    console.log(`Estas en la primera mitad del año.`)
 } else {
    console.log(`Estas en la segunda mitad del año`)
 }

 //Que pasa si la validacion tiene varias operaciones

 const anio= fechaActual.getFullYear();
 let inicioPrimavera = new Date(anio,2,21)
 let inicioVerano= new Date(anio,5,21)
 let inicioOtonio= new Date(anio,8,23)
 let inicioInvierno=new Date(anio,11,21)
 let estacion
 let horarioverano=false

if (fechaActual>= inicioPrimavera && fechaActual<inicioVerano) {
    console,log("Estamos en Primavera")
    console.log("Inicia la floracion de las plantas")
    console.log("Los dias son  mas largos y las noches mas cortas")
    estacion="Primavera"
    horarioverano=true
}else if (fechaActual>= inicioVerano && fechaActual<inicioOtonio) {
    console,log("Estamos en Verano")
    console.log("Inician los dias soleados y calurosos")
    console.log("Aumenta el indicede turismo")
    estacion="Verano"
    horarioverano=true
}else if (fechaActual>= inicioOtonio && fechaActual<inicioInvierno) {
    console.log("Estamos en Otoño")
    console.log("Las hojas de los arboles se suelemn tornar naranjas")
    console.log("Se registran temperaturas mas templadas")
    console.log("los animales se preparan para la hibernacion")
    estacion="Otoño"
    horarioverano=true
}else {
    console,log("Estamos en Invierno")
    console.log("En algunas regiones suele nevar")
    console.log("Los dias son  mas cortos y las noches mas largas")
    console,log("Se recomienda usar abrigos posr las temperaturas mas bajas")
    estacion="Invierno"
    horarioverano=false
}
console.log("%c2.- Operador Ternario (validacion?cumple:no_cumple) ",style_console)
//En Java Script existe una operacion simplificasa que valida si una condicion se cumple o no, y que hacer en cada caso
const edadPersona =19;
const mayoriaEdadMX=18;
const mayoriaEdadUS=21;

let evaluarMayoriaEdad =(edad) =>
    edad>=18? "Eres mayor de edad.":"No eres mayor de edad."

    console.log("Evaluando la mayoria de edad de un apersona...")
    console.log(evaluarMayoriaEdad(edadPersona))

//Sin embargo tenemos que osniderar que la mayoria de edad varia en cada pais por cuestiones legales, por lo que debemos considerar un segundo parametro en la evaluiacion

evaluarMayoriaEdad=(edad,pais)=>
    (edad>=18 && pais==="MX")?`En  ${pais} eres mayor de edad`:`En ${pais} NO eres mayor de dedad`;

console.log("Evaluando la mayoria de edad de una persona en México...")
console.log(evaluarMayoriaEdad(edadPersona,"MX"))

console.log("Evaluando la mayoria de edad de una persona en Estados Unidos...")
console.log(evaluarMayoriaEdad(edadPersona,"US"))

console.log("%c3.- SWITCH - CASE (Elección por valor definido) ",style_console)
//Calculando tu generacion en base a tu edad

let asignaGeneracion = (anioNacimiento)=>{
    switch(true)
    {
        case(anioNacimiento<1968): //Baby boomer
            return"Baby Boomers"

        case(anioNacimiento>1968 && anioNacimiento<=1980):
            return"Generacion X"
        case(anioNacimiento>1980 && anioNacimiento<=1994):
            return"Milenials"
        case(anioNacimiento>1994 && anioNacimiento<=2010):
            return"Centenials"
        case(anioNacimiento>2010):
            return"Krystal"    
    }
}

console.log(`Dado que que nació en el año 2005 soy de la generacion: ${asignaGeneracion(2005)}`)
