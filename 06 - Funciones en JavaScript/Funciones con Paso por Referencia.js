// *! Funciones con Paso por Referencia

//valor tipo primitivo
let x = 10;

/*  el valor de x no cambia, ya que a solo toma el valor de x y lo reemplaza para ella misma (a)
    sin embargo x no toma el valor de a, si no que mantiene el valor primitivo (10)
    para cambiar el valor de x, la funcion tendria que redefinir x asignandole el valor modificado de a.
    al final de la ejecucion del metodo, el valor de A, es destruido.
*/

function cambiarValor (a){
    a = 20;
    return;
}

//paso por valor
cambiarValor (x); //10
console.log(x);
//console.log(a);

const persona = {
    nombre: "joan",
    apellido: "Lozano"
};

function CambiarValorObjeto(p1) {
    p1.nombre = 'Atinohael';
    p1.apellido = 'Hidalgo';
};

//Paso por Referencia
CambiarValorObjeto(persona);
console.log(persona);

