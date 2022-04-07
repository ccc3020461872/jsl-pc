import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('../views/Home.vue'),
    meta: {
      showHeader: true,
      showFooter: true
    }
  },
  {
    name: ' Home',
    path: '/home',
    redirect: '/',
    component: () => import('../views/Home.vue'),
    meta: {
      showHeader: true,
      showFooter: true
    }
  },
  {
    name: 'Login',
    path: '/login',
    component: () => import('../views/Login.vue'),
    meta: {
      showHeader: true,
      showFooter: true
    }
  },
  {
    name: 'Subscribe',
    path: '/subscribe',
    component: () => import('../views/Subscribe.vue'),
    meta: {
      showHeader: true,
      showFooter: true
    }
  },
  {
    name: 'MyOrder',
    path: '/myorder',
    component: () => import('../views/MyOrder.vue'),
    meta: {
      showHeader: true,
      showFooter: true
    }
  }
]
const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
