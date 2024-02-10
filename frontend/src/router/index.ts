import { createRouter, createWebHistory } from 'vue-router';
import TopPage from '@/views/TopPage.vue';
import HistoriesPage from '@/views/HistoriesPage.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'top',
      component: TopPage
    },
    {
      path: '/histories',
      name: 'histories',
      component: HistoriesPage
    }
  ]
});

export default router;
