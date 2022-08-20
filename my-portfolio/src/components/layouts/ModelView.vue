<template class>
  <div class="">
    <Renderer
      ref="renderer"
      alpha
      near
      shadow
      antialias
      orbit-ctrl
      width="200px"
      height="290px"
    >
        
      <Camera :position="{ x: -10, z: -20 }" />
      <Scene>
        <PointLight
          color="white"
          :position="{ x: 100, y: 1000, z: 40 }"
          :intensity="6"
        />
        <GltfModel
          :scale="{ x: 2, y: 2, z: 2 }"
          :rotation="{x: 0, y:3.7, z:13}"
          src="/models/star-wars-yoda/scene.gltf"
          ref="box"
          id="box"
          @load="onReady"
        />++
      </Scene>
    </Renderer>
  </div>
</template>

<script>
import { Camera, PointLight, Renderer, Scene, GltfModel } from "troisjs";

export default {
  components: { Camera, PointLight, Renderer, Scene, GltfModel },
  setup() {},

  mounted() {},
};
</script>

<style>
#box {
  z-index: 0;
}
body {
  background-image: url("../../assets/background.jpg");
  background-attachment: scroll;
  background-repeat: no-repeat;
  background-size: cover;
}
#text {
  color: #ffd54e;
}
</style>