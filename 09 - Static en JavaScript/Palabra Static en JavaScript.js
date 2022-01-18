// *!   Static EN JAVASCRIPT

/*
    *   es una clase basica que hereda de forma atuomatica ciertos parametros o 
*/


//  TODO:   CLASE PADRE
class Persona{  

    static ContadorObjetosPersona = 0;

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
    
    static saludo (){
        console.log('Saludos desde Static')
    }

    static saludo2(){
        console.log(persona.nombre)
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

//  TODO    LLAMADA AL METODO ESTATIC
//persona.saludo(); //*?no es posible llamar un metodo estic desde un objeto
Persona.saludo();  //*? se puede llamar directamente en la clase


let persona = new Persona('Joan', 'lozano'); //creamos objetos con la clase anteriormente creada
console.log(persona.toString()); 

Persona.saludo2(persona);