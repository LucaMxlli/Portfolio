<template>
  <footer class="footer bottom bg-dark">
    <div id="symbols">
      <a
        href="#"
        id="gitSymbol"
        class="fa fa-github fs-4 text-decoration-none mx-2"
      ></a>
      <a
        href="#"
        id="instaSymbol"
        class="fa fa-instagram fs-3 text-decoration-none mx-2"
      ></a>
      <a
        href="#"
        id="linkedinSymbol"
        class="fa fa-linkedin fs-3 text-decoration-none mx-2"
      ></a>
    </div>
  </footer>
</template>

<style>
footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 50px; /* Height of the footer */
}
#gitSymbol {
  color: black;
  border-radius: 15%;
}
#instaSymbol {
  color: black;
  border-radius: 15%;
}
#linkedinSymbol {
  color: black;
  border-radius: 15%;
}

#gitSymbol:hover {
  background-color: grey;
  transition: 0.5s;
}
#linkedinSymbol:hover {
  background-color: grey;
  transition: 0.5s;
}
#instaSymbol:hover {
  background-color: grey;
  transition: 0.5s;
}
</style>