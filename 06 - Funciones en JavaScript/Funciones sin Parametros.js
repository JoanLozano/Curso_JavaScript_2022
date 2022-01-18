// *! funciones sin parametros, con argumentos

/*
    *   este tipo de funciones se definen sin parametros.
    *   sus argumentos son asignados mediante ciclos dentro de la funcion.
    *   por eso mismo, se pueden agregar tantos argumentos como se desee.
*/

let resultado = SumarTodo(10, 20, 30, 40, 50, 60);
console.log( resultado)

function SumarTodo() {
    let suma = 0;
    for (let i = 0; i < arguments.length; i++) {
        
        suma += arguments[i];
        console.log(arguments[i]);
    
    }
    return suma;

}