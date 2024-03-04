const cantidadFamiliares = prompt("Ingrese cantidad de integrantes en su familia");
const nodoForm = document.createElement("form");
document.querySelector("body").appendChild(nodoForm);

for (let i = 0; i < cantidadFamiliares; i++) {
    let nodoLabel = document.createElement("label");
    let textoLabel = document.createTextNode(`Ingrese la edad del integrante familiar numero ${i+1}`);
    nodoLabel.appendChild(textoLabel);
    nodoForm.appendChild(nodoLabel);

    let nodoInput = document.createElement("input");
    nodoInput.type = "number";
    nodoForm.appendChild(nodoInput);
    nodoForm.appendChild(document.createElement("br"));
}

let nodoBoton = document.createElement("button");
    nodoBoton.type = "button";
    nodoBoton.innerText = "Calcular";
nodoForm.appendChild(nodoBoton);

const $botonCalcularFamilia = document.querySelector("button");

$botonCalcularFamilia.onclick = function() {
    const edadFamiliares = document.querySelectorAll("input");
    let mayorEdad = Number(edadFamiliares[0].value);
    let menorEdad = 0;
    let sumaDeEdades = 0;

    for (let j = 0; j < cantidadFamiliares; j++) {
        if ()
    }
}