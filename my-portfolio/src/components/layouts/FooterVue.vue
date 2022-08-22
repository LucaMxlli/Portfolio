<template>
  <footer class="footer bottom" id="bg">
    <div id="symbols">
      <a
        href="https://github.com/LucaMxlli"
        id="gitSymbol"
        class="fa fa-github fs-4 text-decoration-none mx-2 pt-3 text-white"
      ></a>
      <a
        href="https://www.instagram.com/luca_mxlli/"
        id="instaSymbol"
        class="fa fa-instagram fs-3 text-decoration-none mx-2 text-white"
      ></a>
      <a
        href="https://www.linkedin.com/in/luca-malli-013453231/"
        id="linkedinSymbol"
        class="fa fa-linkedin fs-3 text-decoration-none mx-2 text-white"
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
  background-color: #0F111A !important;
  height: 50px; /* Height of the footer */
}
#gitSymbol {
  border-radius: 15%;
}
#instaSymbol {
  border-radius: 15%;
}
#linkedinSymbol {
  border-radius: 15%;
}

#gitSymbol:hover {
  background-color: grey;
  transition: 0.3s;
}
#linkedinSymbol:hover {
  background-color: grey;
  transition: 0.3s;
}
#instaSymbol:hover {
  background-color: grey;
  transition: 0.3s;
}

</style>