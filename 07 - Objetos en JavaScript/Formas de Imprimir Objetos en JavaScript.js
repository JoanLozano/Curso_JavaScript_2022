// *! Formas de Imprimir Objetos en JavaScript

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

// TODO:    Imprime todos los atributos, menos las Funciones.
console.log(Persona);


// TODO:    Imprime los atributos que deseamos, concatenando
console.log(Persona.Nombre + ", " + Persona.Apellido)


// TODO:    Usando Forin imprime todo los valres como un array
for (Propiedes in Persona){
    console.log(Persona[Propiedes]);
}

// TODO:    Usando Object Values
let PersonaArray =  Object.values(Persona);
console.log(PersonaArray);

// TODO:    Usando JSON stringify para imprimir el objeto como una cadena (No imprime la funcion)
let PersonaString = JSON.stringify(Persona);
console.log(PersonaString)

// TODO:    Imprimir las Funciones de un Objeto
let PersonaFuncion = Persona.NombreCompleto();
console.log(PersonaFuncion)
