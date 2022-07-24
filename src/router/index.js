import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../pages/HomePage.vue';

const routes = [
	{
		path: '/',
		name: 'home',
		component: HomePage
	},
	{
		path: '/about',
		name: 'about',
		component: () => import(/* webpackChunkName: "about" */ '../pages/AboutPage.vue')
	}
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes
});

export default router;