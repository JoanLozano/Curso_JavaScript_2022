// *! Objetos en JavaScript

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
    Edad: 24
};


// TODO:   Acceder las Propiedades del objeto
console.log(Persona.Nombre);
console.log(Persona.Apellido);
console.log(Persona.Edad);
console.log(Persona.Email);


/******************************************************************************
 ******************************************************************************/

// TODO:    Otra forma de declarar un Objeto

/*
    *   con este forma, primero creamos un objeto vacio, para
    *   reservar espacio de memoria, y luego agregamos las
    *   propiedades y metodos del objeto.
*/

let Persona2 = new Object();
Persona2.Nombre = 'Cristina';
Persona2.Direccion = 'Ciudad Real Oriente';
Persona2.Telefono = '75130512';


// TODO:   Acceder las propiedes del objeto
console.log(Persona2.Nombre);
console.log(Persona2.Direccion);
console.log(Persona2.Telefono);
