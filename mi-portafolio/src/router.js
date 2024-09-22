// src/router.js
import { createRouter, createWebHistory } from 'vue-router';
import HelloWorld from './components/HelloWorld.vue';   // El componente principal de tu portafolio
import TetrisGame from './components/TetrisGame.vue'; // El componente del juego
import BarberMobile from './components/BarberMobile.vue'; //El componente de la berberia movil.

const routes = [
  {
    path: '/',
    name: 'HelloWorld',
    component: HelloWorld
  },
  {
    path: '/tetris',
    name: 'TetrisGame',
    component: TetrisGame
  },
  {
  path: '/BarberMobile',
  name: 'BarberMobile',
  component: BarberMobile
  },
];

// Crear la instancia del router usando Vue 3
const router = createRouter({ history: createWebHistory(), routes });

export default router;
