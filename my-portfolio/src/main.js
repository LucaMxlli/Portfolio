import "bootstrap/dist/css/bootstrap.min.css";
import { createApp } from "vue";
import App from "./App.vue";
import HeaderVue from "./components/layouts/HeaderVue.vue";
import FooterVue from "./components/layouts/FooterVue.vue";



const app = createApp(App);

app.component("header-vue", HeaderVue);
app.component("footer-vue", FooterVue);


app.mount("#app");11