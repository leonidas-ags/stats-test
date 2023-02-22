import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    redirect: { name: 'market' },
  },
  {
    path: '/markt',
    name: 'market',
    component: () => import('../views/market/market.vue'),
  },
  {
    path: '/index',
    name: 'indizes',
    component: () => import('../views/indizes/indizes.vue'),
  },
  {
    path: '/index/:id',
    name: 'index',
    component: () => import('../views/indizes/group.vue'),
  },
  {
    path: '/wkn',
    name: 'wkns',
    component: () => import('../views/ags/wkns.vue'),
  },
  {
    path: '/wkn/:wkn(\\d{6})',
    name: 'ag',
    component: () => import('@/views/ags/ag.vue'),
  },
  {
    path: '/treemap/indizes',
    name: 'indizesTree',
    component: () => import('@/views/treemaps/indizes.vue'),
  },
  {
    path: '/treemap/ags',
    name: 'agsTree',
    component: () => import('@/views/treemaps/ags.vue'),
  },
  {
    path: '*',
    name: 'notFound',
    component: () => import('@/views/404.vue'),
  },
];

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes,
});

export default router;
