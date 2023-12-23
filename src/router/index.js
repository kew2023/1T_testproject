import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import Reviews from '../views/Reviews.vue';


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Reviews
  },
  {
    path: '/transactions',
    name: 'Transactions',
    component: Reviews
  },
  {
    path: '/ads',
    name: 'Ads',
    component: Reviews
  },
  {
    path: '/reviews',
    name: 'Reviews',
    component: Reviews
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Reviews
  },
  {
    path: '/exit',
    name: 'Exit',
    component: Reviews
  },

];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
