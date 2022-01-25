const MostrarReloj = () => {
    let fecha = new Date();
    let hora = formatoHora(fecha.getHours());
    let min = formatoHora(fecha.getMinutes());
    let sec = formatoHora(fecha.getSeconds());

    document.getElementById('hora').innerHTML = `${hora}: ${min}: ${sec}`;
    
    const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre', ]
    const dias = ['Dom', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado']

    let diaSemana = dias[fecha.getDay()];
    let dia = fecha.getDate();
    let mesAnno = meses[fecha.getMonth()];
    let anio = fecha.getFullYear();

    document.getElementById('fecha').innerHTML = `${diaSemana} ${dia} de ${mesAnno} del ${anio}`;

    document.getElementById('contenedor').classList.toggle('animar');
}

const formatoHora = (hora) =>{
    if (hora < 10)
        hora = '0' + hora;
    return hora;
}

setInterval(MostrarReloj,1000);


