const $botonCantidadIntegrantes = document.querySelector("#boton-cantidad-integrantes")

$botonCantidadIntegrantes.onclick = function(event) {
    const cantidadIntegrantes = Number(document.querySelector("#cantidad-integrantes").value);

    borrarIntegrantesAnteriores();
    crearIntegrantesNuevos(cantidadIntegrantes);
    ocultarOMostrarElementos(cantidadIntegrantes);

    event.preventDefault();
}


const $botonCalcularDatosFamilia = document.querySelector("#calcular-datos-familia");

$botonCalcularDatosFamilia.onclick = function(event) {
    const $edadFamiliares = document.querySelectorAll(".integrantes");
    let mayorEdad = 0;
    let menorEdad = Number($edadFamiliares[0].value);
    let sumaDeEdades = 0;
    let promedioEdades;

    for (let i = 0; i < $edadFamiliares.length; i++) {
        let edad = Number($edadFamiliares[i].value);
        sumaDeEdades += edad;

        if (edad < menorEdad) {
            menorEdad = edad;
        }
        if (edad > mayorEdad) {
            mayorEdad = edad;
        }
    }

    promedioEdades = sumaDeEdades / $edadFamiliares.length;
    document.querySelector("#resultado-edad-familia").textContent = `La mayor edad es de ${mayorEdad}, la menor edad es de ${menorEdad} y el promedio entre edades es de ${promedioEdades}`;

    event.preventDefault();
}


const $botonResetear = document.querySelector("#resetear-datos-familia");

$botonResetear.onclick = function(event) {
    borrarIntegrantesAnteriores()
    ocultarOMostrarElementos(0);

    event.preventDefault();
}


function borrarIntegrantesAnteriores() {
    const $inputIntegrantes = document.querySelectorAll(".integrantes");
    const $labelIntegrantes = document.querySelectorAll(".label-integrantes")

    for (let i = 0; i < $inputIntegrantes.length; i++) {
        $inputIntegrantes[i].remove();
        $labelIntegrantes[i].remove();
    }  
}

function crearIntegrantesNuevos(cantidadIntegrantes) {
    const $divIntegrantes = document.querySelector("#div-integrantes");

    for (let i = 0; i < cantidadIntegrantes; i++) {
        let nodoLabel = document.createElement("label");
        nodoLabel.className = "label-integrantes";
        let textoLabel = document.createTextNode(`Ingrese la edad del integrante familiar numero ${i+1}`);
        nodoLabel.appendChild(textoLabel);
        $divIntegrantes.appendChild(nodoLabel);

        let nodoInput = document.createElement("input");
        nodoInput.type = "number";
        nodoInput.className = "integrantes";
        $divIntegrantes.appendChild(nodoInput);
    }
}

function ocultarOMostrarElementos(cantidadIntegrantes) {
    if (cantidadIntegrantes > 0) {
        document.querySelector("#calcular-datos-familia").className = "";
        document.querySelector("#resetear-datos-familia").className = "";
        document.querySelector("#resultado-edad-familia").className = "";
    } else {
        document.querySelector("#calcular-datos-familia").className = "oculto";
        document.querySelector("#resetear-datos-familia").className = "oculto";
        document.querySelector("#resultado-edad-familia").className = "oculto";
        document.querySelector("#resultado-edad-familia").textContent = " ";
    }
}