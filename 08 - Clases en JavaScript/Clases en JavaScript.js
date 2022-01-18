// *!   CLASES EN JAVASCRIPT

/*
    *   Una clase consta de ciertos elementos, tales como: nombre, 
    *   atributos y metodos, se puede decir que una clase es una plantilla
    *   para crear objetos en javascript
*/

class Persona{
    constructor(nombre, apellido, edad, tel, email){ //creamos un constructor que servira como una plantilla de objeto
        this.nombre = nombre; //Creamos una propiedad que tomara el valor establecido en los parametros arriba nombrados
        this.apellido = apellido;
        this.edad = edad;
        this.tel = tel;
        this.email = email;
    }
}

let persona1 = new Persona('joan', 'lozano', 24, 75130512, 'joan03lozano@hotmail.com'); //creamos objetos con la clase anteriormente creada
console.log(persona1);

let persona2 = new Persona('Luis', 'Mata', 16, 12345678, 'lmata@gmail.com');
console.log(persona2);
