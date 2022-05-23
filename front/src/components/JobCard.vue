<template>
    <div class="card-job col-12 col-md-4 col-sm-6 col-lg-3 p-3">
      <div class="content ">
        <div class="front">
          <div class="img-job">
            <img :src="job.img" alt="">
          </div>
          <h6 class="mt-3 mb-5 text-center fw-regular">{{job.title}}</h6>
          <p class="badge bg-dark py-2 px-3">{{job.contract}}</p>
          <div class="location d-flex justify-content-center align-items-center">
            <i class="fa-solid fa-location-dot me-3"></i>
            <p class="mb-0">{{job.location}}</p>
          </div>
        </div>
        <div class="back  p-4 text-start">
          <p>{{job.description}}</p>

          <div class="d-flex justify-content-start align-items-center">
            <i class="fa-solid fa-brazilian-real-sign"></i>
            <p class="mb-0 ms-2 fw-bold">{{job.salary}}</p>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'JobCard',
  props: {
    job: Object
  }
}
</script>

<style scoped>
  .card-job{
    position: relative;
    cursor: pointer;
    perspective: 900px;
    min-height: 380px;
    z-index: 1;
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
    box-shadow: 0 51px 37px -37px #00000010;

  }
  .front .img-job{
    height: 100px;
    width: 100px;
    margin: 20px auto;
    background: #f1f1f1;
    border-radius: 15px;
    overflow: hidden;
  }
  .front .img-job img{
    height: 100%;
    width: 100%;
    object-fit: scale-down;
  }
  .back {
    height: 100%;
    transform: rotateY( 180deg );
    background-color: #ffffff;
  }
  .location{
    width: fit-content;
    margin: 0 auto;
    background-color: #f6f6f6;
    padding: 5px 10px;
    border-radius: 10px;
  }
  .location p{
    font-size: 0.9em;
    font-weight: 500;
    color: #00183d;
  }
</style>