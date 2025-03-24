// Sélection des éléments principaux
const title = document.getElementById('title');
const cursorGlow = document.getElementById('cursor-glow');
const titleText = 'Résonances Disloquées';

// Crée chaque lettre du titre en span
title.innerHTML = titleText
    .split('')
    .map(char => `<span>${char === ' ' ? ' ' : char}</span>`) // Espace insécable
    .join('');

const letters = Array.from(title.children);

// Redirige vers la page présentation au clic sur le titre
title.addEventListener('click', () => window.location.href = "presentation.html");

// Gestion combinée du curseur personnalisé et de l'effet de dispersion des lettres
document.addEventListener('mousemove', (e) => {
    cursorGlow.style.left = `${e.pageX}px`;
    cursorGlow.style.top = `${e.pageY}px`;

    const rect = title.getBoundingClientRect();
    const distance = Math.hypot(
        e.clientX - (rect.left + rect.width / 2),
        e.clientY - (rect.top + rect.height / 2)
    );

    // Déclenche l'effet si le curseur est proche du titre
    if (distance < 200) {
        document.body.classList.add('hovered');
        letters.forEach((letter) => {
            const randomX = (Math.random() - 0.5) * 25; // Légèrement réduit pour plus d'harmonie
            const randomY = (Math.random() - 0.5) * 25;
            const rotation = (Math.random() - 0.5) * 15; // Ajout d'une légère rotation
            letter.style.transform = `translate(${randomX}px, ${randomY}px) rotate(${rotation}deg)`;
            letter.style.transition = `transform 0.3s ease-out`; // Rendu plus fluide
        });
    } else {
        document.body.classList.remove('hovered');
        letters.forEach(letter => {
            letter.style.transform = 'translate(0, 0)';
            letter.style.transition = 'transform 0.8s ease-out'; // Retour plus naturel
        });
    }
});

// Transition douce entre les pages
window.addEventListener('pageshow', () => {
    document.body.style.opacity = 1;
});

window.addEventListener('pagehide', () => {
    document.body.style.opacity = 0;
});
