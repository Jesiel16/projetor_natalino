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

  const countdown = document.querySelector('[data-countdown]');
  const countdownCard = document.querySelector('[data-countdown-card]');
  const countdownCopy = document.querySelector('[data-countdown-copy]');
  const countdownStatus = document.querySelector('[data-countdown-status]');
  if (countdown && countdownCard) {
    const countdownKey = 'natal-magico-countdown-end-v2';
    const legacyCountdownKey = 'natal-magico-countdown-end-v1';
    const tenMinutes = 10 * 60 * 1000;
    let endTime;
    try {
      endTime = Number(localStorage.getItem(countdownKey));
      if (!Number.isFinite(endTime) || endTime <= 0) {
        endTime = Number(sessionStorage.getItem(legacyCountdownKey));
      }
      if (!Number.isFinite(endTime) || endTime <= 0) {
        endTime = Date.now() + tenMinutes;
      }
      localStorage.setItem(countdownKey, String(endTime));
    } catch {
      endTime = Date.now() + tenMinutes;
    }

    let announcedMinute = -1;
    let timerId;
    const renderCountdown = () => {
      const remaining = Math.max(0, endTime - Date.now());
      const totalSeconds = Math.ceil(remaining / 1000);
      const minutes = Math.floor(totalSeconds / 60);
      const seconds = totalSeconds % 60;
      countdown.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
      countdown.setAttribute('aria-label', `${minutes} minutos e ${seconds} segundos restantes`);
      if (minutes !== announcedMinute) announcedMinute = minutes;
      if (remaining <= 0) {
        countdownCard.classList.add('expired');
        if (countdownCopy) countdownCopy.textContent = 'A reserva desta visita terminou. Confira o preço e a disponibilidade atualizados no checkout.';
        if (countdownStatus) countdownStatus.textContent = 'O período de dez minutos terminou. Consulte as condições atuais no checkout.';
        if (timerId) window.clearInterval(timerId);
      }
    };
    renderCountdown();
    timerId = window.setInterval(renderCountdown, 1000);
  }

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
