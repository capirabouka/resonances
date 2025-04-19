document.addEventListener("DOMContentLoaded", () => {
    // Sélection des éléments
    const navbar = document.querySelector('.navbar');
    const container = document.querySelector('.container');
    const title = document.querySelector('h1');

    // Appliquer les animations
    if (navbar) navbar.style.animation = 'fadeIn 1s forwards 0.5s';
    if (container) container.style.animation = 'fadeIn 1s forwards 1s';
    if (title) title.style.animation = 'explodeText 1s forwards ease-out';
});
