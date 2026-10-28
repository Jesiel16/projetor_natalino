(() => {
  const image = document.getElementById('comparison-image');
  const label = document.getElementById('comparison-label');
  const status = document.getElementById('comparison-status');
  const buttons = document.querySelectorAll('[data-scene]');
  const scenes = {
    before: {src: 'assets/antes-lume.webp', label: 'Antes de acender', alt: 'Simulação da mesma sala sem os desenhos projetados na parede'},
    after: {src: 'assets/depois-lume.webp', label: 'Com a projeção', alt: 'Simulação da sala com desenhos natalinos projetados na parede'}
  };
  buttons.forEach(button => button.addEventListener('click', () => {
    const selected = scenes[button.dataset.scene];
    if (!image || !selected) return;
    image.src = selected.src;
    image.alt = selected.alt;
    label.textContent = selected.label;
    status.textContent = `Exibindo: ${selected.label}. Simulação ilustrativa.`;
    buttons.forEach(item => {
      item.classList.toggle('active', item === button);
      item.setAttribute('aria-pressed', String(item === button));
    });
  }));
  document.querySelectorAll('[data-print]').forEach(button => button.addEventListener('click', () => window.print()));
  const checks = document.querySelectorAll('[data-guide-check]');
  const key = 'lume-noel-checklist-v1';
  let saved = {};
  try { saved = JSON.parse(localStorage.getItem(key) || '{}') || {}; } catch { /* Private browsing can disable storage. */ }
  checks.forEach(check => {
    check.checked = saved[check.dataset.guideCheck] === true;
    check.addEventListener('change', () => {
      const current = {};
      checks.forEach(item => { current[item.dataset.guideCheck] = item.checked; });
      try { localStorage.setItem(key, JSON.stringify(current)); } catch { /* Checklist remains usable in this session. */ }
    });
  });
  document.querySelectorAll('[data-reset-checks]').forEach(button => button.addEventListener('click', () => {
    checks.forEach(check => { check.checked = false; });
    try { localStorage.removeItem(key); } catch { /* No persistent state to clear. */ }
    const message = document.getElementById('checklist-status');
    if (message) message.textContent = 'Lista reiniciada. Pronta para uma nova noite.';
  }));
})();
