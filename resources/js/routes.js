import { createRouter, createWebHistory } from "vue-router";
import Home from './pages/HomePage.vue';
import About from './pages/AboutPage.vue';
import Contact from './pages/ContactPage.vue';

const routes = [
    {path : '/', component : Home},
    {path : '/about', component : About},
    {path : '/contact', component : Contact},
];

const router = createRouter({
    routes,
    history : createWebHistory(),
});

export default router;