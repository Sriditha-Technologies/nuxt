router.addRoute('admin', { path: 'settings', component: AdminSettings })
import Profile from '@/pages/Profile.vue';

const routes = [
  { path: '/profile', component: Profile },
  // Other routes...
];
import Vue from 'vue';
import Router from 'vue-router';
import Tables from '@/pages/tables.vue';

Vue.use(Router);

export default new Router({
  mode: 'history', // Optional, use only if you wish to remove hashes from URLs
  routes: [
    {
      path: '/tables',
      component: Tables,
    },
    // other routes...
  ],
});