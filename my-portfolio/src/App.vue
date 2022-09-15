<template>
  <div id="">
    <header-vue></header-vue>
    <router-view id="project"></router-view>
    <footer-vue></footer-vue>
  </div>
</template> 

<script>

import FooterVue from "./components/layouts/FooterVue.vue";

export default {
  components: { FooterVue },
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

body {
  background-color: #0F111A;
  background-attachment: scroll;
  background-repeat: no-repeat;
  background-size: cover;
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
