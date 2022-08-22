<template>
  <div id="card">
    <div class="container p-3" id="infos">
      <ul id="list">
        <li>I attend to the HTBLA Kaindorf</li>
        <li  class="pt-1">I'm a passionated programmer</li>
        <li  class="pt-1"><span>I'm 16 years old</span></li>
        <li class="pt-1">
          <span>I love Star Wars :)</span>
          <img
            src="../../assets/yoda_icon.svg"
            id="yoda"
            alt="yoda"
          />
          
        </li>
      </ul>
    </div>
  </div>
</template>

<style>
#card {
  background-color: black;
  margin-left: 30%;
  margin-right: 30%;
  border-radius: 30px;
  box-shadow: 10px 10px 10px rgb(97, 255, 250);
  position: relative;
}
#infos {
  text-align: left;

  font-size: x-large;
}
#yoda {
  max-width: 64px;
  max-height: 40px;
}
</style>