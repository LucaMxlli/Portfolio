<template>
  <div>
    <h3 id="informationAboutMe" @mouseenter="visible()">🠗 Some information about me 🠗</h3>
    <div :class="{ invisible: !isActive}" id="aboutMe" class="container pt-4">
      <info-card></info-card>
    </div>
  </div>
</template>

<script>
import InfoCard from "./InfoCard.vue";
export default {
  components: { InfoCard },

  data() {
    return {
      isActive: false,
    };
  },

  methods: {
    visible: function () {
      this.isActive = true;
    },
  },
};
</script>

<style>
#informationAboutMe {
  color: #fff;
  text-shadow: 0 0 20px #fff, 0 0 30px blue, 0 0 40px blue, 0 0 50px blue,
    0 0 60px blue, 0 0 70px #ff4da6, 0 0 80px #ff4da6;
}
</style>