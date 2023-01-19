import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'top',
    component: async () => {
      const top = await import('@/pages/index.vue')
      return top
    },
  },
  {
    path: '/test',
    name: 'test',
    component: async () => {
      const test = await import('@/pages/test/index.vue')
      return test
    },
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
