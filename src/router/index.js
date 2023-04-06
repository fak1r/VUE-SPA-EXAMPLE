import { createRouter, createWebHistory } from 'vue-router'
import Cart from '@/views/Cart';
import Checkout from '@/views/Checkout';
import ProductsList from '@/views/ProductsList';
import Product from '@/views/Product';

const routes = [
  {
    path: '/cart',
    name: 'Cart',
    component: Cart
  },
  {
    path: '/order',
    name: 'Checkout',
    component: Checkout
  },
  {
    path: '/',
    name: 'Catalog',
    component: ProductsList
  },
  {
    path: '/product/:id',
    name: 'Product',
    component: Product
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
