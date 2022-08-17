<template>
  <Renderer ref="renderer" orbit-ctrl width="600px" height="600px">
    <Camera :position="{ x: -10, z: -20 }" />
    <Scene background="#fff">
      <PointLight color="white" :position="{ x: 100, y: 1000, z: 40 }" :intensity="4" />
      <GltfModel src="/models/star-wars/scene.gltf" ref="box" @load="onReady"  />
    </Scene>
  </Renderer>
</template>

<script>
import { Camera, PointLight, Renderer, Scene, GltfModel } from "troisjs";
export default {
  components: { Camera, PointLight, Renderer, Scene, GltfModel },
  setup() {
    function onReady(e) {
      console.log("render is ready ", e);
    }
    return onReady();
  },
  mounted(){
  }
  
};
</script>
