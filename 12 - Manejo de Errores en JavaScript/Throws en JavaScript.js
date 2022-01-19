'use strict'

try{ //Captura el error para no detener la ejecucion
    let x = 10;
    //miFuncion();
    throw 'mi error';   //Lanza una excepción definida por el usuario.
}

catch(error){ //Mostramos el error que se capturo
    console.log(error);
}

finally{    //  sentencia que se ejecuta luego de la ejecucion
    console.log("Revision finalizada")
}

console.log('continuamos...');


let resultado = 5;
try {
    if(isNaN(resultado)){
        throw'no es un numero';
    }else if(resultado === ''){
        throw'es una cadena vacia';
    }else if(resultado < 0){
        throw'es un valor negativo';
    }else if(resultado > 0){
        throw'es un valor positivo';
    }
} catch (error) {
    console.log(error);
    //console.log(error.name);
    //console.log(error.message);
    
}
finally{
    console.log("Termina revision de errores");
}