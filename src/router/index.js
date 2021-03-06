import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/testimonials',
    name: 'testimonials',
    component: () => import('../views/TestimonialsView.vue')
  },
  {
    path: '/rates',
    name: 'rates',
    component: () => import('../views/RatesView.vue')
  },
  {
    path: '/teams',
    name: 'teams',
    component: () => import('../views/TeamsView.vue')
  },
  {
    path: '/teams/:memberId',
    name: 'member',
    component: () => import('../views/TeamMember.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
