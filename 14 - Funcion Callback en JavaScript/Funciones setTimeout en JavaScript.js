'use stricts'

//  !   FUNCIONES ASINCRONAS CON USO SETTIMEOUT

function funcioncallback(){ //Funcion CallBack a usar
    console.log('mensaje asincrono'); //Mensaje Asincrono
}

setTimeout(funcioncallback, 3000);  //Funcion setTimeout (funcion para ejecucion a tiempo programado);

setTimeout(function(){console.log('saludo 2')}, 6000);

setTimeout( () => console.log('saludo 3'), 9000);