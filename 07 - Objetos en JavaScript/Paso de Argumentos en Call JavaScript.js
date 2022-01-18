// *!   Uso Argumentos en Call JavaScript

/*
    *   el uso de argumentos en call sirve para agregar informacion a
    *   la funcion establecida en el objeto 1, con los datos del objeto 2
*/

let persona1 = {
    nombre: 'Mariela',
    apellido: 'Hidalgo',
    nombrecompleto: function (titulo, telefono){
        return titulo + ": " + this.nombre + " " + this.apellido + " " + telefono;
    }
}

let persona2 = {
    nombre: 'Clara',
    apellido: 'Lozano',
}

//*?   Uso de Call para usar el metodo persona1, con los datos de persona2

persona1.nombrecompleto.call(persona2);


console.log(persona1.nombrecompleto('Ing', 72568134));
console.log(persona1.nombrecompleto.call(persona2,'Licda', 12345678));