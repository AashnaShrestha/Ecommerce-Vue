import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Product from '../sections/Product.vue'
import About from '../views/About.vue'
import Admin from '../views/Admin.vue'
import Overview from '../views/Overview.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/admin',
      name: 'Admin',
      component: Admin,
    },
    {
      path: '/admin/overview',
      name: 'Overview',
      component: Overview
    },
    {
      path: '/product',
      name: 'Product',
      component: Product
    },
    
  ]
})

export default router
