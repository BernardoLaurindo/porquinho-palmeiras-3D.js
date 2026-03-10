let rasgou = false;

document.querySelector('svg').addEventListener('click', () => {
  if (rasgou) return;
  rasgou = true;

  const pig        = document.getElementById('pig');
  const shirtFull  = document.getElementById('shirt-full');
  const shirtLeft  = document.getElementById('shirt-left');
  const shirtRight = document.getElementById('shirt-right');
  const escudo     = document.getElementById('escudo');
  const armL       = document.getElementById('arm-left');
  const armR       = document.getElementById('arm-right');

  pig.classList.add('stop');

  // esconde camisa inteira, mostra as metades
  shirtFull.style.visibility = 'hidden';
  shirtLeft.setAttribute('visibility', 'visible');
  shirtRight.setAttribute('visibility', 'visible');

  requestAnimationFrame(() => {
    shirtLeft.classList.add('rip');
    shirtRight.classList.add('rip');
  });

  spawnParticles();

  setTimeout(() => {
    escudo.classList.add('show');
    armL.classList.add('celebrate');
    armR.classList.add('celebrate');
  }, 320);

  setTimeout(() => {
    pig.classList.remove('stop');
    pig.classList.add('bounce');
    document.getElementById('reaction').classList.add('show');
    document.getElementById('btn').style.display = 'inline-block';
    document.getElementById('hint').textContent = '💚 Avanti Palestra! 💚';
    document.getElementById('hint').style.color = '#FFD700';
  }, 650);
});

function spawnParticles() {
  const colors = ['#00cc55', '#FFD700', '#ffffff', '#009933'];
  const svgEl  = document.querySelector('svg');
  const rect   = svgEl.getBoundingClientRect();
  const cx = rect.left + rect.width  * 0.5;
  const cy = rect.top  + rect.height * 0.5;

  for (let i = 0; i < 22; i++) {
    setTimeout(() => {
      const p = document.createElement('div');
      const s = 7 + Math.random() * 9;
      const angle = Math.random() * Math.PI * 2;
      const dist  = 60 + Math.random() * 140;
      p.style.cssText = `
        position: fixed;
        width: ${s}px; height: ${s}px;
        border-radius: 50%;
        background: ${colors[i % colors.length]};
        left: ${cx - s / 2}px; top: ${cy - s / 2}px;
        pointer-events: none;
        animation: spark 0.65s ease-out forwards;
        --dx: ${Math.cos(angle) * dist}px;
        --dy: ${Math.sin(angle) * dist}px;
      `;
      document.body.appendChild(p);
      setTimeout(() => p.remove(), 700);
    }, i * 22);
  }
}

function resetar() {
  rasgou = false;
  const pig = document.getElementById('pig');
  pig.classList.remove('stop', 'bounce');
  void pig.offsetWidth;

  document.getElementById('shirt-full').style.visibility = 'visible';
  document.getElementById('shirt-left').setAttribute('visibility', 'hidden');
  document.getElementById('shirt-right').setAttribute('visibility', 'hidden');
  document.getElementById('shirt-left').classList.remove('rip');
  document.getElementById('shirt-right').classList.remove('rip');
  document.getElementById('escudo').classList.remove('show');
  document.getElementById('arm-left').classList.remove('celebrate');
  document.getElementById('arm-right').classList.remove('celebrate');
  document.getElementById('reaction').classList.remove('show');
  document.getElementById('btn').style.display = 'none';
  document.getElementById('hint').textContent = 'Clique no porquinho! 🐷';
  document.getElementById('hint').style.color = '#aaffaa';
}
