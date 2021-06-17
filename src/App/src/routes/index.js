import Home from '@/App.vue';
import Page1 from '@/pages/Page1.vue';
import Page2 from '@/pages/Page2.vue';

const Blank = { template: '<div class="center"> using vue router here</div>' };

const routes = [
  { path: '/', component: Blank },
  { path: '/home1', component: Home, props: { info: 'From VUE Router' } },
  { path: '/page1', component: Page1, props: { info: 'From VUE Router' } },
  { path: '/page2', component: Page2, props: { info: 'From VUE Router' } },
];

export default routes;
