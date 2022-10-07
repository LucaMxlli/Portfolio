<template>
 <nav class="navbar navbar-expand-lg navbar-light fixed-top">
    <img id="img" src="../../assets/test.png" class="mx-4" alt="" />
    <span class="text-white fs-3 text mx-1"
      ><router-link class="nav-link link-light mx-2" to="/"
        >Luca Malli</router-link
      ></span
    >

    <button
      class="navbar-toggler bg-dark"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon bg-dark"></span>
    </button>
    <div class="collapse navbar-collapse fs-5" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link class="nav-link link-light mx-2" to="/school"
            >School</router-link
          >
        </li>
        <li class="nav-item">
          <router-link class="nav-link link-light mx-2" to="/projects"
            >Projects</router-link
          >
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
#img {
  width: 50px;
  height: 30px;
}
.nav-item {
  border-radius: 2rem;
}
nav {
  background-color: #030012 !important;
}

.navbar-collapse.in {
    display: block !important;
}
</style>