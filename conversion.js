/* Mantém o PageView existente. Purchase pertence à confirmação real do pagamento. */
(() => {
  const product = {
    content_name: 'Projetor LED Natalino',
    content_type: 'product',
    value: 179.90,
    currency: 'BRL'
  };
  const send = (method, event, data) => {
    if (typeof window.fbq === 'function') window.fbq(method, event, data);
  };
  send('track', 'ViewContent', product);
  const allowed = ['utm_source','utm_medium','utm_campaign','utm_content','utm_term','fbclid'];
  const incoming = new URLSearchParams(location.search);
  document.querySelectorAll('a[href^="https://pay.kaiross.com.br/"]').forEach((link, index) => {
    const destination = new URL(link.href);
    allowed.forEach(key => {
      const value = incoming.get(key);
      if (value) destination.searchParams.set(key, value);
    });
    link.href = destination.href;
    let lastSent = 0;
    link.addEventListener('click', () => {
      if (Date.now() - lastSent < 1500) return;
      lastSent = Date.now();
      send('trackCustom', 'CheckoutClick', {...product, cta_position: index + 1});
    });
  });
})();
