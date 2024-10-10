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

console.log("%c4.- Manejo de Excepciones (TRY/CATCH) ",style_console)
//En algunas ocasiones existiran errores que no son culpa del programa, si no del usuario, la red, el so o incluyso de un middleware, pero sin dudad  debemos controlar para evitar las fallas de ejecucion

console.log("Intentamos divivir: 0/10, el resultado es: ")
try{ //intenta
    let result=0/10;
    console.log(result)
}
catch(error){
    console.log("Ocurrio un error: "+error.message)
}
console.log("Intentamos divivir: 10/0, el resultado es: ")
try{ //intenta
    let result=10/0;
    console.log(result)
}
catch(error){
    console.log("Ocurrio un error: "+error.message)
}
console.log("Intentamos dividir : a/10, elresultado es: ")
try{ //intenta
    let result="a"/10; //dividir una variable no definida entre 0
    console.log(result)
}
catch(error){
    console.log("Ocurrio un error: "+error.message)
}
console.log("Intentamos dividir : a/10, elresultado es: ")
try{ //intenta
    let result=a/10; //dividir una variable no definida entre 0
    console.log(result)
}
catch(error){
    console.log("Ocurrio un error: "+error.message)
}

console.log("Intentamos dividir el valor de la variable x/entre el valor de la variable y, elresultado es: ")
try{ //intenta
    let x=8, y=2, result = x/y //dividir una variable no definida entre 0
    console.log(result)
}
catch(error){
    console.log("Ocurrio un error: "+error.message)
}



console.log("%c5.- Control de Ciclos (BREAK/CONTINUE) ",style_console)
//En alugnas ocasdiones sera importamre detner un ciclo
console.log("Va,os a constar del 1 al 10....")
for(let num=1; num<=10; num++)
    console.log(num)

console.log("Ahora necesitamos que si llegasñ añ 7 pares de contar...")
console.log("Suponiendo que solo por hoy es de mala suerte...")
for(let num=1; num<=10; num++)
    if (num==7) {
        break;
    } else {
        console.log(num)
    }
    
console.log("Ahora necesitamso que si llegas al numero 7 te lo saltes y continues con la sucesion")
for(num=1;num<=10;num ++)
{
    if (num==7) {
        continue
    }
    console.log(num)
}

console.log("%c6.- Ciclo iterativo - (FOR)",style_console)
//Recorre de manera iteraticva (I) de incremental o decremental
console.log("Los duias de la semana son en orden ascendente son:")
let dias = ["Domingo","Lunes","Martes","Miercoles","Jueves","Viernes","Sabado"]
for(let i=0; i<dias.length;i++)
    console.log(dias[i])

console.log("Ahora vamos a imprimir los meses en orden descendente")
let meses = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"]
for (let i=meses.length - 1; i>=0;i--)
    console.log(meses[i])

console.log("%c7.- Ciclo de condicionales WHILE",style_console)
//Estos ciclos (BUCLE) dependen de una condicion para continuar ejecutandose
let finDeSemana = false;
let mensaje = " ";
let j=0;

while (j < dias.length) {
    switch (j) {
        case 0:
            finDeSemana=true
            mensaje="Descansitooo"
            break;

        case 1:
            finDeSemana=false;
            mensaje="San Platano"
            break;
        case 2:
            finDeSemana=false;
            mensaje="Chambawork"
            break;
        case 3:
            finDeSemana=false;
            mensaje="Flojeritis"
            break;
        case 4:
            finDeSemana=false;
            mensaje="Casi fiiinnnn"
            break;
        case 5:
            finDeSemana=false;
            mensaje="Vierneeeeesssss👍"
            break;
        case 6:
            finDeSemana=true;
            mensaje="AWEBOOOO!"
            break;
        
    }
    if (!finDeSemana) {
        console.log(`Dia: ${dias[j]}`)
        console.log(`Mensaje del dia ${mensaje}`)
    }
    j++
}

console.log("%c8.- Ciclo de condicionales, que se ejecuta al menos una vez - (DO WHILE)",style_console)
//Simulamos una lista de episodios de una temporada
let episodios = [
    "Episodio 1: Fire",
    "Episodio 2: Lazarus",
    "Episodio 3: E.B.E",
    "Episodio 4: Born Again",
    "Episodio 5: Roland"
];

let indice =0;
let continuarViendo = true;//Esta variable simula la decision del usuario de continuar viendo

