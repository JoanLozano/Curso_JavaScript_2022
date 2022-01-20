async function awaitTimeOut (){
    console.log('inicio de funcion');
    let mipromesa = new Promise(resolved => {
        setTimeout(() => resolved('Promesa con Await y TimeOut'), 3000);
    });
    console.log(await mipromesa);
    console.log('Fin de la Funcion');
}

awaitTimeOut();