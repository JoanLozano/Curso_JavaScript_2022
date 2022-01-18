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