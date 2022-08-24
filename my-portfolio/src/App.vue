<template>
  <div id="">
    <header-vue></header-vue>
    <content-view id="project"></content-view>
    <model-view id="model"></model-view>
    <footer-vue></footer-vue>
  </div>
</template> 

<script>
import ModelView from "./components/layouts/ModelView.vue";
import FooterVue from "./components/layouts/FooterVue.vue";
import ContentView from "./components/content/ContentView.vue";

export default {
  components: { ModelView, FooterVue, ContentView },
  name: "App",
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

@keyframes startup {
  0% {
    transform: translateY(-40%);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}
#project{
  animation: 0.6s ease-in 0s 1 startup;
}
</style>
