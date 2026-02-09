import { createRouter, createWebHistory } from 'vue-router'
import Users from '@/views/Users.vue'
import CreateUsers from '@/views/CreateUsers.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'users',
      component: Users,
    },
    {
      path: '/create',
      name: 'create-user',
      component: CreateUsers,
    },
  ],
})

export default router
