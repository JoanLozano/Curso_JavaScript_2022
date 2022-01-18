//  *!  OPERADORES ARITMETICOS

/*  
    *   Boolean representa una entidad lógica y puede tener
    *   dos valores: true y false. Consulta Boolean y Boolean
    *   para obtener más detalles.
*/


/*****************************************************************************
 *****************************************************************************/
//  *?  OPERADOR ARITMETICO SUMA
/*  
    *   es representado con el signo "+", y es usado para
    *   concatenar, o sumar variables o datos
*/
let Numero1 = 5, Numero2 =24;
let Suma = Numero1 + Numero2;
console.log ("La Suma de los Numeros " + Numero1 + " y " + Numero2 + " es igual a: " + (Numero1+Numero2));


/*****************************************************************************
 *****************************************************************************/
//  *?  OPERADOR ARITMETICO RESTA
/*  
    *   es representado con el signo "-", y es usado para
    *   restar valores de variables o datos
*/

let Resta = Numero2 - Numero1;
console.log (Resta);


/*****************************************************************************
 *****************************************************************************/
//  *?  OPERADOR ARITMETICO DIVISION
/*  
    *   es representado con el signo "/", y es usado para
    *   Dividir dos números, obtiene un cociente de coma flotante
*/

let Division = Numero2 / Numero1;
console.log (Division);


/*****************************************************************************
 *****************************************************************************/
//  *?  OPERADOR ARITMETICO Modulo ARITMETICO
/*  
    *   es representado con el signo "%", y es usado para
    *   Dividir dos números, obtiene un cociente entero 
*/

let ModuloAritmetico = Numero2 % Numero1;
console.log (ModuloAritmetico);


/*****************************************************************************
 *****************************************************************************/
//  *?  OPERADOR ARITMETICO MULTIPLICACION
/*  
    *   es representado con el signo "*", y es usado para
    *   Multiplicar dos números.
*/

let Multiplicacion = Numero2 * Numero1;
console.log (Multiplicacion);


/*****************************************************************************
 *****************************************************************************/
//  *?  OPERADOR ARITMETICO INCREMENTO
/*  
    *   es representado con el signo "++", si se usa antes del valor
    *   a incrementar, se obtendra el valor siguiente superio, caso contrario,
    *   se mandendra el valor, hasta la siguiente iteracion si se hace en una
    *   estructura ciclica.
*/

let Incremento = ++ Numero1;
console.log (Incremento);

let Incremento2 = Numero2++;
console.log (Incremento2);


/*****************************************************************************
 *****************************************************************************/
//  *?  OPERADOR ARITMETICO DECREMENTO
/*  
    *   es representado con el signo "--", si se usa antes del valor
    *   a incrementar, se obtendra el valor siguiente superio, caso contrario,
    *   se mandendra el valor, hasta la siguiente iteracion si se hace en una
    *   estructura ciclica.
*/

let Decremento = --Numero1;
console.log (Decremento);

let Decremento2 = Numero2--;
console.log (Decremento2);

