
const triangulo = document.querySelector('.triangulo');
const btnArriba = document.querySelector('.btn-arriba');
const btnAbajo = document.querySelector('.btn-abajo');
const btnIzquierda = document.querySelector('.btn-izquierda');
const btnDerecha = document.querySelector('.btn-derecha');

let posX = 50;
let posY = 50;
const velocidad = 2; // Velocidad de movimiento
let intervaloMovimiento;

function actualizarPosicion() {
    triangulo.style.left = `${posX}%`;
    triangulo.style.top = `${posY}%`;
}

function moverArriba() {
    posY = Math.max(0, posY - velocidad);
    actualizarPosicion();
}

function moverAbajo() {
    posY = Math.min(100, posY + velocidad);
    actualizarPosicion();
}

function moverIzquierda() {
    posX = Math.max(0, posX - velocidad);
    actualizarPosicion();
}

function moverDerecha() {
    posX = Math.min(100, posX + velocidad);
    actualizarPosicion();
}

function iniciarMovimiento(funcion) {
    detenerMovimiento();
    intervaloMovimiento = setInterval(funcion, 50);
}

function detenerMovimiento() {
    clearInterval(intervaloMovimiento);
}

btnArriba.addEventListener('mousedown', () => iniciarMovimiento(moverArriba));
btnAbajo.addEventListener('mousedown', () => iniciarMovimiento(moverAbajo));
btnIzquierda.addEventListener('mousedown', () => iniciarMovimiento(moverIzquierda));
btnDerecha.addEventListener('mousedown', () => iniciarMovimiento(moverDerecha));

document.addEventListener('mouseup', detenerMovimiento);








