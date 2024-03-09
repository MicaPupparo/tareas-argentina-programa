const $botonEnviarDatosUsuario = document.querySelector("#enviar-datos-usuario");

$botonEnviarDatosUsuario.onclick = function(event){
    const primerNombreUsuario = document.querySelector("#primer-nombre-usuario").value;
    const segundoNombreUsuario = document.querySelector("#segundo-nombre-usuario").value;
    const edadUsuario = Number(document.querySelector("#edad-usuario").value);

    document.querySelector("h1").innerText = `Bienvenido, ${primerNombreUsuario}!`;
    document.querySelector("#primer-nombre-resultado").innerText = `Tu primer nombre es ${primerNombreUsuario}`;
    document.querySelector("#segundo-nombre-resultado").innerText = `Tu segundo nombre es ${segundoNombreUsuario}`;
    document.querySelector("#edad-resultado").innerText = `Tu edad es ${edadUsuario}`;

    event.preventDefault();
}


