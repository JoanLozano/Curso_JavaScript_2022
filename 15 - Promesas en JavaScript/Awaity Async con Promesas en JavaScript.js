//  !   AWAIT Y ASYNC CON PROMESAS EN JAVASCRIPT

async function promesaAwait(){
    let mipromesa = new Promise(resolved => {
        resolved('Promesa con Await');
    })
    console.log(await mipromesa);
}

promesaAwait();