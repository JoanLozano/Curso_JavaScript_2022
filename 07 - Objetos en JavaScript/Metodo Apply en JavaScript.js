// *!   Metodo Apply en JavaScript

/*
    *   el uso de aplly sirve para agregar informacion a la funcion
    *   establecida en el objeto 1, con los datos del objeto 2, esta vez
    *   haciendo uso de un arreglo para mostrar los datos
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

//*?   Uso de Apply para usar el metodo persona1, con los datos de persona2
persona1.nombrecompleto.apply(persona2);


console.log(persona1.nombrecompleto('Ing', 87654321));

let arreglo = ['Licda', 12345678]
console.log(persona1.nombrecompleto.apply(persona2, arreglo));