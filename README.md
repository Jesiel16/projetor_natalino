# Natal Mágico em Minutos

Landing page estática da oferta de projetor natalino.

- Página: https://projetornatalino.vercel.app/
- Checkout: https://pay.kaiross.com.br/gt3XULKfwOzV
- Oferta essencial: R$ 239,90 à vista e frete grátis nacional.
- Oferta completa: R$ 294,90 à vista, somando o adicional de 12 bolas douradas por R$ 55,00 no checkout.
- Parcelamento observado para o projetor: até 12x de R$ 24,83, com acréscimo.

## Arquivos

`index.html`, `lume.css` e `lume.js` compõem a LP. `roteiro.html` e `downloads/primeira-noite-de-natal.pdf` entregam o Kit Natal Especial digital. `video.js` controla a demonstração e `conversion.js` mantém o rastreamento e repassa UTMs ao checkout.

## Prévia

Execute `python -m http.server 8766` na raiz e abra http://localhost:8766. Não há etapa de build nem dependências de produção.

## Conteúdo e manutenção

O vídeo existente foi reorganizado para começar pelo efeito. A foto do aparelho foi extraída desse vídeo. As ambientações existentes foram otimizadas e identificadas como ilustrativas. O Kit Natal Especial digital é original desta oferta e está disponível sem cadastro. As 12 bolas douradas são um adicional físico opcional e precisam ser marcadas no checkout.

Preços e condições foram conferidos no checkout em 29/10/2026. Mantenha preço, frete, parcelamento, adicional das bolas, informações do fornecedor e condições de entrega sincronizados com o checkout. Consulte o fornecedor para validar acessórios, especificações e dados comerciais do vendedor. Não se promete resultado idêntico às imagens nem uma data universal de entrega.

O Pixel existente foi preservado. O clique em comprar envia CheckoutClick, nunca Purchase; a confirmação de pagamento pertence ao checkout. O roteiro salva somente as marcações do checklist no navegador.

A estratégia atual está em [docs/OFERTA-NATAL-MAGICO.md](docs/OFERTA-NATAL-MAGICO.md). Preço e conversão são hipóteses a medir com tráfego e margem real, não garantias de venda. A proposta anterior foi preservada como histórico.

As imagens ilustrativas das bolas douradas e os prompts usados no ChatGPT estão documentados em [docs/IMAGENS-BOLAS-DOURADAS.md](docs/IMAGENS-BOLAS-DOURADAS.md).
