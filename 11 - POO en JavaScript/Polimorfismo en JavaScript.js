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

function imprimir(tipo){    // funcion independiente de clases
    console.log(tipo.obtenerDetalles());     //dependiendo de cual clase se use, apuntara a un metodo u otro
}

let empleado1 = new Empleado('Carlos', 200);

let gerente1 = new Gerente ('Joan', 500, 'sistemas');

imprimir(empleado1); //Obtenemos la ejecucion de la clase padre

imprimir(gerente1); //Obtenemos la ejecucion de la clase hijo
