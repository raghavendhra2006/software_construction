const songs = document.querySelectorAll('.song');
const player = document.getElementById('audioPlayer');
const footer = document.querySelector('footer');
const songImg = document.querySelector('.audio-player-img');

songs.forEach(song => {
  song.addEventListener('click', () => {
    const src = song.getAttribute('data-src');
    const img = song.querySelector('img').src;
    if (src) {
      player.src = src;
      songImg.src = img;
      footer.style.display = 'block';
      player.play();
    }
  });
});
