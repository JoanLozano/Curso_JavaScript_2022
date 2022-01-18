// *? Llamada de la funcion
// * puede llamar la funcion antes de definirla
MiFuncion (2,4)


// *! Definir funciones
function MiFuncion(a, b) {
    console.log("La suma de : " + a + " + " + b + " es igual a " + (a + b));
};

// *? Llamada de la funcion
// * puede llamar la funcion despues de definirla
MiFuncion (5,3)


/******************************************************************************
 ******************************************************************************/

// *! Retorno del Valor de las Funciones
function MiFuncion(a, b) {
    return a + b;
};

// *? Llamada de la funcion y almacenamos el resultado devuelto en una variable
let resultado =MiFuncion (5,3)

//* Imprimimos el resultado obtenido de la funcion
console.log(resultado);


/******************************************************************************
 ******************************************************************************/

// *! Declaracion o Definicion Funciones de Tipo EXPRESION
let sumar = function (c,d){
    return c + d;
};

//* Imprimimos el resultado obtenido de la funcion asignandole los valores en la expresion.
console.log(sumar(1,2))

// *? Declaramos una variable y asignamos el valor de la funcion
resultado = sumar(1,2);

// *Imprimimos el valor de la viable a la que asignamos el valor de la funcion.
console.log(resultado);


/******************************************************************************
 ******************************************************************************/

// *! Funciones Self Invoking - Funciones Anonimas
(function (x,y) {
    console.log("ejecutando la funcion " + (x + y));
})(8,2);


/******************************************************************************
 ******************************************************************************/

// *! Funciones como Objetos

function MiFuncion(a, b) {
    console.log(arguments.length)
    return a + b;
};

console.log(typeof MiFuncion);

var MiFuncionTexto = MiFuncion.toString();
console.log(MiFuncionTexto);


/******************************************************************************
 ******************************************************************************/

// *! Funciones Flecha

const SumarFuncionTipoFlecha = (c,d) => c - d;
/*
    * No es necesario definir la funcion por el modelo tradicional,
    * la funcion se declara como una constante, ya que no se podra cambair el valor de la funcion
    * definimos el nombre, sin la palabra reservadad Function.
    * ya no se usa llaves, solamente usamos el operador  flecha "=>"
    * ya no se usa return, solamente definimos la operacion que devuelve la funcion
*/

resultado =SumarFuncionTipoFlecha(8,2);
console.log(resultado);


/******************************************************************************
 ******************************************************************************/

// *! Parametros y Argumentos en funciones Java Script

/* 
    * Parametros: es la lista de variables que definimos en la funcion
    * Argumentos: son los valores que pasamos al mandar a llamar una funcion.
    * 
    * Los argumentos sobreescriben el valor de los parametros ya definidos.
    * 
    * podemos agregar argumentos aunque no se hhayan definido mas parametros.
*/

let suma = function (a = 6, b = 9){
    console.log(arguments[0]);
    console.log(arguments[1]);
    console.log(arguments[2]);
    return a + b + arguments[2];
};

resultado = suma (4, 9, 7);
console.log(resultado);