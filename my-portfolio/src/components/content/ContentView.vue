<template>
  <div>
    <div class="container">
      <p id="name">Luca Malli</p>
      <img src="../../assets/star-wars-g133253602_1920.png" id="lightsaber" />
    </div>
  </div>
</template>

<style>
h3,
p,
span,
h2 {
  color: #ffd54e;
  z-index: 3;
  position: relative;
}
#name {
  top: 15%;
  left: 50%;
  transform: translate(-50%, -50%);
  justify-content: center;
  position: absolute;
  font-size: xx-large;
  color: white
  ;
}
#name:hover{
  color: aquamarine;
}
#lightsaber {
  width: 100%;
  max-width: 800px;
  max-height: 500px;
  position: relative;
}
</style>