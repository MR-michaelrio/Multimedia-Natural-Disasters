window.addEventListener('DOMContentLoaded', () => {
  const numRaindrops = 500; // Adjust the number of raindrops
  const container = document.body;
  
  for (let i = 0; i < numRaindrops; i++) {
    const raindrop = document.createElement('div');
    raindrop.classList.add('rain');
    raindrop.style.left = `${Math.random() * 100}%`;
    raindrop.style.animationDuration = `${Math.random() * 2 + 2}s`; // Adjust the duration of raindrops
    container.appendChild(raindrop);
  }

  function generateLightning() {
    const lightning = document.createElement('div');
    lightning.classList.add('lightning');
    container.appendChild(lightning);
    setTimeout(() => {
      lightning.remove();
    }, 300);
  }

  setInterval(() => {
    if (Math.random() < 0.02) { // Adjust the probability of lightning
      generateLightning();
    }
  }, 2000); // Adjust the interval between lightning strikes
});
