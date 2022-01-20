//  !   SETTIMEOUT Y PROMESAS EN JAVASCRIPT

/*
    *   Las promesas en JavaScript son practicamente funciones callbak
    *   que tienen varios estados, ejecuta un codigo ".then()" si la funcion se comple
    *   y otro codigo ".catch()" si se ejecuta con error.
*/


let promesa = new Promise((resolved) => { //  *Declaramos un objeto tipo Promesa, y asignamos parametros
    console.log('inicio promesa');
    setTimeout(() => resolved('Saludos con promesa y timeout'), 3000);
    console.log('Fin promesa');
});    

promesa.then(argumentoresolve => console.log(argumentoresolve));