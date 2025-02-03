document.addEventListener('DOMContentLoaded', function() {
    const video = document.getElementById('bg-video');
    const startButton = document.getElementById('start-button');
    const popcornContainer = document.getElementById('popcorn-container');

    // Pysäytä video alussa
    video.pause();

    startButton.addEventListener('click', function() {
        // Käynnistä video
        video.play();

        // Piilota nappi
        startButton.style.display = 'none';

        // Odota 2 sekuntia ja aloita popcornien animointi
        setTimeout(() => {
            startPopcornAnimation();
        }, 2000);

        // Odota animaation keston + 1 sekunnin verran ja aloita fade-out
        setTimeout(() => {
            document.body.classList.add('fade-out');
        }, 10000); // 8000ms (animaatio) + 2000ms (odotus)

        // Siirry etusivulle fade-outin jälkeen
        setTimeout(() => {
            window.location.href = 'etusivu.html';
        }, 12000); // 8000ms + 2000ms (fade-out)
    });

    function startPopcornAnimation() {
        const numPopcorns = 400; // Popcornien kokonaismäärä
        const delayBetweenPopcorns = 50; // Aikaväli popcornien ilmestymiselle (ms)
        const animationDuration = 10000; // Kokonaisanimaation kesto (ms)

        for (let i = 0; i < numPopcorns; i++) {
            setTimeout(() => {
                const popcorn = document.createElement('div');
                popcorn.classList.add('popcorn');
                popcorn.style.left = `${Math.random() * 100}vw`; // Satunnainen X-positio
                popcorn.style.top = `${Math.random() * 100}vh`; // Satunnainen Y-positio
                popcorn.style.animationDuration = `${Math.random() * 3 + 2}s`; // Satunnainen animaationopeus
                popcornContainer.appendChild(popcorn);
            }, i * delayBetweenPopcorns); // Popcornit ilmestyvät yksitellen
        }
    }
});