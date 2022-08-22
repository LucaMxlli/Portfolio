<template>
  <div>
    <div class="container">
      <p id="name" class="pb-3">Luca Malli</p>
      <img src="../../assets/star-wars-g133253602_1920.png" id="lightsaber" />
    </div>
    <about-me></about-me>
  </div>
</template>

<script>
import AboutMe from "./AboutMe.vue";
export default {
  components: { AboutMe },
};
</script>

<style>
#name {
  top: 15%;
  left: 50%;
  transform: translate(-50%, -50%);
  justify-content: center;
  position: absolute;
  font-size: xx-large;
  color: white;
}
#name:hover {
  color: aquamarine;
}
#lightsaber {
  width: 100%;
  max-width: 800px;
  max-height: 500px;
  position: relative;
}
</style>