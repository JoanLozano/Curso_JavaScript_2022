// *! FORMAS DE ACCEDER A LAS PROPIEDADES DE UN OBJETO

/* 
    *   Existen diversas formas de acceder
    *   a las propiedes de un objetos.
*/

// TODO:   Declaracion de Objetos con Funciones
let Persona = {
    Nombre: 'Joan',
    Apellido: 'Lozano',
    Email: 'joan03lozano@hotmail.com',
    Edad: 24,
    NombreCompleto: function () {
        return this.Nombre + ' ' + this.Apellido;
    }
};

// TODO:   Acceder las propiedes del objeto
console.log(Persona.Nombre);
console.log(Persona.Apellido);
console.log(Persona.Edad);
console.log(Persona.Email);

// TODO:    Aceder a una Funcion de un Objeto
console.log(Persona.NombreCompleto());


/******************************************************************************
 ******************************************************************************/

// TODO:    Acceder a las propiedades de un Objeto es como una matriz

console.log(Persona['Nombre']);

for (NombrePropiedad in Persona) {
    console.log(NombrePropiedad);
    console.log(Persona[NombrePropiedad])
};
