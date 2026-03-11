# porquinho-palmeiras

## Sobre o projeto

Este projeto é uma animação interativa de um porquinho torcedor do Palmeiras, construída com **HTML**, **CSS** e **JavaScript**.

Ao clicar no porquinho:
- a camisa “rasga” em duas partes;
- partículas são geradas para reforçar o efeito;
- o escudo do Palmeiras aparece;
- os braços fazem animação de comemoração;
- uma mensagem final é exibida, com botão para reiniciar.

## Como o projeto foi desenvolvido

O projeto foi dividido em três partes:

- **Estrutura (`index.html`)**: contém o SVG do porquinho e os elementos da interface (mensagem, reação e botão).
- **Estilo (`css/style.css`)**: define o layout da página, paleta visual e todas as animações com `@keyframes`.
- **Comportamento (`js/script.js`)**: controla os eventos de clique, troca de estados visuais, temporizações (`setTimeout`) e o reset da animação.

### Fluxo da interação

1. O usuário clica no SVG.
2. O script bloqueia novos cliques com a flag `rasgou`.
3. A camisa inteira é escondida e as metades são exibidas e animadas.
4. Partículas são criadas dinamicamente no DOM para efeito visual.
5. O escudo aparece e os braços entram em animação.
6. Mensagem final e botão de reinício são mostrados.
7. O botão “De novo” restaura o estado inicial de todos os elementos.

## Como rodar o projeto

1. Abra a pasta do projeto no VS Code.
2. Abra o arquivo `porquinho-palmeiras/index.html`.
3. Clique em **Go Live** (canto inferior direito).

## Extensões úteis (VS Code)

- **Live Server** (`ritwickdey.LiveServer`) — recomendada para servir a página localmente e recarregar em tempo real.
- **Prettier** (`esbenp.prettier-vscode`) — opcional, para manter HTML/CSS/JS formatados.

## Como funciona o D3.js

O **D3.js (Data-Driven Documents)** é uma biblioteca JavaScript para criar visualizações orientadas a dados, manipulando o DOM (normalmente SVG) de forma declarativa.

### Conceito central

O D3 conecta dados a elementos visuais pelo ciclo:

- **seleção** (`select` / `selectAll`)
- **vínculo de dados** (`data`)
- **enter / update / exit** (criar, atualizar e remover elementos conforme os dados mudam)

Em termos práticos:

1. Você passa um array de dados.
2. O D3 compara os dados com os elementos existentes.
3. Cria elementos que faltam (`enter`), atualiza os existentes (`update`) e remove excedentes (`exit`).

### Recursos comuns

- Escalas (`d3.scaleLinear`, `scaleBand`, etc.) para mapear dados em posição, cor e tamanho.
- Eixos (`d3.axisBottom`, `axisLeft`) para gráficos.
- Transições (`transition`) para animações suaves entre estados.
- Interações (eventos de `mouseover`, `click`, `drag`, `zoom`).
