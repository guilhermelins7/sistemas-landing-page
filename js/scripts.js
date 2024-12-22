"use strict";

// script grade

function toggleList(element) {
    const content = element.nextElementSibling; // Seleciona próximo elemento no DOM

    if (content.style.display === 'none' || content.style.display === '')
        content.style.display = 'block';
    else content.style.display = 'none';
}
 
function toggleIcon(id) {
    const toggle = document.getElementById(id);

    if (toggle.textContent === '+') toggle.textContent = '-';
    else toggle.textContent = '+';
}

// script grade/