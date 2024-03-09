let menorSalario;
let mayorSalario = 0;

let sumaSalarios = 0;
let sumaCantidadSalarios = 0;
let promedioSalariosAnuales;
let promedioSalariosMensuales;

function calcularSalariosAnuales($salarioAnualIntegrante) {
    for (let i = 0; i < $salarioAnualIntegrante.length; i++) {
        let salario = Number($salarioAnualIntegrante[i].value);

        if (i === 0) {
            menorSalario = Number($salarioAnualIntegrante[0].value);
        }

        if (salario !== "") {
            sumaSalarios += salario;
            sumaCantidadSalarios++;

            calcularMenorSalarioAnual(salario);
            calcularMayorSalarioAnual(salario);  
        }
        
    }

    let totalPromedioAnual = calcularPromedioSalariosAnuales(sumaSalarios, sumaCantidadSalarios);
    let totalPromedioMensual = calcularPromedioSalariosMensual(sumaSalarios, sumaCantidadSalarios);

    return document.querySelector("#resultados").textContent = `El mayor salario anual es $${mayorSalario}, 
    el menor salario anual es $${menorSalario}, el promedio anual entre salarios es de $${totalPromedioAnual} 
    y el promedio mensual entre salarios es de $${totalPromedioMensual}`;

}

function calcularMayorSalarioAnual(salario) {

    if (salario > mayorSalario) {
        return mayorSalario = salario;
    }
}

function calcularMenorSalarioAnual(salario) {
    if (salario < menorSalario) {
        return menorSalario = salario;
    }
}

function calcularPromedioSalariosAnuales(sumaSalarios, sumaCantidadSalarios) {
    return promedioSalariosAnuales = sumaSalarios / sumaCantidadSalarios;
}

function calcularPromedioSalariosMensual(sumaSalarios, sumaCantidadSalarios) {
    return promedioSalariosMensuales = (sumaSalarios / 12) / sumaCantidadSalarios;
}