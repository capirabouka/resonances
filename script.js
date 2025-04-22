document.addEventListener("DOMContentLoaded", () => {
    const title = document.getElementById('title');
    const cursorGlow = document.getElementById('cursor-glow');
    const titleText = 'Résonances Disloquées';

    // Crée des spans pour chaque lettre du titre
    titleText.split('').forEach(char => {
        const span = document.createElement('span');
        span.textContent = char === ' ' ? ' ' : char; // espace insécable
        title.appendChild(span);
    });

    const letters = Array.from(title.children);

    // Redirige vers la page présentation au clic
    title.addEventListener('click', () => {
        window.location.href = "presentation.html";
    });

    // Gère l'effet du curseur lumineux et des lettres qui explosent
    document.addEventListener('mousemove', (e) => {
        cursorGlow.style.left = `${e.pageX}px`;
        cursorGlow.style.top = `${e.pageY}px`;

        const rect = title.getBoundingClientRect();
        const distance = Math.sqrt(
            Math.pow(e.clientX - (rect.left + rect.width / 2), 2) +
            Math.pow(e.clientY - (rect.top + rect.height / 2), 2)
        );

        if (distance < 200) {
            document.body.classList.add('hovered');
            letters.forEach((letter) => {
                const randomX = (Math.random() - 0.5) * 1000;
                const randomY = (Math.random() - 0.5) * 1000;
                letter.style.transform = `translate(${randomX}px, ${randomY}px)`;
                setTimeout(() => {
                    letter.classList.add('hovered');
                    letter.style.transform = 'translate(0, 0)';
                }, Math.random() * 1500);
            });
        } else {
            document.body.classList.remove('hovered');
            letters.forEach(letter => letter.classList.remove('hovered'));
        }
    });
});
