// Timer Café
// Projeto para mensurar o tempo que se passa sem café
// 04.2022

/**
 * @todo
 * Criar uma API para salvar o tempo e manter o registro do maior tempo.
 * Incluir som.
 */

const contador = document.querySelector('.contador');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');
const icone = document.querySelector('.icone');

let count = 0;

let timer;

function formataDoisDig(num) {
    return num < 10 ? '0' + num.toString() : num.toString();
}

function montaTimer(count) {
    let segundos = count % 60;;
    let minutos = Math.floor(count/60);
    minutos = minutos < 60 ? minutos :minutos % 60;
    let horas = Math.floor((count/60)/60)
    return `${formataDoisDig(horas)}:${formataDoisDig(minutos)}:${formataDoisDig(segundos)}`;
}

function setaIcone(count) {
    if (count === 0) {
        document.body.classList.value = '';
        return '<img src="./assets/img/face-laugh-beam.svg">';
    }
    if (count < 300) {
        document.body.classList.value = '';
        return '<img src="./assets/img/face-meh.svg">';
    }
    if (count < 600) {
        document.body.classList.value = 'warning';
        return '<img src="./assets/img/face-frown.svg">';
    }
    if (count < 750) {
        document.body.classList.value = 'warning2';
        return '<img src="./assets/img/face-sad-tear.svg">';
    }
    if (count < 900) {
        document.body.classList.value = 'warning2';
        return '<img src="./assets/img/face-sad-cry.svg">';
    }
    if (count < 1050) {
        // document.body.classList.add('alert');
        document.body.classList.value = 'alert';
        return '<img src="./assets/img/face-angry.svg">';
    };
    if (count >= 1050) {
        // document.body.classList.add('alert');
        document.body.classList.value = count % 2 ===0 ? 'alert' : 'black';
        return '<img src="./assets/img/face-angry.svg">';
    };

}

function iniciaContador() {
    clearInterval(timer);
    contador.classList.remove('blink');
    timer = setInterval(function (){
        count++;
        contador.innerHTML = montaTimer(count);
        icone.innerHTML = setaIcone(count);
    }, 1000);
}

function pausarContador() {
    clearInterval(timer);
    contador.classList.add('blink');
}

function zerarContador() {
    clearInterval(timer);
    contador.classList.remove('blink');
    count = 0;
    icone.innerHTML = setaIcone(count);
    contador.innerHTML = montaTimer(count);
    icone.innerHTML = setaIcone(count);
}

iniciar.addEventListener('click', function(event) {
    iniciaContador();
});

pausar.addEventListener('click', function(event) {
    pausarContador();
})

zerar.addEventListener('click', function (event) {
    zerarContador();
})

document.addEventListener('keypress', function(e) {
    if (e.keyCode === 105) iniciaContador();
    if (e.keyCode === 112) pausarContador();
    if (e.keyCode === 122) zerarContador();
});