do {
    console.log(`Reproduciendo ${episodios[indice]}`)
    //Simulamos la reproduccion del episodio
    indice++;
    //Simulamos una pregunta al usuario si  desea seguir viendo
    if (indice < episodios.length) {
        continuarViendo = confirm("¿Deseas continuar con el siguiente epuisodio?")
    } else {
        continuarViendo=false;//Cuando se acab la lista de episodios
    }
} while (continuarViendo && indice < episodios.length);
console.log("Fin de la reproduccion")

//Ciclo para recorrer objetos iterables como mapas, arrays, strings, y conjuntosd de datos.
console.log("%c9.- Ciclos para recorrer elemntos finitos- (For...Of) ",style_console)
let seriesTrending=[
    {nombre:"The X Files", temporadas: 11,totalViewers:"1.7M",totalReprods:"4.5M"},
    {nombre:"The Boys", temporadas: 4,totalViewers:"2.8M",totalReprods:"3.2M"},
    {nombre:"Breaking Bad", temporadas: 5,totalViewers:"5.7M",totalReprods:"3.5M"},
    {nombre:"Peaky Blinders", temporadas: 6,totalViewers:"4.7M",totalReprods:"6.5M"},
    {nombre:"Narcos", temporadas: 3,totalViewers:"2.7M",totalReprods:"5.5M"}
]
for(let serie of seriesTrending) {
    console.log(`serie: ${serie.nombre},TemporADAS: ${serie.temporadas}`)
}

try {
    console.log(`La ultima serie leida fue ${serie.nombre}`)//No funcionara, ya que la variable serie ya no exsite, ya que su alcance solo estuvo presente durante el ciclo
} catch (error) {
    console.log("Ocurrio un error:"+error.mensaje)
}



console.log("%c10.-  Ciclos para recorrer las propiedades de elementos finitos- (For-In",style_console)
//Usando for..l.in para recorrer cada serio
for(let i in seriesTrending){
    console.log(`Serie ${parseInt(i)+1}`)
    for(let propiedad in seriesTrending[i]){
        console.log(`${propiedad}: ${seriesTrending[i][propiedad]}}`)
    }
    console.log('-----------------')
}

console.log("%c11.- Ciclos ininterrrumpidos para cada uno de los elemntos del arreglo (FOR EACH)  ",style_console)
//Lista de series de TV trending con temporadas, viewers y reproducciones
let seriesTrending2=[
    {nombre:"The X Files", temporadas: 11,viewers:"500000",Reproducciones:"5557255"},
    {nombre:"The Boys", temporadas: 4,viewers:"523000",Reproducciones:"45522545"},
    {nombre:"Breaking Bad", temporadas: 5,viewers:"635453",Reproducciones:"4245244"},
    {nombre:"Peaky Blinders", temporadas: 6,viewers:"45345",Reproducciones:"4524524542"},
    {nombre:"Narcos", temporadas: 3,viewers:"45354",Reproducciones:"20545245"}
]
//Usando forEach para recorrer cada serie y calcular la calificacion
seriesTrending2.forEach((serie,index)=>{
    let calificacion=(serie.Reproducciones / serie.viewers).toFixed(2);
    //Calcula la calificacion y redondea a 2 decimales
    console.log(`Serie ${index +1}:`)
    console.log(`Nombre ${serie.nombre}`)
    console.log(`Temporadas ${serie.temporadas}`)
    console.log(`Viewers ${serie.viewers}`)
    console.log(`Reproducciones ${serie.Reproducciones}`)
    console.log(`Calificacion ${calificacion}`)
    console.log(`---------------`) //Muestra la calificacion
})


//console.log("%c12.-(MAP)  ",style_console)
//lista de series que queremos verificar
let seriesDeseadas =["The X Files","Breaking Bad","Narcos"]
//Usando map e incñudes pR filtrar y obtener los nombres de las series con tres temporadas
let seriesConTresTemporadas = seriesTrending2
    .filter(serie => serie.temporadas <= 3)//Filtramos las series que tienen 3 temporadsd
    .map(serie => serie.nombre)//Obtenemos solo los nombres de esas series
    .filter(nombre => seriesDeseadas.includes(nombre))//Filtramos las que estan en la lista de series deseadas

//Mostrar los resultados
console.log("Series con tres temporadas que estan en la lista deseada")
console.log(seriesConTresTemporadas);