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
        />
        <!-- This work is based on "Baby Yoda (Grogu)" (https://sketchfab.com/3d-models/baby-yoda-grogu-485192995fea4845a92b3fd92b8b188e) by mister dude (https://sketchfab.com/misterdude) licensed under CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/) -->
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