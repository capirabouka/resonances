document.addEventListener("DOMContentLoaded", () => {
  const scrollContainer = document.getElementById("video-scroll");

  const videos = [
    "Achode-Karibian.mp4", "Amir-Zakariazadeh.mp4", "Angie-Stifler.mp4", "Ani-Khitapszyan.mp4",
    "Anna-Gordeeva.mp4", "Anton-Adrienko.mp4", "Aram-Zurabyan.mp4", "Bela-Poghosyan.mp4",
    "Betty-Karibian.mp4", "Bogdan-Zubov.mp4", "Camille.mp4", "Hakob-Balayan.mp4",
    "Jean.mp4", "Joana-Millet.mp4", "Kolay-Shatalov.mp4", "Leon-Gaskin.mp4",
    "Liza-Drudi.mp4", "Luna-Sybil.mp4", "Mariana.mp4", "Marie-Aïda-Karibian.mp4",
    "Martina.mp4", "Masha-Pospevola.mp4", "Michael-Atasoonts.mp4", "Nathalie-Karibian.mp4",
    "Patti-Smith.mp4", "Rita-Salnikova.mp4", "Samar.mp4", "Sébastien-Karibian.mp4",
    "Silva-Chobanyan.mp4", "Stella-Grigoryan.mp4", "Stéphan-Karibian.mp4", "Tathev-Taryan.mp4"
  ];

  videos.forEach(filename => {
    const name = filename.replace(/-/g, ' ').replace('.mp4', '');
    const block = document.createElement("div");
    block.className = "video-block";

    const video = document.createElement("video");
    video.src = `videos-/${filename}`;
    video.controls = true;

    const title = document.createElement("div");
    title.className = "video-title";
    title.textContent = name;

    block.appendChild(video);
    block.appendChild(title);
    scrollContainer.appendChild(block);
  });
});
