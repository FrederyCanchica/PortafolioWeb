// src/router.js
import Vue from 'vue';
import Router from 'vue-router';
// import { createRouter, createWebHistory } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue';   // El componente principal de tu portafolio
import TetrisGame from './components/TetrisGame.vue'; // El componente del juego

Vue.use(Router);
export default new Router({
    routes: [
      {
        path: '/',
        name: 'HelloWorld',
        component: HelloWorld
      },
      {
        path: '/tetris',
        name: 'TetrisGame',
        component: TetrisGame
      }
    ]
  });
