import "bootstrap/dist/css/bootstrap.min.css";
import { createApp } from "vue";
import App from "./App.vue";
import HeaderVue from "./components/layouts/HeaderVue.vue";
import FooterVue from "./components/layouts/FooterVue.vue";
import ContentView from "./components/layouts/ContentView.vue";


const app = createApp(App);

app.component("header-vue", HeaderVue);
app.component("footer-vue", FooterVue);
app.component("content-view", ContentView);

app.mount("#app");
