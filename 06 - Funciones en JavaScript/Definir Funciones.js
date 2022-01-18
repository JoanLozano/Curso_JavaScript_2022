// *? Llamada de la funcion
// * puede llamar la funcion antes de definirla
MiFuncion (2,4)


// *! Definir funciones

/*
    * las funciones cuentan con parametros establecidos, es decir, la cantidad de varibles que usara.

*/
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

