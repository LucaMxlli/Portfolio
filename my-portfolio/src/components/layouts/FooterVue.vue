<template>
  <footer class="footer bottom" id="bg">
    <div id="footerText" class="container">
      <span class="text-white">Made with </span>
      <span id="heart" class="text-white">❤</span>
    </div>
    <div id="symbols">
      <a
        href="https://github.com/LucaMxlli"
        id="gitSymbol"
        class="fa fa-github fs-4 text-decoration-none mx-2 pt-3 text-white symbols"
      ></a>
      <a
        href="https://www.instagram.com/luca_mxlli/"
        id="instaSymbol"
        class="fa fa-instagram fs-3 text-decoration-none mx-2 text-white symbols"
      ></a>
      <a
        href="https://www.linkedin.com/in/luca-malli-013453231/"
        id="linkedinSymbol"
        class="fa fa-linkedin fs-3 text-decoration-none mx-2 text-white symbols"
      ></a>
  
    </div>
  </footer>
</template>

<script>
export default {
  setup() {},
};
</script>
<style>
footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  background-color: #030012 !important;
  background-size: cover;
}

#heart:hover {
  color: aqua !important;
}
.symbols:hover{
  color: cyan !important
}

</style>