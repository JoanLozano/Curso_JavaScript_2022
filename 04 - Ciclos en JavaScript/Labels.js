inicio:

for (let Contador = 1; Contador <= 10; Contador++) {
    if (Contador % 2 !==0 ) {
        continue inicio; //avanzar a la etiqueta inicio
    }
    else{
        console.log(Contador);
    }
}
