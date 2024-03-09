const $botonCalcularSalarioMensual = document.querySelector("#calcular-salario-mensual");

$botonCalcularSalarioMensual.onclick = function(event){
    const salarioAnualUsuario = Number(document.querySelector("#salario-anual").value);
    let salarioMensual = calcularSalarioMensual(salarioAnualUsuario);

    document.querySelector("#salario-mensual").value = salarioMensual;
    event.preventDefault();
}

function calcularSalarioMensual(salarioAnual){
    return salarioAnual / 12;
}