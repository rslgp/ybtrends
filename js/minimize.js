// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function () {
  // Get DOM elements using native JavaScript
  const botaoClose = document.querySelector(".button-close");
  const botaoOpen = document.querySelector(".button-open");
  const caixaBox = document.querySelector(".box");
  const pipVideo = document.querySelector('.video');

  // Hide the open button initially
  botaoOpen.style.display = 'none';

  // Add click event listener to the close button
  botaoClose.addEventListener("click", function () {
    pipVideo.style.boxShadow = 'none';
    pipVideo.style.width = '50px';
    caixaBox.style.display = 'none';
    botaoOpen.style.display = 'block';
  });

  // Add click event listener to the open button
  botaoOpen.addEventListener("click", function () {
    pipVideo.style.boxShadow = '0 2px 10px rgba(0,0,0,0.3)';
    pipVideo.style.width = '640px';
    caixaBox.style.display = 'block';
    botaoOpen.style.display = 'none';
  });
});