function miFuncion(){
    console.log('saludos desde mi funcion');
}

miFuncion();


// !    SINAXIS NORMAL  
const funcionflecha = () => {
    console.log('saludos desde mi funcion flecha');
}

// !    SINAXIS SIN ABRIR EL CUERPO DE LA FUNCION
const mifuncionflecha = () => console.log('saludos desde mi funcion flecha contraida')


// !    SINAXIS CON CUERPO DE LA FUNCION Y RETURN
const saludoflecha = () => {
    return 'saludos desde funcion flecha';
}

// !    SINAXIS CORTA SIN RETURN
const saludo = () => 'saludos desde funcion flecha contraida';


//  !   SINTAXIS DE REGRESO
const regresaobjeto = () => ({nombre: 'Joan', apellido: 'Lozano'});

//  !   SINTAXIS CON PARAMETROS
const funcionconparametros = (mensaje) => console.log(mensaje);

//  !   SINTAXIS CON UN SOLO PARAMETRO
const funcionconunparametro = mensaje => console.log(mensaje);

//  !   SINTAXIS CON OPERACIONES
const funcionmuchosparametros = (n1, n2) => console.log('suma: ' + (n1+n2))


funcionflecha();
mifuncionflecha();
console.log(saludoflecha());
console.log(saludo());
console.log(regresaobjeto());
funcionconparametros('saludos desde funcion con parametros');
funcionconparametros('saludos desde funcion con un parametro');
funcionmuchosparametros(3,5);