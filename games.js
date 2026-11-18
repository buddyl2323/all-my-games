// Replace each empty string with the PUBLIC URL where that game is already hosted.
// Example: tidal: 'https://your-fishing-game.onrender.com'
// GitHub Pages hosts this website; multiplayer game servers should remain on Render.
const GAME_URLS = {
  tidal: 'https://hi-tupl.onrender.com',
  whisper: 'https://buddyl2323.github.io/my-games/whisper-station/?utm_source=chatgpt.com',
  shooter: 'https://blacksiteshooter.onrender.com',
  casino: 'https://daddy-kaden.onrender.com'
};

for (const link of document.querySelectorAll('[data-game]')) {
  const url = GAME_URLS[link.dataset.game]?.trim();
  if (url && /^https?:\/\//i.test(url)) {
    link.href = url;
  } else {
    link.classList.add('disabled');
    link.removeAttribute('target');
    link.removeAttribute('rel');
    link.textContent = 'Coming soon — add game link';
    link.addEventListener('click', e => e.preventDefault());
  }
}
document.getElementById('setup-note').hidden = Object.values(GAME_URLS).every(u => /^https?:\/\//i.test(u.trim()));
document.getElementById('year').textContent = new Date().getFullYear();
