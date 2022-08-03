import { createApp } from 'vue';
import vuetify from './plugins/vuetify';
import { loadFonts } from './plugins/webfontloader';
import axios from 'axios';
import VueAxios from 'vue-axios';

import App from './App.vue';
import router from './router';
import store from './store';

import './registerServiceWorker'

loadFonts();

const app = createApp(App);

app
	.use(router)
	.use(store)
	.use(vuetify)
	.use(VueAxios, axios)

app.mount('#app');