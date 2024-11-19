

// Script para que inicie el  Confeti
const startConfetti = () => {
  setTimeout(function () {
      confetti.start();
  }, 1000); // 1000 = 1 segundo
};

// Detener confeti después de 5 segundos
const stopConfetti = () => {
  setTimeout(function () {
      confetti.stop();
  }, 5000);
};

// Llamar a las funciones de inicio y detención
startConfetti();
stopConfetti();
