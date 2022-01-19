//  !   EJEMPLO DE CLASES, METODOS HEREDADOS Y STATIC EN JAVASCRIPT

class padre{
    static ContadorUsos = 0;

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
console.log(persona1.nombreCompleto());
console.log(persona1.toString());


hijo.saludo();
hijo.saludo1(persona1);

console.log(hijo.ContadorUsos);
