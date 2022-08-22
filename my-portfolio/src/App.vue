<template>
  <header-vue></header-vue>
  <content-view></content-view>
  <model-view id="model"></model-view>
  <footer-vue></footer-vue>
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



</style>
