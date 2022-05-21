<template>
<div>
  <div class="bg-blue banner">
    <div class="d-flex justify-content-center align-items-center">
      <h1 class="mb-0 text-dark fw-bolder fs-1">Encontre a vaga dos seus sonhos</h1>
      <img src="./assets/searching-jobs.png" alt="" width="600">
    </div>
  </div>
  <JobPanelVue color="#f1f1f1"></JobPanelVue>
  <div class="dinheiro ">
    <p>Empregos bons</p>
    <img src="./assets/money.png" alt="">
  </div>
</div>
</template>

<script>
import JobPanelVue from './components/JobPanel.vue'
export default {
  name: 'App',
  components: {
    JobPanelVue
  }
}
</script>

<style>
.bg-blue{
      border-radius: 0 0 25px 25px;
      overflow: hidden;
  background-image: linear-gradient(to right, #1c41e61c, #e47b3e2c, #1ce61c1a);
  background: #1572ff;
}
.banner{
  height: 450px;
  position: relative;
}
.banner img{
  position: absolute;
  bottom: -50px;
  right: -50px;
}
#app {
  font-family: Poppins !important;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.radius{
    border-radius: 10px;
}

.dinheiro{
  position: absolute;
  transform: rotatex( 15deg ) rotateY(20deg) rotateZ(-20deg); 
  top: 20px;
  left: 50px;
  width: 200px;
  height: 200px;
  border-radius: 20px;
  background-color: #ffffff;
  box-shadow: 0px 0px 20px #000000a8;
}
.dinheiro img{
  width: 150px;
}
</style>
