/*Variables y operaciones
1️⃣ Responde las siguientes preguntas en la sección de comentarios:

¿Qué es una variable y para qué sirve?
Es un espacio en la memoria que no sirve para allamcenaar aalgun tipo de caracter o vaarios.

¿Cuál es la diferencia entre declarar e inicializar una 
variable?
Declar una variable es solo recervar el espacio en memoria para utilizar proximamente.
Iniciallizar una variable es asignarle un caracter o varios.

¿Cuál es la diferencia entre sumar números y concatenar strings? La diferencia es que al sumar numeros utilizamos operaaadores aritmeticos y al concatenr unimos los cracteres.

¿Cuál operador me permite sumar o concatenar? 
Es el operador "+""


2️⃣ Determina el nombre y tipo de dato para almacenar en variables la siguiente información:

Nombre = string
Apellido = string
Nombre de usuario en Platzi = string
Edad = Number
Correo electrónico = string
Mayor de edad = true
Dinero ahorrado = Number
Deudas = Number


3️⃣ Traduce a código JavaScript las variables del ejemplo anterior y deja tu código en los comentarios.
*/
let nombre = "Victor"
let apellido = "Loarca"
let nombreUsuaarioPlatzi = "huvichDev"
let edad = 27
let correoElectronico = "@gmail.com"
let mayorDeEdad = true
let dineroAhorrado = 0
let deudas = 600

/*4️⃣ Calcula e imprime las siguientes variables a partir de las variables del ejemplo anterior:
Nombre completo (nombre y apellido)
Dinero real (dinero ahorrado menos deudas)*/

console.log(`Mi nombre es ${nombre} ${apellido} y mi dinero real es Q${dineroAhorrado - deudas}`)

/*Funciones

1️⃣ Responde las siguientes preguntas en la sección de comentarios:
¿Qué es una función?
Es un bloque de codigo que puede ser reutilizado

¿Cuándo me sirve usar una función en mi código?
Cuando en otras partes del codigo necesito la solucion o proceso que realiza  de un bloque de codigo.

¿Cuál es la diferencia entre parámetros y argumentos de una función? los parametros son valores que recibira lla funcion para su ejecucion. Los arrgumentos son la solucion o el proceso que se llevaaraa acabo.

2️⃣ Convierte el siguiente código en una función, pero, cambiando cuando sea necesario las variables constantes por parámetros y argumentos en una función:*/

let nom = "Juan David";
let lastname = "Castro Gallego";

function completeName(nom, lastname){
    var nameExtrack = lastname.substring(0, 1);
    var nickname = nom + nameExtrack;

    return console.log("Mi nombre es " + nom + " " + lastname + ", pero prefiero que me digas " + nickname + ".");
}
completeName(nom, lastname)

/*Condicionales
1️⃣ Responde las siguientes preguntas en la sección de comentarios:

¿Qué es un condicional?
Es una verificacion si lo que se dice es falso o verdadero

¿Qué tipos de condicionales existen en JavaScript y cuáles son sus diferencias? if - switch


¿Puedo combinar funciones y condicionales?
SI

2️⃣ Replica el comportamiento del siguiente código que usa la sentencia switch utilizando if, else y else if:*/

/*
let tipoDeSuscripcion = "Free";

if (tipoDeSuscripcion === "Free") {
       console.log("Solo puedes tomar los cursos gratis");
    }else if(tipoDeSuscripcion === "Basic"){
        console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
    }else if (tipoDeSuscripcion === "Expert"){
        console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
    }else if (tipoDeSuscripcion === "ExpertPlus"){
        console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
    }else{
        console.log("No tienes suscripcion activa")
}*/
/*
let tipoDeSuscripcion = "Free";

if (tipoDeSuscripcion === "Free") {
       console.log("Solo puedes tomar los cursos gratis");
    }
if(tipoDeSuscripcion === "Basic"){
    console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
    }
if (tipoDeSuscripcion === "Expert"){
    console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
    }
if (tipoDeSuscripcion === "ExpertPlus"){
        console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
    }
*/
//BONUS
let tipoDeSuscripcion = [
    {tipo: "Free", suscripcion: "Solo puedes tomar los cursos gratis"},
    {tipo: "Basic", suscripcion: "Puedes tomar casi todos los cursos de Platzi durante un mes"},
    {tipo: "Expert", suscripcion: "Puedes tomar casi todos los cursos de Platzi durante un año"},
    {tipo: "ExpertPlus", suscripcion: "Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año"}
]

let verSuscripcion = tipoDeSuscripcion.find(function(subscrito){
    
    return (subscrito.tipo === "Basic")
})

console.log(verSuscripcion)

/*Ciclos
1️⃣ Responde las siguientes preguntas en la sección de comentarios:

¿Qué es un ciclo?
Es una estructura de control que permite una o varisa intrucciones mientras se cumpla algunaa condicion

¿Qué tipos de ciclos existen en JavaScript?
while - do while - for - foreach

¿Qué es un ciclo infinito y por qué es un problema?
Es cuando un cicllo se repite indefinas veces yaa que laa condindicion nunca se cumple para romperlo

¿Puedo mezclar ciclos y condicionales?
SI

2️⃣ Replica el comportamiento de los siguientes ciclos for utilizando ciclos while:*/

let i = 0;
while(i <= 4){
    console.log("El valor de i es: " + i);
    i++;
}
let j = 10;
while(j >= 2){
    console.log("El valor de i es: " + j);
    j--;
}

//3️⃣ Escribe un código en JavaScript que le pregunte a los usuarios cuánto es 2 + 2. Si responden bien, mostramos un mensaje de felicitaciones, pero si responden mal, volvemos a empezar.
 
let pregunta = 4
do{
    if(pregunta == 4){
        console.log("FELICINDADES")
    }else{
        console.log("MAL")
    }
    }
while(pregunta != 4)

/*Listas
1️⃣ Responde las siguientes preguntas en la sección de comentarios:
¿Qué es un array?
Es una agrupacion de un elemento en una misma variable

¿Qué es un objeto?
Es una estructura de datos que permite almacenar valores meidante propiedad - valor

¿Cuándo es mejor usar objetos o arrays?
Cuando tenemos propiedades y acciones es mejor utilizar onjetos y los arrays para agrupar muchos objetos con similaares caracteristicas

¿Puedo mezclar arrays con objetos o incluso objetos con arrays? SI


2️⃣ Crea una función que pueda recibir cualquier array como parámetro e imprima su primer elemento.*/

let articulos = [
    { nombre: "Bici", costo: 3000 },
    { nombre: "TV", costo: 2500 },
    { nombre: "Libro", costo: 320 },
    { nombre: "Celular", costo: 10000 },
    { nombre: "Laptop", costo: 20000 },
    { nombre: "Teclado", costo: 500 },
    { nombre: "Audifonos", costo: 1700 },
  ]
function primerElemento(){
    return console.log(articulos[0])
}
primerElemento()
//3️⃣ Crea una función que pueda recibir cualquier array como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el array completo).

let imprimierElementos = articulos.forEach(function(articulo){
    console.log(articulo)
})

//4️⃣ Crea una función que pueda recibir cualquier objeto como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el objeto completo).

let objetos = {
    marca: "susuki",
    modelo: 2022
}
function imprimir(objeto){
    if (objeto != null){
        for (let key in objeto){
            console.log(objeto[key]);
        }
    }
}
imprimir(objetos)