
const botonClic = document.getElementById('click-button');
const botonHorror = document.getElementById('horror-button');
const botonSecuencia = document.getElementById('sequential-button');
const botonMario = document.getElementById('mario-button');
const sonidoClic = document.getElementById('click-sound');
const sonidoHorror = document.getElementById('horror-sound');
const audio1 = document.getElementById('audio1');
const audio2 = document.getElementById('audio2');
const sonidoMario = document.getElementById('mario-sound');
const barraProgreso = document.getElementById('progress-bar');
const controlVolumen = document.getElementById('volume-slider');

let audio2PlayCount = 0;
let isSequencePlaying = false;

botonClic.addEventListener('click', () => {
    sonidoClic.play();
});

botonClic.addEventListener('touchend', () => {
    sonidoClic.play();
});

const togglePlayPause = () => {
    if (sonidoHorror.paused) {
        sonidoHorror.play();
        botonHorror.querySelector('p').textContent = 'Pausa';
    } else {
        sonidoHorror.pause();
        botonHorror.querySelector('p').textContent = 'Reproducir';
    }
};

botonHorror.addEventListener('click', togglePlayPause);
botonHorror.addEventListener('touchend', togglePlayPause);

sonidoHorror.addEventListener('timeupdate', () => {
    const progreso = (sonidoHorror.currentTime / sonidoHorror.duration) * 100;
    barraProgreso.value = progreso;
});

sonidoHorror.addEventListener('ended', () => {
    botonHorror.querySelector('p').textContent = 'Reproducir';
    barraProgreso.value = 0;
});

controlVolumen.addEventListener('input', () => {
    sonidoHorror.volume = controlVolumen.value;
});

const toggleSequence = () => {
    if (!isSequencePlaying) {
        audio1.play();
        botonSecuencia.querySelector('p').textContent = 'Pausa';
        isSequencePlaying = true;
    } else {
        if (!audio1.paused) {
            audio1.pause();
        } else if (!audio2.paused) {
            audio2.pause();
        }
        botonSecuencia.querySelector('p').textContent = 'Secuencia';
        isSequencePlaying = false;
    }
};

botonSecuencia.addEventListener('click', toggleSequence);
botonSecuencia.addEventListener('touchend', toggleSequence);

audio1.addEventListener('ended', () => {
    audio2PlayCount = 0;
    audio2.play();
});

audio2.addEventListener('ended', () => {
    audio2PlayCount++;
    if (audio2PlayCount < 2) {
        audio2.play();
    } else {
        botonSecuencia.querySelector('p').textContent = 'Secuencia';
        isSequencePlaying = false;
    }
});

botonMario.addEventListener('click', () => {
    sonidoMario.play();
});

botonMario.addEventListener('touchend', () => {
    sonidoMario.play();
});
