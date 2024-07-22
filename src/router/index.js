import { createRouter, createWebHistory } from 'vue-router'
import Home from '../view/HomeApp.vue'
import Test from '../view/Test/test-router.js'

const routes = [{ path: '/Home', name: 'home-link', component: Home }, ...Test]

export default createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})
