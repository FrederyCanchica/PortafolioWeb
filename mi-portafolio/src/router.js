// src/router.js
import { createRouter, createWebHistory } from 'vue-router';
// import HelloWorld from './views/HelloWorld.vue';   // El componente principal de tu portafolio
// import TetrisGame from './views/TetrisGame.vue'; // El componente del juego
// import BarberMobile from './views/BarberMobile.vue'; //El componente de la berberia movil.

const routes = [
  {
    path: '/',
    name: 'HelloWorld',
    component: () => import('@/views/HelloWorld.vue')
  },
  {
    path: '/tetris',
    name: 'TetrisGame',
    component: () => import('@/views/TetrisGame.vue')
  },
  {
  path: '/BarberMobile',
  name: 'BarberMobile',
  component: () => import('@/views/BarberMobile.vue')
  },
];

// Crear la instancia del router usando Vue 3
const router = createRouter({ history: createWebHistory(process.env.BASE_URL),
  routes});

export default router;
