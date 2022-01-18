// *!  HOISTING Y CLASES EN JAVASCRIPT

/*
    *   Una clase consta de ciertos elementos, tales como: nombre, 
    *   atributos y metodos, se puede decir que una clase es una plantilla
    *   para crear objetos en javascript
    *   no podemos crear objetos antes de declarar la clase
    *   no se aplica el concepto de Hoisting 
*/

let persona2 = new Persona('Karla', 'Juarez'); //no es posible por que esta antes de la creacion de la clase

class Persona{
    constructor(nombre, apellido){ //creamos un constructor que servira como una plantilla de objeto
        this.nombre1 = nombre; //Creamos una propiedad que tomara el valor establecido en los parametros arriba nombrados
        this.apellido1 = apellido;
    }
    
    get nombre(){
        return this.nombre1;
    }

    set nombre(nombre){
        this.nombre1 = nombre;
    }
}

let persona1 = new Persona('Joan', 'lozano'); //creamos objetos con la clase anteriormente creada
console.log(persona1.nombre); //get nombre

persona1.nombre = 'Atinohael'; //Set nombre('Atinohael')
console.log(persona1.nombre);//Get nombre
