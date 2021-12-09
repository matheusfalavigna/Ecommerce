import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Basket from '../views/Basket.vue'
import Product from '../views/Product.vue'

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
    path: '/product',
    name: 'product',
    component: Product
  },
  
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
