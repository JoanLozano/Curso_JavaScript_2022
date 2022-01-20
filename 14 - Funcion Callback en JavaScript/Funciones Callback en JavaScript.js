'use stricts'

//  !   FUNCIONES DE TIPO CALLBACK

function Imprimir(mensaje){ //  ?   Funcion Inicial
    console.log(mensaje);   //  TODO   Imprime el valor de la funcion Callback
}

//  ?   Funcion Callback
function sumar(n1, n2, imprimir){ //  ?   Funcion Callback
    let suma = n1 + n2; //  *   Valores de Operacion
    imprimir(`resultado: ${suma}`); //  ?   llamamos a la funcion Imprimir dentro del parametro imprimir
}


//  ?   Asignamos valores a nuestra funcion sumar, incluyendo el valor de la funcion Imprimir
sumar(5,3, Imprimir);

