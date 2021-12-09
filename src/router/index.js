import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Basket from '../views/Basket.vue'
import Admin from '../views/Admin.vue'

// rotas da API 

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/basket',
    name: 'Basket',
    component: Basket
  },
  
  {
    path: '/Admin',
    name: 'admin',
    component: Admin
  },
  
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
