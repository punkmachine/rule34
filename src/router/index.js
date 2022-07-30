import { createRouter, createWebHistory } from 'vue-router';
import meta from '@/middleware/meta';
import HomePage from '@/pages/HomePage.vue';
import * as pathList from '@/constants/routes';

const routes = [
	{
		path: pathList.home,
		name: 'HomeRoute',
		component: HomePage,
		meta: {
			title: 'Главная страница',
			layout: 'main'
		}
	},
	{
		path: pathList.login,
		name: 'LoginRoute',
		component: () => import(/* webpackChunkName: "login" */ '../pages/LoginPage.vue'),
		meta: {
			title: 'Вход',
			layout: 'auth'
		}
	},
	{
		path: pathList.registration,
		name: 'RegistrationRoute',
		component: () => import(/* webpackChunkName: "registration" */ '../pages/RegistrationPage.vue'),
		meta: {
			title: 'Регистрация',
			layout: 'auth'
		}
	},
	{
		path: pathList.search,
		name: 'SearchRoute',
		component: () => import(/* webpackChunkName: "search" */ '../pages/SearchPage.vue'),
		meta: {
			title: 'Поиск...',
			layout: 'main'
		}
	},
	{
		path: pathList.profile,
		name: 'ProfileRoute',
		component: () => import(/* webpackChunkName: "profile" */ '../pages/ProfilePage.vue'),
		meta: {
			title: 'Профиль пользователя',
			layout: 'main'
		}
	},
	{
		path: `${pathList.collection}/:id`,
		name: 'CollectionRoute',
		component: () => import(/* webpackChunkName: "collection" */ '../pages/CollectionPage.vue'),
		meta: {
			title: 'Коллекция',
			layout: 'main'
		}
	},
	{
		path: `${pathList.album}/:id`,
		name: 'AlbumRoute',
		component: () => import(/* webpackChunkName: "album" */ '../pages/AlbumPage.vue'),
		meta: {
			title: 'Альбом',
			layout: 'main'
		}
	},
	{
		path: `${pathList.picture}/:id`,
		name: 'PictureRoute',
		component: () => import(/* webpackChunkName: "picture" */ '../pages/PicturePage.vue'),
		meta: {
			title: 'Картинка',
			layout: 'main'
		}
	},
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes
});

router.beforeEach((to, from, next) => {
	meta(to, next);
});

export default router;