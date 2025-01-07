// Declare variables
let progresso, numero, barraDoing, tamanhoBarra;
let x = 0;

// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function () {
    // Get DOM elements using native JavaScript
    progresso = document.querySelector('.progress');
    numero = document.querySelector('.number');
    barraDoing = document.querySelector('.statusProgress');
    tamanhoBarra = document.querySelector('.clickable').offsetWidth;
});

/**
 * Update the progress bar.
 * @param {number} porcento - The percentage to update the progress bar by.
 */
function atualizarBarra(porcento) {
    porcento = porcento / 100;
    x += porcento * tamanhoBarra;
    if (x > tamanhoBarra) x = tamanhoBarra;
    progresso.style.width = `${x}px`;
    numero.textContent = `${((x * 100) / tamanhoBarra).toFixed(2)}%`;
}

/**
 * Update the status text of the progress bar.
 * @param {string} statusText - The text to display.
 */
function atualizarBarraDoing(statusText) {
    barraDoing.textContent = statusText;
}