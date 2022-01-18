// *! Funciones Self Invoking - Funciones Anonimas

/* 
    * las funciones Self Invoking o Funciones Anonimas,
    * son funciones que se invocan a si misma, y solo pueden se usados una vez,
    * normamente se usan al cargar una pagina o sitio web.
*/
(function (x,y) {
    console.log("ejecutando la funcion " + (x + y));
})(8,2);
