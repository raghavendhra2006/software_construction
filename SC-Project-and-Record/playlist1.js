const songs = document.querySelectorAll('.song');
const player = document.getElementById('audioPlayer');

songs.forEach(song => {
  song.addEventListener('click', () => {
    const src = song.getAttribute('data-src');
    if (src) {
      player.src = src;
      player.style.display = 'block';
      player.play();
    }
  });
});
