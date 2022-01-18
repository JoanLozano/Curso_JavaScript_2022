// *!   CLASE OBJECT EN JAVASCRIPT

/*
    *   es una clase basica que hereda de forma atuomatica ciertos parametros o 
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

    NombreCompleto(){
        return this.nombre1 + ' ' + this.apellido1;
    }

    //Sobreescritura de la clase padre (Object)
    toString(){
        //se aplica polimorfismo (multiples formas en tiempo de ejcucion)
        return this.NombreCompleto();
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

    // SobreEscritura
    NombreCompleto() {
        return 'Ing. ' + super.NombreCompleto() + ' de ' + this.departamento1;
    }
}

//  TODO:   OBJETO DE CLASE PADRE
let persona = new Persona('Joan', 'lozano'); //creamos objetos con la clase anteriormente creada
console.log(persona); //get nombre
console.log(persona.toString()); 

//  TODO:   OBJETO DE CLASE HIJA
let empleado = new Empleado('Luis', 'Cardenas','Sistemas'); //creamos objetos con la clase anteriormente creada
empleado.nombre = 'Atinohael'; //Set nombre('Atinohael')
console.log(empleado.NombreCompleto()); //get nombre
console.log(empleado.toString()); 