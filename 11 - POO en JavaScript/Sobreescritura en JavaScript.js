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

let empleado1 = new Empleado('Carlos', 200);
console.log(empleado1.obtenerDetalles())

let gerente1 = new Gerente ('Joan', 500, 'sistemas');
console.log(gerente1);

console.log(gerente1.obtenerDetalles());
