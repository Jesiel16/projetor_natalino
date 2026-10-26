(() => {
  const video = document.getElementById('product-video');
  const button = document.querySelector('.video-play');
  const status = document.querySelector('.video-status');
  if (!video || !button || !status) return;

  button.addEventListener('click', async () => {
    status.textContent = 'Carregando vídeo…';
    button.hidden = true;
    if (!video.getAttribute('src')) {
      video.src = video.dataset.src;
      video.load();
    } else if (video.error) {
      video.load();
    }
    try {
      await video.play();
    } catch {
      button.hidden = false;
      status.textContent = 'Não foi possível iniciar. Toque para tentar novamente.';
    }
  });
  video.addEventListener('playing', () => { status.textContent = ''; });
  video.addEventListener('error', () => {
    button.hidden = false;
    status.textContent = 'Falha ao carregar o vídeo. Confira sua conexão e tente novamente.';
  });
})();
