<template>
  <div>
    <h3 @mouseover="aler()">🠗 Some information about me 🠗</h3>
    <div v-if="isActive" id="aboutMe" class="container pt-4">
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
    aler: function () {
      this.isActive = true;
    },
  },
};
</script>

<style>
h3 {
  color: #fff;
  text-shadow: 0 0 20px #fff, 0 0 30px blue, 0 0 40px blue, 0 0 50px blue,
    0 0 60px blue, 0 0 70px #ff4da6, 0 0 80px #ff4da6;
}
</style>