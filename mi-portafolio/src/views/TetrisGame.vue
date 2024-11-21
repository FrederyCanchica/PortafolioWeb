<template>
  <div class="tetris-game">
    <canvas id="tetrisCanvas" width="600" height="646"></canvas>
    <button 
      id="pauseButton" 
      class="pause-button" 
      v-if="isPaused" 
      @click="togglePause"
    >
      Reanudar
    </button>
  </div>
</template>

<script>
import tetris from '@/assets/tetris';

export default {
  data() {
    return {
      isPaused: false,
    };
  },
  mounted() {
    // Llamar a la función tetris pasando la instancia del componente
    tetris(this);
  },
  methods: {
    togglePause() {
      this.isPaused = !this.isPaused; // Cambia el estado de pausa
      // Para asegurarte de que el juego pause/reanude adecuadamente
      if (this.isPaused) {
        console.log('Juego pausado');
      } else {
        console.log('Juego reanudado');
      }
    },
  },
};
</script>

<style scoped>
.tetris-game {
  background-image: url('@/assets/icons_/universe.jpg');
  background-color: rgb(0, 0, 0);
  background-size: cover; 
  background-position: center;
  height: 100vh; 
  display: flex;
  flex-direction: column; /* Apila canvas y botón verticalmente */
  justify-content: center; /* Centra verticalmente */
  align-items: center; /* Centra horizontalmente */
  position: relative; /* Necesario para posicionar el botón */
}

canvas {
  display: block;
  background-color: rgb(0, 0, 0);
  border: 2px solid #fff; /* Añadir un borde para mejorar la visibilidad del canvas */
}

.pause-button {
  position: absolute;
  top: 10px; /* Ajusta la posición del botón */
  left: 10px; /* Ajusta la posición del botón */
  padding: 10px;
  background-color: #4CAF50; /* Color verde */
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.pause-button:hover {
  background-color: #45a049; /* Color verde más oscuro al pasar el mouse */
}
</style>
