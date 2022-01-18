// *! Metodos Get en Objetos de JavaScript

/* 
    *   para obtener los valores de una funcion como propiedad
    *   debemos establecer la Funcion dentro del objeto con la
    *   palabra Get, y eliminando la Palabra reservada Fuction
    *   sin eliminar los "()" encaso de hayan establecido
    *   parametros, asi a la hora de imprimir la funcion, no
    *   deberemos agregar parentesis para que imprima sus
    *   argumentos
*/

// TODO:   Declaracion de Objetos
let Persona = {
    Nombre: 'Joan',
    Apellido: 'Lozano',
    Email: 'joan03lozano@hotmail.com',
    Edad: 24,
    get NombreCompleto() {
        return this.Nombre + ' ' + this.Apellido;
    }
};

// TODO: Imprimir los parametros de una Funcion de Objeto
console.log(Persona.NombreCompleto);