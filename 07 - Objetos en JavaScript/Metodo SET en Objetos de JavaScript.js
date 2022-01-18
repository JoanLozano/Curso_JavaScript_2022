// *! Metodo SET en Objetos de JavaScript

/* 
    *   Primero debemos establecer establecer una funcion Get
    *   que retorne un dato del objeto a modificar, y luego
    *   dentro del objeto, establecemos SET, para modificar 
    *   el valor
*/

// TODO:   Declaracion de Objetos
let Persona = {
    Nombre: 'Joan',
    Apellido: 'Lozano',
    Email: 'joan03lozano@hotmail.com',
    Edad: 24,
    Idioma: 'en',
    get Lang(){
        return this.Idioma.toUpperCase();
    },
    set Lang(Lang){
        this.Idioma = Lang.toUpperCase();
    },
    get NombreCompleto() {
        return this.Nombre + ' ' + this.Apellido;
    }
};

// TODO:    Imprimir los parametros de una Funcion de Objeto
console.log(Persona.Lang);


// TODO:    Comprobamos que el Metodo Set se este Ejecutando
Persona.Lang = 'es';
console.log(Persona.Lang);
console.log(Persona.Idioma)
