<template>
  <nav class="navbar navbar-expand-lg navbar-light fixed-top">
    <img id="img" src="../../assets/test.png" class="mx-4" alt="">
    <span class="text-white fs-3 text mx-1"><a class="nav-link" href="#/">Luca Malli</a></span>

    <button
      class="navbar-toggler bg-light"
      type="button"
      data-toggle="collapse" 
      data-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon bg-white"></span>
    </button>
    <div class="collapse navbar-collapse fs-5" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link text-white mx-2" href="#/school">School</a>
        </li>
        <li class="nav-item">
          <a class="nav-link link-light mx-2" href="#/projects">Projects</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<style >
.nav-item:hover {
  background: grey !important;
  transition: 0.3s;
}
#img{
    width: 50px;
    height: 30px;
}
.nav-item{
     border-radius: 2rem;
}
nav{
  background-color: #030012 !important;
}
</style>