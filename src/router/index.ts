import { createRouter, createWebHistory } from 'vue-router'
import Login from '../components/login/Login.vue'
import Register from '../components/login/Register.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
    {
      path: '/register',
      name: 'register',
      component: Register,
    },
    {
      path: '/',
      component: () => import('../views/Apphome.vue'),
    },
  ],
})

export default router
