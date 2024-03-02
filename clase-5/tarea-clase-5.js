const $botonCalcularSalarioMensual = document.querySelector("#calcular-salario-mensual");

$botonCalcularSalarioMensual.onclick = function(){
    const $salarioAnualUsuario = Number(document.querySelector("#salario-anual").value);
    let salarioMensual = calcularSalarioMensual($salarioAnualUsuario);

    document.querySelector("#salario-mensual").value = salarioMensual;
    return false;
}

function calcularSalarioMensual(salarioAnual){
    return salarioAnual / 12;
}