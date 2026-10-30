(() => {
  const video = document.getElementById('product-video');
  const button = document.querySelector('.video-play');
  const status = document.querySelector('.video-status');
  if (!video || !button || !status) return;

  const showFallback = (message) => {
    status.replaceChildren(document.createTextNode(`${message} `));
    const link = document.createElement('a');
    link.href = 'assets/lume-noel-demo-ios.mp4';
    link.textContent = 'Abrir o vídeo diretamente';
    link.setAttribute('aria-label', 'Abrir o vídeo diretamente no aparelho');
    status.append(link, document.createTextNode('.'));
  };

  button.addEventListener('click', async () => {
    status.textContent = 'Carregando vídeo…';
    button.hidden = true;
    if (video.error) {
      video.load();
    }
    try {
      await video.play();
    } catch {
      button.hidden = false;
      showFallback('Não foi possível iniciar neste navegador.');
    }
  });
  video.addEventListener('playing', () => { status.textContent = ''; });
  video.addEventListener('error', () => {
    button.hidden = false;
    showFallback('Falha ao carregar o vídeo.');
  });
})();
