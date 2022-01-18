// *! Agregar y Eliminar Propiedades a Objetos en JavaScript

/* 
    *   Para agregar propiedades a un objetos, simplemente
    *   basta con llamar el objeto, seguido del nombre de
    *   la nueva propiedad y su valor.
    * 
    *   Para Eliminar propiedades a un objeto, simplemente
    *   basta con usar la palabra reservada "delete" seguido
    *   de el nombre del objeto, y la propiedad que queremos
    *   eliminar

*/

// TODO:   Declaracion de Objetos
let Persona = {
    Nombre: 'Joan',
    Apellido: 'Lozano',
    Email: 'joan03lozano@hotmail.com',
    Edad: 24,
    NombreCompleto: function () {
        return this.Nombre + ' ' + this.Apellido;
    }
};

// TODO:   Agregar Propiedades a Objetos
Persona.Telefono = 75130512;
console.log(Persona);

// TODO:   Eliminar Propiedades a Objetos
delete Persona.Telefono;
console.log(Persona);

