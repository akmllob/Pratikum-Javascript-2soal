const audio = document.getElementById('audio');
const cover = document.getElementById('cover');
const judul = document.getElementById('judul');
const playButton = document.getElementById('play');
const pauseButton = document.getElementById('pause');
const stopButton = document.getElementById('stop');
const playlist = document.querySelectorAll('.playlist li');

let laguSedangDiputar = null;

playlist.forEach(lagu => {
    lagu.addEventListener('click', () => {
        const src = lagu.getAttribute('data-src');
        const coverSrc = lagu.getAttribute('data-cover');
        const judulLagu = lagu.getAttribute('data-judul');

        audio.src = src;
        cover.src = coverSrc;
        judul.textContent = judulLagu;
        
        if (laguSedangDiputar) {
            laguSedangDiputar.classList.remove('sedang-diputar');
        }

        laguSedangDiputar = lagu;
        laguSedangDiputar.classList.add('sedang-diputar');
    });
});

playButton.addEventListener('click', () => {
    audio.play();
});

pauseButton.addEventListener('click', () => {
    audio.pause();
});

stopButton.addEventListener('click', () => {
    audio.pause();
    audio.currentTime = 0;
});
