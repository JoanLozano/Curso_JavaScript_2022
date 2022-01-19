'use strict'

try{ //Captura el error para no detener la ejecucion
    let x = 10;
    //miFuncion();
}

catch(error){ //Mostramos el error que se capturo
    console.log(error);
}

finally{    //  sentencia que se ejecuta luego de la ejecucion
    console.log("Revision finalizada")
}

console.log('continuamos...');