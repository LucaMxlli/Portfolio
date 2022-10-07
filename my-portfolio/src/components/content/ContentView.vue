<template>
  <div>
    <div class="container-xl">
      <h6 id="name" class="pb-3 pt-5 h6">Hello there!, I'm Luca</h6>
      <img src="../../assets/star-wars-g133253602_1920.png" class="pt-4" id="lightsaber" />
        <about-me></about-me>
    </div>
 
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


li {
  color: white;
}

#lightsaber {
  width: 100%;
  height: 100%;
  position: relative;
}

@media (max-width: 820px){
  #lightsaber{
    visibility: hidden !important;
  }
}


</style>