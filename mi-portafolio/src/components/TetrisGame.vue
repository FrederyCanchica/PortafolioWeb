<template>
  <div class="tetris-game">
    <canvas id="tetrisCanvas" width="300" height="600"></canvas>
  </div>
</template>

<script>
import tetris from '@/assets/tetris';

export default {
  mounted() {
    tetris();
    const script = document.createElement('script');
    script.src = require('@/assets/tetris.js');
    document.body.appendChild(script);
  }
}
</script>

<style scoped>
.tetris-game {
  background-image: url('/mi-portafolio/public/icons/universe.jpg'); /* Asegúrate de que la ruta sea correcta */
  background-size: cover; /* Asegúrate de que la imagen cubra toda el área del contenedor */
  background-position: center; /* Centra la imagen de fondo */
  background-repeat: no-repeat; /* Evita que la imagen se repita */
  height: 100vh; /* Asegúrate de que el contenedor ocupe toda la altura de la ventana */
  display: flex;
  justify-content: center;
  align-items: center;
}

  canvas {
    background-color: black;
    display: block;
    margin: auto;
  }
  .tetris-container {
  text-align: center;
}
#tetris-game {
  margin: 0 auto;
}
  </style>
  