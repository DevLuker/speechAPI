const microfono = document.querySelector('#microfono');
const salida = document.querySelector('#salida');
const escuchando = document.querySelector('#escuchando');

microfono.addEventListener('click', ejecutarSpeechAPI);

function ejecutarSpeechAPI() {
    const SpeechRecognition = webkitSpeechRecognition;
    const recognition = new SpeechRecognition;

    recognition.start();


    recognition.onstart = function () {
        salida.classList.add('mostrar');
        escuchando.textContent = 'Escuchando..';
    };

    recognition.onspeechend = function () {
        escuchando.textContent = 'Se dejó de grabar..';
        recognition.stop();
    };

    recognition.onresult = function (e) {
        const mostrarResultado = document.querySelector('#mostrarResultado');
        mostrarResultado.textContent = e.results[0][0].transcript;
    }
}