require('./bootstrap');
import {createApp} from 'vue';
import App from './App.vue';
import router from './routes.js';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

const app = createApp(App).use(router).mount('#root');
