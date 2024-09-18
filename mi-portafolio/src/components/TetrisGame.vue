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
  background-color: rgb(0, 0, 0); /* Fondo negro para toda la página */
  height: 100vh; /* Ocupa toda la altura de la ventana */
  display: flex;
  justify-content: center;
  align-items: center; /* Centra el contenedor del juego */
}

.canvas-container {
  background-color: white; /* Color del margen (blanco) */
  padding: 50px; /* Margen blanco alrededor del canvas */
  box-sizing: content-box; /* Asegura que el padding no afecte el tamaño del canvas */
}

canvas {
  display: block;
  background-color: rgb(0, 0, 0); /* Fondo negro solo dentro del canvas */
}
</style>
