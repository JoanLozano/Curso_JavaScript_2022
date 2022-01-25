console.log('ya funciona');

function sumar(){
    const forma = document.getElementById('forma');
    let OperandoA = forma['OperandoA'];
    let OperandoB = forma['OperandoB'];
    let resultado =parseInt(OperandoA.value) + parseInt(OperandoB.value);
    document.getElementById('Resultado').innerHTML = `Resultado: ${resultado}`;
}

function restar(){
    const forma = document.getElementById('forma');
    let OperandoA = forma['OperandoA'];
    let OperandoB = forma['OperandoB'];
    let resultado =parseInt(OperandoA.value) - parseInt(OperandoB.value);
    document.getElementById('Resultado').innerHTML = `Resultado: ${resultado}`;
}

function multiplicar(){
    const forma = document.getElementById('forma');
    let OperandoA = forma['OperandoA'];
    let OperandoB = forma['OperandoB'];
    let resultado =parseInt(OperandoA.value) * parseInt(OperandoB.value);
    document.getElementById('Resultado').innerHTML = `Resultado: ${resultado}`;
}

function dividir(){
    const forma = document.getElementById('forma');
    let OperandoA = forma['OperandoA'];
    let OperandoB = forma['OperandoB'];
    let resultado =parseInt(OperandoA.value) / parseInt(OperandoB.value);
    document.getElementById('Resultado').innerHTML = `Resultado: ${resultado}`;
}