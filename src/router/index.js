import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/projects',
    name: 'Projects',
    component: () => import('../views/Projects.vue')
  },
	{
    path: '/services',
    name: 'Services',
    component: () => import('../views/Services.vue')
  },
	{
    path: '/blog',
    name: 'Blog',
    component: () => import('../views/Blog.vue')
  },
	{
    path: '/company',
    name: 'Company',
    component: () => import('../views/Company.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
	linkActiveClass: 'active',
	linkExactActiveClass: 'active',
})

export default router
