// *!   Agregar Metodos al Metodo Constructor de Objetos

/*
    *   Primero creamos una funcion constratuctora, y dentro de la misma declaramos ontra funcion.
    *   para llamarla a ejecucion, lo hacemos como con otras funciones, nombrando el atributo.
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

//  *?  Implementacion del Metodo Contructor en el Objeto hijo del tipo persona
let hijo = new Persona('joan', 'lozano', 'joan03lozano@hotmail.com');
console.log(hijo.NombreCompleto());

hijo.Nombre = 'Atinohael';

console.log(hijo.NombreCompleto());
