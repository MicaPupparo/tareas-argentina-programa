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
    quitarTextoResultados();

    event.preventDefault();
}

const $botonCalcularDatosFamilia = document.querySelector("#calcular-resultados");

$botonCalcularDatosFamilia.onclick = function(event) {
    const $salarioAnualIntegrante = document.querySelectorAll(".input-integrantes");
    calcularSalariosAnuales($salarioAnualIntegrante);

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

function quitarTextoResultados() {
    return document.querySelector("#resultados").textContent = "";
}