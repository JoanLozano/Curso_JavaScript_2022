//  !   PROMESAS EN JAVASCRIPT

/*
    *   Las promesas en JavaScript son practicamente funciones callbak
    *   que tienen varios estados, ejecuta un codigo ".then()" si la funcion se comple
    *   y otro codigo ".catch()" si se ejecuta con error.
*/


let promesa = new Promise((resolved, rejected) => { //  *Declaramos un objeto tipo Promesa, y asignamos parametros
    let expresion = false;   //  ?   Declaramos una expresion
    if (expresion){  //  ?   Evaluamos si la expresion se cumple
        resolved('se resolvio correcto');
    }else{                  //  ?   Si no se cumple
        rejected('se produjo un error');
    };
});    

//  TODO    METODO THEN
promesa.then(   //  Llamada al Objeto Promesa
    argumentoresolve => console.log(argumentoresolve),    //Primer Argumento
    argumentorejected => console.log(argumentorejected)     //  Segundo Argumento
);

//  TODO    METODO CATCH
promesa     //  Llamamos a la promesa
    .then(argumentoresolve => console.log(argumentoresolve))   //   Si se cumple
    .catch(argumentorejected => console.log(argumentorejected));    //  Si no se Cumple
