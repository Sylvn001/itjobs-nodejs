<template>
    <div class="card-job col-3 p-3">
      <div class="content ">
        <div class="front">
          <img class="mt-3" src="../assets/using-computer.png" width="110" alt="" srcset="">
          <h4 class=" my-3 text-center">Analista de Suporte</h4>
          <p class="badge bg-dark py-2 px-3">CLT</p>
          <div class="mb-3 d-flex justify-content-center align-items-center bg-white rounded col-auto">
            <i class="fa-solid fa-location-dot me-3"></i>
            <p class="mb-0">SP - Presidente Prudente</p>
          </div>
        </div>

        <div class="back">
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet, explicabo velit? Commodi non fugit dolor? Aspernatur voluptatum minima beatae et repudiandae. Maiores enim pariatur velit tenetur cupiditate natus voluptas quidem.</p>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'JobCard',
  props: {
    msg: String
  }
}
</script>

<style scoped>
  .card-job{
    position: relative;
    cursor: pointer;
    top: -50px;
    perspective: 900px;
    min-height: 380px;
  }
  .card-job:hover .content {
    transition: transform 0.4s;
    transform: rotateY( 180deg ) ;
  }
  .content {
    transition: transform 0.4s;
    transition-timing-function: cubic-bezier(0.49, 0.44, 0.26, 1.27);
    transform-style: preserve-3d;
    width: 100%;
    height: 100%;
  }
  .front,
  .back {
    position: absolute;
    backface-visibility: hidden;
    height: 100%;
    width: 100%;
    background: white;
    border-radius: 15px;
  }
  .front img{
    filter: drop-shadow(0 15px 31px #000000a8);
  }
  .back {
    height: 100%;
    transform: rotateY( 180deg );
    background-color: #ffffff;
  }
</style>