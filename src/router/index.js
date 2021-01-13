import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    alias: '/tutorials',
    name: 'tutorials',
    component: () => import('../components/Tutorials.vue'),
  },
  {
    path: '/add',
    name: 'add',
    component: () => import('../components/AddTutorial.vue'),
  },
  {
    path: '/tutorials/:id',
    name: 'tutorial-details',
    component: () => import('../components/TutorialDetail.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
