const canvas = document.getElementById("confettii-canvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const teste = document.getElementById("teste")

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

const confettiImage = new Image();
// Você pode trocar esta URL por qualquer imagem PNG, JPEG ou base64
confettiImage.src = "assets/images/Screenshot_2025-01-20-21-50-28-300_com.google.android.apps.photos.jpg";

const confettiParticles = [];
const maxParticles = 150;
let animationRunning = false;

function createParticle() {
  return {
    x: Math.random() * canvas.width,
    y: -20,
    size: 200 + Math.random() * 10,
    speedY: 2 + Math.random() * 3,
    speedX: Math.random() * 2 - 1,
    angle: Math.random() * 2 * Math.PI,
    angleSpeed: 0.01 + Math.random() * 0.02
  };
}

function updateParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (let p of confettiParticles) {
    p.y += p.speedY;
    p.x += p.speedX;
    p.angle += p.angleSpeed;

    ctx.save();
    ctx.translate(p.x, p.y);
    ctx.rotate(p.angle);
    ctx.drawImage(confettiImage, -p.size / 2, -p.size / 2, p.size, p.size);
    ctx.restore();
  }

  // Remove partículas fora da tela
  for (let i = confettiParticles.length - 1; i >= 0; i--) {
    if (confettiParticles[i].y > canvas.height + 40) {
      confettiParticles.splice(i, 1);
    }
  }

  if (animationRunning || confettiParticles.length > 0) {
    requestAnimationFrame(updateParticles);
  }
}

function startConfetti(duration = 3000) {
  if (!animationRunning) {
    animationRunning = true;
    for (let i = 0; i < maxParticles; i++) {
      confettiParticles.push(createParticle());
    }
    updateParticles();
    setTimeout(() => {
      animationRunning = false;
    }, duration);
  }
}

teste.addEventListener("click", startConfetti())