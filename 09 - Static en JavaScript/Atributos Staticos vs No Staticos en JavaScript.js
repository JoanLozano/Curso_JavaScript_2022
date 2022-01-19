//  !   Atributos Staticos y no Staticos en JavaScript

/*
    *   Los atributos estaticos son atrbutos que estan atados a nuestra
    *   clase, y para llamarlos fuera de ella, debemos hacer un llamado
    *   a la clase antes de usarlo.
    * 
    *   por otro lado los atributos no estaticos, no se asocian a la
    *   clase, si no que se asocian a los metodos o funciones establecidas
    *   dentro de la clase, por lo que para usarlos, solo hace falta llamar
    *   al objeto que lo ejecuta.
*/

class padre{
    static ContadorUsos = 0;    //  ?   Atributo de Clase

    email = 'valor default';    //  ?   Atributo de Objeto

    constructor(nombre, apellido){
        this.nombre1 = nombre;
        this.apellido1 = apellido;
        padre.ContadorUsos++;

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
        return 'Ing. ' + this.nombre1 + ' ' + this.apellido1;
    }

    toString(){
        return this.nombreCompleto();
    }

    static saludo(){
        return console.log('Hola desde static');
    }

    static saludo1(){
        return console.log(padre.nombre);
    }
}

class hijo extends padre{
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
        return 'Ing. ' + super.nombreCompleto() + ', ' + this.titulo;
    }
}

let persona = new padre('Joan', 'Lozano');
console.log(persona.toString());
console.log(persona.nombreCompleto());

padre.saludo();
padre.saludo1(persona);
console.log(padre.ContadorUsos);

let persona1 = new hijo('Joan', 'Lozano', 'Sistemas');
persona1.nombre = 'Atinohael';
persona1.email = 'joan03lozano@hotmail.com';
console.log(persona1.nombreCompleto());
console.log(persona1.toString());


hijo.saludo();
hijo.saludo1(persona1);

console.log(hijo.ContadorUsos);


console.log(persona.email);
console.log(persona1.email);
console.log(padre.email);
console.log(hijo.email);