class Persona{
    static ContadorUsos = 0;

    static get maxObj(){
        return 5;
    }

    constructor(nombre, apellido){
        this.nombre1 = nombre;
        this.apellido1 = apellido;
        if(Persona.ContadorUsos < Persona.maxObj){
            this.idPersona = ++Persona.ContadorUsos;
        }
        else{
            console.log('Se supero el maximo de objetos permitidos');
        }
        
    }

    get nombre(){
        return this.nombre
    }

    set nombre(nombre){
        this.nombre1 = nombre;
    }

    get apellido(){
        return this.apellido
    }

    set apellido(apellido){
        this.apellido1 = apellido;
    }

    nombreCompleto(){
        return this.idPersona + ' ' + this.nombre1 + ' ' + this.apellido1;
    }

    toString(){
        return this.nombreCompleto();
    }

    static saludo(){
        return console.log('Hola desde static');
    }

    static saludo1(){
        return console.log(Persona.nombre);
    }
}

class Empleado extends Persona{
    constructor(nombre, apellido, titulo){
        super(nombre, apellido);
        this.titulo1 = titulo;
    }

    get titulo(){
        return this.titulo1
    }

    set titulo(titulo){
        this.titulo1 = this.titulo;
    }

    nombreCompleto(){
        return super.nombreCompleto() + ', ' + this.titulo;
    }
}

let persona = new Persona('Juan', 'Perez');
console.log(persona.toString());

let persona1 = new Empleado ('Joan', 'Lozano', 'Sistemas');
console.log(persona1.toString());

console.log(Persona.ContadorUsos);

let persona2 = new Persona('Karla', 'Ramirez');
console.log(persona2.toString())

console.log(Persona.ContadorUsos);

let persona3 = new Persona('Franciso', 'Mesa');
console.log(persona3.toString())

let persona4 = new Persona('Marcela', 'Gonzales');
console.log(persona4.toString())

let persona5 = new Persona('Luis', 'Marcelo');
console.log(persona5.toString())



console.log(Persona.maxObj);
//  TODO    aunque intentemos aumentar el valor de la variable estatica
//  TODO    no cambiara el valor por que no se definio un metodo set
Persona.maxObj =10;
console.log(Persona.maxObj);