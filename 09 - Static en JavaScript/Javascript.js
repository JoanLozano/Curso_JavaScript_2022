//  !   EJEMPLO DE CLASES, METODOS HEREDADOS Y STATIC EN JAVASCRIPT

class padre{        //  !Declaracion de La clase padre
    static ContadorUsos = 0;    //  Declaracion de atributo de Clase "ContadorUsos"

    constructor(nombre, apellido){  //  ?   Declaracion de una funcion constructor con sus atributos "nombre y apellido";
        this.nombre1 = nombre;  //  ?   Declaracion del argumento nombre1 con la asginacion del atributo nombre
        this.apellido1 = apellido;  //  ?   Declaracion del argumento apellido1 con la asginacion del atributo apellido
        padre.ContadorUsos++;   //  ?   Usamos el atrbuto "ContadorUsos" y sumanos en 1 segun el numero de veces que se use

    }

    get nombre(){   //  !   Declaramos el metodo Get para el atributo nombre
        return this.nombre  //  ?   retornamos el valor obtenido de Nombre
    }

    set nombre(nombre){  //  !   Declaramos el metodo set para pasarle un nuevo valor al atributo ya establlecido nombre
        this.nombre1 = nombre;  //  ? cambiamos el valor al atributo nombre1 con el parametro nombre 
    }

    get apellido(){ //  !   Declaramos el metodo Get para el atributo apellido
        return this.apellido    //  ?   retornamos el valor obtenido de apelllido
    }

    set apellido(apellido){ //  !   Declaramos el metodo set para pasarle un nuevo valor al atributo ya establlecido apellido
        this.apellido1 = apellido;  //  ? cambiamos el valor al atributo apellido1 con el parametro apellido
    }

    nombreCompleto(){   //  !   Declaramos la funcion nombre completo sin establecer atributos
        return 'Ing. ' + this.nombre1 + ' ' + this.apellido1;   //  ?   Retornamos una linea que contiene la informacion concatenada del nombre y apellido.
    }

    toString(){     //  !   Declaramos la funcion o metodo toString 
        return this.nombreCompleto();   //  ?   
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
