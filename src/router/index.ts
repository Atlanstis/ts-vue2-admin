import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Layout from '@/layout/index.vue'
import store from '@/store'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/login',
    name: 'login',
    component: () =>
      import(/* webpackChunkName: 'login'  */ '@/views/login/index.vue'),
  },
  {
    path: '/',
    component: Layout,
    meta: {
      requiresAuth: true,
    },
    children: [
      {
        path: '',
        name: 'home',
        component: () =>
          import(/* webpackChunkName: 'home'  */ '@/views/home/index.vue'),
      },
      {
        path: '/advert',
        name: 'advert',
        component: () =>
          import(/* webpackChunkName: 'advert'  */ '@/views/advert/index.vue'),
      },
      {
        path: '/advert-space',
        name: 'advert-space',
        component: () =>
          import(
            /* webpackChunkName: 'home'  */ '@/views/advert-space/index.vue'
          ),
      },
      {
        path: '/course',
        name: 'course',
        component: () =>
          import(/* webpackChunkName: 'course'  */ '@/views/course/index.vue'),
      },
      {
        path: '/menu',
        name: 'menu',
        component: () =>
          import(/* webpackChunkName: 'menu'  */ '@/views/menu/index.vue'),
      },
      {
        path: '/menu-create',
        name: 'menuCreate',
        component: () =>
          import(
            /* webpackChunkName: 'menu-create-oroedit'  */ '@/views/menu/create.vue'
          ),
      },
      {
        path: '/menu-edit',
        name: 'menuEdit',
        component: () =>
          import(
            /* webpackChunkName: 'menu-create-oroedit'  */ '@/views/menu/edit.vue'
          ),
      },
      {
        path: '/resourse',
        name: 'resourse',
        component: () =>
          import(
            /* webpackChunkName: 'resourse'  */ '@/views/resourse/index.vue'
          ),
      },
      {
        path: '/role',
        name: 'role',
        component: () =>
          import(/* webpackChunkName: 'role'  */ '@/views/role/index.vue'),
      },
      {
        path: '/user',
        name: 'user',
        component: () =>
          import(/* webpackChunkName: 'user'  */ '@/views/user/index.vue'),
      },
    ],
  },
  {
    path: '*',
    name: '404',
    component: () =>
      import(/* webpackChunkName: '404'  */ '@/views/error-page/404.vue'),
  },
]

const router = new VueRouter({
  routes,
})

router.beforeEach((to, from, next) => {
  // to.matched 是一个数组（匹配到的路由记录）
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (!store.state.user) {
      next({ name: 'login', query: { redirect: to.fullPath } })
    }
  }
  next()
})

export default router
