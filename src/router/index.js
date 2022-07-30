import { createRouter, createWebHistory } from 'vue-router';
import meta from '@/middleware/meta';
import HomePage from '../pages/HomePage.vue';

const routes = [
	{
		path: '/',
		name: 'home',
		component: HomePage,
		meta: {
			title: 'Главная страница',
		}
	},
	{
		path: '/about',
		name: 'about',
		component: () => import(/* webpackChunkName: "about" */ '../pages/AboutPage.vue'),
		meta: {
			title: 'О проекте'
		}
	}
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes
});

router.beforeEach((to, from, next) => {
	meta(to, next);
});

export default router;