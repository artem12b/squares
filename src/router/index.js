import { createRouter, createWebHistory } from 'vue-router'
import LoginForm from '../views/LoginForm.vue'
import Game from '../views/Game.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Login',
      component: LoginForm
    },
    {
      path: '/game',
      name: 'game',
      component: () => import('../views/Game.vue')
    }
  ]
})

export default router
