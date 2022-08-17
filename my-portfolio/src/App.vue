<template>
  <header-vue></header-vue>
  <content-view></content-view>
  <footer-vue></footer-vue>
</template> 

<script>
import ContentView from "./components/layouts/ContentView.vue";
import FooterVue from "./components/layouts/FooterVue.vue";

export default {
  components: { ContentView, FooterVue },
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
