'user stricts'

let reloj = () => {     // Declaracion de la funcion CallBack
    let fecha = new Date(); //Declaramos una variable de uso
    console.log(`${fecha.getHours()}:${fecha.getMinutes()}:${fecha.getSeconds()}`)//imprimimos la variable de uso
}

setInterval(reloj,1000);   // usamos la funcion setInterval , llamamos la funcion cancelIdleCallback, y asignamos el intervalo de ejecucion
