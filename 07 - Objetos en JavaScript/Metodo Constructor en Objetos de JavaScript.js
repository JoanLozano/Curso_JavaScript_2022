// *!   Funcion Constructor de Objetos

/*
    *   Primero creamos una funcion constratuctora, o modelo base, del cual, los objetos que
    *   creamos tomaran referencia para su ejecucion
*/

//  *?  Declaracion del Metodo Constructor
function Persona(Nombre, Apellido, Email){
    this.Nombre = Nombre;
    this.Apellido = Apellido;
    this.Email = Email;
};

//  *?  Implementacion del Metodo Contructor en el Objeto hijo del tipo persona
let hijo = new Persona('joan', 'lozano', 'joan03lozano@hotmail.com');
console.log(hijo);

//  *?  Implementacion del Metodo Contructor en el Objeto Madre del tipo persona
let Madre = new Persona('Angela', 'Hidalgo', 'amhidelo@yahoo.es');
console.log(Madre);

hijo.Nombre = 'Atinohael';

console.log(hijo);
console.log(Madre);
