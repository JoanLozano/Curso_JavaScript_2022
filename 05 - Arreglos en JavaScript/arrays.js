/*
 * Forma sin uso actual
 * let auto = new Array("BMW","mercedes Benz", "Volvo");
 */


// *! Forma de Declarar Arreglos Actual
const auto = ["BMW","mercedes Benz", "Volvo"];
console.log(auto);

// *! Recorrer Elementos de un Arreglo
/*
 * Los elementos del arreglo se enumeran del 0 al infinito
 * segun la posiscion del elemento en el arreglo

*/
console.log(auto[0]);
console.log(auto[1]);
console.log(auto[2]);

//imprimir los valores del arreglo en un ciclo for

for (let i = 0; i < auto.length; i++) {
    console.log(i + ' : ' + auto[i]);
    
}

// *! Modificar los Elementos de un Arreglo
auto[1] = "Kia"
console.log(auto[1]);

// *! Agregar Elemento al final del arreglo
auto.push('Audi', 'Lotus');
console.log(auto);

// * imprimir la cantidad de elementos del arreglo
console.log(auto.length);

// *!Agregar elementos sin dejar valores vacios cuando no conocemos el tamano del arreglo
auto[auto.length] = 'cadillac';
console.log(auto);

// * Verificar si el elemto es un arreglo
console.log(Array.isArray(auto));
console.log(auto instanceof Array);

