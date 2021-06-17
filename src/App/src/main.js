import { createApp } from 'vue';

import { createRouter, createWebHashHistory } from 'vue-router';

import Routes from '@/routes';

import Home from '@/App.vue';
import Page1 from '@/pages/Page1.vue';
import Page2 from '@/pages/Page2.vue';

const router = createRouter({
  routes: Routes,
  history: createWebHashHistory(),
});

const app = createApp({
  components: {
    Home, Page1, Page2,
  },
});

app.use(router);

app.mount('#app');
