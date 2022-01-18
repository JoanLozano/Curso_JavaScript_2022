// *!   Uso de Prototype en JavaScript

/*
    *   para agregar parametros a el metodo constructor, lo hacemos
    *    mediante el uso de prototype, aginandole un valor iniciar, 
    *   para luego modificarlo en los objetos que creemos.
*/

//  *?  Declaracion del Metodo Constructor
function Persona(Nombre, Apellido, Email){
    this.Nombre = Nombre;
    this.Apellido = Apellido;
    this.Email = Email;
    this.NombreCompleto = function(){
        return this.Nombre + ' ' + this.Apellido;
    }
};

Persona.prototype.telefono = '';


//  *?  Implementacion del Metodo Contructor en el Objeto hijo del tipo persona
let hijo = new Persona('joan', 'lozano', 'joan03lozano@hotmail.com');
hijo.telefono = 75130512;
console.log(hijo.telefono);

//  *?  Implementacion del Metodo Contructor en el Objeto Madre del tipo persona
let Madre = new Persona('Angela', 'Hidalgo', 'amhidelo@yahoo.es');
console.log(Madre.telefono);

