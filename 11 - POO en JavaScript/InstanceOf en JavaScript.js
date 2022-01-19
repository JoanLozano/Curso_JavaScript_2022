class Empleado{
    constructor(nombre, sueldo){
        this.nombre = nombre;
        this.sueldo = sueldo;
    }

    obtenerDetalles(){
        return `Empleado: Nombre: ${this.nombre}, Sueldo: $${this.sueldo}`;
    }

}

class Gerente extends Empleado{
    constructor(nombre, sueldo, departamento){
        super(nombre, sueldo);
        this.departamento = departamento;
    }
    obtenerDetalles(){
        return `Gerente: ${super.obtenerDetalles()} Departamento: ${this.departamento}`;
    }
}

function DeterminarTipo(tipo){    // funcion independiente de clases
    console.log(tipo.obtenerDetalles()); //dependiendo de cual clase se use, apuntara a un metodo u otro
    if (tipo instanceof Gerente){       //evaluamos a que instancia pertenece,  //TODO siempre debemos evaluar la clase de menor gerarquia a la superior
        console.log('Objeto tipo Gerente'); //si es una de tipo hijo, mostrara su nombre
        console.log(tipo.departamento);
    }
    else if (tipo instanceof Empleado){
        console.log('Objeto tipo Empleado'); // si es una de tipo padre, nos lo dira.
        console.log(tipo.nombre);
    }
    else if (tipo instanceof Object){
        console.log('Objeto tipo Object'); // si es una de tipo padre, nos lo dira.
    }    
}

let empleado1 = new Empleado('Carlos', 200);

let gerente1 = new Gerente ('Joan', 500, 'sistemas');

DeterminarTipo(empleado1); //Obtenemos la ejecucion de la clase padre

DeterminarTipo(gerente1); //Obtenemos la ejecucion de la clase hijo
