# Lume Noel

Landing page estática da oferta de projetor natalino.

- Página: https://projetornatalino.vercel.app/
- Checkout: https://pay.kaiross.com.br/gt3XULKfwOzV
- Oferta: R$ 179,90 à vista e frete grátis nacional.
- Parcelamento observado: 3x R$ 63,63; total R$ 190,89.

## Arquivos

`index.html`, `lume.css` e `lume.js` compõem a LP. `roteiro.html` e `downloads/primeira-noite-de-natal.pdf` entregam o roteiro gratuito. `video.js` controla a demonstração e `conversion.js` mantém o rastreamento e repassa UTMs ao checkout.

## Prévia

Execute `python -m http.server 8766` na raiz e abra http://localhost:8766. Não há etapa de build nem dependências de produção.

## Conteúdo e manutenção

O vídeo existente foi reorganizado para começar pelo efeito. A foto do aparelho foi extraída desse vídeo. As ambientações existentes foram otimizadas e identificadas como ilustrativas. O roteiro digital é original desta oferta e está disponível sem cadastro.

Mantenha preços, frete, parcelamento, informações do fornecedor e condições de entrega sincronizados com o checkout. Consulte o fornecedor para validar acessórios, especificações e dados comerciais do vendedor. Não se promete resultado idêntico às imagens nem uma data universal de entrega.

O Pixel existente foi preservado. O clique em comprar envia CheckoutClick, nunca Purchase; a confirmação de pagamento pertence ao checkout. O roteiro salva somente as marcações do checklist no navegador.

A estratégia está em [docs/OFERTA-LUME-NOEL.md](docs/OFERTA-LUME-NOEL.md). Preço e conversão são hipóteses a medir com tráfego e margem real, não garantias de venda.
