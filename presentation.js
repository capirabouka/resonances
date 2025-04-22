console.log("JS presentation.js chargé !");

document.addEventListener("DOMContentLoaded", () => {
    const navbar = document.querySelector('.navbar');
    const container = document.querySelector('.container');
    const title = document.querySelector('h1');

    // Animations d’entrée
    if (navbar) navbar.style.animation = 'fadeIn 1s forwards 0.5s';
    if (container) container.style.animation = 'fadeIn 1s forwards 1s';
    if (title) title.style.animation = 'explodeText 1s forwards ease-out';

    // Menu déroulant des langues
    const langSelector = document.querySelector('.lang-selector');
    if (langSelector) {
        langSelector.addEventListener('click', (e) => {
            langSelector.classList.toggle('open');
            e.stopPropagation();
        });

        document.addEventListener('click', () => {
            langSelector.classList.remove('open');
        });
    }
});

