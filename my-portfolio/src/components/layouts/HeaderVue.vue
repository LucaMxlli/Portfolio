<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-dark fixed-top">
    <span class="text-white fs-2 text mx-3">Luca Malli</span>

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
        <li class="nav-item active">
          <a class="nav-link text-white mx-2" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-white mx-2" href="#">School</a>
        </li>
        <li class="nav-item">
          <a class="nav-link link-light mx-2" href="#">Projects</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<style >
.nav-item:hover {
  background: grey !important;
  transition: 0.5s;
}
.nav-item{
     border-radius: 15%;
}
</style>