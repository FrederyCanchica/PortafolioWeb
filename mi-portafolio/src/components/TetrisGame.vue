<template>
    <div class="tetris-game">
      <canvas id="tetrisCanvas" width="300" height="600"></canvas>
    </div>
    <div class="tetris-container">
    <h1>Tetris Game</h1>
    <!-- El canvas o div donde se ejecutará el juego -->
    <div id="tetris-game"></div>
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
    text-align: center;
    margin: 20px;
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
  