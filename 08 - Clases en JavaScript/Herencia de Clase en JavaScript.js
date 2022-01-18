// *!  CLASES padres e Hijas EN JAVASCRIPT

/*
    *   se pueden heredar los atributos de una clase a otra, 
    *   simplemente basta con hacer uso de la palabra reservada 
    *   extends, y agregar los parametros definidos en la clase padre
    *   con la palabra reservada "super()"
*/


//  TODO:   CLASE PADRE
class Persona{  
    constructor(nombre, apellido){ 
        this.nombre1 = nombre; 
        this.apellido1 = apellido;
    }
    
    get nombre(){
        return this.nombre1;
    }

    set nombre(nombre){
        this.nombre1 = nombre;
    }

    get apellido(){
        return this.apellido1;
    }

    set apellido(apellido){
        this.apellido1 = apellido;
    }
}

//  TODO:   CLASE HIJA
class Empleado extends Persona{
    constructor(nombre, apellido, departamento){ //agregamos los atributos de la clase hija
        super(nombre,apellido); //encadenamos los parametros heredados a la clase padre
        this.departamento1 = departamento;
    }
    
    get departamento(){
        this.departamento1 = departamento;
    }

    set departamento(departamento){
        this.departamento1 = departamento;
    }
}

//  TODO:   OBJETO DE CLASE PADRE
let persona = new Persona('Joan', 'lozano'); //creamos objetos con la clase anteriormente creada
console.log(persona); //get nombre

//  TODO:   OBJETO DE CLASE HIJA
let empleado = new Empleado('Luis', 'Cardenas','Sistemas'); //creamos objetos con la clase anteriormente creada
console.log(empleado); //get nombre