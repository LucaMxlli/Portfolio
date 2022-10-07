<template>
  <div>
    <h1 id="myProjects" class="pt-4 text-light">
      Projects <img src="../../assets/darth_vader.png" id="vader" />
    </h1>  
      <h3 class="pt-5">Coming soon :)</h3>
    </div>
</template>

<script>
export default {};
</script>

<style>
#vader {
  height: 100px;
  width: 100px;
}

h1 {
  box-shadow: 0 0 20px #fff, 0 0 30px red, 0 0 40px red, 0 0 50px red,
    0 0 60px blue, 0 0 70px #ff4da6, 0 0 80px #ff4da6;
}


#card {
  background-color: black;
  box-shadow: 10px 10px 10px rgb(97, 255, 250);
  display: flex;
  background-color: #333 ;
  border-radius: 15px;
  height: fit-content;
}

#card:hover{
    transition: 0.5s;
    transform: scale(1.2);
}

svg:hover{
  transform: scale(1.2);
  transition: 0.3s;
}

svg:not(:hover){
  transform: scale(1.0);
  transition: 0.3s;
}

#card:not(:hover){
    transition: 0.5s;
    transform: scale(1);
}

#info:hover{
  transition: 0.3s;
  transform: scale(1.1);
}

#info:not(:hover){
  transition: 0.3s;
  transform: scale(1.0);
}


.projectInfo {
  margin: 10% !important;
  color: white;
}
</style>