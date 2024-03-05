let contador = 0;
const $botonAgregarIntegrante = document.querySelector("#boton-agregar");

$botonAgregarIntegrante.onclick = function(event) {
    agregarIntegrante();
    contador++;
    mostrarUOcultarBoton();

    event.preventDefault();
}

const $botonQuitarIntegrante = document.querySelector("#boton-quitar")

$botonQuitarIntegrante.onclick = function(event) {
    quitarIntegrante();
    contador--;
    mostrarUOcultarBoton();

    event.preventDefault();
}

const $botonCalcularDatosFamilia = document.querySelector("#calcular-resultados");

$botonCalcularDatosFamilia.onclick = function(event) {
    const $salarioAnualIntegrante = document.querySelectorAll(".input-integrantes");
    let mayorSalario = 0;
    let menorSalario = Number($salarioAnualIntegrante[0].value);
    let sumaSalarios = 0;
    let promedioSalarios;

    for (let i = 0; i < $salarioAnualIntegrante.length; i++) {
        let salario = Number($salarioAnualIntegrante[i].value);
        sumaSalarios += salario;

        if (salario < menorSalario) {
            menorSalario = edad;
        }
        if (salario > mayorSalario) {
            mayorSalario = edad;
        }
    }

    promedioSalarios = sumaSalarios / $salarioAnualIntegrante.length;
    document.querySelector("#resultados").textContent = `El mayor salario es $${mayorSalario}, el menor salario es $${menorSalario} y el promedio entre salarios es de ${promedioSalarios}`;

    event.preventDefault();
}

function agregarIntegrante() {
    const $divIntegrantes = document.querySelector("#integrantes");

    let nodoLabel = document.createElement("label");
    nodoLabel.className = "label-integrantes";
    let textoLabel = document.createTextNode(`Ingrese el salario anual del integrante familiar`);
    nodoLabel.appendChild(textoLabel);
    $divIntegrantes.appendChild(nodoLabel);

    let nodoInput = document.createElement("input");
    nodoInput.type = "number";
    nodoInput.className = "input-integrantes";
    $divIntegrantes.appendChild(nodoInput);
}

function quitarIntegrante() {
    const $inputIntegrantes = document.querySelectorAll(".input-integrantes");
    const $labelIntegrantes = document.querySelectorAll(".label-integrantes");
    let ultimoInput = $inputIntegrantes[$inputIntegrantes.length - 1];
    let ultimoLabel = $labelIntegrantes[$labelIntegrantes.length -1];

    ultimoInput.remove();
    ultimoLabel.remove();
}

function mostrarUOcultarBoton() {
    if (contador > 0) {
        $botonCalcularDatosFamilia.className = "";
    } else {
        $botonCalcularDatosFamilia.className = "oculto";
    }
}