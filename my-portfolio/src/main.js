import "bootstrap/dist/css/bootstrap.min.css";
import { createApp } from "vue";
import { createRouter, createWebHistory } from 'vue-router';
import App from "./App.vue";
import HeaderVue from "./components/layouts/HeaderVue.vue";
import FooterVue from "./components/layouts/FooterVue.vue";
import PersonalProjects from './components/content/PersonalProjects.vue';
import SchoolStuff from './components/content/SchoolStuff.vue';
import ContentView from './components/content/ContentView.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/projects', component: PersonalProjects },
        { path: '/school', component: SchoolStuff },
        { path: '/', component: ContentView },
    ]

});

const app = createApp(App);

app.component("header-vue", HeaderVue);
app.component("footer-vue", FooterVue);

app.use(router);

app.mount("#app");