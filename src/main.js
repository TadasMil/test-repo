import { createPinia } from 'pinia';

const { createApp } = require('vue');
import App from './App.vue';

const pinia = createPinia();

createApp(App).use(pinia).mount('#app');
