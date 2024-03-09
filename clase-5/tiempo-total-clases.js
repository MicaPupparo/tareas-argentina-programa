let horasTotales = 0;
let minutosTotales = 0;
let segundosTotales = 0;

const $botonEnviarDatosTiempo = document.querySelector("#enviar-tiempo");

$botonEnviarDatosTiempo.onclick = function(event) {
    const horasEnElVideo = Number(document.querySelector("#horas-video").value);
    const minutosEnElVideo = Number(document.querySelector("#minutos-video").value);
    const segundosEnElVideo = Number(document.querySelector("#segundos-video").value);

    horasTotales += horasEnElVideo;

    minutosTotales += minutosEnElVideo;
    if (minutosTotales > 59) {
        minutosTotales = minutosTotales - 60;
        horasTotales++;
    }
    
    segundosTotales += segundosEnElVideo;
    if (segundosTotales > 59) {
        segundosTotales = segundosTotales - 60;
        minutosTotales++;
    }

    document.querySelector("#tiempo-total").innerText = `El tiempo total es de ${horasTotales} horas, ${minutosTotales} minutos y ${segundosTotales} segundos.`;

    event.preventDefault();
}
