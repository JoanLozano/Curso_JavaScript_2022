// *! Funciones como Objetos

/*
    * son funciones nomales, usadas como objetos,
    * pueden imprimirse a si mismas, es decir,
    *  imprimir el procedimiento o estuctura de la funcion.  
*/

function MiFuncion(a, b) {
    console.log(arguments.length)
    return a + b;
};

console.log(typeof MiFuncion);

var MiFuncionTexto = MiFuncion.toString();
console.log(MiFuncionTexto);