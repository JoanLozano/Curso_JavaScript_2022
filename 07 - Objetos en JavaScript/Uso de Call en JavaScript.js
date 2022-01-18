// *!   Uso de Call en JavaScript

/*
    *   El metodo Call sirve para hacer uso de funciones establecidas
    *   en un objeto a, con los datos de un objeto b para ello hacemos
    *   uso de la linea siguiente "ObjetoA.Nombre_Funcion.call(ObjetoB);"
*/

let persona1 = {
    nombre: 'Mariela',
    apellido: 'Hidalgo',
    nombrecompleto: function (){
        return this.nombre + " " + this.apellido;
    }
}

let persona2 = {
    nombre: 'Clara',
    apellido: 'Lozano',
}

//*?   Uso de Call para usar el metodo persona1, con los datos de persona2

persona1.nombrecompleto.call(persona2);


console.log(persona1.nombrecompleto());
console.log(persona1.nombrecompleto.call(persona2));