// *! Objetos con Metodos y Funciones

/* 
    *   Un objeto es una colección de datos relacionados y/o
    *   funcionalidad (que generalmente consta de algunas
    *   variables y funciones, que se denominan propiedades y
    *   métodos cuando están dentro de objetos).
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

// TODO:   Acceder los atributos del objeto
console.log(Persona.Nombre);
console.log(Persona.Apellido);
console.log(Persona.Edad);
console.log(Persona.Email);

// TODO:    Aceder a una Funcion de un Objeto
console.log(Persona.NombreCompleto());
